const buttonRule = document.getElementById('buttonRule');
const rule = document.getElementById('rule');

function handler() {
  if (rule.getAttribute('class')) { rule.classList.remove('flex'); } else {
    rule.classList.add('flex');
  }
}

buttonRule.addEventListener('click', handler);
