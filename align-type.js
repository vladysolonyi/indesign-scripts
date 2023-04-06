// @includepath ~/Documents/;%USERPROFILE%Documents; 
// @include basiljs/basil.js; 

/*
----------------------------------------------
This script removes the gap between the
first letter and the text box by calculating
the gap and extending the box to the left 
and setting the baseline offset to cap height.

TODO
+ draw on given layers instead of putting 
everything on one layer
+ keep the obj name
+ add text size/name/etc selection
+ add support for linked text
+ use tracking instead of extending box

https://github.com/vladysolonyi
----------------------------------------------
*/
 
function draw() { 
  units(MM);
  layer("aligned_type")

  //ask some questions
  var whereToAlign = confirm("Align text on all pages?")

  //grab the text boxes / Whole doc or curr page
  var object = (whereToAlign == true) ? doc() : page();
  var pageData = textFrames(object, function(frame,c) {
  	//get bounds of the text box
  	var boxB = frame.geometricBounds
  	//multipage support
  	page(frame.parentPage.name)
  	//duplicate the textbox
  	var newFrame = duplicate(frame)
  	//set vertical alignment
  	newFrame.textFramePreferences.firstBaselineOffset = FirstBaseline.CAP_HEIGHT;
  	//convert to outlines
  	var outlines = frame.createOutlines();
  	//get bounds of the converted type
  	var pathB = bounds(outlines[0])
  	//extend the text box to the left
  	newFrame.geometricBounds = [newFrame.geometricBounds[0], newFrame.geometricBounds[1]*2-pathB.left, newFrame.geometricBounds[2], newFrame.geometricBounds[3]];
  	//delete the outlines
  	remove(outlines[0])
  })
} 