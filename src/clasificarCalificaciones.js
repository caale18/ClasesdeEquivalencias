export const clasificarCalificaciones = (nota) => {
    if (nota < 0 || nota > 100) {
      throw new Error("La nota debe estar entre 0 y 100.");
    }
    if (nota >= 90) return 'Excelente';
    if (nota >= 80) return 'Bueno';
    if (nota >= 70) return 'Satisfactorio';
    return 'Insuficiente';
  };