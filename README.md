# Pokemon GO Map (node.js server)

This is a very simple Pokemon GO Map (Pokémap) Server

Key Features
------------

* **Exact locations** of nearby **Pokémon**, **Gyms**, and **Pokéstops**, updated **live**
* **Easy** to install - just Node.js, HTML/CSS/ES5.1 - no compiling C++, no SASS, no build steps, no python
* **Multiple users** - web login allows multiple users to enjoy your server at once
* **Fast** - node.js has built-in (background) async multi-threading, so it's super fast without the headaches
* **Low-Memory** - caching is done on the client, and the sessions are stateless, so the server stays fresh and clean
* **For the Classroom** - since there's no build steps and no compiling, it's great for teaching and learning

The goal is to be a great tool **for the classroom** and for younger or less-experienced techies that are good enough at googling, following instructions, and can copy/paste to make things work.

![](http://i.imgur.com/i2PHT9d.png)

# Quick and Easy Install for Normal-ish People

Go to [Pokémap Web App](https://github.com/Daplie/pokemap-webapp)

# Instructions for Computer Programmers

If you would like to get the code and build from scratch, here's what you need to do:

```bash
# Setup the Server
git clone https://github.com/coolaj86/node-pokemap.git
pushd node-pokemap/
npm install

# Setup the Web Client
git submodule init
git submodule update

# Run the Server
node serve.js
```

## Endpoints

* `POST http://127.0.0.1:3000/api/com.pokemon.go/login` `{ username: '', password: '', provider: 'ptc' }`
* `GET http://127.0.0.1:3000/api/com.pokemon.go/nearby?type=name&name=Provo,%20UT&pokemon=true&pokestops=true&gyms=true`

## Testing

Register a `ptc` (Pokemon Trainer Club) account: <https://sso.pokemon.com/sso/login>

```bash
# Get the access_token
curl -X POST 'http://127.0.0.1:3000/api/com.pokemon.go/login' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{ "username": "johndoe", "password": "secret", "provider": "ptc", "location": { "type": "name", "name": "Provo, UT" } }'

# Get some Pokemon Map data
curl 'http://127.0.0.1:3000/api/com.pokemon.go/nearby?latitude=40.36915523640919&longitude=-111.75098587678943&altitude=0step=10&offset=0' \
  -H 'Authorization: Bearer xxxxxxxxxxxxxxxxx'
```

## Sample Objects

```json
{   "pokemons": [
        {
            "disappear_time": 1469159020156,
            "encounter_id": "MTUzMjQxMjY4NTg4NDUyMTExMTc=",
            "latitude": 40.36915523640919,
            "longitude": -111.75098587678943,
            "pokemon_id": 16,
            "pokemon_name": "Pidgey",
            "spawnpoint_id": "874d84035d7"
        }
    ],
    "pokestops": [
        {
            "active_pokemon_id": 19,
            "enabled": true,
            "last_modified": 1469157300759,
            "latitude": 40.370669,
            "longitude": -111.755525,
            "lure_expiration": 1469158200716,
            "pokestop_id": "1ef6996b547746c69e22dbe73af6fbb0.16"
        },
        {
            "active_pokemon_id": null,
            "enabled": true,
            "last_modified": 1469156128717,
            "latitude": 40.364965,
            "longitude": -111.756411,
            "lure_expiration": null,
            "pokestop_id": "1494e52456d64e979fdee61437bfefa7.16"
        }
    ],
    "gyms": [
        {
            "enabled": true,
            "guard_pokemon_id": 59,
            "gym_id": "ffb14e36c7344c289457faa20319681c.16",
            "gym_points": 10495,
            "last_modified": 1469146875398,
            "latitude": 40.360204,
            "longitude": -111.761231,
            "team_id": 2
        }
    ]
}
```

## Why Fork?

Philosophy - make it easier for non-technical people.

Pokémon GO is used mostly by teenagers and young adults.
Instead of creating code with the latest, coolest features
we're redesigning this to work with existing phones and browers
and without additional build steps or fancy tools.

We want **Pokémap** to be something that teenagers and high school
teachers can easily use on any computer with minimal installation
of programming languages or developer tools.

All node.js JavaScript

  * no python
  * no ruby
  * minimal C++ (

No Build Steps

  * HTML 5
  * ES5.1 JavaScript (no ES6 build steps)
  * CSS (no SASS build steps)

# Credits

Based on the excellent work of [PokemonGo-Map (python server, web client)](https://github.com/AHAAAAAAA/PokemonGo-Map) and [Pokemon-GO-node-api](https://github.com/Armax/Pokemon-GO-node-api).

## Other Tools

* [Python & Web PokemonGo-Map](https://github.com/AHAAAAAAA/PokemonGo-Map) - python, html, sass, ES6
* [node pokemap](https://github.com/Daplie/node-pokemap) - node, html, css, es5.1
* [Pokemon-GO-node-api](https://github.com/Armax/Pokemon-GO-node-api) node
* [Android Pokemap](https://github.com/omkarmoghe/Pokemap)
* [PokemonGo-DesktopMap](https://github.com/mchristopher/PokemonGo-DesktopMap)
* [Mila432/Pokemon_Go_API](https://github.com/Mila432/Pokemon_Go_API)
* [tejado's pokemongo-api-demo](https://github.com/tejado/pokemongo-api-demo)
* [leegao's additions](https://github.com/leegao/pokemongo-api-demo/tree/simulation)
