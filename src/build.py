import os, re
HERE = os.path.dirname(os.path.abspath(__file__))
s=open(os.path.join(HERE,'app.html')).read()
head_parts=[]
for pat in [r'<title>.*?</title>\n', r'<meta name="claude:viewport-fit-sides"[^>]*>\n', r'<link [^>]*>\n', r'<style>.*?</style>\n']:
    for m in re.findall(pat,s,re.S):
        head_parts.append(m); s=s.replace(m,'',1)
head='''<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#23664a">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Prepmaat">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="icon" type="image/png" href="icon-192.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);color-scheme:light}body{margin:0}[hidden]{display:none!important}img{max-width:100%}</style>
'''+''.join(head_parts)+'</head>\n<body>\n'
tail='''<script>if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});</script>
</body>
</html>
'''
open(os.path.join(HERE,'..','index.html'),'w').write(head+s.strip()+'\n'+tail)
