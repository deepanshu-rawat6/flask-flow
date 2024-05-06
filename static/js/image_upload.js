/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
var input = document.getElementById( 'upload' );
var infoArea = document.getElementById( 'upload-label' );

input.addEventListener( 'change', showFileName );
function showFileName( event ) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = 'File name: ' + fileName;
}


document.addEventListener('DOMContentLoaded', () => {
    const dragArea = document.getElementById('dragArea');
    const uploadInput = document.getElementById('uploadInput');

    dragArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dragArea.classList.add('active');
    });

    dragArea.addEventListener('dragleave', () => {
        dragArea.classList.remove('active');
    });

    dragArea.addEventListener('drop', (event) => {
        event.preventDefault();
        dragArea.classList.remove('active');
        const file = event.dataTransfer.files[0];
        handleFile(file);
    });

    uploadInput.addEventListener('change', () => {
        const file = uploadInput.files[0];
        handleFile(file);
    });

    function handleFile(file) {
        const reader = new FileReader();
        reader.onload = () => {
            const image = document.getElementById('imageResult');
            image.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});
