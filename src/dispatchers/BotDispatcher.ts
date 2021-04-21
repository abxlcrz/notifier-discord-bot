import { GuildMember, PartialGuildMember, TextChannel } from "discord.js";
import { getChannelById } from "../utils/discordUtils";
import Dispatcher from "./Dispatcher";

class BotDispatcher extends Dispatcher {
    public welcome(member: GuildMember | PartialGuildMember) {
        try {
            const channel=getChannelById(member,this.channels.general);
            if(!channel) return;
            const message=`hola <@${member}>, bienvenido`;
            channel instanceof TextChannel && channel.send(message);
        } catch (error) {
            console.log(error);
        }
    }
}
export default BotDispatcher