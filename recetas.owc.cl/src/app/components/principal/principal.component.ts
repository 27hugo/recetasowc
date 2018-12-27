import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public categorias;
  constructor(private categoriasSservice: CategoriasService) {
    this.categoriasSservice.getCategorias().subscribe(categorias => this.categorias = categorias);
  }

  ngOnInit() {
  }

}
