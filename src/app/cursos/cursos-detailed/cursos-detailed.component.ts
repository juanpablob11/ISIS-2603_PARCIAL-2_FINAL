import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../cursos-list/curso';

@Component({
  selector: 'app-cursos-detailed',
  templateUrl: './cursos-detailed.component.html',
  styleUrls: ['./cursos-detailed.component.css']
})
export class CursosDetailedComponent implements OnInit {
  @Input() cursoDetail!: Curso;
  constructor() { }

  ngOnInit() {
  }

}
