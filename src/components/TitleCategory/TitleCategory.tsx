interface TitleCategoryProps {
    title: string;
    bgColor: string;
}

function TitleCategory(props: TitleCategoryProps) {
    return (
        <div className="flex text-white items-center gap-2 rounded-xl font-bold w-52 justify-center"
            style={{backgroundColor: props.bgColor}}
        >
            <h1 className="text-xs md:text-xl font-Onest">{props.title}</h1>
        </div>
    );
}

export default TitleCategory;