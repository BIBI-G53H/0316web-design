new fullpage('#fullpage',{
    autoScrolling: true,
    anchors:['section1','section2'],
    navigationTooltips:['Gallery',,'Order'],
    showActiveTooltip: true,
    scrollingSpeed: 1500,
    controlArrows: true,
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
