import { IScheduleResponse as ISchedule } from 'jupiter-reader'
import IGoogleEvents from 'interfaces'

interface DateProps {
    closestMonday: number
    classDay: number
    startTime: string
    endTime: string
}

const handleDate = ({
    closestMonday,
    classDay,
    startTime,
    endTime
}: DateProps): { startDate: string; endDate: string } => {
    const date = new Date()
    const year = date.getFullYear()
    let month

    if (date.getMonth() + 1 < 10) {
        month = `0${date.getMonth() + 1}`
    } else {
        month = date.getMonth() + 1
    }

    const startDate = `${year}-${month}-${
        Number(classDay) + Number(closestMonday)
    }T${startTime}:00`

    const endDate = `${year}-${month}-${
        Number(classDay) + Number(closestMonday)
    }T${endTime}:00`

    return {
        startDate,
        endDate
    }
}

const handleLastMonday = (): number => {
    const date = new Date()
    const dateDayInCalendar = date.getDate()
    const todayDay = date.getDay()

    if (todayDay === 0) {
        return dateDayInCalendar + 1
    }

    const dif = 1 - todayDay
    return dateDayInCalendar - dif
}

export const createEvents = (file: ISchedule[]): IGoogleEvents[] => {
    const events: IGoogleEvents[] = [{} as IGoogleEvents]
    const closestMonday = handleLastMonday()

    file.forEach((item) => {
        item.classes.forEach((schedule) => {
            const dates = handleDate({
                closestMonday,
                classDay: schedule.day,
                startTime: item.initTime,
                endTime: item.endTime
            })

            const event = {
                summary: `${schedule.name}`,
                description: `Aula de ${schedule.name}`,
                creator: 'easyjupiter',
                start: {
                    dateTime: dates.startDate,
                    timeZone: `America/Sao_Paulo`
                },
                end: {
                    dateTime: dates.endDate,
                    timeZone: `America/Sao_Paulo`
                },
                attendees: [],
                recurrence: [`RRULE:FREQ=WEEKLY;`],
                reminders: {
                    useDefault: true
                }
            }
            events.push(event)
        })
    })

    return events
}
