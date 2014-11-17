$(document).ready(function() {

	// if IE 8, get the size of the window and assign size classes to container of the grid blocks
    if ($("html").hasClass("ie8")) {
        function removeIE8SizeClasses() {
            $("body").removeClass("size-mobile").removeClass("size-tablet").removeClass("size-tablet-A").removeClass("size-tablet-B").removeClass("size-desktop").removeClass("size-desktop-A").removeClass("size-desktop-B");
                clearIE8Borders();
        }
        function clearIE8Borders() {
            $(".grid-block").removeClass("rightColEnd").removeClass("topBorder");
        }
        function setWindowSizes() {
            var windowSize = $(window).width();
            if (windowSize <= 480) {
                removeIE8SizeClasses();
                $("body").addClass("size-mobile");
            } else if (windowSize > 480 && windowSize <= 1024) {
                if (windowSize <= 767) {
                    removeIE8SizeClasses();
                    $("body").addClass("size-tablet size-tablet-A");
                } else {
                    removeIE8SizeClasses();
                    $("body").addClass("size-tablet size-tablet-B");
                }
                $(".ie8 .size-tablet .grid-block:not(.new-icon-block):nth-child(even)").addClass("rightColEnd");
                $(".ie8 .size-tablet .grid-block:not(.new-icon-block):nth-child(-n+2)").addClass("topBorder");
                $(".new-icon-block:nth-child(5n-4)").addClass("leftColEnd");
            } else if (windowSize > 1024) {
                if (windowSize <= 1199) {
                    removeIE8SizeClasses();
                    $("body").addClass("size-desktop size-desktop-A");
                } else {
                    removeIE8SizeClasses();
                    $("body").addClass("size-desktop size-desktop-B");
                }
                $(".ie8 .size-desktop .grid-block:not(.new-icon-block):nth-child(3n)").addClass("rightColEnd");
                $(".ie8 .size-desktop .grid-block:not(.new-icon-block):nth-child(-n+3)").addClass("topBorder");
                $(".ie8 .size-desktop .new-icon-block:nth-child(4n)").addClass("rightColEnd");
                $(".ie8 .size-desktop .new-icon-block:nth-child(-n+4)").addClass("topBorder");
            }
        }
        setWindowSizes();
        $(window).on("resize", setWindowSizes);
    }

});