//div holds title, class="mainTitle"

//div for instruct

//guessed score area

//div to hold wins and losses

//4 btns

//users total score

var randomNum;

$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    //crystalValue="10"
    crystalValue = parseInt(crystalValue);
    //crystalValue=10
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
//function with an onclick event when a crystal btn is clicked
var userScore=0;
//it will add the crystal score to the current total score
//display the current score
var wins=0;
//if (userScore == randomNum)
//player wins
//wins++;
//then shortly we are going to call restartfx()
var lose=0;
//losses
//if (userScore>randomNum)
//you lose
//lose++;
//then shortly we are going to call restartfx()
   

  });

//restartFx

//create a new randomNum; between 19-120
//4 crystals with random numbers 1-12
//create random values and then append to frontend as  4 btns
//user's score is reset to zero
userScore=0;

//create 4 btns need to be random


function createBtn()
{
  var numberOptions = [(Math.floor(Math.random() * 12) + 1), 5, 3, 7];
  var imageArray = ["Blue Crystal.jpg", "Green Crystal.jpg", "grurple crystal.jpg", "Purple Crystal.jpg"]
    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < numberOptions.length; i++) {
  
      // For each iteration, we will create an imageCrystal
      var imageCrystal = $("<img>");
      //<img src="">
  
      // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");
      //<img src="" class="crystal-image">
      imageCrystal.attr("src", "assets/images/" + imageArray[i],);
      // Each imageCrystal will be given a src link to the crystal image
     
      // Each imageCrystal will be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
      //<img src="http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg" class="crystal-image" data-crystalvalue=numberOption[i]>
  
      // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
      $("#crystals").append(imageCrystal);
    }
}
createBtn();

