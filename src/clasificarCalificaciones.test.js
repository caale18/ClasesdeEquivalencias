import { clasificarCalificaciones } from './clasificarCalificaciones';

test('calificación excelente', () => {
  expect(clasificarCalificaciones(95)).toBe('Excelente');
});

test('calificación buena', () => {
  expect(clasificarCalificaciones(85)).toBe('Bueno');
});

test('calificación satisfactoria', () => {
  expect(clasificarCalificaciones(75)).toBe('Satisfactorio');
});

test('calificación insuficiente', () => {
  expect(clasificarCalificaciones(65)).toBe('Insuficiente');
});

test('error con nota fuera del rango', () => {
  expect(() => clasificarCalificaciones(-10)).toThrow("La nota debe estar entre 0 y 100.");
  expect(() => clasificarCalificaciones(110)).toThrow("La nota debe estar entre 0 y 100.");
});