/*!
	jQuery Colorbox v1.4.13 - 2013-04-11
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=te+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(t){var e=H.length,i=(j+t)%e;return 0>i?e+i:i}function h(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():n())/100:1)*parseInt(t,10))}function l(t,e){return t.photo||t.photoRegex.test(e)}function s(t,e){return t.retinaUrl&&i.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function a(t){"contains"in x[0]&&!x[0].contains(t.target)&&(t.stopPropagation(),x.focus())}function d(){var e,i=t.data(O,Z);null==i?(D=t.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):D=t.extend({},i);for(e in D)t.isFunction(D[e])&&"on"!==e.slice(0,2)&&(D[e]=D[e].call(O));D.rel=D.rel||O.rel||t(O).data("rel")||"nofollow",D.href=D.href||t(O).attr("href"),D.title=D.title||O.title,"string"==typeof D.href&&(D.href=t.trim(D.href))}function c(i,o){t(e).trigger(i),se.trigger(i),t.isFunction(o)&&o.call(O)}function u(){var t,e,i,o,n,r=te+"Slideshow_",h="click."+te;D.slideshow&&H[1]?(e=function(){clearTimeout(t)},i=function(){(D.loop||H[j+1])&&(t=setTimeout(J.next,D.slideshowSpeed))},o=function(){M.html(D.slideshowStop).unbind(h).one(h,n),se.bind(ne,i).bind(oe,e).bind(re,n),x.removeClass(r+"off").addClass(r+"on")},n=function(){e(),se.unbind(ne,i).unbind(oe,e).unbind(re,n),M.html(D.slideshowStart).unbind(h).one(h,function(){J.next(),o()}),x.removeClass(r+"on").addClass(r+"off")},D.slideshowAuto?o():n()):x.removeClass(r+"off "+r+"on")}function f(i){G||(O=i,d(),H=t(O),j=0,"nofollow"!==D.rel&&(H=t("."+ee).filter(function(){var e,i=t.data(this,Z);return i&&(e=t(this).data("rel")||i.rel||this.rel),e===D.rel}),j=H.index(O),-1===j&&(H=H.add(O),j=H.length-1)),g.css({opacity:parseFloat(D.opacity),cursor:D.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&x.add(g).removeClass(V),D.className&&x.add(g).addClass(D.className),V=D.className,K.html(D.close).show(),$||($=q=!0,x.css({visibility:"hidden",display:"block"}),W=o(ae,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(v),B=b.height()+k.height()+v.outerHeight(!0)-v.height(),N=C.width()+T.width()+v.outerWidth(!0)-v.width(),z=W.outerHeight(!0),A=W.outerWidth(!0),D.w=h(D.initialWidth,"x"),D.h=h(D.initialHeight,"y"),J.position(),u(),c(ie,D.onOpen),_.add(F).hide(),x.focus(),e.addEventListener&&(e.addEventListener("focus",a,!0),se.one(he,function(){e.removeEventListener("focus",a,!0)})),D.returnFocus&&se.one(he,function(){t(O).focus()})),w())}function p(){!x&&e.body&&(X=!1,E=t(i),x=o(ae).attr({id:Z,"class":t.support.opacity===!1?te+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=o(ae,"Overlay").hide(),S=o(ae,"LoadingOverlay").add(o(ae,"LoadingGraphic")),y=o(ae,"Wrapper"),v=o(ae,"Content").append(F=o(ae,"Title"),I=o(ae,"Current"),P=t('<button type="button"/>').attr({id:te+"Previous"}),R=t('<button type="button"/>').attr({id:te+"Next"}),M=o("button","Slideshow"),S,K=t('<button type="button"/>').attr({id:te+"Close"})),y.append(o(ae).append(o(ae,"TopLeft"),b=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(C=o(ae,"MiddleLeft"),v,T=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),L=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),_=R.add(P).add(I).add(M),t(e.body).append(g,x.append(y,L)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.control||(t.preventDefault(),f(this))}return x?(X||(X=!0,R.click(function(){J.next()}),P.click(function(){J.prev()}),K.click(function(){J.close()}),g.click(function(){D.overlayClose&&J.close()}),t(e).bind("keydown."+te,function(t){var e=t.keyCode;$&&D.escKey&&27===e&&(t.preventDefault(),J.close()),$&&D.arrowKey&&H[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),R.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+te,"."+ee,i):t("."+ee).live("click."+te,i)),!0):!1}function w(){var e,n,r,a=J.prep,u=++de;q=!0,U=!1,O=H[j],d(),c(le),c(oe,D.onLoad),D.h=D.height?h(D.height,"y")-z-B:D.innerHeight&&h(D.innerHeight,"y"),D.w=D.width?h(D.width,"x")-A-N:D.innerWidth&&h(D.innerWidth,"x"),D.mw=D.w,D.mh=D.h,D.maxWidth&&(D.mw=h(D.maxWidth,"x")-A-N,D.mw=D.w&&D.w<D.mw?D.w:D.mw),D.maxHeight&&(D.mh=h(D.maxHeight,"y")-z-B,D.mh=D.h&&D.h<D.mh?D.h:D.mh),e=D.href,Q=setTimeout(function(){S.show()},100),D.inline?(r=o(ae).hide().insertBefore(t(e)[0]),se.one(le,function(){r.replaceWith(W.children())}),a(t(e))):D.iframe?a(" "):D.html?a(D.html):l(D,e)?(e=s(D,e),t(U=new Image).addClass(te+"Photo").bind("error",function(){D.title=!1,a(o(ae,"Error").html(D.imgError))}).one("load",function(){var e;u===de&&(U.alt=t(O).attr("alt")||t(O).attr("data-alt")||"",U.longdesc=t(O).attr("longdesc"),D.retinaImage&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),D.scalePhotos&&(n=function(){U.height-=U.height*e,U.width-=U.width*e},D.mw&&U.width>D.mw&&(e=(U.width-D.mw)/U.width,n()),D.mh&&U.height>D.mh&&(e=(U.height-D.mh)/U.height,n())),D.h&&(U.style.marginTop=Math.max(D.mh-U.height,0)/2+"px"),H[1]&&(D.loop||H[j+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){a(U)},1))}),setTimeout(function(){U.src=e},1)):e&&L.load(e,D.data,function(e,i){u===de&&a("error"===i?o(ae,"Error").html(D.xhrError):t(this).contents())})}var g,x,y,v,b,C,T,k,H,E,W,L,S,F,I,M,R,P,K,_,D,B,N,z,A,O,j,U,$,q,G,Q,J,V,X,Y={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},Z="colorbox",te="cbox",ee=te+"Element",ie=te+"_open",oe=te+"_load",ne=te+"_complete",re=te+"_cleanup",he=te+"_closed",le=te+"_purge",se=t("<a/>"),ae="div",de=0;t.colorbox||(t(p),J=t.fn[Z]=t[Z]=function(e,i){var o=this;if(e=e||{},p(),m()){if(t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;i&&(e.onComplete=i),o.each(function(){t.data(this,Z,t.extend({},t.data(this,Z)||Y,e))}).addClass(ee),(t.isFunction(e.open)&&e.open.call(o)||e.open)&&f(o[0])}return o},J.position=function(t,e){function i(t){b[0].style.width=k[0].style.width=v[0].style.width=parseInt(t.style.width,10)-N+"px",v[0].style.height=C[0].style.height=T[0].style.height=parseInt(t.style.height,10)-B+"px"}var o,r,l,s=0,a=0,d=x.offset();E.unbind("resize."+te),x.css({top:-9e4,left:-9e4}),r=E.scrollTop(),l=E.scrollLeft(),D.fixed?(d.top-=r,d.left-=l,x.css({position:"fixed"})):(s=r,a=l,x.css({position:"absolute"})),a+=D.right!==!1?Math.max(E.width()-D.w-A-N-h(D.right,"x"),0):D.left!==!1?h(D.left,"x"):Math.round(Math.max(E.width()-D.w-A-N,0)/2),s+=D.bottom!==!1?Math.max(n()-D.h-z-B-h(D.bottom,"y"),0):D.top!==!1?h(D.top,"y"):Math.round(Math.max(n()-D.h-z-B,0)/2),x.css({top:d.top,left:d.left,visibility:"visible"}),t=x.width()===D.w+A&&x.height()===D.h+z?0:t||0,y[0].style.width=y[0].style.height="9999px",o={width:D.w+A+N,height:D.h+z+B,top:s,left:a},0===t&&x.css(o),x.dequeue().animate(o,{duration:t,complete:function(){i(this),q=!1,y[0].style.width=D.w+A+N+"px",y[0].style.height=D.h+z+B+"px",D.reposition&&setTimeout(function(){E.bind("resize."+te,J.position)},1),e&&e()},step:function(){i(this)}})},J.resize=function(t){$&&(t=t||{},t.width&&(D.w=h(t.width,"x")-A-N),t.innerWidth&&(D.w=h(t.innerWidth,"x")),W.css({width:D.w}),t.height&&(D.h=h(t.height,"y")-z-B),t.innerHeight&&(D.h=h(t.innerHeight,"y")),t.innerHeight||t.height||(W.css({height:"auto"}),D.h=W.height()),W.css({height:D.h}),J.position("none"===D.transition?0:D.speed))},J.prep=function(e){function i(){return D.w=D.w||W.width(),D.w=D.mw&&D.mw<D.w?D.mw:D.w,D.w}function n(){return D.h=D.h||W.height(),D.h=D.mh&&D.mh<D.h?D.mh:D.h,D.h}if($){var h,a="none"===D.transition?0:D.speed;W.empty().remove(),W=o(ae,"LoadedContent").append(e),W.hide().appendTo(L.show()).css({width:i(),overflow:D.scrolling?"auto":"hidden"}).css({height:n()}).prependTo(v),L.hide(),t(U).css({"float":"none"}),h=function(){function e(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var i,n,h=H.length,d="frameBorder",u="allowTransparency";$&&(n=function(){clearTimeout(Q),S.hide(),c(ne,D.onComplete)},F.html(D.title).add(W).show(),h>1?("string"==typeof D.current&&I.html(D.current.replace("{current}",j+1).replace("{total}",h)).show(),R[D.loop||h-1>j?"show":"hide"]().html(D.next),P[D.loop||j?"show":"hide"]().html(D.previous),D.slideshow&&M.show(),D.preloading&&t.each([r(-1),r(1)],function(){var e,i,o=H[this],n=t.data(o,Z);n&&n.href?(e=n.href,t.isFunction(e)&&(e=e.call(o))):e=t(o).attr("href"),e&&l(n,e)&&(e=s(n,e),i=new Image,i.src=e)})):_.hide(),D.iframe?(i=o("iframe")[0],d in i&&(i[d]=0),u in i&&(i[u]="true"),D.scrolling||(i.scrolling="no"),t(i).attr({src:D.href,name:(new Date).getTime(),"class":te+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",n).appendTo(W),se.one(le,function(){i.src="//about:blank"}),D.fastIframe&&t(i).trigger("load")):n(),"fade"===D.transition?x.fadeTo(a,1,e):e())},"fade"===D.transition?x.fadeTo(a,0,function(){J.position(0,h)}):J.position(a,h)}},J.next=function(){!q&&H[1]&&(D.loop||H[j+1])&&(j=r(1),f(H[j]))},J.prev=function(){!q&&H[1]&&(D.loop||j)&&(j=r(-1),f(H[j]))},J.close=function(){$&&!G&&(G=!0,$=!1,c(re,D.onCleanup),E.unbind("."+te),g.fadeTo(200,0),x.stop().fadeTo(300,0,function(){x.add(g).css({opacity:1,cursor:"auto"}).hide(),c(le),W.empty().remove(),setTimeout(function(){G=!1,c(he,D.onClosed)},1)}))},J.remove=function(){x&&(x.stop(),t.colorbox.close(),x.stop().remove(),g.remove(),G=!1,x=null,t("."+ee).removeData(Z).removeClass(ee),t(e).unbind("click."+te))},J.element=function(){return t(O)},J.settings=Y)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxStockholmsyndromeStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_open', function () {
      // Hide close button initially.
      $('#cboxClose', context).css('opacity', 0);
    });
    $(context).bind('cbox_load', function () {
      // Hide close button. (It doesn't handle the load animation well.)
      $('#cboxClose', context).css('opacity', 0);
    });
    $(context).bind('cbox_complete', function () {
      // Show close button with a delay.
      $('#cboxClose', context).fadeTo('fast', 0, function () {$(this).css('opacity', 1)});
    });
  }
};

})(jQuery);
;

(function ($) {
  Drupal.Panels = Drupal.Panels || {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
// $Id: extlink.js,v 1.8 2010/05/26 01:25:56 quicksketch Exp $
(function ($) {

function extlinkAttach(context) {
  // Strip the host name down, removing ports, subdomains, or www.
  var pattern = /^(([^\/:]+?\.)*)([^\.:]{4,})((\.[a-z]{1,4})*)(:[0-9]{1,5})?$/;
  var host = window.location.host.replace(pattern, '$3$4');
  var subdomain = window.location.host.replace(pattern, '$1');

  // Determine what subdomains are considered internal.
  if (Drupal.settings.extlink.extSubdomains) {
    var subdomains = "([^/]*\\.)?";
  }
  else if (subdomain == 'www.' || subdomain == '') {
    var subdomains = "(www\\.)?";
  }
  else {
    var subdomains = subdomain.replace(".", "\\.");
  }

  // Build regular expressions that define an internal link.
  var internal_link = new RegExp("^https?://" + subdomains + host, "i");

  // Extra internal link matching.
  var extInclude = false;
  if (Drupal.settings.extlink.extInclude) {
    extInclude = new RegExp(Drupal.settings.extlink.extInclude.replace(/\\/, '\\'));
  }

  // Extra external link matching.
  var extExclude = false;
  if (Drupal.settings.extlink.extExclude) {
    extExclude = new RegExp(Drupal.settings.extlink.extExclude.replace(/\\/, '\\'));
  }

  // Find all links which are NOT internal and begin with http (as opposed
  // to ftp://, javascript:, etc. other kinds of links.
  // When operating on the 'this' variable, the host has been appended to
  // all links by the browser, even local ones.
  // In jQuery 1.1 and higher, we'd use a filter method here, but it is not
  // available in jQuery 1.0 (Drupal 5 default).
  var external_links = new Array();
  var mailto_links = new Array();
  $("a:not(." + Drupal.settings.extlink.extClass + ", ." + Drupal.settings.extlink.mailtoClass + ")", context).each(function(el) {
    try {
      var url = this.href.toLowerCase();
      if (url.indexOf('http') == 0 && (!url.match(internal_link) || (extInclude && url.match(extInclude))) && !(extExclude && url.match(extExclude))) {
        external_links.push(this);
      }
      else if (url.indexOf('mailto:') == 0) {
        mailto_links.push(this);
      }
    }
    // IE7 throws errors often when dealing with irregular links, such as:
    // <a href="node/10"></a> Empty tags.
    // <a href="http://user:pass@example.com">example</a> User:pass syntax.
    catch(error) {
      return false;
    }
  });

  if (Drupal.settings.extlink.extClass) {
    // Apply the "ext" class to all links not containing images.
    if (parseFloat($().jquery) < 1.2) {
      $(external_links).not('[img]').addClass(Drupal.settings.extlink.extClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Drupal.settings.extlink.extClass + '></span>'); });
    }
    else {
      $(external_links).not($(external_links).find('img').parents('a')).addClass(Drupal.settings.extlink.extClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Drupal.settings.extlink.extClass + '></span>'); });
    }
  }

  if (Drupal.settings.extlink.mailtoClass) {
    // Apply the "mailto" class to all mailto links not containing images.
    if (parseFloat($().jquery) < 1.2) {
      $(mailto_links).not('[img]').addClass(Drupal.settings.extlink.mailtoClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Drupal.settings.extlink.mailtoClass + '></span>'); });
    }
    else {
      $(mailto_links).not($(mailto_links).find('img').parents('a')).addClass(Drupal.settings.extlink.mailtoClass).each(function() { if ($(this).css('display') == 'inline') $(this).after('<span class=' + Drupal.settings.extlink.mailtoClass + '></span>'); });
    }
  }

  if (Drupal.settings.extlink.extTarget) {
    // Apply the target attribute to all links.
    $(external_links).attr('target', Drupal.settings.extlink.extTarget);
  }

  if (Drupal.settings.extlink.extAlert) {
    // Add pop-up click-through dialog.
    $(external_links).click(function(e) {
     return confirm(Drupal.settings.extlink.extAlertText);
    });
  }

  // Work around for Internet Explorer box model problems.
  if (($.support && !($.support.boxModel === undefined) && !$.support.boxModel) || ($.browser.msie && parseInt($.browser.version) <= 7)) {
    $('span.ext, span.mailto').css('display', 'inline-block');
  }
}

Drupal.behaviors.extlink = {
  attach: function(context){
    extlinkAttach(context);
  }
}

})(jQuery);
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", "event", "Downloads", Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(), Drupal.googleanalytics.getPageUrl(this.href));
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(this.href) });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", "event", "Mails", "Click", this.href.substring(7));
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode != 2 || (Drupal.settings.googleanalytics.trackDomainMode == 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", "event", "Outbound links", "Click", this.href);
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga('send', 'pageview', location.pathname + location.search + location.hash);
    }
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function () {
    var href = $.colorbox.element().attr("href");
    if (href) {
      ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(href) });
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
