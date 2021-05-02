//問題の定義
const quiz=[
  {number:'Q1',
  question:'コーヒー生産地は大きく３つに分けられる。その３つとは、「ラテンアメリカ」「アジア・太平洋」と、次のうちどれ？',
  answers:['ヨーロッパ','北アメリカ', 'アフリカ'],
  correct:'アフリカ',
  explain:'三大生産地はどれもコーヒーベルトと呼ばれる熱帯地域に属しています。'},

  {number:'Q2',
  question:'三大生産地のうち、「ラテンアメリカ」のコーヒーの特徴は次のうちどれ？',
  answers:['バランスがよく、ナッツやココアのような風味','シトラス感があるジューシーな風味','重厚感があり、ハーブや大地を思わせる風味'],
  correct:'バランスがよく、ナッツやココアのような風味',
  explain:'「シトラス感があるジューシーな風味」はアフリカ、「重厚感があり、ハーブや大地を思わせる風味」はアジア・太平洋のコーヒーの特徴です。'},

  {number:'Q3',
  question:'コーヒー生産量が一位の国は次のうちどれ？',
  answers:['コロンビア','ベトナム', 'ブラジル'],
  correct:'ブラジル',
  explain:'2位はベトナム、3位がコロンビアです。'},

  {number:'Q4',
  question:'エスプレッソの説明で正しいものは次のうちどれ？',
  answers:['専用器具にコーヒーの粉とお湯をいれ、成分を溶け出させて抽出','高温のお湯を高圧力で短時間で粉に注ぎ抽出', '高温のお湯をドリッパーにセットした粉に回しかけて抽出'],
  correct:'高温のお湯を高圧力で短時間で粉に注ぎ抽出',
  explain:'高圧力・短時間で抽出することで、エスプレッソの濃厚なコクとキャラメルのような甘みがうまれます。'},
  
  {number:'Q5',
  question:'コーヒー豆の保存方法として正しいのは次のうちどれ？',
  answers:['冷蔵庫に入れて保管する','酸素が入らないよう密閉容器で保管する', 'なるべく湿気が多い場所で保管する'],
  correct:'酸素が入らないよう密閉容器で保管する',
  explain:'コーヒーの敵は酸素、熱、光、湿気です。冷蔵庫での保管は、出し入れする際に温度差で結露ができてしまうので好ましくありません。'},

  {number:'Q6',
  question:'コーヒー豆はコーヒーノキになるコーヒーチェリーの種を焙煎したもの。一本の木から年間約何キロのコーヒーチェリーが収穫できる？',
  answers:['約10㎏','約2kg', '約20kg'],
  correct:'約2kg',
  explain:'約2kgのコーヒーチェリーを果肉を取って焙煎すると、約450グラムのコーヒー豆となります。ショートサイズのコーヒー22杯分です。'},

  {number:'Q7',
  question:'コーヒーノキの栽培条件として好ましいのは次のうちどれ？',
  answers:['昼夜の寒暖差がある','年間を通して乾燥している', '日光があまり当たらない'],
  correct:'昼夜の寒暖差がある',
  explain:'昼夜の寒暖差があることで、実がゆっくりと育ち、味わいがよくなります。'},  

  {number:'Q8',
  question:'コーヒーの三大原種のうち最も質が良く、スペシャリティコーヒーとして使われているのは次のうちどれ？',
  answers:['アラビカ種','ロブスタ種', 'リベリカ種'],
  correct:'アラビカ種',
  explain:'アラビカ種には良質な酸味とフレーバーがあり、コーヒー店ではほぼ100％アラビカ種です。ロブスタ種は缶コーヒーやインスタントコーヒーに使われています。'},

  {number:'Q9',
  question:'コーヒーチェリーから豆を取り出し、焙煎するまでの過程を加工法と呼ぶが、すっきりとしてクリーンな味わいになるのは次のうちどれ？',
  answers:['乾燥式','水洗式', '半水洗式'],
  correct:'水洗式',
  explain:'水洗式では果肉を除去した豆を半日から一日水槽につけ、豆を発酵させています。水に長時間漬けることですっきりした味わいになります。'},

  {number:'Q10',
  question:'コーヒーの淹れ方として正しいのはつぎのうちどれ？',
  answers:['太めのお湯で手早く淹れる','お湯：コーヒー粉が1：1になるようにする', '30秒から1分ほどじっくり蒸らす'],
  correct:'30秒から1分ほどじっくり蒸らす',
  explain:'おいしいコーヒーを淹れるコツは、「正しい分量（お湯：コーヒー＝100：8）、新鮮な豆と水、適切なお湯の温度（96度前後）」です。特に、じっくりと蒸らすことで粉にお湯が浸透し、二酸化炭素が放出されるため、コーヒーの味わいが引き出されやすくなります。'}
];
const getChoices=document.getElementsByClassName('choices');  
const getExplain= document.getElementsByClassName('explain-content');
const getQuestion=document.getElementsByClassName('question-title');
const getQuestionNumber=document.getElementsByClassName('question-number');
let correctCount=0;

//選択肢をクリックしたときの処理
const clickHandler =(e)=>{
  const E=e.target;
  const F=E.closest('.choices');
  //押したボタン以外の非活性化
  const getBtn=[...F.querySelectorAll('button')];
  for(var j=0;j<getBtn.length;j++){
    getBtn[j].disabled=true;
  }
  //クリック後の変化
  for(let k=0; k<quiz.length; k++){
      const getCorrect=quiz[k].correct;
      if(getCorrect===e.target.textContent){
        //正誤によるボタン色の変化
        E.classList.add('correctActive');
        E.classList.remove('wrongActive');
        //正解/不正解の表示
        F.getElementsByTagName('h5')[0].textContent='正解です！';
        //正答の表示
        F.getElementsByTagName('h4')[0].textContent= `A. ${F.getElementsByClassName('correctAnswer')[0].textContent}`;
        //正解数のカウント
        correctCount++;
        break;
       
      }else{
      //正誤によるボタン色の変化
      E.classList.add('wrongActive');
      E.classList.remove('correctActive')
      //正解/不正解の表示;
      F.getElementsByTagName('h5')[0].textContent='残念…！';
      //正答の表示
      F.getElementsByTagName('h4')[0].textContent= `A. ${F.getElementsByClassName('correctAnswer')[0].textContent}`;
      }
  
    //結果の表示
    const resultBtn= document.getElementById('resultBtn');
    resultBtn.addEventListener('click',()=>{
    //正答数の挿入
    document.getElementsByClassName('num')[1].textContent= correctCount;
    
    //結果コメントの挿入
    const resultComment= document.getElementsByClassName
    ('result-comment');
    if(correctCount<3){
      resultComment[0].textContent='まずは三大生産地や加工法など基本的なところから勉強しましょう！';
    }else if(correctCount<7){
      resultComment[0].textContent='その調子です！間違えたところを復習して基本を完璧にしましょう！';
    }else{
      resultComment[0].textContent='素晴らしいです！！この調子で頑張りましょう！基礎知識が身についたらつぎはもう少し詳しく学んでみましょう！';
    }

    //結果のアコーディオン表示
    $(function(){
      if($('.result-content').hasClass('open')) { 
      } else {
        $('.result-content').addClass('open').slideDown();
      }
    });
  
    });
  }
};

//選択肢の設定
const setChoice=()=>{
  for(let a=0;a<quiz.length; a++){
    const $choice=getChoices[a].getElementsByTagName('button');
    //選択肢をボタンタグのテキストに挿入
    quiz[a].answers.forEach(function(answer,answerIndex){
      $choice[answerIndex].textContent=answer;
    })
    const getCorrect=quiz[a].correct;
    for(let b=0;b<3; b++){
      //ボタンをクリックしたときのイベントの設定
      $choice[b].addEventListener('click',clickHandler);
      //正しい解答をボタンと紐づける
      if($choice[b].textContent===getCorrect){
          $choice[b].classList.add('correctAnswer');
      }
    }
  }
};
setChoice();

//問題の設定
const setUpQuiz=()=>{
  for(let i=0; i< quiz.length; i++){
    //問題番号の挿入
    getQuestionNumber[i].textContent=quiz[i].number;
    //問題文の挿入
    getQuestion[i].textContent=quiz[i].question;
    //解説文の挿入
    getExplain[i].textContent=quiz[i].explain;
  }
};
setUpQuiz();

//解説文のアコーディオン表示
  $(function(){
    $('.explain').find('.btn').text('解説を表示');
  $('.explain').click(function() {
    var $Explain = $(this).find('p');
    if($Explain.hasClass('open')) { 
      $Explain.removeClass('open').slideUp();
      $(this).find('.btn').text('解説を表示');
      
    } else {
      $Explain.addClass('open').slideDown();
      $(this).find('.btn').text('閉じる');
    }
  });
});

