/* Collapsible Modules */

/* Returns a list of collapsed modules, from the 'collapse' cookie */
function kbCommonGetCollapsed() {
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf('collapse=') != -1) return decodeURIComponent(c.substring(9, c.length));
    }
    return "";
}   

/* Adds chevron to side modules, and collapses them if listed in the cookie */
$(".kbleftlinks > .head, .kbrightlinks > .head, #qlinks > .head, #resource-links > .head, #qcats > .head, #out > .head, #out-green > .head, #news > h2, #topDocs > h2, #recentDocs > h2, .custom > h2").each(function() {
    $kbCommonControl = $(this).parent().children('*:not(:first-child)').attr('id');
	$kbCommonSection = $(this).text();
    $(this).append("<p class='kb-common-chevron' title='Click to collapse/expand " + $kbCommonSection + "' aria-label='Hide/Show " + $kbCommonSection + "' aria-controls='" + $kbCommonControl + "' aria-expanded='true' tabindex='0'>&#8250;</p>");
    if (kbCommonGetCollapsed().indexOf('|' + $(this).text() + '|') != -1) {
        $(this).parent().addClass('kb-common-collapsed');
        $(this).children('.kb-common-chevron').attr('aria-expanded', 'false');
        $(this).parent().children('*:not(:first-child)').attr('aria-hidden', 'true');
    }
});

/* Collapses/uncollapses side modules when chevron is clicked */
$("p.kb-common-chevron").on("click keydown", function(e) {
    if (e.type == "click" || e.keyCode == 13 || e.keyCode == 32) {
        $header = $(this).parent();
        $content = $header.parent().children('*:not(:first-child)');
        $cookieText = kbCommonGetCollapsed();
        if ($header.parent().hasClass('kb-common-collapsed')) {
            /* Uncollapse */
            $content.css('display', 'none');
            $(this).attr('aria-expanded', 'true');
            $content.attr('aria-hidden', 'false');
            $header.parent().removeClass('kb-common-collapsed');
            $content.slideDown(250).promise().done(function() {
                $begin = $cookieText.substring(0, $cookieText.indexOf('|' + $header.text() + '|'));
                $end = $cookieText.substring($cookieText.indexOf('|' + $header.text() + '|') +
                    $header.text().length + 2);
                document.cookie = 'collapse=' + encodeURIComponent($begin + $end);
                $content.css('display', '');
            });
        } else {
            /* Collapse */
            $(this).attr('aria-expanded', 'false');
            $content.attr('aria-hidden', 'true');
            $content.slideUp(250).promise().done(function() {
                $header.parent().addClass('kb-common-collapsed');
                $content.css('display', '');
                document.cookie = 'collapse=' + encodeURIComponent($cookieText + '|' + $header.text() + '|');
            });
        }
    }
});