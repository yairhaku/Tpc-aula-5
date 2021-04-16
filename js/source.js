let writeOuput = function(text)
{
    document.write(`<h1>${text}</h1>`)
}
writeOuput ("Done!");

function Cat(name, color)
{
    this.name = name;
    this.color = color;
}

function Bear(name, color)
{
    this.name = name;
    this.color = color;
}

class Mamifero
{
    constructor(name)
    { 
        this.name = name;
    }
    DrinkMilk()
    {
        return "Look at me, i'm driking milk"
    }
}
let Mamifero = new Mamifero("Bolinhas");

for (let i= 0; i <Mamifero.length; i++)
{
    writeOuput(Mamifero[i].name);
    writeOuput(Mamifero[i].DrinkMilk);
}
