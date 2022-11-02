const apiRick = async (pagina) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
  const api = await fetch(url);
  const data = await api.json();
  console.log(data);
  divRes = document.querySelector("#resultado");
  data.results.map((item) => {
    divItem = document.createElement("div");
    divItem.innerHTML = `
          <div class="card" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.status}<br>${item.species}</br>${item.gender}</br></p>
          </div>
          </div>
          `;
    divRes.appendChild(divItem);
  });
};

apiRick(1);
