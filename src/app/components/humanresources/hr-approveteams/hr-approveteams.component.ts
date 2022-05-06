import { Component, OnInit } from '@angular/core';
import { DbUserTeam360, User } from 'src/app/models/db-user';
import { DatabaseService } from 'src/app/services/dataManagement/database.service';

@Component({
  selector: 'app-hr-approveteams',
  templateUrl: './hr-approveteams.component.html',
  styleUrls: ['./hr-approveteams.component.css']
})
export class HrApproveteamsComponent implements OnInit {

  userList?: Array<User>
  userTeam?: Array<DbUserTeam360>
  currentUser: string = ""

  constructor(
    private db: DatabaseService
  ) { }

  ngOnInit(): void {
    this.db.getUsers().subscribe(resp =>{
      this.userList = resp
    })

    this.getTeam("A01232528@tec.mx")
  }


  getTeam(input: string){
    this.db.getEmployeeTeam(input).subscribe(resp => {
      this.userTeam = resp
    })
  }

  debugging(input: string){
    console.log("Hola" + input)
  }

}
