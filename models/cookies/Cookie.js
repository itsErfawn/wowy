import { cookies } from 'next/headers';

let CookieStore = {
    async init() {
        return await cookies();
    },
    async get(name) {
        let selected = (await this.init()).get(name);
        return selected || false;
    },
    async remove(name) {
        try {
            const res = await fetch(`${process.env.BASE_URL}/api/sign-in?value=${encodeURIComponent(name)}`, {
                method: "DELETE"
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return { success: false, error };
        }
    }
};

export default CookieStore;
