import { Component, OnInit } from '@angular/core';

import {ObjectBook} from '../../Model/dominio-libro/objetoLibro';
import {ServicioLibroService} from 'src/app/Servicio/servicioLibro.service';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {


  libro: ObjectBook = {} as ObjectBook;
  FormularioLibro = this.fb.group({
    nombre: [null, [ Validators.required,]],
    autor: [null, [ Validators.required,]],
    fecha: [null, [ Validators.required,]],
    valor: [null, [ Validators.required,]],
    estado: [false, [ Validators.required,]],
  });

  constructor(private bookService: ServicioLibroService, private fb: FormBuilder) { }

  get nombre(): AbstractControl {
    return this.FormularioLibro.get('nombre');
  }

  get autor(): AbstractControl {
    return this.FormularioLibro.get('autor');
  }

  get fecha(): AbstractControl {
    return this.FormularioLibro.get('fecha');
  }

  get valor(): AbstractControl {
    return this.FormularioLibro.get('valor');
  }

  get estado(): AbstractControl {
    return this.FormularioLibro.get('estado');
  }

  ngOnInit(): void {
  }
  crearLibros() {
    if(this.FormularioLibro.valid){
      const book: ObjectBook = {
        author: this.autor.value,
        available: this.estado.value,
        name: this.nombre.value,
        price: this.valor.value,
        publicationDate: this.fecha.value,
      };
      this.bookService.crearLibros(book).subscribe((response) => {
        alert ("se guardo correctamente!");
      });

    }
  }
}