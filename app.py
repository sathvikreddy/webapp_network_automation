from flask import Flask , render_template, request
#from netmiko import ConnectHandler, net_connect
app = Flask(__name__)

@app.route('/')
def hello_world(name = None):
	#input_from_user = request.get_json(force = True)
	#print input_from_user
    return render_template('netman.html',name = name)
@app.route('/', methods = [ 'POST'])
def my_form_post():
    proto = request.form.keys()[request.form.values().index(u'Send')]
    if proto.split('_')[0] == 'ospf':
    	f= open('conf.conf','wb')
    	f.write('router ospf '+ request.form['pid']+'\n')
    	f.write('router-id ' + request.form['rid']+'\n')
    	f.write('exit\n')
    	ints = request.form['ints']
    	ints = ints.split(',')
    	for item in ints:
    		f.write('interface '+item+'\n')
    		f.write('ip ospf '+request.form['pid']+' area '+request.form['area']+'\n')
    	f.close()
    elif proto.split('_')[0] == 'dhcp':
    	if proto.split('_')[2]== 'server':
    		f = open('conf.conf', 'wb')
    		f.write('conf t \n'+ 'ip dhcp pool '+ request.form['pool']+'\n')
    		f.write('network '+ request.form['naddr']+' '+ request.form['subnet']+ '\nexit')
    		f.close()
    	elif proto.split('_')[2]== 'client':
    		f = open('conf.conf', 'wb')
    		f.write('conf t \n'+ 'interface '+request.form['int']+'\n ip address dhcp')
    		f.close()
    fh = open('main.conf', 'rb')
    ip_dict = {}
    for line in fh.readlines():
    	ip_dict[line.split(' ')[0]] = line.split(' ')[1]
    ip = ip_dict[proto.split('_')[1]]
    print ip
    exec_commands('conf_file', ip)
    #return output
def exec_commands(conf_file, ipaddr):
	net_connect = ConnectHandler(device_type='cisco_ios', ip=ipaddr, username='admin', password='password') 
	fh = open(conf_file,'rb')
	cmd_list = []
	for line in fh.readlines():
		cmd_list.append(line)
	output = net_connect.send_config_set(cmd_list)
	return output
if __name__ == '__main__':
    app.run(debug = True)