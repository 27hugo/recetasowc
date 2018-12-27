import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { Receta } from 'src/app/models/receta.model';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public categorias: object;
  public lastRecetas: Receta;

  constructor(private categoriasService: CategoriasService, private recetasService: RecetasService) {
    this.categoriasService.getCategorias().subscribe(categorias => this.categorias = categorias);
    this.recetasService.getRecent(5).subscribe(recetas => this.lastRecetas = recetas.body);
  }

  ngOnInit() {}

}
