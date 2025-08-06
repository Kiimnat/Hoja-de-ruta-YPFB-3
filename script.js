// Ejemplo simplificado para imprimir 2 recuadros con destinatarios distintos

document.getElementById("correspondenciaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const destinatarioRaw1 = document.getElementById("destinatarioSelect").value;
  if (!destinatarioRaw1) {
    alert("Por favor selecciona un destinatario.");
    return;
  }
  const [destinatario1] = destinatarioRaw1.split("|");
  const cargo1 = document.getElementById("cargoDestinatario").value;
  const instructivo1 = document.getElementById("instructivo").value;

  // Aquí deberías obtener los datos del segundo destinatario igual que el primero
  // Por ahora pongo datos fijos para ejemplo
  const destinatario2 = "Juan Pérez";
  const cargo2 = "Jefe de Área";
  const instructivo2 = "Segundo instructivo de ejemplo para el destinatario 2.";

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
          margin: 10px auto;
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
        <p><strong>PRIMER DESTINATARIO:</strong></p>
        <p><strong>Destinatario:</strong> ${destinatario1}</p>
        <p><strong>Cargo:</strong> ${cargo1}</p>
        <p><strong>Instructivo:</strong></p>
        <p>${instructivo1.replace(/\n/g, '<br>')}</p>
      </div>

      <div class="recuadro">
        <p><strong>SEGUNDO DESTINATARIO:</strong></p>
        <p><strong>Destinatario:</strong> ${destinatario2}</p>
        <p><strong>Cargo:</strong> ${cargo2}</p>
        <p><strong>Instructivo:</strong></p>
        <p>${instructivo2.replace(/\n/g, '<br>')}</p>
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
