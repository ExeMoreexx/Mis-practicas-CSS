const ObtenerFrase = async () => {
  const api = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
  const json = await api.json();
  let frase = document.querySelector("#frase");
  frase.innerHTML=`
<h1>${json[0].quote}</h1>
<p>-${json[0].author}</p>`;
};
