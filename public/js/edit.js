const editFormHandler = async (event) => {
    event.preventDefault();
    console.log('clicked');

    const windowPath = window.location.pathname.split('/');
    const id = windowPath[windowPath.length - 1];
    console.log(id);

    const name = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
    console.log(name, description);

    const response = await fetch(`/api/projects/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response);

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to udpate project');
    }
};

document
    .querySelector('.edit-project-form')
    .addEventListener('submit', editFormHandler);