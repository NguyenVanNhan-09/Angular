import { Component, Input } from '@angular/core';
import { TStudent } from '../../../interface/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  // @Input() students: TStudent[] = [];
  students: TStudent[] = [
    {
      name: 'SV 1',
      age: 18,
      address: 'HN',
      className: 'WD18337',
    },
    {
      name: 'SV 2',
      age: 19,
      address: 'TN',
      className: 'WD18337',
    },
    {
      name: 'SV 3',
      age: 18,
      address: 'HY',
      className: 'WD18337',
    },
  ];
}
