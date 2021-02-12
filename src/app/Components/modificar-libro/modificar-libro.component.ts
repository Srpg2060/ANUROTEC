import { Component, OnInit } from '@angular/core';

import {ObjectBook} from '../../Model/dominio-libro/objetoLibro';
import {ObjectResponse} from 'src/app/Model/objetoRespuesta';

import {ServicioLibroService} from 'src/app/Servicio/servicioLibro.service';


@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.scss']
})
export class ModificarLibroComponent implements OnInit {

  listarLibros: Array<ObjectBook> = [] as Array<ObjectBook>;
  res: ObjectResponse = {} as ObjectResponse;

  constructor(private LibroServicio: ServicioLibroService) { }

  ngOnInit() {
    this.listarLibro();
  }

  listarLibro() {
    this.LibroServicio.listarLibros().subscribe((response) => {
      this.listarLibros = JSON.parse(JSON.stringify(response.value));
      console.log(this.listarLibro);
    });
  }

}
