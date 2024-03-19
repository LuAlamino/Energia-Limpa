document.addEventListener('DOMContentLoaded', function() {
    var currentWaterLevel = 90; // Valor inicial da água
    var currentSolarEnergy = 50; // Valor inicial da energia

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
                borderWidth: 1
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
                borderWidth: 1
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
            labels: ['Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23'],
            datasets: [{
                label: 'Nível de Água',
                data: [70, 60, 65, 75, 80, 85, 90],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
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
            labels: ['Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23'],
            datasets: [{
                label: 'Nível de Energia Solar',
                data: [80, 90, 50, 72, 80, 68, 90],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 1
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
        // Atualizar o gráfico do nível de água
        var waterLevelInput = document.getElementById('nivel-agua');
        var waterLevelValue = parseInt(waterLevelInput.value);
        if (!isNaN(waterLevelValue)) {
            var newWaterLevel = Math.max(0, Math.min(100, currentWaterLevel - waterLevelValue));
            if (newWaterLevel < currentWaterLevel) {
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
            alert('Falta de energia!');
            return;
        }

        // Atualizar os gráficos
        waterLevelChart.update();
        solarCurrentChart.update();

        // Exibir mensagem de sucesso
        alert('Irrigação agendada com sucesso!');
    }

    var submitButton = document.querySelector('button');
    submitButton.addEventListener('click', updateCharts);
});
