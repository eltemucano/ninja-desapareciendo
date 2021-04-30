$(document).ready(function(){
    //adjunta un "click event listener" a todas las etiquetas img cuando el documento esté listo
        $('img').on("click",function(){
            $(this).hide();
        });
        $('.boton_reset').on("click",function(){
            $('img').show();
        });
    });