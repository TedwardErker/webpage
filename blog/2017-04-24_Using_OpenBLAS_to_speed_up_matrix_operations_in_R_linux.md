- [Getting OpenBLAS](#org2caf64b)
  - [Pointing R to use OpenBLAS](#org69dfec3)
  - [Benchmark Test](#orgcbbcac9)
    - [Default BLAS](#org63af0aa)
    - [OpenBLAS](#orgec83b20)
  - [Next things](#orgc5924c1)

I use the `foreach` and `doParallel` packages in R to speed up my work that can be easily parallelized. However, sometimes work can't be easily parallelized and things are slower than I'd like. An example of this might be fitting a single very large and complex model. Andy Finley, who resently stopped by UW-Madison to give a workshop on hierarchical modeling, taught us about [OpenBLAS](http://www.openblas.net) as a way to speed up matrix operations in R. Here are the [notes](http://blue.for.msu.edu/WISC17/slides/CompNotes.pdf) about computing from the workshop.

BLAS is Basic Linear Algebra Subprograms. R and other higher level languages call BLAS to do matrix operations. There are other versions of BLAS, such as OpenBLAS, which are faster than the default BLAS that comes with R because they are able to take advantage of multiple cores in a machine. This is the extent of my knowledge on the topic.

Below is how I installed OpenBLAS locally on our linux server and pointed R to use the OpenBLAS instead of its default BLAS. A benchmark test follows.


<a id="org2caf64b"></a>

# Getting OpenBLAS

```sh
cd src                         # move to src directory to download source code
wget http://github.com/xianyi/OpenBLAS/archive/v0.2.19.tar.gz    # your version may be different
tar xzf v0.2.19.tar.gz
cd OpenBLAS-0.2.19/
make clean
make USE_OPENMP=1               #OPENMP is a threading library recommended by Andy Finley
mkdir /home/erker/local
make PREFIX=/home/erker/local install       # You will have to change your install location
```


<a id="org69dfec3"></a>

# Pointing R to use OpenBLAS

I have R installed in my `~/local` directory. libRblas.so is the default BLAS that comes with R. For me it is located in `~/local/lib/R/lib`. Getting R to use OpenBLAS is as simple as changing the name of the default BLAS and creating a link in its place that points to OpenBLAS:

```sh
mv libRblas.so libRblas_default.so
ln -s ~/local/lib/libopenblas.so libRblas.so
```

Deleting the link and reverting the name of the default BLAS, will make R use the default BLAS again. Something like:

```sh
rm libRblas.so
mv libRblas_default.so libRblas.so
```


<a id="orgcbbcac9"></a>

# Benchmark Test

I copied how to do this benchmark test from [here](http://edustatistics.org/nathanvan/2013/07/09/for-faster-r-use-openblas-instead-better-than-atlas-trivial-to-switch-to-on-ubuntu/). The benchmark test time was cut from about 146 to about 38 seconds on our server. This is a very significant speed up. Thank you OpenBLAS and Andy Finley.


<a id="org63af0aa"></a>

## Default BLAS

```sh
curl http://r.research.att.com/benchmarks/R-benchmark-25.R -O
cat R-benchmark-25.R | time R --slave
```

    Loading required package: Matrix
    Loading required package: SuppDists
    Warning messages:
    1: In remove("a", "b") : object 'a' not found
    2: In remove("a", "b") : object 'b' not found


    R Benchmark 2.5
    ===============
    Number of times each test is run__________________________:  3

    I. Matrix calculation
    ---------------------
    Creation, transp., deformation of a 2500x2500 matrix (sec):  0.671333333333333
    2400x2400 normal distributed random matrix ^1000____ (sec):  0.499666666666667
    Sorting of 7,000,000 random values__________________ (sec):  0.701666666666667
    2800x2800 cross-product matrix (b = a' * a)_________ (sec):  10.408
    Linear regr. over a 3000x3000 matrix (c = a \ b')___ (sec):  4.877
    --------------------------------------------
    Trimmed geom. mean (2 extremes eliminated):  1.31949354763381

    II. Matrix functions
    --------------------
    FFT over 2,400,000 random values____________________ (sec):  0.220333333333334
    Eigenvalues of a 640x640 random matrix______________ (sec):  0.717666666666664
    Determinant of a 2500x2500 random matrix____________ (sec):  3.127
    Cholesky decomposition of a 3000x3000 matrix________ (sec):  4.15
    Inverse of a 1600x1600 random matrix________________ (sec):  2.364
    --------------------------------------------
    Trimmed geom. mean (2 extremes eliminated):  1.74407855808281

    III. Programmation
    ------------------
    3,500,000 Fibonacci numbers calculation (vector calc)(sec):  0.503999999999981
    Creation of a 3000x3000 Hilbert matrix (matrix calc) (sec):  0.259999999999991
    Grand common divisors of 400,000 pairs (recursion)__ (sec):  0.301000000000007
    Creation of a 500x500 Toeplitz matrix (loops)_______ (sec):  0.0393333333333317
    Escoufier's method on a 45x45 matrix (mixed)________ (sec):  0.305999999999983
    --------------------------------------------
    Trimmed geom. mean (2 extremes eliminated):  0.288239673174189


    Total time for all 15 tests_________________________ (sec):  29.147
    Overall mean (sum of I, II and III trimmed means/3)_ (sec):  0.87211888350174
    --- End of test ---

    144.64user 0.94system 2:25.59elapsed 99%CPU (0avgtext+0avgdata 454464maxresident)k
    0inputs+0outputs (0major+290577minor)pagefaults 0swaps


<a id="orgec83b20"></a>

## OpenBLAS

```sh
cat R-benchmark-25.R | time R --slave
```

    Loading required package: Matrix
    Loading required package: SuppDists
    Warning messages:
    1: In remove("a", "b") : object 'a' not found
    2: In remove("a", "b") : object 'b' not found


    R Benchmark 2.5
    ===============
    Number of times each test is run__________________________:  3

    I. Matrix calculation
    ---------------------
    Creation, transp., deformation of a 2500x2500 matrix (sec):  0.689666666666667
    2400x2400 normal distributed random matrix ^1000____ (sec):  0.499
    Sorting of 7,000,000 random values__________________ (sec):  0.701
    2800x2800 cross-product matrix (b = a' * a)_________ (sec):  0.163000000000001
    Linear regr. over a 3000x3000 matrix (c = a \ b')___ (sec):  0.228
    --------------------------------------------
    Trimmed geom. mean (2 extremes eliminated):  0.428112796718245

    II. Matrix functions
    --------------------
    FFT over 2,400,000 random values____________________ (sec):  0.224333333333332
    Eigenvalues of a 640x640 random matrix______________ (sec):  1.35366666666667
    Determinant of a 2500x2500 random matrix____________ (sec):  0.140666666666667
    Cholesky decomposition of a 3000x3000 matrix________ (sec):  0.280333333333332
    Inverse of a 1600x1600 random matrix________________ (sec):  0.247000000000001
    --------------------------------------------
    Trimmed geom. mean (2 extremes eliminated):  0.249510313157146

    III. Programmation
    ------------------
    3,500,000 Fibonacci numbers calculation (vector calc)(sec):  0.505000000000001
    Creation of a 3000x3000 Hilbert matrix (matrix calc) (sec):  0.259333333333333
    Grand common divisors of 400,000 pairs (recursion)__ (sec):  0.299333333333332
    Creation of a 500x500 Toeplitz matrix (loops)_______ (sec):  0.039333333333334
    Escoufier's method on a 45x45 matrix (mixed)________ (sec):  0.256999999999998
    --------------------------------------------
    Trimmed geom. mean (2 extremes eliminated):  0.271216130718114


    Total time for all 15 tests_________________________ (sec):  5.88666666666666
    Overall mean (sum of I, II and III trimmed means/3)_ (sec):  0.30712894095638
    --- End of test ---

    176.85user 12.20system 0:38.00elapsed 497%CPU (0avgtext+0avgdata 561188maxresident)k
    0inputs+0outputs (0major+320321minor)pagefaults 0swaps


<a id="orgc5924c1"></a>

# Next things

From comments [here](http://edustatistics.org/nathanvan/2013/07/09/for-faster-r-use-openblas-instead-better-than-atlas-trivial-to-switch-to-on-ubuntu/), I have heard that OpenBLAS doesn't play well with `foreach` and `doParallel`. I will have to test these next. If it is an issue, I may have to include a shell code chunk in a literate program to change between BLAS libraries.
