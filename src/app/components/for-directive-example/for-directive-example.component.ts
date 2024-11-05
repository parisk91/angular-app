import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users:Person[] = [
    {
      "givenName": "Maria",
      "surName": "White",
      "email": "maria_may_white34@outlook.com",
      "age": 71,
      "address": "Huntsville"
    },
    {
      "givenName": "James",
      "surName": "Sanders",
      "email": "j.sanders@ymail.com",
      "age": 59,
      "address": "Mortons Gap"
    },
    {
      "givenName": "Richard",
      "surName": "Garcia",
      "email": "rgarcia@hotmail.com",
      "age": 57,
      "address": "Queen City"
    },
    {
      "givenName": "Mark",
      "surName": "Griffin",
      "email": "mark.griffin@gmail.com",
      "age": 46,
      "address": "Rochester"
    },
    {
      "givenName": "Brandon",
      "surName": "Johnson",
      "email": "b_j_johnson63@outlook.com",
      "age": 26,
      "address": "Crane"
    },
    {
      "givenName": "Ava",
      "surName": "Jackson",
      "email": "a.jackson@outlook.com",
      "age": 27,
      "address": "Bonfield"
    },
    {
      "givenName": "Kimberly",
      "surName": "Long",
      "email": "klong52@gmail.com",
      "age": 62,
      "address": "Seminole"
    },
    {
      "givenName": "Timothy",
      "surName": "Washington",
      "email": "t.washington11@aol.com",
      "age": 53,
      "address": "Fort Lauderdale"
    },
    {
      "givenName": "Jack",
      "surName": "Bailey",
      "email": "j.c.bailey@yahoo.com",
      "age": 65,
      "address": "Hot Sulphur Springs"
    },
    {
      "givenName": "Henry",
      "surName": "Cooper",
      "email": "henry@outlook.com",
      "age": 32,
      "address": "Burlington"
    }
  ]
}
