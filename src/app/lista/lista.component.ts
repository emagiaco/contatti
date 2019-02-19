import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listaNomi = [
    { name: 'Alex' },
    { name: 'Chiara' },
    { name: 'Mario' },
    { name: 'Gianna' },
    { name: 'Flavio' },
  ]
}