// Lógica simples para animação de fade-in ao fazer scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        // Se o elemento estiver visível na tela, adiciona a classe 'active'
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Escuta o evento de rolagem da página
window.addEventListener("scroll", reveal);

// Dispara a função uma vez logo no carregamento para checar os elementos iniciais
reveal();