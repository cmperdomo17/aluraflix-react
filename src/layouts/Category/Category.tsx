import Card from '../../components/Card/Card';
import TitleCategory from '../../components/TitleCategory/TitleCategory';
import { useState, useEffect } from "react";
import CardData from '../../models/CardData';
import { getCards } from '../../api/api';
import Loading from '../../components/Utils/Loading/Loading';

function Category() {
    const [dataCard, setDataCard] = useState<CardData[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); 
        getCards().then(data => {
            setDataCard(data); 
            setLoading(false); 
        });
    }, []);

    const handleCardDelete = (deletedCardId: string) => {
        setDataCard(dataCard.filter(card => card.id !== deletedCardId));
    };

    const handleCardEdit = (editedCard: CardData) => {
        const updatedData = dataCard.map(card => card.id === editedCard.id ? editedCard : card);
        setDataCard(updatedData);
    };

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
        <div className='grid grid-cols-1 gap-10 pt-10 pb-10 md:pb-16 px-0 lg:px-14'>
            {loading ? (
                <div className='flex justify-center items-center h-screen'>
                    <Loading />
                </div>
            ) : (
                categories.map(category => {
                    const color = getColorByCategory(category);
                    const categoryCards = dataCard.filter(card => card.category === category);

                    return (
                        <div key={category}>
                            <TitleCategory 
                                title={category.toUpperCase()}
                                bgColor={color}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 px-5 md:px-0">
                                {categoryCards.map(card => (
                                    <Card
                                        id={card.id}
                                        key={card.id}
                                        image={card.image}
                                        color={color}
                                        width="380px"
                                        height="218px"
                                        modify={true}
                                        videoUrl={card.video}
                                        onDelete={handleCardDelete}
                                        onEdit={handleCardEdit}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default Category;