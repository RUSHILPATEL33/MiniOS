const clock =
    document.getElementById("clock");

const searchInput =
    document.querySelector("#start-search input");

const appItems =
    document.querySelectorAll(".app-item");

const taskbar =
    document.getElementById("taskbar-apps");

const windowManager =
    new WindowManager(taskbar);


const startButton =
    document.getElementById("start-btn");

const startMenu =
    document.getElementById("start-menu");


const calculatorApp =
    document.getElementById("calculator-app");


calculatorApp.addEventListener("click", () => {

    appManager.launchApp("calculator");

    startMenu.style.display = "none";

});

searchInput.addEventListener("input", () => {

    const searchText =
        searchInput.value.toLowerCase();

    appItems.forEach(app => {

        const appName =
            app.textContent.toLowerCase();

        if (appName.includes(searchText)) {

            app.style.display = "block";

        } else {

            app.style.display = "none";

        }

    });

});


startButton.addEventListener("click", () => {

    if (startMenu.style.display === "block") {

        startMenu.style.display = "none";

        searchInput.value = "";

        appItems.forEach(app => {
            app.style.display = "block";
        });

    } else {

        startMenu.style.display = "block";

    }

});
 


function updateClock() {

    const time24 =
        new Date().toLocaleTimeString("en-GB", {
            hour12: true
        });

    clock.textContent = time24;
}


updateClock();

setInterval(updateClock, 1000);