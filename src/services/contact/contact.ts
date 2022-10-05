import { api } from "../api"

export const createContact = async (email: string, fullname: string, subject: string, message: string) => {
    const {data} = await api.post('/send', {
        email: email,
        subject: `${fullname} - ${subject}`,
        text: `${email}
               ${message}`,
    })

    return data
}