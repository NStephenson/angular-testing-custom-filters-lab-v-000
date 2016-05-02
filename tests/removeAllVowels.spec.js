describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		removeAllVowels = $filter('removeAllVowels');
	}));

  it('should remove the vowels from a string', function(){

    expect(removeAllVowels("Hey, this would taste good.")).toEqual("Hy, ths wld tst gd.");
    expect(removeAllVowels("aeiou")).toEqual("");
  });

});
