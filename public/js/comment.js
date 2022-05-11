const commentHandler = async (event) => {
    event.preventDefault();
    console.log('submitted');

    const windowPath = window.location.pathname.split('/');
    const id = windowPath[windowPath.length - 1];
    console.log(id);

    const commentText = document.querySelector('#comment-text').value.trim();
    console.log(commentText);
// UPDATE FETCH
    const response = await fetch(`/api/projects/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ commentText }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response);

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to add comment');
    }
};

document
  .querySelector('.add-comment-form')
  .addEventListener('submit', commentHandler);