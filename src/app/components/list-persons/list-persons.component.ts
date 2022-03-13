import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  listPersons: any;
  constructor(
    private personsService: PersonsService
  ) { }

  ngOnInit(): void {
    this.personsService.listPerson().subscribe(result=>{
      this.listPersons = result;
      console.log(this.listPersons)
    })
  }

}
