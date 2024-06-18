import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import CardData from '../../models/CardData';
import TitleCategory from '../../components/TitleCategory/TitleCategory';

function Category() {
    const [dataCard, setDataCard] = useState<CardData[]>([]);

    useEffect(() => {
        fetch('https://fake-api-aluraflix-theta.vercel.app/card')
        .then(response => response.json())
        .then((data: CardData[]) => setDataCard(data))
        .catch(error => console.log("Error: ", error));
    }, []);

    const getColorByCategory = (category: string) => {
        switch(category.toUpperCase()) {
            case 'FRONTEND':
                return "#409bf1";
            case 'BACKEND':
                return "#00c86f";
            case 'FULLSTACK':
                return "#f24822";
            default:
                return "#ffba05";
        }
    };

    const categories = Array.from(new Set(dataCard.map(card => card.category)));

    return (
        // <div className="w-full flex flex-col gap-10 pt-14 lg:pt-8 pb-14 md:pb-24 px-0 lg:px-14"> 
        <div className='grid grid-cols-1 gap-10 pt-14 lg:pt-8 pb-14 md:pb-24 px-0 lg:px-14'>
            {categories.map(category => {
                const color = getColorByCategory(category);
                const categoryCards = dataCard.filter(card => card.category === category);

                return (
                    <div key={category}>
                        <TitleCategory 
                            title={category.toUpperCase()}
                            bgColor={color}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
                            {categoryCards.map(card => (
                                <Card
                                    key={card.id}
                                    image={card.image}
                                    color={color}
                                    width="380px"
                                    height="218px"
                                    modify={true}
                                    videoUrl={card.video}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Category;