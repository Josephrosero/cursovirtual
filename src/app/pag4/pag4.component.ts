import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag4',
  templateUrl: './pag4.component.html',
  styleUrls: ['./pag4.component.css']
})
export class Pag4Component implements OnInit {
pag :number = 4;
select:string;


ver:string;
//pregunta1 y opciones.
pregunta1 :string='La cultura vitual es...';
p1o1 :string='a.  ...La cultura que está emergiendo del uso de las TIC’s para la comunicación, el entretenimiento y el mercadeo electrónico';
p1o2 :string='b.  ...La cultura de los videojuegos y el chat';
p1o3 :string = 'c.  ...La cultura de los ingenieros de Sistemas';

respuesta1:boolean=false;

seleccion:string;
//pregunta2 y opciones.
pregunta2 :string='La educación virtual permite...';
p2o1 :string='a.  ...Estudiar menos tiempo.';
p2o2 :string='b.  ...Acceso desde cualquier lugar con conexión a Internet.';
p2o3 :string = 'c.  ...La individualidad necesaria para el aprendizaje autónomo y la interacción necesaria para el aprendizaje colaborativo';
respuesta2:boolean=false;
//pregunta3 y opciones.
pregunta3 :string='Las TIC’s';
p3o1 :string='a.  ...Posibilitan ahorro de tiempo y dinero';
p3o2 :string='b.  ...Posibilitan acceso desde cualquier lugar con conexión a Internet.';
p3o3 :string = 'c.  ...Posibilitaninteractuar en nuevas experiencias comerciales, sociales, culturales yacadémicas.';
respuesta3:boolean=false;



  constructor(private router:Router) { }

  ngOnInit() {
  }
  public pasarpag (){

    this.router.navigate(['/pag5']);
  }
  public regresarpag (){
  
    this.router.navigate(['/pag3']);
  }

  public prueba(){
    
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.seleccion = this.ver;
}
public validar1 (preg:string,resp:string){
if(preg==this.pregunta1 && resp==this.p1o1){
this.respuesta1= true;
}else{
this.respuesta1= false;
}
}
public validar2(preg:string,resp:string){
  if(preg==this.pregunta2 && resp==this.p2o3){
  this.respuesta2= true;
  }else{
  this.respuesta2= false;
  }
  }
  public validar3(preg:string,resp:string){
    if(preg==this.pregunta3 && resp==this.p3o3){
    this.respuesta3= true;
    }else{
    this.respuesta3= false;
    }
    }
    public continuar(){
      this.router.navigate(['/pag5']);
    }

}
