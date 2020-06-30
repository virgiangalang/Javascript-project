//array of objects

const todos = [
  {
    text: "ini adalah tugas1",
    isCompleted: false
  },
  {
    text: "ini adalah tugas2",
    isCompleted: true
  },
  {
    text: "ini adalah tugas3",
    isCompleted: false
  },
  {
    text: "ini adalah tugas4",
    isCompleted: true
  }
];
const uncompletedTasks = todos.filter(myFunction);

function myFunction(value) {
  if (value.isCompleted === false) {
    return value;
  }
}

// const uncompletedTasks = todos.filter(value => {
//   if (value.isCompleted === false) {
//     return value;
//   }
// })

console.log(uncompletedTasks);
