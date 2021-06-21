class Game{

constructor()
{
    
}
//retrieve the gameState value from the database
getState()
{
    var gameref = database.ref('gameState');
    gameref.on('value',function(data){
        gameState=data.val();
    })
}

//to update the new game value in the database
update(state)
{
database.ref('/').update({
    'gameState':state
}
 )
}
start()
{
    if(gameState===0)
    {
        player = new Player()     
        player.getCount()
        form = new Form()
        form.display();
    
    
    
    }
}
}