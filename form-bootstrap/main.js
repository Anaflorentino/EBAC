$(document).ready(function() {
    // Máscara para o campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Função para evitar comportamento padrão de envio
    $('#form').submit(function(event) {
        event.preventDefault();

        // Condição para validar nome
        var nome = $('#nome').val();
        if (!nome.match(/^[A-Za-z\s]+$/)) {
            alert('Por favor, insira apenas letras no campo nome.');
            return;
        }

        // Condição para validar email
        var email = $('#email').val();
        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Exibir mensagem de sucesso e limpar os campos
        $('#success-message').text('Formulário enviado com sucesso!');
        $('#form')[0].reset();
    });

    // Função para validar email
    function isValidEmail(email) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
});