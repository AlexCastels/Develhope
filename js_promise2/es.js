// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
// -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }.
// -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
// -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

const users = { id: 1, name: "John" };
const posts = ["Post 1", "Post 2", "Post 3"];

function fetchUserData(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
}

function fetchUserPosts(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(post);
    }, 3000);
  });
}

fetchUserData(users).then((data) => {
  console.log(`${data.name} ha pubblicato:`)
  return fetchUserPosts(posts)               //per concatenare promise, si richiama la funzione che contiene la seconda promise
})                                           //dentro il primo .then con return, a seguire si specificherà un secondo .then che 
.then((data) => {                            //appartiene alla seconda promise
  data.forEach((element) => {
    console.log(element);
  });
})
.catch((err) => console.error(err));
