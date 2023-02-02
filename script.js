const selectDirector = document.querySelector("#selectDirector");
const selectionForm = document.querySelector("#selectionForm");

selectDirector.addEventListener("change", (e) => {
    console.log(e.target.value);
});

selectionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    outputText.value = selectDirector.value;
    selectDirector.value = selectDirector.children[0].value;
});