//Implementare la funzione firstUncompletedNote che, dato un array di note, restituisce la prima nota non completata. Una nota viene considerata completata se tutti i todo presenti hanno il flag done impostato a true.
  
  const notes = [
    {
      id: 1,
      description: 'Workout program',
      todos: [
        {
          id: 1,
          name: 'Push ups - 10 x 3',
          done: true
        },
        {
          id: 2,
          name: 'Abdominals - 20 x 3',
          done: true
        },
        {
          id: 3,
          name: 'Tapis Roulant - 15min',
          done: true

        }
      ]
    },
    {
      id: 2,
      description: 'Front-end Roadmap',
      todos: [
        {
          id: 1,
          name: 'Learn HTML',
          done: true
        },
        {
          id: 2,
          name: 'Learn CSS',
          done: false
        },
        {
          id: 3,
          name: 'Learn JavaScript',
          done: true
        },
        {
          id: 4,
          name: 'Learn Angular',
          done: false
        }
      ]
    },
    {
      id: 3,
      description: 'My Movies Library',
      todos: [
        {
          id: 1,
          name: 'La città incantata',
          done: true
        },
        {
          id: 2,
          name: 'Avatar',
          done: true
        },
        {
          id: 3,
          name: 'Titanic',
          done: false
        }
      ]
    }
  ]

  function firstUncompletedNote(notes){
    const uncomplete = notes.find(note => note.todos.find(element => element.done === false))
    return uncomplete
  }

  // let aiuto = notes.find(element => element.todos).find(element => element.done === false)
  // console.log(aiuto)   !!!SERVE SPIEGAZIONE SU CONCATENAZIONE!!!

  // function firstUncompletedNote(arr){    CORRETTO
  //     let incomplete;
  //     let result;
  //     for (let i = 0; i < arr.length; i++) {
  //      if(incomplete == null){
  //      incomplete = arr[i].todos.find(element => element.done === false)
  //      result = arr[i]
  //       }
  //     }
  //     return result
  // }

 
  // function firstUncompletedNote(notes) {
  //   let todos = []
  //   notes.forEach(element => {element.todos === Array
  //   todos.push(element.todos)
  //   } )
  //   let myVar = todos.find(value => value.done !== true)
  //   return myVar    
  //   }


// function firstUncompletedNote(notes){
    
//     let noteIncomplete = []
//     for (let i = 0; i < notes.length; i++) {
//         noteIncomplete.push(notes[i].todos)
//     }
    
//     let todosVari = noteIncomplete.find(note => {
//       if(note.done === false){
//         console.log(todosVari)
//         }
//       }
//     )
//     return todosVari 
    
   
// }

// function firstUncompletedNote(arr){
//   let todos = []
//     arr.forEach(element => { element.todos
//     todos.push(element.todos)})
    
//     let dones = []
//     todos.forEach(element => {element.done
//     dones.push(element.done)
//     })
    
//     if(Boolean(dones) !== true){
//       console.log('cicciopasticcio');
//     } else {
//       return todos
//     }
// }

// function firstUncompletedNote(arr){
//   let todos = []
//     arr.forEach(element => { element.todos
//     todos.push(element.todos)})
  
//   let incomplete = []
//   for (let i = 0; i < todos.length; i++) {
//     incomplete += todos[i].done
    
//   }
  
//   }



    




    

    
    
 


const noteInProgress = firstUncompletedNote(notes);
//   console.log('All notes: ', notes); 
console.log('First note in progress: ', noteInProgress);

// console.log(notes[0].todos[0].done)