- [Create the interactive submit file.  Mine is called `interactive_BuildR.sub`](#org3078d80)
  - [transfer interactive submit file to condor submit node](#org5a58066)
  - [log into submit node and submit job](#orga6ecf9f)
  - [wait for job to start](#org9fa163c)
  - [Installing GDAL, Proj4, Geos](#org9c17793)
    - [GDAL: Download, configure, make, make install gdal, then tar it up](#orge8db1df)
    - [Proj4: Download, configure, make, make install proj4 then tar it up](#orgc847789)
    - [Geos:](#org5a441aa)
  - [Add libs to `LD_LIBRARY_PATH`](#org30a103a)
  - [R: download, untar and move into R source directory, configure, make, make install](#org758b8fb)
  - [Install R packages](#org0c5383b)
  - [Edit the R executable](#org6b33439)
  - [Move R installation to main directory and Tar so that it will be returned to submit node](#org64f83a6)
  - [Exit the interactive job](#org16e3a91)

**NOTE**

**This post is obsolete. Use Docker as the chtc website now recommends**

R is the language I use most often for my work. The spatial packages of R that I use very frequently like rgdal, rgeos, and gdalUtils depend on external software, namely gdal, proj4, and geos.

Here I show how I installed gdal, proj4, and geos on chtc, and pointed the R packages to these so that they install correctly.

The R part of this tutorial comes from [chtc's website](http://chtc.cs.wisc.edu/r-jobs.shtml). Their site should be considered authoritative. I quote them heavily below. My effort here is to help people in the future (including myself) to install gdal etc. on chtc.


<a id="org3078d80"></a>

# Create the interactive submit file.  Mine is called `interactive_BuildR.sub`

I save it in a directory called "Learn\_CHTC"

```sh
universe = vanilla
# Name the log file:
log = interactive.log

# Name the files where standard output and error should be saved:
output = process.out
error = process.err

# If you wish to compile code, you'll need the below lines.
#  Otherwise, LEAVE THEM OUT if you just want to interactively test!
+IsBuildJob = true
requirements = (OpSysAndVer =?= "SL6") && ( IsBuildSlot == true )

# Indicate all files that need to go into the interactive job session,
#  including any tar files that you prepared:
# transfer_input_files = R-3.2.5.tar.gz, gdal.tar.gz
# I comment out the transfer_input_files line because I download tar.gz's from compute node

# It's still important to request enough computing resources. The below
#  values are a good starting point, but consider your file sizes for an
#  estimate of "disk" and use any other information you might have
#  for "memory" and/or "cpus".
request_cpus = 1
request_memory = 1GB
request_disk = 1GB

queue

```


<a id="org5a58066"></a>

# transfer interactive submit file to condor submit node

change `erker` to your username and if you don't use `submit-3`, change that too. You'll have to be inside the directory that contains "interactive\_BuildR.sub" for this to work.

```sh
rsync -avz interactive_BuildR.sub erker@submit-3.chtc.wisc.edu:~/
```


<a id="orga6ecf9f"></a>

# log into submit node and submit job

```sh
ssh submit-3.chtc.wisc.edu
condor_submit -i interactive_BuildR.sub
```


<a id="org9fa163c"></a>

# wait for job to start


<a id="org9c17793"></a>

# Installing GDAL, Proj4, Geos

Each install is slightly different, but follows the same pattern. This worked for me on this date, but may not work in the future.


<a id="orge8db1df"></a>

## GDAL: Download, configure, make, make install gdal, then tar it up

```sh
wget http://download.osgeo.org/gdal/gdal-1.9.2.tar.gz # download gdal tarball
tar -xzf gdal-1.9.2.tar.gz # unzip it
mkdir gdal # create a directory to install gdal into
dir_for_build=$(pwd) # create a variable to indicate this directory (gdal doesn't like relative paths)
cd gdal-1.9.2 # go into the unzipped gdal directory
./autogen.sh # run autogen.sh
./configure --prefix=$dir_for_build/gdal # run configure, pointing gdal to be installed in the directory you just created (You'll have to change the path)
make
make install
cd ..
tar -czf gdal.tar.gz gdal #zip up your gdal installation to send back and forth between compute and submit nodes
```


<a id="orgc847789"></a>

## Proj4: Download, configure, make, make install proj4 then tar it up

```sh
wget https://github.com/OSGeo/proj.4/archive/master.zip
unzip master.zip
mkdir proj4
cd proj.4-master
./autogen.sh
./configure --prefix=$dir_for_build/proj4
make
make install
cd ..
tar -czf proj4.tar.gz proj4
```


<a id="org5a441aa"></a>

## Geos:

```sh
wget http://download.osgeo.org/geos/geos-3.6.0.tar.bz2
tar -xjf geos-3.6.0.tar.bz2 # need to use the "j" argumnet because .bz2 not gz
mkdir geos
cd geos-3.6.0
./configure --prefix=$dir_for_build/geos # no autogen.sh
make
make install
cd ..
tar -czf geos.tar.gz geos

```


<a id="org30a103a"></a>

# Add libs to `LD_LIBRARY_PATH`

I don't actually know what this path is exactly, but adding `gdal/lib`, `proj4/lib`, and `geos/lib` to the `LD_LIBRARY_PATH` resolved errors I had related to files not being found when installing in R. For rgdal the error was

```R
Error in dyn.load(file, DLLpath = DLLpath, ...) :
unable to load shared object '/home/erker/R-3.2.5/library/rgdal/libs/rgdal.
```

and lines like this:

```R
...
./proj_conf_test: error while loading shared libraries: libproj.so.12: cannot open shared object file: No such file or directory
...
proj_conf_test.c:3: error: conflicting types for 'pj_open_lib'
/home/erker/proj4/include/proj_api.h:169: note: previous declaration of 'pj_open_lib' was here
./proj_conf_test: error while loading shared libraries: libproj.so.12: cannot open shared object file: No such file or directory
...
```

For rgeos the error was

```R
"configure: error: cannot run C compiled programs"
```

Run this to fix these errors

```sh
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$(pwd)/gdal/lib:$(pwd)/proj4/lib # this is to install rgdal properly
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$(pwd)/geos/lib # and rgeos
```

If you run:

```sh
echo $LD_LIBRARY_PATH
```

The output should look something like

```sh
:/var/lib/condor/execute/slot1/dir_2924969/gdal/lib:/var/lib/condor/execute/slot1/dir_2924969/proj4/lib:/var/lib/condor/execute/slot1/dir_2924969/geos/lib
```


<a id="org758b8fb"></a>

# R: download, untar and move into R source directory, configure, make, make install

As of <span class="timestamp-wrapper"><span class="timestamp">[2016-10-25 Tue] </span></span> R 3.3.0 or higher isn't supported on chtc

```sh
wget https://cran.r-project.org/src/base/R-3/R-3.2.5.tar.gz
tar -xzf R-3.2.5.tar.gz
cd R-3.2.5
./configure --prefix=$(pwd)
make
make install
cd ..
```


<a id="org0c5383b"></a>

# Install R packages

The installation steps above should have generated an R installation in the lib64 subdirectory of the installation directory. We can start R by typing the path to that installation, like so:

```sh
R-3.2.5/lib64/R/bin/R
```

This should open up an R console, which is how we're going to install any extra R libraries. Install each of the library packages your code needs by using R's install.packages command. Use HTTP, not HTTPS for your CRAN mirror. I always download from wustl, my alma mater. For rgdal and rgeos you need to point the package to gdal, proj4 and geos using configure.args

Change your vector of packages according to your needs.

```R

install.packages('rgdal', type = "source", configure.args=c(
     paste0('--with-gdal-config=',getwd(),'/gdal/bin/gdal-config'),
     paste0('--with-proj-include=',getwd(),'/proj4/include'),
     paste0('--with-proj-lib=',getwd(),'/proj4/lib')))

install.packages("rgeos", type = "source", configure.args=c(paste0("--with-geos-config=",getwd(),"/geos/bin/geos-config")))

      install.packages(c("gdalUtils",
                         "mlr",
                         "broom",
                         "raster",
                         "plyr",
                         "ggplot2",
                         "dplyr",
                         "tidyr",
                         "stringr",
                         "foreach",
                         "doParallel",
                         "glcm",
                         "randomForest",
                         "kernlab",
                         "irace",
                         "parallelMap",
                         "e1071",
                         "FSelector",
                         "lubridate",
                         "adabag",
                         "gbm"))

```

Exit R when packages installed

```R
q()
```


<a id="org6b33439"></a>

# Edit the R executable

```sh
nano R-3.2.5/lib64/R/bin/R
```

The above will open up the main R executable. You will need to change the first line, from something like:

```sh
R_HOME_DIR=/var/lib/condor/execute/slot1/dir_554715/R-3.1.0/lib64/R
```

to

```sh
R_HOME_DIR=$(pwd)/R
```

Save and close the file. (In nano, this will be CTRL-O, followed by CTRL-X.)


<a id="org64f83a6"></a>

# Move R installation to main directory and Tar so that it will be returned to submit node

```R
mv R-3.2.5/lib64/R ./
tar -czvf R.tar.gz R/
```


<a id="org16e3a91"></a>

# Exit the interactive job

```sh
exit
```

Upon exiting, the tar.gz files created should be sent back to your submit node
