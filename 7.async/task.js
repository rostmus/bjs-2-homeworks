'use strict'
class  AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.timerId = null
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error('не передан id параметр')
        }
        if(this.alarmCollection.some(alarmCol => alarmCol.id === id) === true) {
            console.error('ошибка')
        } else {
            this.alarmCollection.push({id, time: time, callback: callback})
        }
    }
    removeClock(id) {
        const findId = this.alarmCollection.findIndex(alarmCol => alarmCol.id === id)
        if(findId === -1) {
            return false
        } else {
            this.alarmCollection.splice(findId, 1)
            return true
        }
    }
    getCurrentFormattedTime() {
        return  new Date().toLocaleTimeString().slice(0,-3)
        
    }
    start() {
        let binAlarm = this.alarmCollection.forEach.bind(this.alarmCollection)
        //const checkClock = (alarm) => { 
         //   if(alarm.time === this.getCurrentFormattedTime()) {
          //  alarm.callback()
       //     console.log(1)
        //    }
     //   }

    //    if (!this.timerId) {
    //        const clockExamination = () => {
   //             this.alarmCollection.forEach(checkClock)
   //         }
   //         this.timerId  = setInterval(clockExamination(), 2000)
   //     }
        //this.getCurrentFormattedTime = this.getCurrentFormattedTime.bind(this)
        let binTime =this.getCurrentFormattedTime.bind(this)
        function checkClock(alarm) {
            if(alarm.time === binTime()) {
                alarm.callback()
                console.log(1)
            }
      }
        if(!this.timerId)  {
           
           function clockExamination() {
                
            binAlarm(checkClock)
           }
           this.timerId  = setInterval(clockExamination, 2000)
            
        }
    }
    
    stop() {
        if(this.timerId != undefined)  {
            clearInterval(this.timerId)
            
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(function(alarm) {console.log([alarm.id, alarm.time])})
    }
    clearAlarms() {
        this.stop()
        this.alarmCollection.splice(0, this.alarmCollection.length)
    }
}
const clock = new AlarmClock()