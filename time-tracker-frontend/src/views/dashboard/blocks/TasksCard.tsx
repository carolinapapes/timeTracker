import { Card } from '@/components/ui/card';
import TaskCard from './TaskCard';
import ScrollB from '@/blocks/ScrollB';

export default function TasksCard() {
    return (
        <Card className="p-6 bg-gray-100 flex flex-col justify-between h-full">
            <div className="flex gap-3">
                <p className="scroll-m-20 text-8xl font-semibold tracking-tight text-balance leading-8xl">
                    3/5
                </p>
                <p className="scroll-m-20 text-xl font-semibold tracking-tight text-balance leading-none mt-3">
                    tasks <br /> completed
                </p>
            </div>
            <ScrollB>
                <div className="flex gap-4 align-bottom">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
            </ScrollB>
        </Card>
    );
}
