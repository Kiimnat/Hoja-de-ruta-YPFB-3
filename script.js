document.getElementById("correspondenciaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const destinatario = document.getElementById("destinatarioSelect").value.split("|")[0];
  const cargo = document.getElementById("cargoDestinatario").value;
  const instructivo = document.getElementById("instructivo").value;

  const ventana = window.open("", "Hoja de Correspondencia", "width=800,height=600");
  ventana.document.write(`
    <html>
    <head>
      <title>Hoja de Correspondencia</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; }
        .recuadro {
          border: 2px solid #000;
          padding: 20px;
          border-radius: 10px;
        }
        h2 { margin-bottom: 20px; }
        p { margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="recuadro">
        <h2>Hoja de Correspondencia</h2>
        <p><strong>Destinatario:</strong> ${destinatario}</p>
        <p><strong>Cargo:</strong> ${cargo}</p>
        <p><strong>Instructivo:</strong><br>${instructivo}</p>
      </div>
    </body>
    </html>
  `);
  ventana.document.close();
  ventana.print();
});

function actualizarCargoDestinatario() {
  const select = document.getElementById("destinatarioSelect");
  const valor = select.value;
  const campoCargoDestinatario = document.getElementById("cargoDestinatario");

  if (valor.includes("|")) {
    const [nombre, cargo] = valor.split("|");
    campoCargoDestinatario.value = cargo;
  } else {
    campoCargoDestinatario.value = "";
  }
}
