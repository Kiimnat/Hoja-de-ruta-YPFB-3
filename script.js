document.getElementById("correspondenciaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const destinatarioRaw1 = document.getElementById("destinatarioSelect").value;
  if (!destinatarioRaw1) {
    alert("Por favor selecciona un destinatario.");
    return;
  }
  const [destinatario1] = destinatarioRaw1.split("|");
  const cargo = document.getElementById("cargoDestinatario").value;
  const instructivo = document.getElementById("instructivo").value;

// Recuadro primer destinatario
  doc.setFont("helvetica", "bold");
  doc.rect(10, 100, 190, 30);
  doc.text("SEGUNDO DESTINATARIO:", 12, 105);
  doc.setFont("helvetica", "normal");
  doc.text(`${destinatarioNombre} - ${cargoDestinatario}`, 65, 105);
 doc.setFont("helvetica", "bold");
  doc.text("INSTRUCTIVO:", 12, 113);
  doc.setFont("helvetica", "normal");
  const instructivoTexto = doc.splitTextToSize(instructivo, 185);
  doc.text(instructivoTexto, 12, 113);

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
