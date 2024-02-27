import CancelButton from "@/components/CancelButton"
import StepHeader from "@/components/StepHeader"
import { Button } from "@/components/ui/button"
import { setAppSelectDayStep } from "@/stores/steps"
import { ArrowRight } from "lucide-react"

export default function SelectCitaLugarStep() {
  return (
    <div>
      <StepHeader
        title="Estado y delegacion de la cita"
        subtitle="Selecciona un estado y una delegacion donde quieres asistir a tu cita"
      />

      <div className="flex justify-between mt-10">
        <CancelButton />
        <Button
          onClick={() => setAppSelectDayStep()}
          className="px-10"
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}