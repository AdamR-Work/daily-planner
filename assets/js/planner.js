// #plan-time    id for the time displayed to the left
// #plan-text    id for the text that should be editable
// #plan-save-btn  id for the save button
var planText = $("[data-type='plan-text']")
var planTime = $("[data-type='plan-time']")
var planSaveBtn = $("[data-type='plan-save-btn']")


// task text is clicked
$(planText).on("click", function(){
    var text = $(this)
    .text()
    .trim();
// replace content with what is typed
    console.log("hello");



});