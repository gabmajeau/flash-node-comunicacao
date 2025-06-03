
const axios = require('axios');

async function chamarAPI() {
  try {
    const resposta = await axios.post('http://localhost:5000/executar', {
      numero: 7
    });
    console.log("Texto recebido:", resposta.data.resultado);
  } catch (err) {
    console.error("Erro:", err.message);
  }
}

chamarAPI();
