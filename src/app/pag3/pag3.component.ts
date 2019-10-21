import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {interval,timer} from 'rxjs'

@Component({
  selector: 'app-pag3',
  templateUrl: './pag3.component.html',
  styleUrls: ['./pag3.component.css']
})
export class Pag3Component implements OnInit {
pag :number = 3;

mensaje :boolean = false;
botones :boolean = false;

titulo1 :string = 'Para datos, textos,gráficos, sonido,voz e imágenes;también ofreceherramientas parala interacción(video conferencia,chat, foro,cuestionarios, etc.)';
titulo2 :string ='Porque no esnecesario desplazarse hasta el centro educativo, se puede estudiar desde cualquier parte del mundo a cualquier hora, solamente se requiere un computador y conexión a internet.';
titulo3 :string ='Con la educación presencial en cumplimiento del programa académico.' ;
titulo4 :string = 'En el desarrollo de nuevos escenarios de aprendizaje. Permite al usuario desarrollar un proceso de aprendizaje a su propio ritmo y según sus propias exigencias.';
titulo5 :string ='En el aprendizaje, evita tener que estar todo el tiempo encerrado en un salón de clase. Nota para el'

tit1 :boolean = false;
tit2 :boolean = false;
tit3 :boolean = false;
tit4 :boolean = false;
tit5 :boolean = false;

constructor(private router:Router) { }

  ngOnInit() {
    this.mostrarobjetos();
  }

  public pasarpag (){

    this.router.navigate(['/pag4']);
  }
  public regresarpag (){
  
    this.router.navigate(['/pag2']);
  }

  public mostrart1(){

    if(this.tit1==true){
this.tit1=false;
    }else{
       this.tit1 = true;
    }
   
  }
  public mostrart2(){

    if(this.tit2==true){
this.tit2=false;
    }else{
       this.tit2 = true;
    }
   
  }

  public mostrart3(){

    if(this.tit3==true){
this.tit3=false;
    }else{
       this.tit3= true;
    }
   
  }

  public mostrart4(){

    if(this.tit4==true){
this.tit4=false;
    }else{
       this.tit4 = true;
    }


   
  }

  public mostrart5(){

    if(this.tit5==true){
this.tit5=false;
    }else{
       this.tit5 = true;
    }
   
  }
  public mostrarobjetos (){
    
    const cont = timer(1000);
    const cont2 = timer(3000);
  
    
    cont.subscribe( (n)=>{
  
  this.mensaje = true;    
  
    });
    cont2.subscribe( (n)=>{
  
      this.botones = true;    
      
        });
       
  
  
  
  }
 
  

}
