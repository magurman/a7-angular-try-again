import {Injectable} from '@angular/core';
@Injectable()
export class QuestionsServiceClient {
    findQuestionsForQuiz = (qid) =>
        fetch(`https://stark-brushlands-00779.herokuapp.com/api/quizzes/${qid}/questions`)
            .then(response => response.json())
}
