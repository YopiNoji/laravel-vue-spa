import axios from "axios";

export default {
    // create(orgId, data) {
    //     const url = `/api/web/${orgId}/item`;
    //     const promise = axios.post(url, data);
    //     return promise;
    // },
    fetch(orgId, data, options) {
        const url = `/api/web/${orgId}/item`;
        const promise = axios.post(url, data, options);
        return promise;
    },
    // update(orgId, data) {
    //     const url = `/api/web/${orgId}/item`;
    //     const promise = axios.patch(url, data);
    //     return promise;
    // },
    // delete(orgId, data) {
    //     const url = `/api/web/${orgId}/item`;
    //     const promise = axios.delete(url, { data: { ids: data.ids }});
    //     return promise;
    // },
};
