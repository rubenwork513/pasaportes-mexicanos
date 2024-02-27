import StepHeader from "@/components/StepHeader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { setAppStatusMigratorioStep } from "@/stores/steps";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import CancelButton from "../../components/CancelButton";

const curpsFormSchema = z.object({
  curps: z
    .array(
      z.object({
        value: z
          .string({ required_error: "Please enter a CURP." })
          .min(18, { message: "CURP must be at least 18 characters.", }),
      })
    )
})

type CurpsFormValues = z.infer<typeof curpsFormSchema>

const defaultValues: Partial<CurpsFormValues> = {
  curps: [
    { value: "" },
  ],
}

export default function CurpsStep() {

  const form = useForm<CurpsFormValues>({
    resolver: zodResolver(curpsFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const { fields, append, remove } = useFieldArray({
    name: "curps",
    control: form.control,
  })

  function onSubmit(data: CurpsFormValues) {
    console.log(data)
    setAppStatusMigratorioStep()
  }

  return (
    <div>
      <StepHeader
        title="CURPs de personas solicitantes"
      />

      <p className="text-gray-600 mb-6">
        Si no conoces su curp, puedes consultarla{" "}
        <a
          href="https://www.gob.mx/curp/"
          className="text-blue-600 hover:underline"
        >
          aqui
        </a>
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`curps.${index}.value`}
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: "" })}
          >
            Registar otra CURP
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2 ml-2"
            onClick={() => remove(fields.length - 1)}
          >
            Eliminar CURP
          </Button>

          <div className="flex justify-between mt-10">
            <CancelButton />
            <Button
              type="submit"
              className="px-10"
            >
              Continuar el tramite
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>

        </form>
      </Form>
    </div>
  )
}