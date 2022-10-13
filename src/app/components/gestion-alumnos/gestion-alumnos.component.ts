import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Datos } from 'src/app/data/alumnos';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';

@Component({
  selector: 'app-gestion-alumnos',
  templateUrl: './gestion-alumnos.component.html',
  styleUrls: ['./gestion-alumnos.component.css']
})
export class GestionAlumnosComponent implements OnInit {

  
  listaAlumnos: Alumno[] = this.servicioAlumnos.alumnos;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  columnas: string[] = ['nombres', 'correo', 'edad','nacionalidad','top10','acciones'];
  datalistaAlumnos = new MatTableDataSource(this.listaAlumnos);

  constructor(public dialog: MatDialog,
    private servicioAlumnos: AlumnosService) {
      
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.datalistaAlumnos.paginator = this.paginator;
    this.datalistaAlumnos.sort = this.sort;
  }

  aplicarFiltroGenerico(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datalistaAlumnos.filter = filterValue.trim().toLowerCase();
  }

  editarAlumno(id_Alumno: number){
    
    this.servicioAlumnos.editarId = this.servicioAlumnos.alumnos[id_Alumno].id;
    const dialogRef = this.dialog.open(AgregarAlumnoComponent,{
      width: '50%',
      data: 'Modificar Alumno'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateDataSource();
    });
  }

  agregarAlumno(){

    const dialogRef = this.dialog.open(AgregarAlumnoComponent,{
      width: '50%',
      data: 'Ingresar Alumno'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateDataSource();
    });
  }

  eliminarAlumno(id_Alumno: number){
    this.servicioAlumnos.eliminarAlumno(id_Alumno);
    this.updateDataSource();
  }

  updateDataSource() {
    this.listaAlumnos = this.servicioAlumnos.alumnos;
    // this.datalistaAlumnos.data = this.listaAlumnos;
    this.datalistaAlumnos = new MatTableDataSource(this.listaAlumnos);
    
  }
}
