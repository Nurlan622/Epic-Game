
var game = [
    {
        name: "Pubg",
        img: "pubg.avif"

    },
    {
        name: "Century",
        img: "century.avif"

    },
    {
        name: "Rogue",
        img: "roco.avif"

    },
    {
        name: "World Of Wars",
        img: "worldofwars.avif"

    },
    {
        name: "The Sims4",
        img: "sims.avif"

    },
    {
        name: "Destiny",
        img: "bungie.avif"

    },
    {
        name: "Grand Theft Auto",
        img: "gta.avif"
    },
    {
        name: "Destiny 2: Lightfall",
        img: "lightfall.avif"
    },
    {
        name: "FIFA 23 Standart Edition",
        img: "fifa23.avif"
    },
    {
        name: "Dead Space",
        img: "deadspace.avif"
    },
    {
        name: "The Settlers",
        img: "settlers.avif"
    }
];
var result = "";
for (let i = 0; i < game.length; i++) {
    result += `<div class="col-2">
    <div class="card">
        <div class="card-body">
            <img src="./assets/img/${game[i].img}" alt="">
            <p>${game[i].name}</p>
        </div>
    </div>
</div>`
}
area.innerHTML = result;

