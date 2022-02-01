//pertama kita buat var button ketika searching di klik muncul berita
const button = document.querySelector('.btn');

button.addEventListener('click',function(){
    let input1 = document.getElementById("inputan");
    let input2 = input1.value;

    //mengambil api pencarian
    fetch('https://newsapi.org/v2/everything?apiKey=5ddcbb6048054629b9658538303fafa6&q='+input2)
    .then(response => response.json())
    .then(response => {
        const news = response.articles;
        let card = '';
        news.forEach(m => card += showCards(m));

        const berita = document.getElementById('news-item');
        berita.innerHTML = card;
    });
});

//tampil berita utama
const tampilData = fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=5ddcbb6048054629b9658538303fafa6');
tampilData
    .then(response => response.json())
    .then(response => {
        const news = response.articles;
        let card1 = '';
        news.forEach(m => card1 += showCards(m));

        const berita1 = document.getElementById('news-item');
        berita1.innerHTML = card1;
    });




    function showCards(m) {
        return  `  <div class="col-md-4 my-3">
        <div class="card">
            <img src="${m.urlToImage}" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title">${m.title}</h5>
              <p class="card-text text-muted">${m.author}, ${m.publishedAt}</p>
              <p class="card-text">${m.description}</p>
              <a href="${m.url}" class="btn btn-primary">Cek selengkapnya</a>
            </div>
          </div>
      </div>
      `;
      }
