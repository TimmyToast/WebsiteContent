<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db16804_preseli');

/** MySQL database username */
define('DB_USER', 'db16804');

/** MySQL database password */
define('DB_PASSWORD', 'n3334s1arSTA!!');

/** MySQL hostname */
define('DB_HOST', 'internal-db.s16804.gridserver.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Yb_vWEwiQqsf nsy>*(Z:cCrLSp67{HoN(Ka+z>Kvj{s-:mCdEPoSx-|ZCu<P-:#');
define('SECURE_AUTH_KEY',  '2M`ZpP%+hNj-([0*+8tedP(d,OAZ1(6gF2$5{qt<0mNb@Rd{=S?**7`MhKKaeY9j');
define('LOGGED_IN_KEY',    'T|S/^Jr{gs~q)}*F*Su={=mYM6b2vec7b@Q6#pq6[%C?ED;fT&S3[.s~f40( &sL');
define('NONCE_KEY',        '*C-nzU_buoKA|qFq+d`++T5<KYA?v3}UNb8^@`S^;zaMK%IPNC#P-ltz27}:P0=L');
define('AUTH_SALT',        'H MUE%},H:&1,s/8=PVEoj?PO~-9/@0Wgs-!<NF=fg`k?T&QVn=vuQ(f`B.XF!e7');
define('SECURE_AUTH_SALT', '/G[99pSu%%/ye:t12y4H}>2hk0!{hNgW[{Ic{)/R28.i<T1rzX,gG%1Wx{=:=r|i');
define('LOGGED_IN_SALT',   'C-3ZKb`y*zbP1f(C|97$Aw,VC~rR]O+*|]auU-gifAf4Vac8i-6J)[5|>:+}J)h-');
define('NONCE_SALT',       's>I&2!F;Qv:#&Enq5*E`(IPQNK@yTVU|2)qZ^uc?8?Bb|5uG UQNhD(i.g&}o5f)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', 'en_GB');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
