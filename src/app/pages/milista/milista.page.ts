import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Juego } from 'src/app/model/juego';
import { AuthService } from 'src/app/services/auth.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-milista',
  templateUrl: './milista.page.html',
  styleUrls: ['./milista.page.scss'],
})
export class MilistaPage implements OnInit {

  juegos: Juego[];

  constructor(
    private itemService: ItemService,
    private authService: AuthService,
    ) { }
    
    ngOnInit() {

      this.authService.getCurrentUser().pipe(take(1))
      .subscribe((data: any) => {
        const userId = data.uid;
        this.itemService.getAnadirMiLista(userId).subscribe((resp: Juego[]) => {
          this.juegos = resp;
        });
     });

  }


  onRemoveGame(idJuego: string) {
    this.itemService.removeGameFromMiLista(idJuego);
  }

}
