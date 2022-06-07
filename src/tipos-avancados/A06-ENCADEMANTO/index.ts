type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'o titulo',
  texto: 'text',
};

console.log(documento.data?.toDateString() ?? 'não existe valor');
