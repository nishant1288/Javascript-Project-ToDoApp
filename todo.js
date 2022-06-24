var btn = document.getElementById("addbutton");
var ansDiv = document.getElementById("answerDiv");

btn.addEventListener('click', function (event) {

    event.preventDefault();

    var mainBody = document.querySelector("body");
    var getValue = document.querySelector("input").value;

    var newTask = document.createElement('div');
    newTask.className = "answerDiv";



    // var checkBox = document.createElement('input', {type : 'checkbox'});
    
    // var checkNode = document.createTextNode(checkBox);

    var para = document.createElement('p');
    para.append(getValue);

    var delButton = document.createElement('button');
    delButton.innerText = "Delete";
    delButton.className = "answerDiv button";
    delButton.addEventListener('click', deleteTask);

    // var delNode = document.createTextNode(delButton);

    // newTask.appendChild(checkBox);
    newTask.appendChild(para);
    newTask.appendChild(delButton);

    mainBody.appendChild(newTask);

    function deleteTask(event) {
        var deleteButton = event.target.parentElement;
        deleteButton.remove();

    }
})























