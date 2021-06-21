class Form
{
    constructor()
    {

    }
 display()
  {
    var title=createElement('h2');
    title.html("salman driving school")
    title.position(130,0)
    var input = createInput("name")
    input.position(130,160)
    var button = createButton("ready");
    button.position(250,200);
    var greeting = createElement('h3');

    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount+=1
        player.updateCount(playerCount);
        player.update(name)
        

        greeting.html(name + " welcome buddy ");
        greeting.position(130,160)
    });
 }




}