



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




