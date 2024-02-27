import Button from "@/components/Button";
import { Link } from "react-router-dom";
import passport from "../../assets/image.png";
import { setAppStatusCurpsStep } from "../../stores/steps";

export default function SelectTipoCitaStep() {
  return (
    <>
      <h2 className="font-bold text-xl md:text-3xl text-center mt-3">
        Agenda tu cita ahora mismo
      </h2>

      <div className="flex justify-center items-center w-full my-5">
        <img
          src={passport}
          width={550}
        />
      </div>

      <p className="my-2 mb-3 mt-6 text-lg text-neutral-700">
        ¿Que tipo de tramite quieres realizar?
      </p>

      <div className="grid md:grid-cols-3 gap-3 md:gap-5">
        <Button
          variant="primary"
          label="Primera Vez" onClick={() => setAppStatusCurpsStep()} />
        <Button
          variant="primary"
          label="Renovacion" onClick={() => setAppStatusCurpsStep()} />
        <Button
          variant="primary"
          label="Pasaporte Extraviado" onClick={() => setAppStatusCurpsStep()} />
      </div>

      <Link to="/tyc">
        <p className="text-center hover:underline hover:cursor-pointer mt-7">
          Terminos y condiciones
        </p>
      </Link>
    </>
  )
}
