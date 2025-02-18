// A player object

var player1;

player1 = {
    name   : "Kandra",
    health : 50,
    place  : "The Dungeon of Doom",
    items  : ["a rusty key", "The Sword of Destiny", "a piece of cheese"] // Using an array for items
};

console.log(player1.name);
console.log(player1.name + " is in " + player1.place);
console.log(player1.name + " has health " + player1.health);
console.log("Items: " + player1.items.join(", ")); // Joining array items for display

/* Further Adventures
 *
 * 1) Create a second player.
 *
 * 2) Log their details to the console.
 *
 * Notice how storing the items as a string
 * isn't a great approach. If the player
 * drops an item you'll have to manipulate
 * the string to remove the item.
 *
 * JavaScript has a way of storing lists
 * of items called an array. See Chapter 8.
 *
 */

// 1) Create a second player.
var player2 = {
    name   : "Thorn",
    health : 75,
    place  : "The Enchanted Forest",
    items  : ["a magical staff", "a healing potion"]
};

// 2) Log their details to the console.
console.log(player2.name);
console.log(player2.name + " is in " + player2.place);
console.log(player2.name + " has health " + player2.health);
console.log("Items: " + player2.items.join(", ")); // Joining array items for display
