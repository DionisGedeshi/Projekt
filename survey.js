const submit = document.querySelector('#submit');

submit.addEventListener('mouseover', function () {
    submit.style.backgroundColor = '#277231e5';
});

submit.addEventListener('mouseout', function () {
    submit.style.backgroundColor = '#258d33';
});

/*
submit.onclick(saveName());

function setLocalData() {
    localStorage.setItem('name', 'Dioni')
}
*/

function saveName() {
    const name = document.getElementById('name').value;
    localStorage.setItem('name', name);
}

function saveEmail() {
    const email = document.getElementById('email').value;
    localStorage.setItem('email', email);
}

function saveAge() {
    const age = document.getElementById('number').value;
    localStorage.setItem('age', age);
}

function saveRole() {
    const role = document.getElementById('dropdown').value;
    localStorage.setItem('role', role);
}

const storageKey = 'userOpinion';

function saveOpinion() {
    const opinionRadios = document.querySelectorAll('input[name="opinion"]');

    let selectedValue = null;

    for (const radio of opinionRadios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    if (selectedValue) {
        localStorage.setItem(storageKey, selectedValue);
    }
}

const improvementsKey = 'userImprovements';

function saveImprovements() {
    const improvementCheckboxes = document.querySelectorAll('input[name="improvement"]');

    const selectedImprovements = [];

    improvementCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedImprovements.push(checkbox.value);
        }
    });

    localStorage.setItem(improvementsKey, JSON.stringify(selectedImprovements));
}

const commentKey = 'userComment';

function saveComment() {
    const commentBox = document.getElementById('other-recommendations');

    if (commentBox) {
        const commentValue = commentBox.value.trim();

        localStorage.setItem(commentKey, commentValue);
    }
}