// Defining the array
var contacts = [
  ["name: Greta Thunberg", " occupation: activist", " followers: 9.9M", " origin: Stockholm"],
  ["name: Emma Chamberlain", " occupation: YouTuber", " followers: 8.8M", " origin: San Bruno" ],
  ["name: Ava Michelle", " occupation: actress", " followers: 1.7M", " origin: Michigan", ],
  ["name: Maddie Ziegler", " occupation: dancer", " followers: 13.5M", " origin: Pennsylvania"],
  ["name: Billie Eilish", " occupation: singer", " followers: 56.4M", " origin: Los Angeles"]
];

// Function for the button "Choose a property from an object"
function chooseProperty(){
  // Asks the user which property they want
  var userInput = prompt("Which property do you want to search by? Options are name, occupation, followers, or origin");

  switch (userInput){
    case "name":
      // Ask user which name they want
      var searchName = prompt("Which name do you want to learn more about? Greta, Emma, Ava, Maddie or Billie.");
      // Gives user information about person after inputting name
          switch(searchName){
            case "Greta":
              document.getElementById("display").innerHTML = contacts[0];
              break;
            case "Emma":
              document.getElementById("display").innerHTML = contacts[1];
              break;
            case "Ava":
              document.getElementById("display").innerHTML = contacts[2];
              break;
            case "Maddie":
              document.getElementById("display").innerHTML = contacts[3];
              break;
            case "Billie":
              document.getElementById("display").innerHTML = contacts[4];
              break;
          }
      break;

    case "occupation":
    // Ask user which occupation they want
    var searchOccupation = prompt("Which occupation do you want to learn more about? activist, YouTuber, actress, dancer, or singer.");
    // Gives user information about person after inputting occupation
        switch(searchOccupation){
          case "activist":
            document.getElementById("display").innerHTML = contacts[0];
            break;
          case "YouTuber":
            document.getElementById("display").innerHTML = contacts[1];
            break;
          case "actress":
            document.getElementById("display").innerHTML = contacts[2];
            break;
          case "dancer":
            document.getElementById("display").innerHTML = contacts[3];
            break;
          case "singer":
            document.getElementById("display").innerHTML = contacts[4];
            break;
        }
      break;

    case "followers":
    // Ask user which follower count they want
      var searchFollowers = prompt("Which follower count do you want to learn more about? 9.9M, 8.8M, 1.7M, 13.5M, 56.4M");
      // Gives user information about person after inputting name
          switch(searchFollowers){
            case "9.9M":
              document.getElementById("display").innerHTML = contacts[0];
              break;
            case "8.8M":
              document.getElementById("display").innerHTML = contacts[1];
              break;
            case "1.7M":
              document.getElementById("display").innerHTML = contacts[2];
              break;
            case "13.5M":
              document.getElementById("display").innerHTML = contacts[3];
              break;
            case "56.4M":
              document.getElementById("display").innerHTML = contacts[4];
              break;
          }
      break;

    case "origin":
      // Ask user which origin they want
      var searchOrigin = prompt("Which origin do you want to learn more about? Stockholm, SanBruno, Michigan, Pennyslvania, LosAngeles");
      // Gives user information about person after inputting name
          switch(searchOrigin){
            case "Stockholm":
              document.getElementById("display").innerHTML = contacts[0];
              break;
            case "SanBruno":
              document.getElementById("display").innerHTML = contacts[1];
              break;
            case "Michigan":
              document.getElementById("display").innerHTML = contacts[2];
              break;
            case "Pennyslvania":
             document.getElementById("display").innerHTML = contacts[3];
              break;
            case "LosAngeles":
              document.getElementById("display").innerHTML = contacts[4];
              break;
          }
      break;

    //If none of the cases work
    default:
      alert("This is not a valid property");
      break;
  }
  }

// Function for "Add an object to the list" button
  function addObject(){
    // Instructions + receiving user input for new object
    var newName = prompt("What is the name of the famous teenager?");
    var newOccupation = prompt("What are they famous for?");
    var newFollowers = prompt("How many instagram followers do they have?");
    var newOrigin = prompt("Where are they from?");

    // Adding new information to the end of the array
    contacts.push(["name: " + newName, " occupation: " + newOccupation, " followers: " + newFollowers, " origin: " + newOrigin]);

    // Listing the original array and the new object
    listAll();
    if (contacts.length > 4) {
      document.getElementById("display").innerHTML += contacts[5] + "<br>";
    } else {
      return;
  }
    
  }

  function listAll(){
//Listing out all the items from the array through inner HTML
  document.getElementById("display").innerHTML = contacts[0] + "<br>";
  document.getElementById("display").innerHTML += contacts[1] + "<br>";
  document.getElementById("display").innerHTML += contacts[2] + "<br>";
  document.getElementById("display").innerHTML += contacts[3] + "<br>";
  document.getElementById("display").innerHTML += contacts[4] + "<br>";

  
  }






