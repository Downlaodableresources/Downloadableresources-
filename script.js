const shapes = ['circle', 'square', 'triangle'];
let score = 0;
let currentTarget = '';

function generateRandomShape() {
    return shapes[Math.floor(Math.random() * shapes.length)];
}

function changeShape(elementId, shape) {
    const element = document.getElementById(elementId);
    element.style.backgroundColor = 'transparent';
    element.style.clipPath = getClipPath(shape);
    
    if (currentTarget === shape) {
        score++;
        document.getElementById('scoreValue').textContent = score;
        document.getElementById('message').textContent = 'Correct Match!';
        setTimeout(resetGame, 1000);
    }
}

function getClipPath(shape) {
    switch(shape) {
        case 'circle':
            return 'circle(50% at center)';
        case 'square':
            return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
        case 'triangle':
            return 'polygon(50% 0%, 0% 100%, 100% 100%)';
    }
}

function resetGame() {
    const targetShape = document.getElementById('targetShape');
    const playerShape = document.getElementById('playerShape');
    
    currentTarget = generateRandomShape();
    targetShape.style.clipPath = getClipPath(currentTarget);
    targetShape.style.backgroundColor = 'blue';
    
    playerShape.style.clipPath = 'none';
    playerShape.style.backgroundColor = 'red';
    
    document.getElementById('message').textContent = 'Match the shape!';
}

// Initialize the game
resetGame();