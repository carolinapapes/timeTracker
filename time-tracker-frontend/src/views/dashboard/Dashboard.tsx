import ActivityHeatMapCard from '@/views/dashboard/blocks/ActivityHeatMapCard';
import DashboardTable from './blocks/DashboardTable';
import SectionHeader from '@/blocks/SectionHeader';
import TasksCard from './blocks/TasksCard';
import SubSection from '@/blocks/SubSection';
import NewTaskForm from './blocks/NewTaskForm';
import SheetWithButton from '@/blocks/SheetWithButton';
import NewLogForm from './blocks/NewLogForm';

export default function Dashboard() {
    return (
        <>
            <SectionHeader title="Dashboard">
                <p className="sub-section-title"> 23.5 hours </p>
                <SheetWithButton label="+ New log" title="New Log">
                    <NewLogForm />
                </SheetWithButton>
            </SectionHeader>
            <SubSection cols={2}>
                <TasksCard />
                <ActivityHeatMapCard />
            </SubSection>
            <SubSection
                title="Tasks"
                cta={
                    <SheetWithButton label="+ New Task" title="New Task">
                        <NewTaskForm />
                    </SheetWithButton>
                }
            >
                <DashboardTable />
            </SubSection>
        </>
    );
}
