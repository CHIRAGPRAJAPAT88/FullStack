function fetchNews() {
    const apiKey = '88ac63d25a214bff95d634d557f7a12b'; 
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); 
        })
        .then(data => {
            displayNews(data.articles);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            document.getElementById('news-container').innerText = 'Failed to load news.';
        });
}

function displayNews(articles) {
    const container = document.getElementById('news-container');

    articles.forEach(article => {
        const div = document.createElement('div');
        div.className = 'article';
        div.innerHTML = `
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description || 'No description available.'}</p>
            <p><em>Source: ${article.source.name}</em></p>
            <img src="${article.urlToImage || 'https://via.placeholder.com/150'}" alt="${article.title}">`;
        container.appendChild(div);
    });
}

fetchNews();
