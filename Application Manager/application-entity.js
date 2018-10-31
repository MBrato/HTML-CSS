function studentApplication() {
  let studentsApplications = [];
  let studentNameField = $('#student-name');
  let emailField = $('#email');
  let ageField = $('#age');
  let phoneField = $('#phone');
  let communicationContainer = $('#communication-radioBtns');
  let comunicationValues = $('input[type=radio][name=communication]'); //$('input[type="radio"][name="communication"]:checked').val();
  let engLevelField = $('#eng-level');
  let startDateField = $('#start-date');
  let skillsAndCoursesField = $('#skills-courses');
  let presentationField = $('#personal-presentation');
  let isStudyHomeField = $('#is-study-home');
  let submitBtn = $('#submit');
  //let warningMess = $('#warning-message-container');
  let createForm = $('#create-application-form');
  let readAllField = $('#read-all-applications');
  let ulContainer = $('#application-list');
  let upDelField = $('#up-del-field');
  let phoneSearchField = $('#search-phone');
  let phoneToUpdateOrDelete = '';

  let applFieldName = {
    _studentName: "Name ",
    _email: "Email ",
    _age: "Age ",
    _phone: "Phone Number ",
    _communication: "Preferred Way of Communication",
    _engLev: "English Level",
    _startDate: "Available to Start ",
    _skAndCour: "Technical Skills and Courses ",
    _present: "Short Personal Presentation",
    _isStHome: "Study from home"
  }

  submitBtn.on('click', function(event) {
    event.preventDefault();
    createApplication(studentNameField.val(), emailField.val(), ageField.val(), phoneField.val(), comunicationValues, engLevelField.val(), startDateField.val(), skillsAndCoursesField.val(), presentationField.val(), isStudyHomeField);
    resetFields(studentNameField, emailField, ageField, phoneField, comunicationValues, engLevelField, startDateField, skillsAndCoursesField, presentationField, isStudyHomeField);
  });
  $('#readBtn').on('click', function(event) {
    event.preventDefault();
    createForm.css('display', 'none');
    readAllField.css('display', 'block');
    upDelField.css('display', 'none');
    $('.containerApplInfo').remove();
    readAllApplications();
  });
  $('#createBtn').on('click', function(event) {
    event.preventDefault();
    createForm.css('display', 'block');
    readAllField.css('display', 'none');
    upDelField.css('display', 'none');
    $('.containerApplInfo').remove();
    resetFields(studentNameField, emailField, ageField, phoneField, comunicationValues, engLevelField, startDateField, skillsAndCoursesField, presentationField, isStudyHomeField);
  });
  $('#updateDeleteBtn').on('click', function(event) {
    event.preventDefault();
    createForm.css('display', 'none');
    readAllField.css('display', 'none');
    upDelField.css('display', 'block');
    $('#error-message-container').css('display', 'none');
  });
  $('#searchPhoneBtn').on('click', function(event) {
    event.preventDefault();
    let appl = searchStudentApplByPhone(phoneSearchField.val());
    let ul = generateFieldInfoAppl(appl);
    ul.append($('<button>').attr('id', 'deleteBtn').text('Delete'))
      //.append($('<button>').attr('id', 'updateBtn').text('Update')) 
      .appendTo('#application-student');
    phoneToUpdateOrDelete = appl['_phone'];
    $('#search-phone').val('');
    $('#deleteBtn').on('click', function(event) {
      deleteAppl(phoneToUpdateOrDelete);
      $('.containerApplInfo').remove();
      $('#search-phone').val('');
    });
  });

  function createApplication(studentName, email, age, phone, communication, engLev, startDate, skAndCour, present, isStHome) {
    class Student {
      constructor(studentName, email, age, phone, communication, engLev, startDate, skAndCour, present, isStHome) {
        this.studentName = studentName;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.communication = communication;
        this.engLev = engLev;
        this.startDate = startDate;
        this.skAndCour = skAndCour;
        this.present = present;
        this.isStHome = isStHome;
      }
      get studentName() {
        return this._studentName;
      }
      set studentName(value) {
        let patt = /^[a-z ,.'-]+$/i;
        //Validates name
        if (patt.test(value) === false) {
          studentNameField.css('border', 'solid red');
          throw new Error('Incorrect name format.');
        } else {
          studentNameField.css('border', 'none');
          this._studentName = value;
        }
      }
      get email() {
        return this._email;
      }
      set email(value) {
        let patt = /^.*?@.*?\..*$/g;
        //Validates email
        if (patt.test(value) === false) {
          emailField.css('border', 'solid red');
          throw new Error('Incorrect email format.');
        } else {
          emailField.css('border', 'none');
          this._email = value;
        }
      }
      get age() {
        return this._age;
      }
      set age(value) {
        //Validates age
        if (!Number.parseInt(age) || age <= 0 || age >= 130) {
          ageField.css('border', 'solid red');
          throw new Error('Incorrect age.');
        } else {
          ageField.css('border', 'none');
          this._age = value;
        }
      }
      get phone() {
        return this._phone;
      }
      set phone(value) {
        let patt = /^[0-9\+]{1,}[0-9\-]{3,15}$/g;
        //Validates phone
        if (patt.test(value) === false) {
          phoneField.css('border', 'solid red');
          throw new Error('Incorrect phone format.');
        } else {
          phoneField.css('border', 'none');
          this._phone = value.trim();
        }
      }
      get communication() {
        return this._communication;
      }
      set communication(value) {
        let commValue = value.filter(':checked').val();
        if (!commValue) {
          communicationContainer.css('border', 'solid red');
          throw new Error('Required field.');
        } else {
          communicationContainer.css('border', 'none');
          this._communication = value.filter(':checked').val();
        }
      }
      get engLev() {
        return this._engLev;
      }
      set engLev(value) {
        this._engLev = value;
      }
      get startDate() {
        return this._startDate;
      }
      set startDate(value) {
        let patt = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
        //Validates date
        if (!patt.test(value)) {
          startDateField.css('border', 'solid red');
          throw new Error('Incorrect date.');
        } else {
          startDateField.css('border', 'none');
          this._startDate = value;
        }
      }
      get skAndCour() {
        return this._skAndCour;
      }
      set skAndCour(value) {
        this._skAndCour = value;
      }
      get present() {
        return this._present;
      }
      set present(value) {
        this._present = value;
      }
      get isStHome() {
        return this._isStHome;
      }
      set isStHome(value) {
        if (!value.is(':checked')) {
          this._isStHome = 'Not study from home';
        } else {
          this._isStHome = 'Study from home';
        }
      }
    }

    let studentAppl = new Student(studentName, email, age, phone, communication, engLev, startDate, skAndCour, present, isStHome);

    //Checking if the application already exist in studentsApplications
    //phone is the unique
    for (let i = 0; i < studentsApplications.length; i += 1) {
      let application = studentsApplications[i];
      if (application['_phone'] === studentAppl['_phone']) {
        $('#warning-message-container').css('display', 'block')
          .append($('<p>This application already exists!</p>'));
        throw new Error('This application already exists');
      }
    }
    $('#warning-message-container').css('display', 'block')
      .append($('<p>Application applied.<p>'));
    studentsApplications.push(studentAppl);

    return studentAppl;
  }

  function readAllApplications() {
    let fragment = document.createDocumentFragment();
    let studentApplInfoArr = [];

    for (let i = 0; i < studentsApplications.length; i += 1) {
      let ul = generateFieldInfoAppl(studentsApplications[i]);
      ul.appendTo($(fragment));
    }
    return $(fragment).appendTo('#application-list');
  }

  function generateFieldInfoAppl(obj) {
    let ul = $('<ul>').attr('class', 'containerApplInfo');
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        $(ul)
          .append($('<li>')
            .attr('class', 'stuInfo')
            .text(`${applFieldName[prop]}: ${obj[prop]} `));
      }
    }
    $(ul)
      .append($('<li>--------------------------</li>'));
    return $(ul);
  }

  function searchStudentApplByPhone(phone) {
    let searchedAppl = {};
    let isFound = false;
    for (let i = 0; i < studentsApplications.length; i += 1) {
      let application = studentsApplications[i];
      if (application['_phone'] === phone.trim()) {
        searchedAppl = application;
        $('#error-message-container p').remove();
        isFound = true;
      }
    }
    if (!isFound) {
      $('#error-message-container').css('display', 'block').append('<p>Application is not found!</p>');
      throw new Error('Application is not found');
    }
    return searchedAppl;
  }

  function deleteAppl(phone) {
    for (let i = 0; i < studentsApplications.length; i += 1) {
      let appl = studentsApplications[i];
      if (appl._phone === phone) {
        studentsApplications.splice(i, 1);
      }
    }
    $('#error-message-container p').remove();
    $('#error-message-container').css('display', 'block').append('<p>The application is deleted!</p>');
    return console.log('The element is deleted');
  }

  function resetFields(studentName, email, age, phone, communication, engLev, startDate, skAndCour, present, isStHome) {
    studentName.val('');
    email.val('');
    age.val('');
    phone.val('');
    startDate.val('');
    skAndCour.val('');
    present.val('');
    engLev.val('a1');
    isStHome.prop('checked', false);
  }
}