const aulas = [

`
<div class="card">

  <img src="easy_logo_beta_0.0.1.png" alt="Easy Learn" class="logo">

  <p>
    O objetivo deste projeto é simplificar o aprendizado
    de informática para qualquer pessoa. Eu, Jorge Malta Gonçalves, trago essa proposta junto à Universidade UniRios para facilitar a compreensão do que move o mundo: a computação.
  </p>

  <p>
    Aqui, iremos abordar os seguintes temas:
  </p>

  <ul>
    <li>Computadores</li>
    <li>Processadores</li>
    <li>Placa-mãe</li>
    <li>Memória RAM</li>
    <li>GPU</li>
    <li>HD e SSD</li>
    <li>Sistemas Operacionais</li>
  </ul>
  
  <p>Vamos lá?</p>

</div>
`,

`
<div class="card">

  <h2>⚙️ Computador</h2>

  <p>
    Um computador é uma máquina capaz de receber,
    processar e armazenar informações.
  </p>

  <p>
    Seu celular também é um computador,
    pois realiza essas mesmas funções, na palma da sua mão. Ele tem processador, memória RAM, armazenamento interno... igualzinho a um computador de mesa.
  </p>

  <p>
    Diversos componentes trabalham juntos para
    que tudo funcione corretamente Vamos conhecer alguns?
  </p>

</div>
`,

`
<div class="card">

  <h2>🔳 Processador</h2>

  <p>
    O processador é considerado o cérebro do computador.
  </p>

  <p>
    É ele quem pensa em que ação executar, que decisão tomar. É como se você o pedisse um serviço e ele executasse. Pense nele como uma "Alexa" silenciosa, controladas por cliques e toques.
  </p>

</div>
`,

`
<div class="card">

  <h2>🔲 Placa-mãe</h2>

  <p>
    A placa-mãe é a peça responsável por conectar todos os componentes do computador.
  </p>

  <p>
    É nela que o processador, a memória RAM, o armazenamento e outros dispositivos são conectados.
  </p>

  <p>
    Pense nela como um ser humano. Até aqui podemos entender que a placa mãe pode ser comparada a um ser pensante, já que sua CPU (processador) é seu cérebro.
  </p>

</div>
`,

`
<div class="card">

  <h2>➖ Memória RAM</h2>

  <p>
    A memória RAM é o local onde o computador guarda temporariamente as informações que está utilizando naquele momento.
  </p>

  <p>
    Quando você abre um aplicativo, um jogo ou um navegador, os dados necessários para seu funcionamento são carregados na memória RAM.
  </p>

  <p>
    Quanto mais memória RAM um dispositivo possui, mais programas ele consegue executar ao mesmo tempo sem ficar lento.
  </p>

  <p>
    Diferente do HD ou SSD, a memória RAM apaga seu conteúdo quando o computador é desligado.
  </p>

</div>
`,
`
<div class="card">

  <h2>🖥️ GPU (Placa de Vídeo)</h2>

  <p>
    A GPU, também conhecida como placa de vídeo, é responsável por processar imagens, vídeos e gráficos.
  </p>

  <p>
    Quando você assiste a um vídeo, joga um game ou utiliza programas de edição, a GPU ajuda a exibir tudo na tela com qualidade e rapidez.
  </p>

  <p>
    Enquanto o processador cuida das tarefas gerais do computador, a GPU é especializada em trabalhar com imagens.
  </p>

  <p>
    Alguns computadores possuem uma GPU dedicada, que oferece mais desempenho para jogos, edição de vídeo e modelagem 3D.
  </p>

</div>
`,
`
<div class="card">

  <h2>💾 HD e SSD</h2>

  <p>
    O HD e o SSD são dispositivos de armazenamento. É neles que ficam guardados seus arquivos, fotos, vídeos, aplicativos e o sistema operacional.
  </p>

  <p>
    Pense no armazenamento como um grande armário onde o computador guarda tudo o que precisa manter salvo, mesmo quando está desligado.
  </p>

  <p>
    O HD (Disco Rígido) é uma tecnologia mais antiga. Ele possui partes mecânicas que giram para ler e gravar informações.
  </p>

  <p>
    O SSD é uma tecnologia mais moderna. Ele não possui partes móveis, o que o torna mais rápido, silencioso e resistente.
  </p>

  <p>
    Atualmente, a maioria dos computadores utiliza SSD, pois ele permite que o sistema e os programas iniciem muito mais rapidamente.
  </p>

</div>
`,
`
<div class="card">

  <h2>🧠 Sistemas Operacionais</h2>

  <p>
    O sistema operacional é o principal software do computador.
  </p>

  <p>
    Ele é responsável por fazer a comunicação entre o usuário e o hardware, ou seja, entre você e a máquina.
  </p>

  <p>
    Exemplos de sistemas operacionais são:
  </p>

  <ul>
    <li>Windows</li>
    <li>Linux</li>
    <li>macOS</li>
    <li>Android</li>
    <li>iOS</li>
  </ul>

  <p>
    Sem um sistema operacional, o computador não consegue funcionar de forma utilizável, pois ele organiza tudo o que acontece dentro da máquina.
  </p>

  <p>
    Ele controla arquivos, programas, memória e até os dispositivos conectados, como teclado e mouse.
  </p>

</div>
`

];
const quiz = [
  {
    pergunta: "O que é um computador?",
    alternativas: [
      "Um programa de edição",
      "Uma máquina que processa, armazena e recebe informações",
      "Um sistema operacional",
      "Um tipo de memória"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal função do processador?",
    alternativas: [
      "Armazenar arquivos",
      "Exibir imagens",
      "Executar e processar instruções",
      "Conectar a internet"
    ],
    correta: 2
  },
  {
    pergunta: "A placa-mãe serve para:",
    alternativas: [
      "Aumentar a velocidade da internet",
      "Conectar todos os componentes do computador",
      "Armazenar arquivos",
      "Rodar jogos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função da memória RAM?",
    alternativas: [
      "Armazenar dados permanentemente",
      "Executar jogos",
      "Guardar dados temporários em uso",
      "Controlar o sistema operacional"
    ],
    correta: 2
  },
  {
    pergunta: "A GPU é responsável por:",
    alternativas: [
      "Processar gráficos e imagens",
      "Guardar arquivos",
      "Conectar hardware",
      "Instalar programas"
    ],
    correta: 0
  },
  {
    pergunta: "Qual a principal diferença entre HD e SSD?",
    alternativas: [
      "Não existe diferença",
      "O SSD é mais lento",
      "O HD é mais rápido",
      "O SSD é mais rápido e moderno"
    ],
    correta: 3
  },
  {
    pergunta: "O que é um sistema operacional?",
    alternativas: [
      "Um jogo",
      "Um navegador",
      "O software que gerencia o computador",
      "Um hardware"
    ],
    correta: 2
  },
  {
    pergunta: "Qual destes é um sistema operacional?",
    alternativas: [
      "Google Chrome",
      "Windows",
      "Word",
      "Excel"
    ],
    correta: 1
  },
  {
    pergunta: "Onde ficam armazenados arquivos como fotos e vídeos?",
    alternativas: [
      "Processador",
      "RAM",
      "HD ou SSD",
      "GPU"
    ],
    correta: 2
  },
  {
    pergunta: "Qual componente é considerado o 'cérebro' do computador?",
    alternativas: [
      "Placa-mãe",
      "GPU",
      "Processador",
      "HD"
    ],
    correta: 2
  }
];

let atual = 0;
let pontos = 0;

let aulaAtual = 0;

function mostrarAula() {

  document.getElementById("conteudo").innerHTML =
    aulas[aulaAtual];

  document.getElementById("progresso").innerHTML =
    `Página ${aulaAtual + 1} de ${aulas.length}`;

}

function proximaAula() {
  if (aulaAtual < aulas.length - 1) {
    aulaAtual++;
    mostrarAula();
  }
}

function aulaAnterior() {
  if (aulaAtual > 0) {
    aulaAtual--;
    mostrarAula();
  }
}

function mostrarQuiz() {
  const q = quiz[atual];

  let html = `
    <div class="card">
      <h2>🧠 Quiz - Informática Básica</h2>
      <p><strong>${q.pergunta}</strong></p>
  `;

  q.alternativas.forEach((alt, index) => {
    html += `
      <button onclick="responder(${index})">
        ${alt}
      </button><br><br>
    `;
  });

  html += `<p>🎯 Pontos: ${pontos}</p></div>`;

  document.getElementById("conteudo").innerHTML = html;
}

function responder(resposta) {
  const q = quiz[atual];

  if (resposta === q.correta) {
    pontos++;
    alert("✔ Correto!");
  } else {
    alert("❌ Errado!");
  }

  atual++;

  if (atual < quiz.length) {
    mostrarQuiz();
  } else {
    resultadoFinal();
  }
}

function resultadoFinal() {
  document.getElementById("conteudo").innerHTML = `
    <div class="card">
      <h2>🏁 Resultado Final</h2>
      <p>Você acertou <strong>${pontos}</strong> de ${quiz.length}</p>

      <button onclick="reiniciarQuiz()">🔁 Tentar novamente</button>
    </div>
  `;
}

function reiniciarQuiz() {
  atual = 0;
  pontos = 0;
  mostrarQuiz();
}

function mostrarAula() {

  let conteudo = `
    <div class="card">
      ${aulas[aulaAtual]}
    </div>
  `;

  // Botão só na última aula
  if (aulaAtual === aulas.length - 1) {
    conteudo += `
      <div class="card" style="margin-top: 20px;">
        <h2>🎯 Pronto para o Quiz?</h2>
        <p>Você concluiu todas as aulas! Agora teste seus conhecimentos.</p>

        <button onclick="mostrarQuiz()">
          🧠 Fazer Quiz
        </button>
      </div>
    `;
  }

  document.getElementById("conteudo").innerHTML = conteudo;

  document.getElementById("progresso").innerHTML =
    `Página ${aulaAtual + 1} de ${aulas.length}`;

  const percentual = ((aulaAtual + 1) / aulas.length) * 100;

  document.getElementById("preenchimento").style.width =
    percentual + "%";

  document.getElementById("btnAnterior").disabled =
    aulaAtual === 0;

  document.getElementById("btnProximo").disabled =
    aulaAtual === aulas.length - 1;
}

  
  document.getElementById("progresso").innerHTML =
  `Página ${aulaAtual + 1} de ${aulas.length}`;


  const percentual =
    ((aulaAtual + 1) / aulas.length) * 100;

  document.getElementById("preenchimento").style.width =
    percentual + "%";

  document.getElementById("btnAnterior").disabled =
    aulaAtual === 0;

  document.getElementById("btnProximo").disabled =
    aulaAtual === aulas.length - 1;


mostrarAula();