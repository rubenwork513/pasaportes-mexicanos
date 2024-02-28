import CancelButton from "@/components/CancelButton"
import StepHeader from "@/components/StepHeader"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent,
  SelectGroup, SelectItem,
  SelectLabel, SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { estados } from "@/data/estados"
import { setAppSelectDayStep } from "@/stores/steps"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function SelectCitaLugarStep() {
  const [estado, setEstado] = useState("")
  const [oficina, setOficina] = useState("")

  return (
    <div>
      <StepHeader
        title="Estado y delegacion de la cita"
        subtitle="Selecciona un estado y una delegacion donde quieres asistir a tu cita"
      />

      <div className="flex flex-col md:flex-row gap-3 md:items-center my-4">
        <span className="font-bold w-[100px]">Estado</span>
        <Select onValueChange={(value) => {
          setEstado(value)
          setOficina("")
        }}>
          <SelectTrigger className="w-full md:w-[330px]">
            <SelectValue placeholder="Selecciona un estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Estados</SelectLabel>
              {estados.map((estado) => (
                <SelectItem value={estado.value}>{estado.estado}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:items-center my-4">
        <span className="font-bold w-[100px]">Oficina</span>
        <Select disabled={!estado} onValueChange={(value) => setOficina(value)}>
          <SelectTrigger className="w-full md:w-[330px]">
            <SelectValue placeholder="Selecciona una oficina" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Estados</SelectLabel>
              {estados.filter((e) => e.value === estado).map((state) => (
                state.oficinas.map((oficina) => (
                  <SelectItem value={oficina.oficina}>{oficina.oficina}</SelectItem>
                ))
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between mt-10 gap-4">
        <CancelButton />
        <Button
          onClick={() => setAppSelectDayStep()}
          className="px-10"
          disabled={!oficina}
        >
          Continuar el tramite
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>
    </div>
  )
}