function generatePlan() {
    let name = document.getElementById("name").value;
    let country = document.getElementById("country").value;
    let hours = document.getElementById("hours").value;
    let subject = document.getElementById("subject").value;
    let preference = document.getElementById("preference").value;

    let timings = {
        india: {
            breakfast: "8:00 AM",
            lunch: "1:00 PM",
            snacks: "5:00 PM",
            dinner: "8:00 PM"
        },
        usa: {
            breakfast: "7:00 AM",
            lunch: "12:00 PM",
            snacks: "4:00 PM",
            dinner: "7:00 PM"
        },
        uk: {
            breakfast: "7:30 AM",
            lunch: "12:30 PM",
            snacks: "4:30 PM",
            dinner: "7:30 PM"
        }
    };

    let schedule = `
        <h2>Hello ${name} 👋</h2>
        <p><strong>Country:</strong> ${country.toUpperCase()}</p>
        <p>🌅 Morning Routine: 6:00 AM - 7:00 AM</p>
        <p>🍳 Breakfast: ${timings[country].breakfast}</p>
        <p>📚 Study (${subject}): ${hours} hours (${preference})</p>
        <p>🍛 Lunch: ${timings[country].lunch}</p>
        <p>😴 Rest: 2:00 PM - 3:00 PM</p>
        <p>☕ Snacks: ${timings[country].snacks}</p>
        <p>🌙 Dinner: ${timings[country].dinner}</p>
    `;

    document.getElementById("result").innerHTML = schedule;

    // Save to localStorage (database)
    localStorage.setItem("studyPlan", JSON.stringify({
        name, country, hours, subject, preference
    }));
}
