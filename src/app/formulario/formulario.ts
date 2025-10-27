import { Component } from '@angular/core';
import { Productoservice } from '../core/services/productoservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  mensaje: string = '';
  nuevoProducto = { nombre: '', precio: 0 };

  constructor(private productoService: Productoservice) {}

  agregarProducto(form: any): void {
  this.productoService.crearProducto(this.nuevoProducto).subscribe({
    next: (data) => {
      this.mensaje = '✅ Producto agregado correctamente';

      // vaciar campos
      form.resetForm();

      setTimeout(() => this.mensaje = '', 3000);
    }
  });
}
}
