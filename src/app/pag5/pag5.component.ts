import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag5',
  templateUrl: './pag5.component.html',
  styleUrls: ['./pag5.component.css']
})
export class Pag5Component implements OnInit {

  pag :number = 5;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  public regresarpag (){
  
    this.router.navigate(['/pag4']);
  }

}
