import StepHeader from "@/components/StepHeader";
import { setAppDataClear, useDataStore } from "@/stores/data";
import { setAppLastStep } from "@/stores/steps";
import { AlertTriangle } from "lucide-react";

export default function SuccessStep() {
  const { data } = useDataStore()

  const { diaCita, horaCita, vigenciaPrecio, curps, bank } = data

  // calcular el precio
  const precio = vigenciaPrecio * curps.length

  // convertirlo a moneda local
  const precioLocal = precio.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  })

  return (
    <div>
      <StepHeader
        title="Referencia de pago creada!"
        subtitle="Debes de pagar para que tu cita sea agendada, al no realizar su pago este caducara y perdera su turno"
      />

      <p className="text-lg font-bold text-blue-600">
        Estimado(a)
      </p>

      <p className="text-lg text-blue-600 mb-4">
        {data.nombre + " " + data.apellidos}
      </p>

      <div className="p-4 bg-neutral-100
      [&>div]:my-2 [&>div>span]:text-black [&>div>span]:font-bold">

        <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
          Fecha y hora de la cita:
          {diaCita && horaCita && <span className="capitalize">{diaCita} - {horaCita}</span>}
        </div>

        <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
          Monto a pagar:
          {vigenciaPrecio && <span>{precioLocal}</span>}
        </div>

        <div className="flex gap-1 md:gap-3 md:flex-row flex-col md:items-center">
          Metodo de pago:
          {bank === "SPEI" && (
            <>
              <span>Transferencia Bancaria SPEI</span>
            </>
          )}
          {bank === "OXXO" && (
            <>
              <span>Pago por OXXO</span>
            </>
          )}
        </div>

        <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
          {bank === "SPEI" && (
            <>
              <span>CLABE interbancaria:</span>
              <span>6461 8017 3302 5923 20</span>
            </>
          )}
          {bank === "OXXO" && (
            <>
              <span>Numero de cuenta:</span>
              <span>5362 8610 5642 1353</span>
            </>
          )}
        </div>

        {bank === "SPEI" && (
          <>
            <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
              Institucion bancaria:
              <span>STP</span>
            </div>

            <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
              Beneficiario:
              <span>Afiliado Mi Pasaporte</span>
            </div>

            <div className="flex gap-0 md:gap-3 md:flex-row flex-col">
              Concepto de pago:
              <span>5431</span>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-center items-center p-3 rounded-md mb-5">
        Referencia de pago valida unicamente 24 horas
      </div>

      <div
        className="bg-red-200 p-4 rounded-md flex justify-center items-center shadow-xl shadow-transparent hover:cursor-pointer my-6 font-bold"
        onClick={() => {
          setAppLastStep()
          setAppDataClear()
        }}
      >
        Finalizar
      </div>

      <div className="border-dotted flex p-2 flex-col gap-3 mt-3 rounded-md">
        <span className="flex items-center gap-4 font-bold text-lg text-yellow-500">
          <AlertTriangle className="size-9 " />
          Importante
        </span>
        <p>
          Una vez realizado el pago favor de confimar con su comprobante de pago ó captura de pantalla al correo info@turnomicita.com
        </p>
      </div>

    </div>
  )
}
