import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-view-user-list',
  templateUrl: './view-user-list.component.html',
  styleUrls: ['./view-user-list.component.css']
})
export class ViewUserListComponent {
  apiResponse: any;
  
  
 
  
  constructor(private http: HttpClient, private apiserviceService:ApiserviceService, private router:Router) {}

  ngOnInit() {    
    //get user api
    this.apiserviceService.getuser().subscribe((response: any) => {
      this.apiResponse = response;  
    });
  }



  deleteUser(userId: string): void {
    this.apiserviceService.deleteUser(userId).subscribe(
      () => {      
        console.log('Item deleted successfully');
        alert("Item deleted successfully")
        //this.apiserviceService.getuser();
        this.apiserviceService.getuser().subscribe((response: any) => {
          this.apiResponse = response;  
        });
        
      },
      (error:any) => {
        console.error('Error deleting Item:', error);
      }
    );
  }


  updateUser(userId: string): void {
    this.router.navigate(['/addUser'], { queryParams: { userId: userId } });
  }
  getUsers(userId: string): void {
    this.apiserviceService.getUserById(userId).subscribe((response: any) => {
      this.apiResponse = response; 
       
    });
  }

  





}
