import { Component, Input,OnInit } from '@angular/core';
import {Empleado} from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

@Input() empleadoDeLista:Empleado;
@Input() index:number; 
  constructor() { }

  ngOnInit(): void {
  }
/*
  empleadoAgregado(empleado:Empleado){
    this.empleados.push(empleado);
  }*/
  arrayCaracteristicas=[''];
  agregarCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
