document.addEventListener("DOMContentLoaded", function(event) {
  describe("click a button", function() {
    it("changes the content when I call click button", function() {
      clickButtonById('test-button');
      expect(htmlSelectorId("test-button-container")).toEqual("buttonHasBeenClicked")
    });
  });
});
