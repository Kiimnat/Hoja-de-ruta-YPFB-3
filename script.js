document.getElementById('correspondenciaForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

 const destinatarioRaw = this.destinatarioSelect.value;
  if (!destinatarioRaw) {
    alert("Por favor selecciona un destinatario.");
    return;
  }
  const [destinatarioNombre] = destinatarioRaw.split("|");
  const cargoDestinatario = this.cargoDestinatario.value;
  const instructivo = this.instructivo.value;
  
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
  doc.text(instructivoTexto, 12, 118);

  
  const pdfUrl = doc.output('bloburl');
  const printWindow = window.open(pdfUrl);
  printWindow.focus();
  printWindow.onload = function() {
    printWindow.print();
  };

  this.reset();
});
