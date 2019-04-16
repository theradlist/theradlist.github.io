// http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
// var shuffledlist = shuffle(list);
function shuffle(sourceArray) {
    for (var i = 0; i < 11; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

var featuredPlace = list[0];

// Toggle the filterview on mobile when it's pressed 
toggleMobileNavView = function () {
    // $(window).scrollTop() < $("#sticky-anchor").offset().top && !$("#mobile-nav").hasClass("open") && $("body,html").scrollTop($("#sticky-anchor").offset().top + 1), 
    $("#mobile-nav").toggleClass("open")
}
$("#mobile-nav").on("click", ".toggle-zone", toggleMobileNavView);
$("#mobile-nav").on("click", ".toggle-close", toggleMobileNavView);

// Make the filterview button stick to the top of the page when scrolling down
var stickyAnchorPlacement = false; 
function toggleFixedMobileNavButton() {
    $("body").toggleClass("filter-fixed"); 
    stickyAnchorPlacement = !stickyAnchorPlacement; 
    $("#sticky-phantom").toggle(); 
}
$("body").on('scroll', function () {
    if ($("#mobile-nav").css("display") != "none") {
        if (stickyAnchorPlacement && $("#sticky-anchor").offset().top > 0) toggleFixedMobileNavButton();
        if (!stickyAnchorPlacement && $("#sticky-anchor").offset().top < 0) toggleFixedMobileNavButton();
    }
})

// Make search bar filter on text input
function filterCuisineOptions() {
    var input, filter, ul, li, a, i;
    filter = $(".cuisine-toggle input").val().toUpperCase();
    a = $(".cuisine-toggle .dropdown-content.cuisineList a").get();
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
function toggleCuisineList(dir) {
    setTimeout(() => {
        $(".cuisineList.dropdown-content").toggleClass("show"); 
    }, 250);
}

// $("#mobile-nav").on("click", ".person", mobileSort);
// $("#mobile-nav").on("click", ".filter-position a", mobileFilter);
// $("#mobile-nav .nav-actions").on("click", ".size-toggle a", mobileChangeSize);

function changeSize(s) {
    $(".size-toggle .active").removeClass("active"); 
    $("." + s.name).addClass("active");
    $("body").removeClass("small medium large").addClass(s.class); 
}

function toggleCard(param) {
    var card = param.parentElement.parentElement; 
    if (card.className.includes(" expanded-card")) {
        card.className = card.className.replace(" expanded-card", '');
    } else {
        card.className += " expanded-card";
    }
}

function filterType(t) {
    // show that the filter is active
    $(".type-toggle .active").removeClass("active");
    $("." + t).addClass("active");
    $('input:text').attr('placeholder', t);


    if (t == "All") {
        $('input:text').attr('placeholder', "Search Cuisine..."); 
        $('#list-places').html(template(alldata))
        return 
    }

    var newdata = alldata.filter(function (itm) {
        if (itm.type == null) { return false }
        return itm.type.toUpperCase() == t.toUpperCase()
    })
    $('#list-places').html(template(newdata))
}

function filterCuisine(c) {
    // show that the filter is active
    $(".cuisine-toggle .active").removeClass("active");
    $("." + c.elementname).addClass("active");

    if (c.name == "All") {
        $('#list-places').html(template(alldata))
        return
    }

    var newdata = alldata.filter(function (itm) {
        if (itm.cuisine == null) {
            return false
        }
        return itm.cuisine.toUpperCase() == c.name.toUpperCase()
    })
    $('#list-places').html(template(newdata))
}

function filterPrice(p) {
    // show that the filter is active
    $(".price-toggle .active").removeClass("active");
    var classname = p == "All" ? "0" : p.length
    $(".filter-" + classname).addClass("active");

    if (p == "All") {
        $('#list-places').html(template(alldata))
        return
    }

    var newdata = alldata.filter(function (itm) {
        if (itm.price == null) {
            return false
        }
        return itm.price.toUpperCase() == p.toUpperCase()
    })
    $('#list-places').html(template(newdata))

}