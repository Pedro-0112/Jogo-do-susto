const gameArea = document.getElementById('gameArea');
const scaryImage = document.getElementById('scaryImage');
const startButton = document.getElementById('startButton');

// URL de uma imagem assustadora (pode ser substituída por qualquer imagem)
scaryImage.src = 'https://i0.wp.com/lagartocomoeuvejo.com.br/wp-content/uploads/2022/04/oportunidade-emprego-carteira-de-trabalho.jpg?resize=696%2C450&ssl=1'; // Exemplo de imagem assustadora

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.disabled = true;
    startButton.textContent = 'Aguardando susto...';

    // Tempo aleatório entre 2 e 10 segundos
    const randomTime = Math.floor(Math.random() * 8000) + 2000;

    setTimeout(() => {
        showScaryImage();
    }, randomTime);
}

function showScaryImage() {
    scaryImage.style.display = 'block';

    // Esconde a imagem após 1 segundo
    setTimeout(() => {
        scaryImage.style.display = 'none';
        startButton.disabled = false;
        startButton.textContent = 'Jogar novamente';
    }, 1000);
}