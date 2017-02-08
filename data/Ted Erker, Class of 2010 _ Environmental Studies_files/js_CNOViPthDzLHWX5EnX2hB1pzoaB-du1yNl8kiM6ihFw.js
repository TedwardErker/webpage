(function ($) {
  Drupal.behaviors.innovate_mobility = {
    attach: function(context) {
       //Inline images need to resize on browser resize
       $('.page-node .field-type-text-with-summary img').each(function() {
          $(this).removeAttr('height');
          $(this).removeAttr('width');
          $(this).css('width', 'auto');
          $(this).css('height', 'auto');
       });
      $('.node-teaser .field-type-text-with-summary img').each(function() {
          $(this).removeAttr('height');
          $(this).removeAttr('width');
          $(this).css('width', 'auto');
          $(this).css('height', 'auto');
          $(this).css('margin-left', '');
          $(this).css('margin-right', '');
       });

      //Inline tables need to resize if they can
      $('.page-node .field-type-text-with-summary table td').each(function() {
          $(this).removeAttr('width');
          $(this).css('width', 'auto');
       });

      //Allow for hiding and showing the main menu at mobile widths
      $('#header #navbar h2').click(function() {
        $('#header #navbar .content').toggle();
		$('#header #navbar .secondary-main-menu-links').toggle();
        if ($('#header #navbar h2').hasClass('open-menu')) {
          $('#header #navbar h2').removeClass('open-menu');
        }
        else {
          $('#header #navbar h2').addClass('open-menu');
        }
      }); 
      $(window).resize(function(){
         if ($(window).width() > 767) {
           $('#header #navbar h2').removeClass('open-menu');
         }
      });
	  //Move secondary menu links into #navbar
	  if ($(window).width() < 768) {
	    $('.secondary-main-menu-links').insertAfter($('#navbar .region-menu-bar'));
	  }

      //Search placeholder text fallback for IE and Firefox
      if (! ("placeholder" in document.createElement("input"))) {
        $(':input[placeholder]').each(function(){			   
          if( $(this).val() == $(this).attr('placeholder') ) {
            $(this).val('');
          }
          if(!$(this).val() > 0){
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('input-placeholder');
          }
       }).live('focus', function(e){
         if($(this).hasClass('input-placeholder')){
           $(this).val('');
           $(this).removeClass('input-placeholder');
         }
      }).live('blur', function(e){
        if(!$(this).val()){
          $(this).addClass('input-placeholder');
          $(this).val($(this).attr('placeholder'));
		  
        }
      });
     }
    }
  };
})(jQuery);;
(function ($) {
  Drupal.behaviors.innovate_imagecaptions = {
    attach: function(context) {
       //Add only on page load
       if(context == document){
         $('.page-node .field-type-text-with-summary img').each(function() {
            if ($(this).attr('alt')) {
              var floatClasses = '';
              var maxWidth = '';
              if ($(this).css('float')) {
                floatClasses = ' ' + $(this).css('float');
                $(this).css('float', 'none');
                $(this).css('margin', '0');
              }
              if($(this).width() > 0) {
                maxWidth = ' style="max-width:' + $(this).width() + 'px;"';
              }
              $(this).wrap('<div class="inline-image-wrapper' + floatClasses  + '"></div>');
              $(this).parent().append('<div class="inline-image-caption"' + maxWidth + '>' + $(this).attr('alt')  + '</div>');
            }
         });
      }
    }
  };
})(jQuery);
;
(function ($) {
  Drupal.behaviors.innovate_equalizeblocks = {
    attach: function(context) {
      // check if there are images that still need to load
      if(!($('.panel-row-resize img').length > 0) || $('.panel-row-resize img').width() > 0 || $('.panel-row-resize img').complete) {
        if ($(window).width() > 747) {						 
          this.adjustHeights(context);	
          //alert('resized early');
        }
      } 
      //If images still need to load (webkit), wait to resize
      else {
        this.resizeLater = true;
      }
      var _ = this;
      $(window).resize(function(){
        $('.panel-content-color').css('height','auto');
        $('.panel-content-color .rounded-corners').css('height','auto');
        if ($(window).width() > 747) {
          _.adjustHeights(context);
          $('#header #navbar .content').show();
        }
      });
    },

    resizeLater: false,

    adjustHeights: function (context) {
      var resize_rows = $('.panel-row-resize', context);
      var adjusted = $([]);
      for (var i = 0; i < resize_rows.length; i++) {
        // recursively resize children
        if($('.panel-row-resize', resize_rows[i]).length > 0) {
          var children = Drupal.behaviors.innovate_equalizeblocks.adjustHeights(resize_rows[i]);
          adjusted = adjusted.add(children);
        }
        var max_height = 0;
        // don't run height adjustments twice on a column
        var resize_columns = $('.panel-content-color', resize_rows.eq(i)).filter(function(k){
          if(adjusted.filter(this).length > 0) return false; return true;
        });
        for (j = 0; j < resize_columns.length; j++) {
          if ( $(resize_columns[j]).height() > max_height ) {
            max_height = $(resize_columns[j]).height();
          }
        }
        $(resize_columns).css('height', max_height + 'px');
        if ($('.rounded-corners', resize_columns).length > 0) {
          $('.rounded-corners ', resize_columns).css('height', max_height + 'px');
        }
        adjusted = adjusted.add(resize_columns);
        // if a column was just stretched, there may be empty space below the
        // last child column, so stretch those to fill the parent
        resize_columns.each(function(l) {
          if($('.panel-row-resize', this).length > 0) {
            var totalHeight = 0;
            $(this).children().each(function(){
              totalHeight = totalHeight + $(this).outerHeight();
            });
            var deltaHeight = max_height - totalHeight;
            if(deltaHeight > 0) {
              $('.panel-row-resize:last .panel-content-color', this).each(function(){
                $(this).css('height', deltaHeight + $(this).outerHeight() + 'px');
              });
            }
          }
        });
      }
      return adjusted;
    }
  };

  //Because webkit doesn't load image sizes before this executes every time, call later
  $(window).load(function() {
    if (Drupal.behaviors.innovate_equalizeblocks.resizeLater && $(window).width() > 747) {
      Drupal.behaviors.innovate_equalizeblocks.adjustHeights(document);	
      //alert('resized later');
    }
  });

})(jQuery);
;
(function ($) {
  Drupal.behaviors.awesomesauce = {
    attach: function(context, settings) {
       //Add only on page load
       if(context == document){
         if (settings.awesomesauce['albumcaptions']) {
           //Add captions on photo galleries
           $('.node-type-album .field-type-image img').each(function() {
             if ($(this).attr('title')) {
               var maxWidth = '';
               if($(this).width() > 0) {
                 $width = $(this).width() + 8; //Our albums have 8px of padding + border around thumbnails
                 //maxWidth = ' style="max-width:' + $width + 'px;"';
                 maxWidth = ' style="max-width:' + '162' + 'px;"'; // the album thumbnail width is always gonna be 155 px, so make the caption span the width.
               }
			   $caption = '<span class="field-image-caption"' + maxWidth + '>' + $(this).attr('title').substring(0, 70);
			   if ($(this).attr('title').length > 70) {
				 $caption = $caption + '...';
			   }
			   $caption = $caption + '</span>';
               $(this).parent().append($caption);
             }
          });
        }
		if (settings.awesomesauce['articlecaptions']) {
          //Add captions on photo galleries
          $('.node-type-article .field-type-image img').each(function() {
            if ($(this).attr('title')) {
              var maxWidth = '';
              if($(this).width() > 0) {
                $width = $(this).width(); //Our albums have 8px of padding + border around thumbnails
                maxWidth = ' style="max-width:' + $width + 'px;"';
              }
			  $caption = '<span class="field-image-caption"' + maxWidth + '>' + $(this).attr('title');
			  $caption = $caption + '</span>';
              $(this).parent().append($caption);
			  $('.node-type-article .field-type-image').addClass('image-has-caption');
            }
			$(this).attr('title', 'view full-size image');
          });
        }
		if (settings.awesomesauce['eventcaptions']) {
          //Add captions on photo galleries
          $('.node-type-event .field-type-image img').each(function() {
            if ($(this).attr('title')) {
              var maxWidth = '';
              if($(this).width() > 0) {
                $width = $(this).width(); //Our albums have 8px of padding + border around thumbnails
                maxWidth = ' style="max-width:' + $width + 'px;"';
              }
			  $caption = '<span class="field-image-caption"' + maxWidth + '>' + $(this).attr('title');
			  $caption = $caption + '</span>';
              $(this).parent().append($caption);
			  $('.node-type-event .field-type-image').addClass('image-has-caption');
            }
			$(this).attr('title', 'view full-size image');
          });
        }
      } 
    }
  };
})(jQuery);;
