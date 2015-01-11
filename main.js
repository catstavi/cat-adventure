// Write a cat model HERE!

var Cat = function (name, description, location, escape_points) {
  this.name = name;
  this.description = description;
  this.location = location;
  this.points = escape_points;
};

var Room = function (new_name, new_description, new_exits, new_points) {
  this.name = new_name;
  this.description = new_description;
  this.exits = new_exits;
  this.points = new_points;
  this.getDescription = function(){
    return this.name + ": " + this.description;
  };
};

//
// Begin fixture data!
//
var kitchen = new Room(
  "Kitchen",
  "A nice roomy kitchen. Not very safe. There may be dogs nearby.",
  ["Living Room", "Dining Room"],
  0
);

var living_room = new Room(
  "Living Room",
  "Lots of perches, but frequently full of dogs. Kind of safe, but not a good spot for naps!",
  ["Kitchen"],
  2
);

var dining_room = new Room(
  "Dining Room",
  "There's a big table and some chairs and OH NO IT'S A DOG",
  ["Kitchen", "Bedroom"],
  -4
);

var bedroom = new Room(
  "Bedroom",
  "YAY! We finally found the nice toasty warm sunbeam!",
  ["Stairs"],
  20
);

function room_directory(room_name) {
  start_index = room_name.indexOf("-")+1;
  room_name = room_name.substring(start_index, room_name.length);
  switch (room_name) {
    case "kitchen":
      return kitchen;
    case "living-room":
      return living_room;
    case "dining-room":
      return dining_room;
    case "bedroom":
      return bedroom;
    default:
      alert("Not a room");
  }
}

//
// End fixture data!
//

// don't forget to populate this with data!
var starbuck = new Cat(
  "Starbuck",
  "A brave black cat with penetrating green eyes.",
  kitchen,
  5
);

$(document).ready(function(){
  // should be replaced with your beginning/end game logic
  // while (true) {
    // $(".look").click(function() {
    //   alert( this.id.getDescription() );
    // });
    $(".look").click(function() {
      alert(room_directory(this.getAttribute('id')).getDescription());
    });

    $(".run").click(function() {
      var current_room = room_directory(this.getAttribute('id'));
      $("h1").html("Starbuck is in the " + current_room.name.toLowerCase() + "!");
      var option_div = $(".options")[0];
      var room_div = $(".room");
      for (var i = 0; i < room_div.length; i++) {
        option_div.removeChild(room_div[i]);
      }

      for (var j = 0; j < current_room.exits.length; j++) {
        exit = current_room.exits[j];
        var new_room_go = document.createElement("span");
        var new_room_look = document.createElement("span");
        var outter_div = document.createElement("div");
        outter_div.className= "room";
        new_room_go.className= "run";
        new_room_go.innerHTML = "Run towards the " + exit;
        new_room_look.className = "look";
        new_room_look.innerHTML = "Look at the " + exit;
        option_div.appendChild(outter_div);
        outter_div.appendChild(new_room_go);
        outter_div.appendChild(new_room_look);
      }
    });
    // Add more!
  // }
});
