document.addEventListener('DOMContentLoaded', function() {
    var currentWaterLevel = 90; // Valor inicial da água
    var currentSolarEnergy = 35; // Valor inicial da energia

    var waterLevelCtx = document.getElementById('water-level-chart').getContext('2d');
    var waterLevelChart = new Chart(waterLevelCtx, {
        type: 'bar',
        data: {
            labels: ['Nível de Água'],
            datasets: [{
                label: 'Nível de Água Atual (%)',
                data: [currentWaterLevel],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 100
                    }
                }]
            }
        }
    });

    var solarCurrentCtx = document.getElementById('solar-current-chart').getContext('2d');
    var solarCurrentChart = new Chart(solarCurrentCtx, {
        type: 'bar',
        data: {
            labels: ['Energia Solar'],
            datasets: [{
                label: 'Energia Solar Atual (%)',
                data: [currentSolarEnergy],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 100
                    }
                }]
            }
        }
    });

    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['maio 13', 'Maio 14', 'Maio 15', 'Maio 16', 'Maio 17', 'Maio 18', 'Maio 19'],
            datasets: [{
                label: 'Coleta Semanal ( Água da Chuva )',
                data: [70, 60, 30, 75, 75, 50, 90],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 100
                    }
                }]
            }
        }
    });

    var ctxSolar = document.getElementById('solar-chart').getContext('2d');
    var solarChart = new Chart(ctxSolar, {
        type: 'line',
        data: {
            labels: ['maio 13', 'Maio 14', 'Maio 15', 'Maio 16', 'Maio 17', 'Maio 18', 'Maio 19'],
            datasets: [{
                label: 'Armazenamento Semanal ( Energia Solar )',
                data: [80, 90, 50, 72, 80, 68, 90],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 100
                    }
                }]
            }
        }
    });

    function updateCharts() {

            // Verificar se há energia suficiente
        if (currentSolarEnergy < 10) {
            alert('Para o funcionamento será necessário 10% de energia');
            return;
        }
        // Atualizar o gráfico do nível de água
        var waterLevelInput = document.getElementById('nivel-agua');
        var waterLevelValue = parseInt(waterLevelInput.value);
        if (!isNaN(waterLevelValue)) {
            var newWaterLevel = Math.max(-1, Math.min(100, currentWaterLevel - waterLevelValue));
            if (newWaterLevel >= 0) { // Verificar se há água suficiente
                currentWaterLevel = newWaterLevel;
                waterLevelChart.data.datasets[0].data[0] = currentWaterLevel;
            } else {
                alert('Falta de água!');
                return;
            }
        }

        // Atualizar o gráfico da energia solar
        var newSolarEnergy = Math.max(0, currentSolarEnergy - 10);
        if (newSolarEnergy < currentSolarEnergy) {
            currentSolarEnergy = newSolarEnergy;
            solarCurrentChart.data.datasets[0].data[0] = currentSolarEnergy;
        } else {
            alert('Para o funcionamento sera necessario 10% de energia');
            return;
        }

        // Atualizar os gráficos
        waterLevelChart.update();
        solarCurrentChart.update();

        // Exibir mensagem de sucesso
        alert('Limpeza de placas agendada.');

        
    }

    var submitButton = document.querySelector('button');
    submitButton.addEventListener('click', updateCharts);

    var waterLevelInput = document.getElementById('nivel-agua');
    waterLevelInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') { // Verificar se a tecla pressionada é Enter
            updateCharts(); // Chamar a função para atualizar os gráficos
        }
    });
});

function acionarDispositivoNoTinkercad() {
    var circuitId = '3X6h3iPNsdF-shiny-trug'; // Substitua pelo ID do seu circuito
    var apiKey = 'sua_api_key'; // Substitua pela sua chave de API do Tinkercad

    fetch(`https://tinkercad.com/api/v1/circuits/${circuitId}/simulation`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            action: 'start' // ou 'stop' para desligar
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao acionar o dispositivo no Tinkercad');
        }
        console.log('Dispositivo acionado com sucesso no Tinkercad');
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}
