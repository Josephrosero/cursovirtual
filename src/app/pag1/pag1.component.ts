import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {interval,timer} from 'rxjs'

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.component.html',
  styleUrls: ['./pag1.component.css']
})
export class Pag1Component implements OnInit {

pag :number = 1;
tutor :boolean = false;
formulario :boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    this.mostrarobjetos();
  }
  public pasarpag (){

    this.router.navigate(['/pag2']);
  }

  public mostrarobjetos (){
    this.tutor = true;
    const cont = timer(1000);
    cont.subscribe( (n)=>{

       

 this.formulario = true;    
 console.log('sisis')
    });


  }

}
