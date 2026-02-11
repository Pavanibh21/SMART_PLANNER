function generatePlan() {
    const subjects = parseInt(document.getElementById("subjects").value);
    const studyTime = parseInt(document.getElementById("studyTime").value);
    const breakTime = parseInt(document.getElementById("breakTime").value);
    const startTime = document.getElementById("startTime").value;

    if (!subjects || !studyTime || !breakTime || !startTime) {
        alert("Please fill all fields!");
        return;
    }

    let [hours, minutes] = startTime.split(":").map(Number);
    let currentTime = hours * 60 + minutes;

    let table = `
        <table>
            <tr>
                <th>Session</th>
                <th>Type</th>
                <th>Start Time</th>
                <th>End Time</th>
            </tr>
    `;

    for (let i = 1; i <= subjects; i++) {

        // Study
        let studyStart = currentTime;
        let studyEnd = studyStart + studyTime;

        table += `
            <tr class="study">
                <td>Subject ${i}</td>
                <td>Study</td>
                <td>${formatTime(studyStart)}</td>
                <td>${formatTime(studyEnd)}</td>
            </tr>
        `;

        currentTime = studyEnd;

        // Break
        if (i < subjects) {
            let breakStart = currentTime;
            let breakEnd = breakStart + breakTime;

            table += `
                <tr class="break">
                    <td>-</td>
                    <td>Break</td>
                    <td>${formatTime(breakStart)}</td>
                    <td>${formatTime(breakEnd)}</td>
                </tr>
            `;

            currentTime = breakEnd;
        }
    }

    table += "</table>";
    document.getElementById("result").innerHTML = table;
}

function formatTime(totalMinutes) {
    let h = Math.floor(totalMinutes / 60) % 24;
    let m = totalMinutes % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
