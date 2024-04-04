// Função para manipular o clique no item de busca
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', function() {
        // Aqui você pode adicionar a lógica para a função de busca
        // Por exemplo, redirecionar para uma página de busca ou abrir um modal de busca
        alert('Função de busca ainda não implementada.');
    });
});

// Função para alternar o menu lateral
function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Função para rolar suavemente para a seção correspondente quando um item do menu é clicado
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar-menu a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            toggleMenu(); // Fechar o menu lateral após clicar em um item
        });
    });
});

// Função para rolar suavemente para a seção correspondente quando um item do menu é clicado
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cta-button').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Verifica se há um fragmento na URL e rola suavemente para a seção correspondente
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.hash) {
        var targetId = window.location.hash.substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    } else {
        // Se não houver fragmento, rola para o topo da página
        window.scrollTo(0, 0);
    }
});
// Função para rolar a página para o topo quando ela é carregada
window.onload = function() {
    window.scrollTo(0, 0);
}
// Função para rolar a página para o topo antes de descarregar
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});