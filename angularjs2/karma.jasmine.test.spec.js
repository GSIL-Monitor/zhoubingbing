describe("A suite of string util", function(){
	it("is string", function(){
		expect( isString('ss')).toBeTruthy() 
		expect( isString(1)).toBeFalsy()
		
	})
	it("is number", function(){
		expect(4).toBe(5);
	})
})