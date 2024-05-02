body {
    font-family: Arial, sans-serif;
}

.container {
    max-width: 600px;
    margin: 50px auto;
    background-color: #94cf99;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 24px;
    color: #333;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #666;
}

select, input[type="number"] {
    width: calc(50% - 20px); /* 50% menos 5px para dar espaço */
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #c8e90f;
    border-radius: 5px;
    box-sizing: border-box; /* Garante que a largura inclua o preenchimento e a borda */
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 100%; /* Botão ocupará toda a largura do contêiner */
}

button:hover {
    background-color: #45a049;
}

.chart-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.chart-container canvas {
    max-width: 40%; /* Largura máxima de 50% para cada gráfico */
    width: 100%; /* Define a largura como 100% para que eles ocupem a largura máxima */
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
