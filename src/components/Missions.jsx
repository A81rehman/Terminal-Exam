import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetData2 } from '../Actions/Action';
import { MyProfile } from './MyProfile';

export const Missions = () => {
const dispatch = useDispatch();
const missions = useSelector((state) => state.reducerB.missions);

useEffect(() => {
    dispatch(GetData2());
}, [dispatch]);

function renderRocketData(myArray) {
    if (myArray) {
    return myArray.map((mission) => (
        <div key={mission.mission_id}>
        <h3>{mission.mission_name}</h3>
        <p>{mission.description}</p>
        </div>
    ));
    } else {
    console.log("No data available");
    return null;
    }
}

return (
<>
    <div>Missions</div>
    <div>
        <h1>Data:</h1>
        <div id='data'>
        {renderRocketData(missions)}
        </div>
    </div>
    </>
);
};
