import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BarChart3, TrendingUp, Shield, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
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
              <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium">
                À Propos
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Analyse Complète des <span className="text-blue-600">Cyberattaques</span> par Secteur
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Explorez les données, tendances et impacts des cyberattaques sur 7 secteurs critiques. 
            Coûts, incidents, vulnérabilités et recommandations basées sur le DBIR 2025 et les rapports IBM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/dashboard">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Accéder au Tableau de Bord
              </Button>
            </Link>
            <a href="/cyberattack_data_structured.csv" download>
              <Button size="lg" variant="outline" className="px-8">
                <Download className="w-4 h-4 mr-2" />
                Télécharger les Données
              </Button>
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <p className="text-slate-600">Secteurs Analysés</p>
              <p className="text-sm text-slate-500 mt-2">Santé, Finance, Industrie, IT, Éducation, Gouvernement, Retail</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="text-3xl font-bold text-red-600 mb-2">22K+</div>
              <p className="text-slate-600">Incidents Enregistrés</p>
              <p className="text-sm text-slate-500 mt-2">Données agrégées du DBIR 2025</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="text-3xl font-bold text-green-600 mb-2">9.77M</div>
              <p className="text-slate-600">Coût Maximal (USD)</p>
              <p className="text-sm text-slate-500 mt-2">Violation de données en Santé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Fonctionnalités</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Visualisations</h3>
              <p className="text-slate-600 text-sm">Graphiques interactifs des coûts, incidents et vulnérabilités</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Filtrage</h3>
              <p className="text-slate-600 text-sm">Analysez les données par secteur avec filtres interactifs</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Téléchargement</h3>
              <p className="text-slate-600 text-sm">Exportez les données CSV et rapports d'analyse</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Recommandations</h3>
              <p className="text-slate-600 text-sm">Conseils de sécurité adaptés à chaque secteur</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Prêt à explorer les données?</h2>
          <p className="text-lg mb-8 opacity-90">
            Accédez au tableau de bord interactif pour analyser les cyberattaques par secteur
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8">
              Lancer l'Analyse
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2025 CyberAnalytics. Analyse des Cyberattaques par Secteur</p>
          <p className="text-sm">Données sources: Verizon DBIR 2025, IBM Cost of a Data Breach 2024</p>
        </div>
      </footer>
    </div>
  );
}

