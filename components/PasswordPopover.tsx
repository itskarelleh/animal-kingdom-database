import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export default async function PasswordPopover({ onSubmit } : { onSubmit : React.EventHandler<any> }) {

    const formSchema = z.object({
        password: z.string().min(8, {
            message: "Password must be at least 8 characters long"
        }).max(30)
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: ""
        }
    })

    function onSubmitHandler(e: any, values: z.infer<typeof formSchema>) {
        e.preventDefault();
        setLoading(true);
        const request = await fetch(`/api`, {
            body: JSON.stringify({password}),
            headers: {"Content-Type": "application/json"},
            method: "post",
        });

        if (request.status !== 200)
            return setPasswordIncorrect(true), setLoading(false);
        else window.location.reload();
    }

    return (
        <Dialog open={true}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Hold up there!
                    </DialogTitle>
                    <DialogDescription>
                        You need to enter a password before going any further
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmitHandler}>
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="password" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter a password to access this page
                                </FormDescription>
                            </FormItem>
                        )} />
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );

}