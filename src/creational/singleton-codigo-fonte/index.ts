import { HostgatorInfluenciadores } from "./hostgator_influenciadores";
import { YoutubeChannel } from "./youtube_channel";

const cdftv = new YoutubeChannel("Código Fonte Tv", "codigofontetv");
const manualdosgames = new YoutubeChannel("Manual dos Games", "manualdosgames");
const felipeneto = new YoutubeChannel("Felipe Neto", "felipeneto");
const canaldopiratacanal = new YoutubeChannel("Canal do Pirata", "canaldopirata");
const programadorbr = new YoutubeChannel("Programador BR", "programadorbr");
const devdojo = new YoutubeChannel("DevDojo", "devdojo");


const hostgator_influenciadores = HostgatorInfluenciadores.getInstance();
hostgator_influenciadores.setMembers([cdftv, manualdosgames, felipeneto])


const hostgator_influenciadores2 = HostgatorInfluenciadores.getInstance();
hostgator_influenciadores2.setMembers([canaldopiratacanal, programadorbr, devdojo])

console.log(hostgator_influenciadores.getMembersLength())
console.log(hostgator_influenciadores.getMembers())


console.log(hostgator_influenciadores2.getMembersLength())
console.log(hostgator_influenciadores2.getMembers())

console.log(hostgator_influenciadores === hostgator_influenciadores2)