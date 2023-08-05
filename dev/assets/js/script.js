const peopleArr = [{
    id: 1,
    name: "Andres Iniesta",
    age: 39,
    photo: 'img/AndresIniesta.png',
    position: 'Midfielder',
},

{
    id: 2,
    name: "Diego Maradona",
    age: 60,
    photo: 'img/Diego-Maradona.png',
    gender: 'Forward',
},

{
    id: 3,
    name: "Lionel Messi",
    age: 36,
    photo: 'img/LionelMessi.png',
    gender: 'Forward',
},

{
    id: 4,
    name: "Robert Lewandowski",
    age: 34,
    photo: 'img/RobertLewandowski.png',
    gender: 'Forward',
},

{
    id: 5,
    name: "Karim Benzema",
    age: 35,
    photo: 'img/Benzema.png',
    gender: 'Forward',
},

{
    id: 6,
    name: "Roberto Karlos",
    age: 50,
    photo: 'img/Roberto-Karlos.png',
    gender: 'Defender',
},

{
    id: 7,
    name: "Cristiano-Ronaldo",
    age: 38,
    photo: 'img/cristiano-ronaldo.png',
    gender: 'Forward',
},

{
    id: 8,
    name: "Batistuta Gabriel",
    age: 54,
    photo: 'img/Batistuta.png',
    gender: 'Forward',
},

{
    id: 9,
    name: "Paolo Maldini",
    age: 55,
    photo: 'img/Maldini.png',
    gender: 'Defender',
},

{
    id: 10,
    name: "Erling Haaland",
    age: 23,
    photo: 'img/Erling-Haaland.png',
    gender: 'Forward',
},

{
    id: 11,
    name: "Pele",
    age: 82,
    photo: 'img/Pele.png',
    gender: 'Forward',
},

{
    id: 12,
    name: "David Beckham",
    age: 48,
    photo: 'img/Beckham.png',
    gender: 'Midfielder',
},

{
    id: 13,
    name: "Bruno Fernandes",
    age: 28,
    photo: 'img/Bruno-Fernandes.png',
    gender: 'Midfielder',
},

{
    id: 14,
    name: "Angel Di Maria",
    age: 35,
    photo: 'img/di-mariya.png',
    gender: 'Midfielder',
},

{
    id: 15,
    name: "Kylian Mbappe",
    age: 24,
    photo: 'img/kylian-mbappe.png',
    gender: 'Forward',
},

{
    id: 16,
    name: "Andriy Shevchenko",
    age: 46,
    photo: 'img/andrej-shevchenko.png',
    gender: 'Forward',
},

{
    id: 17,
    name: "Marcus Rashford",
    age: 25,
    photo: 'img/Marcus-Rashford.png',
    gender: 'Forward',
},

{
    id: 18,
    name: "Mohamed Salah",
    age: 31,
    photo: 'img/Mohamed-Salah.png',
    gender: 'Forward',
},


{
    id: 19,
    name: "Michael Mudryk",
    age: 21,
    photo: 'img/mykhailo-mudryk.png',
    gender: 'Midfielder',
},

{
    id: 20,
    name: "Nesta Sandro",
    age: 47,
    photo: 'img/Nesta-Sandro.png',
    gender: 'Midfielder',
},

{
    id: 21,
    name: "Neymar",
    age: 31,
    photo: 'img/Nejmar.png',
    gender: 'Forward',
},

{
    id: 22,
    name: "Ronaldinho",
    age: 41,
    photo: 'img/Ronaldinho.png',
    gender: 'Midfielder',
},

{
    id: 23,
    name: "Virgil van Dijk",
    age: 32,
    photo: 'img/van-Dijk.png',
    gender: 'Defender',
},

{
    id: 24,
    name: "Xavier Hernandez",
    age: 43,
    photo: 'img/xavi.png',
    gender: 'Midfielder',
},

{
    id: 25,
    name: "Zinedine Zidane",
    age: 51,
    photo: 'img/Zidan.png',
    gender: 'Midfielder',
},

{
    id: 26,
    name: "Zlatan Ibrahimovic",
    age: 41,
    photo: 'img/Zlatan.png',
    gender: 'Forward',
},

{
    id: 27,
    name: "Oleksandr Zinchenko",
    age: 26,
    photo: 'img/Zinchenko.png',
    gender: 'Defender',
},

{
    id: 28,
    name: "Ronaldo Nazario",
    age: 46,
    photo: 'img/ronaldo-zubastik.png',
    gender: 'Forward',
},

{
    id: 29,
    name: "Rivaldo",
    age: 51,
    photo: 'img/Rivaldo.png',
    gender: 'Midfielder',
},

{
    id: 30,
    name: "Luka Modric",
    age: 37,
    photo: 'img/Luka-Modric.png',
    gender: 'Midfielder',
},

{
    id: 31,
    name: "Harry Kane",
    age: 30,
    photo: 'img/HarryKane.png',
    gender: 'Forward',
},

{
    id: 32,
    name: "Johan Cruyff",
    age: 68,
    photo: 'img/JohanCruyff.png',
    gender: 'Midfielder',
},

]





window.addEventListener('load', function () {
    const usersContainer = document.querySelector('.users-container');
    const ageRange = document.querySelector('#ageFilter');
    const nameInput = document.querySelector('#nameFilter');
    const positionRadio = document.querySelectorAll('[type="radio"]');

    console.log(usersContainer, nameInput, ageRange, positionRadio);



    const renderPerson = (peopleArr) => {
        const list = arr.map(person => {
            return (
            `<div class="user">
                <div class="person-photo">
                    <img src="${person.photo}" class="img-fluid" alt="${person.name}">
                </div>
                <div class="person-name">${person.name}</div>
                <div class="person-age">${person.age}</div>
                <div class="person-position">${person.position}</div>
            </div>`
        )
    })
    .join("")

        usersContainer.innerHTML = list;
    }
    renderPerson(peopleArr);



    function getPositionVal() {
        positionRadio.forEach(item => {
            item.addEventListener("click", () => {
                console.log(item)

                let attr = item.getAttribute('value')
                console.log(attr);

                // let val = event.target.value
                // state.position = val

                // const filteredForPosition = mainFilter()
                // renderPerson(filteredForPosition)
            })
        })

    }
    getPositionVal()  
})





