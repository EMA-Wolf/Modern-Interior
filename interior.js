'use strict';
const menuPanel = document.getElementById(`mobile-navbar`)
const  menuBtn = document.getElementById(`menu1`).addEventListener('click',function(){menuPanel.classList.remove(`hidden`)})
const exist = document.getElementById(`clear`).addEventListener(`click`, function(){menuPanel.classList.add(`hidden`)})