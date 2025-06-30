import NewTaskform from '@/views/dashboard/blocks/NewTaskForm';
import { useState } from 'react';
import TaskResume from './TaskResume';
import { Button } from '@/components/ui/button';

export default function TaskLayout() {
    const [taskIsActive, setTaskIsActive] = useState(false);

    return (
        <>
            taskIsActive ? (
            <TaskResume />) : (
            <>
                <p className="default-text">
                    Task Tracker is a feature that allows you to track your time spent on tasks.
                </p>
                <NewTaskform />
            </>
            );
            <Button
                variant="outline"
                size="sm"
                className="ml-auto mt-4"
                onClick={() => setTaskIsActive(!taskIsActive)}
            >
                Toggle view
            </Button>
        </>
    );
}
