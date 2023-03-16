new fullpage('#fullpage',{
    autoScrolling: true,
    navigation: true,
    anchors:['section1','section2','section3','section4','section5'],
    navigationTooltips:['Michelangelo','Schedule','Rome','BigThree','ContactMe',],
    showActiveTooltip: true,
    scrollingSpeed: 1500,
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
