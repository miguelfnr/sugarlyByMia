import { Cookie, Heart, Instagram, MapPin, Phone, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header / Hero */}
      <header className="relative h-[80vh] flex flex-col items-center justify-center text-center p-6 bg-pink-50">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
          <Cookie className="absolute top-10 left-10 w-24 h-24 rotate-12" />
          <Cookie className="absolute bottom-20 right-20 w-32 h-32 -rotate-45" />
          <Heart className="absolute top-1/4 right-1/4 w-16 h-16 fill-pink-200" />
        </div>
        
        <h1 className="text-6xl font-bold text-pink-500 mb-4 drop-shadow-sm">
          Sugarly By Mia
        </h1>
        <p className="text-xl text-gray-600 max-w-xl italic">
          "Onde a doçura e a arte se encontram em cada detalhe."
        </p>
        <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg">
          Encomendar Agora
        </button>
      </header>

      {/* Categories / Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">As Nossas Especialidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Bolos de Aniversário", desc: "Design personalizado e sabores irresistíveis.", icon: <Star className="text-pink-400" /> },
            { title: "Cupcakes & Doces", desc: "Perfeitos para festas ou um lanche especial.", icon: <Heart className="text-pink-400" /> },
            { title: "Pastelaria Artesanal", desc: "Receitas tradicionais com um toque moderno.", icon: <Cookie className="text-pink-400" /> },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram / Social CTA */}
      <section className="bg-white py-20 px-6 border-t border-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <Instagram className="w-12 h-12 mx-auto text-pink-500 mb-6" />
          <h2 className="text-3xl font-bold mb-6">Segue o nosso dia a dia</h2>
          <p className="text-gray-600 mb-10">Vê as nossas criações mais recentes e novidades exclusivas.</p>
          <a href="#" className="inline-flex items-center gap-2 text-pink-500 font-bold hover:underline">
            @sugarly_bymia
          </a>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-pink-500 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contactos</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+351 9XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Setúbal, Portugal</span>
              </div>
            </div>
          </div>
          <div className="text-right flex flex-col justify-end">
            <p className="opacity-80">© 2026 Sugarly By Mia. Todos os direitos reservados.</p>
            <p className="text-xs mt-2 opacity-50 font-mono">By Miguel Rebelo</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
