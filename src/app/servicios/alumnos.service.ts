import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }
  editarId!: number;
  alumnos: Alumno[] = [
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
  ]

  agregarAlumno(nuevoAlumno: Alumno){
    this.alumnos.push(nuevoAlumno);
  }

  eliminarAlumno(id: number){
    this.alumnos.splice(id, 1);
  }

  obtenerAlumno(id: number): Alumno{
     return this.alumnos.filter(lista => lista.id == id)[0];
  }

  editarAlumno(nuevoAlumno: Alumno){
    let index = this.alumnos.findIndex((element) => element.id == nuevoAlumno.id)

    this.alumnos[index] = {
      id:nuevoAlumno.id,
      nombres: nuevoAlumno.nombres,
      apellidos: nuevoAlumno.apellidos,
      correo: nuevoAlumno.correo,
      edad: nuevoAlumno.edad,
      nacionalidad: nuevoAlumno.nacionalidad,
      cursos: nuevoAlumno.cursos,
      top10: nuevoAlumno.top10,
      estado: nuevoAlumno.estado,
    };
    
 }

}
