import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:Contact;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contacts){
    const cont = {
      Name : contacts.value.Name,
      Email : contacts.value.Email,
      Phone : contacts.value.Phone,
      Message : contacts.value.Message
    };
    console.log(cont);
  }

}
