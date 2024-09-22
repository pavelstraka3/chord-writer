import React from 'react';
import {Button} from "@/app/components/ui/button";
import Link from "next/link";
import {Home} from "lucide-react";

function NotFound() {
    return (
        <main className="flex-1 flex items-center justify-center p-4 md:p-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-xl text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>
                <Button asChild size="lg">
                    <Link href="/songs">
                        <Home className="mr-2 h-4 w-4"/>
                        Back to Home
                    </Link>
                </Button>
            </div>
        </main>
    );
}

export default NotFound;