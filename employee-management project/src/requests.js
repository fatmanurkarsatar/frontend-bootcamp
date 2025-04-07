export class Request {
    constructor(url) {
        this.url = url;
    }

    async get() {
        try {
            const response = await fetch(this.url);
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok. Status: ${response.status}, Response: ${errorText}`);
            }
            const responseData = await response.json();
            
            // ID'yi integer'a dönüştür
            if (Array.isArray(responseData)) {
                return responseData.map(item => ({
                    ...item,
                    id: Number(item.id)
                }));
            } else if (responseData) {
                responseData.id = Number(responseData.id);
                return responseData;
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
    }

    async post(data) {
        try {
            // ID'yi integer yap
            if (data.id) {
                data.id = Number(data.id);
            }

            const response = await fetch(this.url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok. Status: ${response.status}, Response: ${errorText}`);
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
    }

    async put(id, data) {
        try {
            // ID'yi integer yap
            const response = await fetch(`${this.url}/${Number(id)}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok. Status: ${response.status}, Response: ${errorText}`);
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${this.url}/${Number(id)}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok. Status: ${response.status}, Response: ${errorText}`);
            }
            return "veri silindi";
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
    }
}
