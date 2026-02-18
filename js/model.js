const StoryModel = {
  state: {
    currentScene: "inicio",
    inventory: [],
    flags: { sawHand: false },
  },
  scenes: {
    inicio: {
      text: "El terminal parpadea. 'Santiago, el fragmento de fe ha sido corrompido'. Un proceso desconocido está consumiendo el 99% de la realidad.",
      options: [
        { text: "Ejecutar debugger", next: "debugger" },
        { text: "Rastrear IP de origen", next: "rastreo" },
      ],
    },
    debugger: {
      text: "El debugger muestra un error en la línea 666: 'Variable LUZ no definida'. Encuentras una llave lógica: 'Fragmento_Alfa'.",
      options: [
        {
          text: "Recoger Fragmento",
          next: "inicio",
          action: "take_item",
          item: "Fragmento_Alfa",
        },
        { text: "Ignorar y salir", next: "inicio" },
      ],
    },
    rastreo: {
      text: "La IP apunta a tu propia dirección física. Alguien, o algo, está enviando datos desde dentro de tu habitación.",
      requires: "Fragmento_Alfa",
      options: [
        { text: "Usar Fragmento para bloquear puerto", next: "final_bueno" },
        { text: "Formatear cerebro", next: "final_malo" },
      ],
    },
    final_bueno: {
      text: "Conexión cerrada. El silencio vuelve, pero sabes que el código sigue ahí, esperando el próximo commit.",
      options: [{ text: "Reiniciar sistema", next: "inicio", action: "reset" }],
    },
    final_malo: {
      text: "ERROR CRÍTICO: Borrando archivos vitales... ",
      options: [], // No hay opciones, la UX muere
    },
  },
};
