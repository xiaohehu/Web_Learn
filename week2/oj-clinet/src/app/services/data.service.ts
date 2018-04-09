import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
// import { PROBLEMS } from '../mock-problems';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

	// problems: Problem[] = PROBLEMS;
  // private field start with _
  // BehavivorSubject: when subscribe, we can get the value that emitted last time.
  // Subject: when subscribe, we can only get the value that emitted after 
  // subscribe and we cannot get value that emitted before we subscribe
  	private _problemSource = new BehaviorSubject(<Problem[]> ([]));

 	constructor(private httpClient : HttpClient) { }

 	// return a list of problems
 	getProblems(): Observable<Problem[]> {
 		// return this.problems;
 		this.httpClient.get('api/v1/problems')
 			.toPromise()
 			.then((res : any) =>{
 				this._problemSource.next(res);
 			})
 			.catch(this.handleError)
 		return this._problemSource.asObservable();
 	}
 	// input: id,
 	// return a problem by id
 	getProblem(id: number): Promise<Problem> {
 		// for evbery problem if problem.id === id, return this problem
 		// ==: check value
 		// ===: check value and type
 		// 1 == "1" => true
 		// 1 === "1" => false
 		// arrow function
 		// return this.problems.find((problem) => problem.id === id);
 		return this.httpClient.get(`api/v1/problems/${id}`)
 			.toPromise()
 			.then((res : any) => {
 				console.log(res)
 				return res;
 			})
 			.catch(this.handleError);
 	}

 	addProblem(problem: Problem) {
 		// problem.id = this.problems.length + 1;
 		// this.problems.push(problem);

 		// "Content-Type" is case sensitive
 		const options = { headers : new HttpHeaders({'Content-type' : 'application-json'})};
 		return this.httpClient.post('api/vi/problems', problem, options)
 			.toPromise()
 			.then((res : any) => {
 				// any: type, don't care the type
         		// update the _problemSource
         		this.getProblems();
         		return res;
 			}) 
 			.catch(this.handleError);		
 	}

 	private handleError(err : any) : Promise<any> {
 		console.error('an error occured', err);
 		return Promise.reject(err.body || err);	
 	}
}
