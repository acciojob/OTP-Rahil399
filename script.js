document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.inputType === "insertText" && e.target.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus(); // Move focus to the next input
                }
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                if (input.value === "") {
                    if (index > 0) {
                        inputs[index - 1].focus(); // Move focus to the previous input
                    }
                } else {
                    input.value = ""; // Clear the current input
                }
                e.preventDefault(); // Prevent default Backspace behavior
            }
        });
    });
});
