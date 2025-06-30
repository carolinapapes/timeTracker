export default function ActivityHeatMap() {
    const days = Array.from({ length: 365 }, () => Math.round(Math.random() * 7 + 1));
    const bgClasses: { [key: number]: string } = {
        1: 'bg-gray-100',
        2: 'bg-gray-200',
        3: 'bg-gray-300',
        4: 'bg-gray-400',
        5: 'bg-gray-500',
        6: 'bg-gray-600',
        7: 'bg-gray-700',
    };

    return (
        <div
            className="grid grid-rows-7 grid-cols-53 grid-flow-col scroll-auto"
            style={{ minWidth: 'max-content' }}
        >
            {days.map((day, index) => (
                <div
                    key={index}
                    className={`h-5 w-5 ${bgClasses[day] || 'bg-grey-100'} rounded-xs m-0.5 border-1 border-gray-400`}
                ></div>
            ))}
        </div>
    );
}
