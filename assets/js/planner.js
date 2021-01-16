// #plan-time    id for the time displayed to the left
// #plan-text    id for the text that should be editable
// #plan-save-btn  id for the save button
var planText = $("[data-type='plan-text']")
var planTime = $("[data-type='plan-time']")
var planSaveBtn = $("[data-type='plan-save-btn']")



// task text is clicked
$(planText).on("click", function(){
    var textBox = $(this);
    // .text()
    // .trim()
    console.log("hello");

  if(textBox.data() == textBox.data("same")){
      textBox.text(textBox.data("text OG"));
  }else {
      textBox.data("text OGG", textBox.text());
      textBox.text(textBox.data("text-swap"));
  }
// replace content with what is typed
    
  

});





  // replace p element with a new textarea
//   var textInput = $("<textarea>")
  
//   .val(text);
// $(this).replaceWith(textInput);

// // auto focus new element
// textInput.trigger("focus");



