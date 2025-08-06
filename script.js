document.getElementById("destinatarioSelect").addEventListener("change", function () {
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

  const [destinatarioNombre] = destinatarioRaw.split("|");
  const cargoDestinatario = document.getElementById("cargoDestinatario").value;
  const instructivo = document.getElementById("instructivo").value;

  // Usa jsPDF para crear el PDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Recuadro con título
  doc.setFont("helvetica", "bold");
  doc.rect(10, 70, 190, 50); // Ampliado a 50 para incluir instructivo
  doc.text("PRIMER DESTINATARIO:", 12, 75);

  // Destinatario y cargo
  doc.setFont("helvetica", "normal");
  doc.text(`${destinatarioNombre} - ${cargoDestinatario}`, 65, 75);

  // Título instructivo
  doc.setFont("helvetica", "bold");
  doc.text("INSTRUCTIVO:", 12, 83);

  // Contenido instructivo
  doc.setFont("helvetica", "normal");
  const instructivoTexto = doc.splitTextToSize(instructivo, 185);
  doc.text(instructivoTexto, 12, 88);

  // Abre la vista para imprimir (opcional)
  window.open(doc.output('bloburl'), '_blank');

  // También podrías usar esto para forzar descarga si prefieres:
  // doc.save("Hoja_Correspondencia.pdf");
});

