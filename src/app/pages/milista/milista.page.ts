import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';

@Component({
  selector: 'app-milista',
  templateUrl: './milista.page.html',
  styleUrls: ['./milista.page.scss'],
})
export class MilistaPage implements OnInit {

  juegos: Observable<Juego[]>;

  constructor() { }

  ngOnInit() {
  }

}
