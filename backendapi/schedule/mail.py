


import smtplib
from email.message import EmailMessage
def sendMail(data,ADDRESS="ashen8810@gmail.com"):
    EMAIL_ADDRESS = 'service.rsft@gmail.com'
    EMAIL_PASSWORD = 'ozejjoscyxlhgyri'

    msg = EmailMessage()
    msg['Subject'] = 'Beautiful Subject'
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = ADDRESS

    day = ""
    hotel = ''
    plans = ''
    templates = []
    for i in data:
        day = i["day"]
        hotel = i["hotel"]
        
        if len(hotel) == 0:
            hotel = 'No hotel booked for Day '+str(day)
        else:
            hotel =hotel[0].replace('[',"").replace(']','')
        plans = i["plans"]
        p =''
        
        for j in plans:
            p = p+'<li>'+j+'</li>'
        p = '<ul>'+p+'</ul>'
        template = '<div class="event-container"><div class="event"><div class="date">'+str(day)+ '</div><div class="title">Stay At: '+str(hotel)+'</div><div class="accommodation"></div><div class="activities">'+str(p)+'</div></div>'
        templates.append(template)

    templates = " ".join(templates)
    msg.set_content('''
       <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Travel Itinerary</title>
    <style>
       body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        /* Header styles */
        .header {
            background-color: #00A4BD;
            text-align: center;
            color: white;
            padding: 20px 0;
        }

        /* Timeline styles */
        .timeline {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .event-container {
            margin-bottom: 30px;
        }

        .event {
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 5px;
            position: relative;
            margin-bottom: 20px;
            transition: all 0.3s ease;
        }

        .event:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .event::before {
            content: "";
            position: absolute;
            top: 20px;
            left: -12px;
            width: 20px;
            height: 20px;
            background-color: #007bff;
            border-radius: 50%;
        }

        .event .date {
            font-weight: bold;
            color: #007bff;
            margin-bottom: 5px;
        }

        .event .title {
            font-size: 20px;
            margin-bottom: 10px;
            color: #333;
        }

        .event .activities {
            color: #555;
        }

        .activities ul {
            list-style-type: none;
            padding: 0;
        }

        .activities li {
            margin-left: 20px;
            padding-bottom: 5px;
            position: relative;
        }

        .activities li:before {
            content: "•";
            position: absolute;
            left: -20px;
            color: #007bff;
        }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Welcome!</h1>
    </div>

    <div class="timeline">
      

		'''+str(templates)+
                    '''
    </div>
  </body>
</html>''', subtype='html')
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)
        print('Sent')
    