import { Button } from '@/components/ui/button';

export default function TaskCard() {
    return (
        <div className="bg-white aspect-square h-[110px] rounded-sm pb-0 flex flex-col justify-between">
            <div className="p-2">
                <p className="scroll-m-20 text-sm font-semibold tracking-tight text-balance">
                    Task 1
                </p>
                <p className="text-xs text-gray-500">2023-10-01</p>
            </div>
            <Button className="mt-2 w-full rounded-t-none text-sm">Complete</Button>
        </div>
    );
}
