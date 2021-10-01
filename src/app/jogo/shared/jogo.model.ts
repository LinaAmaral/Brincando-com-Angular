//defindo números para as cores
export enum COLORS{
    red,
    green,
    yellow,
    blue
}

//jogo começa com 2 cores e vai aumentando em cada iteração
export const START_COUNT = 1;

// essa função serve para dar um tempo para o jogador responder ao comando do mestre
export const sleep = async time => {
    return new Promise(resolve => setTimeout(resolve,time));
};