/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const useScript = (url, async = false) => {
    const script = document.createElement('script');

    script.src = url;
    script.async = async;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
};

export default useScript;
