const questionBank = {
 facil: [
  {category:'REGRAS',q:'Quantos jogadores de cada equipe começam uma partida de futebol em campo?',o:['9','10','11','12'],a:2,why:'Uma equipe começa com 11 jogadores, incluindo o goleiro.'},
  {category:'REGRAS',q:'Qual cartão normalmente indica a expulsão de um jogador?',o:['Azul','Verde','Amarelo','Vermelho'],a:3,why:'O cartão vermelho significa expulsão.'},
  {category:'COPA DO MUNDO',q:'Qual seleção venceu a Copa do Mundo masculina de 2022?',o:['França','Argentina','Brasil','Croácia'],a:1,why:'A Argentina venceu a França na final, nos pênaltis.'},
  {category:'FUTEBOL BRASILEIRO',q:'Qual destes clubes é conhecido como Timão?',o:['Palmeiras','Santos','Corinthians','Grêmio'],a:2,why:'Timão é um dos apelidos populares do Sport Club Corinthians Paulista.'},
  {category:'REGRAS',q:'Qual jogador pode usar as mãos dentro da própria área, respeitando as regras?',o:['Zagueiro','Goleiro','Volante','Atacante'],a:1,why:'O goleiro pode usar as mãos dentro da própria área penal, com restrições previstas nas regras.'},
  {category:'COPA DO MUNDO',q:'Em qual país aconteceu a Copa do Mundo de 2014?',o:['África do Sul','Alemanha','Brasil','Rússia'],a:2,why:'O Brasil sediou a Copa do Mundo de 2014.'},
  {category:'REGRAS',q:'Quanto dura o tempo regulamentar de uma partida adulta, sem acréscimos?',o:['Dois tempos de 40 minutos','Dois tempos de 45 minutos','Três tempos de 30 minutos','Dois tempos de 50 minutos'],a:1,why:'O tempo normal é dividido em dois períodos de 45 minutos.'},
  {category:'POSIÇÕES',q:'Qual é a principal função do goleiro?',o:['Cobrar todos os escanteios','Impedir que a bola entre no gol','Atuar apenas no ataque','Marcar o árbitro'],a:1,why:'O goleiro protege a meta e tenta impedir gols.'},
  {category:'FUTEBOL INTERNACIONAL',q:'Qual seleção é conhecida como Azzurra?',o:['Espanha','Itália','Portugal','Holanda'],a:1,why:'A Azzurra é a seleção italiana, referência à cor azul tradicional.'},
  {category:'FUNDAMENTOS',q:'O que é um hat-trick no futebol?',o:['Três gols do mesmo jogador na partida','Três escanteios seguidos','Três cartões amarelos','Três substituições'],a:0,why:'Hat-trick é quando um jogador marca três gols no mesmo jogo.'},
  {category:'REGRAS',q:'De onde é cobrado um pênalti?',o:['Da marca a 11 metros do gol','Do círculo central','Da linha lateral','Da meia-lua'],a:0,why:'A marca do pênalti fica a 11 metros da linha de gol.'},
  {category:'FUNDAMENTOS',q:'Qual fundamento é usado para reiniciar o jogo quando a bola sai pela linha lateral?',o:['Tiro de meta','Arremesso lateral','Escanteio','Bola ao chão sempre'],a:1,why:'O jogo recomeça com arremesso lateral para a equipe adversária à que tocou por último.'},
  {category:'REGRAS',q:'Quantos pontos uma equipe recebe por uma vitória em uma liga que usa o sistema padrão?',o:['1','2','3','4'],a:2,why:'No sistema padrão, vitória vale três pontos.'},
  {category:'CAMPO',q:'Como se chama a área onde fica a marca do pênalti?',o:['Área penal','Círculo central','Área técnica','Pequena área apenas'],a:0,why:'A marca do pênalti fica dentro da área penal.'},
  {category:'FUTEBOL BRASILEIRO',q:'Qual destes clubes tem o apelido de Peixe?',o:['Santos','Grêmio','Bahia','Botafogo'],a:0,why:'Santos é conhecido popularmente como Peixe.'},
  {category:'COPA DO MUNDO',q:'Quantas seleções participaram da Copa do Mundo masculina de 2022?',o:['24','28','32','36'],a:2,why:'O torneio de 2022 contou com 32 seleções.'},
  {category:'POSIÇÕES',q:'Qual posição costuma atuar pelas laterais da defesa?',o:['Lateral','Centroavante','Meia-atacante','Goleiro reserva'],a:0,why:'Os laterais atuam nas faixas laterais do sistema defensivo.'},
  {category:'FUTEBOL INTERNACIONAL',q:'Qual país venceu a Copa do Mundo masculina de 2018?',o:['Croácia','Alemanha','França','Bélgica'],a:2,why:'A França venceu a Croácia na final de 2018.'},
  {category:'FUNDAMENTOS',q:'O que é um passe no futebol?',o:['Uma forma de passar a bola a um companheiro','Um tipo de cartão','Uma cobrança de pênalti','Um tipo de impedimento'],a:0,why:'O passe procura entregar a bola a um companheiro de equipe.'},
  {category:'REGRAS',q:'Quem aplica as regras durante a partida dentro de campo?',o:['O treinador','O árbitro','O capitão visitante','O narrador'],a:1,why:'O árbitro dirige a partida e aplica as regras do jogo.'}
 ],
 medio: [
  {category:'COPA DO MUNDO',q:'Quem marcou o gol do título da Espanha na final da Copa de 2010?',o:['David Villa','Xavi Hernández','Andrés Iniesta','Fernando Torres'],a:2,why:'Iniesta marcou na prorrogação contra a Holanda, garantindo o título espanhol.'},
  {category:'CHAMPIONS LEAGUE',q:'Qual clube venceu a primeira edição da UEFA Champions League com esse nome, na temporada 1992–93?',o:['AC Milan','Barcelona','Olympique de Marseille','Ajax'],a:2,why:'O Olympique de Marseille venceu o Milan na final de 1993.'},
  {category:'COPA DO MUNDO',q:'Qual seleção eliminou o Brasil na Copa do Mundo de 2006?',o:['França','Itália','Alemanha','Portugal'],a:0,why:'A França venceu o Brasil por 1 a 0 nas quartas de final, com gol de Thierry Henry.'},
  {category:'FUTEBOL BRASILEIRO',q:'Qual clube venceu a primeira edição do Campeonato Brasileiro, em 1971?',o:['Palmeiras','Atlético Mineiro','São Paulo','Internacional'],a:1,why:'O Atlético Mineiro conquistou o Campeonato Nacional de Clubes de 1971.'},
  {category:'COPA DO MUNDO',q:'Quem era o capitão da seleção brasileira campeã da Copa do Mundo de 2002?',o:['Rivaldo','Cafu','Ronaldo','Roberto Carlos'],a:1,why:'Cafu foi o capitão do Brasil no pentacampeonato de 2002.'},
  {category:'FUTEBOL EUROPEU',q:'Qual clube é conhecido como “La Vecchia Signora”?',o:['Inter de Milão','AS Roma','Juventus','Napoli'],a:2,why:'La Vecchia Signora, ou “A Velha Senhora”, é o apelido da Juventus.'},
  {category:'COPA DO MUNDO',q:'Em qual Copa do Mundo a seleção brasileira conquistou seu primeiro título?',o:['1950','1954','1958','1962'],a:2,why:'O Brasil conquistou sua primeira Copa em 1958, na Suécia.'},
  {category:'CHAMPIONS LEAGUE',q:'Qual time venceu a final da Champions League de 2005 após estar perdendo por 3 a 0 no intervalo?',o:['Liverpool','Manchester United','Chelsea','Real Madrid'],a:0,why:'O Liverpool empatou com o Milan e venceu nos pênaltis na final conhecida como Milagre de Istambul.'},
  {category:'FUTEBOL BRASILEIRO',q:'Qual destes clubes tem como mascote tradicional o Mosqueteiro?',o:['Corinthians','Botafogo','Fluminense','Vasco da Gama'],a:0,why:'O Mosqueteiro é um dos mascotes tradicionais do Corinthians.'},
  {category:'REGRAS',q:'O que caracteriza a regra do impedimento, de forma geral?',o:['Receber a bola no próprio campo','Estar em posição irregular e participar da jogada no momento do passe do companheiro','Chutar a bola após o apito','Ficar atrás do goleiro em qualquer situação'],a:1,why:'A posição de impedimento é avaliada no momento em que um companheiro joga ou toca na bola, e a infração depende de participação ativa.'},
  {category:'COPA DO MUNDO',q:'Qual seleção perdeu a final da Copa do Mundo masculina de 1998?',o:['Brasil','Itália','Argentina','Alemanha'],a:0,why:'A França venceu o Brasil por 3 a 0 na final de 1998.'},
  {category:'CHAMPIONS LEAGUE',q:'Qual clube conquistou a Champions League em 2012 ao vencer o Bayern nos pênaltis?',o:['Chelsea','Barcelona','Real Madrid','Borussia Dortmund'],a:0,why:'O Chelsea venceu o Bayern na decisão disputada em Munique.'},
  {category:'FUTEBOL BRASILEIRO',q:'Qual clube venceu a Libertadores de 2019?',o:['River Plate','Flamengo','Palmeiras','Boca Juniors'],a:1,why:'O Flamengo venceu o River Plate por 2 a 1 na final de 2019.'},
  {category:'COPA DO MUNDO',q:'Em qual país foi disputada a Copa do Mundo masculina de 2010?',o:['Alemanha','África do Sul','Japão','México'],a:1,why:'A África do Sul foi sede do Mundial de 2010.'},
  {category:'FUTEBOL EUROPEU',q:'Qual clube italiano manda seus jogos no estádio San Siro junto com o Milan?',o:['Napoli','Inter de Milão','Lazio','Juventus'],a:1,why:'Inter e Milan compartilham o estádio San Siro, também chamado Giuseppe Meazza.'},
  {category:'COPA DO MUNDO',q:'Quem venceu a Bola de Ouro da Copa do Mundo masculina de 2014?',o:['Thomas Müller','Lionel Messi','James Rodríguez','Arjen Robben'],a:1,why:'Lionel Messi recebeu o prêmio de melhor jogador do torneio de 2014.'},
  {category:'FUTEBOL BRASILEIRO',q:'Qual equipe venceu a Copa do Brasil de 2022?',o:['Flamengo','Corinthians','São Paulo','Athletico Paranaense'],a:0,why:'O Flamengo venceu o Corinthians na decisão por pênaltis em 2022.'},
  {category:'CHAMPIONS LEAGUE',q:'Qual treinador comandou o Real Madrid na conquista de três Champions seguidas entre 2016 e 2018?',o:['José Mourinho','Zinédine Zidane','Carlo Ancelotti','Rafael Benítez'],a:1,why:'Zinédine Zidane dirigiu o Real Madrid nas conquistas de 2016, 2017 e 2018.'},
  {category:'FUTEBOL INTERNACIONAL',q:'Qual seleção venceu a Eurocopa de 2016?',o:['França','Portugal','Alemanha','Itália'],a:1,why:'Portugal venceu a França na final da Euro 2016.'},
  {category:'HISTÓRIA',q:'Qual país sediou a Copa do Mundo masculina de 2002 junto com a Coreia do Sul?',o:['China','Japão','Austrália','Tailândia'],a:1,why:'Japão e Coreia do Sul organizaram juntos o Mundial de 2002.'}
 ],
 dificil: [
  {category:'COPA DO MUNDO',q:'Qual seleção foi a primeira a vencer três títulos da Copa do Mundo masculina?',o:['Alemanha','Itália','Brasil','Argentina'],a:2,why:'O Brasil chegou ao terceiro título em 1970, no México.'},
  {category:'HISTÓRIA',q:'Qual clube venceu a primeira edição da Taça dos Clubes Campeões Europeus, em 1955–56?',o:['Real Madrid','Benfica','Stade de Reims','Milan'],a:0,why:'O Real Madrid venceu o Stade de Reims na final de 1956 e conquistou a primeira edição.'},
  {category:'COPA DO MUNDO',q:'Quem marcou o gol de ouro que decidiu a final da Euro 2000?',o:['Thierry Henry','David Trezeguet','Zinedine Zidane','Sylvain Wiltord'],a:1,why:'David Trezeguet marcou o gol de ouro da França contra a Itália na final da Euro 2000.'},
  {category:'FUTEBOL BRASILEIRO',q:'Qual equipe venceu a Copa Libertadores de 2013?',o:['Atlético Mineiro','Corinthians','Fluminense','Grêmio'],a:0,why:'O Atlético Mineiro venceu o Olimpia na decisão por pênaltis em 2013.'},
  {category:'COPA DO MUNDO',q:'Qual goleiro recebeu o prêmio Yashin na Copa do Mundo de 1998?',o:['Cláudio Taffarel','Fabien Barthez','José Luis Chilavert','Peter Schmeichel'],a:1,why:'Fabien Barthez foi reconhecido como o melhor goleiro do torneio de 1998.'},
  {category:'CHAMPIONS LEAGUE',q:'Qual equipe derrotou o Barcelona na semifinal da Champions League de 2009–10 e depois conquistou o título?',o:['Bayern de Munique','Inter de Milão','Manchester United','Chelsea'],a:1,why:'A Inter de José Mourinho eliminou o Barcelona e venceu a final contra o Bayern.'},
  {category:'HISTÓRIA',q:'Qual país sediou a primeira Copa do Mundo feminina da FIFA, em 1991?',o:['Suécia','China','Estados Unidos','Noruega'],a:1,why:'A primeira Copa do Mundo feminina foi realizada na China em 1991; os Estados Unidos foram campeões.'},
  {category:'COPA DO MUNDO',q:'Quem marcou o gol de empate do Brasil na final da Copa do Mundo de 1962?',o:['Pelé','Vavá','Mário Zagallo','Amarildo'],a:3,why:'Amarildo empatou a final contra a Tchecoslováquia aos 17 minutos; o Brasil venceu por 3 a 1.'},
  {category:'FUTEBOL EUROPEU',q:'Qual clube venceu a Recopa Europeia de 1988–89?',o:['Barcelona','Sampdoria','Ajax','Milan'],a:0,why:'O Barcelona venceu a Sampdoria por 2 a 0 na final da Recopa Europeia de 1989.'},
  {category:'COPA DO MUNDO',q:'Quem foi o técnico da seleção italiana campeã da Copa do Mundo de 2006?',o:['Marcello Lippi','Fabio Capello','Giovanni Trapattoni','Cesare Maldini'],a:0,why:'Marcello Lippi comandou a Itália na conquista de 2006.'}
,
  {category:'COPA DO MUNDO',q:'Qual jogador marcou cinco gols em uma única partida na Copa do Mundo de 1994?',o:['Romário','Oleg Salenko','Hristo Stoichkov','Roberto Baggio'],a:1,why:'Oleg Salenko marcou cinco vezes pela Rússia contra Camarões em 1994.'},
  {category:'HISTÓRIA',q:'Qual seleção venceu a primeira edição da Eurocopa, em 1960?',o:['União Soviética','Iugoslávia','Espanha','França'],a:0,why:'A União Soviética venceu a Iugoslávia na final de 1960.'},
  {category:'COPA DO MUNDO',q:'Qual seleção eliminou a Inglaterra nas quartas de final da Copa de 1998?',o:['Brasil','Argentina','Holanda','Croácia'],a:1,why:'A Argentina avançou após empate por 2 a 2 e vitória nos pênaltis.'},
  {category:'CHAMPIONS LEAGUE',q:'Qual clube venceu a Champions League de 2004 sob o comando de José Mourinho?',o:['Porto','Chelsea','Inter de Milão','Liverpool'],a:0,why:'O Porto venceu o Monaco por 3 a 0 na final de 2004.'},
  {category:'FUTEBOL BRASILEIRO',q:'Qual clube foi o primeiro brasileiro a conquistar a Copa Libertadores?',o:['Santos','São Paulo','Palmeiras','Grêmio'],a:0,why:'O Santos venceu a Libertadores de 1962, tornando-se o primeiro campeão brasileiro do torneio.'},
  {category:'COPA DO MUNDO',q:'Quem marcou o gol da vitória da Alemanha Ocidental na final da Copa de 1990?',o:['Jürgen Klinsmann','Andreas Brehme','Lothar Matthäus','Rudi Völler'],a:1,why:'Andreas Brehme converteu o pênalti que decidiu a final contra a Argentina.'},
  {category:'FUTEBOL EUROPEU',q:'Qual clube venceu a primeira edição da Premier League, na temporada 1992–93?',o:['Arsenal','Blackburn Rovers','Manchester United','Leeds United'],a:2,why:'O Manchester United foi o campeão da primeira temporada da Premier League.'},
  {category:'COPA DO MUNDO',q:'Qual seleção terminou em terceiro lugar na Copa do Mundo masculina de 2006?',o:['Portugal','Alemanha','França','Brasil'],a:1,why:'A Alemanha venceu Portugal por 3 a 1 na disputa pelo terceiro lugar.'},
  {category:'HISTÓRIA',q:'Qual país venceu a Copa América de 2015?',o:['Argentina','Brasil','Chile','Uruguai'],a:2,why:'O Chile conquistou seu primeiro título da Copa América em 2015, nos pênaltis contra a Argentina.'},
  {category:'CHAMPIONS LEAGUE',q:'Qual equipe venceu o Barcelona na final da Champions League de 1994?',o:['Milan','Ajax','Manchester United','Juventus'],a:0,why:'O Milan venceu o Barcelona por 4 a 0 na final de 1994.'}
 ]
};
const levels={facil:{name:'Iniciante',desc:'Nível Iniciante: regras e conhecimentos gerais para aquecer.',kicker:'NÍVEL INICIANTE'},medio:{name:'Avançado',desc:'Nível Avançado: perguntas de história, competições e clubes.',kicker:'NÍVEL AVANÇADO'},dificil:{name:'Expert',desc:'Nível Expert: fatos históricos e perguntas para quem acompanha futebol de perto.',kicker:'NÍVEL EXPERT'}};
const $=id=>document.getElementById(id);let level='medio',player='',questions=[],index=0,score=0,chosen=null,locked=false;
const home=$('homeScreen'),quiz=$('quizScreen'),result=$('resultScreen');
document.querySelectorAll('.difficulty').forEach(btn=>btn.addEventListener('click',()=>{level=btn.dataset.level;document.querySelectorAll('.difficulty').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));$('levelDescription').textContent=levels[level].desc;}));
$('startButton').addEventListener('click',startGame);$('playerName').addEventListener('keydown',e=>{if(e.key==='Enter')startGame()});$('nextButton').addEventListener('click',handleNext);$('backButton').addEventListener('click',()=>{if(confirm('Quer sair da partida? Seu progresso atual será perdido.'))showScreen(home)});$('playAgainButton').addEventListener('click',()=>{ $('playerName').value='';showScreen(home);$('playerName').focus()});
function showScreen(target){[home,quiz,result].forEach(s=>s.hidden=true);target.hidden=false;window.scrollTo({top:0,behavior:'smooth'});}
function pickFreshQuestions(selectedLevel,count){const bank=questionBank[selectedLevel];let seen=[];try{seen=JSON.parse(localStorage.getItem('bolaNaRedeQuizSeen_'+selectedLevel)||'[]');}catch(e){seen=[];}let fresh=bank.filter(q=>!seen.includes(q.q));if(fresh.length<count){seen=[];fresh=bank.slice();}fresh.sort(()=>Math.random()-.5);const chosenQuestions=fresh.slice(0,Math.min(count,fresh.length));const updated=[...seen,...chosenQuestions.map(q=>q.q)];try{localStorage.setItem('bolaNaRedeQuizSeen_'+selectedLevel,JSON.stringify(updated));}catch(e){}return chosenQuestions;}
function startGame(){const value=$('playerName').value.trim();if(!value){$('nameError').hidden=false;$('playerName').focus();return;}$('nameError').hidden=true;player=value;questions=pickFreshQuestions(level,10);index=0;score=0;showScreen(quiz);$('quizKicker').textContent=levels[level].kicker;$('welcomePlayer').textContent=`Bora jogar, ${player}!`;renderQuestion();}
function renderQuestion(){chosen=null;locked=false;const q=questions[index];$('score').textContent=score;$('questionCount').textContent=`PERGUNTA ${index+1} DE ${questions.length}`;$('progressPercent').textContent=`${Math.round(((index+1)/questions.length)*100)}%`;$('progressFill').style.width=`${((index+1)/questions.length)*100}%`;$('progressBar').setAttribute('aria-valuenow',index+1);$('questionCategory').textContent=q.category;$('questionText').textContent=q.q;$('feedback').hidden=true;$('nextButton').disabled=true;$('nextButton').innerHTML='CONFIRMAR RESPOSTA <span class="arrow">→</span>';$('options').innerHTML='';q.o.forEach((text,i)=>{const b=document.createElement('button');b.type='button';b.className='option';b.innerHTML=`<span class="option-letter">${String.fromCharCode(65+i)}</span><span class="option-text"></span>`;b.querySelector('.option-text').textContent=text;b.addEventListener('click',()=>selectOption(i));$('options').appendChild(b);});}
function selectOption(i){if(locked)return;chosen=i;document.querySelectorAll('.option').forEach((b,n)=>{b.style.borderColor=n===i?'var(--green)':'';b.style.background=n===i?'#173525':'';b.setAttribute('aria-pressed',String(n===i));});$('nextButton').disabled=false;$('nextButton').innerHTML='VERIFICAR RESPOSTA <span class="arrow">→</span>';}
function handleNext(){if(locked){advance();return;}if(chosen===null)return;locked=true;const q=questions[index],correct=chosen===q.a;if(correct)score++;document.querySelectorAll('.option').forEach((b,n)=>{b.disabled=true;b.style.borderColor='';b.style.background='';if(n===q.a)b.classList.add('correct');else if(n===chosen)b.classList.add('wrong');});const fb=$('feedback');fb.hidden=false;fb.className=`feedback ${correct?'good':'bad'}`;fb.innerHTML='';const strong=document.createElement('strong');strong.textContent=correct?'RESPOSTA CERTA! +1 PONTO':'NÃO FOI DESSA VEZ';const p=document.createElement('p');p.textContent=correct?q.why:`Resposta correta: ${q.o[q.a]}. ${q.why}`;fb.append(strong,p);$('score').textContent=score;$('nextButton').textContent=index===questions.length-1?'VER RESULTADO FINAL →':'PRÓXIMA PERGUNTA →';$('nextButton').disabled=false;}
function advance(){if(!locked)return;if(index<questions.length-1){index++;renderQuestion();}else finishGame();}
function finishGame(){showScreen(result);$('finalScore').textContent=score;$('hits').textContent=score;$('misses').textContent=questions.length-score;$('accuracy').textContent=`${Math.round(score/questions.length*100)}%`;let title,copy,medal;if(score>=9){title='LENDÁRIO, '+player+'!';copy='Atuação de craque. Seu conhecimento de futebol está em outro nível.';medal='🏆';}else if(score>=7){title='QUE PARTIDA, '+player+'!';copy='Você mostrou que conhece muito do jogo. Falta pouco para a perfeição.';medal='🥇';}else if(score>=5){title='BOM JOGO, '+player+'!';copy='Você tem uma boa base. Continue treinando e volte para superar sua marca.';medal='⚽';}else{title='É SÓ O AQUECIMENTO, '+player+'!';copy='Todo craque aprende com cada partida. Tente outra vez e aumente sua pontuação.';medal='💪';}$('resultTitle').textContent=title;$('resultCopy').textContent=`Dificuldade: ${levels[level].name}. Você terminou o desafio Bola na Rede.`;$('resultMedal').textContent=medal;}

// Navegação dos módulos
const viewMap={noticias:$('newsView'),cara:$('caraView'),jogador:$('jogadorView'),quiz:$('quizView')};
function openView(name){Object.entries(viewMap).forEach(([key,node])=>{node.hidden=key!==name;node.classList.toggle('active-view',key===name);});document.querySelectorAll('.nav-link').forEach(btn=>btn.classList.toggle('active',btn.dataset.view===name));window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('.nav-link').forEach(btn=>btn.addEventListener('click',()=>{openView(btn.dataset.view);if(btn.dataset.view==='cara'&&typeof drawRandomFaceoff==='function')drawRandomFaceoff();}));
document.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>{openView(btn.dataset.go);if(btn.dataset.go==='cara'&&typeof drawRandomFaceoff==='function')drawRandomFaceoff();}));

// Notícias: por padrão, exibe conteúdo demonstrativo. Uma API real deve ser ligada por backend seguro.
const teamSelect=$('favoriteTeam');
let newsRefreshTimer=null;
function getFavoriteTeam(){return teamSelect.value==='Outro'?'futebol':teamSelect.value;}
function formatNewsDate(value){if(!value)return 'Data não informada';const date=new Date(value);if(Number.isNaN(date.getTime()))return 'Data não informada';return date.toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'});}
function showNewsMessage(message){$('newsStatus').textContent=message;}
function renderNewsArticles(articles,team){
 const list=$('newsList');list.replaceChildren();
 if(!articles.length){showNewsMessage(`Nenhuma notícia encontrada para ${team}. Tente atualizar mais tarde ou escolha outro clube.`);$('newsFeatureTitle').textContent=`Sem notícias recentes para ${team}`;$('newsFeatureBody').textContent='A GNews não retornou matérias para esta pesquisa. Você pode tentar novamente.';$('newsFeatureLink').href='https://gnews.io/';$('newsFeatureLink').textContent='Conhecer GNews ↗';return;}
 articles.forEach((article,index)=>{
  const item=document.createElement('article');item.className='news-item';
  const number=document.createElement('span');number.className='news-number';number.textContent=String(index+1).padStart(2,'0');
  const content=document.createElement('div');const title=document.createElement('b');title.textContent=article.title||'Notícia sem título';
  const description=document.createElement('p');description.textContent=article.description||'Abra a matéria para ler mais detalhes.';
  const meta=document.createElement('small');meta.textContent=`${article.source||'Fonte'} • ${formatNewsDate(article.publishedAt)}`;
  const link=document.createElement('a');link.className='text-link';link.href=article.url||'#';link.target='_blank';link.rel='noopener noreferrer';link.textContent='Ler matéria ↗';
  content.append(title,description,meta,document.createElement('br'),link);item.append(number,content);list.append(item);
 });
 const first=articles[0];$('newsFeatureTitle').textContent=first.title||`Notícias de ${team}`;$('newsFeatureBody').textContent=first.description||`Veja a matéria publicada por ${first.source||'esta fonte'}.`;$('newsFeatureLink').href=first.url||'https://gnews.io/';$('newsFeatureLink').textContent='Ler notícia original ↗';
 const count=articles.length;showNewsMessage(`${count} notícia(s) encontrada(s) para ${team}. Última consulta: ${new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}.`);
}
async function loadTeamNews({silent=false}={}){
 const team=getFavoriteTeam();const button=$('loadNewsButton');if(!silent){button.disabled=true;button.textContent='BUSCANDO NOTÍCIAS...';showNewsMessage(`Buscando notícias sobre ${team} na GNews...`);}
 try{
  const response=await fetch(`/api/news?team=${encodeURIComponent(team)}`);
  const data=await response.json();if(!response.ok)throw new Error(data.error||'Não foi possível consultar a GNews.');
  renderNewsArticles(data.articles||[],team);
 }catch(error){showNewsMessage(error.message.includes('Failed to fetch')?'Não foi possível acessar o servidor. Inicie o app com npm start e configure a chave GNews no arquivo .env.':error.message);}
 finally{button.disabled=false;button.textContent='ATUALIZAR NOTÍCIAS';}
}
try{teamSelect.value=localStorage.getItem('bolaNaRedeFavoriteTeam')||'Flamengo';}catch(e){}
teamSelect.addEventListener('change',()=>{try{localStorage.setItem('bolaNaRedeFavoriteTeam',teamSelect.value);}catch(e){}loadTeamNews();});
$('loadNewsButton').addEventListener('click',()=>loadTeamNews());
loadTeamNews();
if(newsRefreshTimer)clearInterval(newsRefreshTimer);
newsRefreshTimer=setInterval(()=>loadTeamNews({silent:true}),30*60*1000);

// Cara a cara: elenco ampliado, duelo aleatório e sistema de campeão.
// Os atributos são ilustrativos para entretenimento e não são estatísticas oficiais.
const playersCompare={
 messi:{name:'Lionel Messi',emoji:'🐐',attrs:{Finalização:94,Drible:98,Visão:99,Velocidade:83,Força:68,Técnica:99}},
 ronaldo:{name:'Cristiano Ronaldo',emoji:'🤖',attrs:{Finalização:98,Drible:90,Visão:85,Velocidade:91,Força:88,Técnica:91}},
 mbappe:{name:'Kylian Mbappé',emoji:'🐢',attrs:{Finalização:93,Drible:95,Visão:86,Velocidade:99,Força:82,Técnica:92}},
 vini:{name:'Vinícius Júnior',emoji:'🕺',attrs:{Finalização:89,Drible:97,Visão:86,Velocidade:98,Força:78,Técnica:94}},
 haaland:{name:'Erling Haaland',emoji:'👹',attrs:{Finalização:97,Drible:79,Visão:75,Velocidade:89,Força:96,Técnica:82}},
 ney:{name:'Neymar Jr.',emoji:'🎩',attrs:{Finalização:89,Drible:97,Visão:92,Velocidade:88,Força:70,Técnica:98}},
 salah:{name:'Mohamed Salah',emoji:'👑',attrs:{Finalização:92,Drible:91,Visão:86,Velocidade:91,Força:78,Técnica:91}},
 debruyne:{name:'Kevin De Bruyne',emoji:'🪄',attrs:{Finalização:88,Drible:87,Visão:98,Velocidade:76,Força:78,Técnica:96}},
 bellingham:{name:'Jude Bellingham',emoji:'⭐',attrs:{Finalização:88,Drible:90,Visão:90,Velocidade:83,Força:86,Técnica:91}},
 yamal:{name:'Lamine Yamal',emoji:'🌟',attrs:{Finalização:84,Drible:94,Visão:88,Velocidade:91,Força:65,Técnica:93}},
 lewandowski:{name:'Robert Lewandowski',emoji:'🎯',attrs:{Finalização:96,Drible:85,Visão:82,Velocidade:75,Força:87,Técnica:90}},
 kane:{name:'Harry Kane',emoji:'🦁',attrs:{Finalização:96,Drible:84,Visão:91,Velocidade:70,Força:86,Técnica:91}},
 rodri:{name:'Rodri',emoji:'🧠',attrs:{Finalização:78,Drible:82,Visão:91,Velocidade:65,Força:88,Técnica:91}},
 modric:{name:'Luka Modrić',emoji:'🎼',attrs:{Finalização:78,Drible:90,Visão:96,Velocidade:72,Força:65,Técnica:96}},
 son:{name:'Son Heung-min',emoji:'⚡',attrs:{Finalização:90,Drible:88,Visão:82,Velocidade:90,Força:75,Técnica:89}},
 saka:{name:'Bukayo Saka',emoji:'🏹',attrs:{Finalização:87,Drible:91,Visão:85,Velocidade:88,Força:72,Técnica:90}},
 foden:{name:'Phil Foden',emoji:'🎨',attrs:{Finalização:87,Drible:92,Visão:88,Velocidade:85,Força:68,Técnica:92}},
 griezmann:{name:'Antoine Griezmann',emoji:'🧩',attrs:{Finalização:88,Drible:88,Visão:91,Velocidade:79,Força:72,Técnica:91}},
 lautaro:{name:'Lautaro Martínez',emoji:'🐂',attrs:{Finalização:91,Drible:86,Visão:78,Velocidade:84,Força:83,Técnica:87}},
 dybala:{name:'Paulo Dybala',emoji:'✨',attrs:{Finalização:87,Drible:91,Visão:89,Velocidade:80,Força:67,Técnica:93}},
 pedri:{name:'Pedri',emoji:'🧭',attrs:{Finalização:75,Drible:90,Visão:93,Velocidade:78,Força:67,Técnica:93}},
 raphinha:{name:'Raphinha',emoji:'🪽',attrs:{Finalização:86,Drible:89,Visão:83,Velocidade:88,Força:74,Técnica:88}},
 endrick:{name:'Endrick',emoji:'💎',attrs:{Finalização:83,Drible:84,Visão:72,Velocidade:86,Força:78,Técnica:82}},
 bruno:{name:'Bruno Fernandes',emoji:'🎯',attrs:{Finalização:86,Drible:85,Visão:94,Velocidade:73,Força:75,Técnica:91}},
 vanDijk:{name:'Virgil van Dijk',emoji:'🧱',attrs:{Finalização:60,Drible:70,Visão:78,Velocidade:76,Força:94,Técnica:78}},
 alisson:{name:'Alisson Becker',emoji:'🧤',attrs:{Finalização:25,Drible:45,Visão:70,Velocidade:55,Força:86,Técnica:68}},
 hakimi:{name:'Achraf Hakimi',emoji:'🚀',attrs:{Finalização:78,Drible:86,Visão:82,Velocidade:96,Força:79,Técnica:84}},
 kimmich:{name:'Joshua Kimmich',emoji:'🧭',attrs:{Finalização:75,Drible:83,Visão:91,Velocidade:70,Força:78,Técnica:90}},
 valverde:{name:'Federico Valverde',emoji:'🔋',attrs:{Finalização:82,Drible:84,Visão:85,Velocidade:91,Força:88,Técnica:86}},
 bernardo:{name:'Bernardo Silva',emoji:'🪄',attrs:{Finalização:82,Drible:93,Visão:91,Velocidade:78,Força:68,Técnica:94}}
};
// Garante que o sorteio possa usar todo o elenco, sem depender das opções iniciais do HTML.
function populateFaceoffSelects(){['playerA','playerB'].forEach(id=>{const select=$(id);select.innerHTML=Object.entries(playersCompare).map(([key,p])=>`<option value="${key}">${p.name}</option>`).join('');});}
populateFaceoffSelects();
const faceoffScoreStorageKey='bolaNaRedeFaceoffScoresV1';
function emptyFaceoffScores(){return Object.fromEntries(Object.keys(playersCompare).map(key=>[key,0]));}
function loadFaceoffScores(){
 const scores=emptyFaceoffScores();
 try{const saved=JSON.parse(localStorage.getItem(faceoffScoreStorageKey)||'{}');Object.keys(scores).forEach(key=>{const value=Number(saved[key]);scores[key]=Number.isFinite(value)&&value>=0?Math.floor(value):0;});}catch(error){}
 return scores;
}
let faceoffScores=loadFaceoffScores();
let selectedFaceoffChoice='';
function saveFaceoffScores(){try{localStorage.setItem(faceoffScoreStorageKey,JSON.stringify(faceoffScores));}catch(error){$('faceoffChoiceResult').textContent='A escolha foi registrada, mas o navegador não permitiu salvar o placar permanentemente.';}}
function renderFaceoffScoreboard(){
 const keys=Object.keys(playersCompare);
 const sorted=[...keys].sort((a,b)=>faceoffScores[b]-faceoffScores[a]||keys.indexOf(a)-keys.indexOf(b));
 const leaderScore=Math.max(...Object.values(faceoffScores));
 $('faceoffScoreList').innerHTML=sorted.map((key,index)=>{
  const player=playersCompare[key],points=faceoffScores[key],isLeader=leaderScore>0&&points===leaderScore;
  return `<div class="faceoff-score-row ${isLeader?'leader':''}"><span class="faceoff-score-rank">${isLeader?'★':String(index+1).padStart(2,'0')}</span><span class="faceoff-score-emoji">${player.emoji}</span><span class="faceoff-score-name" title="${player.name}">${player.name}</span><span class="faceoff-score-points">${points}<small>PTS</small></span></div>`;
 }).join('');
}
function renderFaceoff(){
 const a=playersCompare[$('playerA').value],b=playersCompare[$('playerB').value];
 if(!a||!b)return;
 $('avatarA').textContent=a.emoji;$('avatarB').textContent=b.emoji;
 $('playerNameA').textContent=a.name;$('playerNameB').textContent=b.name;
 $('pickA').textContent=`ESCOLHER ${a.name.toLocaleUpperCase('pt-BR')}`;
 $('pickB').textContent=`ESCOLHER ${b.name.toLocaleUpperCase('pt-BR')}`;
 let aWins=0,bWins=0;
 const html=Object.keys(a.attrs).map(stat=>{const av=a.attrs[stat],bv=b.attrs[stat];if(av>bv)aWins++;if(bv>av)bWins++;return `<div class="compare-row"><div class="compare-value ${av>bv?'winner':''}"><span>${av}</span><div class="compare-track"><i style="width:${av}%"></i></div></div><div class="compare-label">${stat}</div><div class="compare-value right ${bv>av?'winner':''}"><div class="compare-track"><i style="width:${bv}%"></i></div><span>${bv}</span></div></div>`;}).join('');
 $('comparisonStats').innerHTML=html;
 $('faceoffWinner').textContent=aWins===bWins?`Equilíbrio técnico entre ${a.name} e ${b.name}!`:aWins>bWins?`${a.name} vence em mais atributos neste comparativo.`:`${b.name} vence em mais atributos neste comparativo.`;
}
function randomKeyExcept(excluded){const keys=Object.keys(playersCompare).filter(key=>key!==excluded);return keys[Math.floor(Math.random()*keys.length)];}
function chooseFaceoffPlayer(side){
 const winningSelect=$(side==='A'?'playerA':'playerB');
 const losingSelect=$(side==='A'?'playerB':'playerA');
 const key=winningSelect.value,player=playersCompare[key];
 if(!player)return;
 // Cada voto vale um ponto. O escolhido fica como campeão e o adversário é trocado imediatamente.
 faceoffScores[key]+=1;selectedFaceoffChoice=side;
 const replacementKey=randomKeyExcept(key);
 losingSelect.value=replacementKey;
 saveFaceoffScores();renderFaceoffScoreboard();renderFaceoff();
 $('pickA').classList.toggle('chosen',side==='A');$('pickB').classList.toggle('chosen',side==='B');
 $('faceoffChoiceResult').textContent=`+1 ponto para ${player.emoji} ${player.name}! Total: ${faceoffScores[key]} ponto(s). O adversário foi substituído por ${playersCompare[replacementKey].name}.`;
}
$('pickA').addEventListener('click',()=>chooseFaceoffPlayer('A'));
$('pickB').addEventListener('click',()=>chooseFaceoffPlayer('B'));
$('resetFaceoffScores').addEventListener('click',()=>{
 faceoffScores=emptyFaceoffScores();
 try{localStorage.removeItem(faceoffScoreStorageKey);}catch(error){}
 selectedFaceoffChoice='';$('pickA').classList.remove('chosen');$('pickB').classList.remove('chosen');
 $('faceoffChoiceResult').textContent='Placar zerado. Escolha seu próximo favorito.';
 renderFaceoffScoreboard();
});
function drawRandomFaceoff(){
 const keys=Object.keys(playersCompare);const first=Math.floor(Math.random()*keys.length);let second=Math.floor(Math.random()*(keys.length-1));if(second>=first)second++;
 $('playerA').value=keys[first];$('playerB').value=keys[second];selectedFaceoffChoice='';
 $('pickA').classList.remove('chosen');$('pickB').classList.remove('chosen');
 $('faceoffChoiceResult').textContent='Escolha um jogador: ele ganha 1 ponto e o adversário é substituído automaticamente.';
 renderFaceoff();
}
$('randomizeFaceoff').addEventListener('click',drawRandomFaceoff);
renderFaceoffScoreboard();
drawRandomFaceoff();


// Criador de jogador: cada atributo usa escala de 0 a 99, com persistência local.
const attrNames=[['ritmo','Ritmo'],['finalizacao','Finalização'],['passe','Passe'],['drible','Drible'],['defesa','Defesa'],['fisico','Físico']];let chosenAvatar='⚡';let attrs={ritmo:80,finalizacao:80,passe:80,drible:80,defesa:80,fisico:80};
// Os atributos começam em 80 e podem ser ajustados individualmente de 0 a 99.
$('attributeSliders').innerHTML=attrNames.map(([key,label])=>`<div class="attribute-row"><label for="attr-${key}">${label}</label><input id="attr-${key}" type="range" min="0" max="99" value="${attrs[key]}" data-attr="${key}"><output id="out-${key}">${attrs[key]}</output></div>`).join('');
const positionWeights={
 'Atacante':{ritmo:.20,finalizacao:.30,passe:.10,drible:.20,defesa:.02,fisico:.18},
 'Ponta':{ritmo:.25,finalizacao:.18,passe:.12,drible:.25,defesa:.03,fisico:.17},
 'Meia':{ritmo:.12,finalizacao:.15,passe:.25,drible:.22,defesa:.08,fisico:.18},
 'Volante':{ritmo:.12,finalizacao:.08,passe:.20,drible:.12,defesa:.25,fisico:.23},
 'Zagueiro':{ritmo:.08,finalizacao:.05,passe:.12,drible:.08,defesa:.35,fisico:.32},
 'Lateral':{ritmo:.18,finalizacao:.06,passe:.18,drible:.12,defesa:.24,fisico:.22},
 'Goleiro':{ritmo:.10,finalizacao:.03,passe:.15,drible:.07,defesa:.35,fisico:.30}
};
function calculateOverall(values=attrs,position=$('createdPosition').value){const weights=positionWeights[position]||positionWeights['Atacante'];const weighted=Object.entries(weights).reduce((sum,[key,weight])=>sum+(Number(values[key])||0)*weight,0);return Math.max(0,Math.min(99,Math.round(weighted)));}
function readAttrs(){attrNames.forEach(([key])=>{attrs[key]=Number($(`attr-${key}`).value);$(`out-${key}`).textContent=attrs[key];});$('pointsLeft').textContent='ESCALA: 0–99';const overall=calculateOverall();$('overallRating').textContent=overall;$('previewAttrs').innerHTML=attrNames.map(([key,label])=>`<div><b>${attrs[key]}</b><span>${label}</span></div>`).join('');}
attrNames.forEach(([key])=>$(`attr-${key}`).addEventListener('input',()=>{readAttrs();}));
document.querySelectorAll('.avatar-choice').forEach(btn=>btn.addEventListener('click',()=>{chosenAvatar=btn.dataset.avatar;document.querySelectorAll('.avatar-choice').forEach(b=>b.classList.toggle('selected',b===btn));$('previewAvatar').textContent=chosenAvatar;}));
function updatePreview(){const name=$('createdName').value.trim()||'SEU JOGADOR';$('previewName').textContent=name.toUpperCase();$('previewPosition').textContent=$('createdPosition').value.toUpperCase();$('previewClub').textContent=($('createdClub').value.trim()||'BOLA FC').toUpperCase();$('previewFoot').textContent=$('createdFoot').value.toUpperCase();$('overallRating').textContent=calculateOverall(attrs,$('createdPosition').value);}
['createdName','createdClub','createdFoot'].forEach(id=>$(id).addEventListener('input',updatePreview));$('createdPosition').addEventListener('change',()=>{readAttrs();updatePreview();});
$('playerForm').addEventListener('submit',event=>{event.preventDefault();const player={name:$('createdName').value.trim(),position:$('createdPosition').value,club:$('createdClub').value.trim()||'Bola FC',foot:$('createdFoot').value,avatar:chosenAvatar,attrs,overall:calculateOverall(attrs,$('createdPosition').value),createdAt:new Date().toISOString()};try{localStorage.setItem('bolaNaRedeCustomPlayer',JSON.stringify(player));$('savedPlayerMessage').textContent=`Jogador ${player.name} salvo neste navegador! Você pode voltar e editar quando quiser.`;}catch(error){$('savedPlayerMessage').textContent='Não foi possível salvar neste navegador. Confira as configurações de privacidade.';}updatePreview();});
readAttrs();updatePreview();
