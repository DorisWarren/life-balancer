import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userObject;

  constructor(private firestore: AngularFirestore) { }

  createNewUser(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("users")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }

  getUserByName() {
    return this.firestore.collection("users").snapshotChanges();
  }


}
