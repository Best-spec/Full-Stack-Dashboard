

export default function Hero() {
    return (
        <div className="overflow-auto h-[calc(100vh-4rem)] z-0">
            {/* label and control */}
            <section className="bg-white shadow-lg rounded-lg m-10 text-gray-600 flex-col md:flex items-center justify-center">
                <div className="p-10 flex justify-center flex-col gap-10 md:justify-between md:flex-row w-full">
                    <h1 className="flex justify-center text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:text-3xl">ประเภท Top Center</h1>
                    <div className="flex flex-col items-center md:flex-row md:gap-10">
                        <div className="flex justify-center text-lg gap-4 md:text-xl">
                            <button className="">toggle</button>
                            <p>Comapre</p>
                        </div>
                        <div className="flex justify-center items-center text-lg gap-4 md:text-xl">
                            <p>กล่องเลือกวันที่</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-2 pb-10 px-10 w-full md:flex-row">
                    <button className="flex items-center justify-center p-4 w-full h-20 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">Top Center</button>
                    <button className="flex items-center justify-center p-4 w-full h-20 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">Total Email by Language</button>
                </div>
            </section>

            {/* render from get api */}
            {/* chart row 1 */}
            <section className="bg-white shadow-lg rounded-lg m-10 text-gray-600">
                <div className="p-10 flex flex-col gap-10">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:text-3xl">Chart Row 1</h1>
                    <div>chart</div>
                </div>
            </section>

            {/* chart row 2 */}
            <section className="bg-white shadow-lg rounded-lg m-10 text-gray-600">
                <div className="p-10 flex flex-col gap-10">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:text-3xl">Chart Row 2</h1>
                    <div>chart</div>
                </div>
            </section>

            {/* table */}
            <section className="bg-white shadow-lg rounded-lg m-10 text-gray-600">
                <div className="p-10 flex flex-col gap-10">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:text-3xl">Table</h1>
                    <div>table</div>
                </div>
            </section>
        </div>
    );
}