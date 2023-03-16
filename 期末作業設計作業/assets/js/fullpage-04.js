new fullpage('#fullpage',{
    autoScrolling: true,
    navigation: true,
    anchors:['section1','section2','section3','section4'],
    navigationTooltips:['Gallery','Painter','Order','ContactMe'],
    showActiveTooltip: true,
    scrollingSpeed: 1500,
    controlArrows: true,
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
