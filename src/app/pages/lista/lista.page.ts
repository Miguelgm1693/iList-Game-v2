import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Juego } from 'src/app/model/juego';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  juegos: Observable<Juego[]>;

  constructor(
    private itemService: ItemService,
    private router: Router

  ) { 
    this.juegos = this.itemService.getJuegos();

  }

  ngOnInit() {
  }

  addJuego() {
    this.router.navigateByUrl('/crear-juego')

  }

  anadirMiLista (juego:Juego) {
    this.itemService.anadirMiLista(juego);
    
  }

  

}
