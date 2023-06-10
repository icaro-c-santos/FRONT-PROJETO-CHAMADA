

function calcularProximaData(diaSemana, dataAtual) {
    const proximaData = new Date(dataAtual);
    proximaData.setDate(dataAtual.getDate() + ((diaSemana + 7 - dataAtual.getDay()) % 7));
    
    return proximaData;
  }
  