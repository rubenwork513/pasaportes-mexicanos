import StepHeader from "@/components/StepHeader";
import { useDataStore } from "@/stores/data";
import { setAppStatusSelectTipoCitaStep } from "@/stores/steps";
import { AlertTriangle } from "lucide-react";
import { setAppDataClear } from "@/stores/data";

export default function SuccessStep() {
  const { data } = useDataStore()

  const { diaCita, horaCita, vigenciaPrecio } = data

  return (
    <div>
      <StepHeader
        title="Referencia de pago creada con exito!"
        subtitle="Recuerda que debes de pagar para que tu cita sea agendada, al no realizar su pago este caducara y perdera su turno."
      />

      <div className="p-4 border-4 border-dotted border-neutral-500 rounded-md 
      [&>div]:my-2 [&>div]:flex [&>div]:items-start [&>div]:gap-3
      [&>div>p]:font-bold [&>div>p]:text-base [&>div>p]:text-neutral-500
      [&>div>span]:text-lg [&>div>span]:text-black [&>div>span]:font-bold ">
        <div>
          <p>Fecha y hora de la cita:</p>
          {diaCita && horaCita && <span>{diaCita} - {horaCita}</span>}
        </div>

        <div>
          <p>Monto a pagar:</p>
          {vigenciaPrecio && <span>{vigenciaPrecio}</span>}
        </div>

        <div>
          <p>CLABE interbancaria:</p>
          <span>7109 6900 0031 7260 43</span>
        </div>

        <div>
          <p>Institucion bancaria:</p>
          <span>NVIO</span>
        </div>

        <div>
          <p>Beneficiario:</p>
          <span>Afiliado Mi Pasaporte</span>
        </div>

        <div>
          <p>Concepto de pago:</p>
          <span>SRE</span>
        </div>

      </div>

      <div
        className="bg-red-300 p-4 rounded-md flex justify-center items-center shadow-xl shadow-transparent hover:shadow-black/10 hover:cursor-pointer my-6"
        onClick={() => {
          setAppStatusSelectTipoCitaStep()
          setAppDataClear()
        }}
      >
        Volver a la pagina principal
      </div>

      <div className="border-dotted border-4 border-yellow-500 p-4 flex gap-3 items-center mt-3 rounded-md">
        <AlertTriangle className="size-9 text-yellow-500" />
        <p>
          NOTA: Una vez realizado el pago favor de confimar con su comprobante de pago ó captura de pantalla al correo info@turnomicita.com
        </p>
      </div>

    </div>
  )
}