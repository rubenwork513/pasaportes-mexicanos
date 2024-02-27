interface Subarticulo {
  content: string;
}

interface Articulo {
  principal: string;
  subarticulos?: Subarticulo[];
}

interface TerminosYCondiciones {
  principal: string;
  articulos: Articulo[];
}

export const terminosYCondiciones: TerminosYCondiciones = {
  principal: "Este contrato (el 'Contrato') contiene los términos, condiciones y limitaciones que rigen para el uso del sitio y servicio denominado Pasaportes MX en adelante “La Empresa”, y pone a disposición de la persona interesada en su utilización (el 'Usuario') en el sitio pasapirotemexicano.space (el 'Sitio').",
  articulos: [
    {
      principal: "1. Aceptación del contrato y sus modificaciones",
      subarticulos: [
        {
          content: "1.1 - El uso del Sistema y el sólo hecho de abonar los honorarios por servicios que La Empresa y el Usuario acuerden para las gestiones encomendadas implica la aceptación sin reservas por parte del Usuario de este contrato"
        },
        {
          content: "1.2 - La Empresa podrá modificar unilateralmente el Contrato. Las modificaciones serán obligatorias desde su publicación en el Sitio o desde su notificación al Usuario, lo que suceda primero, sin perjuicio de la facultad del Usuario de terminar el Contrato."
        }
      ]
    },
    {
      principal: "2. El Servicio",
      subarticulos: [
        {
          content: "2.1 - La Empresa ofrece un servicio privado de intermediación y gestoria ante oficinas de Relaciones Exteriores que se limita al diligenciamiento de Pasaporte Mexicano en base a la información proporcionada por El Usuario y que incluye las siguientes 3 instancias de tramitación: La empresa Pasaporte MX no tiene ningun vinculo con la Secretaria de Relaciones Exteriores (SRE) El servicio que se da es solo de gestión."
        },
      ]
    },
    {
      principal: "3. Plazos de Gestión Estimados y Tiempos de Entrega",
      subarticulos: [
        {
          content: "3.1 - El Plazo expresado como “Plazo de Gestión Estimado” es un plazo promedio estimado de referencia para el Usuario que dependen de la agilidad y disponibilidad técnica/operativa de cada Delegación .La Empresa no posee atención preferencial para agilizar las gestiones."
        },
        {
          content: "3.2 - Los tiempos expresados como “Tiempos de Entrega” se refieren al tiempo de tránsito de la correspondencia canalizada por la empresa de correo y son de exclusiva responsabilidad de estas."
        },
        {
          content: "3.3 - Las demoras en los plazos de gestión ocasionadas por eventualidades no serán responsabilidad de La Empresa. El Usuario entiende y acepta que podrían existir contratiempos y asume el riesgo con el sólo hecho de utilizar el servicio."
        },
        {
          content: "3.4 - La Empresa realizará todos los esfuerzos lógicos necesarios para la obtención de cada acta y para el cumplimiento de los 'Plazos de Gestión Estimados'. La Empresa no garantiza la obtención de los pasaportes ni de los “Plazo de Gestión Estimados” ya que la obtención de estas depende de que las mismas se puedan obtener por medio de cualquiera de las 3 instancias de tramitación detalladas en el punto 2.1 del presente documento."
        },
        {
          content: "3.5 - El Usuario queda notificado y entiende que el solo hecho de utilizar el servicio le brinda la posibilidad de acceder a los beneficios de éste y sus valores añadidos, pero también a los riesgos implícitos."
        },
      ]
    },
    {
      principal: "4. El sistema"
    },
    {
      principal: "5. Costos del Servicio"
    },
    {
      principal: "6. Exclusión de responsabilidad de 'La Empresa'"
    },
    {
      principal: "8. Cesión"
    },
    {
      principal: "9. Información introducida por el usuario en el sitio"
    },
    {
      principal: "10. Derechos sobre el sitio y su contenido"
    },
    {
      principal: "11. Información del usuario"
    },
  ]
}