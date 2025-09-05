import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Upload } from 'lucide-react';

interface BriefFormData {
  // Step 1: Basic info
  name: string;
  email: string;
  company: string;
  
  // Step 2: Project type
  projectType: string;
  
  // Step 3: Goals
  goals: string[];
  otherGoal: string;
  
  // Step 4: Audience
  audience: string[];
  
  // Step 5: Style & references
  references: string;
  stylePreference: string;
  
  // Step 6: Budget & timeline
  budget: string;
  deadline: string;
  
  // Step 7: Extra details
  comments: string;
}

interface BriefFormErrors {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  goals?: string;
  otherGoal?: string;
  audience?: string;
  references?: string;
  stylePreference?: string;
  budget?: string;
  deadline?: string;
  comments?: string;
}

const Brief: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<BriefFormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    goals: [],
    otherGoal: '',
    audience: [],
    references: '',
    stylePreference: '',
    budget: '',
    deadline: '',
    comments: ''
  });
  const [errors, setErrors] = useState<BriefFormErrors>({});

  const totalSteps = 7;

  const projectTypes = [
    'Logo Reveal',
    'Explainer (30–60s)',
    'UI Micro-interactions',
    'Lottie / App Animation',
    'Advertising Video'
  ];

  const goalOptions = [
    'Brand presentation',
    'Explain product/service',
    'Sales / marketing',
    'Social media engagement',
    'Other'
  ];

  const audienceOptions = [
    'Customers',
    'Investors/partners',
    'App users',
    'Internal team'
  ];

  const styleOptions = [
    'Minimal',
    'Dynamic',
    '2D',
    '3D',
    'Flat',
    'Lottie'
  ];

  const budgetRanges = [
    '<$500',
    '$500–1500',
    '$1500–3000',
    '>$3000'
  ];

  const deadlineOptions = [
    '1 week',
    '2–4 weeks',
    'Flexible'
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: BriefFormErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (step === 2) {
      if (!formData.projectType) {
        newErrors.projectType = 'Please select a project type';
      }
    }

    if (step === 3) {
      if (formData.goals.length === 0) {
        newErrors.goals = 'Please select at least one goal';
      }
    }

    if (step === 4) {
      if (formData.audience.length === 0) {
        newErrors.audience = 'Please select at least one audience';
      }
    }

    if (step === 6) {
      if (!formData.budget) {
        newErrors.budget = 'Please select a budget range';
      }
      if (!formData.deadline) {
        newErrors.deadline = 'Please select a deadline';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof BriefFormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCheckboxChange = (field: 'goals' | 'audience', value: string) => {
    const currentValues = formData[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    
    handleInputChange(field, newValues);
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(7)) {
      // Simulate form submission
      setIsSubmitted(true);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      goals: [],
      otherGoal: '',
      audience: [],
      references: '',
      stylePreference: '',
      budget: '',
      deadline: '',
      comments: ''
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-6">
              <Link
                to="/motion-designer-website"
                className="inline-flex items-center text-gray-200 hover:text-white transition-colors duration-200 absolute top-8 left-8"
              >
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Project Brief
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Let's bring your vision to life together
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-primary-bg rounded-2xl shadow-xl p-8 lg:p-12 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary-text mb-4">
              Thank you, {formData.name}!
            </h2>
            <p className="text-lg text-secondary-text mb-6">
              I'll review your brief and get back to you within 24 hours.
            </p>
            <p className="text-gray-500 mb-8">
              Your {formData.projectType.toLowerCase()} project sounds exciting! I'll prepare a detailed proposal based on your requirements.
            </p>
            <button
              onClick={resetForm}
              className="bg-[accent] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[accent/90] transition-colors duration-200"
            >
              Submit Another Brief
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Link
              to="/motion-designer-website"
              className="inline-flex items-center text-gray-200 hover:text-white transition-colors duration-200 absolute top-8 left-8"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Project Brief
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Fill out this short questionnaire so I can understand your project and prepare the right proposal.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary-bg rounded-2xl shadow-xl p-8 lg:p-12">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-[accent]">
                {currentStep === 1 && 'Basic Information'}
                {currentStep === 2 && 'Project Type'}
                {currentStep === 3 && 'Goals'}
                {currentStep === 4 && 'Target Audience'}
                {currentStep === 5 && 'Style & References'}
                {currentStep === 6 && 'Budget & Timeline'}
                {currentStep === 7 && 'Additional Details'}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[accent] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-text mb-6">
                Basic Information
              </h2>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[accent] focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[accent] focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Website
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[accent] focus:border-transparent"
                  placeholder="Your company or website (optional)"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="bg-[accent] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[accent/90] transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2"
                >
                  Next Step
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Project Type */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-text mb-6">
                Project Type
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What type of project do you need? *
                </label>
                <div className="space-y-3">
                  {projectTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="projectType"
                        value={type}
                        checked={formData.projectType === type}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="h-4 w-4 text-[accent] focus:ring-[accent] border-gray-300"
                      />
                      <span className="ml-3 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[accent] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[accent/90] transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2"
                >
                  Next Step
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Goals */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-text mb-6">
                Project Goals
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What are your main goals? (Select all that apply) *
                </label>
                <div className="space-y-3">
                  {goalOptions.map((goal) => (
                    <label key={goal} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={() => handleCheckboxChange('goals', goal)}
                        className="h-4 w-4 text-[accent] focus:ring-[accent] border-gray-300 rounded"
                      />
                      <span className="ml-3 text-gray-700">{goal}</span>
                    </label>
                  ))}
                </div>
                {formData.goals.includes('Other') && (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={formData.otherGoal}
                      onChange={(e) => handleInputChange('otherGoal', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[accent] focus:border-transparent"
                      placeholder="Please specify..."
                    />
                  </div>
                )}
                {errors.goals && (
                  <p className="mt-1 text-sm text-red-600">{errors.goals}</p>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[accent] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[accent/90] transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2"
                >
                  Next Step
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Target Audience */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-text mb-6">
                Target Audience
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Who is your target audience? (Select all that apply) *
                </label>
                <div className="space-y-3">
                  {audienceOptions.map((audience) => (
                    <label key={audience} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.audience.includes(audience)}
                        onChange={() => handleCheckboxChange('audience', audience)}
                        className="h-4 w-4 text-[accent] focus:ring-[accent] border-gray-300 rounded"
                      />
                      <span className="ml-3 text-gray-700">{audience}</span>
                    </label>
                  ))}
                </div>
                {errors.audience && (
                  <p className="mt-1 text-sm text-red-600">{errors.audience}</p>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[accent] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[accent/90] transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2"
                >
                  Next Step
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Style & References */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-text mb-6">
                Style & References
              </h2>

              <div>
                <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-2">
                  References (links or upload)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="references"
                    value={formData.references}
                    onChange={(e) => handleInputChange('references', e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[accent] focus:border-transparent"
                    placeholder="Paste links to references or inspiration..."
                  />
                  <Upload className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Share links to videos, websites, or other references that inspire you
                </p>
              </div>

              <div>
                <label htmlFor="stylePreference" className="block text-sm font-medium text-gray-700 mb-2">
                  Style Preference
                </label>
                <select
                  id="stylePreference"
                  value={formData.stylePreference}
                  onChange={(e) => handleInputChange('stylePreference', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[accent] focus:border-transparent"
                >
                  <option value="">Select a style...</option>
                  {styleOptions.map((style) => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[accent] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[accent/90] transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2"
                >
                  Next Step
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Budget & Timeline */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-text mb-6">
                Budget & Timeline
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Budget Range *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {budgetRanges.map((range) => (
                    <label key={range} className="flex items-center">
                      <input
                        type="radio"
                        name="budget"
                        value={range}
                        checked={formData.budget === range}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="h-4 w-4 text-[accent] focus:ring-[accent] border-gray-300"
                      />
                      <span className="ml-3 text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-600">{errors.budget}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Deadline *
                </label>
                <div className="space-y-3">
                  {deadlineOptions.map((deadline) => (
                    <label key={deadline} className="flex items-center">
                      <input
                        type="radio"
                        name="deadline"
                        value={deadline}
                        checked={formData.deadline === deadline}
                        onChange={(e) => handleInputChange('deadline', e.target.value)}
                        className="h-4 w-4 text-[accent] focus:ring-[accent] border-gray-300"
                      />
                      <span className="ml-3 text-gray-700">{deadline}</span>
                    </label>
                  ))}
                </div>
                {errors.deadline && (
                  <p className="mt-1 text-sm text-red-600">{errors.deadline}</p>
                )}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="bg-[accent] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[accent/90] transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2"
                >
                  Next Step
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* Step 7: Additional Details */}
          {currentStep === 7 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-text mb-6">
                Additional Details
              </h2>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Comments
                </label>
                <textarea
                  id="comments"
                  rows={6}
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[accent] focus:border-transparent"
                  placeholder="Any additional details, specific requirements, or questions you'd like to share..."
                />
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-[accent] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[accent/90] transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-[accent] focus:ring-offset-2"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Send Brief
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brief;