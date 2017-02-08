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
