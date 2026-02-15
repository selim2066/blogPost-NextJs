
import { AppSidebar } from "@/components/layout/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Roles } from "@/constant/roles";
import { userService } from "@/service/user.service";





export default async function DashboardLayout({ user, admin }: { user: React.ReactNode; admin: React.ReactNode }) {

  //const userInfo ={role:'admin'}

  const {data}= await userService.getSession()
  const userInfo= data.user;
  //console.log("dashboard layout data", data)
  return (

    
    <SidebarProvider>
      <AppSidebar user={userInfo}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
         
          
        </header>
            {userInfo.role === Roles.admin ? admin : user}
      </SidebarInset>
    </SidebarProvider>
  )
}
