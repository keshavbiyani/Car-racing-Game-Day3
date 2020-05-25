class Form
{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display()
    {
        var title = createElement('h2');
        title.html("car racing game");
        title.position(displayWidth/2,150);
       
        this.input.position(displayWidth/2,displayHeight/2 - 70);
        this.button.position(displayWidth/2+20,displayHeight/2-40);
        this.button.mousePressed(()=>{
           this. input.hide();
            this.button.hide();
             player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);
            console.log(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2+20,displayHeight/2-40);
        })
    }
}