(function( $ ){

	$.fn.FloatLabel = function( options ){

		var defaults = {
			populatedClass : 'populated',
			focusedClass : 'focused'
		},
			settings = $.extend({}, defaults, options);

		return this.each(function(){

			var element = $(this),
				label = element.find('label'),
				input = element.find('textarea, input');
					input.val( label.text() );
      if(input.val() == '') {
        input.val( label.text() );
      } else {
        element.addClass( settings.populatedClass );
      }
			input.on( 'focus', function(){
				element.addClass( settings.focusedClass );
                                if( input.val() === label.text() ){
					input.val('');
                                if(element.find('#input-holder').hasClass('input-group')){
                                  element.find('#input-holder').removeClass('input-group');
                                  element.find('.input-group-addon').hide();
                                }
				} else {
					element.addClass( settings.populatedClass );
                                if(element.find('#input-holder').hasClass('input-group')){
                                  element.find('#input-holder').removeClass('input-group');
                                  element.find('.input-group-addon').hide();
                                }
				}

			});

			input.on( 'blur', function(){
				element.removeClass( settings.focusedClass );
				
				if( !input.val() ){
					input.val( label.text() );
					element.removeClass( settings.populatedClass );
					element.find('#input-holder').attr('class', 'input-group');
					element.find('.input-group-addon').css('display', 'table-cell');
				} else {
                                 element.find('#input-holder').removeClass('input-group');
                                 element.find('.input-group-addon').hide();
				}
			});

			input.on( 'keyup', function(){
				element.addClass( settings.populatedClass );
			});

		});

	};

})( jQuery );
