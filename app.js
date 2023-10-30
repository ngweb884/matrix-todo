const matrixContainer = document.getElementById('matrixContainer');
const quadrants = ['Do First', 'Do Later', 'Delegate', 'Delete'];

const taskList = new LinkedList();

function renderMatrix() {
    matrixContainer.innerHTML = '';
    quadrants.forEach((quadrant, index) => {
        const quadrantDiv = document.createElement('div');
        quadrantDiv.classList.add('quadrant', `quadrant-${index}`);
        quadrantDiv.innerHTML = `<h2>${quadrant}</h2>`;
        matrixContainer.appendChild(quadrantDiv);
    });

    taskListTraversal();
}


function addTask() {
    const task = document.getElementById('taskInput').value;
    const quadrantSelect = document.getElementById('quadrantSelect');
    const quadrantIndex = quadrantSelect.options[quadrantSelect.selectedIndex].value;

    if (task) {
        if (quadrantIndex >= 0 && quadrantIndex < quadrants.length) {
            taskList.addTask(task, quadrantIndex);
            renderMatrix();
        } else {
            alert('Invalid quadrant selection. Task not added.');
        }
    }
}



function taskListTraversal() {
    let currentQuadrant = 0;
    let current = taskList.head;
    while (current) {
        createTaskElement(current.data, currentQuadrant);
        currentQuadrant = (currentQuadrant + 1) % quadrants.length;
        current = current.next;
    }
}

function createTaskElement(task, quadrantIndex) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.textContent = task;
    taskElement.addEventListener('click', () => {
        taskList.removeTask(task);
        renderMatrix();
    });
    matrixContainer.children[quadrantIndex].appendChild(taskElement);
}

renderMatrix();
