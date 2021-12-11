import inspect
import json
import tornado.web

class APIHandler(tornado.web.RequestHandler):
	def get(self, *args, **kwargs):
		print("Hit api data", args, kwargs)
		fake_data = {"foo": "bar"}
		self.write(json.dumps(fake_data))

class ModuleHandler(tornado.web.RequestHandler):
	def get(self, *args, **kwargs):
		print("Hit module data, importing module ", args[0], len(args))

		#Check that there is a valid module
		if args[0] == "":
			self.clear()
			self.set_status(400, "Bad Request")
			self.finish("{}")
			return

		#Import requested module
		try:
			module = __import__(args[0])
		except ModuleNotFoundError:
			self.clear()
			self.set_status(404, "Module Not Found")
			self.finish("{}")
			return

		#Get data about module
		module_data = {}
		module_members = inspect.getmembers(module)
		for member in module_members:
			module_data[member[0]] = type(member[1]).__name__

		self.write(json.dumps(module_data))