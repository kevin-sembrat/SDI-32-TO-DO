console.log('My code is running');

//update js array from current htmnl items (HTML->JS)
function updateList(){
  const elements = document.querySelectorAll(".task");
// Map the NodeList to an array of outerText values
  const outerTextArray = Array.from(elements, element => element.outerText);
  return outerTextArray;
}

//insert a new li item to html in the ul (JS ->HTML)
//expects a string and adds to HTML list
function addItemToList (){
  console.log("AddItem... was called ")
    var inputText = document.getElementById("userInput").value;

    //create new list item
    var newTask =document.createElement("li");
    newTask.classList.add("task");

    //finds container to add list item to
    var listContainer = document.getElementById("taskList");

    //adds elemnent end of contaier
    listContainer.appendChild(newTask);

    //creates a new checkbox element
    var newCheckBox = document.createElement("input")
    newCheckBox.type = "checkbox"

    //adds checkbox to list item
    const itemContainer = document.querySelectorAll(".task");
    const lastItemContainer =itemContainer[-1];

    newTask.appendChild(lastItemContainer);

    //insterts user input
    newTask.innerHTML = inputText;
    console.log(updateList(inputText))
}



//User types in new task




//user presses button
  //input is saved to a variable
  //variable is passed into addItemtolist function....

//tesxt value of input is added to JS array

//js updates HTML with new array

//user can see their newly added task
