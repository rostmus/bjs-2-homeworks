'use strict'
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
            this.alarmCollection.splice(findId, 1)
            return "звонок удален"
        }
    }
    getCurrentFormattedTime() {
        const date = new Date().toLocaleTimeString().slice(0,-3)
        return date
    }
    start() {
        function checkClock(alarm) {
            if(alarm.time === getCurrentFormattedTime()) {
                callback()
            }
        }
        if(this.alarmCollection.id === undefined)  {
            function clockExamination() {
                this.alarmCollection.forEach(checkClock)
            }
            setInterval(clockExamination, 2000)
        }
        
    }
    stop() {
        if(this.alarmCollection.id != undefined)  {
            clearInterval(start())
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(function(alarm) {console.log([alarm.id, alarm.time])})
    }
    clearAlarms() {
        clearInterval(start())
        this.alarmCollection.splice(0, this.alarmCollection.length)
    }
}
const clock = new AlarmClock()