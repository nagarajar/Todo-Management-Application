import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message:String = ''
  todos : Todo[] = []
  // = [
  //   new Todo(1, 'Learn to code',false, new Date()),
  //   new Todo(2, 'Practice coding after lernt',false, new Date()),
  //   new Todo(3, 'Work on a project and apply the things you learned',false, new Date())
  //   // {id: 1, description: 'Learn to code'},
  //   // {id: 2, description: 'Practice coding after lernt'},
  //   // {id: 3, description: 'Work on a project and apply the things you learned'}
  // ]
  // todo = {
  //   id:1,
  //   description:'Learn to code'
  // }

  constructor( private todoService:TodoDataService,
    private router:Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos()
  {
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

  deleteTodo(id:any){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of Todo ${id} is Successful !`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id:any){
    console.log(`Update todo ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
