import Button from "@/components/Button";
import {
  Select, SelectContent,
  SelectGroup, SelectItem,
  SelectLabel, SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setAppDataTipoCita } from "@/stores/data";
import passport from "../../assets/image.png";
import { setAppStatusCurpsStep } from "../../stores/steps";

export default function SelectTipoCitaStep() {
  const handleClick = (type: string) => {
    setAppStatusCurpsStep()
    setAppDataTipoCita(type)
  }

  return (
    <>
      <div className="flex justify-center items-center w-full mb-5">
        <img
          src={passport}
          width={550}
        />
      </div>

      <div className="grid gap-3 md:gap-5 mt-10">
        <h2 className="font-bold text-2xl md:text-3xl mt-3">
          Agenda tu cita ahora mismo
        </h2>

        <span>
          Que tipo de tramite realizara?
        </span>

        <Select
          onValueChange={(value) => setAppDataTipoCita(value)}
        >
          <SelectTrigger className="w-full md:w-[330px] mb-5">
            <SelectValue placeholder="Tipo de tramite" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tramites Disponibles</SelectLabel>
              <SelectItem value="1655">Primera Vez</SelectItem>
              <SelectItem value="2250">Renovacion</SelectItem>
              <SelectItem value="3940">Pasaporte Extraviado</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          variant="primary"
          onClick={() => handleClick("Pasaporte Extraviado")}
        >
          Iniciar tramite
        </Button>
      </div>
    </>
  )
}
