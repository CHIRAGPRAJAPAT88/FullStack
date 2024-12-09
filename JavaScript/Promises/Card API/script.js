document.getElementById('fetch-button').addEventListener('click', fetchUsers);

function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            displayUsers(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            document.getElementById('profiles-container').innerText = 'Failed to load user profiles.';
        });
}

function displayUsers(users) {
    const container = document.getElementById('profiles-container');
    container.innerHTML = ''; 

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <p>${user.address.city}</p>
        `;
        container.appendChild(card);
    });
}
