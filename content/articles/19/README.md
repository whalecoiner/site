---
guid: dee188d3-fc37-4bed-beb7-bde50d024cd4
title: Setting up an OS X machine
slug: setting-new-os-x-machine
created: '2013-11-15T10:00:00+00:00'
changed: '2019-09-24T19:20:54+00:00'
strapline: Gotta get those techno-hipster points.
---

**UPDATED 2013-01-23: using virtual hosts and SSL certs.**

Being the techno-hipster that I am, I've found myself using Macs for nearly everything over the last couple of years. And because I'm fickle and changable I've found myself migrating machines a few times now. So here, because I need to remember it than anything, is what I install on a new machine.

# Essential apps

## Google Chrome

It's the very first thing, to stop me having to use Chrome's pretty, but weirdly-intense-about-her-fingernail-collection, cousin, Safari.

[Download Chrome](https://www.google.com/intl/en/chrome/browser/)

## iTerm2

Terminal.app is great and all, but iTerm2 does split sessions within a window. Worth every penny of fuck all.

[Download iTerm2](http://www.iterm2.com/#/section/home)

## Oh-my-zsh

Kick Bash up the arse and get Zsh installed. Offers auto-completion. memory between sessions and git status at the command prompt.

[Install oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

## Homebrew

Macports was once the daddy of package managers, but Brew is where it's at now. Rapidly updated and all the formulaes you'll ever need. Type:

```bash
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

into your soon to be banished Terminal to get going.

[Start brewing](http://brew.sh/)

## Xcode

Whether you plunk for Ports or Brew, Xcode is needed to provide the compiler. You can try and find just the command-line tools, but I can't be arsed with that anymore (now that I'm lucky enough to have a half terabyte SSD). Just install Xcode from the App Store.

[Grudgingly install Xcode](https://developer.apple.com/xcode/)

## Firefox

I don't use it, but I'm a webdev, so I have to test sites on the bloated foxbeast.

[Go retro with Firefox](https://www.mozilla.org/en-US/firefox/new/)

## Dropbox

All my important documents are stored In The Cloud. Makes moving between machines easy. The NSA are particularly enjoying the latest chapters of my thrilling novel, When Mustelids Attack.

[Install Dropbox](https://www.dropbox.com/)

## Sublime Text

I deal with frontend work, so a full IDE is massively overblown for me.

[Download Sublime Text](http://www.sublimetext.com)

## Phpstorm

Actually, that last one was a complete lie. I've switched from Sublime to Phpstorm recently, mainly because Sublime was becoming weird with how it handeld JS autocompletion, and Phpstorm Just Works TM.

##Htop

Tiny command-line app that's like top after a few tokes.

```bash
brew install htop
```

++++++++++++++++++++++++++++++

# Development environments

I'm a frontend developer (as all the sexiest people are), but I find myself working with PHP apps such as Drupal most of the time. I therefore have to contend with the non-Euclidian hell that is the MAMP stack.

Yes, PHP is a hateful pile of inconsistent nonsense, and makes backend devs spit with anger, but it pays the bills and keeps me in box sets of F.R.I.E.N.D.S.

## Install custom PHP

OS X comes with PHP installed. However, it's not easy to get custom extensions working with it. It's therefore easier to install a copy of PHP via Brew and install extensions more easily with that.

```bash
brew tap homebrew/dupes
brew tap josegonzalez/homebrew-php
brew install php53 --with-mysql
```

To activate new php on apache:

```bash
vim /private/etc/apache2/httpd.conf
```

Add the following (will be different depending on what version gets compiled: 5.3 vs 5.4, etc):

```bash
LoadModule php5_module /usr/local/opt/php53/libexec/apache2/libphp5.so
```

The php.ini is located at: /usr/local/etc/php/5.3/php.ini

## Controlling OS X's Apache

To run apache at system start you'll need to use OSX's launch system:

```bash
sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist
```

To control the server use:

```bash
sudo apachectl start|stop|restart|status
```

## Running multiple test sites locally

It's not fun just having one Apache site to work on. That's why god gave us virtual hosts, allowing you to set up mylocalamazingwebsite.dev and myreallyrubbishwebsite.dev that you can visit like any other.

I like to store my local sites underneath my main users Sites folder (~/Sites). Underneath this folder I create a folder called banana.dev, inside of which I place public, private and logs fodlers.

```bash
$ banana.dev: ls
logs private public
```


- Public is where your site will be served from.
- logs is where your apache access and error logs will be saved. Much nicer than hunting for them in /var/logs/whatever.
- private is where any files that need to exist outside the docroot, but accessible by the PHP app, are stored. This is typically user-generated content.


### Activate virtual hosts

First of all, activate the Virtual Hosts portion of Apache.

```ApacheConf
<virtualhost *:80="">
        ServerAdmin webmaster@banana.dev
        ServerName banana.dev
        DocumentRoot /Users/YOURUSER/Sites/banana.dev/public
        <directory users="" youruser="" sites="" banana.dev="" public="">
                Options Indexes FollowSymLinks Includes ExecCGI
                AllowOverride All
                Order allow,deny
                Allow from all
        </directory>
        CustomLog /Users/YOURUSER/Sites/banana.dev/logs/apache-access.log combined
        ErrorLog  /Users/YOURUSER/Sites/banana.dev/logs/apache-error.log
        LogLevel warn
        ServerSignature On
</virtualhost>
```

### Edit hosts file

Edit your hosts file, so that your machine knows where to point the new address. (yes, there are ways of doing this in a more automated fashion. I think that's overkill for a local dev machine).

```bash
sudo vim /etc/hosts
```

Point the server name that you just created in your virtual host file to your localhost address:

```bash
127.0.0.1  banana.dev
```

## Databases

Apple don't like including MySQL in OSX anymore, so you've gotta install it yourself.

It's a bit convoluted, because fuck you webdev, so take your time.

```bash
brew install mysql
unset TMPDIR
mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp

ln -sfv /usr/local/opt/mysql/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
mysql.server start
/usr/local/opt/mysql/bin/mysql_secure_installation
```

## Memcache

I rely on memcache a lot, as I work on some heavy-duty Drupal sites that simply would not work without it.

Yes, Drupal is terrible. Yes, it pays my wages. Shush.

```bash
brew install php53-memcache
brew install memcached
ln -sfv /usr/local/opt/memcached/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.memcached.plist
```

## HTTPS

I have to test sites that require a user to log in over https. I used to simply disable the https part of the application on my lcoal machine, but there are quite often times when I need to test bugs centered around https usage. Therefore, here's how to get a self-signed certificate up and running on your machine.

### Self-signed certificate

Run the following, choosing defaults for everything (including the passphrase - just press return!)

```bash
openssl genrsa -des3 -passout pass:x -out server.pass.key 2048

openssl rsa -passin pass:x -in server.pass.key -out server.key

rm server.pass.key

openssl req -new -key server.key -out server.csr

openssl req -new -key server.key -out server.csr

sudo mv server.* /etc/apache/
```

### Activate SSL support in Apache

```bash
sudo vim /etc/apache2/httpd.conf
```

Look for the line starting with:

```bash
Include /private/etc/apache2/extra/httpd-vhosts.conf
```

and uncomment it.

### Virtual host configuration

This is just the same as your basic virtual host from earlier, except that we're also telling it to use port 443 and the SSL certificate that you just created.

```bash
sudo vim /etc/apache2/extra/httpd-vhosts.conf
```

Add the following to the end of the file, replacing the domain name and the path to your document root.

```ApacheConf
<VirtualHost *:443>
        SSLEngine on
        ServerAdmin webmaster@banana.dev
        ServerName banana.dev:443
        SSLCertificateFile "/private/etc/apache2/server.crt"
        SSLCertificateKeyFile "/private/etc/apache2/server.key"
        DocumentRoot "/Users/YOURUSER/Sites/banana.dev/public"

        <Directory /Users/YOURUSER/Sites/banana.dev/public>
                Options Indexes FollowSymLinks Includes ExecCGI
                AllowOverride All
                Order allow,deny
                Allow from all
        </Directory>


        CustomLog /Users/YOURUSER/Sites/banana.dev/logs/apache-access.log combined
        ErrorLog  /Users/YOURUSER/Sites/banana.dev/logs/logs/apache-error.log


</VirtualHost>
```

# And... relax

That's it. I'll add things as I remember.
