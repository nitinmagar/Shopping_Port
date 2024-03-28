import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }


  //post user data node api
 private postuserUrl = 'http://localhost:3000/api/postuser';
 
 postuser(data:any){
  return this.http.post(this.postuserUrl,data);
 
 }

 //get user list node api
 private getuserUrl = 'http://localhost:3000/api/getuser';
 getuser(){
  return this.http.get(this.getuserUrl)
 }


 //delete user by id node api
 deleteUser(userId: string) {
  const deleteuserUrl = `http://localhost:3000/api/user/${userId}`;
  console.log(userId);
  return this.http.delete(deleteuserUrl);
}


//edit user by id node api
updateUser(userId: string, updatedData: any) {
  console.log(userId);
  console.log(updatedData);
  const updateuserUrl = `http://localhost:3000/api/user/${userId}`;
  return this.http.put(updateuserUrl, updatedData);
}


//get user by id
getUserById(userId:string,){
  const getuserByIDUrl=`http://localhost:3000/api/user/${userId}`;
  console.log(userId);
  return this.http.get(getuserByIDUrl);

}


}
