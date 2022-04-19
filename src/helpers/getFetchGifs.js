export const getFetchGifs = async ({ category }) => {
    const base = `https://api.giphy.com/v1/gifs/search`;
    const apiKey = 'IJZ9sNxedKg7fKPBa2GwQjvUtZfx8fbx';
    const limit = 10;
    const url = `${ base }?api_key=${ apiKey }&q=${ encodeURI(category) }&limit=${ limit }`;
    const request = await fetch(url);
    const { data } = await request.json();
    const imgList = data.map(img => {
        return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        }
    })
    return imgList;
}