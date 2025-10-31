import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/registry/new-york-v4/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "البدء",
      url: "#",
      items: [
        {
          title: "التثبيت",
          url: "#",
        },
        {
          title: "هيكل المشروع",
          url: "#",
        },
      ],
    },
    {
      title: "بناء تطبيقك",
      url: "#",
      items: [
        {
          title: "التوجيه",
          url: "#",
        },
        {
          title: "جلب البيانات",
          url: "#",
          isActive: true,
        },
        {
          title: "التصيير",
          url: "#",
        },
        {
          title: "التخزين المؤقت",
          url: "#",
        },
        {
          title: "التنسيق",
          url: "#",
        },
        {
          title: "التحسين",
          url: "#",
        },
        {
          title: "الإعداد",
          url: "#",
        },
        {
          title: "الاختبار",
          url: "#",
        },
        {
          title: "المصادقة",
          url: "#",
        },
        {
          title: "النشر",
          url: "#",
        },
        {
          title: "الترقية",
          url: "#",
        },
        {
          title: "الأمثلة",
          url: "#",
        },
      ],
    },
    {
      title: "مرجع API",
      url: "#",
      items: [
        {
          title: "المكونات",
          url: "#",
        },
        {
          title: "أعراف الملفات",
          url: "#",
        },
        {
          title: "الدوال",
          url: "#",
        },
        {
          title: "خيارات next.config.js",
          url: "#",
        },
        {
          title: "سطر الأوامر",
          url: "#",
        },
        {
          title: "بيئة Edge",
          url: "#",
        },
      ],
    },
    {
      title: "البنية",
      url: "#",
      items: [
        {
          title: "إمكانية الوصول",
          url: "#",
        },
        {
          title: "التحديث السريع",
          url: "#",
        },
        {
          title: "مترجم Next.js",
          url: "#",
        },
        {
          title: "المتصفحات المدعومة",
          url: "#",
        },
        {
          title: "توربوباك",
          url: "#",
        },
      ],
    },
    {
      title: "المجتمع",
      url: "#",
      items: [
        {
          title: "دليل المساهمة",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">التوثيق</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
