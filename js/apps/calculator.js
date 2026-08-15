function openCalculator() {

    const calculatorContent = `
        <div class="calculator">

            <input
                type="text"
                class="calculator-display"
                readonly
            >

            <div class="calculator-buttons">

                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>/</button>

                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>*</button>

                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>-</button>

                <button>0</button>
                <button>.</button>
                <button>=</button>
                <button>+</button>

                <button class="clear">C</button>

            </div>

        </div>
    `;

    const calculatorWindow = windowManager.createWindow(
        "Calculator",
        calculatorContent,
        "350px",
        "500px"
    );


    // Calculator elements

    const display =
        calculatorWindow.querySelector(".calculator-display");

    const buttons =
        calculatorWindow.querySelectorAll(
            ".calculator-buttons button"
        );


    // Button logic

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const value = button.textContent;

            if (value === "C") {

                display.value = "";

            } else if (value === "=") {

                try {

                    display.value = eval(display.value);

                } catch {

                    display.value = "Error";

                }

            } else {

                display.value += value;

            }

        });

    });

}
appManager.registerApp({
    id: "calculator",
    name: "Calculator",
    icon: "🧮",
    launch: openCalculator
});