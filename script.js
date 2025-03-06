document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const currentInput = e.target;
            const nextInput = inputs[index + 1];

            if (currentInput.value.length === 1 && nextInput) {
                nextInput.focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && input.value === "") {
                const prevInput = inputs[index - 1];
                if (prevInput) {
                    prevInput.focus();
                    prevInput.value = "";
                }
            }
        });
    });

    inputs[0].focus(); // Automatically focus the first input field
});
