import Layout from "../../components/Layout";
import { Routes, Route } from "react-router-dom";

function StoreKeeper() {
    return (
        <Layout 
            userType="storekeeper" 
            userName="Mike Johnson" 
            userRole="Store Keeper"
        >
            <Routes>
                <Route path="/store-keeper" element={
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Store Keeper Dashboard</h1>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Items</h3>
                                <p className="text-3xl font-bold text-blue-600">245</p>
                                <p className="text-sm text-gray-600">In inventory</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Low Stock</h3>
                                <p className="text-3xl font-bold text-yellow-600">12</p>
                                <p className="text-sm text-gray-600">Items need restock</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Orders</h3>
                                <p className="text-3xl font-bold text-green-600">8</p>
                                <p className="text-sm text-gray-600">Pending orders</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Value</h3>
                                <p className="text-3xl font-bold text-purple-600">$15K</p>
                                <p className="text-sm text-gray-600">Inventory value</p>
                            </div>
                        </div>
                    </div>
                } />
                <Route path="/store-keeper/inventory" element={<div className="p-6"><h1 className="text-2xl font-bold">Inventory Management</h1><p className="text-gray-600 mt-2">Inventory management coming soon...</p></div>} />
                <Route path="/store-keeper/orders" element={<div className="p-6"><h1 className="text-2xl font-bold">Orders</h1><p className="text-gray-600 mt-2">Order management coming soon...</p></div>} />
                <Route path="/store-keeper/reports" element={<div className="p-6"><h1 className="text-2xl font-bold">Inventory Reports</h1><p className="text-gray-600 mt-2">Inventory reports coming soon...</p></div>} />
                <Route path="/store-keeper/profile" element={<div className="p-6"><h1 className="text-2xl font-bold">Profile</h1><p className="text-gray-600 mt-2">Profile page coming soon...</p></div>} />
            </Routes>
        </Layout>
    );
}
export default StoreKeeper;