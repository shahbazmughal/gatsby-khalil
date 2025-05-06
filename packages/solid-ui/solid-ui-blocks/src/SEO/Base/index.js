import React from 'react';
import {Link} from 'gatsby';

function index(props) {
    return (
        <div className="seo-block" style={{display: "none"}}>
            <div className="sitesearch" itemScope itemType="https://schema.org/WebSite">
                <meta itemProp="url" content="https://www.mumara.com/"/>
                <form itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
                <meta itemProp="target" content="https://www.mumara.com/?s={s}"/>
                <input itemProp="query-input" type="text" name="s" required/>
                <input type="submit"/>
                </form>
            </div>
            <span className="socialorg" itemScope itemType="https://schema.org/Organization">
                <link itemProp="url" href="https://www.mumara.com" />
                <Link itemProp="sameAs" to="https://www.facebook.com/MumaraApps">FB</Link>
                <Link itemProp="sameAs" to="https://twitter.com/MumaraApps">Twitter</Link>
                <Link itemProp="sameAs" to="https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw">Youtube</Link>
                <Link itemProp="sameAs" to="https://www.linkedin.com/company/mumara">Linkedin</Link>
            </span>
        </div>
    );
}

export default index;