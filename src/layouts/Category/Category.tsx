import Card from "../../components/Card/Card";
import TitleCategory from "../../components/TitleCategory/TitleCategory";

function Category() {
    return (
        <div className="w-full flex flex-col gap-10 pt-8 pb-24 px-10">
            <TitleCategory title="FRONTEND" bgColor="#409bf1"/>
            <div className="flex gap-6">
                <Card image="/public/img-card-front-1.jpeg" alt="Card" color="#409bf1" width="400px" height="224px"/>
                <Card image="/public/img-card-front-2.jpeg" alt="Card" color="#409bf1" width="400px" height="224px" />
                <Card image="/public/img-card-front-3.jpeg" alt="Card" color="#409bf1" width="400px" height="224px"/>
            </div>
            <TitleCategory title="BACKEND" bgColor="#00c86f"/>
            <div className="flex gap-6">
                <Card image="/public/img-card-back-1.jpeg" alt="Card" color="#00c86f" width="400px" height="224px"/>
                <Card image="/public/img-card-back-2.jpeg" alt="Card" color="#00c86f" width="400px" height="224px"/>
                <Card image="/public/img-card-back-3.jpeg" alt="Card" color="#00c86f" width="400px" height="224px"/>
            </div>
            <TitleCategory title="FULLSTACK" bgColor="#f24822"/>
            <div className="flex gap-6">
                <Card image="/public/img-card-fs-1.jpeg" alt="Card" color="#f24822" width="400px" height="224px" />
                <Card image="/public/img-card-fs-2.jpeg" alt="Card" color="#f24822" width="400px" height="224px" />
                <Card image="/public/img-card-fs-3.jpeg" alt="Card" color="#f24822" width="400px" height="224px" />
            </div>
            <TitleCategory title="DEVOPS" bgColor="#ffba05"/>
            <div className="flex gap-6">
                <Card image="/public/img-card-devops-1.jpeg" alt="Card" color="#ffba05" width="400px" height="224px" />
                <Card image="/public/img-card-devops-2.png" alt="Card" color="#ffba05" width="400px" height="224px"/>
            </div>
        </div>
    );
}

export default Category;