# coding=utf-8
import itchat, time
from itchat.content import *

text = "鸡年大吉"

@itchat.msg_register([TEXT])
def text_reply(msg):
    if u"年" in msg['Text']:
        itchat.send('%s' % (msg['Text']), msg['FromUserName'])

@itchat.msg_register([PICTURE, RECORDING, ATTACHMENT, VIDEO])
def download_files(msg):
    itchat.send('鸡年大吉', msg['FromUserName'])


itchat.auto_login(enableCmdQR=True)
itchat.run()