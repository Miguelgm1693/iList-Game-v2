import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login (
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public getCurrentUser():Observable<firebase.default.User> {
    return this.afAuth.authState;
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  public createUser(
    email: string,
    password: string
  ):Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email,password);
  }

  public resetPassword(
    email:string
    ):Promise<void> {
      return this.afAuth.sendPasswordResetEmail(email);
    }

}
