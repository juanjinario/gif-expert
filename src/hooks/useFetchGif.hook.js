import { useEffect, useState } from "react"
import { getFetchGifs } from "../helpers/getFetchGifs";

export const useFetchGifs = ({ category }) => {
    const [state, setstate] = useState({
        data: [],
        isLoading: true
    });
    useEffect(() => {
        getFetchGifs({ category }).then( imgList => {
            setstate({
                data: imgList,
                isLoading: false,
            }); 
        });
    }, [ category ]);
    return state;
}