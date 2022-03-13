import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent implements OnInit {
  listPersons: any = [];
  formPerson = new FormGroup({
    fullname: new FormControl('', Validators.required),
    birth: new FormControl('', Validators.required),
    parentesco: new FormControl('', Validators.required)
  })

  constructor(
    private personService: PersonsService
  ) {
  }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.formPerson)
    this.personService.listPerson().subscribe(result=>{
      this.listPersons = result;
      if(this.listPersons.find((item: any) => item.fullname === this.formPerson.value.fullname)){
        alert(`La persona ${this.formPerson.value.fullname} ya existe`)
      }
      else{
        this.personService.insertPerson(this.formPerson.value)
        .subscribe(result => {
          alert(`La persona ${this.formPerson.value.fullname} fue creada con exito`)
      })
      }
    })

  }

}
