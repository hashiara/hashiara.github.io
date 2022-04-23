'use strict';

{
  // ローマ字とふりがなをランダムに表示する関数
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;

    const furigana = document.getElementById('furigana');
    switch(word.toString()) {
      case 'kakinotane':
        furigana.textContent = furiganas[0];
        if(loc === word.length) {
          furigana.textContent = '';
        }
        break;
      case 'sannpunnkukkinngu':
        furigana.textContent = furiganas[1];
        if(loc === word.length) {
          furigana.textContent = '';
        }
        break;
      case 'kamedanoarareosennbei':
        furigana.textContent = furiganas[2];
        if(loc === word.length) {
          furigana.textContent = '';
        }
        break;
      case 'taipinnguge-mu':
        furigana.textContent = furiganas[3];
        if(loc === word.length) {
          furigana.textContent = '';
        }
        break;
      case 'kabusikigaisya':
        furigana.textContent = furiganas[4];
        if(loc === word.length) {
          furigana.textContent = '';
        }
        break;
      default:
          furigana.textContent = '';
        break;
    }

    loc = 0;
  }

  // ローマ字とふりがなを入れてある配列
  const words = [
    'kakinotane',
    'sannpunnkukkinngu',
    'kamedanoarareosennbei',
    'taipinnguge-mu',
    'kabusikigaisya',
  ];

  const furiganas = [
    '柿の種',
    '三分クッキング',
    '亀田のあられお煎餅',
    'タイピングゲーム',
    '株式会社',
  ];

  // 乱数によって値が変わる変数
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');

  // ゲームを始めると同時に計測を開始
  document.addEventListener('keydown', () =>{
    if (isPlaying === true){
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  // 正誤判定と記録の表示
  document.addEventListener('keydown', e => {
    if(e.key !== word[loc]){
      return;
    }

      loc++;
      target.textContent = '_'.repeat(loc) + word.substring(loc);

      if (loc === word.length){
        if (words.length === 0) {
          const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
          const result = document.getElementById('result');
          
          function record() {
            if (elapsedTime < 15.00) {
              result.textContent = `おめでとう！あなたの記録は ${elapsedTime} 秒です！すごすぎる！`;
            } else if (15.00 <= elapsedTime && elapsedTime <= 20.00) {
              result.textContent = `すごい！あなたの記録は ${elapsedTime} 秒です！さらに頑張ろう！`;
            } else {
              result.textContent = `残念、あなたの記録は ${elapsedTime} 秒です。まだまだ伸びしろがあるね！`;
            }
          }
          record();    
          console.log(elapsedTime);

          return;
        }

        setWord();
      }
    });
}