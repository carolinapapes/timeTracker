import { Button } from '@/components/ui/button';
import Timer from './Timer';

export default function TimerLayout() {
    return (
        <div>
            <div className="flex h-5 justify-center items-center space-x-2 text-xs mt-4">
                <Button variant="outline" size="sm">
                    Pomodoro
                </Button>
                <Button variant="outline" size="sm">
                    Short break
                </Button>
                <Button variant="outline" size="sm">
                    Long break
                </Button>
            </div>
            <div className="flex flex-col mt-15">
                <Timer />
            </div>
            <div className="flex justify-center mt-6">
                <Button className="w-[320px]" size="lg">
                    Start
                </Button>
            </div>
        </div>
    );
}
