function library() {
  let currentUser = 'Guest';
  let user = {
    firstName: 'Maria',
    lastName: 'Dimitrova',
    username: 'mimi123',
    gsm: '089123456',
    email: 'mimi@abv.asd',
    pass: '123456',
    toString: function(){
      return this.firstName + ' ' + this.lastName;
    }
  }
  let generateBook = (function generateBook() {
      return function(selector, title, isbn, author, published) {
        let table = $(selector);
        let fragment = document.createDocumentFragment();
        let thead = $('<tr>')
          .attr('class', 'tableRow')
          .attr('id', 'thTable');
        let trow = $('<tr>')
          .attr('class', 'tableRow');

        if (table.find('th').length === 0) {
          thead.append($('<th>').text('ISBN:'))
            .append($('<th>').text('Заглавие:'))
            .append($('<th>').text('Автор:'))
            .append($('<th>').text('Година:'))
            .appendTo(fragment);
          } else if(table.find('th').length){
            trow.append(`<td>${isbn}</td>`)
              .append(`<td>${title}</td>`)
              .append(`<td>${author}</td>`)
              .append(`<td>${published}</td>`)
              .appendTo(fragment);
            $('.tableRow').each(function(td){
              $('td').attr('class','tableCell');
            });
          }

          table.append(fragment);
        }
      })();

    let generateUser = (function generateUser(){
      return function(selector, user){
        updateUserData(user);
        appendUserData(selector, user);
      }
    })();

    function appendUserData(selector, user){
      let infoBox = $(selector);
      let fragment = document.createDocumentFragment();
      $(fragment).append(`<p>Име: ${user.firstName}</p>`)
          .append(`<p>Фамилия: ${user.lastName}</p>`)
          .append(`<p>Телефон: ${user.gsm}</p>`)
          .append(`<p>Email: ${user.email}</p>`)
          .appendTo(infoBox);
    }
    function updateUserData(user){
      let firstName = $('#fName').val();
      let lastName = $('#lName').val();
      let gsm = $('#phoneNum').val();
      let email = $('#email').val();
      let pass = $('#password').val();

      if(firstName || lastName ||  gsm ||  email || pass){
        if (firstName && firstName !== user.firstName) {
          user.firstName = firstName;
        }
        if (lastName && lastName !== user.lastName) {
          user.lastName = lastName;
        }
        if (gsm && gsm !== user.gsm) {
          user.gsm = gsm;
        }
        if (email && email !== user.email) {
          user.email = email;
        }
        if (pass && pass !== user.pass) {
          user.pass = pass;
        }
      }
      return user;
    }

    $("#uLibCardReq").click(function() {
      $('#bookTable tr:nth-child(even)').css('background-color', '#FF5F49');
      $('#bookTable tr:nth-child(odd):not(#thTable)').removeAttr('style');
    });
    $('#uLibCardTaken').click(function() {
      $('#bookTable tr:nth-child(odd):not(#thTable)').css('background-color', '#0FFF3C');
      $('#bookTable tr:nth-child(even)').removeAttr('style');
    });
    $('#regBtn').on('click', function(){
      userRegistration();
    });
    $('#loginBtn').on('click', function(){
      let username = $('#username').val();
      checkUsername(username);
    });
    $('#updateBtn').on('click', function(){
      let currentUser = updateUserData(user);
      generateUser('#userInfo', currentUser);
    });

    function welcomeUser(username){
        let selector = $('#user-name');
        return selector.text(', ' + username + '!');
    };

    function userRegistration(){
      let firstName = $('#fName').val();
      let lastName = $('#lName').val();
      let gsm = $('#phoneNum').val();
      let email = $('#email').val();
      let username = $('#username').val();
      let pass = $('#password').val();
      let massage = $('#confirmation-message');
      currentUser = updateUserData(user);
      if(firstName && lastName && gsm && email && username && pass){
        $('#confirmation-message p').remove();
        $('#reg-log-btn').css('display', 'inline');
        massage.css('display', 'block')
          .append(`<p>${currentUser}, Вашата регистрация е успешна!</p>`);
      } else {
        $('#confirmation-message p').remove();
        $('#reg-log-btn').css('display', 'none');
        massage.css('display', 'block')
          .append(`<p>Всички полета трябва да бъдат попълнени!</p>`);
      }
    }
    let generateInputData = (function generateInputData(){
      return function(user){
        $('#username').val(`${user.username}`);
        $('#pass').val(`${user.pass}`);
      }
    })();

    generateBook('#bookTable', 'Inferno', 1288875273, 'Dan Brown', '2013');
    generateBook('#bookTable', 'The Hobbit', 7547928578, 'J. R. R. Tolkien', '1937');
    generateBook('#bookTable', 'The Adventures of f Holmes', 2788775373, 'Sir Arthur Conan Doyle', '1892');
    generateBook('#bookTable', 'Anna Karenina', 3228895272, 'Lev Tolstoy', '1877');
    generateBook('#bookTable', 'Cloud Atlas', 9988874271, 'David Mitchell', '2004');

    generateInputData(user);
    welcomeUser(user.toString());
  }
