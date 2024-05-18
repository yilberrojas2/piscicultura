"use client";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import StickyNavbar from "../components/navbar.jsx";
import "../styles/navbar.css";
import GridProductos from "../components/vistaProductos.jsx";

const Inicio = () => {
  const inicialesEmpresa = "'🎣MUESTREO'";
  const nombreEmpresa = "En la PISCICULTURA 🐟🐠";
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const h3Element = document.querySelector(" .scrolling-h3");
      // const h2Element = document.querySelector(" .scrolling-h2");
      if (h3Element) {
        const scrollY = window.scrollY;
        const scaleValue = Math.max(1 - scrollY / 500, 0.5); // Ajusta el valor según tu preferencia
        const opacityValue = Math.max(1 - scrollY / 200, 0);

        h3Element.style.transform = `scale(${scaleValue})`;
        h3Element.style.opacity = opacityValue.toString();
      }
      // if (h2Element) {
      //   const scrollY = window.scrollY;
      //   const scaleValue = Math.max(1 + scrollY / 100, 0.5); // Ajusta el valor según tu preferencia
      //   const opacityValue = Math.max(1 - scrollY / 200, 0);

      //   h2Element.style.transform = `scale(${scaleValue})`;
      //   h2Element.style.opacity = opacityValue.toString();
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [userInteracted, setUserInteracted] = useState(false);

  const handleUserInteraction = () => {
    setUserInteracted(true);
  };

  // Configuración de animación para el video
  const videoAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  });

  useEffect(() => {
    if (userInteracted && videoRef.current) {
      videoRef.current
        .play()
        .catch((error) => console.error("Error al reproducir el video", error));
    }
  }, [userInteracted]);

  return (
    <>
      <StickyNavbar />

      <h3 className=" ml-0 mt-72 mb-80 text-center font-black text-cyan-500 text-8xl scrolling-h3">
        <span className="text-white">{inicialesEmpresa}</span> {nombreEmpresa}
      </h3>

      {/* <h2 className="ml-0 mt-72 mb-80 text-center font-bold text-cyan-500 text-2xl scrolling-h2">
        <span className="text-white">{inicialesEmpresa}</span> {nombreEmpresa}
      </h2> */}

      <div className="relative -z-10 overflow-hidden bg-transparent">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <div className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                <h1>LA PISCICULTURA</h1>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
                  (ES DE TODOS)
                </h2>
              </div>
              <p className="mt-4 text-xl text-gray-500">
                En PisciculturaGlobal desde hace más de diez años brindamos el
                coaching que muchas empresas han necesitado para iniciar y
                operar con éxito sus proyectos acuícolas.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {" "}
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="src/assets/img/aerial-footage-cages-fish-farm-600nw-2307230925.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="src/assets/img/piscicultura-salmon-noruega-industria-alimentos-mar-produccion-artesanal-tradicional-medio-ambiente_662214-320991.avif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="src/assets/img/images.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="src/assets/img/primer-plano-muchos-peces-red-pesca-ai-industria-pesquera-generativa-redes-acuicultura-piscicultura_636638-3779.avif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="src/assets/img/primer-plano-muchos-peces-red-pesca-ai-industria-pesquera-generativa-redes-acuicultura-piscicultura_636638-3786.avif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="src/assets/img/1.jpg.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="src/assets/img/d293d00fcc6b976ab0cbc4d2a7ea03e3.gif"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-green-700"
                >
                  Saber más de OWA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="ml-0 mt-40 mb-44 text-center font-bold text-zinc-100 text-6xl">
        Bienvenidos a Nuestro Software <br />
        <span className="font-extrabold text-9xl text-orange-400">OWA</span>
        <br /> Disfruta de Nuestra Web
      </h1>
      <GridProductos />
      <div className="misionYvision ml-48 mr-48 grid grid-cols-2 gap-20">
        {/* Sección 1 */}
        <div className="section">
          <span className="icon">🐠</span>
          <h1 className="font-bold text-white text-3xl mb-2">
            Usted puede confiar en nosotros.
          </h1>
          <p className="font-semibold text-xl text-gray-400 mb-52">
            En PisciculturaGlobal desde hace más de
            <span className="text-green-500"> diez años</span> brindamos el
            coaching que muchas empresas han necesitado{" "}
            <span className="text-green-500">para iniciar</span> y operar con
            éxito sus proyectos
            <span className="text-green-500"> acuícolas.</span>
          </p>
        </div>

        {/* Sección 2 */}
        <div className="section">
          <span className="icon">&#x1F30E;</span>
          <h1 className="font-bold text-white text-3xl mb-2">CAPACITACIÓN</h1>
          <p className="font-semibold text-xl text-gray-400 mb-52">
            PisciculturaGlobal es la única plataforma dedicada a la{" "}
            <span className="text-green-500">educación</span> a en linea para la
            industria acuícola permitiéndote desde la comodidad de tu hogar{" "}
            <span className="text-green-500">disfrutar</span>; de un programa de
            formación perfectamente balanceado para tus necesidades y que
            permitirá que lleves al siguiente nivel tus niveles de producción y
            rentabilidad.
          </p>
        </div>
      </div>
      <div className="ml-20 z-10">
        <animated.video
          autoPlay
          ref={videoRef}
          style={videoAnimation}
          src="src/assets/videos/videoPetroleo.mp4"
          alt=""
        />
      </div>
      <button onClick={handleUserInteraction}>Iniciar</button>
    </>
  );
};

export default Inicio;
