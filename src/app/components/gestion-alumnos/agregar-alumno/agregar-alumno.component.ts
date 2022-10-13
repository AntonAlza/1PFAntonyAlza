import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genero } from 'src/app/models/Genero';
import { ToastrService } from 'ngx-toastr';
import { Datos } from 'src/app/data/alumnos';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/servicios/alumnos.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formularioAlumno: FormGroup;
  titulo!: string;
  nuevoAlumno!: Alumno;
  idModificacion!: number;
  generos: Genero[] = [
    {
      id: 1,
      descripcion:'Masculino'
    },
    {
      id: 2,
      descripcion:'Femenino'
    }
  ];

  @Output() dataSalida: EventEmitter<Alumno> = new EventEmitter<Alumno>();
  
  constructor(private fb: FormBuilder,
                public dialogRef: MatDialogRef<AgregarAlumnoComponent>,
                @Inject(MAT_DIALOG_DATA) public data: string,
                private toastr: ToastrService,
                private servicioAlumnos: AlumnosService) {
    if(this.data == 'Ingresar Alumno'){
      this.formularioAlumno = fb.group({
        nombres: new FormControl('', [Validators.required]),
        apellidos: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        contrasena: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
        contrasena2: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
        genero: new FormControl('', [Validators.required]),
        admin: new FormControl(false, []),
      });
    }else{
      let alumnoEditar = this.servicioAlumnos.obtenerAlumno(this.servicioAlumnos.editarId);
      this.idModificacion = alumnoEditar.id;
      this.formularioAlumno = fb.group({
        nombres: new FormControl(alumnoEditar.nombres, [Validators.required]),
        apellidos: new FormControl(alumnoEditar.apellidos, [Validators.required]),
        email: new FormControl(alumnoEditar.correo, [Validators.required, Validators.email]),
        contrasena: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
        contrasena2: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
        genero: new FormControl('', [Validators.required]),
        admin: new FormControl(false, []),
      });
    }
    
    this.titulo = data;
  }

  ngOnInit(): void {
  }

  // this.formularioAlumno.get('nombres')?.touched

  // validarNombre(){
  //   if(this.formularioAlumno.get('nombres')?.errors?.['required']){
  //     this.toastr.error('Es necesario ingresar nombres', 'Validaciones');
  //   }
  // }
  agregarAlumno(){
    if(this.data == 'Ingresar Alumno'){
      let index = Math.max.apply(Math, this.servicioAlumnos.alumnos.map(function(element) { return element.id; }))
      index = index + 1;

      this.nuevoAlumno = {
        id:index,
        nombres: this.formularioAlumno.get('nombres')?.value,
        apellidos: this.formularioAlumno.get('apellidos')?.value,
        correo: this.formularioAlumno.get('email')?.value,
        edad: 18,
        nacionalidad: 'Peruano',
        cursos: 2,
        top10: true,
        estado: true
      }
      this.servicioAlumnos.agregarAlumno(this.nuevoAlumno);

    }else{
      this.nuevoAlumno = {
        id:this.idModificacion,
        nombres: this.formularioAlumno.get('nombres')?.value,
        apellidos: this.formularioAlumno.get('apellidos')?.value,
        correo: this.formularioAlumno.get('email')?.value,
        edad: 18,
        nacionalidad: 'Peruano',
        cursos: 2,
        top10: true,
        estado: true
      }
      this.servicioAlumnos.editarAlumno(this.nuevoAlumno);

    }
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
