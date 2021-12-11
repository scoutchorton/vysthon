#!/usr/bin/env python3
import tornado.ioloop
import tornado.web
#import webbrowser

import handlers

tornadoConfig = [
	(r"/module/(.*)", handlers.ModuleHandler),
	(r"/api/", handlers.APIHandler),
	(r"/api/(.*)", handlers.APIHandler),
	(r"/(.*)", tornado.web.StaticFileHandler, {"path": r"./static/", "default_filename": "index.html"}),
]

if __name__ == "__main__":
	app = tornado.web.Application(tornadoConfig)

	#print("Opening Vysthon...")
	#webbrowser.open("http://localhost:8888")

	print("Listening on port 8888...")
	app.listen(8888)
	tornado.ioloop.IOLoop.current().start()