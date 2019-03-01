$('.faq_item_title_inner-h').on('click',function(){
        $(this).parents('.faq_item-h').find('.faq_item_body-h').slideToggle(300);
        $(this).toggleClass('open');
        if ($(this).hasClass('show_all')){
                if ($(this).hasClass('open')) {
                    $(this).html('Свернуть все');
                $('.faq_item_title_inner-h:not(.open)').trigger('click');
            } else {
                $(this).html('Смотреть все');
                $('.faq_item_title_inner-h.open').trigger('click');
            }
        }
    });
