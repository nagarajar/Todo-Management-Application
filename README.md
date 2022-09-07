# Todo-Management-Application
Full Stack Web Application with Spring boot and Angular

## Functionality:
A full stack web application with Spring Boot and Angular, which helps to maintain our day-to-day 
tasks or list everything that we have to do. It is helpful in planning our daily schedules. We can add more tasks, 
modify tasks at any time and delete a task that is completed.
## Technologies: 
Java, Spring Boot, Rest API & Microservices, Spring Security & JWT, Spring Data JPA & Hibernate, Angular, H2 Database.

## Course Details
### Request URLs and Examples
#### Common Headers
```
  Origin - http://localhost:4200
  Content-Type - application/json
  Authorization 
  - Bearer *** or
  - Basic *****
```

#### Retrieve all todos for a user
- GET - http://localhost:8080/users/in28minutes/todos
```
[
    {
        "id": 1,
        "username": "in28minutes",
        "description": "Learn Angular",
        "targetDate": "2022-09-07T05:58:43.643+00:00",
        "done": false
    },
    {
        "id": 2,
        "username": "in28minutes",
        "description": "Learn Spring Boot",
        "targetDate": "2022-09-07T05:58:43.643+00:00",
        "done": false
    },
    {
        "id": 3,
        "username": "in28minutes",
        "description": "Learn AWS",
        "targetDate": "2022-09-07T05:58:43.643+00:00",
        "done": false
    }
]

```

#### Retrieve a specific todo
- GET - http://localhost:8080/users/in28minutes/todos/1
```
{
"id": 1,
"username": "in28minutes",
"description": "Learn to code",
"targetDate": "2022-09-07T05:58:43.643+00:00",
"done": false
}
```

#### Creating a new todo
- POST - http://localhost:8080/users/in28minutes/todos with BODY of Request given below
```
{
  "username": "in28minutes",
  "description": "Learn to Drive a Car",
  "targetDate": "2022-09-07T05:58:43.643+00:00",
  "done": false
}
```

#### Updating a new todo
- PUT - http://localhost:8080/users/in28minutes/todos/1 with BODY of Request given below
```
{
  "id": 1
  "username": "in28minutes",
  "description": "Learn to Drive a Car",
  "targetDate": "2022-09-07T05:58:43.643+00:00",
  "done": false
}
```

#### Delete todo
- DELETE - http://localhost:8080/users/in28minutes/todos/1

#### JWT Authenticate
- POST - http://localhost:8080/authenticate
```
{
  "username":"in28minutes",
  "password":"dummy"
}
```
Response
```
{
"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYW5nYSIsImV4cCI6MTU0MjQ3MjA3NCwiaWF0IjoxNTQxODY3Mjc0fQ.kD6UJQyxjSPMzAhoTJRr-Z5UL-FfgsyxbdseWQvk0fLi7eVXAKhBkWfj06SwH43sY_ZWBEeLuxaE09szTboefw"
}
```
#### Other URLS

- Refresh - http://localhost:8080/authenticate
