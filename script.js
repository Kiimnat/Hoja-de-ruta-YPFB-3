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

document.getElementById("correspondenciaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const destinatario = document.getElementById("destinatarioSelect").value.split("|")[0];
  const cargo = document.getElementById("cargoDestinatario").value;
  const instructivo = document.getElementById("instructivo").value;

  const ventana = window.open("", "Hoja de Correspondencia", "width=800,height=600");
  ventana.document.write(`
    <html>
    <head>
      <title></title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          padding: 20px; 
          margin: 0; 
        }
        .recuadro {
          border: 2px solid #000;
          padding: 15px 20px;
          border-radius: 10px;
          max-width: 600px;
          margin: 40px auto 0 auto;
          font-size: 14px;
        }
        .dest-cargo {
          font-weight: bold;
          margin-bottom: 12px;
        }
        .instructivo-texto {
          white-space: pre-wrap;
          line-height: 1.4;
        }
      </style>
    </head>
    <body>
      <div class="recuadro">
        <div class="dest-cargo">${destinatario} - ${cargo}</div>
        <div class="instructivo-texto">${instructivo}</div>
      </div>
    </body>
    </html>
  `);
  ventana.document.close();
  ventana.print();
});
