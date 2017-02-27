var testProgram = {
  
  questions: 
  [
    {
      title: '1.Вопрос №1',
      answers: [
        {
          text: 'Вариант ответа №1'
        },
        {
          text: 'Вариант ответа №2'
        },
        {
          text: 'Вариант ответа №3'
        }
      ]
    },
    {
      title: '2.Вопрос №2',
      answers: [
        {
          text: 'Вариант ответа №1'
        },
        {
          text: 'Вариант ответа №2'
        },
        {
          text: 'Вариант ответа №3'
        }
      ]
    },
    {
      title: '3.Вопрос №3',
      answers: [
        {
          text: 'Вариант ответа №1'
        },
        {
          text: 'Вариант ответа №2'
        },
        {
          text: 'Вариант ответа №3'
        }
      ]
    }	   
  ],
  
  testBody:      document.body,
  testWrapper:   document.createElement('div'),
  testHeader:    document.createElement('h1'),
  testContent:   document.createElement('content'),
  testButtom:    document.createElement('input'),
  
  createdTest: function () {
    this.testWrapper.   classList.add('wrapper');
    
    this.testHeader.    classList.add('header__h1');
    this.testHeader.    innerHTML = 'Тест по программированию';
     
    this.testButtom.    classList.add('buttom__result');
    this.testButtom.    setAttribute('type', 'submit');
    this.testButtom.    setAttribute('value', 'Отправить мои результаты');
    
    this.testBody.      appendChild(this.testWrapper);
    this.testWrapper.   appendChild(this.testHeader);
    this.testWrapper.   appendChild(this.testContent); 
    this.testWrapper.   appendChild(this.testButtom); 
  },
  
  generateElement: function () {
    
    var q = 1;
    
    for(var i = 0; i < this.questions.length; i++) {

      var testBoxQuestion =  document.createElement('div');
      var testQuestionH2 =   document.createElement('h2');
      var testForm =         document.createElement('form');

      testQuestionH2.        innerHTML = this.questions[i].title;

      testBoxQuestion.       classList.add('question__box');
      testQuestionH2.        classList.add('question__h2');
      testForm.              setAttribute('action', '#');

      this.testContent.      appendChild(testBoxQuestion);
      testBoxQuestion.       appendChild(testQuestionH2);
      testBoxQuestion.       appendChild(testForm);


    for(var y = 0; y < this.questions[i].answers.length; y++) {

      var formQuestionInput = document.createElement('input');
      var formQuestionLabel = document.createElement('label');

      formQuestionInput.      classList.add('form__question__input');
      formQuestionInput.      setAttribute('type', 'checkbox');
      formQuestionInput.      setAttribute('id', 'question' + q);
      formQuestionLabel.      setAttribute('for', 'question' + q);

      var formQuestionAnswer = document.createElement('span');
      formQuestionAnswer.     classList.add('answer__text');
      formQuestionAnswer.     innerHTML = this.questions[i].answers[y].text;

      testForm.               appendChild(formQuestionInput);
      testForm.               appendChild(formQuestionLabel);
      formQuestionLabel.      appendChild(formQuestionAnswer);
      
      q++;    
    }
   }  
  }
};

testProgram.createdTest();
testProgram.generateElement();




















