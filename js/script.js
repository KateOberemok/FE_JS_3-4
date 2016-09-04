var newTest = {
	title:	function() {
			var element = document.createElement('h1');
			element.className = 'title';
			element.innerHTML = 'Тест по программированию';
			var myBody = document.querySelector('body');
			myBody.appendChild(element);
	},

	main: function() {
		var wrapper = document.createElement('div');
		wrapper.className = 'wrapper';
		document.body.appendChild(wrapper);

		var mainList = document.createElement('ol');
		mainList.className = 'mainList';
		wrapper.appendChild(mainList);

		var mainListElement = [];
		for (var i = 0; i < 3; i++) {
			var numberOfQuestion = i + 1;
			mainListElement[i] = document.createElement('li');
			mainList.appendChild(mainListElement[i]);
			mainListElement[i].innerHTML = 'Вопрос № ' + numberOfQuestion;

			var newList = document.createElement('ul');
			newList.className = 'newList';
			mainListElement[i].appendChild(newList);

			var newListElement = [];
			var newListInput = [];
			var newListLabel = [];
			var newTextElement = [];

			numberOfQuestion = 1;
			for (var k = i * 3; k < (i + 1) * 3; k++) {

				newListElement[k] = document.createElement('li');
				newList.appendChild(newListElement[k]);
				
				newListLabel[k] = document.createElement('label');
				newListElement[k].appendChild(newListLabel[k]);

				newListInput[k] = document.createElement('input');
				newListInput[k].setAttribute('type', 'checkbox');


				newTextElement[k] = document.createTextNode('Вариант ответа № ' + numberOfQuestion) ;
				newListLabel[k].insertBefore(newListInput[k], newListLabel[k].children[0]);
				newListLabel[k].appendChild(newTextElement[k]);
				numberOfQuestion++;
			}
		}
	},

	button: function() {
			var newButton =  document.createElement('button');
			newButton.className = 'lastButton';
			newButton.setAttribute = ('type', 'submit');
			newButton.innerHTML = 'Перейти к ответам';
			var myBody = document.querySelector('body');
			myBody.appendChild(newButton);
	}
}

newTest.title();
newTest.main();
newTest.button();
