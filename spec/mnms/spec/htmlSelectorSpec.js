document.addEventListener("DOMContentLoaded", function(event) {

  describe("htmlSelectorClass", function() {
    it("selects an element by class", function() {
      console.log(htmlSelectorClass("test-class"));
      expect(htmlSelectorClass("test-class")[0].innerHTML).toEqual("PLACEHOLDER");
    });
  });

  describe("htmlSelectorID", function() {
    it("selects an element by id", function() {
      expect(htmlSelectorId('test-id').innerHTML).toEqual("PLACEHOLDER");
    });
  });

});
