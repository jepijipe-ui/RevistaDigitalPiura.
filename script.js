// =========================================================
// REVISTA DIGITAL SOBRE PIURA
// JAVASCRIPT PRINCIPAL
// =========================================================


// =========================================================
// 1. NAVEGACIÓN SUAVE
// =========================================================

document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener("click", function(event) {

        const destino = this.getAttribute("href");

        const elemento = document.querySelector(destino);

        if (elemento) {

            event.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================================================
// 2. DETECTAR LA SECCIÓN ACTUAL
// =========================================================

const secciones = document.querySelectorAll("section[id]");

const enlacesNav = document.querySelectorAll(".navbar nav a");


const observadorSecciones = new IntersectionObserver(

    entradas => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                const idActual = entrada.target.id;


                enlacesNav.forEach(enlace => {

                    const corresponde =
                        enlace.getAttribute("href") === "#" + idActual;


                    if (corresponde) {

                        enlace.classList.add("activo");

                    } else {

                        enlace.classList.remove("activo");

                    }

                });

            }

        });

    },

    {
        threshold: 0.35
    }

);


secciones.forEach(seccion => {

    observadorSecciones.observe(seccion);

});


// =========================================================
// 3. ANIMACIONES AL APARECER EN PANTALLA
// =========================================================

const elementosAnimados = document.querySelectorAll(
    ".trabajo, .titulo-seccion, .texto-introduccion, .encabezado-trabajos, .reflexion-contenido"
);


elementosAnimados.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(35px)";

    elemento.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


const observadorAnimaciones = new IntersectionObserver(

    entradas => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";

                entrada.target.style.transform = "translateY(0)";

                observadorAnimaciones.unobserve(entrada.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementosAnimados.forEach(elemento => {

    observadorAnimaciones.observe(elemento);

});


// =========================================================
// 4. COMPROBAR IMÁGENES
// =========================================================

const imagenes = document.querySelectorAll(".imagen-trabajo img");


imagenes.forEach(imagen => {

    imagen.addEventListener("error", function() {

        const contenedor = this.closest(".imagen-trabajo");

        contenedor.classList.add("imagen-no-encontrada");

        this.style.display = "none";

    });


    imagen.addEventListener("load", function() {

        const contenedor = this.closest(".imagen-trabajo");

        contenedor.classList.remove("imagen-no-encontrada");

    });

});


// =========================================================
// 5. EFECTO DE PARALLAX SUAVE EN LA PORTADA
// =========================================================

const portadaContenido =
    document.querySelector(".portada-contenido");


window.addEventListener("scroll", () => {

    const desplazamiento = window.scrollY;


    if (desplazamiento < window.innerHeight) {

        portadaContenido.style.transform =
            `translateY(${desplazamiento * 0.15}px)`;

        portadaContenido.style.opacity =
            Math.max(
                0,
                1 - desplazamiento / (window.innerHeight * 0.8)
            );

    }

});


// =========================================================
// 6. EFECTO DE LA BARRA DE NAVEGACIÓN
// =========================================================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// =========================================================
// 7. REVELAR LAS IMÁGENES DE LOS TRABAJOS
// =========================================================

const imagenesTrabajo =
    document.querySelectorAll(".imagen-trabajo");


const observadorImagenes = new IntersectionObserver(

    entradas => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("imagen-visible");

                observadorImagenes.unobserve(entrada.target);

            }

        });

    },

    {
        threshold: 0.2
    }

);


imagenesTrabajo.forEach(imagen => {

    observadorImagenes.observe(imagen);

});


// =========================================================
// 8. ANIMACIÓN DEL NÚMERO DE CADA TRABAJO
// =========================================================

const numerosTrabajo =
    document.querySelectorAll(".numero-trabajo");


numerosTrabajo.forEach(numero => {

    numero.addEventListener("mouseenter", () => {

        numero.style.transform = "translateX(8px)";

        numero.style.transition =
            "transform 0.3s ease";

    });


    numero.addEventListener("mouseleave", () => {

        numero.style.transform = "translateX(0)";

    });

});


// =========================================================
// 9. MENSAJE EN CONSOLA
// =========================================================

console.log(
    "📖 Revista Digital Sobre Piura cargada correctamente."
);

console.log(
    "🎨 5 trabajos artísticos encontrados."
);

console.log(
    "📍 Patrimonio · Cultura · Historia · Arte"
);


// =========================================================
// 10. VERIFICACIÓN DE LA ESTRUCTURA
// =========================================================

const nombresImagenes = [

    "narihuala.jpg",

    "vasija-vicus.jpg",

    "simbila.jpg",

    "casa-museo-miguel-grau.jpg",

    "san-juan-bautista-catacaos.jpg"

];


console.log("Imágenes que la revista espera encontrar:");

nombresImagenes.forEach((nombre, indice) => {

    console.log(
        `${indice + 1}. imagenes/${nombre}`
    );

});