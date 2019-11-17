# SteelDefecttest
Dataset –
Dataset used for this project is downloaded from Kaggle Severstal Competition "kaggle competitions download -c severstal-steel-defect-detection"

React Frontend –
React frontend hosts a sign in, register and image file upload and prediction page. To validate userid it connects to React backend via “Axios” protocol

Set Up-
Prerequisites are node.js and create-react-app to be installed on your machine. If you don’t have these then please google them and complete the setup

Then follow the steps to start frontend –
1)	cd to react project folder which contains package.json file. Package.json is used by npm to start the service
2)	do “npm start” to start web service


React Backend –

React backend connects to MySQL server to store the registered users and validate their userid and passwords
Create MYSQL database – steeldefecttest
Inside this db create table – userprofile with below columns

 first_name - varchar(30)
 last_name - varchar(30)
 userid - varchar(50)
 password - varchar(30)
 role - varchar(30)
 created - datetime
 modified - datetime


Flask service – (steeldefecttest_flaskwebserver.py)

This flask service hosts the model file for steel detect detector and serves requests from React frontend to predict the steel defect

Set Up –
Firstly we need to create virtualenv to host the flask web service
1)	pip install virualenv
2)	pip install virtualenvwrapper-win
3)	“mkvirtualenv steeldefecttest to create the virtual environment
4)	Inside virtualenv “mkdir steeldefecttest which will serve as project directory
5)	cd steeldefecttest
6)	“setprojectdir .” to bind virtualenv to current working directory
7)	When done run “deactivate” to come out of virtual environment
8)	To again go back to virtual env run “workon steeldefecttest

Now since virtual environment is up and running, copy steeldefecttest_flaskwebserver.py to current working directory and run “python steeldefecttest_flaskwebserver.py”

Also run “pip install –r requirements.txt” to install all the necessary prerequisites

It will start listening for incoming requests on localhost:5000

Machine Learning Model –

Model is built using CNN and neural networks and it has accuracy of 94% with loss of 0.0214. Model file is saved as h5 file which is loaded by flask webservice and used for live predictions requested by React frontend


Stripe –

All the necessary code changes are in place only setting up stripe is needed. Please refer to this link to set up stripe with react -

https://stripe.com/docs/recipes/elements-react
