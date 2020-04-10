import axios from 'axios'
const getAllParticipations = async () => {
    const res = await axios.get('http://win.2wls.com:5001/api/participations/', {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.data
}

const getParticipationByID = async (id) => {
    const res = await axios.get(`http://win.2wls.com:5001/api/participations/${id}`, {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.data
}


export default {
    getAllParticipations,
    getParticipationByID
}