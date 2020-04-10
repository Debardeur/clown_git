import axios from 'axios'
const getAllCampaigns = async () => {
    //  const res = await axios.get('http://win.2wls.com:5001/api/campaigns/', {
    //     auth:{
    //         username: 'test',
    //         password: 'test'
    //     }
    // })
    return {"data": [
        {
            "id": 6,
            "campaign_name": "TEST2",
            "campaign_code": "TEST2",
            "nb_participation": 6,
            "enabled": true,
            "start_date": "2020-01-27T00:00:00.000Z",
            "end_date": "2020-02-01T00:00:00.000Z",
            "estimated_nb_participation": 4000,
            "nb_gift": 100,
            "project_id": 1,
            "createdAt": "2020-01-14T17:07:07.364Z",
            "updatedAt": "2020-01-31T16:44:38.073Z"
        },
        {
            "id": 7,
            "campaign_name": "TEST3",
            "campaign_code": "TEST3",
            "nb_participation": 73,
            "enabled": true,
            "start_date": "2020-02-12T00:00:00.000Z",
            "end_date": "2020-02-15T00:00:00.000Z",
            "estimated_nb_participation": 1000,
            "nb_gift": 100,
            "project_id": 1,
            "createdAt": "2020-01-14T17:07:45.347Z",
            "updatedAt": "2020-02-13T15:30:42.860Z"
        },
        {
            "id": 8,
            "campaign_name": "TEST-TOOKEEZ",
            "campaign_code": "TEST-TOOKEEZ",
            "nb_participation": 0,
            "enabled": true,
            "start_date": "2020-04-09T00:00:00.000Z",
            "end_date": "2020-04-10T00:00:00.000Z",
            "estimated_nb_participation": 20,
            "nb_gift": 10,
            "project_id": 1,
            "createdAt": "2020-04-08T18:05:14.668Z",
            "updatedAt": "2020-04-08T18:05:14.668Z"
        },
        {
            "id": 9,
            "campaign_name": "TOOKEEZ-TEST-1",
            "campaign_code": "TOOKEEZ-TEST-1",
            "nb_participation": 0,
            "enabled": true,
            "start_date": "2020-04-09T00:00:00.000Z",
            "end_date": "2020-04-10T00:00:00.000Z",
            "estimated_nb_participation": 20,
            "nb_gift": 10,
            "project_id": 2,
            "createdAt": "2020-04-08T18:14:56.347Z",
            "updatedAt": "2020-04-08T18:14:56.347Z"
        },
        {
            "id": 10,
            "campaign_name": "TOOKEEZ-TEST-2",
            "campaign_code": "TOOKEEZ-TEST-2",
            "nb_participation": 0,
            "enabled": true,
            "start_date": "2020-04-10T00:00:00.000Z",
            "end_date": "2020-04-11T00:00:00.000Z",
            "estimated_nb_participation": 20,
            "nb_gift": 10,
            "project_id": 2,
            "createdAt": "2020-04-09T09:23:10.090Z",
            "updatedAt": "2020-04-09T09:23:10.090Z"
        }
    ]}
}

const getCampaignByID = async (id) => {
    const res = await axios.get(`http://win.2wls.com:5001/api/campaigns/byId/${id}`, {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.data
}


const getCampaignByCode = async (code) => {
    const res = await axios.get(`http://win.2wls.com:5001/api/campaigns/byCode/${code}`, {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.data
}


const addCampaign = async (data) => {
    const res = await axios.post(`http://win.2wls.com:5001/api/campaigns/`,data, {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.data
}

export default {
    getAllCampaigns,
    getCampaignByCode,
    getCampaignByID,
    addCampaign
}