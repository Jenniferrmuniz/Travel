

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  $(".zoom img").css({
    transform: 'translate3d(-50%, -' + (scroll / 100) + '%, 0) scale(' + (100 + scroll / 5) / 100 + ')',
    //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
    //"-webkit-filter": "blur(" + (scroll/200) + "px)",
    //filter: "blur(" + (scroll/200) + "px)"
  });
});








// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 3000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 3000,
    easing: "easeOutExpo",
    delay: 3000
  });











/*

  document.querySelector("body > form > button").onchange = function(){

  }
 // var conceptName = $('#aioConceptName').find(":selected").text();
  var selectedTrip = document.querySelector("body > form > select:nth-child(2)").find(":selected").text();
console.log(selectedTrip)
 


document.querySelector("body > form > select:nth-child(2)").selected = function(){

    console.log('inside select function');
    if(document.querySelector("body > form > select:nth-child(2)").value == 'africa'){
        console.log('inside if statement Africa');
        document.querySelector("body > form > select:nth-child(5)").innerHTML = `<select name="Trip"> 
        <option value="egypt-expedition">Egypt Expedition</option>
        </select>`
    }
  }


  if(document.querySelector("body > form > select:nth-child(2)").value == 'africa'){

    document.querySelector("body > form > select:nth-child(5)").innerHTML = `<select name="Trip"> 
    <option value="egypt-expedition">Egypt Expedition</option>
    </select>`

}

*/








/*


// Map your choices to your option value
var lookup = {
  'Asia': ['Highlights of Japan', 'Japan: Tokyo & beyond', 'Thailand: Island Paradise'],
  'Africa': ['Egypt Expedition', 'Highlights of Morocco', 'Africa Safari: Tanzania & Zanzibar', 'Kenya: African Safari'],
  'Latin America': ['Costa Rica Adventure', 'Belize: Rainforests, Reefs & Ruins', 'Peru & Machu Picchu Adventure'],
  'Europe': ['The Greek Islands', 'Grand Tour of Ireland', 'Tuscany & the Italian Countryside'],
  'Australia & New Zealand': ['Australia & New Zealand Adventure', 'Highlights of Australia', 'New Zealand: Queenstown to Auckland', 'Australian Odyssey'],
};

// Map your choices to your option value
var lookup2 = {
  'Highlights of Japan': ['1', '2', '3', '4'],

  
};



// When an option is changed, search the above for matching choices
$('#options').on('change', function () {
  
  // Set selected option as variable
  var selectValue = $(this).val();
  console.log('location: ' + selectValue);
  
  // Empty the target field
  /*let choices = `<select id="choices">
  <option value="" disabled selected>Please select an option</option>
</select><br>`
  */
 /*
 // $('#estimate-cost').append(choices)
  $('#choices').empty();

  // For each chocie in the selected option
  for (i = 0; i < lookup[selectValue].length; i++) {
    // Output choice in the target field
    $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
  } 
//  setChoices()
});

*/
/*
function setChoices(){
  $('#choices').on('change', function(){
    var selectValue = $(this).val();
    console.log('location: ' + selectValue);
    let choices2 = `<select id="choices2">
      <option value="" disabled selected>Please select an option</option>
        </select><br>`
    
    $('#estimate-cost').append(choices2)
    for (i = 0; i < lookup2[selectValue].length; i++) {
      // Output choice in the target field
      $('#choices2').append("<option value='" + lookup2[selectValue][i] + "'>" + lookup2[selectValue][i] + "</option>");
    } 
  //  setChoices2()

  })
}



*/












/*
function setChoices2(){
  console.log('set choices 2')
  
}
*/


/*let selection = document.querySelector("#choices");
console.log( selection.options[ selection.selectedIndex ].value );
*/


// document.querySelector("body > button").onclick = () => {


// // if(){

// // }





// }






// Map your choices to your option value
var lookup = {
  'Asia': ['Highlights of Japan', 'Japan: Tokyo & beyond', 'Thailand: Island Paradise'],
  'Africa': ['Egypt Expedition', 'Highlights of Morocco', 'Africa Safari: Tanzania & Zanzibar', 'Kenya: African Safari'],
  'Latin America': ['Costa Rica Adventure', 'Belize: Rainforests, Reefs & Ruins', 'Peru & Machu Picchu Adventure'],
  'Europe': ['The Greek Islands', 'Grand Tour of Ireland', 'Tuscany & the Italian Countryside'],
  'Australia & New Zealand': ['Australia & New Zealand Adventure', 'Highlights of Australia', 'New Zealand: Queenstown to Auckland', 'Australian Odyssey'],
};


// When an option is changed, search the above for matching choices
$('#options').on('change', function() {
  // Set selected option as variable
  var selectValue = $(this).val();
 console.log(selectValue);
  // Empty the target field
  $('#choices').empty();
  
  // For each chocie in the selected option
  for (i = 0; i < lookup[selectValue].length; i++) {
     // Output choice in the target field
     $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
  }
});




/*$('#calculate-btn').on('click', function(e) {
  e.preventDefault();
  console.log(document.querySelector("#choices").selectValue)

});

*/


let tripPrice;

document.querySelector("#calculate-btn").onclick = function(e){
  e.preventDefault();


  var tripLocation = $('#options').find(":selected").text();
  console.log(tripLocation);
  var tripSelection = $('#choices').find(":selected").text();
  console.log(tripSelection);


  switch(tripLocation){

    case 'Asia':
        if(tripSelection == 'Highlights of Japan'){
          tripPrice = 800;
        }
        else if(tripSelection == 'Japan: Tokyo & beyond'){
          tripPrice = 900;
        }
        else if(tripSelection == 'Thailand: Island Paradise'){
          tripPrice = 700;
        }
        break;

    case 'Africa':
        if(tripSelection == 'Egypt Expedition'){
          tripPrice = 800;
        }
        else if(tripSelection == 'Highlights of Morocco'){
          tripPrice = 900;
        }
        else if(tripSelection == 'Africa Safari: Tanzania & Zanzibar'){
          tripPrice = 700;
        }
        else if(tripSelection == 'Kenya: African Safari'){
          tripPrice = 650;
        }
        break;

    case 'Latin America':
        if(tripSelection == 'Costa Rica Adventure'){
          tripPrice = 84350;
        }
        else if(tripSelection == 'Belize: Rainforests, Reefs & Ruins'){
          tripPrice = 9870;
        }
        else if(tripSelection == 'Peru & Machu Picchu Adventure'){
          tripPrice = 760;
        }
        break;

    case 'Europe':
        if(tripSelection == 'The Greek Islands'){
          tripPrice = 900;
        }
        else if(tripSelection == 'Grand Tour of Ireland'){
          tripPrice = 9030;
        }
        else if(tripSelection == 'Tuscany & the Italian Countryside'){
          tripPrice = 750;
        }
        break;

    case 'Australia & New Zealand':
        if(tripSelection == 'Australia & New Zealand Adventure'){
          tripPrice = 800;
        }
        else if(tripSelection == 'Highlights of Australia'){
          tripPrice = 950;
        }
        else if(tripSelection == 'New Zealand: Queenstown to Auckland'){
          tripPrice = 7060;
        }
        else if(tripSelection == 'Australian Odyssey'){
          tripPrice = 780;
        }
      break;
  }

  console.log('trip price: ' + tripPrice);

let total = tripPrice;
  if(document.querySelector("#excursions").checked === true){
    total = tripPrice + 200;
  }

  document.querySelector("#cost > p").innerHTML = total;
}