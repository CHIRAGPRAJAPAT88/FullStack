async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json(); 


        displayData(data);
    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('data-container').innerText = 'Failed to load data.';
    }
}

function displayData(data) {
    const container = document.getElementById('data-container');


    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
        container.appendChild(div);
    });
}

fetchData();
