$(document).ready(function(){

  $('#clickHere').on('click', function() {
    // document.cookie = "username=John Doe";
    var $this = $(this);
        
          $this.attr('disabled', true);
        
          // разблокировка
          setTimeout(function() {
            $this.attr('disabled', false);
          }, 1000);

    $.ajax({
      url: "https://api.telegram.org/bot6067499287:AAE2yWnU1Z-QAPh0zXQ4OyoUJrECMZLPyzc/getUpdates"
    }).done(function(data) {
      console.log(data);
      // document.cookie = "username=John Doe";

      $("li").remove(".firstNameAndDate");
      $("div").remove(".message");
      function arrayAnalizator() {
        for (let i in data.result) {
          let unixTimestamp = data.result[i].message.date;
          let time = new Date(unixTimestamp * 1000);
          
          // console.log("Имя пользователя: " + data.result[i].message.from.first_name + "\n" + "Сообщение: " + data.result[i].message.text + "\n" + "Дата отправки: " + time.toLocaleDateString("en-GB") + " " + time.toLocaleTimeString());
          
          let li = document.createElement('li');
          li.className = "firstNameAndDate";
          li.innerHTML = "Имя пользователя: " + data.result[i].message.from.first_name + "   " + time.toLocaleDateString("en-GB") + "   " + time.toLocaleTimeString();
          document.body.append(li);

          let div = document.createElement('div');
          div.className = "message";
          div.innerHTML = "Сообщение: " + data.result[i].message.text;
          document.body.append(div);
        }
      }

      arrayAnalizator();
    });
  });

  //POST
  $('#clickPost').on('click', function() {
    $.ajax({
      url: "https://api.telegram.org/bot6067499287:AAE2yWnU1Z-QAPh0zXQ4OyoUJrECMZLPyzc/sendMessage",
      method: 'POST',
	    dataType: 'json',
      data: {text: 'darova?', chat_id: 285412273},
	    success: function(data){
		  alert(data);
	    }
      
    });
    


  });

  //cookie
  $.ajax({
    url: "https://api.telegram.org/bot6067499287:AAE2yWnU1Z-QAPh0zXQ4OyoUJrECMZLPyzc/getUpdates"
  }).done(function(data) {
    for (let i in data.result) {
      let user



      // let li = document.createElement('li');
      // li.className = "firstNameAndId";
      // li.innerHTML = "First name: " + data.result[i].message.from.first_name + "   " + "Id: " + data.result[i].message.from.id;
      // document.body.append(li);
    }
  });


  

});

