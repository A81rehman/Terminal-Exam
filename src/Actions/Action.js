const url1 = 'https://api.spacexdata.com/v4/rockets';
const url2= 'https://api.spacexdata.com/v3/missions';

export const fetchDataSuccess1 = (data) => ({
    type: 'FETCH_DATA_SUCCESS1',
    payload: data,
});

export const GetData1=()=>{
    return (dispatch)=>{
    fetch(url1,{
        method: 'GET',
    }).then(response => response.json())
    .then((data)=>{
        dispatch(fetchDataSuccess1(data));
    })}
}
export const fetchDataSuccess2 = (data) => ({
    type: 'FETCH_DATA_SUCCESS2',
    payload: data,
});

export const GetData2=()=>{
    return (dispatch)=>{
    fetch(url2,{
        method: 'GET',
    }).then(response => response.json())
    .then((data)=>{
        dispatch(fetchDataSuccess2(data));
    })}
}