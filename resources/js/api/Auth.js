import axios from "axios";

export default {
    setUserInfo() {
        const url = `/api/auth/user`;
        const promise = axios.get(url);
        return promise;
    },
    fetch(orgId, data, options) {
        const url = `/api/web/${orgId}/item`;
        const promise = axios.post(url, data, options);
        return promise;
    },
    logout() {
        const url = `/logout`;
        const promise = axios.post(url);
        return promise;
    },
    // delete(orgId, data) {
    //     const url = `/api/web/${orgId}/item`;
    //     const promise = axios.delete(url, { data: { ids: data.ids }});
    //     return promise;
    // },
};
