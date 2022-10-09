import { Alumno } from '../models/Alumno';

export class Datos{
  static alumnos: Alumno[] = [
    {
      id: 1,
      nombres: 'Antony Oswaldo',
      apellidos: 'Alza Perez',
      correo: 'antony_alza@usmp.pe',
      edad: 24,
      nacionalidad: 'Peruano',
      cursos: 1,
      top10: true,
      estado: true
    },
    {
      id: 2,
      nombres: 'Fernando',
      apellidos: 'Alza Rojas',
      correo: 'antony1@usmp.pe',
      edad: 21,
      nacionalidad: 'Peruano',
      cursos: 1,
      top10: false,
      estado: true
    },
    {
      id: 3,
      nombres: 'Luis',
      apellidos: 'Alza Perez',
      correo: 'antony2@usmp.pe',
      edad: 19,
      nacionalidad: 'Peruano',
      cursos: 1,
      top10: true,
      estado: true
    },
    {
      id: 4,
      nombres: 'Carlos',
      apellidos: 'Alza Perez',
      correo: 'antony3@usmp.pe',
      edad: 23,
      nacionalidad: 'Peruano',
      cursos: 1,
      top10: false,
      estado: true
    },
    {
      id: 5,
      nombres: 'José',
      apellidos: 'Alza Perez',
      correo: 'antony4@usmp.pe',
      edad: 26,
      nacionalidad: 'Peruano',
      cursos: 1,
      top10: true,
      estado: true
    }
  ];
}