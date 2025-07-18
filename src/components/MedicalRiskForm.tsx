
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Heart, Activity } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import PredictionResult from './PredictionResult';

interface FormData {
  age: string;
  systolicBP: string;
  diastolicBP: string;
  bloodSugar: string;
  bodyTemp: string;
  heartRate: string;
  pregnancies: string;
  complications: string;
  hemoglobin: string;
  bmi: string;
}

interface FormErrors {
  [key: string]: string;
}

const MedicalRiskForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    age: '',
    systolicBP: '',
    diastolicBP: '',
    bloodSugar: '',
    bodyTemp: '',
    heartRate: '',
    pregnancies: '',
    complications: '',
    hemoglobin: '',
    bmi: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Age validation
    const age = parseFloat(formData.age);
    if (!formData.age || age < 0 || age > 120) {
      newErrors.age = 'Age must be between 0 and 120';
    }

    // Blood pressure validation
    const systolic = parseFloat(formData.systolicBP);
    const diastolic = parseFloat(formData.diastolicBP);
    if (!formData.systolicBP || systolic < 70 || systolic > 250) {
      newErrors.systolicBP = 'Systolic BP must be between 70 and 250 mmHg';
    }
    if (!formData.diastolicBP || diastolic < 40 || diastolic > 150) {
      newErrors.diastolicBP = 'Diastolic BP must be between 40 and 150 mmHg';
    }

    // Blood sugar validation
    const bs = parseFloat(formData.bloodSugar);
    if (!formData.bloodSugar || bs < 50 || bs > 500) {
      newErrors.bloodSugar = 'Blood sugar must be between 50 and 500 mg/dL';
    }

    // Body temperature validation
    const temp = parseFloat(formData.bodyTemp);
    if (!formData.bodyTemp || temp < 95 || temp > 110) {
      newErrors.bodyTemp = 'Body temperature must be between 95°F and 110°F';
    }

    // Heart rate validation
    const hr = parseFloat(formData.heartRate);
    if (!formData.heartRate || hr < 40 || hr > 200) {
      newErrors.heartRate = 'Heart rate must be between 40 and 200 bpm';
    }

    // Pregnancies validation
    const pregnancies = parseFloat(formData.pregnancies);
    if (!formData.pregnancies || pregnancies < 0 || pregnancies > 20) {
      newErrors.pregnancies = 'Number of pregnancies must be between 0 and 20';
    }

    // Previous complications validation
    const complications = parseFloat(formData.complications);
    if (!formData.complications || complications < 0 || complications > 10) {
      newErrors.complications = 'Previous complications must be between 0 and 10';
    }

    // Hemoglobin validation
    const hb = parseFloat(formData.hemoglobin);
    if (!formData.hemoglobin || hb < 5 || hb > 20) {
      newErrors.hemoglobin = 'Hemoglobin level must be between 5 and 20 g/dL';
    }

    // BMI validation
    const bmi = parseFloat(formData.bmi);
    if (!formData.bmi || bmi < 10 || bmi > 50) {
      newErrors.bmi = 'BMI must be between 10 and 50';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setPrediction(null);

    try {
      const payload = {
        age: parseFloat(formData.age),
        systolic_bp: parseFloat(formData.systolicBP),
        diastolic_bp: parseFloat(formData.diastolicBP),
        bs: parseFloat(formData.bloodSugar),
        body_temp: parseFloat(formData.bodyTemp),
        heart_rate: parseFloat(formData.heartRate),
        pregnancies: parseFloat(formData.pregnancies),
        previous_complications: parseFloat(formData.complications),
        hemoglobin: parseFloat(formData.hemoglobin),
        bmi: parseFloat(formData.bmi)
      };

      console.log('Sending prediction request:', payload);

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Prediction result:', result);
      
      setPrediction(result.risk_level || result.prediction || 'Unknown');
      
      toast({
        title: "Prediction Complete",
        description: `Risk assessment completed successfully.`,
      });

    } catch (error) {
      console.error('Prediction error:', error);
      toast({
        title: "Prediction Failed",
        description: "Unable to connect to the prediction service. Please ensure the API server is running on localhost:5000.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputFields = [
    { key: 'age', label: 'Age', placeholder: 'e.g. 45', unit: 'years' },
    { key: 'systolicBP', label: 'Systolic Blood Pressure', placeholder: 'e.g. 120', unit: 'mmHg' },
    { key: 'diastolicBP', label: 'Diastolic Blood Pressure', placeholder: 'e.g. 80', unit: 'mmHg' },
    { key: 'bloodSugar', label: 'Blood Sugar (BS)', placeholder: 'e.g. 100', unit: 'mg/dL' },
    { key: 'bodyTemp', label: 'Body Temperature', placeholder: 'e.g. 98.6', unit: '°F' },
    { key: 'heartRate', label: 'Heart Rate', placeholder: 'e.g. 72', unit: 'bpm' },
    { key: 'pregnancies', label: 'Number of Pregnancies', placeholder: 'e.g. 2', unit: '' },
    { key: 'complications', label: 'Previous Complications', placeholder: 'e.g. 0', unit: '' },
    { key: 'hemoglobin', label: 'Hemoglobin Level', placeholder: 'e.g. 12.5', unit: 'g/dL' },
    { key: 'bmi', label: 'BMI', placeholder: 'e.g. 24.5', unit: 'kg/m²' }
  ];

  return (
    <div className="space-y-8">
      <Card className="shadow-lg border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Heart className="h-6 w-6" />
            Patient Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inputFields.map(({ key, label, placeholder, unit }) => (
                <div key={key} className="space-y-2">
                  <Label htmlFor={key} className="text-sm font-medium text-gray-700">
                    {label}
                    {unit && <span className="text-gray-500 ml-1">({unit})</span>}
                  </Label>
                  <Input
                    id={key}
                    type="number"
                    step="0.01"
                    placeholder={placeholder}
                    value={formData[key as keyof FormData]}
                    onChange={(e) => handleInputChange(key as keyof FormData, e.target.value)}
                    className={`transition-all duration-200 ${
                      errors[key] 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                    }`}
                  />
                  {errors[key] && (
                    <p className="text-sm text-red-600 mt-1">{errors[key]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Activity className="mr-2 h-5 w-5" />
                    Predict Risk Level
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {prediction && <PredictionResult riskLevel={prediction} />}
    </div>
  );
};

export default MedicalRiskForm;
