import { Component, Input, OnInit } from '@angular/core';
// @ts-ignore
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  grading = false;
  myRadio = '';
  faCheck = faCheck; faTimes = faTimes;
  grade = () => { console.log(this.myRadio); this.grading = true; };

  constructor() { }

  ngOnInit(): void {
  }

}
