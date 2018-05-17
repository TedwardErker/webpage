$(function () {
    // Outbound Link Tracking with Google Analytics
    // Requires jQuery 1.7 or higher (use .live if using a lower version)
    // http://wptheming.com/2012/01/tracking-outbound-links-with-google-analytics/
    // Modified for GA universal: https://support.google.com/analytics/answer/1136920?hl=en
    $('body').on('click', 'a', function (e) {
        var url = $(this).attr("href");
        if (url && !url.indexOf('javascript') == 0 && e.currentTarget.hostname != window.location.host && url.indexOf('twitter') == -1) {
            e.preventDefault();
            ga('send', 'event', 'outbound', e.currentTarget.hostname, url, {
                'hitCallback': function () {
                    document.location = url;
                }
            });
        }
    });
});

// Initialize bootstrap tooltips
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip({ delay: { show: 50, hide: 1000 }, html: true });
});

//Check to see if bootstrap breakpoint is active
function isBreakpoint(alias) {
    return $('.device-' + alias).is(':visible');
}

var waitForFinalEvent = function () { var b = {}; return function (c, d, a) { a || (a = "I am a banana!"); b[a] && clearTimeout(b[a]); b[a] = setTimeout(c, d) } }();
var fullDateString = new Date();
//End Bootstrap 

//Form Validation
function frmValidateContact(formName) {
    var data = $(formName).serialize();
}
// End Form Validation

function getURLFromA(what) {
    return $(what).attr('href');
}
function getACURLOmni(f, l, v, q) {
    return "/acOmni.aspx?l=" + l + "&f=" + f + "&v=" + v + "&u=1&q=" + q;
}

$(document).ready(function () {
       // NAV BAR
        //Set the menu to sticky when the menu reaches the top of the screen.var menu = $('.navbar');
        var $header = $("#navbar");
        var $clone = $header.clone(true, true).addClass("clone").addClass("hidden-print");
        $clone.find(".nlow").remove();
        $($clone).find("*").each(function (index, element) {   // And all inner elements.
            if (element.id) {
                element.id = element.id + "_1";
                //var matches = element.id.match(/(.+)_\d+/);
                //if (matches && matches.length >= 2)            // Captures start at [1].
                //    element.id = matches[1] + "_" + cur_num;
            }
        });
        $header.before($clone);

        $(window).on("scroll", function () {
            var fromTop = $(window).scrollTop();
            $("body").toggleClass("down", (fromTop > 150));
        });

        if ($(document).width() < 500) {
            $('.btnFIPS').hide();
        }
        else {
            $('.btnFIPS').show();
        }
        // END NAV BAR
  
    // typeahead.js -- Autocomplete
    var bh = new Bloodhound({
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.n);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: getACURLOmni(((typeof (_acoFIPS) == "undefined") ? "" : _acoFIPS), ((typeof (_acoL) == "undefined") ? "" : _acoL), ((typeof (_acVax) == "undefined") ? "" : _acVax, "")),
            prepare: function (query, settings) {
                settings.url = getACURLOmni(((typeof (_acoFIPS) == "undefined") ? "" : _acoFIPS), ((typeof (_acoL) == "undefined") ? "" : _acoL), ((typeof (_acVax) == "undefined") ? "" : _acVax, ""), query);
                return settings;
            }
        }
    }
   );

    var bhGlobal = new Bloodhound({
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.n);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: getACURLOmni("", "", "", ""),
            prepare: function (query, settings) {
                settings.url = getACURLOmni("", "", "", query);
                return settings;
            }
        }
    }
);


    $('.typeahead, .typeaheadr').typeahead(
        {
            minLength: 2,
            highlight: true
        }
        ,
        {
            name: 'acQuery',
            display: 'n',
            source: bh,
            limit: 10
        }
   );

    $('.typeaheadG').typeahead(
   {
       minLength: 2,
       highlight: true
   }
   ,
   {
       name: 'acQuery',
       display: 'n',
       source: bhGlobal,
       limit: 10
   }
);

    //Respond when an autocomplete item is selected
    $('.typeahead, .typeaheadG').bind('typeahead:select', function (ev, suggestion) {
        window.location.href = suggestion.u;
    });
    //Auto complete only seems to work on a TAB keypress
    $('.typeahead, .typeaheadG').bind('typeahead:autocomplete', function (ev, suggestion) {
        window.location.href = suggestion.u;
    });

    //Respond when an autocomplete item is selected
    $('.typeaheadr').bind('typeahead:select', function (ev, suggestion) {
        cbACO(suggestion, null);
        r2Update(r2p, slTable);
    });
    //Auto complete only seems to work on a TAB keypress
    $('.typeaheadr').bind('typeahead:autocomplete', function (ev, suggestion) {
        cbACO(suggestion, null);
        r2Update(r2p, slTable);
    });

    $(".typeahead, .typeaheadr, .typeaheadG").focus(function () {
        $(this).select();

        //set flag for preventing MOUSEUP event....
        $(this).data("preventMouseUp", true);
    });

    //Select text on click or focus
    // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
    $(".typeahead, .typeaheadr, .typeaheadG").mouseup(function (e) {
        var preventEvent = $(this).data("preventMouseUp");

        //only prevent default if the flag is TRUE
        if (preventEvent) {
            e.preventDefault();
        }

        //reset flag so MOUSEUP event deselect the text
        $(this).data("preventMouseUp", false);
    });
});

var inputFieldAC;
function acSubmit(div) {
    //CHeck to see if autocomplete dropdown is open. If so, choose the first item in the dd
    if ($(div.selector + " .tt-suggestion:first-child").length == 1) {
        //Click it, which will submit
        $(div.selector + " .tt-suggestion:first-child").trigger('click');
    }
    else {
        //Get the input field -- something may have been typed that isn't autocorrect
        inputFieldAC = $(div).find('input.tt-input').val();
        
        if (inputFieldAC != '') {
            //Geocode this:
            geoCode(inputFieldAC, geoCodeCB);
        }
    }
}

//function acSubmitRank(div) {
//    //CHeck to see if autocomplete dropdown is open. If so, choose the first item in the dd
//    if ($(div.selector + " .tt-suggestion:first-child").length == 1) {
//        //Click it, which will submit
//        $(div.selector + " .tt-suggestion:first-child").trigger('click');
//    }
//}



//High Charts default theme
if (typeof Highcharts != 'undefined') {
    Highcharts.theme = {
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
            borderWidth: 2,
            plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            plotShadow: true,
            plotBorderWidth: 1
        },
        credits: {
            enabled: true,
            text: '©2016 schooldigger.com',
            href: 'https://www.schooldigger.com'
        },
        title: {
            style: {
                color: '#000',
                font: 'bold 16px "Open Sans", sans-serif;'
            }
        },
        subtitle: {
            style: {
                color: '#666666',
                font: 'bold 12px "Open Sans", sans-serif;'
            }
        },
        xAxis: {
            gridLineWidth: 0,
            lineColor: '#000',
            tickColor: '#000',
            labels: {
                style: {
                    color: '#000',
                    font: '11px "Open Sans", sans-serif;'
                }
            },
            title: {
                style: {
                    color: '#333',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: '"Open Sans", sans-serif;'

                }
            }
        },
        yAxis: {
            minorTickInterval: 'auto',
            lineColor: '#000',
            lineWidth: 1,
            tickWidth: 1,
            tickColor: '#000',
            labels: {
                style: {
                    color: '#000',
                    font: '11px  "Open Sans", sans-serif;'
                }
            },
            title: {
                style: {
                    color: '#333',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: '"Open Sans", sans-serif;'
                }
            }
        },
        legend: {
            itemStyle: {
                font: '9pt  "Open Sans", sans-serif;',
                color: 'black'

            },
            itemHoverStyle: {
                color: '#039'
            },
            itemHiddenStyle: {
                color: 'gray'
            }
        },
        labels: {
            style: {
                color: '#99b'
            }
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                }
            }
        }
    };

    // Apply the theme
    var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
    // Radialize the colors
    Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });
}
//End Highcharts

/* as: Ajax schools page */
//Populate a grade dropdown from xml choices
// What: ID of grade drop down, TestDD: test score drop down ID, xml: xml to choose new grades from
//<gr>
//  <ent e="98|356" g="3" gD="3rd Grade" />
//  <ent e="98|356" g="4" gD="4th Grade" />
//  <ent e="98|356" g="5" gD="5th Grade" />
//</gr>
function asPopulateGradeDD(what, TestDD, xml) {
    //Try to grab the grade which is already chosen now so we can rechoose it later
    var oldGrade;
    if ($(what + ' option:selected').length != 0) {
        oldGrade = $(what + ' option:selected')[0].value;
    }

    var entity = $(TestDD)[0].value;
    $(what + ' option').remove();
    //Search the XML for the entity we want

    var iCount = 0;
    var s;
    $(xml).find('ent[e="' + entity + '"]').each(function () {
        //Create an option for each one...
        var Grade = $(this).attr('g');
        var GradeDesc = $(this).attr('gD');

        //If the old grade is found then make sure it is selected.
        if (Grade == oldGrade) {
            $(what).append('<option selected="selected" value="' + Grade + '">' + GradeDesc + '</option>');
        } else {
            $(what).append('<option value="' + Grade + '">' + GradeDesc + '</option>');
        }

        iCount += 1;
        s += " " + $(this).attr('e');
    });
}

//Load the tests from the XML into the page
function asPopulateTests(xml) {
    gTitle = $(xml).find('title').text();
    gSubTitle = $(xml).find('subTitle').text();
    var sCategories = $(xml).find('xaxis').text();
    gxCategories = $.parseJSON(sCategories);
    var sSeries = $(xml).find('series').text();
    gSeries = $.parseJSON(sSeries);
    gyTitle = $(xml).find('yaxisTitle').text();
    gHeight = $(xml).find('height').text();
    gyAxisMax = $(xml).find('yAxisMax').text();
    gxTitle = $(xml).find('xaxistitle').text();
    if (gyAxisMax == '') {
        gyAxisMax = null;
    };
    $("#divTestTable").html($(xml).find('table').text());
    MakeTSChart();
}

///Retrieves a table of test scores from the server
function asGetTable(GradeDD, TestDD) {
    //Grab the values in the drop-downs
    var Grade;
    if ($(GradeDD + ' option:selected').length != 0) {
        Grade = $(GradeDD + ' option:selected')[0].value;
    }

    var Test;
    if ($(TestDD + ' option:selected').length != 0) {
        Test = $(TestDD + ' option:selected')[0].value;
    }

    var url;
    url = 'asTestScores.aspx?t=' + Test + '&g=' + Grade;

    //Get the goods from the server
    $.ajax({
        type: "GET",
        url: url,
        dataType: "xml",
        success: asPopulateTests
    });
}

//Shorten a graph label
function asShorten(What) {
    var NewString = What.replace("English Language Arts", "ELA");
    NewString = NewString.replace("English-Language Arts", "ELA");
    NewString = NewString.replace("Mathematics", "Math");
    NewString = NewString.replace("NY State Assessments", "");
    return NewString;
}

//Select only one check box from a group
function tgSelectOneCheckbox(which, groupCSS) {
    $('.tglUpdateOnCheckChange input').unbind('check', null);
    $('.' + groupCSS + ' input').attr('checked', false);
    $('#' + which).attr('checked', true);
    tgLoadGraph();
    $('.tglUpdateOnCheckChange input').bind('check', function (event, ui) { tgLoadGraph(); });
}

function tgSelectAll(groupCSS) {
    $('.tglUpdateOnCheckChange input').unbind('check', null);
    $('.' + groupCSS + ' input').attr('checked', true);
    tgLoadGraph();
    $('.tglUpdateOnCheckChange input').bind('check', function (event, ui) { tgLoadGraph(); });
}

///Load up the advanced test graph based on the selections
function tgLoadGraph() {
    //Grab the values in the checkboxes
    var Test = '';
    Test = $('.tglTestcb:checked').map(function (n) { return this.value; }).get().join(',');

    var Year = '';
    Year = $('.tglYearcb:checked').map(function (n) { return this.value; }).get().join(',');

    var Grade = '';
    Grade = $('.tglGradecb:checked').map(function (n) { return this.value; }).get().join(',');

    var Show;
    Show = $('.tglShowcb:checked').map(function (n) { return this.value; }).get().join(',');

    var xAxis;
    xAxis = $('.tglXAXisOpt:checked').map(function (n) { return this.value; }).get().join(',');

    var url;
    url = 'asTestScores.aspx?t=' + Test + '&g=' + Grade + '&y=' + Year + '&d=' + Show + '&x=' + xAxis;

    //Get the goods from the server
    $.ajax({
        type: "GET",
        url: url,
        dataType: "xml",
        success: asPopulateTests
    });

}

/* End aS --- Ajax schools page  */

/* Google Maps */

// Makes the Ajax call to reload the map and list
function sd2LoadSchoolList(moveMap) {
    //Save Map bounds
    if (!(map == null)) {
        $('#gmMapBounds').val(map.getBounds());
    }
    var str = $('#divWidgetParams').find("input, textarea, select, hidden").serialize();
    modalOn();

    // Make Ajax call
    $.ajax({
        type: 'GET', url: '/aj/getMapData.aspx?' + str, dataType: 'xml', success: function (xml) {
            gmDisplayMessages(xml);
            gmLoadAjaxResultIntoMap(xml, moveMap);
            gmLoadAjaxResultIntoTable(xml);
            gmLoadAjaxResultIntoGrid(xml);
            modalOff();
            initSaveSchoolButtons();
        }
        , error: function () {
            modalOff();
        }
    });
}

function initSaveSchoolButtons() {
    setSchoolButtons();
}
function sd2ChangeOrderby(number, name) {
    $('#ctl00_ContentPlaceHolder1_SchoolListWidget_lstOrderBy').val(number);
    $('.spOrderBy').text(name);
    sd2LoadSchoolList(false);
}

function sd2LoadCount(what) {
    $('#ctl00_ContentPlaceHolder1_SchoolListWidget_iLoadCount').val(what);
    sd2LoadSchoolList(true);
    resizeMapBounds();
}

function sd2LoadMySchools() {
    window.location.href = '/search.aspx?' + serTSSchools();;
}

function sd2ChangeLevel(number, name) {
    $('#ctl00_ContentPlaceHolder1_SchoolListWidget_iLevel').val(number);
    $('.spLevel').text(name);
    sd2LoadSchoolList(false);
}

function sd2ChangeBoundary(number, name) {
    $('#ctl00_ContentPlaceHolder1_SchoolListWidget_iBoundary').val(number);
    $('.spBoundary').text(name);
    sd2LoadSchoolList(false);
}

function sd2ChangeIconColor(number, name) {
    $('#ctl00_ContentPlaceHolder1_SchoolListWidget_iIconColor').val(number);
    $('.spIconColor').text(name);
    sd2LoadSchoolList(false);
    switch (number) {
        case 0:
            $('.spnLegend').text('Ranking:');
            $(".imgLegend").attr("src", "/images/legend.png");
            break;
        case 1:
            $('.spnLegend').text('Free/Reduced Lunch:');
            $(".imgLegend").attr("src", "/images/legend100-0.png");
            break;
        case 2:
            $('.spnLegend').text('Kindergarten Immunized:');
            $(".imgLegend").attr("src", "/images/legendvax.png");
            break;
        case 4:
            $('.spnLegend').text('White students:');
            $(".imgLegend").attr("src", "/images/legend0-50.png");
            break;
        case 5:
            $('.spnLegend').text('African American students:');
            $(".imgLegend").attr("src", "/images/legend0-50.png");
            break;
        case 6:
            $('.spnLegend').text('Hispanic students:');
            $(".imgLegend").attr("src", "/images/legend0-50.png");
            break;
        case 7:
            $('.spnLegend').text('Asian students:');
            $(".imgLegend").attr("src", "/images/legend0-50.png");
            break;
        case 8:
            $('.spnLegend').text('American Indian students:');
            $(".imgLegend").attr("src", "/images/legend0-50.png");
            break;
        case 9:
            $('.spnLegend').text('Pacific Islander students:');
            $(".imgLegend").attr("src", "/images/legend0-50.png");
            break;
    }
}

function rank2ChangeYear(year) {
    $('.spYear').text(year - 1 + "-" + year);
    r2p.reqYear = year;
    r2Update(r2p, slTable);
}

function r2Update(r2p, cTable) {
    switch (r2p.clientViewing) {
        //Table
        case 0:
            {
                modalOn();
                var p = {};
                p.order = cTable.api().order();
                p.length = cTable.api().page.len();
                p.values = r2p;
                if (r2p.reqFilterType === 's') {
                    $.ajax({
                        type: "POST",
                        url: "/aj/ajRankSchoolFind.aspx",
                        data: p
                    }).done(function (j) {
                        if (j.p || parseInt(j.p) >= 0) {
                            if (j.k) {
                                sKey = j.k;
                            }
                            cTable.api().page(parseInt(j.p)).draw(false);
                        } else {
                            $('#errRank').html(j.err).show();
                            modalOff();
                        }
                    });
                }
                else {
                    cTable.api().ajax.reload();
                }
                break;
            }
        case 1:
            //Chart
            {
                modalOn();
                updateChart();

                break;
            }
    }
}
//Google Map
var map;
//Map point array to load on Google Map
var mapMarkers = new Array();
//current Map bounds
var mapBounds;
//Level of schools (elementary, etc)
var polygons = new Array();
var polygonsBoundary = new Array();
var bRepopulateOnMapMove = false;

//Detect to see if map is there.
function mapExists() { return map != null }

//Init a google Map
function gmInitGoogleMap(repopulateOnMapMove) {
    var latlng = new google.maps.LatLng(0, 0);
    var myOptions = {
        center: latlng,
        disableDoubleClickZoom: false,
        scrollwheel: false,
        panControl: false,
        scaleControl: true,
        streetViewControl: false,
        zoomControl: true,
        draggable: true, // !("ontouchend" in document) -- works on large touch screens
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 16,
        fullscreenControl: true,
        height: '100%',
        minZoom: 3
    };

    bRepopulateOnMapMove = repopulateOnMapMove;

    //Place it on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    //If a legend is requested
    if (!(gmLegendDiv == null)) {
        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(document.getElementById(gmLegendDiv));
    }

    //Chalk one up in Google Analytics
    ga('send', 'event', 'map', 'load', pageName());
}

function pageName() {
    var x;
    x = window.location.pathname.split("/");
    return x[x.length - 1].replace(".aspx", "");
}

function pinSymbol(color, scale) {
    scale = typeof scale !== 'undefined' ? scale : 0.8;
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 1.5,
        scale: scale
    };
}

function redrawMap() {
    setTimeout(function () {
        if (map) {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        }
    }, 500);
}

function resizeMapBounds() {
    if (map == null) {
        return;
    }
    var bound = new google.maps.LatLngBounds();
    for (var i in mapMarkers) {
        bound.extend(mapMarkers[i].marker.getPosition());
    }
    map.fitBounds(bound);

}

function gmDisplayMessages(xmlResult) {
    $('#alertMapWidget').hide();
    $('#infoMapWidget').hide();
    $('#alertMapWidget').text('');
    $('#infoMapWidget').text('');
    var messages = xmlResult.documentElement.getElementsByTagName("t");
    var numMessages = messages.length;
    $('#alertMapWidget').html('');
    $('#infoMapWidget').html('');
    $('#alertMapWidget').hide();
    $('#infoMapWidget').hide();
    if (numMessages > 0) {
        //Define markers
        for (var i = 0; i < numMessages; i++) {
            var msg = messages[i].getElementsByTagName("msg")[0].firstChild.nodeValue;
            var sv = messages[i].getElementsByTagName("sv")[0].firstChild.nodeValue;
            if (sv == "Warning") {
                $('#alertMapWidget').append(msg);
                $('#alertMapWidget').show();
            } else {
                $('#infoMapWidget').append(msg);
                $('#infoMapWidget').show();
            }
        }
    }
}
function gmLoadAjaxResultIntoGrid(xmlResult) {
    removeAllSchoolMenuItems();
    $('#divList').html(xmlResult.documentElement.getElementsByTagName("divList")[0].firstChild.nodeValue);
    //$('.rating').rating('refresh');
    configBP();
    initSchoolGridEvents();
}

var slTable;
function initSchoolListTable(ordering, colClass) {
    if (!ordering) {
        ordering = [0, 'asc'];
    }
    if (!colClass) {
        if (!colSel) {
            colClass = 'sum';
        }
        else { colClass = colSel };

    }
    slTable = $('#tabSchooList').dataTable({
        dom: '<f<t>lp>',
        deferRender: true,
        paging: true,
        autoWidth: true,
        bLengthChange: true,
        order: ordering,
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
        columnDefs: [{
            targets: 'nullSort',
            "bSortable": true, "sType": "nullable"
        }],
        language: {
            info: "Showing _START_ to _END_ of _TOTAL_ schools",
            lengthMenu: "Show _MENU_ schools",
            loadingRecords: "Please wait - loading..."
        },
        "fnDrawCallback": function () {
            this.show();
            this.api().columns.adjust();
            setSchoolButtons();
        },
        preDrawCallback: function (settings) {
            var api = new $.fn.dataTable.Api(settings);
            var pagination = $(this)
                .closest('.dataTables_wrapper')
                .find('.dataTables_paginate');

            if (api.page.info().pages <= 1) {
                pagination.hide();
            }
            else {
                pagination.show();
            }
        }
    });
    gmShowDataTableColumns(slTable, colClass);
    slTable.api().draw();
}

var tRankYear;
var tRankYearCompare;
function initSchoolRankListTable(ordering, colClass, trCount) {
    if (!colClass) {
        if (!colSel) {
            colClass = 'sum';
        }
        else {
            colClass = colSel
        }
    }
    else {
        colSel = colClass
    }

    lengthMenu = [[10, 25, 50, 100], [10, 25, 50, 100]];

    dirtyTable = false;
    dirtyChart = true;
    slTable = $('#tabSchooList').dataTable(
    {
        "dom": 'rtlip',
        "deferRender": true,
        "deferLoading": trCount,
        columnDefs: [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }],
        "serverSide": true,
        "searching": false,
        "responsive": {
            details: {
                type: 'false'
            }
        },
        "pagingType": "numbers",
        "stateSave": false,
        "autoWidth": false,
        "displayStart": 0,
        "lengthMenu": lengthMenu,
        "ajax": {
            url: '/aj/ajRankData1.aspx',
            type: 'POST',
            data: function (p) {
                modalOn();
                p.values = r2p;
            },
            dataSrc: function (json) {
                $('.tRows').html(json.recordsTotal);
                $('.tYear').html(json.rYear);
                tRankYear = json.rYear;
                $('.tYearCompare').html(json.rYearCompare);
                tRankYearCompare = json.rYearCompare;
                $('.tYearAgg').html(json.rYearAgg);
                $('.tMetric').html(json.rMetric);
                $('.rTestDialogHTML').html(json.rTestDialogHTML);
                //$('.rGradeDialogHTML').html(json.rGradeDialogtHTML);
                $('#spSubTitle').html(json.rSubTitle);
                if (json.err) {
                    $('#errRank').html(json.err).show();
                };
                modalOff();
                return json.data;
            }
        },
        "fnRowCallback": function (nRow, aData, iDisplayIndex) {
            if (r2p.reqFilterValue && aData[0] == r2p.reqFilterValue) {
                $('td', nRow).css('background-color', 'yellow');
            }
        },
        "fnDrawCallback": function () {
            this.show();
            this.api().columns.adjust();
            setSchoolButtons();
        },
        "language": {
            "processing": "",
            "info": "Showing _START_ to _END_ of _TOTAL_ schools",
            "infoEmpty": "Sorry, there is no match for your search",
            "infoFiltered": "(filtered from _MAX_ schools)",
            "emptyTable": "Sorry, there are no schools for your search criteria.",
            "search": "Find school:",
            "lengthMenu": "Show _MENU_ schools at a time"
        },
        "order": [[1, 'asc']]
    });
    gmShowDataTableColumns(slTable, colClass);
    //slTable.api().draw();
}

function gmLoadAjaxResultIntoTable(xmlResult) {
    //removeAllSchoolMenuItems();
    $('#divSchoolTable').html(xmlResult.documentElement.getElementsByTagName("divTable")[0].firstChild.nodeValue);
    initSchoolListTable();
}
var colSel;
function gmShowDataTableColumns(table, cName) {
    if (colSel != cName) {
        colSel = cName;
        table.api().columns('.col').visible(false, false);
        table.api().columns('.' + cName).visible(true, false);
    }
    $.each(table.api().columns('.' + cName + '.cColor').indexes(), function (a, b) { cColorColumn(table, b); });
    $('#stColumns a').removeClass('btn-primary').addClass('btn-default');
    $('#stColumns .' + cName).addClass('btn-primary').removeClass('btn-default');
    if (tRankYear) {
        $('.tYear').html(tRankYear);
    }
    if (tRankYearCompare) {
        $('.tYearCompare').html(tRankYearCompare);
    }

}

var iSavedSchoolCount = 0;
function initSchoolGridEvents() {
    $('.schoolPanel').mouseenter(function () {
        slH($(this).attr('data-sid'));
    });
    $('.schoolPanel').mouseleave(function () {
        slUH($(this).attr('data-sid'));
    });
}

function updateSchoolCount(what) {
    $.cookie('savedSchoolCount', what, { expires: 365, path: '/' });
    $('.spnSchools').text(what);
}

function setSchoolButtons() {
    $('.addSchButton').off('click').on('click', btnSchoolClicked).tooltip({ title: 'Save this school to your list', delay: { "show": 500, "hide": 10 }, placement: 'bottom' });
    //Color the checked schools
    setSchools();
}

// School Plus button was clicked
function btnSchoolClicked(e) {
    var schID = $(this).closest('[data-sid]').attr('data-sid');
    var schStor = $.totalStorage(schID);
    if (!schStor) {
        //Add
        addSchool(schID);
        animatePlus($(this));
    }
    else {
        //Remove
        removeSchool(schID);
    }
}

//Add a school to the GUI based on SID. What is the TotalStorage Item value
function addSchoolFromSID(what) {
    //Add menu item
    addSchoolMenuItem(what);
    //Color button
    var btn = $('button[data-sid=' + what.id + ']');
    $(btn).addClass('btn-success').removeClass('btn-default');
    $(btn).children('span').addClass('glyphicon-ok').removeClass('glyphicon-plus');
    iSavedSchoolCount += 1;
}

//Adds the school to the My Schools menu: what is the TotalStorage item value
function addSchoolMenuItem(what) {
    removeSchoolMenuItem(what.id);
    $('#ulMySchools').append(
    $('<li>').attr('id', 'li' + what.id).attr('class', 'liSchool').append(
    $('<a>').attr('href', what.url).append(what.name)));
    $('#ulMySchools .ulHasSchools').show();
    $('#ulMySchools .ulHasNoSchools').hide();
}

//Removes the school from the My Schools Menu
function removeSchoolMenuItem(what) {
    $('#li' + what).remove();
    //If there are no schools...
    if ($('#ulMySchools .liSchool').length === 0) {
        $('#ulMySchools .ulHasSchools').hide();
        $('#ulMySchools .ulHasNoSchools').show();
    };
}

function removeAllSchoolMenuItems() {
    $('#ulMySchools .liSchool').remove();
}

// Handles adding a new school from an add school button (what is the button)
function addSchool(schID) {
    //Get the elements from the div
    var schDiv = $('div[data-sid="' + schID + '"]');
    var schName = schDiv.attr('data-sch');
    var schURL = schDiv.attr('data-url');
    //Add to storage
    if (!$.totalStorage(schID)) {
        $.totalStorage(schID, { id: schID, name: schName, url: schURL });
    }
    //Change buttons to green/check mark
    $('button[data-sid="' + schID + '"]').addClass('btn-success').removeClass('btn-default').children('span').addClass('glyphicon-ok').removeClass('glyphicon-plus');
    //Add menu item to My Schools
    addSchoolMenuItem($.totalStorage(schID));
    // Update My School Count drop down
    iSavedSchoolCount += 1;
}

function animatePlus(what) {
    var target = $('#divMySchools');
    if (what) {
        var imgclone = $('#grchk').clone()
            .offset({
                top: what.offset().top,
                left: what.offset().left
            }).show().css({
                'opacity': '0.75',
                'position': 'absolute',
                'height': '23px',
                'width': '22px',
                'z-index': '1000'
            })
            .appendTo($('body'))
            .animate({
                'top': target.offset().top + 10,
                'left': target.offset().left + 79
            }, 500, 'swing', function () { updateSchoolCount(iSavedSchoolCount) });

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
}

function removeSchool(schID) {
    $.totalStorage.deleteItem(schID);
    //Change button to Grey/plus
    //Change buttons to green/check mark
    $('button[data-sid="' + schID + '"]').addClass('btn-default').removeClass('btn-success').children('span').addClass('glyphicon-plus').removeClass('glyphicon-ok');

    //Remove Menu Item from My Schools
    removeSchoolMenuItem(schID);
    // Update My School count drop down
    iSavedSchoolCount -= 1;
    updateSchoolCount(iSavedSchoolCount);
}

function resetAllSchoolsGUI() {
    $('.addSchButton').addClass('btn-default').removeClass('btn-success');
    $('.addSchButton').children('span').addClass('glyphicon-plus').removeClass('glyphicon-ok');
}

// Loop thru the saved schools and set icons and menu items
function setSchools() {
    var g = $.totalStorage.getAll();
    iSavedSchoolCount = 0;
    for (var i = 0; i < g.length; i++) {
        var s = g[i].key;
        if (s[0] == 's' && s.length === 13) {
            addSchoolFromSID(g[i].value);
        }
    }
    updateSchoolCount(iSavedSchoolCount);
}

//Remove all schools from storage
function removeSchools() {
    var g = $.totalStorage.getAll();
    for (var i = 0; i < g.length; i++) {
        var s = g[i].key;
        if (s[0] == 's' && s.length === 13) {
            $.totalStorage.deleteItem(s);
            removeSchoolMenuItem(s);
        }
    }
    iSavedSchoolCount = 0;
    resetAllSchoolsGUI();
    updateSchoolCount(iSavedSchoolCount);
}

function gmLoadAjaxResultIntoMap(xmlResult, moveMap) {
    if (map == null) {
        return;
    }
    //Stop move/drag events
    gmDisableMapRefreshEvents();

    //Clear out the overlays
    gmDeleteOverlays(mapMarkers);
    gmDeletePolygons(polygons);
    gmDeletePolygons(polygonsBoundary)
    //Close any infowindow that might be open
    killInfoWindow();

    mapMarkers = new Array();
    polygons = new Array();
    polygonsBoundary = new Array();
    //Establish a new bounds set
    mapBounds = null;

    var thisMarker;

    //School markers
    var siteMarkers = xmlResult.documentElement.getElementsByTagName("m");
    var numSitemarkers = siteMarkers.length;
    var bMoveMap = false;
    if (numSitemarkers > 0) {
        //Define markers
        for (var i = 0; i < numSitemarkers; i++) {
            // obtain the attributes of each marker
            var lat = parseFloat(siteMarkers[i].getElementsByTagName("lt")[0].firstChild.nodeValue);
            var lng = parseFloat(siteMarkers[i].getElementsByTagName("lg")[0].firstChild.nodeValue);
            var id = siteMarkers[i].getElementsByTagName("id")[0].firstChild.nodeValue;
            var ip = siteMarkers[i].getElementsByTagName("ip")[0].firstChild.nodeValue;
            var iw;
            var iwElement = siteMarkers[i].getElementsByTagName("iw");
            if (iwElement.length > 0) {
                iw = iwElement[0].firstChild.nodeValue;
            }
            //Get the lat/long of the point
            var thislatLng = new google.maps.LatLng(lat, lng);
            //Make the marker
            thisMarker = new google.maps.Marker({
                position: thislatLng,
                visible: true,
                clickable: true,
                draggable: false,
                icon: pinSymbol(ip),
                color: ip,
                id: id,
                iw: iw,
                map: map
            });

            thisMarker.addListener('click', function (e) { mapSchoolClick(this); });

            //Extend the mapbounds
            if (mapBounds == null) {
                mapBounds = new google.maps.LatLngBounds(thislatLng, thislatLng);
            } else {
                mapBounds.extend(thislatLng);
            }

            //Save it into the array
            mapMarkers[i] = new google.maps.Marker;
            mapMarkers[i].marker = thisMarker;
            mapMarkers[i].id = id;

            //Notify that we have to move the map once this is done...
            bMoveMap = true;
        }
    } else {
        //Look for boundary demarcators to size the map properly
        siteMarkers = xmlResult.documentElement.getElementsByTagName("bnd");
        if (siteMarkers.length > 0) {
            // obtain the attributes of each marker
            var lat = parseFloat(siteMarkers[0].getElementsByTagName("ltt")[0].firstChild.nodeValue);
            var lng = parseFloat(siteMarkers[0].getElementsByTagName("lgl")[0].firstChild.nodeValue);
            var point = new google.maps.LatLng(lat, lng);
            if (mapBounds == null) {
                mapBounds = new google.maps.LatLngBounds(point, point);
            } else {
                mapBounds.extend(point);
            }

            lat = parseFloat(siteMarkers[0].getElementsByTagName("ltb")[0].firstChild.nodeValue);
            lng = parseFloat(siteMarkers[0].getElementsByTagName("lgr")[0].firstChild.nodeValue);
            point = new google.maps.LatLng(lat, lng);
            if (mapBounds == null) {
                mapBounds = new google.maps.LatLngBounds(point, point);
            } else {
                mapBounds.extend(point);
            }
            bMoveMap = true;
        }
    }

    //District/school boundary overlays
    var overlays = xmlResult.documentElement.getElementsByTagName("p");
    var colorCount = 0;
    var currDistrict = null;
    var strDistrictLegend = '<br />';
    var bHasOverlay = false;

    var bExtendBoundaries = (siteMarkers.length == 1);

    for (var i = 0; i < overlays.length; i++) {
        // obtain the attributes of each region
        var plb = '';
        for (var ib = 0; ib < overlays[i].getElementsByTagName("b")[0].childNodes.length; ib++) {
            plb += overlays[i].getElementsByTagName("b")[0].childNodes[ib].nodeValue;
        }

        var plp = overlays[i].getElementsByTagName("np")[0].firstChild.nodeValue;
        var name = overlays[i].getElementsByTagName("n")[0].firstChild.nodeValue;

        //Determine the color
        var color;

        if (overlays[i].getElementsByTagName("ip").length > 0) {
            color = overlays[i].getElementsByTagName("ip")[0].firstChild.nodeValue;
        }
        else { color = '#CCCCCC' }

        //Decode the path and add the polygon
        var poly;

        var decodedPath = google.maps.geometry.encoding.decodePath(plb);
        var polyOptions = { strokeColor: '#000000', strokeOpacity: 1.0, strokeWeight: 1, path: decodedPath, map: map, fillColor: color, fillOpacity: 0.5, geodesic: true, zIndex: 50 };
        poly = new google.maps.Polygon(polyOptions);

        //Save it into the array
        polygons[i] = new Object();
        polygons[i].polygon = poly;
        polygons[i].polygon.name = name;

        //If there's just one marker then fit it to the map bounds
        if (bExtendBoundaries) {
            //Extend the bounds to include the polygon
            if (mapBounds != null) {
                mapBounds.union(polygons[i].polygon.getBounds());
            }
        }

        //Add click listener
        google.maps.event.addListener(polygons[i].polygon, 'click', function (e) { openInfoWindowPolygon(e, this); });

        currDistrict = name;
        bHasOverlay = true;
    }

    //Only move if we have something in the result set
    var bMovebounds = false;
    if (moveMap) {
        var gmType = $('#gmReqType');
        if (gmType.length > 0) {
            //Search page map

            if (gmType[0].value != '4') {
                //Only pan if it's a 1,2,3, or 5 request (4 is already set in the correct place)
                bMovebounds = true;
            }
        } else {
            //Plain map
            bMovebounds = true;
        } // if (bMoveMap)

        if (bMovebounds == true) {
            map.fitBounds(mapBounds);
        }
    }
    //Enable the listener to watch for map moves
    setTimeout(function () { gmEnableMapRefreshEvents(); }, 750);

}

function polysLighten(what) {
    if (polygons) {
        var iLen = polygons.length;
        for (i = 0; i < iLen; i++) {
            polygons[i].polygon.setOptions({ fillOpacity: 0.3 });
        }
    }
}

function polysDarken() {
    if (polygons) {
        var iLen = polygons.length;
        for (i = 0; i < iLen; i++) {
            polygons[i].polygon.setOptions({ fillOpacity: 0.7 });
        }
    }
}

//Set gradient colors for the column numbered What
function cColorColumn(table, what) {
    var columns = [];
    //Create array of column values into a data array ('_' retrieves data)
    var data = table.api().column(what).nodes().to$();
    try {
        var reverse = table.api().column(what).header().className.includes('cColorReverse');
    } catch (e) {
        console.log('no coloring');
        return;
    }

    //add item to array, if it's numeric
    $.each(data, function (index) {
        //Get the number in the cell. If there is a "data-order" attribute, use that instead
        var valMod;
        if ($(this).attr('data-order')) {
            valMod = $(this).attr('data-order');
        } else { valMod = $(this).text(); };

        if (isNumeric(valMod) && valMod >= 0.0) {
            columns.push(parseFloat(valMod));
        }
    });

    //Get uniques
    columns = $.unique(columns);

    //Sort
    if (reverse) {
        columns.sort(function (a, b) { return b - a; });
    } else {
        columns.sort(function (a, b) { return a - b; });
    }

    var iNumArrayElements = columns.length;
    var iIndex = -1;
    var sPercent = 0.0;
    var sHexColor;

    var iPos = 0;
    //Loop thru the actual TDs again
    $.each(data, function (index) {
        //Find the number's position in the array

        //var valMod = data[iPos];
        var valMod;
        if ($(this).attr('data-order')) {
            valMod = $(this).attr('data-order');
        } else { valMod = $(this).text(); };

        if (isNumeric(valMod)) {
            iIndex = jQuery.inArray(parseFloat(valMod), columns);
            if (iIndex != -1) {
                //Found it.  Get the color we need
                sPercent = (iIndex + 1) / iNumArrayElements;
                sHexColor = GetGradientColor(sPercent);
                $(this).css("background-color", sHexColor);
            }
        }
        iPos += 1;
    });
}

// Determines the gradient color between red (0) and yellow (1) based on passed percent (0.0 - 1.0)
function GetGradientColor(pct) {
    var green;
    var red;
    var blue;

    if (pct < .50) {
        red = (248 + (6 * pct * 2));
        green = (105 + (128 * pct * 2));
        blue = (107 + (24 * pct * 2));
    } else {
        red = (99 + (155 * (1 - (pct - 0.5) * 2)));
        green = (190 + (45 * (1 - (pct - 0.5) * 2)));
        blue = (123 + (9 * (1 - (pct - 0.5) * 2)));
    }
    return "#" + rgbToHex(red, green, blue);
}

function rgbToHex(R, G, B) { return toHex(R) + toHex(G) + toHex(B); }

function toHex(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) return "00";
    n = Math.max(0, Math.min(n, 255));
    return "0123456789ABCDEF".charAt((n - n % 16) / 16)
        + "0123456789ABCDEF".charAt(n % 16);
}

//Find the map marker with marker id = id
function findMarker(id) {
    var markerCount = mapMarkers.length;
    for (var i = 0; i < markerCount; i++) {
        if (mapMarkers[i].id == id) {
            return i;
        }
    }
    return null;
}

//Handle a click on a map icon
function mapSchoolClick(mapMarker) {
    //Load up an infowindow and a display a boundary, if available.
    killInfoWindow();
    //Disable refresh events just in case the infowindow scrolls the map
    if (mapMarker.iw) {
        gmDisableMapRefreshEvents();
        infoWindow.setContent(mapMarker.iw);
        infoWindow.open(map, mapMarker);
        setTimeout(function () { gmEnableMapRefreshEvents(); }, 750);
    }
    else {
        var url;
        if (isBreakpoint('xs')) {
            dataQS = 's=' + mapMarker.id + '&xs=1';
        }
        else {
            dataQS = 's=' + mapMarker.id;
        }
        $.ajax({
            url: '/aj/ajSchool.aspx',
            dataType: 'xml',
            success: gmIWOnCompleteSD2,
            context: mapMarker,
            errorL: gmIWOnError,
            data: dataQS
        });
    }
    //Find and highlight the School div (with scroll to it)
    highlightSD(mapMarker.id, (!isBreakpoint('xs')));
}

var zindexHold = 1;

//Handle the hovering over the school list
function slH(id) {
    killInfoWindow();
    if (mapExists()) {
        var foundMarker = findMarker(id);
        if (!(foundMarker == null)) {
            mapMarkers[foundMarker].marker.setIcon(pinSymbol(mapMarkers[foundMarker].marker.color, 1.5));
            mapMarkers[foundMarker].marker.setZIndex(google.maps.Marker.MAX_ZINDEX + zindexHold++);
            //Get boundary
            var dataQS = 's=' + mapMarkers[foundMarker].marker.id + '&bnd=1';

            $.ajax({
                url: '/aj/ajSchool.aspx',
                dataType: 'xml',
                success: gmIWOnCompleteSD2,
                context: mapMarkers[foundMarker].marker,
                errorL: gmIWOnError,
                data: dataQS
            });
        }
    }

    highlightSD(id, false);
}

function slUH(id) {
    var foundMarker = findMarker(id);
    if (!(foundMarker == null)) {
        mapMarkers[foundMarker].marker.setIcon(pinSymbol(mapMarkers[foundMarker].marker.color, 0.8));
    }
    gmDeletePolygons(polygonsBoundary);
}

//Highlight the Div containing the school information
// Scroll is a boolean that if true, scrolls the school div into view
function highlightSD(id, scroll) {
    if (id != 'cp') {
        $('#divList div').removeClass('panel-primary').addClass('panel-default');
        $('#divList div[data-sid=' + id + ']').toggleClass('panel-default panel-primary');
        if (scroll) {
            $('.sdSchoolList').animate({
                scrollTop: $('.sdSchoolList').scrollTop() + $('.sdSchoolList div[data-sid=' + id + ']').position().top - 80
            });
        }
    }
}

function GetNextColor(colorNum) {
    var colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'yellow'];
    return colors[colorNum];
}

var infoWindow;
function killInfoWindow() {
    if (infoWindow != null) {
        infoWindow.close();
    }
}

function openInfoWindowPolygon(e, iwPolygon) {
    killInfoWindow();
    //If the polygon is a School boundary, find up the school marker
    if (iwPolygon.name.length == 13 && iwPolygon.name.substring(0, 1) === "s") {
        var mapPoint = getNameFromMapPoint(iwPolygon.name);
        mapSchoolClick(mapPoint.marker);
    }
    else {
        gmDisableMapRefreshEvents();
        infoWindow = new google.maps.InfoWindow({ content: "<div style='overflow:hidden'>" + iwPolygon.name + "</div>", position: e.latLng });
        infoWindow.open(map);
        setTimeout(function () { gmEnableMapRefreshEvents(); }, 750);
    }

}

function gmIWOnCompleteSD2(xmlResult, result) {
    var iwXML = xmlResult.documentElement.getElementsByTagName("iw")

    //School boundary
    var sb = xmlResult.documentElement.getElementsByTagName("sb");
    gmDisableMapRefreshEvents();

    if (iwXML.length > 0) {
        var iw = iwXML[0].firstChild.nodeValue;
        infoWindow = new google.maps.InfoWindow({ maxWidth: 350 });
        infoWindow.setContent(iw);
        infoWindow.open(map, this);
        if ($.totalStorage(this.id)) {
            google.maps.event.addListener(infoWindow, 'domready', function () {
                //Change button to green/check mark
                $('.addSchButtonIW').addClass('btn-success').removeClass('btn-default');
                $('.addSchButtonIW').children('span').addClass('glyphicon-ok').removeClass('glyphicon-plus');
                $('.addSchButtonIW').on('click', btnSchoolClicked);
            });
        } else {
            google.maps.event.addListener(infoWindow, 'domready', function () {
                $('.addSchButtonIW').on('click', btnSchoolClicked);
            });
        }
    }

    gmDeletePolygons(polygonsBoundary);

    //Add boundary, if sent
    var l = sb.length;
    if (l > 0) {
        for (scI = 0; scI < l; scI++) {
            var plb = '';
            var bLength = sb[scI].getElementsByTagName("b")[0].childNodes.length;
            for (var ib = 0; ib < bLength; ib++) {
                plb += sb[scI].getElementsByTagName("b")[0].childNodes[ib].nodeValue;
            }

            var plp = sb[scI].getElementsByTagName("np")[0].firstChild.nodeValue;
            var name = sb[scI].getElementsByTagName("n")[0].firstChild.nodeValue;
            //Get a color.  Generate one only if we have a new polygon for a new district/zip/city/school
            var color = sb[scI].getElementsByTagName("ip")[0].firstChild.nodeValue;
            //Decode the path and add the polygon
            var decodedPath = google.maps.geometry.encoding.decodePath(plb);
            var polyOptions = { strokeColor: '#000000', strokeOpacity: 1.0, strokeWeight: 1, path: decodedPath, map: map, fillColor: color, fillOpacity: 0.7, geodesic: true, zIndex: 999 };
            poly = new google.maps.Polygon(polyOptions);
            poly.name = name + ' Boundary';

            //Add click listener
            google.maps.event.addListener(poly, 'click', function (e) { openInfoWindowPolygon(e, this); });

            //Save poly so we can remove it later
            polygonsBoundary[scI] = new Object();
            polygonsBoundary[scI].polygon = poly;
        }
        polysLighten();
    }
    setTimeout(function () { gmEnableMapRefreshEvents(); }, 500);
}



function gmIWOnComplete(result, userContext) {
    infoWindow.setContent(result);
    infoWindow.open(map, this);
    setTimeout(function () { gmEnableMapRefreshEvents(); }, 500);

}

function gmIWOnError(result) {
    infoWindow = new google.maps.InfoWindow({ content: 'Unable to load school detail.' });
    infoWindow.open(map, iwMarker);
    setTimeout(function () { gmEnableMapRefreshEvents(); }, 500);

}

function getNameFromMapPoint(what) {
    var result = null;
    for (var i = 0; i < mapMarkers.length; i++) {
        if (mapMarkers[i].id === what) {
            result = mapMarkers[i];
            break;
        }
    }
    return result;
}

var bBeenHereOnce = false;

function sd2RefreshSchoolList() {
    if (bBeenHereOnce) {
        if (!bRepopulateOnMapMove) {
            return;
        } //Load up new markers on the map
        sd2LoadSchoolList(false);
    }
    bBeenHereOnce = true;
}

//function gmShowWarningDialog(what) {
//    $("#dlgWindow").hide();
//    $("#dlgWindow p")[0].textContent = 'NOTE: ' + what;
//    $("#dlgWindow").show();
//}

//function gmShowDialog(what) {
//    $("#dlgWarning").dialog('destroy');
//    $("#dlgWarning p")[0].textContent = what;
//    $("#dlgWarning").dialog({
//        buttons: {
//            'OK': function () {
//                $(this).dialog('close');
//            }
//        }
//    });
//}

//function gmShowYesNoZipDialog(what, URL) {
//    $("#dlgWarning").dialog('destroy');
//    $("#dlgWarning p")[0].textContent = what;
//    $("#dlgWarning").dialog({
//        bgiframe: true,
//        modal: true,
//        buttons: {
//            'Yes': function () {
//                window.location.href = URL;
//            },
//            'No': function () {
//                $(this).dialog('close');
//            }
//        }
//    });
//}


function convertStringtoXML(xmlData) {
    if (window.ActiveXObject) {
        //for IE
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlData);
        return xmlDoc;
    } else if (document.implementation && document.implementation.createDocument) {
        //for Mozila
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlData, "text/xml");
        return xmlDoc;
    }
}

function gmEnableMapRefreshEvents() {
    google.maps.event.addListener(map, "idle", sd2RefreshSchoolList);

}

function gmDisableMapRefreshEvents() {
    google.maps.event.clearListeners(map, "idle");
}

// Deletes all markers in the array by removing references to them
function gmDeleteOverlays(ma) {
    if (ma) {
        for (i in ma) {
            ma[i].marker.setMap(null);
        }
        ma.length = 0;
    }
}

function gmDeletePolygons(p) {
    if (p) {
        for (i in p) {
            p[i].polygon.setMap(null);
        }
        p.length = 0;
    }
}

function isMapBig() {
    return ($('#divMap').hasClass('col-sm-7'));
}

function mapBig() {
    $('#btnMapBig').hide();
    $('#btnMapSmall').show();
    //$('#divMap').css('height', '45em');
    $('#divList').addClass('col-sm-5').removeClass('col-sm-7');
    $('#divMap').removeClass('col-sm-5').addClass('col-sm-7');
    //$('#divMap').css('height', '45em');
    $('#txtLoad').text('Reload schools when map is moved');
    configBP();
    redrawMap();
}

function mapSmall() {
    $('#btnMapBig').show();
    $('#btnMapSmall').hide();
    //$('#divMap').css('height', '20em');
    $('#divMap').addClass('col-sm-5').removeClass('col-sm-7');
    $('#divList').removeClass('col-sm-5').addClass('col-sm-7');
    $('#txtLoad').text('Reload schools when map moved');
    configBP();
    redrawMap();
}


/* End Google Maps */

//////////////
///Stopwatch
//////////////
function StopWatch() {
    var startTime = null;
    var stopTime = null;
    var running = false;

    this.start = function () {
        if (running == true) {
            return;
        } else if (startTime != null) {
            stopTime = null;
        }
        running = true;
        startTime = getTime();
    };

    this.stop = function () {
        if (running == false) {
            return;
        }
        stopTime = getTime();
        running = false;
    };
    this.duration = function () {
        if (startTime == null || stopTime == null) {
            return 'Undefined';
        } else {
            return (stopTime - startTime) / 1000;
        }
    };
    this.isRunning = function () { return running; };

    function getTime() {
        var day = new Date();
        return day.getTime();
    }
}

//////////////
///End Stopwatch
//////////////

//////////////
// Utility 
//////////////
function isNumeric(n) {
    return !isNaN(parseFloat(n)); // && isFinite(n);
}

function toggle(what) {
    $(what).toggle('fast');
}

function setupSchoolListEmailModal() {
    $('#modSchoolListEmail').modal('show');
}

function setupSchooRatingModal(schoolname, rating, schoolpk) {
    $('.modReviewSchoolName').html(schoolname);
    $('#modReviewSchoolPK').val(schoolpk);
    $('#strModal').rating('update', rating);
    $('#modReview').modal('show');
}

function submitSchoolForm() {
    var email = $('#txtSchEmail').val();
    if (!isEmail(email)) {
        $('#divEmailSchError').addClass('alert-danger').removeClass('alert-success').text('Oops! Please type in an email address.').show();
        return;
    }
    var url = "/aj/ajSchoolListEmail.aspx";
    var postData = serTSSchools();
    postData += '&' + $('#frmEmailSchools').serialize();
    $.ajax({
        type: "POST",
        url: url,
        data: postData, // serializes the form's elements.
        success: function (data) {
            if (data.indexOf('err') == 0) {
                $('#divEmailSchError').addClass('alert-danger').removeClass('alert-success').text(data.substring(4)).show();
            }
            else {
                $('#modSchoolListEmail').modal('hide');
                $('#spSchEmail').text(email);
                $('#modSchThanks').modal('show');
            }
        }
    });
}

///Serialize My Schools in TS
function serTSSchools() {
    var g = $.totalStorage.getAll();
    var sRes = 's=';
    for (var i = 0; i < g.length; i++) {
        var s = g[i].key;
        // var sch = g[i].value;
        if (s[0] == 's' && s.length === 13) {
            sRes += s + "|";
        }
    }
    return sRes.slice(0, -1);;
}

function submitReviewForm() {
    var url = "/ajReviewSubmit.aspx";
    $.ajax({
        type: "POST",
        url: url,
        data: $("#frmReviewSubmit").serialize(), // serializes the form's elements.
        success: function (data) {
            if (data.indexOf('err') == 0) {
                $('#divReviewError').text(data.substring(3));
                $('#divReviewError').show();
            }
            else {
                $('#modReview').modal('hide');
                $('#modReviewThanks').modal('show');
            }
        }
    });
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function sendUpdateEmail(control, fips, leaid, schoolnum, email, type) {
    if (!isEmail(email)) {
        $(control).addClass('alert-danger').removeClass('alert-success').text('Please type in an email address.').show();
        return;
    }
    var str = 'e=' + email + '&f=' + fips + '&l=' + leaid + '&s=' + schoolnum + '&t=' + type;
    $.ajax({ type: 'GET', url: '/ajUpdateAdd.aspx?' + str, dataType: 'html', success: function (response) { sendUpdateEmailResp(control, response); } });
}


function sendUpdateEmailResp(control, response) {
    if (response) {
        $(control).addClass('alert-success').removeClass('alert-danger').text(response).show();
    } else {
        $(control).addClass('alert-success').removeClass('alert-danger').text('Thank you! We will notify you when we release new rankings!').show();
    }
}

//datachangesubmit.aspx
function CopyLocationAddressToMailingAddress() {
    var obj = document.getElementById("ctl00_ContentPlaceHolder1_chkSameAsLocation");
    if (obj.checked) {
        document.getElementById("ctl00_ContentPlaceHolder1_txtMSTREET").value = document.getElementById("ctl00_ContentPlaceHolder1_txtLSTREET").value;
        document.getElementById("ctl00_ContentPlaceHolder1_txtMCITY").value = document.getElementById("ctl00_ContentPlaceHolder1_txtLCITY").value;
        document.getElementById("ctl00_ContentPlaceHolder1_txtMZIP").value = document.getElementById("ctl00_ContentPlaceHolder1_txtLZIP").value;
        document.getElementById("ctl00_ContentPlaceHolder1_txtMZIP4").value = document.getElementById("ctl00_ContentPlaceHolder1_txtLZIP4").value;
    }
}
function chkChange(obj) {
    document.getElementById("ctl00_ContentPlaceHolder1_txtMSTREET").disabled = obj.checked;
    document.getElementById("ctl00_ContentPlaceHolder1_txtMCITY").disabled = obj.checked;
    document.getElementById("ctl00_ContentPlaceHolder1_txtMZIP").disabled = obj.checked;
    document.getElementById("ctl00_ContentPlaceHolder1_txtMZIP4").disabled = obj.checked;
    CopyLocationAddressToMailingAddress();
}

function ddlChange(obj) {
    if (obj.value == 2) {
        $('.SchoolProperty').hide('slow');
    } else {
        $('.SchoolProperty').show('slow');
    }
}

// Post to the provided URL with the specified parameters.
//http://stackoverflow.com/questions/133925/javascript-post-request-like-a-form-submit
function post(path, parameters) {
    var form = $('<form></form>');

    form.attr("method", "post");
    form.attr("action", path);

    $.each(parameters, function (key, value) {
        if (typeof value == 'object' || typeof value == 'array') {
            $.each(value, function (subkey, subvalue) {
                var field = $('<input />');
                field.attr("type", "hidden");
                field.attr("name", key + '[]');
                field.attr("value", subvalue);
                form.append(field);
            });
        } else {
            var field = $('<input />');
            field.attr("type", "hidden");
            field.attr("name", key);
            field.attr("value", value);
            form.append(field);
        }
    });

    // The form needs to be a part of the document in
    // order for us to be able to submit it.
    $(document.body).append(form);
    form.submit();
}

function modalOn(txt) {
    if (!txt) {
        $("#loading").html("Loading...");
    } else {
        $("#loading").text(txt);
    }
    $("body").addClass("loading");
}

function modalOff() {
    $("body").removeClass("loading");
}


//Performs a geocode lookup to retrieve the lat/long for a typed location
function geoCode(address, cb) {
    var geoCoder = new google.maps.Geocoder();
    geoCoder.geocode({ 'address': address }, cb);
}

//Google geocode successful: pass result to server for search
function geoCodeCB(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        //Let the web server figure it out.
        var postData = {
            "geocode": JSON.stringify(results),
            "q": inputFieldAC
        }

        post('/search.aspx?q=' + inputFieldAC, postData)
    } else {
        //Do a simple Google search on the result
        window.location.href = '/search.aspx?q=' + inputFieldAC;
    }
}

var bMobileHasGeolocation = 0;

//Determines if the device supports Geolocation -- call once on startup to establish variable
function initIsGeoEnabled() {
    if (navigator.geolocation) {
        bMobileHasGeolocation = 1;
    } else {
        bMobileHasGeolocation = 0;
    }
}

//Get the geolocation from the position sensor
function GetGeoLocationFromDevice() {
    var startPos;
    navigator.geolocation.getCurrentPosition(function (position) {
        startPos = position;
        lat = startPos.coords.latitude;
        lng = startPos.coords.longitude;
        GeoCodeReverse(lat, lng);
    }, function (error) {
        alert('Sorry, there was an error trying to retrieve your location.')

    });
}

//Performs a reverse geocode lookup to retrieve the location of the lat/long
function GeoCodeReverse(lat, lng) {
    var geoCoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat, lng);
    geoCoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var result = results[0].formatted_address;
            $('.typeahead').val(result);
        }
    });
}

function sd2ACChangeFIPS(FIPS, name) {
    $('.spFIPS').text(name);
    _acoFIPS = FIPS;

}
////Disallow enter keys on forms
//$(document).on("keypress", ":input:not(textarea)", function (event) {
//    return event.keyCode != 13;
//});

/*http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript*/
function getQueryStringValueByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function clearHiddenFieldOnTextChange(event) {
    var e = event || window.event;
    var code = e.keyCode;
    if ((code >= 32) && !((code >= 37) && (code <= 40)) || (code == 8)) {
        $(".ajaxResponse").each(function (n) { this.value = ""; });
    }
}

function cbACO(n, t) {
    if (n) {
        var i = n.v.split("_");
        switch (i[0]) {
            case "1":
            case "2":
                r2p.reqFilterType = "s";
                break;
            case "3":
                r2p.reqFilterType = "d";
                break;
            case "4":
            case "5":
                r2p.reqFilterType = "c";
                break;
            case "6":
                r2p.reqFilterType = "t";
                break;
            case "7":
                r2p.reqFilterType = "z"
        }
        r2p.reqFilterValue = i[1];
        r2p.reqFilterString = n.n;
    } else
        r2p.reqFilterType = "",
        r2p.reqFilterValue = "",
        r2p.reqFilterString = t
}

/* Google Surveys */
var iPgCount = 0;
function bumpSurvey() {
    iPgCount += 1;
    if (iPgCount >= 3) {
        try {
            ga('send', 'event', 'sd2', 'surveycall', pageName());
            _402_Show();
        } catch (e) { }
    }
}

function getSiteControlWidgetsOff() {
    _gscq.push(['hide', 92766]);
    _gscq.push(['hide', 96392]);
}

function getSiteControlWidgetsOn() {
    _gscq.push(['show', 92766]);
    _gscq.push(['show', 96392]);
}


var bFIPSIsLimiting;
function getLimitRev(what) {
    if (what == '&gt;= 95.0') {
        return '96.0';
    }
    if (what == '&gt;= 90.0') {
        return '91.0';
    }
    if (what == '&lt;= 5.0') {
        return '4.0';
    }
    if (what == '&lt;= 10.0') {
        return '9.0';
    }
    if (what == '') {
        return 'n/a';
    }
    return what;
}

function getLimit(what) {
    if (what == 96.0) {
        return '>= 95.0';
    }
    if (what == 91.0) {
        return '>= 90.0';
    }
    if (what == 4.0) {
        return '<= 5.0';
    }
    if (what == 9.0) {
        return '>= 10.0';
    }
    if (what == '') {
        return 'n/a';
    }
    return what;
}
