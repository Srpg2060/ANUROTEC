import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrabajoComponent} from 'src/app/Components/Trabajo/Trabajo.component';
import {NavbarComponent} from 'src/app/Components/navbar/navbar.component';
import {CrearLibroComponent} from 'src/app/Components/crear-libro/crear-libro.component';
import {ModificarLibroComponent} from 'src/app/Components/modificar-libro/modificar-libro.component';
import {SidebarComponent} from 'src/app/components/sidebar/sidebar.component';

const routes: Routes = [

  { path: '', redirectTo: 'trabajo/crearLibro', pathMatch: 'full' },
  {
    path: 'trabajo',
    component: TrabajoComponent,
    children: [
        { path: 'crearLibro', component: CrearLibroComponent },
        { path: 'modificarLibro', component: ModificarLibroComponent }
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
