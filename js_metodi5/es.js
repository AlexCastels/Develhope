const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];
  
  function calculateAverageAge(arr){
    let age = []
    arr.forEach(element => { element.age
    age.push(element.age)})
    let sum = age.reduce((a , number) => a + number , 0);
    let media = sum / arr.length
    return Math.round(media)
  }

  const average = calculateAverageAge(persons);
  console.log(persons);
  console.log(average);
