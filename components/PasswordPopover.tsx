"use client"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { submitPassword } from "@/server_actions";

export default function PasswordPopover() {
    const formSchema = z.object({
        password: z.string().min(8, {
            message: "Password must be at least 8 characters long"
        }).max(30)
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: ""
        }
    });


        return (
            <main>
                <header>
                    <h1>Hold up there!</h1>
                    <p>You need to enter a password before going any further</p>
                </header>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitPassword)}>
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="password" {...field} />
                                </FormControl>
                                <FormDescription>Enter a password to access this page</FormDescription>
                            </FormItem>
                        )} />
                    </form>
                </Form>
            </main>
        );
}
