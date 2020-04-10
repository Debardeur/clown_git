import axios from 'axios'
const getAllProject = async () => {
    const res = await axios.get('http://win.2wls.com:5001/api/projects/', {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.data
}

const getProjectByID = async (id) => {
    const res = await axios.get(`http://win.2wls.com:5001/api/projects/${id}`, {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.data
}

const addProject = async (data) => {
    const res = await axios.post(`http://win.2wls.com:5001/api/projects/`,data, {
        auth:{
            username: 'test',
            password: 'test'
        }
    })
    return res.status
}

export default {
    getAllProject,
    getProjectByID,
    addProject
}