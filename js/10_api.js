const consumirAPI = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await respuesta.json();
  console.log("USER ID:" + json.userId);
  console.log("ID:" + json.id);
  console.log("TITULO:" + json.title);
  console.log("COMPLETADO:" + json.completed);
  let div = document.createElement("div");
  div.className = "caja";
  div.innerHTML = `<p><span>User Id: ${json.userId}</span></p>
  <p><span>ID: ${json.id}</span></p>
  <p><span>Titulo: ${json.title}</span></p>
  <p><span>Completado: ${json.completed}</span></p>`;
  document.body.appendChild(div);
};
