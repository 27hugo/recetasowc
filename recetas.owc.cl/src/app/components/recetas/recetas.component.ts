import { Component, OnInit } from '@angular/core';
import { RecetasService } from 'src/app/services/recetas.service';
import { Receta } from 'src/app/models/receta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  public categoria: object;
  public categoria_id: string;
  public recetas: Receta;
  public itemsPerPage = 9;
  public pageSize: number;
  public currentPage = 1;
  public recetasLength = 2;

  constructor(private categoriasService: CategoriasService, private recetasService: RecetasService, private route: ActivatedRoute, private router: Router) { 
    this.route.paramMap.subscribe(params => this.categoria_id = params.get('cat_id'));
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.recetasService.getRecetasByCategoria(this.categoria_id).subscribe(recetas => {
      this.recetas = recetas.body;
      // this.recetasLength =  this.recetas.length;
    });
    this.categoriasService.getCategoriaById(this.categoria_id).subscribe(cat => this.categoria = cat);
  }

  ngOnInit() {
  }
  
  public onPageChange(pageNum: number) {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }
  
  public changePagesize(num: number) {
    this.itemsPerPage = this.pageSize + num;
  }
}
