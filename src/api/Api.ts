async function fetchData() {
    try {
        const res = await fetch('https://fake-api-aluraflix-theta.vercel.app/card');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("Error: ", error);
        return [];
    }
}
export { fetchData };

// function Api() {
//     const [dataCard, setDataCard] = useState<CardData[]>([]);

//     useEffect(() => {
//         fetch('https://fake-api-aluraflix-theta.vercel.app/card')
//         .then(response => response.json())
//         .then((data: CardData[]) => setDataCard(data))
//         .catch(error => console.log("Error: ", error));
//     }, []);
// }

// export default Api;