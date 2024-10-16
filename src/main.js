document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]')
  const questions = document.querySelectorAll('[data-faq-question]')
  
  for (let index = 0; index < buttons.length; index++) {

    buttons[index].addEventListener('click', function(e) {
      const abaAlvo = e.target.dataset.tabButton
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
      escondeTodasAbas()
      removeBotaoAtivo()
      aba.classList.add('shows__list--is-active')
      e.target.classList.add('shows__tabs__button--is-active')
    })
  }

  for (let index = 0; index < questions.length; index++) {
    questions[index].addEventListener('click', abreOuFechaResposta)
    
  }

})

function abreOuFechaResposta(e) {
  const classe = 'faq__questions__item--is-open'
  const elementoPai = e.target.parentNode

  elementoPai.classList.toggle(classe)
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll('[data-tab-button]')

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].classList.remove('shows__tabs__button--is-active')
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]')

  for (let index = 0; index < tabsContainer.length; index++) {
    tabsContainer[index].classList.remove('shows__list--is-active')
    
  }
}