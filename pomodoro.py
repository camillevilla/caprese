#define pomodoro class
class Pomodoro():
	def __init__(self, **kwargs):
		self.date = input('Date (YYYY-MM-DD): ') #eventually default to current date
		self.time = input('Time (e.g. 11:00 PM): ') #eventually default to current time minus 25 minnutes
		self.tags = input('Enter tags as a comma separated list (e.g. x,y,z): ')
		self.notes = input('Describe briefly')

	def __str__(self):
		return '{},{},{}'.format(self.date,self.time,self.tags)