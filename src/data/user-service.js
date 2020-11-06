function getUsers(count = 10) {
    const url = `https://randomuser.me/api/?results=${count}`

    return fetch(url)
    .then(response => response.json())
        .then(data => data.results
            .map(({ name, dob, gender, location }) =>
                ({ name: `${name.first} ${name.last}`, age: dob.age, gender: gender, country: location.country }))
        ).catch(console.error);
} 

export default getUsers