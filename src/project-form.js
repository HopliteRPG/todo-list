



//Dialong and Modal Code 
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector(".show-dialog-btn");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector("form");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});



form.addEventListener("submit",(event) => {
  event.preventDefault();
  const formData = new FormData(form);
  addBookToLibrary(new Book(formData.get("book_name"),formData.get("author_name"),formData.get("pages_number"),formData.get("read_status")));
  form.reset();
  dialog.close();
});




closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});
