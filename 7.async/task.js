class  AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.timerId 
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('не передан id параметр')
        }
        if(this.alarmCollection.some(alarmCol => alarmCol.id === id) === true) {
            console.error('ошибка')
        } else {
            this.alarmCollection.push({id: id, time: time, callback: callback})
        }
    }
    removeClock(id) {
        const findId = this.alarmCollection.findIndex(alarmCol => alarmCol.id === id)
        if(findId === -1) {
            return 'звонок не найден'
        } else {
            this.alarmCollection.slice(findId, 1)
            return "звонок удален"
        }
    }
    getCurrentFormattedTime() {
        const date = new Date().toLocaleTimeString().slice(0,-3)
        return date
    }

    start() {
        function checkClock() {

        }
    }
}
const mama = new AlarmClock()