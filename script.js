// Mostrar data e hora atual no rodapé (atualiza a cada minuto)
function atualizarDataHora() {
  const dataHora = document.getElementById("dataHora");
  if (!dataHora) return;
  const agora = new Date();
  dataHora.textContent = `Atualizado em: ${agora.toLocaleString()}`;
}
atualizarDataHora();
setInterval(atualizarDataHora, 60000); // atualiza a cada minuto

// Validação simples do formulário e feedback
const form = document.getElementById("formAgendamento");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // campos principais
    const nome = document.getElementById("nomeCliente").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const email = document.getElementById("email").value.trim();
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    // validações básicas
    if (!nome || !cpf || !email || !servico || !data || !hora) {
      alert("Por favor, preencha todos os campos obrigatórios antes de enviar.");
      return;
    }

    // validação simples de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // validação de data (não aceitar datas passadas)
    const hoje = new Date();
    const agendada = new Date(`${data}T${hora}`);
    if (agendada < hoje) {
      alert("Escolha uma data e horário futuros para o agendamento.");
      return;
    }

    // se passou nas validações
    alert("Cadastro e agendamento enviados com sucesso! 🐾\nVocê receberá confirmação por e-mail (simulação).");

    // Limpar formulário
    form.reset();
  });
}