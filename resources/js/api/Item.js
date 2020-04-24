import axios from "axios";

export default {
    create(data) {
        const url = `/api/item/create`;
        const promise = axios.post(url, data);
        return promise;
    },
    gets(user_id, options) {
        const url = `/api/item/get/${user_id}`;
        const promise = axios.get(url, options);
        return promise;
    },
    get(id, options) {
        const url = `/api/item/edit/${id}`;
        const promise = axios.get(url, options);
        return promise;
    },
    update(id, data) {
        const url = `/api/item/update/${id}`;
        const promise = axios.post(url, data);
        return promise;
    },
    delete(id) {
        const url = `/api/item/delete/${id}`;
        const promise = axios.delete(url);
        return promise;
    },
};
