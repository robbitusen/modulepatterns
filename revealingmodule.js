var people = (function(){

	//Initial Setup
	var people = ["Trump", "Clinton"];

	var $el = $('#peopleModule');
	var $button = $el.find('button');
	var $input = $el.find('input');
	var $ul = $el.find('ul');
	var template = $el.find('#people-template').html();

	$button.on("click", addPerson);
	$ul.delegate("i.del", "click", deletePerson);

	_render();

	//Private Methods
	function _render() {
		var data = {
			people: people,
		};
		$ul.html(Mustache._render(template, data));
	}

	//Public Methods
	function addPerson(value) {
		var name = (typeof value === "string") ? value : $input.val();
		people.push(name);
		_render();
		$input.val('');
	}

	function deletePerson(event) {
		var i;
		if (typeof event === "number") {
			i = event;
		} else {
			var $remove = $(event.target).closest('li');
			i = $ul.find('li').index($remove);
		}
		people.splice(i, 1);
		_render();
	}

	//Reveal Public Methods (API)
	return {
		addPerson: addPerson,
		deletePerson: deletePerson
	}

})();