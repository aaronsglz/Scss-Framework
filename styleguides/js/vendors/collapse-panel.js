
function closeOpenPanels(root) {

    // Eliminar la clase active del link activo
    $(root).find("[data-toggle='collapse-panel']").removeClass('active').attr('aria-expanded', false);

    // Contraer el panel y eliminar la clase open
    $(root).find('.collapse-pane').slideUp().removeClass('open');
}


function togglePanel(link, target) {
    var root = $(link).data("root");

    if(typeof(root) === 'undefined') {

        // Panel solitario desplegable

        if( $(link).hasClass('active') ) {
            // Eliminar la clase active al link
            $(link).removeClass("active").attr("aria-expanded", false);

            // Borrar la clase open del panel desplegable
            $(target).slideUp().removeClass("open");

        } else {
            // Añadir la clase active al link
            $(link).addClass("active").attr("aria-expanded", true);

            // Añadir la clase open al panel desplegable
            $(target).slideDown().addClass("open");
        }
        
    } else {

        // Accordion

        if( $(link).hasClass('active') ) {

            closeOpenPanels(root);

        } else {

            closeOpenPanels(root);

            // Añadir la clase active al link
            $(link).addClass("active").attr("aria-expanded", true);

            // Desplegar el panel y añadir la clase open
            $(root).find(target).slideDown().addClass("open");
        }
    }
}



$(document).on("click", "[data-toggle='collapse-panel']", function (e) {
    e.preventDefault();
    
    togglePanel($(this), $(this).attr('href'));
});