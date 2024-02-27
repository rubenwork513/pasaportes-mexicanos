import CancelButton from "@/components/CancelButton"
import StepHeader from "@/components/StepHeader"
import { Button } from "@/components/ui/button"
import { setAppPersonalDataStep } from "@/stores/steps"
import { ArrowRight } from "lucide-react"

export default function SelectVigenciaStep() {
  // const VIGENCIAS_DISPONIBLES = [
  //   { id: 2, name: "3 años", precio: 1655 },
  //   { id: 3, name: "6 años", precio: 2250 },
  //   { id: 4, name: "10 años", precio: 3940 },
  // ]

  return (
    <div>
      <StepHeader
        title="Vigencia del Pasaporte"
        subtitle="Selecciona una vigencia para tu pasaporte, recuerda que el precio varia segun la vigencia"
      />

      <div className="flex justify-between mt-10">
        <CancelButton />
        <Button
          onClick={() => setAppPersonalDataStep()}
          className="px-10"
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}