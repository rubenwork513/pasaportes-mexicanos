import CancelButton from "@/components/CancelButton"
import StepHeader from "@/components/StepHeader"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent,
  SelectGroup, SelectItem,
  SelectLabel, SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { setAppDataVigencia } from "@/stores/data"
import { setAppPersonalDataStep } from "@/stores/steps"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function SelectVigenciaStep() {
  const [vigencia, setVigencia] = useState("")

  return (
    <div>
      <StepHeader
        title="Vigencia del Pasaporte"
        subtitle="Selecciona una vigencia para tu pasaporte, recuerda que el precio varia segun la vigencia"
      />

      <Select
        onValueChange={(value) => setVigencia(value)}
      >
        <SelectTrigger className="w-[330px]">
          <SelectValue placeholder="Vigencia del pasaporte" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Vigencias Disponibles</SelectLabel>
            <SelectItem value="1655">3 años - $1655</SelectItem>
            <SelectItem value="2250">6 años - $2250</SelectItem>
            <SelectItem value="3940">10 años - $3940</SelectItem>
            <SelectItem value="5000">Permanente - $5000</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex justify-between mt-10">
        <CancelButton />
        <Button
          onClick={() => {
            setAppPersonalDataStep()
            setAppDataVigencia(parseInt(vigencia))
          }}
          className="px-10"
          disabled={!vigencia}
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}