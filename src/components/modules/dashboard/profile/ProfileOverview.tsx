
export default function ProfileOverview() {
  return (
    <div>
      {/* Performance Statistics */}
      <div className="bg-[#2c2a2a] p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Performance Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200/20 p-3 rounded">
            <p className="text-sm text-gray-400">Total Listings</p>
            <p className="text-2xl font-bold">47</p>
          </div>
          <div className="bg-gray-200/20 p-3 rounded">
            <p className="text-sm text-gray-400">Active Listings</p>
            <p className="text-2xl font-bold text-emerald-600">16</p>
          </div>
          <div className="bg-gray-200/20 p-3 rounded">
            <p className="text-sm text-gray-400">Deals Completed</p>
            <p className="text-2xl font-bold">28</p>
          </div>
        </div>
      </div>
      
      {/* Specialization & Bio */}
      <div className="bg-[#2c2a2a] p-4 rounded-lg mt-4">
        <h3 className="text-lg font-semibold mb-2">Specialization & Bio</h3>
        <p className="text-sm text-gray-300">
          Specialist in KAFD and Al-Malga luxury villas with focus on Golden Visa properties and high-yield investments for international investors.
        </p>
      </div>
    </div>
  );
}