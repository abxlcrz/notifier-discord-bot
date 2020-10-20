import config from './config';
import { Client, Message } from 'discord.js';

class App {
    private client: Client;
    private token: string;
    constructor(token: string) {
        this.client = new Client();
        this.token = token;
    }
    public start() {
        this.client.login(this.token);
        this.initialize();
    }

    private initialize() {
        const prefix = '!mov';
        this.client.on('ready', () => console.log("bot ready"));
        
        this.client.on('message', (message: Message) => {
            if(!message.content.startsWith(prefix)||message.author.bot) return;
            message.channel.send('!hello');
        })
    }
}
export default App