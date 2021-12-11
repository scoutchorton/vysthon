import json
import tornado.web

class APIHandler(tornado.web.RequestHandler):
	def get(self, *args, **kwargs):
		print("Hit api data", args, kwargs)
		fake_data = {"foo": "bar"}
		self.write(json.dumps(fake_data))