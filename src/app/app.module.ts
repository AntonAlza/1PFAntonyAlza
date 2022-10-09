import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestionAlumnosComponent } from './components/gestion-alumnos/gestion-alumnos.component';
import { GestionCursosComponent } from './components/gestion-cursos/gestion-cursos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './Material.module';
import { AgregarAlumnoComponent } from './components/gestion-alumnos/agregar-alumno/agregar-alumno.component';
import { BooleanColorDirective } from './directivas/boolean-color.directive';
import { BooleanaStringPipe } from './pipes/booleana-string.pipe';
import { TamanoTitulosDirective } from './directivas/tamano-titulos.directive';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    GestionAlumnosComponent,
    GestionCursosComponent,
    MenuComponent,
    AgregarAlumnoComponent,
    BooleanColorDirective,
    BooleanaStringPipe,
    TamanoTitulosDirective,
    NombreApellidoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
