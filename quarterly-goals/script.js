document.getElementById('addGoal').addEventListener('click', function() {
    // Prompt
    const goalDescription = prompt("Enter a new quarter goal");
    const hashTag = prompt("Enter a goal hashtag");
    const progress = prompt("Enter goal completion status");

    //make sure that everytrhing is filled out
    if (!goalDescription || !hashTag || !progress) {
        alert("All fields are required!");
        return;
    }
``
    //creates goal element
    const goalsSection = document.getElementById('goals');
    const newGoal = document.createElement('div');
    newGoal.classList.add('goal');

    // adds the checkbox thing
    const checkDiv = document.createElement('div');
    checkDiv.classList.add('check');

    const checkboxImg = document.createElement('img');
    checkboxImg.src = "Check Box.svg"; 
    checkboxImg.alt = "Check-box";
    checkboxImg.width = 21.04;
    checkboxImg.height = 21.06;
    
    const goalTitle = document.createElement('h2');
    goalTitle.textContent = goalDescription;

    checkDiv.appendChild(checkboxImg);
    checkDiv.appendChild(goalTitle);

    // Create the goal info div
    const goalInfoDiv = document.createElement('div');
    goalInfoDiv.classList.add('goal-info');

    //this is where the hashtag is made
    const hashParagraph = document.createElement('p');
    hashParagraph.classList.add('hash');
    hashParagraph.style.color = "#9b72ee"
    hashParagraph.textContent = "#" + hashTag;
    

    //creates the p element for progress
    const progressParagraph = document.createElement('p');
    progressParagraph.classList.add('progress');
    progressParagraph.textContent = progress;

    goalInfoDiv.appendChild(hashParagraph);
    goalInfoDiv.appendChild(progressParagraph);

    // add checkbox and goal div to newGoal
    newGoal.appendChild(checkDiv);
    newGoal.appendChild(goalInfoDiv);

    // append
    goalsSection.appendChild(newGoal);

    // add line
    const hr = document.createElement('hr');
    goalsSection.appendChild(hr);
});
