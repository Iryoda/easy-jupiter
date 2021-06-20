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

const handleWeekDay = (day: number) => {
    switch (day) {
        case 1:
            return 'MO'
        case 2:
            return 'TU'
        case 3:
            return 'WE'
        case 4:
            return 'TH'
        case 5:
            return 'FR'
        case 6:
            return 'SA'
        case 7:
            return 'SU'
        default:
            return ''
    }
}

export const createEvents = (file: ISchedule[]): IGoogleEvents[] => {
    const events: any[] = []
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
                // guestsCanInviteOthers: false,
                // guestsCanSeeOtherGuests: false,
                reminders: {
                    useDefault: true
                }
            }
            events.push(event)
        })
    })

    return events
}

// var event = {
//   'summary': 'Google I/O 2015',
//   'location': '800 Howard St., San Francisco, CA 94103',
//   'description': 'A chance to hear more about Google\'s developer products.',
//   'start': {
//     'dateTime': '2015-05-28T09:00:00-07:00',
//     'timeZone': 'America/Los_Angeles'
//   },
//   'end': {
//     'dateTime': '2015-05-28T17:00:00-07:00',
//     'timeZone': 'America/Los_Angeles'
//   },
//   'recurrence': [
//     'RRULE:FREQ=DAILY;COUNT=2'
//   ],
//   'attendees': [
//     {'email': 'lpage@example.com'},
//     {'email': 'sbrin@example.com'}
//   ],
//   'reminders': {
//     'useDefault': false,
//     'overrides': [
//       {'method': 'email', 'minutes': 24 * 60},
//       {'method': 'popup', 'minutes': 10}
//     ]
//   }
// };
