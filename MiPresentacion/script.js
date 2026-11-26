const proyectos = [ 
    {nombre: "Trabajo Practico 1", tecnologia:"CSS", descripcion: "Tarjetas", link:"https://example.com/proyecto1"},
    {nombre: "Trabajo Practico 2", tecnologia:"CSS", descripcion:"Navabar", link:"https://example.com/proyecto2"},
    {nombre:"Trabajo Practico 3", tecnologia:"CSS", descripcion:"Flexbox", link:"https://example.com/proyecto3"},
    {nombre:"Trabajo Practico 4", tecnologia:"CSS", descripcion:"Grid", link:"https://example.com/proyecto4"},
    {nombre:"Trabajo Practico 5", tecnologia:"CSS", descripcion:"Prototipo", link:"https://example.com/proyecto5"},
    {nombre:"Trabajo Practico 6", tecnologia:"CSS", descripcion:"cl6", link:"https://example.com/proyecto6"},
    {nombre:"Trabajo Practico 7", tecnologia:"CSS", descripcion:"@media", link:"https://example.com/proyecto7"},
    {nombre:"Trabajo Practico 8", tecnologia:"HTML Y JavaScript", descripcion:"Formularios", link:"https://example.com/proyecto8"},
]

const contenedor = document.getElementById("contenedor-proyectos");

contenedor.innerHTML = "";

proyectos.forEach((proyecto, indice) => {

    contenedor.innerHTML += `

        <div class="tarjetas-chicas">

            <div class="tar-sup">

                <p>${String(indice + 1).padStart(2, "0")}</p>

                <a class="flecha-link"
                   href="${proyecto.link}"
                   target="_blank"
                   rel="noopener noreferrer">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">

                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>

                    </svg>

                </a>

            </div>

            <div class="text-tar-chi">

                <div class="encabezado-tarjeta">

                    <h2>
                        ${proyecto.nombre}
                    </h2>

                </div>

                <div class="subtexto-3">

                    <p class="tar-tecnologia">
                        ${proyecto.tecnologia}
                    </p>

                    <p class="tar-descripcion">
                        ${proyecto.descripcion}
                    </p>

                </div>

            </div>

        </div>

    `;

});