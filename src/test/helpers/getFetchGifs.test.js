import { getFetchGifs } from "../../helpers/getFetchGifs";

describe('Get Fetch Gifs testing', () => { 
    test('fetch should get 10 items', async () => { 
        const category = 'One Punch';
        const gitImagesList = await getFetchGifs({ category });
        expect(gitImagesList.length).toBe(10);
    }); 
})