const contenedor = document.getElementById("cuartos");
// const $ = (selector) => document.querySelector(selector);

// $("#btn-delete");
// $(".btn-ok");

fetch("https://api.thecatapi.com/v1/images/search?limit=8")
	.then((res) => res.json())
	.then((data) => renderMichi(data));

const renderMichi = (data) => {
	const arrayMichis = data.slice(0, 8);
	console.log(arrayMichis);
	arrayMichis.map((michi) => {
		contenedor.innerHTML += `
     <div class="card">
      <img src= ${michi.url} alt="foto-michi">
    </div>
    `;
	});
};

const getId = (data) => {
	const { id } = data;
};
