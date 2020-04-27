class Player
{
    constructor() 
    {
        this.index = 0;
        this.name = null;
        //this.rank = null;
    }

    getCount()
    {
        var PlayerCountRef = database.ref('playerCount');
        PlayerCountRef.on("value", (data) =>
            {
                playerCount = data.val();
            }
        );
    }

    updateCount(count)
    {
        database.ref('/').update(
            {
                playerCount: count
            }
        );
    }

    update()
    {
        var playerIndex1 = "players/player" + this.index;
        database.ref(playerIndex1).set(
            {
                name: this.name
            }
        );
    }
}