import { zodResolver } from '@hookform/resolvers/zod';
import CreatableSelect from 'react-select/creatable';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
    goal: z.string().min(1, { message: 'Goal is required' }), // any string
    task: z.string().min(1, {
        message: 'Task is required',
    }),
});

export default function NewLogform() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            task: '',
            goal: undefined,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="goal"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Goal</FormLabel>
                            <FormControl>
                                <CreatableSelect
                                    isClearable
                                    value={
                                        field.value
                                            ? { label: field.value, value: field.value }
                                            : null
                                    }
                                    onChange={val => field.onChange(val?.value || '')}
                                    options={[
                                        { label: 'Focus', value: 'focus' },
                                        { label: 'Learning', value: 'learning' },
                                        { label: 'Break', value: 'break' },
                                    ]}
                                    classNamePrefix="react-select"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="task"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Task</FormLabel>
                            <FormControl>
                                <CreatableSelect
                                    isClearable
                                    value={
                                        field.value
                                            ? { label: field.value, value: field.value }
                                            : null
                                    }
                                    onChange={val => field.onChange(val?.value || '')}
                                    options={[
                                        { label: 'Development', value: 'development' },
                                        { label: 'Design', value: 'design' },
                                        { label: 'Testing', value: 'testing' },
                                    ]}
                                    classNamePrefix="react-select"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full mt-5">
                    Start tracking
                </Button>
            </form>
        </Form>
    );
}
