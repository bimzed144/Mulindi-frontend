import Layout from "../../components/Layout";
import { Routes, Route } from "react-router-dom";

function Bursar() {
    return (
        <Layout 
            userType="bursar" 
            userName="Jane Smith" 
            userRole="Bursar"
        >
            <Routes>
                <Route path="/bursar" element={
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Bursar Dashboard</h1>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Fees</h3>
                                <p className="text-3xl font-bold text-blue-600">$45,000</p>
                                <p className="text-sm text-gray-600">This term</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Paid Fees</h3>
                                <p className="text-3xl font-bold text-green-600">$38,500</p>
                                <p className="text-sm text-gray-600">85.6% collected</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending</h3>
                                <p className="text-3xl font-bold text-yellow-600">$6,500</p>
                                <p className="text-sm text-gray-600">Outstanding</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Students</h3>
                                <p className="text-3xl font-bold text-purple-600">120</p>
                                <p className="text-sm text-gray-600">Total enrolled</p>
                            </div>
                        </div>
                    </div>
                } />
                <Route path="/bursar/students" element={<div className="p-6"><h1 className="text-2xl font-bold">Students</h1><p className="text-gray-600 mt-2">Student fee management coming soon...</p></div>} />
                <Route path="/bursar/fees" element={<div className="p-6"><h1 className="text-2xl font-bold">Fees Management</h1><p className="text-gray-600 mt-2">Fees management page coming soon...</p></div>} />
                <Route path="/bursar/transactions" element={<div className="p-6"><h1 className="text-2xl font-bold">Transactions</h1><p className="text-gray-600 mt-2">Transaction history coming soon...</p></div>} />
                <Route path="/bursar/reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Financial Reports</h1><p className="text-gray-600 mt-2">Financial reports coming soon...</p></div>} />
            </Routes>
        </Layout>
    );
}
export default Bursar;