import Layout from "../../components/Layout";
import { Routes, Route } from "react-router-dom";

function DOD() {
    return (
        <Layout 
            userType="dod" 
            userName="Bonaventure" 
            userRole="Director of Discipline"
        >
            <Routes>
                <Route path="/dod" element={
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Director of Discipline Dashboard</h1>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Discipline Cases</h3>
                                <p className="text-3xl font-bold text-red-600">8</p>
                                <p className="text-sm text-gray-600">Active cases</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Resolved</h3>
                                <p className="text-3xl font-bold text-green-600">24</p>
                                <p className="text-sm text-gray-600">This month</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Warnings</h3>
                                <p className="text-3xl font-bold text-yellow-600">12</p>
                                <p className="text-sm text-gray-600">Issued warnings</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Students</h3>
                                <p className="text-3xl font-bold text-blue-600">150</p>
                                <p className="text-sm text-gray-600">Under supervision</p>
                            </div>
                        </div>
                    </div>
                } />
                <Route path="/dod/students" element={<div className="p-6"><h1 className="text-2xl font-bold">Students</h1><p className="text-gray-600 mt-2">Student discipline management coming soon...</p></div>} />
                <Route path="/dod/discipline" element={<div className="p-6"><h1 className="text-2xl font-bold">Discipline Management</h1><p className="text-gray-600 mt-2">Discipline cases management coming soon...</p></div>} />
                <Route path="/dod/reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Discipline Reports</h1><p className="text-gray-600 mt-2">Discipline reports coming soon...</p></div>} />
                <Route path="/dod/profile" element={<div className="p-6"><h1 className="text-2xl font-bold">Profile</h1><p className="text-gray-600 mt-2">Profile page coming soon...</p></div>} />
            </Routes>
        </Layout>
    );
}
export default DOD;