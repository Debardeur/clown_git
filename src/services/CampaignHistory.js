import axios from 'axios'
const getAllCampaignHistory = async () => {
    const res = await axios.get('http://win.2wls.com:5001/api/campaignsHistory/', {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.data
}

const getCampaignHistoryByID = async (id) => {
    const res = await axios.get(`http://win.2wls.com:5001/api/campaignsHistory/${id}`, {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.data
}


export default {
    getAllCampaignHistory,
    getCampaignHistoryByID
}