
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Activity } from 'lucide-react';

interface PredictionResultProps {
  riskLevel: string;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ riskLevel }) => {
  const isHighRisk = riskLevel.toLowerCase().includes('high');
  
  const getResultConfig = () => {
    if (isHighRisk) {
      return {
        icon: AlertTriangle,
        bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
        borderColor: 'border-red-200',
        iconColor: 'text-red-600',
        titleColor: 'text-red-800',
        title: 'HIGH RISK',
        description: 'The patient shows indicators of high medical risk. Please consult with a healthcare professional for immediate assessment and care planning.',
        recommendations: [
          'Schedule immediate medical consultation',
          'Monitor vital signs closely',
          'Follow prescribed treatment protocols',
          'Consider lifestyle modifications'
        ]
      };
    } else {
      return {
        icon: CheckCircle,
        bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
        borderColor: 'border-green-200',
        iconColor: 'text-green-600',
        titleColor: 'text-green-800',
        title: 'LOW RISK',
        description: 'The patient shows indicators of low medical risk. Continue with routine care and monitoring.',
        recommendations: [
          'Maintain regular check-ups',
          'Continue healthy lifestyle habits',
          'Monitor any changes in symptoms',
          'Follow preventive care guidelines'
        ]
      };
    }
  };

  const config = getResultConfig();
  const IconComponent = config.icon;

  return (
    <Card className={`shadow-lg border-2 ${config.borderColor} ${config.bgColor} animate-in slide-in-from-bottom-4 duration-500`}>
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl">
          <IconComponent className={`h-8 w-8 ${config.iconColor}`} />
          <span className={config.titleColor}>Risk Assessment Result</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
            isHighRisk ? 'bg-red-600' : 'bg-green-600'
          } text-white font-bold text-xl shadow-lg`}>
            <Activity className="h-6 w-6" />
            {config.title}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-inner">
          <h3 className="font-semibold text-gray-800 mb-3">Assessment Summary</h3>
          <p className="text-gray-700 leading-relaxed">{config.description}</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-inner">
          <h3 className="font-semibold text-gray-800 mb-4">Recommended Actions</h3>
          <ul className="space-y-2">
            {config.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  isHighRisk ? 'bg-red-400' : 'bg-green-400'
                } mt-2 flex-shrink-0`}></div>
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center text-sm text-gray-600 bg-white rounded-lg p-4 shadow-inner">
          <p className="font-medium">Important Notice</p>
          <p>This prediction is for informational purposes only and should not replace professional medical advice. Always consult with qualified healthcare providers for medical decisions.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionResult;
