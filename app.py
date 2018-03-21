#!/usr/bin/env python
# -*- coding: utf-8 -*-
from flask import Flask
from flask import render_template
from flask import request
from flask_wtf import CSRFProtect
from flask import make_response
from flask import session
from flask import url_for
from flask import redirect
from flask import flash
from flask import g

app = Flask(__name__)


#MANEJADOR DE ERRORES
@app.errorhandler(404)
def page_not_found(e):
	return render_template('404.html'), 404


#INDEX PRINCIPAL
@app.route('/')
def index():
	return render_template('index.html')




#DEPLOY DE APP
if __name__ == '__main__':
	app.run(debug=True, port=7000)
