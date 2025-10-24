import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Mail, Send } from "lucide-react";
import { toast } from "sonner";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast.success("Message envoyé avec succès!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">CyberAnalytics</span>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium">
                Accueil
              </Link>
              <Link href="/dashboard" className="text-slate-600 hover:text-slate-900 font-medium">
                Tableau de Bord
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
                À Propos
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="bg-white rounded-lg p-8 border border-slate-200 mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">À Propos de CyberAnalytics</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              <strong>CyberAnalytics</strong> est une plateforme d'analyse complète des cyberattaques 
              par secteur d'activité. Notre mission est de fournir des données fiables, des analyses 
              approfondies et des recommandations pratiques pour aider les organisations à comprendre 
              et à atténuer les risques de cybersécurité.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">Objectif du Projet</h2>
            <p>
              Ce projet collecte et analyse les données mensuelles/annuelles sur les cyberattaques 
              pour sept secteurs critiques:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Santé (Healthcare)</li>
              <li>Services Financiers (Financial Services)</li>
              <li>Industrie & Énergie (Industrial & Energy)</li>
              <li>IT & Télécommunications (IT & Telecommunications)</li>
              <li>Éducation & Recherche (Education & Research)</li>
              <li>Gouvernement & Services Publics (Government & Public Services)</li>
              <li>Commerce de Détail & E-commerce (Retail & E-commerce)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">Sources de Données</h2>
            <p>
              Nos analyses s'appuient sur des sources de données reconnues et fiables:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
              <h3 className="font-bold text-blue-900 mb-2">Verizon Data Breach Investigations Report (DBIR) 2025</h3>
              <p className="text-blue-700 text-sm">
                Rapport annuel analysant plus de 22,000 incidents de sécurité réels et 12,195 violations 
                de données confirmées à travers 139 pays. Fournit les données sur le nombre d'incidents, 
                les types d'attaques et les motifs des acteurs malveillants.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-4">
              <h3 className="font-bold text-green-900 mb-2">IBM Cost of a Data Breach Report 2024</h3>
              <p className="text-green-700 text-sm">
                Rapport détaillé sur le coût moyen d'une violation de données par secteur, basé sur 
                l'analyse de 604 organisations ayant subi une violation. Fournit les données financières 
                critiques pour l'analyse d'impact.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">Insights Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-bold text-red-900">Secteur le Plus Coûteux</p>
                <p className="text-red-700 text-sm mt-2">Santé: 9,77 M USD par violation</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="font-bold text-orange-900">Plus Grand Volume</p>
                <p className="text-orange-700 text-sm mt-2">Industrie & Énergie: 4259 incidents</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="font-bold text-yellow-900">Plus Vulnérable</p>
                <p className="text-yellow-700 text-sm mt-2">IT & Télécoms: 0,98 ratio violation/incident</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="font-bold text-purple-900">Motif Dominant</p>
                <p className="text-purple-700 text-sm mt-2">Financier: 90%+ des attaques</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">Recommandations</h2>
            <p>
              Sur la base de nos analyses, nous recommandons aux organisations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Adapter leur stratégie de cybersécurité en fonction de leur profil de risque spécifique</li>
              <li>Investir dans la formation des employés contre l'ingénierie sociale</li>
              <li>Adopter une approche Zero Trust pour la sécurité des accès</li>
              <li>Mettre en place une détection et une réponse gérées (MDR)</li>
              <li>Sécuriser les systèmes OT/IT dans les environnements industriels</li>
              <li>Chiffrer les données sensibles et implémenter l'authentification multi-facteurs</li>
            </ul>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white rounded-lg p-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Mail className="w-8 h-8 text-blue-600" />
            Nous Contacter
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="votre.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre message..."
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {loading ? "Envoi en cours..." : "Envoyer le Message"}
            </Button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2025 CyberAnalytics. Analyse des Cyberattaques par Secteur</p>
          <p className="text-sm">Données sources: Verizon DBIR 2025, IBM Cost of a Data Breach 2024</p>
        </div>
      </footer>
    </div>
  );
}

