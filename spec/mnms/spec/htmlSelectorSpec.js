describe("htmlSelector", function() {
  it("selects an element by class", function() {
    console.log(htmlSelector('test-div')[0])
    expect(htmlSelector('test-div')[0].innerHTML).toEqual("PLACEHOLDER")
  });
});
