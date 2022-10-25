const apiRick = async (pagina) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
  const api = await fetch(url);
  const data = await api.json();
  console.log(data);
  divRes = document.querySelector("#res");
  data.results.map((item) => {
    divItem = document.createElement("div");
    divItem.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `;
        divRes.appendChild(divItem);
  });
};

apiRick(1);