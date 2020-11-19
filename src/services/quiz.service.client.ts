import {Injectable} from '@angular/core';
@Injectable()
export class QuizzesServiceClient {
    findAllQuizzes = () =>
        fetch('https://stark-brushlands-00779.herokuapp.com/api/quizzes')
            .then(response => response.json())
    findQuizById = (qid) =>
        fetch(`https://stark-brushlands-00779.herokuapp.com/api/quizzes/${qid}`)
            .then(response => response.json())
}
