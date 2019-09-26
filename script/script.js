window.addEventListener('load', () => {
    const download = document.getElementById('download');

    download.addEventListener('click', () => {
        download.classList.add('animate');

        setTimeout(() => {
            download.classList.remove('animate');
        }, 1000);
    });
});