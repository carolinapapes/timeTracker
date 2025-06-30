import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { buttonVariants } from '@/components/ui/button';

export default function SheetWithButton({
    label,
    title,
    children,
}: {
    label: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Sheet>
            <SheetTrigger className={`${buttonVariants({ variant: 'default' })} px-10 ml-4`}>
                {label}
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-xl py-6">{title}</SheetTitle>
                    {children}
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
