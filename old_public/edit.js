let editwrap = document.querySelector('.editwrap')
let editbutton = document.querySelector('.editbutton')
let optionlist = document.querySelector('#list')
let addinput = document.querySelector('#addoption')

function toggleEdit (e) {
  if (running) return
  editwrap.style.visibility = editwrap.style.visibility=='hidden' ? 'visible' : 'hidden'
}

function add () {
  if (running) return
  let val = addinput.value
  val = val.trim()
  if (val.length <= 0) return
  options.push(val)
  mettreOptions()
  addinput.value = ''
}

// Listener
editwrap.addEventListener('click', e => { if (e.target === editwrap) toggleEdit() })
editbutton.addEventListener('click', toggleEdit)
document.addEventListener('keypress', e => { if (e.key === 'Escape') editwrap.style.visibility='hidden' })
document.querySelector('.addbutton').addEventListener('click', add)
addinput.addEventListener('keyup', e => {
  if (e.key === 'Enter') add()
})
optionlist.addEventListener('click', e => {
  if (running) return
  if (!e.target.classList.contains('delete')) return
  let index = e.target.dataset.index
  options.splice(index, 1)
  mettreOptions()
})