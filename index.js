document.addEventListener('drop', function (event) {
    event.preventDefault();
    if (event.dataTransfer.items[0].kind === 'file') {
        if (event.dataTransfer.items[0].type === 'text/csv') {
            window.open('https://convertio.co/csv-xlsx/');
        }
    }
});

document.addEventListener('dragover', function (event) {
    event.preventDefault();
});



function handleDrop(event) {
    event.preventDefault();

    // Get the dropped file
    var file = event.dataTransfer.files[0];

    if (file.type === 'text/csv') {
        var reader = new FileReader();
        reader.onload = function (event) {
            var csvData = event.target.result;
            displayCSV(csvData);
        };
        reader.readAsText(file);
    } else {
        alert('Invalid file format. Please drop a CSV file.');
    }
}


// Add the drop event listener to the document
document.addEventListener('drop', handleDrop);
document.addEventListener('dragover', function (event) {
    event.preventDefault();
});



