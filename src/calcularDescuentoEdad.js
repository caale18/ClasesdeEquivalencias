export const calcularDescuentoEdad = (edad) => {
    if (edad < 0) {
      throw new Error("La edad no puede ser negativa.");
    }
    if (edad < 12) return 50;
    if (edad <= 65) return 10;
    return 20;
  };