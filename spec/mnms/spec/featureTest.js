describe("click a button", function() {
  it("changes the content when I call click button", function() {
    clickButton('myButton');
    expect("class1").tohavecontent("buttonHasBeenClicked")
  });
});
