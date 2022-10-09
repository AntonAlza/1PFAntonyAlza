import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Genero } from 'src/app/models/Genero';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formularioAlumno: FormGroup;
  titulo!: string;
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
  constructor(private fb: FormBuilder,
                public dialogRef: MatDialogRef<AgregarAlumnoComponent>,
                @Inject(MAT_DIALOG_DATA) public data: string) {
    this.formularioAlumno = fb.group({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
      contrasena2: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
      genero: new FormControl('', [Validators.required]),
      admin: new FormControl(false, []),
    });
    this.titulo = data;
  }

  ngOnInit(): void {
  }

  agregarAlumno(){

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
