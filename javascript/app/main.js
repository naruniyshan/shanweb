
let IndexCon = ["jquery", "jquery.menunav", "copyright", "SmallNav", "merchandise"];

define(IndexCon, function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').menunav().copyright().SmallNav().merchandise();
    });
});