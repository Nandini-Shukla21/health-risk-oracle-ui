import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PredictionResult from './PredictionResult';

interface FormData {
  age: string;
  systolicBP: string;
  diastolicBP: string;
  bs: string;
  bodyTemp: string;
  heartRate: string;
	pregnancies: string;
	complications: string;
	hemoglobin: string;
	bmi: string;
}

const MedicalRiskForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    systolicBP: '',
    diastolicBP: '',
    bs: '',
    bodyTemp: '',
    heartRate: '',
		pregnancies: '',
		complications: '',
		hemoglobin: '',
		bmi: '',
  });
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://maternai-backend.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          age: parseFloat(formData.age),
          systolic_bp: parseFloat(formData.systolicBP),
          diastolic_bp: parseFloat(formData.diastolicBP),
          bs: parseFloat(formData.bs),
          body_temp: parseFloat(formData.bodyTemp),
          heart_rate: parseFloat(formData.heartRate),
					num_of_pregnancies: parseFloat(formData.pregnancies),
					previous_complications: parseFloat(formData.complications),
					hemoglobin: parseFloat(formData.hemoglobin),
					bmi: parseFloat(formData.bmi)
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (e: any) {
      setError(`Failed to get prediction: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (prediction) {
    return <PredictionResult riskLevel={prediction} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-100 p-8 animate-in slide-in-from-bottom-4 duration-700">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🤰</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Medical Information Form</h2>
          <p className="text-gray-600">Please provide accurate information for the best risk assessment</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-1000 delay-300">
            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium text-gray-700">
                Age (years) *
              </Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                required
                min="15"
                max="50"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="Enter your age"
              />
            </div>

            {/* Systolic BP */}
            <div className="space-y-2">
              <Label htmlFor="systolicBP" className="text-sm font-medium text-gray-700">
                Systolic Blood Pressure (mmHg) *
              </Label>
              <Input
                id="systolicBP"
                type="number"
                value={formData.systolicBP}
                onChange={(e) => setFormData({...formData, systolicBP: e.target.value})}
                required
                min="80"
                max="200"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="e.g., 120"
              />
            </div>

            {/* Diastolic BP */}
            <div className="space-y-2">
              <Label htmlFor="diastolicBP" className="text-sm font-medium text-gray-700">
                Diastolic Blood Pressure (mmHg) *
              </Label>
              <Input
                id="diastolicBP"
                type="number"
                value={formData.diastolicBP}
                onChange={(e) => setFormData({...formData, diastolicBP: e.target.value})}
                required
                min="50"
                max="120"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="e.g., 80"
              />
            </div>

            {/* Blood Sugar */}
            <div className="space-y-2">
              <Label htmlFor="bs" className="text-sm font-medium text-gray-700">
                Blood Sugar (mg/dL) *
              </Label>
              <Input
                id="bs"
                type="number"
                value={formData.bs}
                onChange={(e) => setFormData({...formData, bs: e.target.value})}
                required
                min="50"
                max="400"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="e.g., 100"
              />
            </div>

            {/* Body Temperature */}
            <div className="space-y-2">
              <Label htmlFor="bodyTemp" className="text-sm font-medium text-gray-700">
                Body Temperature (°F) *
              </Label>
              <Input
                id="bodyTemp"
                type="number"
                step="0.1"
                value={formData.bodyTemp}
                onChange={(e) => setFormData({...formData, bodyTemp: e.target.value})}
                required
                min="95"
                max="110"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="e.g., 98.6"
              />
            </div>

            {/* Heart Rate */}
            <div className="space-y-2">
              <Label htmlFor="heartRate" className="text-sm font-medium text-gray-700">
                Heart Rate (bpm) *
              </Label>
              <Input
                id="heartRate"
                type="number"
                value={formData.heartRate}
                onChange={(e) => setFormData({...formData, heartRate: e.target.value})}
                required
                min="50"
                max="150"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="e.g., 72"
              />
            </div>

            {/* Number of Pregnancies */}
            <div className="space-y-2">
              <Label htmlFor="pregnancies" className="text-sm font-medium text-gray-700">
                Number of Pregnancies *
              </Label>
              <Input
                id="pregnancies"
                type="number"
                value={formData.pregnancies}
                onChange={(e) => setFormData({...formData, pregnancies: e.target.value})}
                required
                min="1"
                max="20"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="Including current pregnancy"
              />
            </div>

            {/* Previous Complications */}
            <div className="space-y-2">
              <Label htmlFor="complications" className="text-sm font-medium text-gray-700">
                Previous Complications (0=No, 1=Yes) *
              </Label>
              <Input
                id="complications"
                type="number"
                value={formData.complications}
                onChange={(e) => setFormData({...formData, complications: e.target.value})}
                required
                min="0"
                max="1"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="0 or 1"
              />
            </div>

            {/* Hemoglobin Level */}
            <div className="space-y-2">
              <Label htmlFor="hemoglobin" className="text-sm font-medium text-gray-700">
                Hemoglobin Level (g/dL) *
              </Label>
              <Input
                id="hemoglobin"
                type="number"
                step="0.1"
                value={formData.hemoglobin}
                onChange={(e) => setFormData({...formData, hemoglobin: e.target.value})}
                required
                min="5"
                max="20"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="e.g., 12.5"
              />
            </div>

            {/* BMI */}
            <div className="space-y-2">
              <Label htmlFor="bmi" className="text-sm font-medium text-gray-700">
                BMI (Body Mass Index) *
              </Label>
              <Input
                id="bmi"
                type="number"
                step="0.1"
                value={formData.bmi}
                onChange={(e) => setFormData({...formData, bmi: e.target.value})}
                required
                min="15"
                max="50"
                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 transition-colors"
                placeholder="e.g., 23.5"
              />
            </div>
          </div>

          <div className="text-center pt-6 animate-in slide-in-from-bottom-4 duration-1000 delay-700">
            <Button 
              type="submit" 
              disabled={loading}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                'Get Risk Assessment'
              )}
            </Button>
          </div>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-in slide-in-from-top-4 duration-500">
            <p className="text-red-600 text-center font-medium">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalRiskForm;
