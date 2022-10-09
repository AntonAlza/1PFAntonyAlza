import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    imports:[MatTableModule,
            MatFormFieldModule,
            MatInputModule,
            MatPaginatorModule,
            MatSortModule,
            MatButtonModule,
            MatCardModule,
            MatIconModule,
            MatDialogModule,
            NgSelectModule,
            FormsModule,
            ReactiveFormsModule,
            MatToolbarModule],
    exports:[MatTableModule,
            MatFormFieldModule,
            MatInputModule,
            MatPaginatorModule,
            MatSortModule,
            MatButtonModule,
            MatCardModule,
            MatIconModule,
            MatDialogModule,
            NgSelectModule,
            FormsModule,
            ReactiveFormsModule,
            MatToolbarModule]
})

export class MaterialModule{}