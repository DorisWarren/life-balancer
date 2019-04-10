import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userObject;
  userObjectId;

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

  updateWellnessData(value) {
    return this.firestore
              .collection("users")
              .doc(this.userObjectId)
              .set({assessment : {wellness: value} }, {merge: true});
  }

  updateFinanceData(value) {
    return this.firestore
              .collection("users")
              .doc(this.userObjectId)
              .set({finance : value }, {merge: true});
  }

  updateSocialData(value) {
    return this.firestore
              .collection("users")
              .doc(this.userObjectId)
              .set({social : value }, {merge: true});
  }

  updateWorkData(value) {
    return this.firestore
              .collection("users")
              .doc(this.userObjectId)
              .set({work : value }, {merge: true});
  }


}
