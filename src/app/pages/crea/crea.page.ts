import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from 'src/app/model/juego';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-crea',
  templateUrl: './crea.page.html',
  styleUrls: ['./crea.page.scss'],
})

export class CreaPage implements OnInit {

  juego: Juego = {titulo: '', categoria:'', fin: '', plataforma:'', nota: '', imgUrl:''}

  constructor(
    private itemService: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  guardarJuego(){
    this.itemService.addJuego(this.juego);
    this.router.navigateByUrl('/lista');
  }

}
