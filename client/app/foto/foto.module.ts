import { FotoService } from './foto.service';
import { FiltroPorTitulo } from './foto.pipes';
import { NgModule }      from '@angular/core';
import { FotoComponent }   from './foto-component/foto.component';

@NgModule({
  declarations: [ FotoComponent, FiltroPorTitulo ],
  exports: [FotoComponent, FiltroPorTitulo],
  providers: [ FotoService ]
})
export class FotoModule { }