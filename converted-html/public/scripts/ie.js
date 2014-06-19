$(document).ready(function() {

      var head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    style.styleSheet.cssText = ':before,:after{content:none !important';
    head.appendChild(style);
    setTimeout(function(){
        head.removeChild(style);
    }, 0);


    $('body').addClass('oldIE');


    $(".kroger-rsu-modal h3.rsu-btn").corner("12px");
    $(".kroger-rsu-modal h3.rsu-btn span.rsu-icon").corner("24px");
    $(".kroger-rsu-modal .rsu-container").corner("12px");
    $(".kroger-rsu-modal .rsu-container a.seeRewardsStatement").corner("12px");

 });