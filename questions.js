const questions1 = [
	{
		q: 'what is the output? \nprint ("2" + "2")',
		a: [
			{ a: '4', correct: false },
			{ a: '22', correct: true },
			{
				a: '8',
				correct: false,
			},
			{
				a: '16',
				correct: false,
			},
		],
	},
	{
		q: 'What do you call a file containing a program written in a high-level programming language? ',
		a: [
			{ a: 'A target file', correct: false },
			{ a: 'A machine file', correct: false },
			{ a: 'A source file', correct: true },
			{ a: 'A code file ', correct: false },
		],
	},
	{
		q: 'Python is a scripting language. ',
		a: [
			{ a: 'True', correct: true },
			{ a: 'False', correct: false },
		],
	},
	{
		q: 'What is the output? \nprint(2 ** 2 ** 3)',
		a: [
			{
				a: '128',
				correct: false,
			},
			{ a: '12', correct: false },
			{
				a: '64',
				correct: false,
			},
			{ a: '256', correct: true },
		],
	},
	{
		q: 'Each function may have 1) an effect 2) a result. ',
		a: [
			{
				a: 'True',
				correct: true,
			},
			{ a: 'False', correct: false },
		],
	},
	{
		q: 'This code has no error. \nx= input("Enter a number") \ny= x+1 \nprint (y)',
		a: [
			{ a: 'True', correct: true },
			{ a: 'False', correct: false },
		],
	},
	{
		q: 'Select the true statements  (Select two)',
		a: [
			{
				a: 'Python is free, open-source, and multiplatform ',
				correct: true,
			},
			{ 
				a: 'python is a good choice for creating and executing tests for applications ', 
				correct: true 
			},
			{
				a: 'Python2 is compatible with Python3 ',
				correct: false,
			},
			{ a: 'Python is faster compared to c++ ', correct: false },
		],
		multiply: true
	},
	{
		q: 'Usually, Interpreter is faster than the complier.',
		a: [
			{
				a: 'True',
				correct: false,
			},
			{ 
				a: 'False', 
				correct: true 
			}
		],
	},
	{
		q: 'What is the output? \nvar = 2 \nvar = 3 \nprint(var)',
		a: [
			{
				a: 'Error',
				correct: false,
			},
			{ 
				a: '2', 
				correct: false 
			},
			{ 
				a: '3', 
				correct: true 
			},
			{ 
				a: 'var', 
				correct: false 
			}
		],
	},
	{
		q: 'print () function is a built-in function type',
		a: [
			{
				a: 'True',
				correct: true,
			},
			{ 
				a: 'False', 
				correct: false 
			}
		],
	},
	{
		q: 'You want to invoke the function make_money() contained in the module named mint. Your code begins with the following line: \nfrom mint import make_money\nWhat is the proper form of the function\'s invocation?',
		a: [
			{
				a: 'make_money()',
				correct: true,
			},
			{ 
				a: 'make_money', 
				correct: false 
			},
			{ 
				a: 'mint.make_money()', 
				correct: false 
			},
			{ 
				a: 'All the above', 
				correct: false 
			}
		],
	},
	{
		q: 'How to get information about a package in python',
		a: [
			{
				a: 'pip show package will tell you that.',
				correct: true,
			},
			{ 
				a: 'pip --version will tell you that.', 
				correct: false 
			},
			{ 
				a: 'All the above.', 
				correct: false 
			},
			{ 
				a: 'pip3 --version will tell you that. ', 
				correct: false 
			}
		],
	},
	{
		q: 'You want to invoke the function make_money() contained in the module named mint. Your code begins with the following line: \nimport mint \nWhat is the proper form of the function\'s invocation?',
		a: [
			{
				a: 'mint.make_money()',
				correct: true,
			},
			{ 
				a: 'mint.make_money', 
				correct: false 
			},
			{ 
				a: 'make_money()', 
				correct: false 
			},
			{ 
				a: 'All the above', 
				correct: false 
			}
		],
	},
	{
		q: 'What is the expected output of the following code? \nfor ch in "abc": \n\tprint(chr(ord(ch) + 1), end=\'\')',
		a: [
			{
				a: 'bcd',
				correct: true,
			},
			{ 
				a: '97 98 100', 
				correct: false 
			},
			{ 
				a: 'Error', 
				correct: false 
			},
			{ 
				a: 'abc', 
				correct: false 
			}
		],
	},
	{
		q: 'Python is completely internationalized - we can use UNICODE characters inside our code, read them from input and send to output. ',
		a: [
			{
				a: 'True, because Python 3 is UCS-4',
				correct: false,
			},
			{ 
				a: 'True, because Python 3 is Ascii', 
				correct: false 
			},
			{ 
				a: 'All the above ', 
				correct: false 
			},
			{ 
				a: 'True, because Python 3 is I18N', 
				correct: true 
			}
		],
	},
	{
		q: 'The version of Python I have is 3.7 and there are many packages in the system, but pip list does not work, what would be the reason?',
		a: [
			{
				a: 'You should use pip3 list.',
				correct: true,
			},
			{ 
				a: 'pip is not installed. ', 
				correct: false 
			},
			{ 
				a: 'The path is not set correctly. ', 
				correct: false 
			},
			{ 
				a: 'I need more information to answer this question. ', 
				correct: false 
			}
		],
	},
	{
		q: 'How to uninstall a package named pygame?',
		a: [
			{
				a: 'pip uninstall pygame',
				correct: true,
			},
			{ 
				a: 'pip -uninstall pygame', 
				correct: false 
			},
			{ 
				a: 'pip -i pygame', 
				correct: false 
			},
			{ 
				a: 'pip -u pygame ', 
				correct: false 
			}
		],
	},
	{
		q: 'the name pip comes from:',
		a: [
			{
				a: 'pip install packages',
				correct: true,
			},
			{ 
				a: 'all the above', 
				correct: false 
			},
			{ 
				a: 'package in package', 
				correct: false 
			},
			{ 
				a: 'python internal packages', 
				correct: false 
			}
		],
	},
	{
		q: 'the name pip comes from:',
		a: [
			{
				a: 'pip install packages',
				correct: true,
			},
			{ 
				a: 'all the above', 
				correct: false 
			},
			{ 
				a: 'package in package', 
				correct: false 
			},
			{ 
				a: 'python internal packages', 
				correct: false 
			}
		],
	},
	{
		q: 'abc\n|__\n\tdef\n\t|__ mymodule.py\nAssuming that D:\Python\Project\Modules has been successfully appended to the sys.path list, write an import directive letting you use all the mymodule entities.',
		a: [
			{
				a: 'import abc.def.mymodule',
				correct: true,
			},
			{ 
				a: 'from abc import * ', 
				correct: false 
			},
			{ 
				a: 'import mymodule.py', 
				correct: false 
			},
			{ 
				a: 'All the above', 
				correct: false 
			}
		],
	},
	{
		q: 'What is the expected output of the following code?\nthe_list = [\'Where\', \'are\', \'the\', \'snows?\']\s = \'*\'.join(the_list)\nprint(s)',
		a: [
			{
				a: 'Where*are*the*snows?',
				correct: true,
			},
			{ 
				a: 'Where*are*the*snows', 
				correct: false 
			},
			{ 
				a: 'Where are the snows?', 
				correct: false 
			},
			{ 
				a: 'Error, it is immutable', 
				correct: false 
			}
		],
	},
	{
		q: 'What is the meaning of the value represented by errno.EACESS?',
		a: [
			{
				a: 'Too many open files',
				correct: true,
			},
			{ 
				a: 'No such file or directory', 
				correct: true 
			},
			{ 
				a: 'Permission denied', 
				correct: true 
			},
			{ 
				a: 'Bad file number', 
				correct: true 
			}
		],
		multiply: true
	},
	{
		q: 'Write a lambda function, setting the least significant bit of its integer argument, and apply it to the map() function to produce the string 1 3 3 5 on the console.\nany_list = [1, 2, 3, 4]\neven_list = # Complete the line here.\nprint(even_list)\nHint: the " opertation does the following :\neven | 1 = even + 1\nodd | 1 = odd',
		a: [
			{
				a: 'even_list = map(lambda x: if x % 2 == 1: return x+1, any_list)',
				correct: false,
			},
			{ 
				a: 'list(map(lambda n: n | 1, any_list)) ', 
				correct: true 
			}
		],
	},
	{
		q: 'What is the output of the following snippet? (Assume the file is not exist)\import errno\ntry:\n\tstream = open("file", "rb")\n\tprint("exists")\n\tstream.close()\nexcept IOError as error:\n\tif error.errno == errno.ENOENT:\n\tprint("absent")\nelse:\n\tprint("unknown")',
		a: [
			{
				a: 'unknown',
				correct: false,
			},
			{ 
				a: 'absent', 
				correct: true 
			},
			{
				a: 'errno.ENOENT → No such file or directory',
				correct: false,
			},
			{
				a: 'exists',
				correct: false,
			}
		],
	},
	{
		q: 'What is the output of the following snippet?\nfrom datetime import datetime\ndt1 = datetime(2020, 9, 29, 14, 41, 0)\ndt2 = datetime(2020, 9, 28, 14, 41, 0)\nprint(dt1 - dt2)',
		a: [
			{
				a: 'DateTime(0, 0, 1, 0, 0, 0)',
				correct: false,
			},
			{ 
				a: '1 day, 0:00:00', 
				correct: true 
			}
		],
	},
	{
		q: 'What is the output of the following snippet?\nimport calendar\nprint(calendar.weekheader(1))',
		a: [
			{
				a: 'Sun, Mon, Tue, Wed, Thur, Fri, Sat',
				correct: false,
			},
			{ 
				a: 'M T W T F S S ', 
				correct: true 
			}
		],
	},
	{
		q: 'x = lambda a,b : a ** b\nprint (x(2, 10))',
		a: [
			{
				a: '1024',
				correct: true,
			},
			{ 
				a: 'Error', 
				correct: false 
			},
			{ 
				a: '2222222222222', 
				correct: false 
			}
		],
	},
	{
		q: 'What is the output\nfoo = [i + i for i in range(5)]\nprint (foo)',
		a: [
			{
				a: '0 2 4 6 8',
				correct: false,
			},
			{ 
				a: '[1 , 3, ,5 7, 9]', 
				correct: false 
			},
			{ 
				a: '[0. 2. 4 .6 .8]', 
				correct: true 
			}
		],
	},
	{
		q: 'What is the expected output of the following code?\nimport math\ntry:\n\tprint(math.sqrt(9))\nexcept ValueError:\n\tprint("inf")\nelse:\n\tprint("fine")',
		a: [
			{
				a: '3.0',
				correct: false,
			},
			{ 
				a: 'Error', 
				correct: false 
			},
			{ 
				a: '3.0 fine', 
				correct: true 
			},
			{ 
				a: 'fine', 
				correct: false 
			}
		],
	},
	{
		q: 'How do you encode an open() function’s mode argument value if you\'re going to create a new text file to only fill it with an article?',
		a: [
			{
				a: '"rt"',
				correct: false,
			},
			{ 
				a: '"rt" or "r"', 
				correct: false 
			},
			{ 
				a: '"wb"', 
				correct: false 
			},
			{ 
				a: '"wt" or "w"', 
				correct: true 
			}
		],
	},
	{
		q: 'Fix the code and fill the blank by the output of the program (Hint: use IDLE)\nclass Vowels:\n\tdef __init__(self):\n\t\tself.vow = "aeiouy " # Yes, we know that y is not always considered a vowel.       self.pos = 0\n\tdef __iter__(self):\n\t\treturn self\n\tdef __next__(self):\n\t\tif self.pos == len(vow):\n\t\t\traise StopIteration\n\t\tself.pos += 1\n\t\treturn self.vow[self.pos - 1]\nvowels = Vowels()\nfor v in vowels:\n\tprint(v, end=\' \')',
		a: [
			{
				a: 'y u o i e a',
				correct: false,
			},
			{ 
				a: 'a e i o u y', 
				correct: true 
			}
		],
	},
	{
		q: 'You\'re going to process a bitmap stored in a file named image.png, and you want to read its contents as a whole into a bytearray variable named image. Add a line to the following code to achieve this goal.\ntry:\n\tstream = open("image.png", "rb")\n\t# Insert a line here.\n\tstream.close()\nexcept IOError:\n\tprint("failed")\nelse:\n\tprint("success")',
		a: [
			{
				a: 'stream.read()',
				correct: false,
			},
			{ 
				a: 'image=bytearray(stream.read())', 
				correct: true 
			},
			{ 
				a: 'image = bytearray(stream.read () )', 
				correct: true 
			},
			{ 
				a: 'image = bytearray(stream.read())', 
				correct: true 
			}
		],
		multiply: true
	},
	{
		q: 'What is the expected output of the following code?\nimport math\ntry:\n\tprint(math.sqrt(-9))\nexcept ValueError:\n\tprint("inf")\nelse:\n\tprint("fine")\nfinally:\n\tprint("the end")',
		a: [
			{
				a: 'fine',
				correct: false,
			},
			{ 
				a: 'inf the end', 
				correct: true 
			},
			{
				a: 'inf',
				correct: false,
			},
			{
				a: 'fine the end',
				correct: false,
			}
		],
	},
	{
		q: 'What is the problem with this program ? If there is !\nfrom datetime import timedelta\nfrom datetime import date\nfrom dateTime import datetime\ndelta = timedelta(weeks=2, days=2, hours=2)\nprint(delta)\ndelta2 = delta * 2\nprint(delta2)\nd = date(2019, 10, 4) + delta2\nprint(d)\ndt = datetime(2019, 10, 4, 14, 53) + delta2\nprint(dt)',
		a: [
			{
				a: 'No problem found, it is working ',
				correct: false,
			},
			{ 
				a: 'we should write from datetime import * ', 
				correct: false 
			},
			{
				a: 'dateTime no such module',
				correct: true,
			},
			{
				a: 'we should use try except form',
				correct: false,
			}
		],
	},
	{
		q: 'Which of the following is structured data?',
		a: [
			{
				a: 'white paper',
				correct: false,
			},
			{ 
				a: 'web page', 
				correct: false 
			},
			{
				a: '.xls',
				correct: true,
			},
			{
				a: '.cxs',
				correct: false,
			}
		],
	},
	{
		q: 'Which of the following ARE type of data?',
		a: [
			{
				a: 'Private Data',
				correct: true,
			},
			{ 
				a: 'Open Data', 
				correct: true 
			},
			{
				a: 'Public Data',
				correct: false,
			},
			{
				a: 'Close Data',
				correct: false,
			}
		],
		multiply: true
	},
	{
		q: 'Which of the following is considered traditional data storage.',
		a: [
			{
				a: 'excel',
				correct: true,
			},
			{ 
				a: 'sql', 
				correct: false 
			},
			{
				a: 'mysql',
				correct: false,
			},
			{
				a: 'python',
				correct: false,
			}
		],
	},
	{
		q: 'Data in Motion',
		a: [
			{
				a: 'backup data',
				correct: false,
			},
			{ 
				a: 'Data moves from place to another', 
				correct: false 
			},
			{
				a: 'requires real-time process',
				correct: true,
			},
			{
				a: 'Data stored for analyzing',
				correct: false,
			}
		],
	},
	{
		q: 'Big data can be defined: \nData that is so vast, fast, or complex that\nit becomes impossible to store, process,\nand analyze using traditional data storage\nand analytics applications',
		a: [
			{
				a: 'True',
				correct: true,
			},
			{ 
				a: 'False', 
				correct: false 
			}
		],
	},
	{
		q: "Given the following nested list, use indexing to grab the word \"Hi Big Data learner\".\nlst = ['a','b',[4,10,'Hi Big Data learner'],['c',[1,66,['this']],2,111],'e',7]",
		a: [
			{
				a: 'lst[2][2]',
				correct: true,
			},
			{ 
				a: 'lst[2] [2]', 
				correct: true 
			}
		],
		multiply: true
	},
	{
		q: 'Which of the following is unstructured data ?',
		a: [
			{
				a: 'text',
				correct: true,
			},
			{ 
				a: '.xls', 
				correct: false 
			},
			{ 
				a: '.db', 
				correct: false 
			},
			{ 
				a: '.csv', 
				correct: false 
			}
		],
	},
	{
		q: 'Which of the following is unstructured data ?',
		a: [
			{
				a: '.csv',
				correct: false,
			},
			{ 
				a: '.db', 
				correct: false 
			},
			{ 
				a: 'email', 
				correct: true 
			},
			{ 
				a: 'All of the above', 
				correct: false 
			}
		],
	},
	{
		q: "# Modify this code \nfloor_types = ['Parking', 'Shops', 'Food Court', 'Offices']\nfloor_numbers = # Fill in the blank # put your code here \nzipped = list(zip(floor_types ,floor_numbers ))\nprint(zipped)\n# To get this output ",
		a: [
			{
				a: '[i for i in range(0,len(floor_types))]',
				correct: false,
			},
			{ 
				a: 'range(1,5)', 
				correct: true 
			},
			{ 
				a: '[1, 2, 3, 4]', 
				correct: true 
			}
		],
		multiply: true
	},
	{
		q: 'Today, data is growing __________________ ',
		a: [
			{
				a: 'exponentially',
				correct: true,
			},
			{ 
				a: 'rapidly', 
				correct: false 
			},
			{ 
				a: 'linearly', 
				correct: false 
			},
			{ 
				a: 'randomly', 
				correct: false 
			}
		],
	},
	{
		q: 'give a command line to connect a database named (python+bigdata.db) using python and sqlite3. Assume that everything in installed and imported \nconn = ',
		a: [
			{
				a: 'sqlite3.connect("python+bigdata.db")',
				correct: false,
			},
			{ 
				a: 'conn = sqlite3.connect(\'python+bigdata.db\')', 
				correct: true 
			}
		],
	},
	{
		q: 'speedtest-cli is a tool used to measure the speed of the internet, but it only works if the ping command works.',
		a: [
			{
				a: 'True',
				correct: true,
			},
			{ 
				a: 'False', 
				correct: false 
			}
		],
	},
	{
		q: 'From jupyter, install the csvkit (hint, use pip)',
		a: [
			{
				a: 'pip install csvkit',
				correct: false,
			},
			{ 
				a: '!pip install csvkit ', 
				correct: true 
			}
		],
	},
	{
		q: 'Which of the following is not in the data analysis steps?',
		a: [
			{
				a: 'Prepare Data',
				correct: false,
			},
			{ 
				a: 'Make Decisions', 
				correct: false 
			},
			{ 
				a: 'Use Python', 
				correct: true 
			},
			{ 
				a: 'Choose a Model', 
				correct: false 
			}
		],
	},
	{
		q: 'To import a csv file to a database in python, the __________- is used',
		a: [
			{
				a: 'sql',
				correct: false,
			},
			{ 
				a: 'all the above', 
				correct: false 
			},
			{ 
				a: 'csvkit', 
				correct: true 
			},
			{ 
				a: 'database sqlite3', 
				correct: false 
			}
		],
	},
	{
		q: 'BigData is more relevant to IoT.',
		a: [
			{
				a: 'True',
				correct: true,
			},
			{ 
				a: 'False', 
				correct: false 
			}
		],
	},
	{
		q: 'To iterate in a database, we need t cursor() method to be assigned after the connection (conn)\nfor example : cur = conn.cursor()',
		a: [
			{
				a: 'True',
				correct: true,
			},
			{ 
				a: 'False', 
				correct: false 
			}
		],
	},
	{
		q: "fill the command to execute a query \nconn = sqlite3.connect('InternetSpeed.db')\ncur = conn.cursor()\nquery = 'SELECT DateTime FROM LA_wifi_speed_UK ORDER BY DateTime LIMIT 10;'\n# put your code here",
		a: [
			{
				a: 'cur.execute(query)',
				correct: true,
			},
			{ 
				a: 'conn.execute(query)', 
				correct: false 
			}
		],
	},
	{
		q: 'What is the purpose of this code?\n!apt-get update\n!apt-get -y install sqlite3',
		a: [
			{
				a: 'update and install database',
				correct: false,
			},
			{ 
				a: 'Install sqlite3 and -y is an option means in your machine.', 
				correct: false 
			},
			{ 
				a: 'Install sqlite3 and -y is for yes during the installation process.', 
				correct: true 
			},
			{ 
				a: 'Install sqlite3 and -y is needed in ubuntu only.', 
				correct: false 
			}
		],
	},
	{
		q: "Matplotlib is used in python to get a data frame.",
		a: [
			{
				a: 'False',
				correct: true,
			},
			{ 
				a: 'True', 
				correct: false 
			}
		],
	},
	{
		q: "To draw an arrow on a figure, then you can use the method called __________ from the matplotlib module (plt)",
		a: [
			{
				a: 'plt.annotate()',
				correct: true,
			},
			{ 
				a: 'plt.legend()', 
				correct: false 
			},
			{ 
				a: 'plt.xticks()', 
				correct: false 
			},
			{ 
				a: 'plt.plot()', 
				correct: false 
			}
		],
	},
	{
		q: "A researcher does not use a temperature sensor correctly. What kind of error will be?",
		a: [
			{
				a: 'Gross Error',
				correct: true,
			},
			{ 
				a: 'Random Error', 
				correct: false 
			},
			{ 
				a: 'Systematic Error', 
				correct: false 
			},
			{ 
				a: 'Noise Error', 
				correct: false 
			}
		],
	},
	{
		q: "Need a target to work",
		a: [
			{
				a: 'Supervised ML',
				correct: true,
			},
			{ 
				a: 'Unsupervised ML', 
				correct: false 
			},
			{ 
				a: 'Data Mining', 
				correct: false 
			},
			{ 
				a: 'All are correct', 
				correct: false 
			}
		],
	},
	{
		q: "<class 'pandas.core.frame.DataFrame'>\nRangeIndex: 915 entries, 0 to 914\nData columns (total 12 columns):\nPassengerId    915 non-null int64\nSurvived       915 non-null int64\nPclass         915 non-null int64\nName           915 non-null object\nGender         915 non-null object\nAge            738 non-null float64\nSibSp          915 non-null int64\n\nAccording to the above lines, In which column(s) there are NaN values.  ",
		a: [
			{
				a: 'Age',
				correct: true,
			},
			{ 
				a: 'Pclass', 
				correct: false 
			},
			{ 
				a: 'No NaN values are there', 
				correct: false 
			},
			{ 
				a: 'Gender', 
				correct: false 
			}
		],
	},
	{
		q: "Learn from the data itself",
		a: [
			{
				a: 'Unsupervised ML',
				correct: true,
			},
			{ 
				a: 'AI', 
				correct: false 
			},
			{ 
				a: 'Supervised ML', 
				correct: false 
			},
			{ 
				a: 'Data Mining', 
				correct: false 
			}
		],
	},
	{
		q: "When you use a classification in ML, then you most probably will visualize the data using",
		a: [
			{
				a: 'tree from graphviy',
				correct: true,
			},
			{ 
				a: 'hist', 
				correct: false 
			},
			{ 
				a: 'heat map', 
				correct: false 
			},
			{ 
				a: 'matplotlib', 
				correct: false 
			}
		],
	},
	{
		q: "To calculate the error,  which module used (according to the labs)\norder = 1\np = np.poly1d(np.polyfit(x, y ,order))\nfrom _________  import r2_score\nr2 = r2_score(y, p(x))\nr2",
		a: [
			{
				a: 'sklearn.metrics',
				correct: true,
			},
			{ 
				a: 'sklearn', 
				correct: false 
			},
			{ 
				a: 'seaborn', 
				correct: false 
			},
			{ 
				a: 'scikit', 
				correct: false 
			}
		],
	},
	{
		q: "When using the ML to predict something based on the given data, Calculating the noise ratio is important. One needs to know how correct is the prediction is .",
		a: [
			{
				a: 'True',
				correct: true,
			},
			{ 
				a: 'False', 
				correct: false 
			}
		],
	},
	{
		q: "	district	sales	stores\n0	1	231.0	12\n1	2	156.0	13\n2	3	10.0	16\n3	4	519.0	2\n4	5	437.0	6\nIf the dataframe above called SA, you can reach the Sales column in this way SA.sales or  SA.['sales']",
		a: [
			{
				a: 'False',
				correct: true,
			},
			{ 
				a: 'True', 
				correct: false 
			}
		],
	},
	{
		q: "what method/function produces this output  from a dataframe called PP\n<class 'pandas.core.frame.DataFrame'>\nRangeIndex: 915 entries, 0 to 914\nData columns (total 12 columns):\nPassengerId    915 non-null int64\nSurvived       915 non-null int64\nPclass         915 non-null int64\nName           915 non-null object\nGender         915 non-null object\nAge            738 non-null float64\nSibSp          915 non-null int64\n\nAccording to the above lines, In which column(s) there are NaN values.  ",
		a: [
			{
				a: 'PP.info()',
				correct: true,
			},
			{ 
				a: 'PP.describe', 
				correct: false 
			},
			{ 
				a: 'PP.head()', 
				correct: false 
			},
			{ 
				a: 'info(PP)', 
				correct: false 
			}
		],
	},
	{
		q: "	district	sales	stores\n0	1	231.0	12\n1	2	156.0	13\n2	3	10.0	16\n3	4	519.0	2\n4	5	437.0	6\nDrop the District column using the drop method. (Donot create a new dataframe, drop it from this dataframe itself) Important: the dataframe names is df",
		a: [
			{
				a: 'df.drop(\'district\',axis=1,inplace=True)',
				correct: true,
			},
			{ 
				a: 'sales = df.drop(\'district\',axis=1, inplace=True)', 
				correct: false 
			},
			{ 
				a: 'df.drop(\'district\',axis=1)', 
				correct: false 
			},
			{ 
				a: 'sales = df.drop(\'district\',axis=1)', 
				correct: false 
			}
		],
	},
	{
		q: "To fill a NaN values in a column in the age column , you can use the following code\nNote: the dataframe called training\n<class 'pandas.core.frame.DataFrame'>\nRangeIndex: 915 entries, 0 to 914\nData columns (total 12 columns):\nPassengerId    915 non-null int64\nSurvived       915 non-null int64\nPclass         915 non-null int64\nName           915 non-null object\nGender         915 non-null object\nAge            738 non-null float64\nSibSp          915 non-null int64",
		a: [
			{
				a: 'training["Age"].fillna(training["Age"].mean(), inplace=True)',
				correct: true,
			},
			{ 
				a: 'training["Age"].fillna(training["Age"].mean(), axces=1)', 
				correct: false 
			},
			{ 
				a: 'training["Age"].fillna(training["Age"].mean())', 
				correct: false 
			},
			{ 
				a: 'training["Age"].dropna()', 
				correct: false 
			}
		],
	},
	{
		q: "What this code for \n\ndef scatter_view(x, y, z, azim, elev):\n\t	   # Init figure and axes\n\t	   fig = plt.figure(figsize=(8, 8))\n\t		ax = Axes3D(fig)\n\t\n\t		# Compute scatter plot\n\t		ax.scatter(x, y, z)\n\t		ax.set_xlabel('D rate (Mbit/s)', fontsize=16)\n\t		ax.set_ylabel('U rate (Mbit/s)', fontsize=16)\n\t		ax.set_zlabel('P rate (1/s)', fontsize=16)\n\t\n#       Specify azimuth\n# and elevation\n\t		ax.azim = azim\n\t		ax.elev = elev",
		a: [
			{
				a: 'it is for 3D figure',
				correct: true,
			},
			{ 
				a: 'Indentation error', 
				correct: false 
			},
			{ 
				a: 'It is a function that needs to return something so it is not completely written', 
				correct: false 
			},
			{ 
				a: 'for calculating the azim and elev', 
				correct: false 
			}
		],
	}
];

const dank = [
	'14cae25733388833ac48f0c030a3969a.jpg',
	'274114471_4841705835865095_4753529712369730221_n.jpg',
	'279126586_3205519489719419_7797351067567662369_n.jpg',
	'280272244_759374592102755_3036743301817544385_n.jpg',
	'440px-Nikita-Khrushchev-TIME-1958.jpg',
	'69dd4f6bea4966df9c8d167c03c8c909b3-13-wojak-00.2x.h473.w7',
	'95ae198555006c9ece1d4208e8ea289f.png',
	'a272w7w_460swp.webp',
	'a27nR9D_460swp.webp',
	'a51N3xg_460swp.webp',
	'a6ED7Aq_460swp.webp',
	'a8E38Ze_460swp.webp',
	'aABDbzdW_700w_0.jpg',
	'aB2jMy1_460swp.webp',
	'abgbDQv_460swp.webp',
	'aBm7jLD_460swp.webp',
	'aDdgRwO_460swp.webp',
	'aGK6Rek3_700w_0.jpg',
	'aK6DN8Z_460swp.webp',
	'aN7A102Z_700w_0.jpg',
	'aP3Bn5R_460swp.webp',
	'aP3YZKn_460swp.webp',
	'aQeaM5Aq_700w_0.jpg',
	'ay95zKM_700bwp.webp',
	'aYoQr4x_460swp.webp',
	'aYoYVp2_460swp.webp',
	'azeVKqx_460swp.webp',
	'aZl0w6Aq_700w_0.jpg',
	'bojler.jpg',
	'bored_cat.jpg',
	'c55ca8e4250d102d94d7001438c0f03b.gif',
	'catarm.webp',
	'chair.jpg',
	'cig.jpg',
	'damn-amateur-firefighters.jpg',
	'dns.jpg',
	'dtabase.jpg',
	'free_trial.webp',
	'frog_s.jpg',
	'german.webp',
	'happy.webp',
	'hr.webp',
	'idle.jpg',
	'inhales.jpg',
	'kafka.webp',
	'math.webp',
	'meme.png',
	'pohar.jpg',
	'present.webp',
	'sc.jpg',
	'SPUTNIK.jpg',
	'steps.webp',
	'stone.jpg',
	'tarot.jpg',
	'terminator.jpg',
	'time.jpeg',
	'ux.png',
	'win11.jpg',
	'yt.webp',
	'_gif.gif',
];
