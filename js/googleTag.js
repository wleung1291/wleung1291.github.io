/**
* Function that tracks a click on an outbound link in Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.
*/
var trackOutboundLink1 = function(url) {
  gtag('event', 'click', {
    'event_category': 'Resume',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': function(){document.location = url;}
  });
}
var trackOutboundLink2 = function(url) {
  gtag('event', 'click', {
    'event_category': 'Github',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': function(){document.location = url;}
  });
}
var trackOutboundLink3 = function(url) {
  gtag('event', 'click', {
    'event_category': 'LinkedIn',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': function(){document.location = url;}
  });
}
var trackOutboundLink4 = function(url) {
  gtag('event', 'click', {
    'event_category': 'WeFit',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': function(){document.location = url;}
  });
}
var trackOutboundLink5 = function(url) {
  gtag('event', 'click', {
    'event_category': 'WeFit Design',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': function(){document.location = url;}
  });
}
