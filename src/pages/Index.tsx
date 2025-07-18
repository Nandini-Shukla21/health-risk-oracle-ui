
import MedicalRiskForm from '../components/MedicalRiskForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Medical Risk Prediction</h1>
          <p className="text-lg text-gray-600">AI-powered health risk assessment tool</p>
        </div>
        <MedicalRiskForm />
      </div>
    </div>
  );
};

export default Index;
