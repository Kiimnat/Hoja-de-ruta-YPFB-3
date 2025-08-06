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

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const destinatarioRaw = document.getElementById("destinatarioSelect").value;
  const [destinatario] = destinatarioRaw.split("|");
  const cargo = document.getElementById("cargoDestinatario").value;
  const instructivo = document.getElementById("instructivo").value;

  // Contenido para el PDF
  const contenido = `${destinatario} - ${cargo}\n\n${instructivo}`;

  // Configuración del PDF
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  // Dibujar un recuadro donde estará el contenido
  doc.setDrawColor(0);
  doc.setLineWidth(0.5);
  doc.rect(10, 20, 190, 80); // Ajusta posición y tamaño si quieres

  // Insertar texto dentro del recuadro
  doc.text(contenido, 15, 35, { maxWidth: 180 });

  // Descargar PDF
  doc.save(`Hoja_Correspondencia_${destinatario.replace(/\s+/g, "_")}.pdf`);
});
