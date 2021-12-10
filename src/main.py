#!/usr/bin/env python3
import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
	def get(self):
		self.write("<h3>Hello, Wes!</h3>")

if __name__ == "__main__":
	app = tornado.web.Application([
		(r"/", tornado.web.StaticFileHandler, {"path": "static/"}) #Gets HTTP 500 error
	])
	print("Listening on port 8888")
	app.listen(8888)
	tornado.ioloop.IOLoop.current().start()