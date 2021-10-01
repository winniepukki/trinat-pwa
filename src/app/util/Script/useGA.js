/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
export const useGA = (tag) => {
    const script = document.createElement('script');

    script.innerHTML = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${tag}');`;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
};

export default useGA;
