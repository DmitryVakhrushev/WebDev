<style>

    h1 {
        font-family: Verdana;
        font-size: 24px;
    }
    
    h2 {
        font-family: Verdana;
        font-size: 14px;
        /*text-transform: uppercase;*/
        /*color:#c00000;*/
    }

</style>    

# Head First HTML and CSS (BOOK)

Element = Opening Tag + Content + Closing Tag (p.25)

## Add style using `<style>` tag
```html
    <head>
        <style type="text/css">
            body {background-color: #eaf3da;}
        </style>
    </head>
```
## Paragraph: 
`<p>This is a simple paragraph</p>`

---------------------------------------
## Image:
`<img src="images/myPic.png" alt="pictureAbout">`

Images are stored on the Web servers, so every image on the Web has its own URL.

http://www.starbuzzcoffee.com/images/corporate/ceo.jpg

http://www.headfirstlabs.com/trivia/pencil.gif

* JPEG - use .jpg for photos and complex graphics (up to 16 million colors). Compress the file with losses.
* GIF - use .gif for images with solid colors, logos, and geometric shapes (up to 256 colors). Compression without losses. Allows the background to be transparent. Lines, logos, small text, solid colors.
* PNG - it can support both JPEG and GIF styles of images. It has also more advanced transparency features. It's a newer and better format.

---------------------------------------
## Links
Use the `<a>` element to create a hypertext Link to another page:

>`<a href="myPage.html">MyLinkLabel</a>`

`<br>` is a void element (no content by design). In those elements you need to use just an opening tag. Void comes from the Computer Science and means "No Value"

```html
<blockquote></blockquote>
<br>
<q></q>
<ol>
    <li></li>
    <li></li>
</ol>

<ul>
    <li></li>
    <li></li>
</ul>

## Nested lists
<ol>
    <li>Charge Segway</li>
    <li>Pack fro trip
        <ul>
            <li>cell phone</li>
            <li>iPod</li>
        </ul>
    </li>
    <li>Call mom</li>

</ol>

