import { Usuario } from './usuario.model';
import { Ingrediente } from './ingrediente.model';

export class Receta {
  public rec_id: string;
  public rec_nombre: string;
  public rec_imageurl: string;
  public rec_categoria: string;
  public rec_descripcion: string;
  public rec_porciones: string;
  public rec_duracion: string;
  public rec_preparacion: string;
  public rec_fecha_creacion: string;
  public rec_ultima_modif: string;
  public rec_user: Usuario;
}
