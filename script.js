// Função para alternar páginas
function showPage(current, next, title) {
    document.getElementById(current).classList.remove('active');
    document.getElementById(next).classList.add('active');
    document.title = title;
}

// Primeira Página
document.getElementById('next1').addEventListener('click', () => {
    showPage('page1', 'page2', "Página 2");
});

// Segunda Página
document.getElementById('next2').addEventListener('click', () => {
    showPage('page2', 'page3', "Página 3");
});

// Terceira Página - Interatividade com corações
document.getElementById('yesBtn').addEventListener('click', () => {
    moveButtons('yesBtn', 'noBtn');
    showPage('page3', 'page4', "Página 4"); // Agora o botão "Sim" também muda para a página 4
});

document.getElementById('noBtn').addEventListener('click', () => {
    moveButtons('yesBtn', 'noBtn');
});

// Quarta Página - Interatividade com corações
document.getElementById('yesBtn2').addEventListener('click', () => {
    moveButtons('yesBtn2', 'noBtn2');
    showPage('page4', 'page5', "Página 5"); // Muda para a página 5 ao clicar no botão "Sim"
});

document.getElementById('noBtn2').addEventListener('click', () => {
    moveButtons('yesBtn2', 'noBtn2');
});

// Função para trocar posições dos botões de sim e não
function moveButtons(btn1, btn2) {
    const button1 = document.getElementById(btn1);
    const button2 = document.getElementById(btn2);
    
    // Verifica a posição atual e troca
    let button1Left = window.getComputedStyle(button1).getPropertyValue('left');
    let button2Left = window.getComputedStyle(button2).getPropertyValue('left');
    
    button1.style.left = button2Left;
    button2.style.left = button1Left;
}

// Quinta Página (Tocar música ao clicar na imagem)
document.getElementById('page5').addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=cceuNJRudHM', '_blank');
});
