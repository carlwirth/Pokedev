# Pokedev
Tool for indexing data regarding the various species of Pokemon™. This project was built as a client-side Javascript webapp.
## Getting Started
These instructions will allow you to get a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Prerequisites
Start by cloning the following repository on your local machine.  

```git clone https://github.com/roramigator/Pokedev```  

This will create a copy of the project on your current path.
### Installing
At this point you would have a directory, *Pokedev*, in your current path.  Continue by changing directories into it...

```cd Pokedev```

... and install dependencies.

```npm install```

This should have installed *webpack*, *sass* and *webpack-server-dev*, which are use to build, style, and test the project respectively.
## Up and running
**Pokedev** is a Javascript webapp, which means you have to run it on the browser. To do this, you need *webpack* to bundle all the needed files.

```npm run build```

Once *webpack* is done building, you can view the project on the browser using the path to *index.html*.  It would look something like this:

*.../path/to/Pokedev/index.html*.

Every time a change is made, a new build is needed to read those changes. *webpack-server-dev* allows the visualization of code without the need of building every time you save.

Start *webpack-server-dev* to preview without running a build.

```npm run server```

As long as the server is running, you don't need to build to visualize.  Nevertheless, when the server is stopped, the changes made while running are not bundled. Therefore, *you need to run a build after finishing with the dev server*.  



## Authors
- Elijah Brown: Developer
- Carl Wirth: Developer
- Roberto Morado: Developer

## Notes
**Pokedev** was developed as a final project for the Javascript Fundamentals class, this met the requirements set; see the full list [here](REQUIREMENTS.md)

## Credits
[PokeAPI](http://pokeapi.co/): Pokémon data.

