// Actualiza el cargo del destinatario automáticamente cuando cambias la selección
document.getElementById("destinatarioSelect").addEventListener("change", function() {
  const valor = this.value;
  const campoCargoDestinatario = document.getElementById("cargoDestinatario");

  if (valor.includes("|")) {
    const [, cargo] = valor.split("|");
    campoCargoDestinatario.value = cargo;
  } else {
    campoCargoDestinatario.value = "";
  }
});

document.getElementById("correspondenciaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const destinatarioRaw = document.getElementById("destinatarioSelect").value;
  if (!destinatarioRaw) {
    alert("Por favor selecciona un destinatario.");
    return;
  }

  const [destinatario] = destinatarioRaw.split("|");
  const cargo = document.getElementById("cargoDestinatario").value;
  const instructivo = document.getElementById("instructivo").value;

  const contenidoHTML = 
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
        <p>${instructivo.replace(/\n/g, '<br>')}</p>
      </div>
      <script>
        window.onload = function() {
          window.print();
        }
      </script>
    </body>
    </html>
  ;

  const ventana = window.open("", "_blank");
  ventana.document.write(contenidoHTML);
  ventana.document.close();
});
