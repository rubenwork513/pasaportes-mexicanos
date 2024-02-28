import CancelButton from "@/components/CancelButton";
import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { setAppSuccessStep } from "@/stores/steps";
import { ArrowRight } from "lucide-react";

export default function VerificarDatosStep() {
  return (
    <div>
      <StepHeader
        title="Verificar Datos"
        subtitle="Selecciona un estado y una delegacion donde quieres asistir a tu cita"
      />

      <main className="grid gap-5">
        <div className="border border-neutral-400 rounded-md">
          <header className="p-2 flex justify-center items-center bg-blue-100 rounded-t-md text-blue-800 font-bold">
            Fecha y hora de cita
          </header>
          <footer className="p-3 flex justify-center items-center">
            datos
          </footer>
        </div>

        <div className="border border-neutral-300 rounded-md h-fit w-full">
          <header className="p-2 flex justify-center items-center bg-blue-100 rounded-t-md text-blue-800 font-bold">
            Lugar de la cita
          </header>
          <footer className="p-3 flex flex-col justify-center items-center">
            <p className="text-center text-sm">odicina direccion</p>
          </footer>
        </div>

      </main>


      <div className="flex flex-col-reverse md:flex-row justify-between mt-10 gap-4">
        <CancelButton />
        <Button
          onClick={() => setAppSuccessStep()}
          className="px-10"
        >
          Ver ficha de pago
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}