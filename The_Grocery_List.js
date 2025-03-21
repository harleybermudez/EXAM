//code 6
let make_a_List = prompt("Would you like to make a grocery list? (yes or no)");
if (make_a_List === "yes") {
    let grocerylist = [];
    let count = Number(prompt("How many items do you want to add to the list?"));
    for (let i = 0; i < count; i++) { //how many items will be added to the list
        let item = prompt("Enter an item");
        grocerylist.push(item);
    }
//sorting the grocery list using.sort and .reverse
    let grocery_sorted = [...grocerylist].sort();
    let grocery_reversed = [...grocerylist].reverse();

    //printing original, sorted and reversed grocery list using alert with for loop 
    alert("Original grocery list:");
    for (let item of grocerylist) {
        alert(item);
    }

    alert("Sorted grocery list:");
    for (let item of grocery_sorted) {
        alert(item);
    }

    alert("Reversed grocery list:");
    for (let item of grocery_reversed) {
        alert(item);
    }
}