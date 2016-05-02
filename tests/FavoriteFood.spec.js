describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should return all people with the favorite food listed', function(){
    var people = [{
      name: 'Person 1',
      favoriteFood: 'Sushi'
    }, {
      name: 'Person 2',
      favoriteFood: 'Ice Cubes'
    }, {
      name: 'Hannibal',
      favoriteFood: 'People'
    }];

    var results = $filter('favoriteFood')(people, 'People');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Hannibal');
  });	
});
