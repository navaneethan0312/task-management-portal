async function addTask() {
    const task = document.getElementById("taskInput").value;

    await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: Date.now(),
            task
        })
    });

    alert("Task Added");
}
