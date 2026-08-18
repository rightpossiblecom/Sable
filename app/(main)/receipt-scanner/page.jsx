"use client";

import React, { useState, useRef } from "react";

export const dynamic = 'force-dynamic';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera,
  Upload,
  Scan,
  CheckCircle,
  CheckCircle2,
  Brain,
  Zap,
  FileImage,
  ArrowRight,
  Sparkles,
  Clock,
  DollarSign
} from "lucide-react";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";
import { scanReceipt, createTransaction } from "@/actions/transaction";
import { getUserAccounts } from "@/actions/dashboard";
import { useRouter } from "next/navigation";

const ReceiptScannerPage = () => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const router = useRouter();

  const {
    loading: scanReceiptLoading,
    fn: scanReceiptFn,
    data: scanResult,
  } = useFetch(scanReceipt);

  const {
    loading: createTransactionLoading,
    fn: createTransactionFn,
  } = useFetch(createTransaction);

  // Load user accounts on component mount
  React.useEffect(() => {
    const loadAccounts = async () => {
      try {
        const userAccounts = await getUserAccounts();
        setAccounts(userAccounts || []);
      } catch (error) {
        console.error("Failed to load accounts:", error);
      }
    };
    loadAccounts();
  }, []);

  // Handle scan result
  React.useEffect(() => {
    if (scanResult && !scanReceiptLoading) {
      console.log("Scan completed with result:", scanResult);
      
      if (scanResult.amount) {
        setScannedData(scanResult);
        toast.success("Receipt scanned successfully!");
      } else {
        toast.error("Could not extract data from receipt. Please try a clearer image.");
      }
    }
  }, [scanResult, scanReceiptLoading]);

  const handleReceiptScan = async (file) => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }

    // Check if it's an image file
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file (PNG, JPG, JPEG)");
      return;
    }

    console.log("Starting receipt scan for file:", file.name, file.type);
    toast.info("Processing receipt with AI...");

    try {
      // Call the function and wait for completion
      await scanReceiptFn(file);
      
      // The result will be available in the data state after the function completes
      // We'll check it in a useEffect
    } catch (error) {
      console.error("Receipt scan error:", error);
      toast.error(error.message || "Failed to scan receipt. Please try again.");
    }
  };

  const handleCreateTransaction = async () => {
    if (!scannedData) return;
    
    const defaultAccount = accounts.find(acc => acc.isDefault) || accounts[0];
    
    if (!defaultAccount) {
      toast.error("Please create an account first");
      return;
    }

    try {
      const transactionData = {
        type: "EXPENSE",
        amount: scannedData.amount,
        description: scannedData.description,
        date: new Date(scannedData.date),
        category: scannedData.category,
        accountId: defaultAccount.id,
      };

      await createTransactionFn(transactionData);
      
      // Show success message
      toast.success("✅ Transaction created successfully!");
      
      // Clear the scanned data
      setScannedData(null);
      
      // Redirect to transactions page after a short delay
      setTimeout(() => {
        router.push("/transaction");
      }, 1000);
      
    } catch (error) {
      console.error("Failed to create transaction:", error);
      toast.error("Failed to create transaction. Please try again.");
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleReceiptScan(e.dataTransfer.files[0]);
    }
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Extraction",
      description: "Advanced computer vision extracts data with 95% accuracy"
    },
    {
      icon: Zap,
      title: "Instant Processing", 
      description: "Get results in under 3 seconds"
    },
    {
      icon: CheckCircle,
      title: "Smart Categorization",
      description: "Automatically categorizes expenses intelligently"
    },
    {
      icon: DollarSign,
      title: "Multi-Currency Support",
      description: "Supports receipts in multiple currencies"
    }
  ];

  const stats = [
    { label: "Receipts Scanned", value: "1,247", change: "+23%" },
    { label: "Accuracy Rate", value: "95.2%", change: "+2.1%" },
    { label: "Time Saved", value: "48 hrs", change: "+15%" },
    { label: "Categories Detected", value: "24", change: "New" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full">
            <Scan size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI Receipt Scanner</h1>
            <p className="text-gray-600 mt-2">Extract transaction data from receipts using advanced AI technology</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle size={12} className="mr-1" />
            Gemini Vision Active
          </Badge>
          <Badge className="bg-blue-100 text-blue-800">
            <Sparkles size={12} className="mr-1" />
            95% Accuracy
          </Badge>
          <Badge className="bg-purple-100 text-purple-800">
            <Clock size={12} className="mr-1" />
            ~3 Second Processing
          </Badge>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <div className="flex items-center justify-center space-x-8">
          <div className={`flex items-center space-x-2 ${!scannedData ? 'text-blue-600' : 'text-green-600'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${!scannedData ? 'bg-blue-600' : 'bg-green-600'}`}>1</span>
            <span className="font-medium">Upload Receipt</span>
            {scannedData && <CheckCircle2 size={16} className="text-green-600" />}
          </div>
          <div className={`h-px flex-1 ${scannedData ? 'bg-green-300' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center space-x-2 ${!scannedData ? 'text-gray-400' : 'text-blue-600'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${!scannedData ? 'bg-gray-300' : 'bg-blue-600'}`}>2</span>
            <span className="font-medium">Review & Save</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Scanner Interface */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera size={20} />
                <span>Scan Your Receipt</span>
              </CardTitle>
              <CardDescription>Upload or drag & drop your receipt image</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Drop Zone */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                  dragActive 
                    ? "border-green-400 bg-green-50 scale-[1.02]" 
                    : scanReceiptLoading
                    ? "border-yellow-400 bg-yellow-50"
                    : scannedData
                    ? "border-green-400 bg-green-50"
                    : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    console.log("File input changed:", e.target.files);
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log("File selected:", file.name, file.type, file.size);
                      handleReceiptScan(file);
                    }
                    // Reset input to allow selecting the same file again
                    e.target.value = '';
                  }}
                />
                
                <div className="space-y-4">
                  {/* Dynamic Icon based on state */}
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    scanReceiptLoading 
                      ? 'bg-yellow-100 animate-pulse' 
                      : scannedData
                      ? 'bg-green-100'
                      : 'bg-gray-100'
                  }`}>
                    {scanReceiptLoading ? (
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600"></div>
                    ) : scannedData ? (
                      <CheckCircle2 size={32} className="text-green-600" />
                    ) : (
                      <FileImage size={32} className="text-gray-400" />
                    )}
                  </div>

                  {/* Dynamic Status Messages */}
                  <div>
                    {scanReceiptLoading ? (
                      <>
                        <h3 className="text-lg font-medium text-yellow-700 animate-pulse">🤖 AI is scanning your receipt...</h3>
                        <p className="text-yellow-600">Extracting transaction details</p>
                        <div className="mt-2 flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
                        </div>
                      </>
                    ) : scannedData ? (
                      <>
                        <h3 className="text-lg font-medium text-green-700">✅ Receipt Scanned Successfully!</h3>
                        <p className="text-green-600">Found: ${scannedData.amount} • {scannedData.merchantName || 'Transaction'}</p>
                        <div className="mt-2 text-sm text-green-500">Check the details on the right →</div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg font-medium text-gray-900">📷 Upload Your Receipt</h3>
                        <p className="text-gray-600">PNG, JPG up to 5MB • AI will extract the details</p>
                      </>
                    )}
                  </div>

                  {/* Action Buttons - Show different buttons based on state */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {scannedData ? (
                      <Button
                        onClick={() => {
                          setScannedData(null);
                          fileInputRef.current?.click();
                        }}
                        variant="outline"
                        className="border-green-300 text-green-700 hover:bg-green-50"
                      >
                        <Upload size={16} className="mr-2" />
                        Scan Another Receipt
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={() => {
                            console.log("Choose file button clicked");
                            fileInputRef.current?.click();
                          }}
                          disabled={scanReceiptLoading}
                          className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 disabled:opacity-50"
                        >
                          <Upload size={16} className="mr-2" />
                          {scanReceiptLoading ? 'Processing...' : 'Choose File'}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            console.log("Take photo button clicked");
                            const input = fileInputRef.current;
                            if (input) {
                              input.setAttribute('capture', 'environment');
                              input.click();
                            }
                          }}
                          disabled={scanReceiptLoading}
                        >
                          <Camera size={16} className="mr-2" />
                          Take Photo
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Loading State */}
              {scanReceiptLoading && (
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="inline-flex items-center space-x-2 text-blue-600">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    <span className="font-medium">AI is analyzing your receipt...</span>
                  </div>
                  <p className="text-sm text-blue-500 mt-2">This usually takes 2-3 seconds</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Why Use AI Receipt Scanner?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <Icon size={16} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results & Stats */}
        <div className="space-y-6">
          {/* Scanned Results */}
          {scannedData && (
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-700">
                  <CheckCircle size={20} />
                  <span>Scan Results</span>
                </CardTitle>
                <CardDescription>AI extracted the following information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Amount</label>
                    <div className="text-lg font-bold text-green-600">${scannedData.amount}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Date</label>
                    <div className="text-sm text-gray-900">{new Date(scannedData.date).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Merchant</label>
                    <div className="text-sm text-gray-900">{scannedData.merchantName}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Category</label>
                    <Badge variant="outline">{scannedData.category}</Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Description</label>
                  <div className="text-sm text-gray-900">{scannedData.description}</div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500"
                  onClick={handleCreateTransaction}
                  disabled={createTransactionLoading}
                >
                  {createTransactionLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating...
                    </>
                  ) : (
                    <>
                      <ArrowRight size={16} className="mr-2" />
                      Create Transaction
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Scanner Performance</CardTitle>
              <CardDescription>Your AI receipt scanning statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <div className="text-xs text-green-600 mt-1">{stat.change}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Upload Receipt</h4>
                    <p className="text-sm text-gray-600">Take a photo or upload an image of your receipt</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium">AI Processing</h4>
                    <p className="text-sm text-gray-600">Gemini AI analyzes the image using computer vision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Data Extraction</h4>
                    <p className="text-sm text-gray-600">Extracts amount, date, merchant, and categorizes automatically</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-medium">Create Transaction</h4>
                    <p className="text-sm text-gray-600">Review and save as a transaction in your account</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReceiptScannerPage;
