var divResults = document.querySelector("#Resultado");

const verUsers = async () => {
  const repuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await repuesta.json();
  console.log(json);
  json.map((user) => {
    let divUser = document.createElement("div");
    divUser.className = "user";
    divUser.innerHTML = `
        <p>${user.id}</p>
        <p>${user.name.toUpperCase()}</p>
        <p>${user.username} [${user.email}]</p>
        <p>${user.address.street} ${user.address.suite}
        ${user.address.city} ${user.address.zipcode}</p>
        <p><b>Geolocalizacion:</b> Lat: ${user.address.geo.lat} Lng: ${
      user.address.geo.lng
    }</p>
        <p><b>Telefono:</b>${user.phone}</p>
        <p><b>Web:</b>${user.website}</p>
        <p><b>Compañia:</b>${user.company.name}
        ${user.company.catchPhrase} ${user.company.bs}</p>
        `;
    divResults.appendChild(divUser);
  });
};

const clearUsers = async () => {
  divResults.innerHTML = "";
};
