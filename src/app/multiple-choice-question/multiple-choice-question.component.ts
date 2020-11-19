import { Component, Input, OnInit } from '@angular/core';
// @ts-ignore
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' };
  grading = false;
  myRadio = '';
  faCheck = faCheck; faTimes = faTimes;
  grade = () => { console.log(this.myRadio); this.grading = true; };

  ngOnInit(): void {
  }

}
