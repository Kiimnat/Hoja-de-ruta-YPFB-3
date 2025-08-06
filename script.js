window.addEventListener("DOMContentLoaded", function () {
  const destinatarioSelect = document.getElementById("destinatarioSelect");
  const cargoDestinatario = document.getElementById("cargoDestinatario");
  const form = document.getElementById("correspondenciaForm");

  // Cambia el cargo automáticamente al seleccionar un destinatario
  destinatarioSelect.addEventListener("change", function () {
    const seleccionado = destinatarioSelect.value;

    if (seleccionado.includes("|")) {
      const partes = seleccionado.split("|");
      const cargo = partes[1];
      cargoDestinatario.value = cargo;
    } else {
      cargoDestinatario.value = "";
    }
  });

  // Cuando se envía el formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const seleccionado = destinatarioSelect.value;
    if (!seleccionado) {
      alert("Por favor selecciona un destinatario.");
      return;
    }

    const partes = seleccionado.split("|");
    const nombre = partes[0];
    const cargo = partes[1];
    const instructivo = document.getElementById("instructivo").value;

    const nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Hoja de Correspondencia</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .recuadro {
            border: 2px solid black;
            padding: 15px;
            border-radius: 8px;
            width: 500px;
            margin: auto;
            font-size: 10pt;
            line-height: 1.4;
          }
          strong {
            display: inline-block;
            width: 120px;
            font-weight: bold;
          }
          p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="recuadro">
          <p><strong>Destinatario:</strong> ${nombre}</p>
          <p><strong>Cargo:</strong> ${cargo}</p>
          <p><strong>Instructivo:</strong></p>
          <p>${instructivo.replace(/\n/g, "<br>")}</p>
        </div>
        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `);
    nuevaVentana.document.close();
  });
});
