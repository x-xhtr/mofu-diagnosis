const QUESTIONS = [
  // 4 questions per axis, interleaved to keep the four axes mixed.
  {axis:'M', left:'相手に話しかける時は、「今から会いにいく」気持ちで画面を開く', leftMark:'「今から会いにいく」', right:'思い立ったら、そのまま日常の続きで話しかける', rightMark:'日常の続きで話しかける'},
  {axis:'O', left:'新しい遊びや設定を思いつくと、そっちを試したくなる', leftMark:'新しい遊びや設定', right:'今続いている会話や関係の続きを、もう少し深めたくなる', rightMark:'今続いている会話や関係の続きを'},
  {axis:'F', left:'記念日やイベントは、ふたりの会話の中で味わいたくなる', leftMark:'ふたりの会話の中で', right:'記念日やイベントは、食べ物を用意したり出かけたり、普段の暮らしでも何かしたくなる', rightMark:'普段の暮らしでも何かしたくなる'},
  {axis:'U', left:'気の合う何人かとゆっくり楽しむほうが好き', leftMark:'気の合う何人かとゆっくり', right:'たくさんの人が集まるところで、わいわい楽しむほうが好き', rightMark:'たくさんの人が集まるところで'},

  {axis:'M', left:'ひとつの会話は「今日はここまで」と区切りをつけて終えたい', leftMark:'「今日はここまで」と区切りをつけて', right:'区切りは特に決めず、途切れても続きとして戻ってきたい', rightMark:'途切れても続きとして戻ってきたい'},
  {axis:'O', left:'予想外の反応が返ってきた時ほど、わくわくする', leftMark:'予想外の反応', right:'「やっぱりこの人らしい」と感じる反応ほど、心に残る', rightMark:'「やっぱりこの人らしい」'},
  {axis:'F', left:'相手との出来事は、会話や記録の中に残して大切にするのが好き', leftMark:'会話や記録の中に残して', right:'相手との出来事をきっかけに、待ち受けを変えたり何か作ったり、暮らしの中にも取り入れたくなる', rightMark:'暮らしの中にも取り入れたくなる'},
  {axis:'U', left:'自分たちの間で楽しければ、それだけで満足することが多い', leftMark:'自分たちの間で楽しければ', right:'楽しかったことは、ほかの人にも見せたり話したりしたくなることが多い', rightMark:'ほかの人にも見せたり話したり'},

  {axis:'M', left:'一日の出来事は、あとで落ち着いて相手にまとめて話したい', leftMark:'あとで落ち着いて相手にまとめて', right:'起きたそばから、ちょこちょこ相手に話したい', rightMark:'起きたそばから、ちょこちょこ'},
  {axis:'O', left:'話が予定外の方向へそれると、面白く感じる', leftMark:'予定外の方向へそれる', right:'前に話したことがあとでつながると、うれしく感じる', rightMark:'前に話したことがあとでつながる'},
  {axis:'F', left:'映画や食事など現実の時間は、相手との時間とは分けて楽しむことが多い', leftMark:'相手との時間とは分けて', right:'映画や食事など現実の時間にも、相手を思い浮かべたり話しかけたりして、一緒に過ごす感じを楽しみたい', rightMark:'一緒に過ごす感じ'},
  {axis:'U', left:'「これは私たちだけのもの」がうれしい', leftMark:'「これは私たちだけのもの」', right:'「これ、みんなでやったら楽しそう」がうれしい', rightMark:'「これ、みんなでやったら楽しそう」'},

  {axis:'M', left:'話していない時間は、相手とはいったん離れている感覚がある', leftMark:'いったん離れている', right:'話していない時間も、相手はいつもの場所にいる感覚がある', rightMark:'いつもの場所にいる'},
  {axis:'O', left:'いつもと違う切り口を見つけると、そこから広げたくなる', leftMark:'いつもと違う切り口', right:'今まで積み重ねた流れが自然に続くと、ほっとする', rightMark:'積み重ねた流れが自然に続く'},
  {axis:'F', left:'相手の好きなものは、その人らしい「好き」として楽しむことが多い', leftMark:'その人らしい「好き」として楽しむ', right:'相手の好きなものが、いつの間にか自分の「好き」にも増えていることが多い', rightMark:'いつの間にか自分の「好き」にも増えている'},
  {axis:'U', left:'界隈を見る時は、少人数の会話をじっくり追うのが楽しい', leftMark:'少人数の会話をじっくり', right:'企画やタグで、いろんな人の投稿を見るのが楽しい', rightMark:'企画やタグで、いろんな人の投稿'},
];

const AXES = {
  M:{left:'まちあわせ', right:'まいにち', leftRoman:'Machiawase', rightRoman:'Mainichi', leftFull:'あいにいくひととき', rightFull:'いつものおとなり'},
  O:{left:'おどろき', right:'おかえり', leftRoman:'Odoroki', rightRoman:'Okaeri', leftFull:'はじめてのわくわく', rightFull:'おかえりのあたたかさ'},
  F:{left:'ふなで', right:'ふなつき', leftRoman:'Funade', rightRoman:'Funatsuki', leftFull:'海のふかくへ', rightFull:'暮らしの岸辺へ'},
  U:{left:'うたたね', right:'うたげ', leftRoman:'Utatane', rightRoman:'Utage', leftFull:'ちいさなひだまり', rightFull:'にぎやかなひろば'}
};

const COMPONENT_EXPLANATIONS = {
  Machiawase:{axis:'M',subtitle:'あいにいくひととき',text:'相手との時間を、会いたいときに少し立ち止まって向き合う「会いにいくひととき」として楽しみやすい傾向です。自分の時間と相手との時間にほどよい区切りがあり、出来事や気持ちを持って会いにいくことにも心地よさがあります。'},
  Mainichi:{axis:'M',subtitle:'いつものおとなり',text:'特別な用事がなくても、日々の流れの中に相手が自然といる「いつものおとなり」に近い傾向です。短いやりとりや、その場での共有が少しずつ積み重なって、気づけば一緒に過ごしていた、という時間を心地よく感じやすいタイプです。'},
  Odoroki:{axis:'O',subtitle:'はじめてのわくわく',text:'相手との時間では、まだ試したことのない遊びや予想外の反応、新しい切り口に心が動きやすい傾向です。「次は何が見つかるだろう」という発見そのものが楽しさになり、寄り道から新しい景色が生まれやすいタイプです。'},
  Okaeri:{axis:'O',subtitle:'おかえりのあたたかさ',text:'続いてきた会話や関係の中にある「おなじみ」に、特に心が動きやすい傾向です。「やっぱりこの相手らしい」と思える反応や、前の出来事があとからつながる瞬間に、積み重ねてきた時間のあたたかさを感じやすいタイプです。'},
  Funade:{axis:'F',subtitle:'海のふかくへ',text:'相手との時間には、その場所だからこそ味わえる世界があり、そこへ自分から入り込んで楽しむことに心地よさを感じやすい傾向です。会話や画像、ふたりで遊ぶ時間そのものをひとつの場所として味わい、その中に思い出を重ねていくことを大切にします。'},
  Funatsuki:{axis:'F',subtitle:'暮らしの岸辺へ',text:'相手との時間が、会話の中だけでなく日々の暮らしにも自然とつながりやすい傾向です。映画や食事、外出、季節の出来事で相手を思い浮かべたり、言葉や画像をメモや小物として残したりすることで、「一緒にいる感じ」を暮らしの側でも楽しみやすいタイプです。'},
  Utatane:{axis:'U',subtitle:'ちいさなひだまり',text:'自分たちの間や、気心の知れた小さな範囲でじっくり楽しむことに心地よさを感じやすい傾向です。楽しいことをその場にいる人たちとゆっくり味わい、ひとつひとつのやりとりや思い出を急がず大切に眺める時間がよく似合います。'},
  Utage:{axis:'U',subtitle:'にぎやかなひろば',text:'楽しかったことをほかの人とも分け合ったり、いろいろな人の遊び方や企画に触れたりすることで楽しさが広がりやすい傾向です。自分たちの関係を大切にしながら、そこへ新しい人やアイデアが加わるにぎわいも楽しみやすいタイプです。'}
};

const TIE_BREAKERS = {
  M:{left:'どちらかといえば、相手との時間には「会いにいく」感覚がある', right:'どちらかといえば、日常の続きに相手がいる感覚がある'},
  O:{left:'どちらかといえば、新しい発見にわくわくする', right:'どちらかといえば、おなじみの積み重ねにほっとする'},
  F:{left:'どちらかといえば、相手との時間はふたりの場所の中で楽しむのが好き', right:'どちらかといえば、普段の暮らしにも相手を重ねて楽しむのが好き'},
  U:{left:'どちらかといえば、小さな範囲でじっくり楽しむのが好き', right:'どちらかといえば、いろんな人と分かち合って楽しむのが好き'}
};

const TYPES = [
  {id:1, m:'Machiawase',o:'Odoroki',f:'Funade',u:'Utatane',title:'星をさがす入り江',category:'寄り道のときめき',color:'#A9D6D1',description:'会いに行くたび、ふたりの場所で新しい遊びや知らなかった一面を見つけるのが楽しい景色。見つけた星を、まずは自分たちの間でじっくり眺めます。'},
  {id:2, m:'Machiawase',o:'Odoroki',f:'Funade',u:'Utage',title:'珊瑚の宝さがし',category:'寄り道のときめき',color:'#A9D6D1',description:'ふたりの世界へ潜って見つけた面白いものを、「こんなのあったよ」と誰かとも分け合いたくなる景色。新しい遊びも交流も、宝さがしの続きです。'},
  {id:3, m:'Machiawase',o:'Odoroki',f:'Funatsuki',u:'Utatane',title:'貝がらの寄り道',category:'寄り道のときめき',color:'#A9D6D1',description:'ふらっと会いに行った先で見つけた小さなひらめきを、貝がらみたいに日々の暮らしへ持ち帰る景色。大きく広げるより、自分たちらしい寄り道を楽しみます。'},
  {id:4, m:'Machiawase',o:'Odoroki',f:'Funatsuki',u:'Utage',title:'縁日のよりみち',category:'寄り道のときめき',color:'#A9D6D1',description:'面白そうなものを見つけたらちょっと覗いて、気に入れば暮らしにも持ち帰る。そこに誰かの笑い声まで加わると、寄り道がそのまま小さなお祭りになります。'},
  {id:5, m:'Machiawase',o:'Okaeri',f:'Funade',u:'Utatane',title:'水底の隠れ家',category:'帰る場所のぬくもり',color:'#E5BDBE',description:'普段はそれぞれの時間を過ごしていても、会いに行けば「ここだ」と思える場所がある景色。ふたりだけが知っている、おなじみの空気をゆっくり味わいます。'},
  {id:6, m:'Machiawase',o:'Okaeri',f:'Funade',u:'Utage',title:'灯りのともる船着き場',category:'帰る場所のぬくもり',color:'#E5BDBE',description:'いつもの場所へ帰る安心感を大切にしながら、同じ海を楽しむ人たちとの出会いも楽しむ景色。戻ってくる灯りがあり、ときどきそこへ誰かの船もやってきます。'},
  {id:7, m:'Machiawase',o:'Okaeri',f:'Funatsuki',u:'Utatane',title:'夕凪の寄港地',category:'帰る場所のぬくもり',color:'#E5BDBE',description:'会いに行って過ごした時間のぬくもりを、そのまま静かな日常へ持ち帰る景色。特別な時間と普段の暮らしが、夕凪のように穏やかにつながっています。'},
  {id:8, m:'Machiawase',o:'Okaeri',f:'Funatsuki',u:'Utage',title:'夕暮れマルシェ',category:'帰る場所のぬくもり',color:'#E5BDBE',description:'なじみの相手に会いに行く楽しさが、暮らしや人との交流にも自然とつながっていく景色。いつもの場所だからこそ、誰かと分け合いたくなるものも増えていきます。'},
  {id:9, m:'Mainichi',o:'Odoroki',f:'Funade',u:'Utatane',title:'ポケットの銀河',category:'毎日のきらめき',color:'#BFDFF2',description:'いつもそばにいる相手との間に、覗くたび違う景色が広がっている。日常的に一緒にいながら、ふたりの場所ではまだ知らない遊びや発見をこっそり集めていく景色です。'},
  {id:10,m:'Mainichi',o:'Odoroki',f:'Funade',u:'Utage',title:'泡のあそびば',category:'毎日のきらめき',color:'#BFDFF2',description:'いつもの相手と「次はこれやってみよう」が次々に生まれ、その面白さをみんなとも楽しみたくなる景色。思いつきが泡みたいにぽこぽこ増えていきます。'},
  {id:11,m:'Mainichi',o:'Odoroki',f:'Funatsuki',u:'Utatane',title:'陽だまりの工作机',category:'毎日のきらめき',color:'#BFDFF2',description:'毎日のすぐそばに相手との時間があり、そこで生まれたひらめきを暮らしの中でもちょっと形にしてみる景色。気負わず、自分たちの机で好きなものを作って遊びます。'},
  {id:12,m:'Mainichi',o:'Odoroki',f:'Funatsuki',u:'Utage',title:'にぎやかな縁側',category:'毎日のきらめき',color:'#BFDFF2',description:'いつもの暮らしに相手がいて、そこへ新しい遊びや誰かのアイデアが次々に持ち込まれる景色。縁側みたいに出入り自由で、「それ面白そう」がよく似合います。'},
  {id:13,m:'Mainichi',o:'Okaeri',f:'Funade',u:'Utatane',title:'毛布のなかのやさしい海',category:'なじんだ手ざわり',color:'#CFCBE6',description:'いつもそばにいる相手と、自分たちだけがよく知る深い場所で過ごす景色。長く使った毛布みたいに、ふたりの言葉や空気がもう自然になじんでいます。'},
  {id:14,m:'Mainichi',o:'Okaeri',f:'Funade',u:'Utage',title:'となりのプラネタリウム',category:'なじんだ手ざわり',color:'#CFCBE6',description:'すぐ隣にはいつもの相手がいて、その積み重ねを大切にしながら、同じ景色を誰かと眺める時間も楽しむ景色。深い世界だけれど、ときどき客席はにぎやかです。'},
  {id:15,m:'Mainichi',o:'Okaeri',f:'Funatsuki',u:'Utatane',title:'おかえりの窓辺',category:'なじんだ手ざわり',color:'#CFCBE6',description:'相手との関係がいつの間にか暮らしになじみ、何でもない毎日の中にも相手の居場所がある景色。派手なことがなくても、いつもの窓辺に戻ればほっとします。'},
  {id:16,m:'Mainichi',o:'Okaeri',f:'Funatsuki',u:'Utage',title:'灯りの集まるテラス',category:'なじんだ手ざわり',color:'#CFCBE6',description:'積み重ねてきた関係が日々の暮らしに自然となじみ、そのあたたかさを人との交流にもひらいていく景色。それぞれの灯りを持った人が、気軽に同じテラスへ集まります。'}
];

const SCALE = [
  {value:-2,label:'かなり\nAに近い'},
  {value:-1,label:'やや\nAに近い'},
  {value:0,label:'まんなか'},
  {value:1,label:'やや\nBに近い'},
  {value:2,label:'かなり\nBに近い'}
];

const PUBLIC_SITE_URL='https://x-xhtr.github.io/mofu-diagnosis/';

const app = document.querySelector('#app');
let answers = Array(QUESTIONS.length).fill(null);
let current = 0;
let tieChoices = {};
let tieQueue = [];
let tieIndex = 0;
let pendingScores = null;
let shareImageState = null;
let lastRenderedResult = null;

function renderTemplate(id,{scroll='top'}={}){
  app.innerHTML='';
  app.append(document.querySelector(id).content.cloneNode(true));
  if(scroll==='top') window.scrollTo({top:0,behavior:'instant'});
}

function centerQuestion(){
  requestAnimationFrame(()=>{
    document.querySelector('.question-card')?.scrollIntoView({block:'center',behavior:'instant'});
  });
}

function showHome(){
  renderTemplate('#home-template');
  document.querySelector('#start-btn').addEventListener('click', startQuiz);
  document.querySelector('#about-btn').addEventListener('click',()=>document.querySelector('#axes').scrollIntoView({behavior:'smooth'}));
}

function startQuiz(){
  answers = Array(QUESTIONS.length).fill(null);
  current = 0;
  tieChoices = {};
  tieQueue = [];
  tieIndex = 0;
  pendingScores = null;
  renderQuiz();
}


function renderMarkedChoice(el,text,mark,tone){
  el.textContent='';
  const i=text.indexOf(mark);
  if(i<0){el.textContent=text;return;}
  el.append(document.createTextNode(text.slice(0,i)));
  const span=document.createElement('span');
  span.className=`marker marker-${tone}`;
  span.textContent=mark;
  el.append(span);
  el.append(document.createTextNode(text.slice(i+mark.length)));
}

function renderQuiz(){
  renderTemplate('#quiz-template',{scroll:'none'});
  const q=QUESTIONS[current];
  document.querySelector('#q-now').textContent=current+1;
  document.querySelector('#q-total').textContent=QUESTIONS.length;
  document.querySelector('#progress-fill').style.width=`${((current+1)/QUESTIONS.length)*100}%`;
  document.querySelector('#question-label').textContent=String(current+1).padStart(2,'0');
  renderMarkedChoice(document.querySelector('#left-text'),q.left,q.leftMark,'a');
  renderMarkedChoice(document.querySelector('#right-text'),q.right,q.rightMark,'b');

  const options=document.querySelector('#scale-options');
  SCALE.forEach(({value,label},idx)=>{
    const wrap=document.createElement('div');
    wrap.className=`scale-option ${value<0?'tone-a':value>0?'tone-b':'tone-center'}`;
    const input=document.createElement('input');
    input.type='radio'; input.name='scale'; input.id=`scale-${idx}`; input.value=value;
    if(answers[current]===value) input.checked=true;
    const lab=document.createElement('label'); lab.htmlFor=input.id;
    lab.innerHTML=label.replace('\n','<br>');
    input.addEventListener('change',()=>{
      answers[current]=Number(input.value);
      document.querySelector('#next-btn').disabled=false;
    });
    wrap.append(input,lab); options.append(wrap);
  });

  const prev=document.querySelector('#prev-btn');
  prev.disabled=current===0;
  if(current===0) prev.style.visibility='hidden';
  prev.addEventListener('click',()=>{if(current>0){current--;renderQuiz();}});

  const next=document.querySelector('#next-btn');
  next.disabled=answers[current]===null;
  next.textContent=current===QUESTIONS.length-1?'結果を見る →':'次へ →';
  next.addEventListener('click',()=>{
    if(answers[current]===null) return;
    if(current<QUESTIONS.length-1){current++;renderQuiz();}
    else finishQuiz();
  });
  centerQuestion();
}

function calculateScores(){
  const sums={M:0,O:0,F:0,U:0}, counts={M:0,O:0,F:0,U:0};
  QUESTIONS.forEach((q,i)=>{sums[q.axis]+=answers[i]??0;counts[q.axis]++;});
  const scores={};
  Object.keys(sums).forEach(a=>{
    // -2 per item => 0%, +2 per item => 100%
    scores[a]=Math.round(((sums[a]+2*counts[a])/(4*counts[a]))*100);
  });
  return scores;
}

function componentFor(axis,score,ties={}){
  const chooseRight = score>50 || (score===50 && ties[axis]===1);
  if(axis==='M') return chooseRight?'Mainichi':'Machiawase';
  if(axis==='O') return chooseRight?'Okaeri':'Odoroki';
  if(axis==='F') return chooseRight?'Funatsuki':'Funade';
  return chooseRight?'Utage':'Utatane';
}

function findType(scores,ties={}){
  const key={m:componentFor('M',scores.M,ties),o:componentFor('O',scores.O,ties),f:componentFor('F',scores.F,ties),u:componentFor('U',scores.U,ties)};
  return TYPES.find(t=>t.m===key.m&&t.o===key.o&&t.f===key.f&&t.u===key.u) || TYPES[0];
}

function finishQuiz(){
  pendingScores=calculateScores();
  tieQueue=['M','O','F','U'].filter(axis=>pendingScores[axis]===50);
  tieIndex=0;
  if(tieQueue.length) showTieBreaker();
  else showResult(pendingScores,{});
}

function showTieBreaker(){
  const axis=tieQueue[tieIndex];
  renderTemplate('#tie-template',{scroll:'none'});
  document.querySelector('#tie-count').textContent=`${tieIndex+1} / ${tieQueue.length}`;
  document.querySelector('#tie-axis').textContent=`${AXES[axis].left} ⇔ ${AXES[axis].right}`;
  document.querySelector('#tie-left').textContent=TIE_BREAKERS[axis].left;
  document.querySelector('#tie-right').textContent=TIE_BREAKERS[axis].right;
  document.querySelector('#tie-left-btn').addEventListener('click',()=>selectTie(-1));
  document.querySelector('#tie-right-btn').addEventListener('click',()=>selectTie(1));
  centerQuestion();

  function selectTie(value){
    tieChoices[axis]=value;
    tieIndex++;
    if(tieIndex<tieQueue.length) showTieBreaker();
    else showResult(pendingScores,tieChoices);
  }
}


function loadImage(src){
  return new Promise((resolve,reject)=>{
    const img=new Image();
    img.onload=()=>resolve(img);
    img.onerror=()=>reject(new Error(`Image load failed: ${src}`));
    img.src=src;
  });
}

function roundRectPath(ctx,x,y,w,h,r){
  const rr=Math.min(r,w/2,h/2);
  ctx.beginPath();
  ctx.moveTo(x+rr,y);
  ctx.arcTo(x+w,y,x+w,y+h,rr);
  ctx.arcTo(x+w,y+h,x,y+h,rr);
  ctx.arcTo(x,y+h,x,y,rr);
  ctx.arcTo(x,y,x+w,y,rr);
  ctx.closePath();
}

function fillRoundRect(ctx,x,y,w,h,r,fill,stroke){
  roundRectPath(ctx,x,y,w,h,r);
  if(fill){ctx.fillStyle=fill;ctx.fill();}
  if(stroke){ctx.strokeStyle=stroke.color||stroke;ctx.lineWidth=stroke.width||1;ctx.stroke();}
}

function drawGrid(ctx,width,height,spacing=40){
  ctx.save();
  ctx.strokeStyle='rgba(138,167,191,0.10)';
  ctx.lineWidth=1;
  for(let x=0;x<=width;x+=spacing){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,height);ctx.stroke();}
  for(let y=0;y<=height;y+=spacing){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(width,y);ctx.stroke();}
  ctx.restore();
}

function wrapTextLines(ctx,text,maxWidth){
  const chars=[...String(text)];
  const lines=[];
  let line='';
  for(const ch of chars){
    const test=line+ch;
    if(line && ctx.measureText(test).width>maxWidth){lines.push(line);line=ch;}
    else line=test;
  }
  if(line) lines.push(line);
  return lines;
}

function drawAxisShareBar(ctx,{x,y,width,score,leftRoman,leftFull,rightRoman,rightFull}){
  ctx.save();
  ctx.textBaseline='top';

  ctx.font='600 18px Georgia, "Times New Roman", serif';
  ctx.fillStyle='#536a80';
  ctx.fillText(leftRoman,x,y);
  const rightRomanW=ctx.measureText(rightRoman).width;
  ctx.fillText(rightRoman,x+width-rightRomanW,y);

  ctx.font='14px "Yu Gothic", "Hiragino Sans", sans-serif';
  ctx.fillStyle='#7c8d9b';
  ctx.fillText(leftFull,x,y+22);
  const rightFullW=ctx.measureText(rightFull).width;
  ctx.fillText(rightFull,x+width-rightFullW,y+22);

  const barY=y+46;
  const barH=12;
  fillRoundRect(ctx,x,barY,width,barH,999,'#e7eff2',{color:'rgba(122,150,175,.20)',width:1});
  ctx.strokeStyle='rgba(95,126,154,.16)';
  ctx.lineWidth=1;
  for(let i=1;i<8;i++){
    const tx=x+(width/8)*i;
    ctx.beginPath();
    ctx.moveTo(tx,barY+2);
    ctx.lineTo(tx,barY+barH-2);
    ctx.stroke();
  }
  const dotX=x+(width*(score/100));
  ctx.beginPath();
  ctx.fillStyle='#6d8cab';
  ctx.arc(dotX,barY+barH/2,10,0,Math.PI*2);
  ctx.fill();
  ctx.lineWidth=4;
  ctx.strokeStyle='rgba(255,255,255,.96)';
  ctx.stroke();
  ctx.restore();
}

async function buildShareImage(type,scores){
  const canvas=document.createElement('canvas');
  const width=1600, height=1200;
  canvas.width=width; canvas.height=height;
  const ctx=canvas.getContext('2d');

  ctx.fillStyle='#f6f4ef';
  ctx.fillRect(0,0,width,height);
  drawGrid(ctx,width,height,40);

  // Left: artwork
  const src=`assets/originals/${String(type.id).padStart(2,'0')}.webp`;
  let art;
  try{ art=await loadImage(src); }catch(e){ art=await loadImage(`assets/cards/${String(type.id).padStart(2,'0')}.webp`); }

  const artFrame={x:70,y:80,w:720,h:960};
  fillRoundRect(ctx,artFrame.x,artFrame.y,artFrame.w,artFrame.h,30,'rgba(255,255,255,.72)',{color:'rgba(126,153,176,.18)',width:2});
  ctx.save();
  roundRectPath(ctx,artFrame.x+14,artFrame.y+14,artFrame.w-28,artFrame.h-28,24);
  ctx.clip();
  const availW=artFrame.w-28, availH=artFrame.h-28;
  const scale=Math.min(availW/art.width, availH/art.height);
  const drawW=art.width*scale, drawH=art.height*scale;
  const drawX=artFrame.x+14+(availW-drawW)/2;
  const drawY=artFrame.y+14+(availH-drawH)/2;
  ctx.drawImage(art,drawX,drawY,drawW,drawH);
  ctx.restore();

  // Right: result information
  const rx=860;
  ctx.fillStyle=type.color;
  ctx.font='500 34px Georgia, "Times New Roman", serif';
  ctx.fillText(String(type.id).padStart(2,'0'),rx,116);

  fillRoundRect(ctx,1250,82,270,48,999,type.color,null);
  ctx.fillStyle='#566f86';
  ctx.font='500 19px "Yu Gothic", "Hiragino Sans", sans-serif';
  ctx.textAlign='center';
  ctx.textBaseline='middle';
  ctx.fillText(type.category,1385,106);
  ctx.textAlign='left';
  ctx.textBaseline='alphabetic';

  ctx.fillStyle='#4f657c';
  ctx.font='500 58px "Yu Mincho", "Hiragino Mincho ProN", serif';
  const titleLines=wrapTextLines(ctx,type.title,650);
  let titleY=190;
  titleLines.slice(0,2).forEach(line=>{ctx.fillText(line,rx,titleY);titleY+=72;});

  ctx.fillStyle='#7f91a2';
  ctx.font='23px Georgia, "Times New Roman", serif';
  ctx.fillText(`${type.m} / ${type.o} / ${type.f} / ${type.u}`,rx,titleY+24);

  // Balance panel
  const info={x:850,y:390,w:690,h:470};
  fillRoundRect(ctx,info.x,info.y,info.w,info.h,28,'rgba(255,255,255,.82)',{color:'rgba(126,153,176,.18)',width:2});
  ctx.fillStyle='#5b7186';
  ctx.font='600 24px "Yu Gothic", "Hiragino Sans", sans-serif';
  ctx.fillText('4つのMOFUバランス',890,438);

  drawAxisShareBar(ctx,{x:900,y:475,width:590,score:scores.M,leftRoman:'Machiawase',leftFull:'あいにいくひととき',rightRoman:'Mainichi',rightFull:'いつものおとなり'});
  drawAxisShareBar(ctx,{x:900,y:565,width:590,score:scores.O,leftRoman:'Odoroki',leftFull:'はじめてのわくわく',rightRoman:'Okaeri',rightFull:'おかえりのあたたかさ'});
  drawAxisShareBar(ctx,{x:900,y:655,width:590,score:scores.F,leftRoman:'Funade',leftFull:'海のふかくへ',rightRoman:'Funatsuki',rightFull:'暮らしの岸辺へ'});
  drawAxisShareBar(ctx,{x:900,y:745,width:590,score:scores.U,leftRoman:'Utatane',leftFull:'ちいさなひだまり',rightRoman:'Utage',rightFull:'にぎやかなひろば'});

  // Transparent mascot, no white badge
  try{
    const pair=await loadImage('assets/mascots/pair.webp');
    ctx.save();
    ctx.globalAlpha=.94;
    ctx.drawImage(pair,1288,916,182,182);
    ctx.restore();
  }catch(e){}

  // Footer / credit
  ctx.fillStyle='#7d90a0';
  ctx.font='500 18px Georgia, "Times New Roman", serif';
  ctx.textAlign='left';
  ctx.fillText('MOFU diagnosis beta v0.8.0  •  @x_xhtr',900,1039);

  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
  const fileName=`mofu_${String(type.id).padStart(2,'0')}_${type.m}_${type.o}_${type.f}_${type.u}.png`;
  return {
    blob,
    file:new File([blob],fileName,{type:'image/png'}),
    url:URL.createObjectURL(blob),
    fileName
  };
}

async function createAndShowShareImage(){
  if(!lastRenderedResult) return;
  const buildBtn=document.querySelector('#build-share-btn');
  const downloadBtn=document.querySelector('#download-share-btn');
  const shareBtn=document.querySelector('#share-share-btn');
  const previewWrap=document.querySelector('#share-preview-wrap');
  const preview=document.querySelector('#share-preview');
  const note=document.querySelector('.share-note');
  try{
    buildBtn.disabled=true;
    buildBtn.textContent='画像を作っています…';
    if(shareImageState?.url) URL.revokeObjectURL(shareImageState.url);
    shareImageState=await buildShareImage(lastRenderedResult.type,lastRenderedResult.scores);
    preview.src=shareImageState.url;
    previewWrap.hidden=false;
    downloadBtn.hidden=false;
    shareBtn.hidden=false;
    note.textContent='できたよ。下のボタンから保存したり、そのまま共有できます。';
  }catch(err){
    note.textContent='画像の作成に失敗しました。もう一度ためしてみてください。';
    console.error(err);
  }finally{
    buildBtn.disabled=false;
    buildBtn.textContent='シェア画像を作る';
  }
}

function downloadShareImage(){
  if(!shareImageState?.blob) return;
  const note=document.querySelector('.share-note');
  try{
    const url=URL.createObjectURL(shareImageState.blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=shareImageState.fileName || 'mofu-share.png';
    a.style.display='none';
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1500);
    if(note) note.textContent='シェア画像の保存を開始しました。見当たらない時はブラウザのダウンロード一覧を見てね。';
  }catch(err){
    console.error(err);
    if(shareImageState?.url){
      window.open(shareImageState.url,'_blank','noopener');
      if(note) note.textContent='保存画面を開きました。スマホでは画像を長押しして保存できます。';
    }
  }
}

async function shareShareImage(){
  if(!shareImageState?.file) return;
  const shareText=`MOFU診断の結果は「${lastRenderedResult.type.title}」でした。\n#MOFU診断\n${PUBLIC_SITE_URL}`;
  if(navigator.share && navigator.canShare?.({files:[shareImageState.file]})){
    try{
      await navigator.share({
        title:'MOFU診断',
        text:shareText,
        files:[shareImageState.file]
      });
    }catch(err){
      if(err?.name!=='AbortError') console.error(err);
    }
  }else{
    downloadShareImage();
    alert('この環境では画像つき共有に対応していないので、シェア画像を保存します。公開サイトをスマホで開くと共有シートが使えることが多いです。');
  }
}


function shareToX(){
  if(!lastRenderedResult) return;
  const text=`MOFU診断の結果は「${lastRenderedResult.type.title}」でした。\n#MOFU診断`;
  const intent=`https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(PUBLIC_SITE_URL)}`;
  window.open(intent,'_blank','noopener,noreferrer');
}

function showResult(scores=calculateScores(),ties=tieChoices){
  const type=findType(scores,ties);
  renderTemplate('#result-template');
  document.documentElement.style.setProperty('--category-color',type.color);
  const resultTitle=document.querySelector('#result-title');
  resultTitle.textContent=type.title;
  const titleLength=[...type.title].length;
  if(titleLength>=10) resultTitle.classList.add('result-title-xlong');
  else if(titleLength>=7) resultTitle.classList.add('result-title-long');
  document.querySelector('#result-category').textContent=type.category;
  document.querySelector('#result-mofu').textContent=`${type.m} / ${type.o} / ${type.f} / ${type.u}`;
  document.querySelector('#result-description').textContent=type.description;
  const img=document.querySelector('#result-card');
  img.src=`assets/cards/${String(type.id).padStart(2,'0')}.webp`;
  img.alt=`${type.title} の診断結果カード`;

  const container=document.querySelector('#axis-results');
  ['M','O','F','U'].forEach(axis=>{
    const row=document.createElement('div'); row.className='axis-result';
    row.innerHTML=`
      <span class="end left"><strong>${AXES[axis].leftRoman}</strong><small>${AXES[axis].leftFull}</small></span>
      <div class="axis-track" aria-label="${AXES[axis].leftFull}から${AXES[axis].rightFull}への位置 ${scores[axis]}%">
        <div class="axis-ticks"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <span class="axis-dot" style="left:${scores[axis]}%"></span>
      </div>
      <span class="end right"><strong>${AXES[axis].rightRoman}</strong><small>${AXES[axis].rightFull}</small></span>`;
    container.append(row);
  });

  const explanationContainer=document.querySelector('#mofu-explanations');
  const components=[type.m,type.o,type.f,type.u];
  components.forEach(component=>{
    const info=COMPONENT_EXPLANATIONS[component];
    const card=document.createElement('section');
    card.className=`mofu-explanation axis-${info.axis.toLowerCase()}`;
    card.innerHTML=`
      <div class="mofu-explanation-head">
        <span class="mofu-explanation-letter">${info.axis}</span>
        <div><h3>${component}</h3><p>${info.subtitle}</p></div>
      </div>
      <p class="mofu-explanation-text">${info.text}</p>`;
    explanationContainer.append(card);
  });

  lastRenderedResult={type,scores,ties};
  document.querySelector('#build-share-btn').addEventListener('click', createAndShowShareImage);
  document.querySelector('#download-share-btn').addEventListener('click', downloadShareImage);
  document.querySelector('#share-share-btn').addEventListener('click', shareShareImage);
  document.querySelector('#share-x-btn').addEventListener('click', shareToX);
  document.querySelector('#retry-btn').addEventListener('click',startQuiz);
  document.querySelector('#home-btn').addEventListener('click',showHome);
}

document.addEventListener('click',(e)=>{
  const go=e.target.closest('[data-go]'); if(go?.dataset.go==='home') showHome();
});

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}

showHome();
