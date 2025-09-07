import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Progress } from "@/components/ui/progress";
import { Candy } from "lucide-react";
import { Badge } from "lucide-react";
import { Citrus } from "lucide-react";
import { Shield } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";

function SingleUserPage() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Priyansh Dixit</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col lg:flex-row  gap-8 mt-4">
        {/* Left */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Badge */}
          <div className="bg-primary-foreground p-4 rounded-md">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2 cursor-pointer"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2 cursor-pointer"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2 cursor-pointer"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2 cursor-pointer"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* Information */}
          <div className="bg-primary-foreground p-4 rounded-md">
            <div className="flex flex-col gap-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-xl font-semibold">User Information</h1>
                <EditUser />
              </div>

              <p className="text-muted-foreground text-xs">
                Profile Completion
              </p>
              <Progress value={70} />
              <div className="flex items-center gap-2">
                <span className="font-bold">Username:</span>
                <span>Priyansh Dixit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Email:</span>
                <span>priyanshdixit.work@@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Phone:</span>
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Location:</span>
                <span>Noida, IN</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.09.06
            </p>
          </div>
          {/* CardList */}
          <div className="bg-primary-foreground p-4 rounded-md">
            <CardList title="Recent Transaction" />
          </div>
        </div>
        {/* Right */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Name */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-6">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">Priyansh Dixit</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Full-stack developer passionate about building scalable web apps
              with Next.js, React, and Node.js. Loves solving real-world
              problems through code.
            </p>
          </div>
          {/* Activity */}
          <div className="bg-primary-foreground p-4 rounded-md">
            <AppLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUserPage;
