import createApiClient from "./api.service";
class NhaxuatbanService {
    constructor(baseUrl = "/api/nxbs") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async findByName(tennxb) {
        return (await this.api.findByName(`/${tennxb}`)).data;
    }
}
export default new NhaxuatbanService();