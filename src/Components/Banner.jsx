


const Banner = () => {
    return (
        <div className="hero  w-10/12 m-auto my-10 h-[500px] shadow-lg shadow-slate-300 rounded-lg" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5  text-5xl font-bold">Well Come <br /> To React <span className="">Router</span> Project</h1>
                    <p className="mb-5"> Advance Topic React Hook Form এর ব্যবহার সম্পর্কে বিস্তারিত জানতে পারেন Google Theke</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
