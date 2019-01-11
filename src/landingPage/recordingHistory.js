const history = document.getElementById('history');
let parametr = 0;
const textForfirstBlock = 'В центре сюжета — школьник по имени Морти и его дедушка Рик. Морти — самый обычный мальчик, который ничем не отличается от своих сверстников. А вот его дедуля занимается необычными научными исследованиями и зачастую полностью неадекватен. Он может в любое время дня и ночи схватить внука и отправиться вместе с ним в межпространственные приключения с помощью построенной из разного хлама летающей тарелки, которая способна перемещаться сквозь временной тоннель. Каждый раз эта парочка оказывается в самых неожиданных местах и они никогда не знают, что их ждет';
const textForSecondBlock = 'Персонажи: <br> Рик - алкоголик с постоянной отрыжкой.<br><br>  Морти - внук Рика <br><br> Саммер - старшая сестра Морти <br><br> Бэт - дочь Рика, мать Морти и Саммер, и жена Джерри <br><br> Джерри - отец Морти и Саммер, зять Рика, муж Бэт';

function printedText(el1, el2, text1, text2) {
  if (parametr === 0) {
    parametr += 1;
    let i = 0;
    const print = function f() {
      i += 1;
      if (i <= text1.length) {
        el1.innerHTML = text1.substr(0, i);
        el2.innerHTML = text2.substr(0, i);
        setTimeout(print, 30);
      } else {
        history.removeEventListener('mouseover', handler);
      }
    };
    print();
  }
}

function handler(e) {
  printedText(e.target.children[0], e.target.children[1], textForfirstBlock, textForSecondBlock);
}

history.addEventListener('mouseover', handler);
