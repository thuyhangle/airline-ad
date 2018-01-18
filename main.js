window.onload = function() {
    var logo = document.getElementById("logo");
    // TweenLite.to(logo, 2, {ease:Back.easeIn, left:"85%", borderBottomColor:"#74e691", color:"white"});

    var tl = new TimelineMax({repeat:-1, yoyo: true})

    tl.to("#logo", 4, {x:"900%", ease:Linear.easeNone})
      .to("#logo", 2, {y:"-100%", ease:Power1.easeInOut, repeat:1, yoyo:true,  borderBottomColor:"#0f0687"}, 0)
}


