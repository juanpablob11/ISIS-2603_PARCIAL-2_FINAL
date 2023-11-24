import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  displayCursosList: boolean = false;
  constructor() { }

  showCursosList(): void {
    this.displayCursosList = true;
  }

  hideCursosList(): void {
    this.displayCursosList = false;
  }

  ngOnInit() {
  }

}
