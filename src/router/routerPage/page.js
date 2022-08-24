export default [
    {
        path: "/",
        name: "index",
        component: () => import("../../views/index.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/components/home.vue"),
            },
            {
                path: "/document",
                name: "document",
                redirect:"/button",
                component: () => import("@/packages/document.vue"),
                children: [
                    {
                        path: "/button",
                        name: "Button",
                        component: () => import("@/packages/button/doc/doc.md")
                    },
                    {
                        path: "/input",
                        name: "Input",
                        component: () => import("@/packages/input/doc/doc.md")
                    },
                    {
                        path: "/select",
                        name: "Select",
                        component: () => import("@/packages/select/doc/doc.md")
                    },
                    {
                        path: "/radio",
                        name: "Radio",
                        component: () => import("@/packages/radio/doc/doc.md")
                    },
                    {
                        path: "/space",
                        name: "Space",
                        component: () => import("@/packages/space/doc/doc.md")
                    },
                    {
                        path: "/textarea",
                        name: "Textarea",
                        component: () => import("@/packages/textarea/doc/doc.md")
                    }
                ]
            }
        ]
    },

]