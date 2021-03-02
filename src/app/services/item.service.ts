import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Juego } from '../model/juego';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  userId: string;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    
  ) { 
    this.authService.getCurrentUser().subscribe(
      data => this.userId = data.uid
    );


  }

  public addJuego(juego: Juego) : Promise<DocumentReference> {
    return this.db.collection<Juego>('juegos').add(juego);
  }

  public getJuegos(): Observable<Juego[]> {
    return this.db.collection<Juego>('juegos').snapshotChanges()
      .pipe(
        map(
          snaps => snaps.map(
            snap => <Juego> {
              juegoId: snap.payload.doc.id,
              ...snap.payload.doc.data() as Juego
            } 
          )
        )
      );

  }

  anadirMiLista(juego: Juego): Promise<DocumentReference> {
    return this.db.collection<Juego>('users/' + this.userId + '/juegos').add(juego);
  }


}
