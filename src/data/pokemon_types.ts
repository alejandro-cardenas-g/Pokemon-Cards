export const pokemonTypes:IPokemonType[] = [
    {
        name: 'normal',
        color: '#dec9c9',
        icon: 'fa-solid fa-circle-dot'
    },
    {
        name: 'fighting',
        color: '#ff452b',
        icon: 'fa-solid fa-hand-fist'
    },
    {
        name: 'flying',
        color: '#abdcba',
        icon: 'fa-solid fa-feather'
    },
    {
        name: 'poison',
        color: '#1b5810',
        icon: 'fa-solid fa-virus'
    },
    {
        name: 'ground',
        color: '#584f10',
        icon: 'fa-solid fa-earth-asia'
    },
    {
        name: 'rock',
        color: '#583f10',
        icon: 'fa-solid fa-meteor'
    },
    {
        name: 'bug',
        color: '#583f10',
        icon: 'fa-solid fa-bug'
    },
    {
        name: 'ghost',
        color: '#3e3d3d',
        icon: 'fa-solid fa-ghost'
    },
    {
        name: 'steel',
        color: '#3e3d3d',
        icon: 'fa-solid fa-shield-halved'
    },
    {
        name: 'fire',
        color: '#ff0000',
        icon: 'fa-solid fa-fire'
    },
    {
        name: 'water',
        color: '#3d8fd4',
        icon: 'fa-solid fa-droplet'
    },
    {
        name: 'grass',
        color: '#88c064',
        icon: 'fa-solid fa-leaf'
    },
    {
        name: 'electric',
        color: '#b04fb6',
        icon: 'fa-solid fa-bolt'
    },
    {
        name: 'psychic',
        color: '#a95ee2',
        icon: 'fa-solid fa-brain'
    },
    {
        name: 'ice',
        color: '#216994',
        icon: 'fa-solid fa-snowflake'
    },
    {
        name: 'dragon',
        color: '#ff452b',
        icon: 'fa-solid fa-dragon'
    },
    {
        name: 'dark',
        color: '#201e20',
        icon: 'fa-solid fa-moon'
    },
    {
        name: 'fairy',
        color: '#56c6ac',
        icon: 'fa-solid fa-hat-wizard'
    },
    {
        name: 'unknown',
        color: '#cee83d',
        icon: 'fa-solid fa-circle-question'
    },
    {
        name: 'shadow',
        color: '#3e3d3d',
        icon: 'fa-solid fa-khanda'
    },
];

interface IPokemonType{
    name: string,
    color: string,
    icon: string
}