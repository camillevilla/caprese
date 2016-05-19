# python3
# a little program for adding pomodoros to my log

import csv
from pomodoro import Pomodoro

#convert 12HR time to 24HR time
def time_convert(x):
	hours = x[0:x.index(':')]
	minutes = x[x.index(':')+1:x.index(' ')]
	#if string contains PM: add 12 hrs to time
	if (hours == '12') and ('AM' in x):
		return '00' + ':' + minutes
	elif 'PM' in x:
		hours = int(hours) + 12
		return str(hours) + ':' + minutes
	else:
		return hours + ':' + minutes

#view past pomodoros
def view_log():
	pomLog = open('pomLog.csv')
	pomReader = csv.reader(pomLog)
	for row in pomReader:
		print(str(pomReader.line_num) + ' ' + str(row))

#create new pomodoros
def add_pomodoro():	
	outputFile = open('pomLog.csv','a',newline='')
	pomWriter = csv.writer(outputFile, lineterminator='\n')
	print('YAY! a new tomato!')
	x = Pomodoro()
	pomWriter.writerow([x.date,time_convert(x.time),x.tags])
	outputFile.close()

view_log()
add_pomodoro()
