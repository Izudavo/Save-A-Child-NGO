import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <AlertCircle className="h-12 w-12 text-red-500" />

            <h1 className="text-2xl font-bold text-gray-900">
              404 Page Not Found
            </h1>

            <p className="text-sm text-gray-600">
              The page you’re looking for doesn’t exist or may have been moved.
            </p>

            <Button
              asChild
              className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/">
                <Home size={16} className="mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}