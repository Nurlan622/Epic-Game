
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

