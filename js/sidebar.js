// Navigation Scripts to Show Sidebar on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 768;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.intro-header').height()
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    $("#wrapper").removeClass("hide-sidebar");
                } else {
                    //if scrolling down...
                    if (currentTop > headerHeight) {
                        $("#wrapper").addClass("hide-sidebar");
                    }
                }
                this.previousTop = currentTop;
            });
    }
});