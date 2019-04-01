const db = firebase.firestore();

const button = document.querySelector('button');
button.onclick = ()=> {
    let nameValue = document.getElementById('name').value;
    let urlValue = document.getElementById('url').value;
    let ageValue = document.getElementById('age').value;
    let jobValue = document.getElementById('job').value;
    let sexValue = document.getElementById('sex').value;

    db.collection("Users").doc(nameValue).set({
        name: nameValue,
        age: ageValue,
        sex: sexValue, 
        job: jobValue, 
        url: urlValue,
    })
} 
console.log(db.collection("Users")); 
