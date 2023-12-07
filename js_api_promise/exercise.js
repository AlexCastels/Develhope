const persons = [
    {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
    },
    {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
    },
    {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
    }
    ];

const jobs = [
    {
    id: 1,
    jobTitle: 'CEO'
    },
    {
    id: 2,
    jobTitle: 'Project Manager'
    },
    {
    id: 3,
    jobTitle: 'Developer'
    }
];

function fetchPersonById(id){
    return promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
    const person = persons.find(person => person.id == id);
    if (person){
        return resolve(person)
    } else {
        return reject(`No person with id ${id}`)
    }
    },3000)
    })
};

function fetchJobById(id){
    return promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    const job = jobs.find(job => job.id == id);
    if (job){
        return resolve(job)
    } else {
        return reject(`No job with id ${id}`)
    }
    },2000)
    })
}

Promise.all([
    fetchPersonById(1),fetchJobById(1),
    fetchPersonById(2) , fetchJobById(2),
    fetchPersonById(3) , fetchJobById(3)
])
.then((data) => console.log(data))
.catch((err) => console.error(err))


// Promise.all([fetchPersonById(1) , fetchJobById(1)]).then((data) => console.log(data))
// Promise.all([fetchPersonById(2) , fetchJobById(2)]).then((data) => console.log(data))
// Promise.all([fetchPersonById(3) , fetchJobById(3)]).then((data) => console.log(data))
// .catch((err) => console.error(err))