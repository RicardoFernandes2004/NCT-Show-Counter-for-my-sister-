        // Calcula a data de término (80 dias a partir de hoje)
const now = new Date();
const endDate = new Date(now.getTime() + 80 * 24 * 60 * 60 * 1000);
        
        // Armazena a data de término no localStorage se ainda não estiver definida
if (!localStorage.getItem('endDate')) {
    localStorage.setItem('endDate', endDate);
}

function updateTimer() {
    const endDate = new Date(localStorage.getItem('endDate'));
    const now = new Date();
    const timeRemaining = endDate - now;
    
    if (timeRemaining <= 0) {
        document.getElementById('timer').innerText = 'É hoje!';
        return;
    }
    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            
    document.getElementById('timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer(); // Atualiza o timer imediatamente