document.addEventListener("DOMContentLoaded",function(){
    const newTask = document.querySelector("#newTask");
    const submitBtn = document.querySelector("#submitBtn");

    submitBtn.disabled = true;

    document.querySelector("form").onkeyup = function(){
        submitBtn.disabled = false;
    }

    document.querySelector("form").onsubmit = function(){
        const task = newTask.value;
        const li = document.createElement("li");
        li.innerHTML = task;
        document.querySelector("#tasks").append(li);
        newTask.value = "";
        submitBtn.disabled = true;

        return false;
    }



});


