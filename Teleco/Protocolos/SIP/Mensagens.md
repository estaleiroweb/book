# SIP <span id='SIP'></span>

## Introduction

SIP (Session Initiation Protocol) is an application-layer control protocol that is primarily used for managing communication sessions such as voice and video calls over IP networks. 
SIP uses a text-based messaging system similar to HTTP and SMTP, which allows it to be easy to read and debug. 

## SIP Messages

A SIP message is either a request from a client to a server, or a
   response from a server to a client. Both types
   of messages consist of a start-line, one or more header fields, an
   empty line indicating the end of the header fields, and an optional
   message-body.
   - SIP requests are distinguished by having a Request-Line for a start-
   line.  
   - Request-Line  =  Method Space Request-URI Space SIP-Version CRLF

   - Practical example
      - Request-Line: INVITE sip:A0121111000411140046446@zsn9.v2s;user=phone SIP/2.0
      - Requests (Methods)
         - REGISTER for registering contact information,
         - INVITE, ACK, and CANCEL for setting up sessions,
         - BYE for terminating sessions, and
         - OPTIONS for querying servers about their capabilities.

   - SIP responses are distinguished from requests by having a Status-Line
   as their start-line.  
   - Status-Line  =  SIP-Version Space Status-Code Space Reason-Phrase CRLF
   
   - Practical example
      - Status-Line: SIP/2.0 183 Session Progress

      - Responses

         1xx: Provisional -- request received, continuing to process the
            request;

         2xx: Success -- the action was successfully received, understood,
            and accepted;

         3xx: Redirection -- further action needs to be taken in order to
            complete the request;

         4xx: Client Error -- the request contains bad syntax or cannot be
            fulfilled at this server;

         5xx: Server Error -- the server failed to fulfill an apparently
            valid request;

         6xx: Global Failure -- the request cannot be fulfilled at any
            server.

!!! info Mandatory SIP Parameters

    According to RFC 3261, certain parameters must be included in SIP requests and responses for successful call establishment:

    1. Via: Identifies the path taken by the request, and responses are sent back along this path.
    2. To: The intended recipient of the request (callee).
    3. From: The originator of the request (caller).
    4. Call-ID: A unique identifier for the call.
    5. CSeq (Sequence Number): Specifies the sequence of requests in the transaction.
    6. Contact: Provides the SIP or SIPS URI that can be used to reach the sender of the request.
    7. Max-Forwards: Limits the number of hops a request can take to prevent loops.
    8. Content-Length: Indicates the size of the message body.
    9. Content-Type: Describes the format of the message body (e.g., SDP).

!!! info Key Concepts:

    - UAC (User Agent Client): The SIP entity that sends the request (usually the caller).
    - UAS (User Agent Server): The SIP entity that sends responses to requests (usually the callee).
    - SIP Proxy: An intermediary that routes requests between UAC and UAS.

>The sending and receiving of requests and responses are dictated by these roles, with proxies potentially facilitating message routing. The responsibility for sending each SIP request and response can be summarized based on RFC 3261. Here's a breakdown of which side (UAC or UAS) is responsible for sending each request and response during a typical call setup:

1. INVITE Request
   - Sent by: User Agent Client (UAC)    
   - Received by: User Agent Server (UAS)
2. Provisional Responses (1xx)
    1. 100 Trying
       - Sent by: UAS (or possibly a SIP Proxy in certain cases)
       - Received by: UAC
    1. 180 Ringing
       - Sent by: UAS
       - Received by: UAC
    1. 181 Call Is Being Forwarded
       - Sent by: UAS
       - Received by: UAC
    1. 183 Session Progress
       - Sent by: UAS
       - Received by: UAC
3. 200 OK Response
   - Sent by: UAS
   - Received by: UAC
4. ACK Request
   - Sent by: UAC
   - Received by: UAS
5. BYE Request
   - Sent by: Either UAC or UAS (whoever wants to terminate the call)
   - Received by: The opposite party
6. CANCEL Request
   - Sent by: UAC
   - Received by: UAS
7. 487 Request Terminated Response
   - Sent by: UAS
   - Received by: UAC
8. OPTIONS Request
   - Sent by: UAC
   - Received by: UAS
9. PRACK Request
   - Sent by: UAC
   - Received by: UAS
10. INFO Request
   - Sent by: Either UAC or UAS
   - Received by: The opposite party
11. 1xx Responses
   - Sent by: UAS
   - Received by: UAC
12. Error Responses (4xx, 5xx, 6xx)
   - Sent by: UAS (or Proxy Server)
   - Received by: UAC

[RFC-3261/pg12](https://www.rfc-editor.org/rfc/rfc3261#page-12)
```
                     atlanta.com  . . . biloxi.com
                 .      proxy              proxy     .
               .                                       .
       Alice's  . . . . . . . . . . . . . . . . . . . .  Bob's
      softphone                                        SIP Phone
         |                |                |                |
         |    INVITE F1   |                |                |
         |--------------->|    INVITE F2   |                |
         |  100 Trying F3 |--------------->|    INVITE F4   |
         |<---------------|  100 Trying F5 |--------------->|
         |                |<-------------- | 180 Ringing F6 |
         |                | 180 Ringing F7 |<---------------|
         | 180 Ringing F8 |<---------------|     200 OK F9  |
         |<---------------|    200 OK F10  |<---------------|
         |    200 OK F11  |<---------------|                |
         |<---------------|                |                |
         |                       ACK F12                    |
         |------------------------------------------------->|
         |                   Media Session                  |
         |<================================================>|
         |                       BYE F13                    |
         |<-------------------------------------------------|
         |                     200 OK F14                   |
         |------------------------------------------------->|
         |                                                  |
```


This defines who is responsible for each step and the flow of requests and responses in SIP-based call establishment. RFC 3261 defines these message flows to ensure proper signaling between clients and servers in establishing and managing VoIP sessions.


## Methods
INVITE<span id='INVITE'></span>
>The INVITE method is used to initiate a call or session in SIP. It includes details about the call setup, such as the caller's address and session parameters. Typically, the message contains an SDP (Session Description Protocol) to describe the media capabilities of the caller, such as audio and video codecs, and transport protocols.

ACK<span id='ACK'></span>
>The ACK method confirms that the client has received a final response to an INVITE. This ensures that both the client and the server are ready to proceed with the session, typically after receiving a 200 OK response.

    •Troubleshooting Tips:
        Failure to send an ACK after a 200 OK could cause the call to remain in an incomplete state. This might result from network timeouts or incorrect sequence numbers. Ensure that retransmissions of the INVITE and 200 OK are happening correctly, especially in lossy networks.

    •Failure Example:
        After sending a 200 OK, no ACK is received from the client, causing the server to terminate the session. This can occur if there's NAT-related issues or if the ACK is blocked by a firewall.

BYE<span id='BYE'></span> 
>The BYE method is used to terminate an established SIP session. Either party (caller or receiver) can send a BYE message to signal the end of the session.
    
    •Troubleshooting Tips:
        If the call does not terminate properly, check whether the BYE message is sent and received by both parties.
        Calls that do not disconnect might indicate a problem with the session timers or the SIP proxy.
    
    •Failure Example:
        One party hangs up, but the other continues to hear media. This indicates that the BYE message was not transmitted correctly, 
        possibly due to routing issues in the SIP network.

OPTIONS<span id='OPTIONS'></span>
>The OPTIONS method is used to query the capabilities of a SIP server or endpoint without setting up a call. It checks which methods, media types, and features are supported by the other party.

    •Troubleshooting Tips:
        If a device does not respond to OPTIONS, it could mean the device is unreachable or down.
        Use OPTIONS to preemptively check codec compatibility before placing a call.

    •Failure Example:
        An OPTIONS request is sent, but no response is received. This could indicate a misconfigured or unavailable SIP endpoint.

CANCEL<span id='CANCEL'></span>
>The CANCEL method is used to cancel a pending SIP request, such as an INVITE. For example, if a user dials a number and then hangs up before the call is answered,
 a CANCEL message is sent to stop the request.

    •Troubleshooting Tips:
        If a CANCEL is sent, but the call proceeds, verify that the CANCEL was routed correctly to the destination.
        Ensure the original INVITE is properly linked with the CANCEL.

    •Failure Example:
        A CANCEL is sent but the call is still connected. This might happen if the CANCEL does not reach the destination in time or is blocked by an intermediary device.

PRACK<span id='PRACK'></span>
>PRACK (Provisional Acknowledgment) is an extension to SIP that acknowledges the receipt of provisional responses (like 1xx responses) in a reliable manner. 
It ensures that intermediate responses, such as 180 Ringing, are delivered reliably, particularly in networks with packet loss.

    •Troubleshooting Tips:
        Ensure that the SIP stack supports reliable provisional responses (100rel) if you're using PRACK.
        In cases of dropped or missing provisional responses, check for network instability or packet loss.

    •Failure Example:
        The caller does not receive a 180 Ringing, resulting in no ringback tone. This could indicate that the provisional response wasn't acknowledged by PRACK.

INFO<span id='INFO'></span>
>The INFO method is used to send mid-session signaling information during an established session. It can carry information like DTMF tones or other signaling data without affecting the media streams.

    •Troubleshooting Tips:
        If DTMF tones are not recognized during a call, verify that INFO messages are correctly sent and received.
        Ensure both parties support the INFO method for in-call signaling.

    •Failure Example:
        During a call, DTMF tones are not detected by the far end. This might happen if the INFO message was lost or incorrectly formatted. 

## Messages 1xx Provisional Responses
100 Trying<span id='100'></span>
> Extended search being performed may take a significant time so a forking proxy must send a 100 Trying response.

180 Ringing<span id='180'></span>
> Destination user agent received INVITE, and is alerting user of call.

181 Call is Being Forwarded<span id='181'></span>
> Servers can optionally send this response to indicate a call is being forwarded.

182 Queued<span id='182'></span>
> Indicates that the destination was temporarily unavailable, so the server has queued the call until the destination is available. A server may send multiple 182 responses to update progress of the queue.

183 Session Progress<span id='183'></span>
> This response may be used to send extra information for a call which is still being set up.

199 Early Dialog Terminated<span id='199'></span>
> Can be used by User Agent Server to indicate to upstream SIP entities (including the User Agent Client (UAC)) that an early dialog has been terminated.

## Messages 2xx Successful Responses
200 OK<span id='200'></span>
> Indicates that the request was successful.

202 Accepted<span id='202'></span>
> Indicates that the request has been accepted for processing, but the processing has not been completed. Deprecated.

204 No Notification<span id='204'></span>
> Indicates the request was successful, but the corresponding response will not be received.

## Messages 3xx Redirection Responses
300 Multiple Choices<span id='300'></span>
> The address resolved to one of several options for the user or client to choose between, which are listed in the message body or the message's Contact fields.

301 Moved Permanently<span id='301'></span>
> The original Request-URI is no longer valid, the new address is given in the Contact header field, and the client should update any records of the original Request-URI with the new value.

302 Moved Temporarily<span id='302'></span>
> The client should try at the address in the Contact field. If an Expires field is present, the client may cache the result for that period of time.

305 Use Proxy<span id='305'></span>
> The Contact field details a proxy that must be used to access the requested destination.

380 Alternative Service<span id='380'></span>
> The call failed, but alternatives are detailed in the message body.<span id='>'></span>

## Messages 4xx Client Failure Responses
400 Bad Request<span id='400'></span>
> The request could not be understood due to malformed syntax.

401 Unauthorized<span id='401'></span>
> The request requires user authentication. This response is issued by UASs and registrars.

402 Payment Required<span id='402'></span>
> Reserved for future use.

403 Forbidden<span id='403'></span>
> The server understood the request, but is refusing to fulfill it. Sometimes (but not always) this means the call has been rejected by the receiver.

404 Not Found<span id='404'></span>
> The server has definitive information that the user does not exist at the domain specified in the Request-URI. This status is also returned if the domain in the Request-URI does not match any of the domains handled by the recipient of the request.

405 Method Not Allowed<span id='405'></span>
> The method specified in the Request-Line is understood, but not allowed for the address identified by the Request-URI.

406 Not Acceptable<span id='406'></span>
> The resource identified by the request is only capable of generating response entities that have content characteristics but not acceptable according to the Accept header field sent in the request.

407 Proxy Authentication Required<span id='407'></span>
> The request requires user authentication. This response is issued by proxies.

408 Request Timeout<span id='408'></span>
> Couldn't find the user in time. The server could not produce a response within a suitable amount of time, for example, if it could not determine the location of the user in time. The client MAY repeat the request without modifications at any later time.

409 Conflict<span id='409'></span>
> User already registered. Deprecated by omission from later RFCs and by non-registration with the IANA.

410 Gone<span id='410'></span>
> The user existed once, but is not available here any more.

411 Length Required<span id='411'></span>
> The server will not accept the request without a valid Content-Length. Deprecated by omission from later RFCs and by non-registration with the IANA.

412 Conditional Request Failed<span id='412'></span>
> The given precondition has not been met.

413 Request Entity Too Large<span id='413'></span>
> Request body too large.

414 Request-URI Too Long<span id='414'></span>
> The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret.

415 Unsupported Media Type<span id='415'></span>
> Request body in a format not supported.

416 Unsupported URI Scheme<span id='416'></span>
> Request-URI is unknown to the server.

417 Unknown Resource-Priority<span id='417'></span>
> There was a resource-priority option tag, but no Resource-Priority header.

420 Bad Extension<span id='420'></span>
> Bad SIP Protocol Extension used, not understood by the server.

421 Extension Required<span id='421'></span>
> The server needs a specific extension not listed in the Supported header.

422 Session Interval Too Small<span id='422'></span>
> The received request contains a Session-Expires header field with a duration below the minimum timer.

423 Interval Too Brief<span id='423'></span>
> Expiration time of the resource is too short.

424 Bad Location Information<span id='424'></span>
> The request's location content was malformed or otherwise unsatisfactory.

425 Bad Alert Message<span id='425'></span>
> The server rejected a non-interactive emergency call, indicating that the request was malformed enough that no reasonable emergency response to the alert can be determined.

428 Use Identity Header<span id='428'></span>
> The server policy requires an Identity header, and one has not been provided.

429 Provide Referrer Identity<span id='429'></span>
> The server did not receive a valid Referred-By token on the request.

430 Flow Failed<span id='430'></span>
> A specific flow to a user agent has failed, although other flows may succeed. This response is intended for use between proxy devices, and should not be seen by an endpoint (and if it is seen by one, should be treated as a 400 Bad Request response).

433 Anonymity Disallowed<span id='433'></span>
> The request has been rejected because it was anonymous.

436 Bad Identity-Info<span id='436'></span>
> The request has an Identity-Info header, and the URI scheme in that header cannot be dereferenced.

437 Unsupported Certificate<span id='437'></span>
> The server was unable to validate a certificate for the domain that signed the request.

438 Invalid Identity Header<span id='438'></span>
> The server obtained a valid certificate that the request claimed was used to sign the request, but was unable to verify that signature.

439 First Hop Lacks Outbound Support<span id='439'></span>
> The first outbound proxy the user is attempting to register through does not support the "outbound" feature of RFC 5626, although the registrar does.

440 Max-Breadth Exceeded<span id='440'></span>
> If a SIP proxy determines a response context has insufficient Incoming Max-Breadth to carry out a desired parallel fork, and the proxy is unwilling/unable to compensate by forking serially or sending a redirect, that proxy MUST return a 440 response. A client receiving a 440 response can infer that its request did not reach all possible destinations.

469 Bad Info Package<span id='469'></span>
> If a SIP UA receives an INFO request associated with an Info Package that the UA has not indicated willingness to receive, the UA MUST send a 469 response, which contains a Recv-Info header field with Info Packages for which the UA is willing to receive INFO requests.

470 Consent Needed<span id='470'></span>
> The source of the request did not have the permission of the recipient to make such a request.

480 Temporarily Unavailable<span id='480'></span>
> Callee currently unavailable.

481 Call/Transaction Does Not Exist<span id='481'></span>
> Server received a request that does not match any dialog or transaction.

482 Loop Detected<span id='482'></span>
> Server has detected a loop.

483 Too Many Hops<span id='483'></span>
> Max-Forwards header has reached the value '0'.

484 Address Incomplete<span id='484'></span>
> Request-URI incomplete.

485 Ambiguous<span id='485'></span>
> Request-URI is ambiguous.

486 Busy Here<span id='486'></span>
> Callee is busy.

487 Request Terminated<span id='487'></span>
> Request has terminated by bye or cancel.

488 Not Acceptable Here<span id='488'></span>
> Some aspect of the session description or the Request-URI is not acceptable.

489 Bad Event<span id='489'></span>
> The server did not understand an event package specified in an Event header field.

491 Request Pending<span id='491'></span>
> Server has some pending request from the same dialog.

493 Undecipherable<span id='493'></span>
> Request contains an encrypted MIME body, which recipient can not decrypt.

494 Security Agreement Required<span id='494'></span>
> The server has received a request that requires a negotiated security mechanism, and the response contains a list of suitable security mechanisms for the requester to choose between, §§2.3.1–2.3.2  or a digest authentication challenge.

## Messages 5xx Server Failure Responses
500 Internal Server Error<span id='500'></span>
> The server could not fulfill the request due to some unexpected condition.

501 Not Implemented<span id='501'></span>
> The server does not have the ability to fulfill the request, such as because it does not recognize the request method. (Compare with 405 Method Not Allowed, where the server recognizes the method but does not allow or support it.)

502 Bad Gateway<span id='502'></span>
> The server is acting as a gateway or proxy, and received an invalid response from a downstream server while attempting to fulfill the request.

503 Service Unavailable<span id='503'></span>
> The server is undergoing maintenance or is temporarily overloaded and so cannot process the request. A "Retry-After" header field may specify when the client may reattempt its request.

504 Server Time-out<span id='504'></span>
> The server attempted to access another server in attempting to process the request, and did not receive a prompt response.

505 Version Not Supported<span id='505'></span>
> The SIP protocol version in the request is not supported by the server.

513 Message Too Large<span id='513'></span>
> The request message length is longer than the server can process.

555 Push Notification Service Not Supported<span id='555'></span>
> The server does not support the push notification service identified in a 'pn-provider' SIP URI parameter

580 Precondition Failure<span id='580'></span>
> The server is unable or unwilling to meet some constraints specified in the offer.

## Messages 6xx Global Failure Responses
600 Busy Everywhere<span id='600'></span>
> All possible destinations are busy. Unlike the 486 response, this response indicates the destination knows there are no alternative destinations (such as a voicemail server) able to accept the call.

603 Decline<span id='603'></span>
> The destination does not wish to participate in the call, or cannot do so, and additionally the destination knows there are no alternative destinations (such as a voicemail server) willing to accept the call. The response may indicate a better time to call in the Retry-After header field.

604 Does Not Exist Anywhere<span id='604'></span>
> The server has authoritative information that the requested user does not exist anywhere.

606 Not Acceptable<span id='606'></span>
> The user's agent was contacted successfully but some aspects of the session description such as the requested media, bandwidth, or addressing style were not acceptable.

607 Unwanted<span id='607'></span>
> The called party did not want this call from the calling party. Future attempts from the calling party are likely to be similarly rejected.

608 Rejected<span id='608'></span>
> An intermediary machine or process rejected the call attempt. This contrasts with the 607 (Unwanted) SIP response code in which a human, the called party, rejected the call. The intermediary rejecting the call should include a Call-Info header with "purpose" value "jwscard", with the jCard with contact details. The calling party can use this jCard if they want to dispute the rejection.	Celular Short codes
