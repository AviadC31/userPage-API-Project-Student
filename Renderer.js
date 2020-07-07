class Renderer {
    constructor() {}

    render1 = function (img, first, last, city, state) {
        $('.user-container').empty()
        let obj = { img, first, last, city, state }
        const source = $('#template1').html()
        const template = Handlebars.compile(source)
        let mainUserHTML = template(obj);
        $('.user-container').append(mainUserHTML)
    }

    render2 = function (people) {
        $(".friends-container").empty()
        let friends = people.slice(1)
        const source = $("#template2").html()
        const template = Handlebars.compile(source)
        let friendsHTML = template({ friends })
        $(".friends-container").append(friendsHTML)
    }

    render3 = function (quote) {
        $(".quote-container").empty()
        const source = $("#template3").html()
        const template = Handlebars.compile(source)
        let quoteHTML = template(quote)
        $(".quote-container").append(quoteHTML)
    }

    render4 = function (poke) {
        $(".pokemon-container").empty()
        const source = $("#template4").html()
        const template = Handlebars.compile(source)
        let pokemonHTML = template(poke)
        $(".pokemon-container").append(pokemonHTML)
    }

    render5 = function (meat) {
        $(".meat-container").empty()
        const source = $("#template5").html()
        const template = Handlebars.compile(source)
        let contentHTML = template(meat)
        $(".meat-container").append(contentHTML)
    }
}
