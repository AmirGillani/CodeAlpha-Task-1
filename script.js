function calculate() {

  //   GET USER ENTERED DATE

  const dateInput = document.getElementById("dateInput").value;

  const dateOfBirth = new Date(dateInput);

  // GET CURRENT DATE

  const currentDate = new Date();

  // CALCULATE AGE

  let year = currentDate.getFullYear() - dateOfBirth.getFullYear();

  let day = currentDate.getDay() - dateOfBirth.getDay();

  let month = currentDate.getMonth() - dateOfBirth.getMonth();

  // CREATE NEW P TAGS AND DYNAMICALLY SHOW AGE VARIABLES ON SCREEN

  createNewElement(year,'box1');

  createNewElement(day,'box2');

  createNewElement(month,'box3');

  // WE CAN CREATE ELEMENTS WITH OUT USING THIS FUNCTION 

  // BUT REPEATED LOC WILL INCREASE SO GOOD PRACTICE IS TO CREATE THEN USING FUNCTON

  function createNewElement(data,container)
  {
    // Create a new <p> element
    const newP1 = document.createElement("p");

    // Set attributes or content (optional)
    newP1.textContent = data;

    // Style new element
    newP1.style.fontSize= '35px'

    // Append the new <div> to an existing element
    const box1 = document.getElementById(container);

    const firstChild =box1.firstChild;

    // INSERT BEFORE WILL APPEND CHILD BEFORE P TAG 
    // WHICH IS ALREADY PRESENT AS FIRST CHILD IN PARENT DIV

    box1.insertBefore(newP1,firstChild);

  }

    // SHOW OUR RESULT ON SCREEN UNHIDE THE PARENT DIV

  document.querySelector(".parent").style.display ='flex';

    // DISABLE THE BUTTON USER WILL REFRESH THE PAGE TO AGAIN ENTER AGE
  
  const button = document.getElementById("button");

  button.disabled = true;
}
