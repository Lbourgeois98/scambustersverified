import React, { useState } from 'react';
import { FileText, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  pageName: string;
  alternateContact: string;
  backupPages: string;
  role: string;
  pageOrigin: string;
  manageOtherPages: string;
  businessExperience: string;
  numberOfEmployees: string;
  needPromotor: string;
  mopsAccess: string;
  mopsBalances: string;
  businessHours: string;
  cashoutHours: string;
  cashoutProcedure: string;
  bonusesRules: string;
  platforms: string;
  currentlyVerified: string;
  previouslyVerified: string;
  everBlacklisted: string;
  signature: string;
  date: string;
}

const ApplyPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    pageName: '',
    alternateContact: '',
    backupPages: '',
    role: '',
    pageOrigin: '',
    manageOtherPages: '',
    businessExperience: '',
    numberOfEmployees: '',
    needPromotor: '',
    mopsAccess: '',
    mopsBalances: '',
    businessHours: '',
    cashoutHours: '',
    cashoutProcedure: '',
    bonusesRules: '',
    platforms: '',
    currentlyVerified: '',
    previouslyVerified: '',
    everBlacklisted: '',
    signature: '',
    date: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    // Required fields validation
    const requiredFields: (keyof FormData)[] = [
      'fullName', 'pageName', 'alternateContact', 'backupPages', 'role', 
      'pageOrigin', 'manageOtherPages', 'businessExperience', 'numberOfEmployees',
      'needPromotor', 'mopsAccess', 'mopsBalances', 'businessHours', 'cashoutHours',
      'cashoutProcedure', 'bonusesRules', 'platforms', 'currentlyVerified',
      'previouslyVerified', 'everBlacklisted', 'signature', 'date'
    ];

    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Create email body with all form data
    const emailBody = `
Agent Verification Application

Basic Information:
- Full Name: ${formData.fullName}
- Page Name: ${formData.pageName}
- Alternate Contact: ${formData.alternateContact}
- Backup Pages: ${formData.backupPages}

Business Details:
- Role: ${formData.role}
- Page Origin: ${formData.pageOrigin}
- Other Pages Managed: ${formData.manageOtherPages}
- Business Experience: ${formData.businessExperience}
- Number of Employees: ${formData.numberOfEmployees}
- Need Promotor: ${formData.needPromotor}
- M.O.P.s Access: ${formData.mopsAccess}

Operations:
- M.O.P.s and Balances: ${formData.mopsBalances}
- Business Hours: ${formData.businessHours}
- Cashout Hours: ${formData.cashoutHours}
- Cashout Procedure: ${formData.cashoutProcedure}
- Bonuses and Rules: ${formData.bonusesRules}
- Platforms Offered: ${formData.platforms}

Verification History:
- Currently Verified: ${formData.currentlyVerified}
- Previously Verified: ${formData.previouslyVerified}
- Ever Blacklisted: ${formData.everBlacklisted}

Signature:
- Signature/Initials: ${formData.signature}
- Date: ${formData.date}

Submitted on: ${new Date().toLocaleString()}
    `.trim();

    // Create mailto link
    const subject = encodeURIComponent(`Agent Verification Application - ${formData.pageName}`);
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:scambustersverified@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="dark-box rounded-lg p-8 text-center">
              <div className="bg-green-500/20 p-4 rounded-full inline-block mb-6 border border-green-500/30">
                <CheckCircle className="h-12 w-12 text-green-400" />
              </div>
              <h1 className="text-3xl font-bold mb-4 text-white">Application Prepared!</h1>
              <p className="text-gray-300 mb-6">
                Your application has been prepared and your email client should have opened. Please send the email to complete your submission. Our verification team will review your application and contact you within 3-5 business days.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '', pageName: '', alternateContact: '', backupPages: '', role: '',
                    pageOrigin: '', manageOtherPages: '', businessExperience: '', numberOfEmployees: '',
                    needPromotor: '', mopsAccess: '', mopsBalances: '', businessHours: '', cashoutHours: '',
                    cashoutProcedure: '', bonusesRules: '', platforms: '', currentlyVerified: '',
                    previouslyVerified: '', everBlacklisted: '', signature: '', date: ''
                  });
                }}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg transition-all"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex justify-center items-center p-2 bg-red-600 rounded-full mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">Agent Verification Application</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Complete this comprehensive application to begin the verification process. All fields marked with * are required.
            </p>
          </div>

          <div className="dark-box rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-white/20 pb-2">Basic Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.fullName ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Page Name *
                    </label>
                    <input
                      type="text"
                      name="pageName"
                      value={formData.pageName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.pageName ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                      placeholder="Enter your page/business name"
                    />
                    {errors.pageName && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.pageName}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Alternate Contact Method *
                  </label>
                  <input
                    type="text"
                    name="alternateContact"
                    value={formData.alternateContact}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.alternateContact ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                    placeholder="Phone number, Telegram, etc."
                  />
                  {errors.alternateContact && (
                    <div className="mt-1 text-red-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.alternateContact}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Backup Pages or Profiles *
                  </label>
                  <textarea
                    name="backupPages"
                    value={formData.backupPages}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.backupPages ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                    placeholder="List any backup pages or profiles"
                  />
                  {errors.backupPages && (
                    <div className="mt-1 text-red-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.backupPages}
                    </div>
                  )}
                </div>
              </div>

              {/* Business Details */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-white/20 pb-2">Business Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.role ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white`}
                    >
                      <option value="" className="bg-black">Select your role</option>
                      <option value="own" className="bg-black">Own</option>
                      <option value="manage" className="bg-black">Manage</option>
                      <option value="load" className="bg-black">Load</option>
                      <option value="cashier" className="bg-black">Cashier</option>
                    </select>
                    {errors.role && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.role}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Origin of Page *
                    </label>
                    <select
                      name="pageOrigin"
                      value={formData.pageOrigin}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.pageOrigin ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white`}
                    >
                      <option value="" className="bg-black">Select origin</option>
                      <option value="created" className="bg-black">Created</option>
                      <option value="bought" className="bg-black">Bought</option>
                      <option value="rented" className="bg-black">Rented</option>
                    </select>
                    {errors.pageOrigin && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.pageOrigin}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Do you manage any other pages? *
                    </label>
                    <textarea
                      name="manageOtherPages"
                      value={formData.manageOtherPages}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.manageOtherPages ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                      placeholder="List other pages you manage or write 'None'"
                    />
                    {errors.manageOtherPages && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.manageOtherPages}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Business Experience *
                    </label>
                    <input
                      type="text"
                      name="businessExperience"
                      value={formData.businessExperience}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.businessExperience ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                      placeholder="How many months/years in online gaming?"
                    />
                    {errors.businessExperience && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.businessExperience}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Number of Employees *
                    </label>
                    <input
                      type="number"
                      name="numberOfEmployees"
                      value={formData.numberOfEmployees}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.numberOfEmployees ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                      placeholder="Number of employees"
                    />
                    {errors.numberOfEmployees && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.numberOfEmployees}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Do you need a promotor? *
                    </label>
                    <select
                      name="needPromotor"
                      value={formData.needPromotor}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.needPromotor ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white`}
                    >
                      <option value="" className="bg-black">Select option</option>
                      <option value="yes" className="bg-black">Yes</option>
                      <option value="no" className="bg-black">No</option>
                    </select>
                    {errors.needPromotor && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.needPromotor}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      M.O.P.s Access? *
                    </label>
                    <select
                      name="mopsAccess"
                      value={formData.mopsAccess}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.mopsAccess ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white`}
                    >
                      <option value="" className="bg-black">Select option</option>
                      <option value="yes" className="bg-black">Yes</option>
                      <option value="no" className="bg-black">No</option>
                    </select>
                    {errors.mopsAccess && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.mopsAccess}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Operations */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-white/20 pb-2">Operations</h2>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    M.O.P.s and Balances *
                  </label>
                  <textarea
                    name="mopsBalances"
                    value={formData.mopsBalances}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.mopsBalances ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                    placeholder="Describe your M.O.P.s and balance management"
                  />
                  {errors.mopsBalances && (
                    <div className="mt-1 text-red-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.mopsBalances}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Business Hours *
                    </label>
                    <input
                      type="text"
                      name="businessHours"
                      value={formData.businessHours}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.businessHours ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                      placeholder="e.g., 9 AM - 11 PM EST"
                    />
                    {errors.businessHours && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.businessHours}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Cashout Hours *
                    </label>
                    <input
                      type="text"
                      name="cashoutHours"
                      value={formData.cashoutHours}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.cashoutHours ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                      placeholder="e.g., 10 AM - 10 PM EST"
                    />
                    {errors.cashoutHours && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.cashoutHours}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Procedure for Cashout *
                  </label>
                  <textarea
                    name="cashoutProcedure"
                    value={formData.cashoutProcedure}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.cashoutProcedure ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                    placeholder="Describe your cashout procedure step by step"
                  />
                  {errors.cashoutProcedure && (
                    <div className="mt-1 text-red-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.cashoutProcedure}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Bonuses and Rules *
                  </label>
                  <textarea
                    name="bonusesRules"
                    value={formData.bonusesRules}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.bonusesRules ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                    placeholder="Describe your bonuses and rules for your page"
                  />
                  {errors.bonusesRules && (
                    <div className="mt-1 text-red-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.bonusesRules}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    What platforms do you offer? *
                  </label>
                  <textarea
                    name="platforms"
                    value={formData.platforms}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.platforms ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                    placeholder="List all gaming platforms you offer"
                  />
                  {errors.platforms && (
                    <div className="mt-1 text-red-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.platforms}
                    </div>
                  )}
                </div>
              </div>

              {/* Verification History */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-white/20 pb-2">Verification History</h2>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Are you currently verified in any other groups? *
                  </label>
                  <textarea
                    name="currentlyVerified"
                    value={formData.currentlyVerified}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.currentlyVerified ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                    placeholder="List current verifications or write 'None'"
                  />
                  {errors.currentlyVerified && (
                    <div className="mt-1 text-red-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.currentlyVerified}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Have you previously been verified in any other groups? *
                  </label>
                  <textarea
                    name="previouslyVerified"
                    value={formData.previouslyVerified}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.previouslyVerified ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                    placeholder="List previous verifications or write 'None'"
                  />
                  {errors.previouslyVerified && (
                    <div className="mt-1 text-red-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.previouslyVerified}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Have you ever been blacklisted? *
                  </label>
                  <textarea
                    name="everBlacklisted"
                    value={formData.everBlacklisted}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.everBlacklisted ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                    placeholder="Explain any blacklisting history or write 'No'"
                  />
                  {errors.everBlacklisted && (
                    <div className="mt-1 text-red-400 flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.everBlacklisted}
                    </div>
                  )}
                </div>
              </div>

              {/* Signature */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-white/20 pb-2">Signature</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Signature/Initials *
                    </label>
                    <input
                      type="text"
                      name="signature"
                      value={formData.signature}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.signature ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white placeholder-gray-400`}
                      placeholder="Type your full name or initials"
                    />
                    {errors.signature && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.signature}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${errors.date ? 'border-red-500' : 'border-white/20'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all text-white`}
                    />
                    {errors.date && (
                      <div className="mt-1 text-red-400 flex items-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.date}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium py-4 px-6 rounded-lg transition-all flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Preparing Email...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-5 w-5 mr-2" />
                      Submit Application
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 dark-box-light p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-white">Application Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-red-600/20 p-3 rounded-full inline-block mb-2 border border-red-500/30">
                  <FileText className="h-6 w-6 text-red-400" />
                </div>
                <h4 className="font-medium text-white mb-1">1. Submit</h4>
                <p className="text-gray-300 text-sm">Complete and submit your application</p>
              </div>
              <div className="text-center">
                <div className="bg-gold-500/20 p-3 rounded-full inline-block mb-2 border border-gold-400/30">
                  <CheckCircle className="h-6 w-6 text-gold-400" />
                </div>
                <h4 className="font-medium text-white mb-1">2. Review</h4>
                <p className="text-gray-300 text-sm">Our team reviews your application</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 p-3 rounded-full inline-block mb-2 border border-green-500/30">
                  <Send className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="font-medium text-white mb-1">3. Response</h4>
                <p className="text-gray-300 text-sm">Receive verification decision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;