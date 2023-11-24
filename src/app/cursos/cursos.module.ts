import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosDetailedComponent } from './cursos-detailed/cursos-detailed.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  declarations: [CursosComponent, CursosListComponent, CursosDetailedComponent]
})
export class CursosModule { }
