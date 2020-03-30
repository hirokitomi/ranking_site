const morebtn = document.getElementById('commentMore');

function openComment(){
  document.getElementById('commentPanel').classList.toggle('comment_open');
  // console.log(document.getElementById('moreButtonText').innnerHTML);
  if(commentPanel.classList.contains('comment_open')){
    document.getElementById('moreButtonText').innerHTML = 'コメントを閉じる <i class="fas fa-angle-down"></i>';
  } else{
    document.getElementById('moreButtonText').innerHTML = 'コメントをさらに表示 <i class="fas fa-angle-up"></i>';    
  }
}

morebtn.addEventListener('click', openComment, false);
