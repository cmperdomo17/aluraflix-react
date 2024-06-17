interface BannerProps {
    children: React.ReactNode;
}

function Banner(props: BannerProps) {
    return (
        <section className="relative">
            <img className="w-full h-full object-cover opacity-50" src="/public/banner.jpeg" alt="banner" />
            <div className="absolute inset-0 flex items-center justify-center w-full z-0">
                {props.children}
            </div>
        </section>
    );
}

export default Banner;