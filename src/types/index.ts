export interface FormFields {
    name: string;
    label: string;
    type?: string;
}

export interface Entity {
    readonly id: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    name: string;
    isActive: boolean;
}

export type ComponentType = "list" | "create";
