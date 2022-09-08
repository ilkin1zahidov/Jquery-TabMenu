$(function (){

    let headers = $(".tab-menu .tab-header div");
    let contents = $(".tab-menu .tab-body div");

    for (const header of headers) {
        $(header).on("click", function(){
            
            let activeElem = $(".active")

            $(activeElem ).removeClass("active");

            $(this).addClass("active");

            for (const content of contents) {
                if($(this).attr("data-id") == $(content).attr("data-id")){
                    $(content).removeClass("d-none")
                }else{
                    $(content).addClass("d-none")
                }
            }
        })
    }









});