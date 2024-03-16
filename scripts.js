
document.addEventListener('DOMContentLoaded', () => {
    const splineViewers = document.querySelectorAll('spline-viewer');

    splineViewers.forEach(splineViewer => {
        if (splineViewer) {
            const shadowRoot = splineViewer.shadowRoot;

            if (shadowRoot) {
                const style = document.createElement('style');

                style.textContent = `
                    #logo {
                        visibility: hidden;
                    }
                `;

                shadowRoot.appendChild(style);
            }
        }
    });
});

const underscore = document.querySelector('.underscore');
document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
        underscore.style.visibility = (underscore.style.visibility === 'visible') ? 'hidden' : 'visible';
    }, 600);
});
const underscore2 = document.querySelector('.underscore2');
document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
        underscore2.style.visibility = (underscore2.style.visibility === 'visible') ? 'hidden' : 'visible';
    }, 600);
});
