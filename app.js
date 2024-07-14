document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    linkElement.addEventListener('click', function() {
        alert('Abrindo perfil em nova página');
    });

    fetch(`https://api.github.com/users/Anaflorentino`)
        .then(function(res) {
            if (!res.ok) {
                throw new Error('Erro ao buscar os dados do usuário: ' + res.statusText);
            }
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name || 'N/A';
            usernameElement.innerText = json.login || 'N/A';
            avatarElement.src = json.avatar_url || 'https://via.placeholder.com/180x180';
            followingElement.innerText = json.following || 'N/A';
            followersElement.innerText = json.followers || 'N/A';
            reposElement.innerText = json.public_repos || 'N/A';
            linkElement.href = json.html_url || '#';
        })
        .catch(function(error) {
            console.error('Erro ao buscar os dados do usuário:', error);
            nameElement.innerText = 'Oops! Não foi possível carregar os dados';
            usernameElement.innerText = '';
            avatarElement.src = 'https://via.placeholder.com/180x180';
            followingElement.innerText = '!';
            followersElement.innerText = '!';
            reposElement.innerText = '!';
            linkElement.href = '#';
        });
});
