document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                messageDiv.textContent = 'File uploaded successfully!';
            } else {
                messageDiv.textContent = 'Error uploading file: ' + data.message;
            }
        })
        .catch(error => {
            messageDiv.textContent = 'Error: ' + error.message;
        });
    });
});