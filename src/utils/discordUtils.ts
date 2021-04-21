import { GuildChannel, PartialGuildMember, Message,GuildMember } from 'discord.js';

export function getChannelById(entity: Message | GuildMember | PartialGuildMember, id: string): GuildChannel | undefined {
    const channel=entity.guild?.channels.cache.find(ch=>ch.id===id);
    return channel;
}