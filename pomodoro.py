#define pomodoro class
class Pomodoro():
	def __init__(self, **kwargs):
		self.date = input('Date (YYYY-MM-DD): ') #eventually have this entered automatically! 
		#eventually define function to convert 24H time to 12H time. blech! 
		self.time = input('Time (e.g. 11:00 PM): ') #also automatic one day 
		self.tags = input('Enter tags as a comma separated list (e.g. x,y,z): ')
		#add notes section! if empty, omit - check 

	def __str__(self):
		return '{},{},{}'.format(self.date,self.time,self.tags)

	#def get_tags(self):
	#	tags = input('Enter tags as a comma separated list (e.g. x,y,z)')
	#	tags = tags.split(',')