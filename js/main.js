fetch('reminder.json')
    .then(response => response.json())
    .then(reminders => {
        const container = document.querySelector('.reminder-container');

        reminders.forEach(reminder => {

            // create a new reminder div
            const reminderDiv = document.createElement('div');
            reminderDiv.className = 'reminder';
            reminderDiv.style.backgroundColor = getRandomColor();
            reminderDiv.dataset.time = reminder.time;
            reminderDiv.addEventListener('click', () => {
                openEditModal(reminderDiv);
            });

            // create and set reminder-title div
            const titleDiv = document.createElement('div');
            const title = document.createElement('p');
            titleDiv.className = 'reminder-title';
            title.textContent = reminder.name;
            titleDiv.appendChild(title);
            reminderDiv.appendChild(titleDiv);

            // create and set  reminder-description div
            const descriptionDiv = document.createElement('div');
            const description = document.createElement('p');
            descriptionDiv.className = 'reminder-description';
            description.textContent = reminder.description;
            descriptionDiv.appendChild(description);
            reminderDiv.appendChild(descriptionDiv);

            // create and set  reminder-date div
            const dateDiv = document.createElement('div');
            const date = document.createElement('p');
            dateDiv.className = 'reminder-date';

            //date.textContent = new Date(reminderDiv.dataset.time).toLocaleString();
            const timestamp = new Date(reminderDiv.dataset.time);
            const timeString = timestamp.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
            date.textContent = timestamp.toLocaleDateString() + ' ' + timeString;
            
            dateDiv.appendChild(date);
            reminderDiv.appendChild(dateDiv);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'reminder-complete';
            checkbox.addEventListener('click', (event) => {
                event.stopPropagation(); // stopPropagation
            }, true); 

            checkbox.addEventListener('change', (event) => {
                if (checkbox.checked) {
                    reminderDiv.style.backgroundColor = 'green';
                } else {
                    reminderDiv.style.backgroundColor = getRandomColor();
                }
            });
            reminderDiv.appendChild(checkbox);



            // append reminder div to the container
            container.appendChild(reminderDiv);
        });
    })
    .catch(error => console.error('Error:', error));

const getRandomColor = (function() {
    const colors = ["rgb(238,216,216)", "rgb(216,222,238)", "rgb(238,229,216)","rgb(228,216,238)", "rgb(223,238,216)","rgb(216,238,238)"];
    let index = 0;
        
    return function() {
        const color = colors[index];
        index = (index + 1) % colors.length; // Move to the next color, and wrap around when reaching the end
        return color;
    };
})();


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle the submission of the form
var submitButton = document.getElementById("submitReminder");
submitButton.onclick = function (event) {
    event.preventDefault();

    const newReminderName = document.getElementById("name").value;
    const newReminderDescription = document.getElementById("description").value;
    const newReminderTime = document.getElementById("time").value;

    const newReminder = {
        id: Math.floor(Math.random() * 10000), // generate a random id
        name: newReminderName,
        description: newReminderDescription,
        time: newReminderTime // Keep as string
    };

    // Create the new reminder HTML
    const reminderDiv = document.createElement('div');
    reminderDiv.className = 'reminder';
    reminderDiv.style.backgroundColor = getRandomColor();
    reminderDiv.dataset.time = newReminder.time; // Keep as string
    reminderDiv.addEventListener('click', () => {
        openEditModal(reminderDiv); // Open the edit modal
    });

    const titleDiv = document.createElement('div');
    const title = document.createElement('p');
    titleDiv.className = 'reminder-title';
    title.textContent = newReminder.name;
    titleDiv.appendChild(title);
    reminderDiv.appendChild(titleDiv);

    const descriptionDiv = document.createElement('div');
    const description = document.createElement('p');
    descriptionDiv.className = 'reminder-description';
    description.textContent = newReminder.description;
    descriptionDiv.appendChild(description);
    reminderDiv.appendChild(descriptionDiv);

    const dateDiv = document.createElement('div');
    const date = document.createElement('p');
    dateDiv.className = 'reminder-date';
    //date.textContent = new Date(newReminder.time).toLocaleString(); // Convert string to local date string for display
    const timestamp = new Date(newReminder.time);
    const timeString = timestamp.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
    date.textContent = timestamp.toLocaleDateString() + ' ' + timeString;
    
    dateDiv.appendChild(date);
    reminderDiv.appendChild(dateDiv);

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.className = 'custom-checkbox';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'real-checkbox';

    const customCheckbox = document.createElement('span');
    customCheckbox.className = 'fake-checkbox';

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(customCheckbox);

    checkbox.addEventListener('change', (event) => {
        if (checkbox.checked) {
            reminderDiv.style.backgroundColor = 'green';
            customCheckbox.classList.add('checked');
        } else {
            reminderDiv.style.backgroundColor = getRandomColor();
            customCheckbox.classList.remove('checked');
        }
    });

    reminderDiv.appendChild(checkboxWrapper);




    // Add to the container
    const container = document.querySelector('.reminder-container');
    container.appendChild(reminderDiv);

    // Close the modal
    modal.style.display = "none";
}





function openEditModal(reminderDiv) {
    // dispalt the modal
    editModal.style.display = "block";

    // get the reminder's content
    const name = reminderDiv.querySelector('.reminder-title').textContent;
    const description = reminderDiv.querySelector('.reminder-description').textContent;
    const time = reminderDiv.dataset.time

    // set the reminder's content to the modal
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-description').value = description;
    document.getElementById('edit-time').value = time;

    // set the reminder div to the modal
    editModal.element = reminderDiv;
}

// Get the modal
var modal = document.getElementById("myModal");
var editModal = document.getElementById("editModal");

// Get the <span> element that closes the modal
var modalSpan = modal.querySelector(".close");
var editModalSpan = editModal.querySelector(".close");

// When the user clicks on <span> (x), close the modal
modalSpan.onclick = function () {
    modal.style.display = "none";
}
editModalSpan.onclick = function () {
    editModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == editModal) {
        editModal.style.display = "none";
    }
}


document.getElementById('saveBtn').onclick = function () {
    var name = document.getElementById('edit-name').value;
    var description = document.getElementById('edit-description').value;
    var timeString = document.getElementById('edit-time').value;

    var timestamp = Date.parse(timeString); // transform to timestamp

    // get the reminder div
    var titleP = editModal.element.querySelector('.reminder-title p');
    var descriptionP = editModal.element.querySelector('.reminder-description p');

    // update the reminder div
    titleP.textContent = name;
    descriptionP.textContent = description;
    editModal.element.dataset.time = timeString;

    //editModal.element.querySelector('.reminder-date').textContent = new Date(timestamp).toLocaleString(); 
    const date = new Date(timestamp);
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    editModal.element.querySelector('.reminder-date').textContent = formattedDate;
    editModal.element.querySelector('.reminder-date').style.fontSize = '22px';

    // const timestamp = new Date(timestamp);
    // const timeString = timestamp.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' });
    // editModal.element.querySelector('.reminder-date').textContent = timestamp.toLocaleDateString() + ' ' + timeString;

    // close the modal
    editModal.style.display = "none";
}



