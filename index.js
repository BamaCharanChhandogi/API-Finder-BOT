const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('6669161860:AAEfWpCA3S_wfrNDYL15-lIXcxv_u_4fK9Y',{polling:true});

// API objects
const apiLinks = {
    '/github': 'https://docs.github.com/en/rest?apiVersion=2022-11-28',
    '/twitter': 'https://api.twitter.com/1.1/',
    '/openweathermap': 'https://api.openweathermap.org/data/2.5',
    '/nasa': 'https://api.nasa.gov/',
    '/reddit': 'https://www.reddit.com/dev/api/',
    '/youtube': 'https://www.googleapis.com/youtube/v3/',
    '/spotify': 'https://api.spotify.com/v1/',
    '/googlemaps': 'https://maps.googleapis.com/maps/api/',
    '/facebook': 'https://graph.facebook.com/v13.0/',
    '/newyorktimes': 'https://api.nytimes.com/svc/',
    '/coinbase': 'https://api.coinbase.com/v2/prices/spot?currency=USD',
    '/coinmarketcap': 'https://api.coinmarketcap.com/v1/ticker/bitcoin/',
    '/coindesk': 'https://api.coindesk.com/v1/bpi/currentprice.json',
    '/netflix': 'https://api.netflix.com/v1/titles/80100172',
    '/weather': 'https://api.openweathermap.org/data/2.5',
    '/news': 'https://newsapi.org/v2/top-headlines',
    '/wikipedia': 'https://en.wikipedia.org/w/api.php',
    '/unsplash': 'https://api.unsplash.com/',
    '/flickr': 'https://api.flickr.com/services/rest/',
    '/giphy': 'https://api.giphy.com/v1/',
    '/lastfm': 'https://ws.audioscrobbler.com/2.0/',
    '/omdb': 'https://www.omdbapi.com/',
    '/pokeapi': 'https://pokeapi.co/api/v2/',
    '/thesportsdb': 'https://www.thesportsdb.com/api/v1/json/',
    '/dogceo': 'https://dog.ceo/api/',
    '/catapi': 'https://api.thecatapi.com/v1/',
    '/funtranslations': 'https://api.funtranslations.com/translate/',
    '/githubjobs': 'https://jobs.github.com/positions.json',
    '/publicapis': 'https://api.publicapis.org/',
    '/adzuna': 'https://api.adzuna.com/v1/api/jobs/',
    '/openai': 'https://api.openai.com/v1/',
    '/opentdb': 'https://opentdb.com/api.php',
    '/worldbank': 'https://api.worldbank.org/v2/',
    '/covid19': 'https://api.covid19api.com/',
    '/coronatracker': 'https://api.coronatracker.com/v3/stats/worldometer/country',
    '/boredapi': 'https://www.boredapi.com/api/',
    '/tronalddump': 'https://api.tronalddump.io/',
    '/restcountries': 'https://restcountries.com/v3.1/',
    '/jokeapi': 'https://v2.jokeapi.dev/joke/',
    '/calendarific': 'https://calendarific.com/api/v2/',
    '/quotes': 'https://api.quotable.io/',
    '/thecocktaildb': 'https://www.thecocktaildb.com/api/json/v1/',
    '/dogapi': 'https://api.thedogapi.com/v1/',
    '/catfact': 'https://catfact.ninja/',
    '/dogfact': 'https://dog-facts-api.herokuapp.com/api/v1/',
    '/spaceX': 'https://api.spacexdata.com/v4/',
    '/shazam': 'https://api.shazam.com/',
    '/dnd5e': 'https://www.dnd5eapi.co/api/',
    '/rickandmorty': 'https://rickandmortyapi.com/api/',
    '/harrypotter': 'https://www.potterapi.com/v1/',
    '/thesimpsons': 'https://thesimpsonsquoteapi.glitch.me/',
    '/breakingbad': 'https://breakingbadapi.com/api/',
    '/deckofcards': 'https://deckofcardsapi.com/api/',
    '/quotesfree': 'https://quotes.rest/',
    '/icanhazdadjoke': 'https://icanhazdadjoke.com/',
    '/opencagedata': 'https://api.opencagedata.com/geocode/v1/json'
};
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to the API bot. Send me a keyword to get the API link.');
    // Commands
    bot.sendMessage(chatId, '/start: ' + ' Start The BOT');
    bot.sendMessage(chatId, '/list: ' + ' List Keywords of API');

});
// 
bot.onText(/\/list/, (msg) => {
    const chatId = msg.chat.id;
    let keywords = '';
    for(let key in apiLinks){
        keywords += key + '\n';
    }
    bot.sendMessage(chatId, 'Keywords: \n' + keywords);
});
// List for incoming message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    let message = msg.text.toString().toLowerCase();
    if (message.startsWith('/start'|| message.startsWith('/list'))) {
        // Check if the message is a command ("/start" or "/list")
        return;
    }
    if(apiLinks[message]){
        bot.sendMessage(chatId, `API link for ${message}: ${apiLinks[message]}`);
    }else{
        bot.sendMessage(chatId, 'Keyword not found');
    }
});