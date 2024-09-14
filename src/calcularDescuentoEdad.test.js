import { calcularDescuentoEdad } from './calcularDescuentoEdad';

test('descuento para edad menor de 12 años', () => {
  expect(calcularDescuentoEdad(10)).toBe(50);
});

test('descuento para edad entre 12 y 65 años', () => {
  expect(calcularDescuentoEdad(30)).toBe(10);
});

test('descuento para edad mayor de 65 años', () => {
  expect(calcularDescuentoEdad(70)).toBe(20);
});

test('error con edad negativa', () => {
  expect(() => calcularDescuentoEdad(-5)).toThrow("La edad no puede ser negativa.");
});