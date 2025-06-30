import { useState } from 'react';
import SectionHeader from '@/blocks/SectionHeader';
import SubSection from '@/blocks/SubSection';
import { Button } from '@/components/ui/button';
import TaskResume from './blocks/TaskResume';
import TimerLayout from './blocks/TimerLayout';

export default function Tracker() {
    const [isZenMode, setZenMode] = useState(false); // Using useState to manage Zen mode state

    const nameOfTask = 'Task Name'; // This can be dynamically set based on the task being tracked
    return (
        <>
            <SectionHeader title={isZenMode ? 'Simple tracker' : nameOfTask}>
                <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto"
                    onClick={() => setZenMode(!isZenMode)}
                >
                    {isZenMode ? 'Exit Focus Mode' : 'Enter Focus Mode'}
                </Button>
            </SectionHeader>
            <SubSection cols={isZenMode ? 1 : 2}>
                {!isZenMode && <TaskResume />}
                <TimerLayout />
            </SubSection>
        </>
    );
}
