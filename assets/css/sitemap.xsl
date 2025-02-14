<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>Sitemap</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    ul {
                        list-style-type: none;
                    }
                    li {
                        margin: 5px 0;
                    }
                    a {
                        text-decoration: none;
                        color: #007BFF;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <h1>Sitemap</h1>
                <ul>
                    <xsl:apply-templates select="urlset/url"/>
                </ul>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="url">
        <li>
            <a href="{loc}">
                <xsl:value-of select="loc"/>
            </a>
        </li>
    </xsl:template>
</xsl:stylesheet>