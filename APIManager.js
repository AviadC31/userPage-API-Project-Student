class APIManager {
    constructor() {
        this.data = {}
    }
    loadData = (kind, url) => {
        $.ajax({
            method: "GET",
            url: url,
            dataType: 'json',
            success: (relData) => {
                if (kind === 'k1') {
                    this.data.people = []
                    relData.results.forEach(p => {
                        this.data.people.push(p.name)
                    })
                    this.data.people[0].imgUrl = relData.results[0].picture.medium
                    this.data.people[0].city = relData.results[0].location.city
                    this.data.people[0].state = relData.results[0].location.state
                }
                if (kind === 'k2') {
                    this.data.quote = relData.quote
                }
                if (kind === 'k3') {
                    this.data.pokeName = relData.species.name
                    this.data.pokeImgUrl = relData.sprites.front_shiny
                }
                if (kind === 'k4') {
                    this.data.text = relData[0]
                }
            }
        })
    }
}





