import React from 'react';
import { Helmet } from "react-helmet"

function index(props) {
    return (
        <Helmet>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-24SE2C1DVV"></script> */}
            <script>
                {`
                    setTimeout(function() {
                        var headID = document.getElementsByTagName("head")[0];         
                        var newScript = document.createElement('script');
                        newScript.type = 'text/javascript';
                        newScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-24SE2C1DVV';
                        headID.appendChild(newScript);
                    }, 3000);
                    setTimeout(() => {
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-24SE2C1DVV');
                    }, 3100);
                `}
            </script>
            {/* No use this */}
            {/* <script type="text/javascript">
                {`
                    var _tip = _tip || [];
                    (function(d,s,id){
                        var js, tjs = d.getElementsByTagName(s)[0];
                        if(d.getElementById(id)) { return; }
                        js = d.createElement(s); js.id = id;
                        js.async = true;
                        js.src = d.location.protocol + '//app.truconversion.com/ti-js/21695/b11ae.js';
                        tjs.parentNode.insertBefore(js, tjs);
                    }(document, 'script', 'ti-js'));
                `}
            </script> */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "http://www.mumara.com",
                        "logo": "https://post.mumara.com/images/mumara-home.jpg"
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "NYC NY",
                        "addressCountry": "US",
                        "postalCode": "10017",
                        "streetAddress": "708 3rd Ave"
                      },
                    "email": "info@mumara.com",
                    "member": [
                        {
                          "@type": "Organization"
                        },
                        {
                          "@type": "Organization"
                        }
                    ],
                    "alumni": [
                        {
                          "@type": "Person",
                          "name": "Wasif Ahmed"
                        }
                    ],
                    "name": "Mumara",
                    "telephone": "1 (844) 686 2721",
                    "alternateName": "Marketing Automation &amp; Customer Engagement Tools | Mumara",
                    "url": "https://www.mumara.com",
                    "logo": "https://post.mumara.com/images/mumara-home.jpg",
                    "Image": "https://post.mumara.com/images/mumara-home.jpg",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "1 (844) 686 2721",
                        "contactType": "customer service"
                    },
                    "sameAs": [
                        "https://www.facebook.com/MumaraApps",
                        "https://twitter.com/MumaraApps",
                        "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",
                        "https://www.linkedin.com/company/mumara"
                    ]
                    }

                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                        "@context":"https://schema.org",
                        "@type":"ItemList",
                        "itemListElement":[
                            {
                            "@type":"ListItem",
                            "position":1,
                            "url":"https://www.mumara.com/campaigns/"
                            },
                            {
                            "@type":"ListItem",
                            "position":2,
                            "url":"https://www.mumara.com/one/"
                            },
                            {
                            "@type":"ListItem",
                            "position":3,
                            "url":"https://www.mumara.com/sms/"
                            },
                            {
                            "@type":"ListItem",
                            "position":4,
                            "url":"https://www.mumara.com/smsplus/"
                            },
                            {
                            "@type":"ListItem",
                            "position":5,
                            "url":"https://www.mumara.com/classic/"
                            },
                            {
                            "@type":"ListItem",
                            "position":6,
                            "url":"https://www.mumara.com/classic-esp/"
                            }
                        ]
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Mumara",
                    "url": "https://www.mumara.com",
                    "sameAs": [
                        "https://www.facebook.com/MumaraApps",
                        "https://twitter.com/MumaraApps",
                        "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",
                        "https://www.linkedin.com/company/mumara"
                    ]
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org/",
                    "@type": "WebSite",
                    "name": "Mumara",
                    "url": "https://www.mumara.com/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://www.mumara.com/?s={s}",
                        "query-input": "required name=s"
                    }
                    }
                `}
            </script>
            <script>
                {`
                    setTimeout(() => {
                        !function(Gleap,t,i){if(!(Gleap=window.Gleap=window.Gleap||[]).invoked){for(window.GleapActions=[],Gleap.invoked=!0,Gleap.methods=["identify","setEnvironment","setTags","attachCustomData","setCustomData","removeCustomData","clearCustomData","registerCustomAction","trackEvent","log","preFillForm","showSurvey","sendSilentCrashReport","startFeedbackFlow","startBot","setAppBuildNumber","setAppVersionCode","setApiUrl","setFrameUrl","isOpened","open","close","on","setLanguage","setOfflineMode","initialize","disableConsoleLogOverwrite","logEvent","hide","enableShortcuts","showFeedbackButton","destroy","getIdentity","isUserIdentified","clearIdentity","openConversations","openConversation","openHelpCenterCollection","openHelpCenterArticle","openHelpCenter","searchHelpCenter","openNewsArticle","openNews","openFeatureRequests","isLiveMode"],Gleap.f=function(e){return function(){var t=Array.prototype.slice.call(arguments);window.GleapActions.push({e:e,a:t})}},t=0;t<Gleap.methods.length;t++)Gleap[i=Gleap.methods[t]]=Gleap.f(i);Gleap.load=function(){var t=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://sdk.gleap.io/latest/index.js",t.appendChild(i)},Gleap.load(),
                            Gleap.initialize("MM4XayoVdXy2kBC3YtDy7eCLMPCiCiuE")
                        }}();
                    }, 2000);
                `}
            </script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-956006337"></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'AW-956006337');
                `}
            </script>
            <script>
                {/* {`
                    setTimeout(() => {
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '329504770823436');
                        fbq('track', 'PageView');
                    }, 2000);
                `} */}
            </script>
            <noscript>
                {`
                    
                    setTimeout(function() {
                        var headID = document.getElementsByTagName("head")[0];         
                        var newScript = document.createElement('script');
                        newScript.type = 'text/javascript';
                        newScript.src = 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js';
                        headID.appendChild(newScript);
                    }, 2000);
                    
                `}
                    {/* setTimeout(() => {
                        <img height="1" width="1" style="display:none" alt="DCMA Badge" src="https://www.facebook.com/tr?id=329504770823436&ev=ViewContent&noscript=1" />
                    }, 2000);
                    setTimeout(function() {
                        var headID = document.getElementsByTagName("head")[0];         
                        var newScript = document.createElement('script');
                        newScript.type = 'text/javascript';
                        newScript.src = 'https://cdn.gravitec.net/storage/b3cf5d7755c9f76cade9f56830ab83b3/client.js';
                        headID.appendChild(newScript);
                    }, 2000); */}
            </noscript>
            {/* <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
            <script src="https://cdn.gravitec.net/storage/b3cf5d7755c9f76cade9f56830ab83b3/client.js" async></script> */}
            
        </Helmet>
    );
}

export default index;