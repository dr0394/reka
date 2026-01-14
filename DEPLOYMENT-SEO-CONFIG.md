# Deployment & SEO-Konfiguration

## Wichtige Anpassungen vor dem Live-Gang

### 1. Domain in allen Dateien anpassen

**WICHTIG:** Ersetzen Sie in folgenden Dateien `https://www.reka-bodensysteme.de/` durch Ihre echte Domain:

#### index.html
- Canonical Link (Zeile 16)
- Alle Schema.org URLs (Zeilen 55, 58, 59, 60, 91-94)
- Open Graph URLs (Zeile 28)
- Twitter URLs (Zeile 39)

#### sitemap.xml
- Alle `<loc>` Tags

#### robots.txt
- Sitemap URL

**Suchen & Ersetzen:**
```bash
# In allen Dateien ersetzen:
Suche: https://www.reka-bodensysteme.de
Ersetze durch: https://ihre-echte-domain.de
```

### 2. Kontaktdaten vervollständigen

In `index.html` (Zeile 61) ersetzen:
```javascript
"telephone": "+49-XXX-XXXXXXX"
```

durch Ihre echte Telefonnummer:
```javascript
"telephone": "+49 (0) 6241 4967517"
```

### 3. Geo-Koordinaten anpassen

Falls Ihr Standort nicht in Nordrhein-Westfalen ist, aktualisieren Sie in `index.html`:
- Zeilen 45-48: Geo-Tags
- Zeilen 68-72: Schema.org Geo-Koordinaten

**Koordinaten finden:**
Gehen Sie zu https://www.google.com/maps und suchen Sie Ihre Adresse. Die Koordinaten finden Sie in der URL.

### 4. Social Media Links

In `index.html` (Zeilen 91-94) aktualisieren:
```javascript
"sameAs": [
  "https://www.facebook.com/ihre-facebook-seite",
  "https://www.instagram.com/ihr-instagram-profil"
]
```

Falls keine Social Media vorhanden ist, entfernen Sie das `sameAs` Array komplett.

### 5. Öffnungszeiten anpassen

In `index.html` (Zeilen 83-90) Ihre Geschäftszeiten eintragen:
```javascript
"openingHoursSpecification": [
  {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "17:00"
  }
]
```

## Server-Konfiguration

### Apache (.htaccess ist bereits konfiguriert)
Die Datei `/public/.htaccess` ist fertig konfiguriert mit:
- HTTPS-Umleitung
- WWW-Umleitung
- GZIP-Kompression
- Browser-Caching
- Security Headers

**WICHTIG:** Stellen Sie sicher, dass `.htaccess` auf Ihrem Server aktiviert ist.

### Nginx (Alternative zu Apache)

Falls Sie Nginx verwenden, hier die entsprechende Konfiguration:

```nginx
# HTTPS-Umleitung
server {
    listen 80;
    server_name reka-bodensysteme.de www.reka-bodensysteme.de;
    return 301 https://reka-bodensysteme.de$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.reka-bodensysteme.de;
    return 301 https://reka-bodensysteme.de$request_uri;
}

server {
    listen 443 ssl http2;
    server_name reka-bodensysteme.de;
    root /var/www/html;
    index index.html;

    # SSL-Zertifikate
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # GZIP-Kompression
    gzip on;
    gzip_vary on;
    gzip_min_length 1000;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # Browser-Caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # SPA Fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## SSL-Zertifikat (HTTPS)

**Kostenlos mit Let's Encrypt:**
```bash
# Certbot installieren
sudo apt-get install certbot python3-certbot-apache

# Zertifikat erstellen
sudo certbot --apache -d reka-bodensysteme.de -d www.reka-bodensysteme.de

# Automatische Erneuerung testen
sudo certbot renew --dry-run
```

## Nach dem Deployment

### 1. Google Search Console
1. Gehen Sie zu: https://search.google.com/search-console
2. Property hinzufügen
3. Domain verifizieren (via DNS TXT-Record)
4. Sitemap einreichen: `https://ihre-domain.de/sitemap.xml`

### 2. Google Analytics 4
1. Account erstellen: https://analytics.google.com/
2. Tracking-Code in `index.html` vor `</head>` einfügen:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Testing

**Vor dem Live-Gang testen:**
- [ ] Alle Links funktionieren
- [ ] Kontaktformular funktioniert
- [ ] WhatsApp-Button funktioniert
- [ ] Mobile Ansicht korrekt
- [ ] HTTPS aktiv und funktioniert
- [ ] Robots.txt erreichbar: `https://ihre-domain.de/robots.txt`
- [ ] Sitemap erreichbar: `https://ihre-domain.de/sitemap.xml`
- [ ] Favicon wird angezeigt
- [ ] Meta-Tags in Browser-Vorschau korrekt

**SEO-Testing Tools:**
```
https://www.google.com/test/mobile-friendly
https://pagespeed.web.dev/
https://search.google.com/test/rich-results
https://validator.schema.org/
```

## Performance-Optimierung

### Bilder komprimieren
```bash
# WebP-Konvertierung mit cwebp
cwebp input.jpg -q 80 -o output.webp

# Oder online: https://squoosh.app/
```

### Build optimieren
```bash
# Production Build erstellen
npm run build

# Größe der Bundle-Dateien prüfen
ls -lh dist/assets/
```

## Checkliste für Live-Gang

- [ ] Domain in allen Dateien angepasst
- [ ] Telefonnummer vervollständigt
- [ ] SSL-Zertifikat installiert
- [ ] HTTPS-Umleitung aktiv
- [ ] Robots.txt erreichbar
- [ ] Sitemap.xml erreichbar
- [ ] Google Search Console eingerichtet
- [ ] Sitemap in Search Console eingereicht
- [ ] Google Analytics installiert (optional)
- [ ] Google My Business erstellt
- [ ] Alle Favicon-Dateien hochgeladen
- [ ] OG-Image erstellt und hochgeladen
- [ ] Mobile-Friendly Test bestanden
- [ ] PageSpeed Score > 90
- [ ] Schema Markup validiert
- [ ] Alle internen Links funktionieren
- [ ] Kontaktformular getestet
- [ ] WhatsApp-Button getestet

## Support & Hilfe

Bei Fragen zur SEO-Optimierung oder technischen Problemen:

**Ressourcen:**
- Google Search Central: https://developers.google.com/search
- Schema.org Dokumentation: https://schema.org/
- MDN Web Docs: https://developer.mozilla.org/

**Community:**
- r/SEO auf Reddit: https://www.reddit.com/r/SEO/
- WebmasterWorld: https://www.webmasterworld.com/

---

**Viel Erfolg mit Ihrer SEO-Optimierung! 🚀**
