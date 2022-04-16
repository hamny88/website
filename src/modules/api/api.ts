import axios from "axios";

type QuoteType = {
    text: string;
    author: string;
}[];
const mainService = {
    callAdvice: async() => {
        console.log("callAdvice")

        try {
            const {data}:any = await axios.get(
                'https://type.fit/api/quotes'
            )
            console.log(data)
            const rand = Math.floor(Math.random() * Math.floor(1642));
            console.log(data[rand])
            const text = data[rand].text;
            const author = data[rand].author;
            console.log(text, author)
            return {text, author};
        } catch(error) {
            console.log(error)
            return null;
        }
    }
};

export default mainService;