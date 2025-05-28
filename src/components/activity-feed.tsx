
const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800">Activity</h3>
        <span className="text-sm text-gray-500">3 appointments on this week</span>
      </div>
      
      <div className="h-48">
        <div className="flex items-end h-full justify-between">
          {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="flex flex-col items-center space-y-2">
              <div className="flex flex-col items-center space-y-1">
               
                {Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 ${
                      Math.random() > 0.5 ? 'bg-cyan-400' : 'bg-blue-600'
                    } rounded-sm`}
                    style={{ 
                      height: `${Math.floor(Math.random() * 50) + 20}px`,
                    }}
                  ></div>
                ))}
              </div>
              <div className="text-sm text-gray-500">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
