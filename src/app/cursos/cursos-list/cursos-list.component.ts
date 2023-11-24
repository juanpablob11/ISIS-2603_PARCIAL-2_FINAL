import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

  selected: Boolean = false;
  selectedCurso!: Curso;
  cursos: Array<Curso> = [];
  constructor(private CursosService : CursosService) { }

  onSelected(curso: Curso): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  getCursos(): void {
    this.CursosService.getCursos().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  ngOnInit() {
    this.getCursos();
  }
}
