import cruella from './Image/cruella.jpg';
import ironman from './Image/ironman.jpg';
import parrain from './Image/perrain.jpg';
import roiLion from './Image/roiLion.jpeg'

const Movies = [
    {
        id: 1,
        name : 'Cruella',
        description : 'Londres, années 70, en plein mouvement punk rock. Escroc pleine de talent, Estella est résolue à se faire un nom dans le milieu de la mode. Elle se lie d’amitié avec deux jeunes vauriens qui apprécient ses compétences d’arnaqueuse et mène avec eux une existence criminelle dans les rues de Londres...',
        rating: 4,
        genre : 'Comédie, Drame',
        poster : cruella
    },
    {
        id: 2,
        name : 'Iron man',
        description :'Tony Stark, inventeur de génie, vendeur d armes et playboy milliardaire, est kidnappé en Aghanistan. Forcé par ses ravisseurs de fabriquer une arme redoutable, il construit en secret une armure high-tech révolutionnaire qu il utilise pour s échapper Comprenant la puissance de cette armure...',
        rating: 4,
        genre : 'Action, Science Fiction',
        poster : ironman
    },
    {
        id: 3,
        name : 'Le parrain',
        description :'En 1945, à New York, les Corleone sont une des cinq familles de la mafia. Don Vito Corleone, "parrain" de cette famille, marie sa fille à un bookmaker. Sollozzo, " parrain " de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse recherche alors les commanditaires de l attentat et tue Sollozzo ...',
        rating: 3,
        genre : 'Policier, Drame',
        poster : parrain
    },
    {
        id: 4,
        name : 'Le roi lion',
        description :"Au fond de la savane africaine, tous les animaux célèbrent la naissance de Simba, leur futur roi. Les mois passent. Simba idolâtre son père, le roi Mufasa, qui prend à cœur de lui faire comprendre les enjeux de sa royale destinée. Mais tout le monde ne semble pas de cet avis. Scar, le frère de Mufasa...",
        rating: 2,
        genre : ' Aventure, Comédie musicale',
        poster : roiLion
    },
]
export default Movies