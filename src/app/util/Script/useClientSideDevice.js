/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
export const useClientSideDevice = () => {
    const { navigator: { userAgent } } = window;

    const isAppleDevice = /iPad|iPhone|iPod|Macintosh/.test(userAgent);
    const isAndroidDevice = /Android/.test(userAgent);

    return {
        isAppleDevice,
        isAndroidDevice
    };
};

export default useClientSideDevice;
