#!/usr/bin/env python

############## UNREAD TITLE SEARCH  ##############
## searches email titles and returns the summary of targetted search


#!/usr/bin/env python
# modified from http://elinux.org/RPi_Email_IP_On_Boot_Debian
# modified from Don Southard
import subprocess
import smtplib
import socket
import time
from email.mime.text import MIMEText
import datetime
import urllib2

import feedparser		# imports feedparser to parse XML feed

user='xxx@gmail.com'		# replace xxx with your personal gmail user email
passwd='xxx'		# replace xxx with your password for the above account


def emailcount(n): #define function emailcount
    if n > 0: # if you have over 0 emails. You can change this based on how many emails you currently have unread in your inbox
        print "you have " +str(n) + " new email"
    else: 
        print "you have no new email"

def emailme(y):
    #email to self part
    to = 'xxx@gmail.com' # replace xxx with your personal gmail user email
    gmail_user = 'xxx@gmail.com'# replace xxx with your personal gmail user email
    gmail_password = 'xxx' # replace xxx with your password for the above account
    smtpserver = smtplib.SMTP('smtp.gmail.com', 587)
    smtpserver.ehlo()
    smtpserver.starttls()
    smtpserver.ehlo
    smtpserver.login(gmail_user, gmail_password)
    today = datetime.date.today()
    # Very Linux Specific
    arg='ip route list'
    p=subprocess.Popen(arg,shell=True,stdout=subprocess.PIPE)
    data = p.communicate()
    split_data = data[0].split()
    ipaddr = split_data[split_data.index('src')+1]
    extipaddr = urllib2.urlopen("http://icanhazip.com").read()
    my_ip = 'Local address: %s\nExternal address: %s' %  (ipaddr, extipaddr) #### do we delete this?
    msg = MIMEText(y) 
    msg['Subject'] = 'Your unread emails' % today.strftime('%b %d %Y')
    msg['From'] = gmail_user
    msg['To'] = to
    time.sleep(60)
    smtpserver.sendmail(gmail_user, [to], msg.as_string())
    smtpserver.quit()

newmails1 = int(feedparser.parse("https://" + user + ":" + passwd + "@mail.google.com/gmail/feed/atom")["feed"]["fullcount"])
newmails = feedparser.parse("https://" + user + ":" + passwd + "@mail.google.com/gmail/feed/atom").entries
for i in newmails:		#for loop itterates through newmails feed
    #print str(i.title)		# uncomment to print out each title of unread emails
    if "tickets" in str(i.title) and "fabulous" in str(i.summary): #this helps to look for the term "ticket" and "fabulous", not the whole phrase
        	#print i.summary
##Calling functions in here
        print i.summary
    emailcount(newmails1)

##THIS IS AYOS SUGGUSTION
    emailme(str(i.summary))
