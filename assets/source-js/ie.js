$(document).ready(function() {

    var head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    style.styleSheet.cssText = ':before,:after{content:none !important';
    head.appendChild(style);
    setTimeout(function(){
        head.removeChild(style);
    }, 0);

    $("#top5-list > li.top5 > a > div.icon-container").corner("36px");
    $("#top5-list > li.top5 > section.pContainer").corner("12px");

    $("#top5-list > li.top5 > a").click(function(e) {
        e.preventDefault();
    });
 
 });