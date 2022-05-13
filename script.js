document.querySelector("#generate").addEventListener("click", () =>{
    generate();
});

generate = () =>{
    var frases = {
    "- Walt Disney": '"A maneira de começar é parar de falar e começar a fazer."',
    "- Winston Churchill": '"O pessimista vê dificuldade em cada oportunidade. O otimista vê oportunidade em cada dificuldade."',
    "- Will Rogers": '"Não deixe o ontem ocupar muito do hoje."',
    "- Desconhecido": '"Você aprende mais com o fracasso do que com o sucesso. Não deixe que isso o impeça. O fracasso constrói o caráter."',
    "- Vince Lombardi": '"Não é se você é derrubado, é se você se levanta."',
    "- Mahatma Gandhi": '"Viva como se fosse morrer amanhã. Aprenda como se fosse viver para sempre"',
    "- Martin Luther King Jr": '"A escuridão não pode expulsar a escuridão: só a luz pode fazer isso. O ódio não pode expulsar o ódio: só o amor pode fazer isso."',
    "- Albert Einstein": '"Esforce-se não para ser um sucesso, mas sim para ter valor."',
    "- Florence Nightingale": '"Atribuo meu sucesso a isso: nunca dei ou aceitei nenhuma desculpa."',
    "- Michael Jordan": '"Perdi mais de 9.000 arremessos na minha carreira. Perdi quase 300 jogos. 26 vezes me confiaram para dar o arremesso da vitória e errei. Eu falhei várias vezes na minha vida. E é por isso que eu tenho sucesso."',
    "- Babe Ruth": '"Cada rebatida me aproxima do próximo home run."',
    "- John Lennon": '"A vida é o que acontece com você enquanto você está ocupado fazendo outros planos."',
    "- Earl Nightingale": '"Nós nos tornamos o que pensamos."',
    "- Mark Twain": '"Daqui a vinte anos você ficará mais desapontado com as coisas que você não fez do que com as que você fez, então jogue fora as linhas de bolina, navegue para longe do porto seguro, pegue os ventos alísios em suas velas. Explore, sonhe, descubra."',
    "- Charles Swindoll": '"A vida é 10% o que acontece comigo e 90% de como eu reajo a isso."',
    "- Buddah": '"A mente é tudo. O que você pensa que você se torna."',
    "- Provérbio Chinês": '"A melhor época para plantar uma árvore foi há 20 anos. A segunda melhor época é agora."',
    "- Woody Allen": '"Oitenta por cento do sucesso está aparecendo."',
    "- Steve Jobs": '"Seu tempo é limitado, então não o desperdice vivendo a vida de outra pessoa."',
    "- Vince Lombardi": '"Vencer não é tudo, mas querer vencer é."',
    "- Stephen Covey": '"Eu não sou um produto das minhas circunstâncias. Eu sou um produto das minhas decisões. "',
    "- Cristóvão Colombo": '"Você nunca pode cruzar o oceano até que você tenha a coragem de perder de vista a costa."',
    "- Maya Angelou": '"Aprendi que as pessoas vão esquecer o que você disse, as pessoas vão esquecer o que você fez, mas as pessoas nunca vão esquecer como você as fez sentir."',
    "- Jim Rohn": '"Ou você comanda o dia, ou o dia comanda você."',
    "- Henry Ford": '"Se você pensa que pode ou pensa que não pode, você está certo."',
    "- Frank Sinatra": '"A melhor vingança é o grande sucesso."',
    "- Zig Ziglar": '"As pessoas costumam dizer que a motivação não dura. Bem, nem o banho. É por isso que recomendamos diariamente."',
    "- Aristóteles": '"Só há uma maneira de evitar críticas: não faça nada, não diga nada e não seja nada"',
    "- Jesus": '"Pedi e dar-se-vos-á; procurai e achareis; batei e a porta vos será aberta."',
    "- Ralph Waldo Emerson": '"A única pessoa que você está destinado a se tornar é a pessoa que você decide ser."',
    "- Henry David Thoreau": '"Vá com confiança na direção dos seus sonhos. Viva a vida que você imaginou."',
    "- Erma Bombeck": '"Quando eu estiver diante de Deus no final da minha vida, eu esperaria que eu não tivesse um único pouco de talento e pudesse dizer, eu usei tudo o que você me deu."',
    "- Booker T. Washington": '"Poucas coisas podem ajudar mais um indivíduo do que colocar a responsabilidade sobre ele, e deixá-lo saber que você confia nele."'
    };

    //pegar todas as chaves(autores) e guaradar numa array
    var autores = Object.keys(frases);

    //pegar uma chave(autor) e guardar em "autor"
    var autor = autores[Math.floor(Math.random() * autores.length)];

    //pegar o valor(frases) que pertence ao uma chave(autor)
    var frase = frases[autor]

    document.querySelector("#frase").textContent = frase;
    document.querySelector("#autor").textContent = autor;
}