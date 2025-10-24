import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Download, Shield, ArrowLeft } from "lucide-react";

interface CyberAttackData {
  Secteur: string;
  Cout_Violation_Moyen_USD_Millions: number;
  Source_Cout: string;
  Incidents_DBIR_2024: number;
  Violations_DBIR_2024: number;
  Top_Pattern_1: string;
  Top_Pattern_2: string;
  Top_Pattern_3: string;
  Motif_Principal: string;
  Ratio_Violation_Incident: number;
}

export default function Dashboard() {
  const [data, setData] = useState<CyberAttackData[]>([]);
  const [filteredData, setFilteredData] = useState<CyberAttackData[]>([]);
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Charger les données CSV
    fetch("/cyberattack_data_structured.csv")
      .then((res) => res.text())
      .then((csv) => {
        const lines = csv.trim().split("\n");
        const headers = lines[0].split(",");
        const parsedData = lines.slice(1).map((line) => {
          const values = line.split(",");
          return {
            Secteur: values[0],
            Cout_Violation_Moyen_USD_Millions: parseFloat(values[1]),
            Source_Cout: values[2],
            Incidents_DBIR_2024: parseInt(values[3]),
            Violations_DBIR_2024: parseInt(values[4]),
            Top_Pattern_1: values[5],
            Top_Pattern_2: values[6],
            Top_Pattern_3: values[7],
            Motif_Principal: values[8],
            Ratio_Violation_Incident: parseFloat(values[9]),
          };
        });
        setData(parsedData);
        setFilteredData(parsedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des données:", error);
        setLoading(false);
      });
  }, []);

  const handleSectorFilter = (sector: string) => {
    setSelectedSector(sector);
    if (sector === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((d) => d.Secteur === sector));
    }
  };

  const downloadCSV = () => {
    const link = document.createElement("a");
    link.href = "/cyberattack_data_structured.csv";
    link.download = "cyberattack_data.csv";
    link.click();
  };

  const sectors = ["all", ...Array.from(new Set(data.map((d) => d.Secteur)))];

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
              <Link href="/dashboard" className="text-blue-600 font-medium">
                Tableau de Bord
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium">
                À Propos
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Tableau de Bord Interactif</h1>
          <p className="text-slate-600">Analysez les cyberattaques par secteur avec filtrage et visualisations</p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Filtrer par Secteur</h2>
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <Button
                key={sector}
                onClick={() => handleSectorFilter(sector)}
                variant={selectedSector === sector ? "default" : "outline"}
                className={selectedSector === sector ? "bg-blue-600 text-white" : ""}
              >
                {sector === "all" ? "Tous les Secteurs" : sector}
              </Button>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="mb-8 flex gap-4">
          <Button onClick={downloadCSV} className="bg-green-600 hover:bg-green-700 text-white">
            <Download className="w-4 h-4 mr-2" />
            Télécharger CSV
          </Button>
        </div>

        {/* Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-3 bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Coût Moyen d'une Violation de Données</h3>
            <img src="/cout_moyen_violation_secteur.png" alt="Coût moyen" className="w-full h-auto" />
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Incidents et Violations</h3>
            <img src="/incidents_violations_secteur.png" alt="Incidents" className="w-full h-auto" />
          </div>

          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Ratio Vulnérabilité</h3>
            <img src="/ratio_violation_incident.png" alt="Ratio" className="w-full h-auto" />
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-100 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Secteur</th>
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Coût (M USD)</th>
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Incidents</th>
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Violations</th>
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Ratio V/I</th>
                  <th className="px-6 py-3 text-left font-bold text-slate-900">Motif Principal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-slate-600">
                      Chargement des données...
                    </td>
                  </tr>
                ) : filteredData && filteredData.length > 0 ? (
                  filteredData.map((row, idx) => (
                    <tr key={row.Secteur} className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">{row.Secteur}</td>
                      <td className="px-6 py-4 text-slate-600">${row.Cout_Violation_Moyen_USD_Millions.toFixed(2)}M</td>
                      <td className="px-6 py-4 text-slate-600">{row.Incidents_DBIR_2024.toLocaleString()}</td>
                      <td className="px-6 py-4 text-slate-600">{row.Violations_DBIR_2024.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded text-sm font-medium ${
                          row.Ratio_Violation_Incident > 0.9
                            ? "bg-red-100 text-red-800"
                            : row.Ratio_Violation_Incident > 0.75
                            ? "bg-orange-100 text-orange-800"
                            : "bg-green-100 text-green-800"
                        }`}>
                          {row.Ratio_Violation_Incident.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{row.Motif_Principal}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-slate-600">
                      Aucune donnée trouvée
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-2">Secteur le Plus Coûteux</h3>
            <p className="text-blue-700">Santé: 9,77 M USD par violation (14e année consécutive)</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-900 mb-2">Plus Grand Volume</h3>
            <p className="text-red-700">Industrie & Énergie: 4259 incidents, 3540 violations</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="font-bold text-orange-900 mb-2">Plus Vulnérable</h3>
            <p className="text-orange-700">IT & Télécoms: 0,98 ratio (98% incidents = violations)</p>
          </div>
        </div>
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

