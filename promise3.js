function showCard(n) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${n.urlToImage}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${n.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${n.author}, ${n.publishedAt}</h6>
                        <p class="card-text">${n.content}</p>
                        <a href="${n.url}" class="btn btn-primary">Read more..</a>
                    </div>
                </div>
            </div>`;
}

const input = document.querySelector('.input');
const searchButton = document.querySelector('.search');
searchButton.addEventListener('submit', retrieve)

function retrieve(e){

    if (input.value == ''){
        alert('input field is empty')
        return
    }

    newsList.innerHTML = ''
    e.preventDefault()

    const apiKey = ''
    
    let topic = input.value;
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=5ddcbb6048054629b9658538303fafa6`

    fetch(url)
        .then (res => res.json())
        .then((data) => {
            
            let cards = '';
            data.articles.forEach(article => cards += showCard(n));
            const newsList = document.querySelector('.news-list');
		    newsList.innerHTML = cards;
        });
        
    };