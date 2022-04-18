import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-search',
  template: `
    <form class="d-flex">
      <input 
      #inputSearch 
      autofocus 
      class="form-control me-2" 
      type="search" 
      placeholder="Buscar..." 
      aria-label="Buscar..."
      (keyup)="onSearch( inputSearch.value )"
      >
      <button class="btn btn-outline-danger" type="submit">Buscar</button>
    </form>
  `,
  styles: [`input {width: 100%;}`]
})
export class FormSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSearch( value: string ){
    // TODO
  }

}


