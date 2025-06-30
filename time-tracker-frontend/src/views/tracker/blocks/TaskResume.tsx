export default function TaskResume() {
    return (
        <div className="col-1">
            <p className="subtitle">Objective </p>
            <p className="default-text">
                Tracker is a feature that allows you to track your time spent on tasks. It is useful
                for freelancers and teams who want to keep track of their time spent on tasks.
            </p>
            <p className="subtitle">Minutes Assigned: 120</p>
            <p className="default-text">
                Assigned minutes is the total time you have allocated for this task. 120. In
                pomodoro technique, this is usually 25 minutes of focused work followed by a
                5-minute break.
            </p>
            <p className="subtitle">Log</p>
            <textarea
                className="w-full h-32 p-4 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your objective here..."
            ></textarea>
        </div>
    );
}
