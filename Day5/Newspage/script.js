console.log('...APP Started');

function callAPI() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=b53818828f494427bdf4cb734d3ff7f8')
        .then((res) => {

            res.json().then((data) => {
                renderUI(data);
            })

        })
}
// callAPI();

function renderUI(data) {
    //got the articles from data
    const articles = data.articles;
    console.log(data);
    const root = document.getElementById("root");

    for (let i = 0; i < articles.length; i++) {
        const ar = articles[i];
        // document.write(ar);
        // document.write(articles[0].author);
        // console.log(ar);

        //created parent div
        const div = document.createElement("div");
        div.setAttribute("class", "news-card");



        const h3 = document.createElement('h3');
        h3.innerText = ar.title;
        div.appendChild(h3);
        // div.innerText = 'Card';

        const img = document.createElement('img');
        img.src = ar.urlToImage;
        div.appendChild(img);
        // img.style.width="200px";

        const p = document.createElement('p');
        p.innerText=ar.description;
        div.appendChild(p);

        root.appendChild(div);
        
    }
}


// renderUI();

callAPI();