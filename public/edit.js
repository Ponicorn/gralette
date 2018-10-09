let editwrap = document.querySelector('.editwrap')
let editbutton = document.querySelector('.editbutton')
let optionlist = document.querySelector('#list')

function toggleEdit (e) {
  if (running) return
  editwrap.style.visibility = editwrap.style.visibility=='hidden' ? 'visible' : 'hidden'
}

// Listener
editwrap.addEventListener('click', e => { if (e.target === editwrap) toggleEdit() })
editbutton.addEventListener('click', toggleEdit)
document.addEventListener('keypress', e => { if (e.key === 'Escape') editwrap.style.visibility='hidden' })
document.querySelector('.editlist', e => e.stopPropagation())
optionlist.addEventListener('click', e => {
  if (running) return
  if (!e.target.classList.contains('delete')) return
  let index = e.target.dataset.index
  options.splice(index, 1)
  mettreOptions()
})