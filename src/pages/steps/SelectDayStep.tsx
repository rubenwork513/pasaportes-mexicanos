import CancelButton from "@/components/CancelButton"
import StepHeader from "@/components/StepHeader"
import { Button } from "@/components/ui/button"
import { setAppVigenciaStep } from "@/stores/steps"
import { ArrowRight } from "lucide-react"

export default function SelectDayStep() {
  return (
    <div>
      <StepHeader
        title="Selecciona dia y hora para tu cita"
        subtitle="Selecciona un dia y una hora para tu cita, recuerda que deberas ser puntual"
      />

      <div className="flex flex-col-reverse md:flex-row justify-between mt-10 gap-4">
        <CancelButton />
        <Button
          onClick={() => setAppVigenciaStep()}
          className="px-10"
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}