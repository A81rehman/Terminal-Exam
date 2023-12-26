import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetData1 } from '../Actions/Action';
import $ from 'jquery';

export const Rockets = () => {

const dispatch = useDispatch();
const rockets = useSelector((state) => state.reducerA.rockets);

useEffect(() => {
    dispatch(GetData1());
}, [dispatch]);

function getrocketdata(myArray){
    if (myArray){
        for(var i=0;i<myArray.length;i++){
            var data= $("#data");
            data.append(`<div id='${myArray[i].id}'><img src='${myArray[i].flickr_images[0]}' alt="noimg"/><h3>${myArray[i].name}</h3><p>${myArray[i].description}
            </p></div>`)
            console.log(myArray[i]);
        }
    } else {
        console.log("Error");
    }
}

return (
    <>
    <div>Rockets</div>
    <div>
        <h1>Data:</h1>
        <ul>
        {getrocketdata(rockets)}
        </ul>
        <div id='data'></div>
    </div>
    </>
);
};
