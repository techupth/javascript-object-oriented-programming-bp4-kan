class Notification {
    constructor(NotificationId,createdTime,content,receiver){
        this.NotificationId=NotificationId
        this.createdTime=createdTime
        this.content=content
        this.receiver=receiver
        }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`)
    }
 }

class EmailNotification extends Notification{
    constructor(NotificationId,createdTime,content,receiver){
        super(NotificationId,createdTime,content,receiver)
        }
 }

class SMSNotification extends Notification{
    constructor(NotificationId,createdTime,content,phoneNumber){
        super(NotificationId,createdTime,content,)
        this.phoneNumber=phoneNumber
        }
        send(){
            console.log(`Notification has been sent to ${this.phoneNumber}`)
        }      
 }
 const testEmail=new EmailNotification("0","28/06/2024","test","test@techup.com")
 const testSMS=new SMSNotification("1","28/06/2024","test","0987654321")
testEmail.send()
testSMS.send()