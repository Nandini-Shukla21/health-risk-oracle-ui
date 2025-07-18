
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Activity, Heart } from 'lucide-react';

interface PredictionResultProps {
  riskLevel: string;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ riskLevel }) => {
  const isHighRisk = riskLevel.toLowerCase().includes('high');
  
  const getResultConfig = () => {
    if (isHighRisk) {
      return {
        icon: AlertTriangle,
        bgColor: 'bg-gradient-to-br from-red-50 via-pink-50 to-orange-50',
        borderColor: 'border-red-200',
        iconColor: 'text-red-600',
        titleColor: 'text-red-800',
        badgeColor: 'bg-gradient-to-r from-red-500 to-pink-600',
        title: 'HIGH RISK',
        description: 'The assessment indicates elevated pregnancy risk factors. It is strongly recommended to consult with your healthcare provider immediately for comprehensive evaluation and care planning.',
        recommendations: [
          'Schedule an immediate consultation with your obstetrician',
          'Monitor vital signs and symptoms closely',
          'Follow all prescribed medical protocols strictly',
          'Consider lifestyle modifications as advised',
          'Maintain regular prenatal check-ups',
          'Keep emergency contacts readily available'
        ]
      };
    } else {
      return {
        icon: CheckCircle,
        bgColor: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
        borderColor: 'border-green-200',
        iconColor: 'text-green-600',
        titleColor: 'text-green-800',
        badgeColor: 'bg-gradient-to-r from-green-500 to-teal-600',
        title: 'LOW RISK',
        description: 'The assessment indicates low pregnancy risk factors. Continue with routine prenatal care and maintain healthy lifestyle practices for optimal pregnancy outcomes.',
        recommendations: [
          'Maintain regular prenatal check-up schedule',
          'Continue healthy nutrition and exercise habits',
          'Monitor any changes in symptoms or well-being',
          'Follow standard preventive care guidelines',
          'Stay hydrated and get adequate rest',
          'Take prenatal vitamins as recommended'
        ]
      };
    }
  };

  const config = getResultConfig();
  const IconComponent = config.icon;

  return (
    <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-8 duration-700">
      <Card className={`shadow-2xl border-2 ${config.borderColor} ${config.bgColor} overflow-hidden`}>
        <CardHeader className="text-center pb-6 bg-white/50 backdrop-blur-sm">
          <CardTitle className="flex items-center justify-center gap-3 text-3xl mb-4">
            <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              MaternAI Assessment Result
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-8">
          <div className="text-center animate-in scale-in duration-500 delay-300">
            <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-full ${config.badgeColor} text-white font-bold text-2xl shadow-xl transform hover:scale-105 transition-all duration-300`}>
              <IconComponent className="h-7 w-7" />
              <Activity className="h-6 w-6 animate-pulse" />
              {config.title}
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-inner animate-in fade-in duration-700 delay-500">
            <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-600" />
              Assessment Summary
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">{config.description}</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-inner animate-in slide-in-from-left-4 duration-700 delay-700">
            <h3 className="font-bold text-xl text-gray-800 mb-6 flex items-center gap-2">
              <IconComponent className={`h-5 w-5 ${config.iconColor}`} />
              Recommended Actions
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {config.recommendations.map((recommendation, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-white/70 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-3 h-3 rounded-full ${
                    isHighRisk ? 'bg-gradient-to-r from-red-400 to-pink-500' : 'bg-gradient-to-r from-green-400 to-teal-500'
                  } mt-2 flex-shrink-0 animate-pulse`}></div>
                  <span className="text-gray-700 font-medium">{recommendation}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl p-6 shadow-xl animate-in slide-in-from-bottom-4 duration-700 delay-1000">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="h-5 w-5" />
              <p className="font-bold text-lg">Important Medical Disclaimer</p>
            </div>
            <p className="text-pink-100 leading-relaxed">
              This AI prediction is for informational and educational purposes only. It should never replace professional medical advice, diagnosis, or treatment. 
              Always consult with qualified healthcare providers and your obstetrician for all medical decisions during pregnancy.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionResult;
