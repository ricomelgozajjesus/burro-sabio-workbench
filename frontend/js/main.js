console.log("Burro-Sabio Workbench loaded.");

// Replace with your real API Gateway URL when the Lambda is deployed.
const API_URL = "YOUR_LAMBDA_API_URL_HERE";

// ------------------------------
// 1. RUN BUTTON (chat-style query)
// ------------------------------

const textarea = document.querySelector("textarea");
const runButton = document.querySelector(".input-area .bs-button");

if (runButton) {
    runButton.addEventListener("click", async () => {
        const query = textarea.value.trim();
        if (!query) return alert("Please type a scenario or question.");

        const responseBox = document.querySelector(".chat-box");

        responseBox.innerHTML += `<br><br><b>You:</b> ${query}`;
        responseBox.innerHTML += `<br><i>Running simulation...</i>`;

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ action: "chat", query })
            });

            const data = await res.json();

            responseBox.innerHTML += `<br><b>Burro-Sabio:</b> ${data.message}`;
        } catch (error) {
            console.error(error);
            responseBox.innerHTML += `<br><span style="color:red;">Error contacting backend</span>`;
        }
    });
}


// ------------------------------
// 2. RUN SIMULATION BUTTON
// ------------------------------

const simButton = document.querySelectorAll(".bs-button")[1];
if (simButton) {
    simButton.addEventListener("click", async () => {
        alert("Would call AWS Lambda → PyDSS simulation.");
        try {
            const res = await fetch(API_URL + "?task=simulate");
            const data = await res.json();
            console.log("Simulation:", data);
        } catch (err) {
            console.error(err);
        }
    });
}


// ------------------------------
// 3. KERSTING APPROX BUTTON
// ------------------------------

const kerstingButton = document.querySelectorAll(".bs-button")[2];
if (kerstingButton) {
    kerstingButton.addEventListener("click", async () => {
        alert("Would call AWS Lambda → Kersting Approximation Engine.");
        try {
            const res = await fetch(API_URL + "?task=kersting");
            const data = await res.json();
            console.log("Kersting:", data);
        } catch (err) {
            console.error(err);
        }
    });
}


// ------------------------------
// 4. HOSTING CAPACITY BUTTON
// ------------------------------

const hostingButton = document.querySelectorAll(".bs-button")[3];
if (hostingButton) {
    hostingButton.addEventListener("click", async () => {
        alert("Would call AWS Lambda → Hosting Capacity tools.");
        try {
            const res = await fetch(API_URL + "?task=hosting");
            const data = await res.json();
            console.log("Hosting capacity:", data);
        } catch (err) {
            console.error(err);
        }
    });
}