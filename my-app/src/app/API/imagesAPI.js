import info from "./info";

const host = info.host;
const setHeaders = async () => {
    let headers = {
        Accept: '*/*',
    }
    return headers;
}

///POST///

//UPLOAD IMAGE BLACK AND WHITE//
export const uploadImageBW = async (image) => {
    console.log(image);
    const res = await fetch(`${host}/image/black&white`, {
        method: 'POST',
        body: image
    })
    return res;
}
//UPLOAD IMAGE INVERT//
export const uploadImageInvert = async (image) => {
    console.log(image);
    const res = await fetch(`${host}/image/invert`, {
        method: 'POST',
        body: image
    })
    return res;
}

//UPLOAD IMAGE INVERT//
export const uploadImagResize = async (image) => {
    console.log(image);
    const res = await fetch(`${host}/image/resize/300/200`, {
        method: 'POST',
        body: image
    })
    return res;
}

///UPLOAD IMAGE NORMAL///
export const uploadImage = async (image) => {
    const res = await fetch(`${host}/image/invert`, {
        method: 'POST',
        body: image
    });
    return res;
}

// export const getTest = async() => {
//     const res = await fetch(`${host}/test`,{
//         method: 'GET',
//         headers: await setHeaders(),
//     })
//     return res;
// }


