export const CARD_CONTENT = [
    {
        step: "Welcome",
        title: "Welcome to Chad",
        description: "Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and track\n" +
            "shipments 24/7 without driving you crazy."
    },
    {
        step: "Connect your Shopify store",
        title: "Connect your Shopify store",
        description: "Installs the Chad widget in your Shopify store and sets it up to display your customers’ order information and self-serve options.",
    },
    {
        step: "Connect your customer support email",
        title: "Connect your customer support email",
        description: "Allows Chad to send automated responses on your behalf from your usual support mailbox",
    }
]

export const DATA_FORM: { id: keyof FormFields; typeInput: string; placeholder: string; labelText: string }[] = [
    {
        id: "email",
        typeInput: "email",
        placeholder: "megachad@trychad.com",
        labelText: "Email"},
    {
        id: "name",
        typeInput: "text",
        placeholder: "Mega Chad",
        labelText: "Your name"},
    {
        id: "password",
        typeInput: "password",
        placeholder: "Enter Password",
        labelText: "Password"},
]

type FormFields = {
    email: string;
    name: string;
    password: string;
};

export const DATA_PROGRESS = [
    {
        title: "Welcome",
        active: false,
        successful: false,
        done: false},
    {
        title: "Connect your Shopify store",
        active: false,
        successful: false,
        done: false},
    {
        title: "Connect your customer support email",
        active: false,
        successful: false,
        done: false},
    {
        title: "Done",
        active: false,
        successful: false,
        done: false},
]

interface ListItemProps {
    title: string;
    description: string;
}

interface ButtonProps {
    text: string;
    linkText: string;
}

export interface DataListItem {
    list: ListItemProps[];
    button: ButtonProps[];
}

export const DATA_LIST_ITEMS: DataListItem[] = [
    {
        list: [
            {
                title: "Track orders and shipping",
                description: "Global coverage with 600+ couriers supported"},
            {
                title: "Manage orders",
                description: "Allow customers to track, return, exchange, or report problems with their orders"
            },
            {
                title: "Process returns and exchanges",
                description: "Automatically checks your store policy and existing inventory before resolving or escalating each request"
            }
        ],
        button: [
            {
                text: "Connect store",
                linkText: "I don’t use Shopify"
            }
        ]
    },
    {
        list: [
            {
                title: "Contextual responses",
                description: "Custom responses to any support situation from “where’s my stuff?” to “I want a refund”"
            },
            {
                title: "Reply from anywhere",
                description: "Respond to your customers via email or Chad chat—it’s all saved in the same thread"
            },
            {
                title: "Categorical inbox tags",
                description: "Tags your emails by category so you know what to expect before even opening an email"
            }
        ],
        button: [
            {
                text: "Connect Gmail account",
                linkText: "I don’t use Gmail",
            }
        ]
    }
]