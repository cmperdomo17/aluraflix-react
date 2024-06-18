import TitleCategoryProps from "../../models/TitleCategoryProps";

function TitleCategory({ title, bgColor }: TitleCategoryProps) {
    return (
        <div className="flex text-white items-center gap-2 rounded-none lg:rounded-xl font-bold w-full lg:w-52 justify-center py-1"
            style={{backgroundColor: bgColor}}
        >
            <h1 className="text-xl font-Onest font-extrabold">{title}</h1>
        </div>
    );
}

export default TitleCategory;