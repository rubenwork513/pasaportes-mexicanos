import { terminosYCondiciones } from "../data/tyc"
import MainLayout from "../layouts/MainLayout"

export default function LegalPage() {
  const { principal, articulos } = terminosYCondiciones

  return (
    <MainLayout>
      <div className="">
        <h1 className="text-xl md:text-3xl font-bold">Terminos y condiciones</h1>

        <p className=" leading-relaxed text-pretty my-4">
          {principal}
        </p>

        {articulos.map((articulo, index) => {
          const { principal, subarticulos } = articulo

          return (
            <div className="mb-6">
              <p
                key={index}
                className="font-semibold text-lg my-2"
              >
                {principal}
              </p>
              {subarticulos && subarticulos.map(({ content }) => {
                return (
                  <p className=" leading-relaxed ml-4 mb-2">
                    {content}
                  </p>
                )
              })}
            </div>
          )
        })}
      </div>

    </MainLayout>
  )
}