import axios from 'axios'

export const base_URL = "https://api.themoviedb.org/3"
const KEY = "5760fc9556fe6d998cb7ad635907ca09"

export const GetPopular = async (page) => {
    try { const res = await axios
        .get(`${base_URL}/movie/popular?api_key=${KEY}&language=pt-BR&page=${page}`)
        return res.data
    } catch (err) { alert("We hope this won't show up!") }
};

export const GetDetail = async (id) => {
    try { const res = await axios
        .get(`${base_URL}/movie/${id}?api_key=${KEY}&language=pt-BR`)
        return res.data
        console.log(res)
    } catch (err) {alert("We hope this won't show up!")}
};

export const GetGenre = async () => {
    try { const res = await axios
        .get(`${base_URL}/genre/movie/list?api_key=${KEY}&language=pt-BR`)
        return res
        console.log(res)
    } catch (err) {alert("We hope this won't show up!")}
}
export const GetRecomendations = async (id) => {
    try { const res = await axios
        .get(`${base_URL}/movie/${id}/recommendations?api_key=${KEY}&language=pt-BR&page=1`)
        return res.data
        console.log(res)
    } catch (err) {alert("We hope this won't show up!")}
}
export const GetActors = async (id) => {
    try { const res = await axios
        .get(`${base_URL}/movie/${id}/credits?api_key=${KEY}&language=pt-BR`)
        return res.data
    } catch (err) {alert("We hope this won't show up!")}
}
export const GetTrailer = async (id) => {
    try { const res = await axios
        .get(`${base_URL}/movie/${id}/videos?api_key=${KEY}&language=pt-BR`)
        return res.data
    } catch {}
}
export const GetAge =  async (id) => {
    try { const res = await axios 
        .get(`${base_URL}/movie/${id}/release_dates?api_key=${KEY}`)
        return res.data
    } catch {}
}