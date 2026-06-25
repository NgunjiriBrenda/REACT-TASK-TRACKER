function App(){


//Fake data for tasks-array of objects
const tasks=[
  {id: 1, text: "Learn React basics", completed: false},
  {id: 2, text: "Build a simple app", completed: false},
  {id: 3, text: "Learn Database Systems", completed: false},
  {id: 4, text: "Learn Props and Components", completed: true},
];

return (
  <div className="app">
    <h1>My Task Tracker</h1>

    <ul> 
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} {task.completed? "":<button>Mark as Completed</button>}
        </li>
      ))}
    </ul>
  </div>
);

}

export default App;