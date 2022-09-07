import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOD_JPA_API_URL } from 'src/app/app.constant';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username:any){
   return this.http.get<Todo[]>(`${TOD_JPA_API_URL}/users/${username}/todos`)
  }

  deleteTodo(username:any, id:any){
    return this.http.delete(`${TOD_JPA_API_URL}/users/${username}/todos/${id}`)
   }

   retrieveTodo(username:any, id:any){
    return this.http.get<Todo>(`${TOD_JPA_API_URL}/users/${username}/todos/${id}`)
   }

   // Whenever your using put operation you need send body also with url as 2nd parameter
   updateTodo(username:any, id:any, todo:Todo){
    return this.http.put<Todo>(`${TOD_JPA_API_URL}/users/${username}/todos/${id}`,todo)
   }

   createTodo(username:any, todo:Todo){
    return this.http.post<Todo>(`${TOD_JPA_API_URL}/users/${username}/todos`,todo)
   }
}
