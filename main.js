let ruga = new APIManager()
let rkqga = new APIManager()
let pa = new APIManager()
let bia = new APIManager()

let Users = { user: [] }

let Data = {
    People: ruga.data,
    quote: rkqga.data,
    poke: pa.data,
    meat: bia.data
}

$('#load').on('click', function () {
    let id = Math.floor(Math.random() * 807)
    ruga.loadData('k1', 'https://randomuser.me/api/?results=7')
    rkqga.loadData('k2', 'https://api.kanye.rest')
    pa.loadData('k3', `https://pokeapi.co/api/v2/pokemon/${id}/`)
    bia.loadData('k4', 'https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=html/')
})

let renderer = new Renderer()

$('#display').on('click', function () {

    renderer.render1(
        ruga.data.people[0].imgUrl,
        ruga.data.people[0].first,
        ruga.data.people[0].last,
        ruga.data.people[0].city,
        ruga.data.people[0].state,
    )
    renderer.render2(ruga.data.people)
    renderer.render3(rkqga.data)
    renderer.render4(pa.data)
    renderer.render5(bia.data)

})

$('#saveUser').on('click', function () {

    let data = JSON.parse(JSON.stringify(Data))
    Users.user.push(data)

    localStorage.Users = JSON.stringify(Users)
    $('#myDropdown').append(`<a data-id="${Data.People.people[0].first}" class="users" href="#">${Data.People.people[0].first} ${Data.People.people[0].last}</a>`)

})

$('#displaySavedUsers').on('click', function () {

    document.getElementById("myDropdown").classList.toggle("show");

})

$('#myDropdown').on('click', '.users', function () {

    let temp = JSON.parse(localStorage.Users)
    let rendererOnceAgain = new Renderer()

    for (let i in temp.user) {

        if (temp.user[i].People.people[0].first == $(this).data().id) {

            rendererOnceAgain.render1(

                temp.user[i].People.people[0].imgUrl,
                temp.user[i].People.people[0].first,
                temp.user[i].People.people[0].last,
                temp.user[i].People.people[0].city,
                temp.user[i].People.people[0].state,
            )
            rendererOnceAgain.render2(temp.user[i].People.people)
            rendererOnceAgain.render3(temp.user[i].quote)
            rendererOnceAgain.render4(temp.user[i].poke)
            rendererOnceAgain.render5(temp.user[i].meat)
            break
        }

    }
})

window.onclick = function (event) {
    if (!event.target.matches('#displaySavedUsers')) {
        var dropdowns = document.getElementsByClassName("dropdown-content")
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}