export interface Events {
    summary: string;
    description: string;
    creator: string;
    start: {
        dateTime: string;
        timeZone: string;
    };
    end: {
        dateTime: string;
        timeZone: string;
    };
    attendes?: string[];
    recurrence: string[];
    reminders: {
        useDefault: boolean;
    };
}
