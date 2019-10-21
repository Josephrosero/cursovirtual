import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import {interval,timer} from 'rxjs'



@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.component.html',
  styleUrls: ['./pag2.component.css']
})
export class Pag2Component implements OnInit {

pag :number=2;
tutor :boolean = false;
 mensaje :boolean = false;
 video :boolean = false;
 descargar :boolean = false;

  constructor(  private _sanitizer: DomSanitizer,private router:Router
    ) { }

  ngOnInit() {
    this.mostrarobjetos();
  }

  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

public pasarpag (){

  this.router.navigate(['/pag3']);
}
public regresarpag (){

  this.router.navigate(['/pag1']);
}
public mostrarobjetos (){
  this.tutor = true;
  const cont = timer(1000);
  const cont2 = timer(2000);

  const cont3= timer(4000);
  cont.subscribe( (n)=>{

this.mensaje = true;    

  });
  cont2.subscribe( (n)=>{

    this.video = true;    
    
      });
      cont3.subscribe( (n)=>{

        this.descargar= true;    
        
          });
      



}



}
