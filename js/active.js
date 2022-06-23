$('.nav-list').find(".nav-link").each(function(){
if($(this).attr("href") == $(location).attr("href")){
$(this).addClass("active");
}
});