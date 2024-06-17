interface TitleCategoryProps {
    title: string;
    bgColor: string;
}

function TitleCategory({ title, bgColor }: TitleCategoryProps) {
    return (
        <div className="flex text-white items-center gap-2 rounded-none md:rounded-xl font-bold w-full md:w-52 justify-center"
            style={{backgroundColor: bgColor}}
        >
            <h1 className="text-xl font-Onest">{title}</h1>
        </div>
    );
}

export default TitleCategory;