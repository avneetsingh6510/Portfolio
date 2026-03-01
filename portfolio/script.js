const addBtn = document.getElementById("addBenefitBtn");
const hobbyList = document.getElementById("hobbyList");
const inputBox = document.getElementById("newBenefit");

// Add benefit
addBtn.addEventListener("click", function () {

    const text = inputBox.value.trim();

    if (text === "") {
        alert("Please enter a benefit!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${text}
        <button class="delete-btn">Delete</button>
    `;

    hobbyList.appendChild(li);

    inputBox.value = "";
});


// Delete functionality (Event Delegation)
hobbyList.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }

});


// 2. Contact Form Alert
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been submitted successfully.");

    form.reset();
});


// 3. Footer Date & Time
function updateDateTime() {

    const now = new Date();

    const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    const date = now.toLocaleDateString('en-GB', options);
    const time = now.toLocaleTimeString('en-GB');

    document.getElementById("dateTime").textContent =
        `${date}, ${time}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);