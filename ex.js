// Cairo R.
// Laura Freitas
// Braulio Portela

// A. Acessar elementos específicos de um array.
let array1 = ['Paulo', 'Fernanda', 'Fabio'];
console.log(array1[1]);

//B . Modificar cada um dos elementos de um array e imprimi-los no console.

let array2 = ['Banana', 'Maçã', 'Uva'];
array2[0] = 'Laranja';
array2[1] = 'Pera';
array2[2] = 'Morango';
console.log(array2);

// C. Adicionar elementos a um array.

let array3 = ['Roxo', 'Azul', 'Vermelho'];
array3.push('Verde', 'Amarelo');
console.log(array3);

// D. Extrair elementos de um array.

let array4 = ['Netflix', 'Disney Plus', 'HBO Max'];
console.log(array4.shift());

// E. Comparar elementos de um array com os elementos de outro.

let array5 = [10, 20, 30];
let array6 = [40, 50, 60];

if ((array5[0] && array5[1] && array5[2]) == (array6[0] && array6[1] && array6[2])) {
    console.log(true);
} else {
    console.log(false);
};

/*

**** O que esses códigos retornam? ****

Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.

1. let numbers = [22, 33, 54, 66, 72];
console.log(numbers.length);

 Resposta: Vai ser undefined, pois o número do comprimento será sempre maior que o último index de uma array.

 2. let grupoDeAmigos = [["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna", "Patán"]];
 console.log(grupoDeAmigos[1][0]);

 Resposta: Vai ser Spiderman, pois será impresso o primeiro índice da segunda array.

 3. let str = "una string qualquer";
 let grupoDeAmigos = [[45, 89, 0], ["Digital", "House", true], ["string", "123", "false", 54, true, str]];
 console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);

 Resposta: Vai ser "una string qualquer", pois será o primeiro índice da terceira array.

*/

/*
**** Array Invertido ****

Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.

1. Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
*/

function imprimirInverso(array) {
    return `${array.reverse()}`;
};

let array7 = ['Brasília', 'Belo Horizonte', 'São Paulo'];
console.log(imprimirInverso(array7));

/*
2. Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

*/

function inverterArray(array) {
    return array.slice(0).reverse();
};

let array8 = ['Rio de Janeiro', 'Campinas', 'Tocantins'];
console.log(inverterArray(array8));

/*
**** somarArray() ****

Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.

Exemplo:
somarArray([1,2,3])                // 6
somarArray([10, 3, 10, 4])     // 27
somarArray([-5,100])             // 95

*/

function somarArray(array) {

    if (array.length == 2) {
        return array[0] + array[1];
    } else if (array.length == 3) {
        return array[0] + array[1] + array[2];
    } else if (array.length == 4) {
        return array[0] + array[1] + array[2] + array[3];
    };
};

let array9 = [1, 2, 3];
let array10 = [10, 3, 10, 4];
let array11 = [-5, 100];

console.log(somarArray(array9));
console.log(somarArray(array10));
console.log(somarArray(array11));

/*
**** Simulação Array.join() ****

Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original.

Por exemplo:
join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".
*/

function join(array) {
    return array.join('');
};

let array12 = ['o', 'l', 'á'];
let array13 = ['t', 'c', 'h', 'a', 'u'];

console.log(join(array12));
console.log(join(array13));

/*
**** Coleções de Filmes (e mais…) ****
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
*/

/*
1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
    "star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.
*/

let filmesSeries = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];

/*
2. Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase().
*/

function maiuscula(array) {
    return array.map(array => array.toUpperCase());
};

console.log(maiuscula(filmesSeries));

/*
3. Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
    "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.
*/

let filmesAnimacao = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

function joinFilmes(array1, array2) {
    return array1.concat(array2);
};

/*
4. Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.
*/
let ultimoFilmeAnimacao = filmesAnimacao.pop();
let todosFilmes = joinFilmes(filmesSeries, filmesAnimacao);

console.log(maiuscula(todosFilmes));

/*
5. Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
    const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções, a fim de verificar seu correto funcionamento.
*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparaClassificacao() {
    if (
        (asiaScores[0] + asiaScores[1] + asiaScores[2] + asiaScores[3] + asiaScores[4] + asiaScores[5] + asiaScores[6] + asiaScores[7] + asiaScores[8])
        ==
        (euroScores[0] + euroScores[1] + euroScores[2] + euroScores[3] + euroScores[4] + euroScores[5] + euroScores[6] + euroScores[7] + euroScores[8])
    ) {
        return console.log('Classificações iguais!');
    } else {
        return console.log('Classificações diferentes!');
    };
};

comparaClassificacao();