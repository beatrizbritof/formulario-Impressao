document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");
    const continueButton = document.getElementById("continueButton");
    const formTitle = document.getElementById("formTitle");
    const genderInputs = document.getElementById("genderInputs");
    const titleContainer = document.getElementById("titleContainer");

    form.addEventListener("input", function () {
        const passwordInput = document.getElementById("senha");
        const confirmPasswordInput = document.getElementById("confirmacaoSenha");

        const hasEmptyRequiredFields = Array.from(form.elements).some(
            (element) => element.required && (
                (element.type !== "radio" && element.value.trim() === "") ||
                (element.type === "radio" && !form.querySelector(`input[name="${element.name}"]:checked`))
            )
        );

        const passwordsMatch = passwordInput.value === confirmPasswordInput.value;
        const isGenderSelected = form.querySelector('input[name="genero"]:checked');

        continueButton.disabled = hasEmptyRequiredFields || !isGenderSelected || !passwordsMatch;
    });

    continueButton.addEventListener("click", function () {
        const passwordInput = document.getElementById("senha");
        const confirmPasswordInput = document.getElementById("confirmacaoSenha");

        if (passwordInput.value !== confirmPasswordInput.value) {
            return;
        }

        if (!continueButton.disabled) {
            window.print();
        }
    });

    window.addEventListener("beforeprint", function () {
        formTitle.innerText = "Formulário para impressão";

        const selectedGender = form.querySelector('input[name="genero"]:checked');

        if (selectedGender) {
            const genderContainer = document.createElement("div");
            genderContainer.classList.add("gender-info");
            genderContainer.innerHTML = "<label style='font-size: 1.3rem; font-weight: 600; color: #000000c0;'>Gênero: " + selectedGender.nextElementSibling.textContent + "</label>";
            form.appendChild(genderContainer);
        }

        genderInputs.style.display = "none";

        const confirmPasswordBox = document.getElementById("confirmPasswordBox");
        confirmPasswordBox.style.display = "none";

        const passwordInput = document.getElementById("senha");
        passwordInput.type = "text";
    });

    window.addEventListener("afterprint", function () {
        formTitle.innerText = "Cadastre-se";

        const genderContainer = form.querySelector('.gender-info');
        if (genderContainer) {
            genderContainer.remove();
        }

        genderInputs.style.display = "block";

        const confirmPasswordBox = document.getElementById("confirmPasswordBox");
        confirmPasswordBox.style.display = "flex";

        const passwordInput = document.getElementById("senha");
        passwordInput.type = "password";
    });
});

const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
};
