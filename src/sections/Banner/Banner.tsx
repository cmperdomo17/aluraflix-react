import BannerProps from "../../models/BannerProps";

function Banner({children}: BannerProps) {
    return (
        <section className="relative border-b-4 border-primary">
            <img className="w-full h-full object-cover opacity-50" src="/banner.jpeg" alt="banner" />
            <div className="absolute inset-0 flex items-center justify-center w-full z-0">
                {children}
            </div>
        </section>
    );
}

export default Banner;