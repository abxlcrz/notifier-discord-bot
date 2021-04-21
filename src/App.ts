import config from './config';
import { Client, Message } from 'discord.js';
import newMemberController from './controllers/newMemberController';

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
        this.client.on('guildMemberAdd', newMemberController)
        this.onMessage(prefix);

    }
    private onMessage(prefix: string) {
        this.client.on('message', (message: Message) => {
            if (!message.content.startsWith(prefix+' dou') || message.author.bot) return;
            message.reply('!hello');
        })
    }
}
export default App