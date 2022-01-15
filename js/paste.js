
var dialog = document.querySelector('dialog');
var level_number = 1;
var showDialog = true;
var answer = 1;
var end_game = false;

document.querySelector('#close').onclick = function() {
  dialog.close();
};


  $('#start_newgame').hide();
  $('#main_img').attr('src','..//img/hod/img'+ level_number +'.png')
  $('#img_text').load('..//levels/'+ level_number +'hod/img_text.txt');
  $('#main_text').load('..//levels/'+ level_number +'hod/main_text.txt');
  $('#aswers_list').load('..//levels/'+ level_number +'hod/answers.txt');


  document.querySelector('#show').onclick = function() {
    if (showDialog == true){
      dialog.showModal();
    };
    if (showDialog == false){
      level_number=level_number+1;
      if (level_number>14){
        level_number = 14;
      }

    $('#level_number').text(level_number+'/14')
    $('#main_img').attr('src','..//img/hod/img'+ level_number +'.png')
    $('#img_text').load('..//levels/'+ level_number +'hod/img_text.txt');
    $('#main_text').load('..//levels/'+ level_number +'hod/main_text.txt');
    $('#aswers_list').load('..//levels/'+ level_number +'hod/answers.txt');
    showDialog = true;
    };
};



function answer_1() {
  answer = 1;
};
function answer_2() {
  answer = 2;
};
function answer_3() {
  answer = 3;
};

document.querySelector('#give_answer').onclick = function() {
  dialog.close();
  showDialog = false;
  $('#main_text').load('..//levels/'+ level_number +'hod/end_text'+answer+'.txt');
}

/*  if (answer = 1){
    if (level_number == 2 || level_number == 6 ||
      level_number == 11 || level_number == 12 ){
    end_game = true;
  };
  };
  if (answer = 2){
    if (level_number == 5 || level_number == 7 ||
      level_number == 9 || level_number == 10 ||
      level_number == 11 || level_number == 13){
    end_game = true;
  };
  };

  if (answer = 3) {
    if (level_number == 1 || level_number == 3 ||
      level_number == 4 || level_number == 8 ||
      level_number == 9){
    end_game = true;
  };
  };

if(end_game=true){
  dialog.close();
  showDialog = true;
  $('#main_text').load('..//levels/'+ level_number +'hod/end_text'+answer+'.txt');
  $('#aswers_list').hide();
  $('#start_newgame').show();
  $('#give_answer').hide();
};
  if (end_game=false){
      end_game= false;
      dialog.close();
      showDialog = false;
      $('#main_text').load('..//levels/'+ level_number +'hod/end_text'+answer+'.txt');
      answer= 1;
};
};

/*document.querySelector('#start_newgame').onclick = function() {
  end_game=false;
  dialog.close();
  showDialog = true;
  a = 1;
  $('#main_img').attr('src','..//img/hod/img'+ level_number +'.png')
  $('#img_text').load('..//levels/'+ level_number +'hod/img_text.txt');
  $('#main_text').load('..//levels/'+ level_number +'hod/main_text.txt');
  $('#aswers_list').load('..//levels/'+ level_number +'hod/answers.txt');
  $('#aswers_list').show();
  $('#start_newgame').hide();
  $('#give_answer').show();
};*/