var note = new Note("123456789012345678901234567890");

describe("note.body", () => {
  it("creates a note with the body hello", () => {
    expect(note.body).toEqual("123456789012345678901234567890");
  });
});

describe("note.abbreviate", () => {
  it("gets the first 20 characters of the note", () => {
    expect(note.abbreviation).toEqual("12345678901234567890");
  });
});
