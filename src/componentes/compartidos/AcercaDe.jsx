import Img from "../Imagenes/imgcatalogo.png"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-black">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:leading-tighter xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Acerca de Nosotros
                </h1>
                <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¡Bienvenido a la documentación para desarrolladores de Springer Como editorial científica,
                  técnica y médica líder a nivel mundial, Springer Nature se compromete a apoyar a la comunidad de investigación.
                </p>
              </div>
              <img
                alt="About"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src={Img}
                width="500"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Conocimientos</h2>
                <p className="mt-4 max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Springer Nature se destaca como una editorial científica mundial, reconocida por sus distinguidos libros, revistas y su compromiso inquebrantable con la difusión de contenido de alta calidad a través de productos y servicios de información pioneros. Con operaciones en unos 20 países y respaldada por una sólida fuerza laboral de más de 13,000 empleados, Springer Nature no solo publica cerca de 500 revistas académicas y de sociedades profesionales, sino que también ilumina el sector de ciencia, tecnología y medicina (STM) con la publicación de alrededor de 3000 revistas y 13,000 libros nuevos al año. Además, cuenta con la colección de libros electrónicos STM más grande del mundo.
                </p>
              </div>
              <div>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-black" />
                    <div>
                      <p className="text-black">
                         Springer Metadata: desbloquea metadatos para más de 13 millones de documentos en línea,
                        que incluyen artículos de revistas, capítulos de libros y protocolos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-black" />
                    <div>
                      <p className="text-black">
                        Springer Meta API: una versión más avanzada que ofrece metadatos versionados para la misma base de contenido amplia.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="mr-4 h-6 w-6 flex-shrink-0 text-black" />
                    <div>
                      <p className="text-black">
                        API Springer Open Access: otorga acceso a metadatos y, cuando esté disponible, 
                        contenido de texto completo para más de 649,000 artículos de acceso abierto, 
                        seleccionando contenido de las revistas BioMed Central y SpringerOpen.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="space-y-4 rounded-lg bg-gray-100 p-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Misión</h2>
                <p className="text-sm text-black">
                  Springer Nature tiene como objetivo promover el descubrimiento mediante la publicación de investigaciones 
                  sólidas y proporcionando soluciones innovadoras que permitan a investigadores, educadores y profesionales encontrar,
                  acceder y compartir conocimientos. Se esfuerzan por capacitar a investigadores
                  e instituciones para que realicen contribuciones impactantes a la sociedad a través 
                  de sus servicios de publicación e información.
                </p>
              </div>
              <div className="space-y-4 rounded-lg bg-gray-100 p-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">Visión</h2>
                <p className="text-sm text-black">
                  Springer Nature imagina un mundo donde el conocimiento sea accesible para todos, 
                  donde la investigación y la educación prosperen mediante la colaboración y la difusión de ideas. 
                  Aspiran a ser un proveedor líder mundial de recursos de investigación,
                  educación y profesionales de alta calidad, 
                  dando forma al futuro de la ciencia, la tecnología, la medicina y las humanidades.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
