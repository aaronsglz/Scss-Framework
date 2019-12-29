function closeDropmenu() {
    $('.js-backdrop').remove();

    $('a[data-toggle="dropmenu"]').each(function(item){
        $(this).parent('.dropmenu').removeClass('dropmenu--open');
    });
}

$('body').on('click', 'a[data-toggle="dropmenu"]', function(event){
    event.preventDefault();
    event.stopPropagation();

    var parent = $(this).parent();
    var wasOpen = parent.hasClass('dropmenu--open');
    
    closeDropmenu();
    
    if(!wasOpen) {
        parent.addClass('dropmenu--open');
        parent.prepend('<div class="dropmenu__backdrop  js-backdrop"></div>');
    }
});

$('body').on('click', '.js-backdrop', function(event){
    event.preventDefault();
    event.stopPropagation();
    
    closeDropmenu();
});