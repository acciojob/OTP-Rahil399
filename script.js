document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code");

    // Auto-focus the first input on page load
    inputs[0].focus();

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            let value = e.target.value;

            // Move to next field if a number is entered
            if (value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {
                if (input.value === "") {
                    // Move focus back when deleting
                    if (index > 0) {
                        inputs[index - 1].focus();
                    }
                } else {
                    input.value = ""; // Clear current field on backspace
                }
                e.preventDefault(); // Prevent default backspace behavior
            }
        });

        // Ensure only numbers are allowed
        input.addEventListener("keypress", (e) => {
            if (!/^\d$/.test(e.key)) {
                e.preventDefault();
            }
        });
    });
});
