document.addEventListener("DOMContentLoaded", function () {
  const destinatarioSelect = document.getElementById("destinatarioSelect");
  const cargoDestinatario = document.getElementById("cargoDestinatario");
  const form = document.getElementById("correspondenciaForm");

  // Actualiza el cargo automáticamente
  destinatarioSelect.addEventListener("change", function () {
    const valor = this.value;

    if (valor.includes("|")) {
      const [, cargo] = valor.split("|");
      cargoDestinatario.value = cargo;
    } else {
      cargoDestinatario.value = "";
    }
  });

  // Genera la hoja de correspondencia
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const destinatarioRaw = destinatarioSelect.value;
    if (!destinatarioRaw) {
      alert("Por favor selecciona un destinatario.");
      return;
    }

    const [destinatario] = destinatarioRaw.split("|");
    const cargo = cargoDestinatario.value;
    const instructivo = document.getElementById("instructivo").value;

    const contenidoHTML = `
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
            font-size: 10pt;
          }
          p {
            margin: 5px 0;
            font-size: 10pt;
          }
        </style>
      </head>
      <body>
        <div class="recuadro">
          <p><strong>Destinatario:</strong> ${destinatario}</p>
          <p><strong>Cargo:</strong> ${cargo}</p>
          <p><strong>Instructivo:</strong></p>
          <p>${instructivo.replace(/\n/g, "<br>")}</p>
        </div>
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `;

    const ventana = window.open("", "_blank");
    ventana.document.write(contenidoHTML);
    ventana.document.close();
  });
});
