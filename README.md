# AutoRideChicago.com
## Application Stack
- *nix OS (OS X, centOS, RHEL, etc...)
- JDK 1.6.x or 1.7.x (needs to run the asset compression .jar)
- (Optional) Node Package Manager "NPM" (edge-stable). Handles all JavaScript related deps and builds.
- Apache 2.2.x+
- PHP 5.3.3+
- MySQL 5.5.x+

## Environment Setup
- Install a LAMP stack using `yum` or another package manager (or WAMP if your on windows). If you're on OS X you can either activate each package or download MAMP.
 - configure PHP (read below to where it says _PHP Configuration_)
- `cd` into your project directory `git clone git@github.com:ridechicago/autoridechicago-com.git`
- Create an Apache Virtual Host under port `9062` and point it your your `autoridechicago-com` project directory. (Optional: you can point any port or simply `localhost` to the directory)
- Install Composer and set `composer` as a service (http://getcomposer.org/)
- Run `composer install` at your `autoridechicago-com` project directory
- Run http://localhost:9062/config.php to ensure your environment is setup correct

#### PHP Configuration
 - JSON needs to be enabled
 - ctype needs to be enabled
 - PHP.ini needs to have the date.timezone setting
 - install PHP-XML module
 - Have at least version 2.6.21 of libxml
 - PHP tokenizer needs to be enabled
 - mbstring functions need to be enabled
 - iconv needs to be enabled
 - POSIX needs to be enabled (only on *nix)
 - Intl needs to be installed with ICU 4+
 - APC 3.0.17+ (or another opcode cache needs to be installed)
 - PHP.ini recommended settings:	
   `short_open_tag = Off`		
   `magic_quotes_gpc = Off`	
   `register_globals = Off`	
   `session.auto_start = Off`	

## Deployment

## Staging

## Production
- Update the `src` directory and update config files.
- Ensure `app/config/env.prod` exists. (File existence determines environment)

## Misc.
- HTML Layout was imported from Drupal generated pages. Refactor is highly advised.
- HTTPS setup instructions: http://www.sitepoint.com/securing-apache-2-server-ssl/
- Cert install: http://www.digicert.com/ssl-certificate-installation-apache.htm
- Symfony2 performance optimizations: http://symfony.com/doc/current/book/performance.html

## @TODO
- Add database configuration steps
- Add staging and production deployment procedures after hosting selection is complete