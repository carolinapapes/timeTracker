import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const tableContent = [
    {
        tagName: 'Tag 1',
        goal: 'Goal 1',
        status: 'completed',
        eta: '10-10-2023',
        timeSpent: '2 hours',
        progress: 100,
    },
    {
        tagName: 'Tag 2',
        goal: 'Goal 2',
        status: 'in progress',
        eta: '10-10-2023',
        timeSpent: '1 hour',
        progress: 50,
    },
    {
        tagName: 'Tag 3',
        goal: 'Goal 3',
        status: 'not started',
        eta: '10-10-2023',
        timeSpent: '0 hours',
        progress: 0,
    },
    {
        tagName: 'Tag 4',
        goal: 'Goal 4',
        status: 'completed',
        eta: '10-10-2023',
        timeSpent: '3 hours',
        progress: 100,
    },
    {
        tagName: 'Tag 5',
        goal: 'Goal 5',
        status: 'in progress',
        eta: '10-10-2023',
        timeSpent: '1.5 hours',
        progress: 75,
    },
    {
        tagName: 'Tag 6',
        goal: 'Goal 6',
        status: 'not started',
        eta: '10-10-2023',
        timeSpent: '0 hours',
        progress: 0,
    },
    {
        tagName: 'Tag 1',
        goal: 'Goal 1',
        status: 'completed',
        eta: '10-10-2023',
        timeSpent: '2 hours',
        progress: 100,
    },
    {
        tagName: 'Tag 2',
        goal: 'Goal 2',
        status: 'in progress',
        eta: '10-10-2023',
        timeSpent: '1 hour',
        progress: 50,
    },
    {
        tagName: 'Tag 3',
        goal: 'Goal 3',
        status: 'not started',
        eta: '10-10-2023',
        timeSpent: '0 hours',
        progress: 0,
    },
    {
        tagName: 'Tag 4',
        goal: 'Goal 4',
        status: 'completed',
        eta: '10-10-2023',
        timeSpent: '3 hours',
        progress: 100,
    },
    {
        tagName: 'Tag 5',
        goal: 'Goal 5',
        status: 'in progress',
        eta: '10-10-2023',
        timeSpent: '1.5 hours',
        progress: 75,
    },
    {
        tagName: 'Tag 6',
        goal: 'Goal 6',
        status: 'not started',
        eta: '10-10-2023',
        timeSpent: '0 hours',
        progress: 0,
    },
];
export default function DashboardTable() {
    return (
        <Table>
            <TableCaption>A list of your recent logs.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Task</TableHead>
                    <TableHead className="w-[100px]">Goal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[250px]">Progress</TableHead>
                    <TableHead className="text-right">Time logged</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableContent.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.tagName}</TableCell>
                        <TableCell>{item.goal}</TableCell>
                        <TableCell>
                            <Badge className="capitalize">{item.status}</Badge>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <Progress value={item.progress} className="w-[150px]" />
                                {item.progress}%
                            </div>
                        </TableCell>
                        <TableCell className="text-right">{item.timeSpent}</TableCell>
                        <TableCell className="text-right space-x-2">
                            <Button variant="outline" size="sm">
                                Completed
                            </Button>
                            <Button variant="outline" size="sm">
                                Delete
                            </Button>
                            <Button variant="outline" size="sm">
                                Track
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
