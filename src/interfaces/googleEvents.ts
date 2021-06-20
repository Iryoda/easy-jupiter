export interface Events {
    summary: string
    description: string
    creator: string
    start: {
        dateTime: string
        timeZone: string
    }
    end: {
        dateTime: string
        timeZone: string
    }
    recurrence: string[]
    guestsCanInviteOthers: boolean
    guestsCanSeeOtherGuests: boolean
    reminders: {
        useDefault: boolean
    }
}
