export function Content(){
    return(
    <div className="bg-gradient-to-b from-[#fff5e5] to-[#f5995b] min-h-screen w-screen">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-7xl px-4 py-12 my-24 h-auto">
                <div className="text-[#7b3f30]">
                    <h1 className="font-black tracking-tighter text-6xl drop-shadow-md"
                    style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}
                    >For all your Ply needs
                    </h1>
                    <ul className="mb-6 pt-4 text-2xl font-extrabold space-y-1">
                      <li className="drop-shadow-md" style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}>Plywood</li>
                      <li className="drop-shadow-md" style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}>Laminates</li>
                      <li className="drop-shadow-md" style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}>Particle Board</li>
                      <li className="drop-shadow-md" style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}>Louvers</li>
                      <li className="drop-shadow-md" style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}>We got it all</li>
                    </ul>
                    <button className="bg-[#7b3f30] text-white font-semibold px-6 py-4 rounded-md text-shadow drop-shadow-md hover:bg-[#6a362a] transition">
                      Contact us
                    </button>
                </div>
            </div>
            <div className="max-w-7xl px-4 py-12 h-auto hidden md:block">
                <img src="/wood.png" className="w-128" />
            </div>
        </div>

        <div className="max-w-250 mx-auto px-6 py-10 bg-[#fde8cd] rounded-2xl shadow-xl">
          <h2 className="text-6xl font-bold text-[#7b3f30] mb-8 text-center drop-shadow-md tracking-tight"
          style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}
          >Products</h2>
  
          <div className="space-y-8">
            {[
              { title: "Plywood", image: "/plywood.png" },
              { title: "Particle Board", image: "/pb.png" },
              { title: "Laminate", image: "/laminate.png" },
              { title: "Louvers", image: "/louvers.png" },
            ].map((item, i) => (
              <div key={i} className="bg-[#fff0dc] rounded-xl shadow p-4 flex flex-col md:flex-row items-center gap-6">
                <img src={item.image} alt={item.title} className="w-full md:w-[450px] h-auto object-cover rounded-2xl" />
                <div className="flex-1">
                  <h3 className="text-3xl md:text-6xl font-bold text-[#7b3f30] mb-2 drop-shadow-md tracking-tighter"
                    style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}>
                    {item.title}
                  </h3>
                  <p className="text-[#7b3f30] text-xl md:text-3xl my-6 drop-shadow-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique est ac sagittis elementum.
                  </p>
                  <button className="px-4 py-2 text-xl md:text-2xl font-semibold bg-amber-50 drop-shadow-md text-[#7b3f30] border border-[#7b3f30] rounded-md hover:bg-[#7b3f30] hover:text-white transition cursor-pointer">
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="founder max-w-7xl mx-auto px-6">
            <h2 className="text-6xl font-bold text-[#7b3f30] mb-8 text-center drop-shadow-md mt-20 tracking-tight"
            style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}
            >About us</h2>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-10">
                <img src="/founder.png" alt="Founder" className="w-full md:w-[400px] h-auto object-cover rounded-2xl" />

                <div className="flex-1">
                    <h1 className="text-3xl md:text-6xl font-bold text-[#7b3f30] mb-2 tracking-tighter drop-shadow-md"
                    style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}>Rushi Sutar</h1>
                    <h2 className="text-xl md:text-4xl font-bold text-[#7b3f30] mb-2 tracking-tighter drop-shadow-md py-2.5"
                    style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}>Founder</h2>
                    <p className="text-lg md:text-2xl font-bold text-[#7b3f30] mb-4 tracking-tighter leading-8 drop-shadow-md"
                    style={{ textShadow: '1px 5px 5px rgba(0, 0, 0, 0.2)' }}>
                      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    </p>
                    <button className="px-4 py-2 text-xl md:text-2xl font-semibold bg-amber-50 drop-shadow-md text-[#7b3f30] border border-[#7b3f30] rounded-md hover:bg-[#7b3f30] hover:text-white transition cursor-pointer">
                      Get In Touch
                    </button>
                </div>
            </div>
        </div>
    </div>
    ) 
}
