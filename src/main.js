document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-tab-button]')
  
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
})

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