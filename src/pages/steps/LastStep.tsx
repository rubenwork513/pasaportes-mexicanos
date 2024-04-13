import Button from "@/components/Button";
import passport from "../../assets/image.png";
import { setAppStatusSelectTipoCitaStep } from "../../stores/steps";
import { CheckCheck } from "lucide-react";

export default function LastStep() {
  const handleClick = () => {
    setAppStatusSelectTipoCitaStep()
  }

  return (
    <>
      <div className="flex justify-center items-center w-full mb-5">
        <img
          src={passport}
          width={550}
        />
      </div>

      <h2 className="font-bold text-xl mt-12 text-green-600 md:px-20 flex gap-1 items-center">
        <CheckCheck className='mr-2' />
        Haz finalizado tu tramite
      </h2>
      <p className="mt-3">
        recuerda realizar tu pago antes de las 24 horas, confirma tu cita y no pierdas tu turno
      </p>

      <div className="grid gap-3 md:gap-5 mt-5 md:mt-14">
        <Button
          variant="primary"
          onClick={() => handleClick()} >
          Regresar al inicio
        </Button>
      </div>
    </>
  )
}
