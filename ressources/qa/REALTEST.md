# REALTEST

**Target:** `/Users/schartzforte/websites/web coding master/berberat-thenot/dist`  
**Run:** 2026-09-28T12:43:42.528Z  
**Scope:** 13 page(s) x 2 device profile(s) x 6 check(s) = 156 verdicts  
**Result:** PASS overall. 0 FAIL, 0 WARN, 0 ERROR, 156 PASS.


## Summary

| Page | Profile | `01-mobile-memory` | `02-session-storage` | `03-client-side-authz` | `04-two-factor` | `05-login-rate-limit` | `06-password-policy` | Worst |
|---|---|---|---|---|---|---|---|---|
| `/` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/le-groupe` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/le-groupe` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/histoire` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/histoire` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/transport` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/transport` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/logistique` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/logistique` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/services` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/services` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/moyens` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/moyens` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/groupement-flo` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/groupement-flo` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/recrutement` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/recrutement` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/contact` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/contact` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/mentions-legales` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/mentions-legales` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/politique-de-confidentialite` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/politique-de-confidentialite` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/contact?besoin=gardiennage` | iPhone (390 x 844, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |
| `/contact?besoin=gardiennage` | Small Android (360 x 800, DPR 3) | PASS | PASS | PASS | PASS | PASS | PASS | **PASS** |

## Detail

### `http://127.0.0.1:64845/`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 10. Scroll steps to bottom and back: 16. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 14.78 |
| decodedFromImgElementsMB | 14.78 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 331 |
| decodedToTransferredRatio | 45.7 |
| imageCount | 11 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 11173 |
| devicePixelRatio | 3 |
| consoleErrors | 17 |
| failedRequests | 18 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | true |
| originIsCatchAll | false |
| pathsSwept | 14 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (17):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (18):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/__realtest_control_1_404__` : HTTP 404
- `http://127.0.0.1:64845/admin` : HTTP 404
- `http://127.0.0.1:64845/admin/dashboard` : HTTP 404
- `http://127.0.0.1:64845/administrator` : HTTP 404
- `http://127.0.0.1:64845/backoffice` : HTTP 404
- `http://127.0.0.1:64845/dashboard` : HTTP 404
- `http://127.0.0.1:64845/console` : HTTP 404
- `http://127.0.0.1:64845/manage` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 10. Scroll steps to bottom and back: 17. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 14.78 |
| decodedFromImgElementsMB | 14.78 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 331 |
| decodedToTransferredRatio | 45.7 |
| imageCount | 11 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 11181 |
| devicePixelRatio | 3 |
| consoleErrors | 17 |
| failedRequests | 18 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | true |
| originIsCatchAll | false |
| pathsSwept | 14 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (17):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (18):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/__realtest_control_1_404__` : HTTP 404
- `http://127.0.0.1:64845/admin` : HTTP 404
- `http://127.0.0.1:64845/admin/dashboard` : HTTP 404
- `http://127.0.0.1:64845/administrator` : HTTP 404
- `http://127.0.0.1:64845/backoffice` : HTTP 404
- `http://127.0.0.1:64845/dashboard` : HTTP 404
- `http://127.0.0.1:64845/console` : HTTP 404
- `http://127.0.0.1:64845/manage` : HTTP 404

### `http://127.0.0.1:64845/le-groupe`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 6. Scroll steps to bottom and back: 13. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 4.77 |
| decodedFromImgElementsMB | 4.77 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 118 |
| decodedToTransferredRatio | 41.5 |
| imageCount | 7 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 9309 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 6. Scroll steps to bottom and back: 14. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 4.77 |
| decodedFromImgElementsMB | 4.77 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 118 |
| decodedToTransferredRatio | 41.5 |
| imageCount | 7 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 9378 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/histoire`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 1. Scroll steps to bottom and back: 8. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 4.71 |
| decodedFromImgElementsMB | 4.71 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 72 |
| decodedToTransferredRatio | 66.8 |
| imageCount | 2 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 5796 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 1. Scroll steps to bottom and back: 8. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 4.71 |
| decodedFromImgElementsMB | 4.71 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 72 |
| decodedToTransferredRatio | 66.8 |
| imageCount | 2 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 5859 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/transport`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 5. Scroll steps to bottom and back: 12. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 7.12 |
| decodedFromImgElementsMB | 7.12 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 127 |
| decodedToTransferredRatio | 57.6 |
| imageCount | 6 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 8831 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 5. Scroll steps to bottom and back: 13. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 7.12 |
| decodedFromImgElementsMB | 7.12 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 127 |
| decodedToTransferredRatio | 57.6 |
| imageCount | 6 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 8937 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/logistique`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 1. Scroll steps to bottom and back: 11. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 6.18 |
| decodedFromImgElementsMB | 6.18 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 111 |
| decodedToTransferredRatio | 57.2 |
| imageCount | 2 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7716 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 1. Scroll steps to bottom and back: 11. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 6.18 |
| decodedFromImgElementsMB | 6.18 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 111 |
| decodedToTransferredRatio | 57.2 |
| imageCount | 2 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7819 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/services`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 9. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 3.04 |
| decodedFromImgElementsMB | 3.04 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 39 |
| decodedToTransferredRatio | 79.3 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 6256 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 9. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 3.04 |
| decodedFromImgElementsMB | 3.04 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 39 |
| decodedToTransferredRatio | 79.3 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 6365 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/moyens`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 2. Scroll steps to bottom and back: 11. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 9.21 |
| decodedFromImgElementsMB | 9.21 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 150 |
| decodedToTransferredRatio | 63 |
| imageCount | 3 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7861 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 2. Scroll steps to bottom and back: 12. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 9.21 |
| decodedFromImgElementsMB | 9.21 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 150 |
| decodedToTransferredRatio | 63 |
| imageCount | 3 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7924 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/groupement-flo`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 6. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 1.83 |
| decodedFromImgElementsMB | 1.83 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 21 |
| decodedToTransferredRatio | 88 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 4878 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 7. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 1.83 |
| decodedFromImgElementsMB | 1.83 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 21 |
| decodedToTransferredRatio | 88 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 4914 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/recrutement`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 11. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 3.09 |
| decodedFromImgElementsMB | 3.09 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 56 |
| decodedToTransferredRatio | 56.4 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7678 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 12. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 3.09 |
| decodedFromImgElementsMB | 3.09 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 56 |
| decodedToTransferredRatio | 56.4 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7843 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/contact`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 10. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 3.09 |
| decodedFromImgElementsMB | 3.09 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 55 |
| decodedToTransferredRatio | 58 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7079 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 10. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 3.09 |
| decodedFromImgElementsMB | 3.09 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 55 |
| decodedToTransferredRatio | 58 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7083 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/mentions-legales`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 6. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 0 |
| decodedFromImgElementsMB | 0 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 0 |
| decodedToTransferredRatio | n/a |
| imageCount | 0 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 4703 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 7. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 0 |
| decodedFromImgElementsMB | 0 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 0 |
| decodedToTransferredRatio | n/a |
| imageCount | 0 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 4863 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/politique-de-confidentialite`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 8. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 0 |
| decodedFromImgElementsMB | 0 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 0 |
| decodedToTransferredRatio | n/a |
| imageCount | 0 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 6145 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 9. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 0 |
| decodedFromImgElementsMB | 0 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 0 |
| decodedToTransferredRatio | n/a |
| imageCount | 0 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 6379 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

### `http://127.0.0.1:64845/contact?besoin=gardiennage`

#### iPhone (390 x 844, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 10. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 3.09 |
| decodedFromImgElementsMB | 3.09 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 55 |
| decodedToTransferredRatio | 58 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7079 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

#### Small Android (360 x 800, DPR 3)

Lazy images forced eager: 0. Scroll steps to bottom and back: 10. All images settled: yes.

**PASS**  `01-mobile-memory`  Mobile memory and compositing (decoded images, layers, fixed backdrop-filter)

| Measurement | Value |
|---|---|
| decodedImageMemoryMB | 3.09 |
| decodedFromImgElementsMB | 3.09 |
| decodedFromCssBackgroundsMB | 0 |
| transferredImageKB | 55 |
| decodedToTransferredRatio | 58 |
| imageCount | 1 |
| cssBackgroundImageCount | 0 |
| oversampledImages | 0 |
| imagesMissingSrcset | 0 |
| imagesSrcsetWithoutSizes | 0 |
| willChangeElements | 0 |
| blurFilterElements | 0 |
| backdropFilterElements | 0 |
| backdropFilterOnFixedElements | 0 |
| positionFixedElements | 1 |
| mixBlendModeElements | 0 |
| documentScrollHeight | 7083 |
| devicePixelRatio | 3 |
| consoleErrors | 2 |
| failedRequests | 3 |

**PASS**  `02-session-storage`  Where the session lives (tokens in web storage, cookie flags)

| Measurement | Value |
|---|---|
| localStorageKeys | 0 |
| sessionStorageKeys | 0 |
| jwtsInWebStorage | 0 |
| tokenishKeysInWebStorage | 0 |
| cookiesTotal | 0 |
| sessionLookingCookies | 0 |
| sessionCookiesMissingHttpOnly | 0 |
| sessionCookiesMissingSecure | n/a |
| secureFlagEvaluable | false |
| sessionCookiesSameSiteNone | 0 |
| sessionCookiesSameSiteUnset | 0 |

**PASS**  `03-client-side-authz`  Privileged routes gated in the browser instead of on the server

| Measurement | Value |
|---|---|
| sweepRan | false |
| originIsCatchAll | false |
| pathsSwept | 0 |
| gatedByServer | 0 |
| servedToAnonymous | 0 |
| servedWithPrivilegedContent | 0 |
| servedAsLoginPage | 0 |
| servedAsAppShell | 0 |
| inconclusiveRoutes | 0 |
| thisPathIsPrivileged | false |
| clientRoleChecksInJs | 0 |
| scriptFilesScanned | 5 |
| scriptScanTruncated | false |

**PASS**  `04-two-factor`  Second factor discoverable on the auth surface

| Measurement | Value |
|---|---|
| hasAuthSurface | false |
| twoFactorPhrasesFound | 0 |
| oneTimeCodeInputs | 0 |
| securityLinksFound | 0 |
| oauthButtonPresent | false |

**PASS**  `05-login-rate-limit`  Login throttling under repeated failed attempts (active probe)

| Measurement | Value |
|---|---|
| loginFormPresent | false |
| activeProbeEnabled | false |
| probeRan | false |
| resultReusedFromEarlierProfile | false |
| attemptsRequested | n/a |
| attemptsMade | n/a |
| authResponsesSeen | n/a |
| throttleObserved | n/a |
| captchaAppeared | n/a |

**PASS**  `06-password-policy`  Password policy the form actually enforces, and whether the user can see it

| Measurement | Value |
|---|---|
| passwordFields | 0 |
| signupFormPresent | false |
| probeRan | false |

Console errors (2):

- `Failed to load resource: the server responded with a status of 404 (Not Found)`
- `Failed to load resource: the server responded with a status of 404 (Not Found)`

Failed requests (3):

- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404
- `http://127.0.0.1:64845/_vercel/insights/script.js` : net::ERR_ABORTED
- `http://127.0.0.1:64845/_vercel/insights/script.js` : HTTP 404

## Fix list, worst first

Nothing to fix. Every check passed on every page under every profile.

## Appendix: raw measurements

Everything above is derived from this JSON. Nothing is rounded away here.

<!-- REALTEST_RAW_JSON_BEGIN -->
```json
{
  "target": "/Users/schartzforte/websites/web coding master/berberat-thenot/dist",
  "generatedAt": "2026-09-28T12:43:42.528Z",
  "thresholds": {
    "decodedImageMemoryMB": {
      "warn": 30,
      "fail": 60
    },
    "imageOversampleRatio": {
      "fail": 2
    },
    "responsiveImages": {
      "missingSrcsetSeverity": "WARN",
      "srcsetWithoutSizesSeverity": "FAIL"
    },
    "willChangeElements": {
      "warn": 10,
      "fail": 25
    },
    "backdropFilterOnFixed": {
      "warn": 1
    },
    "sessionStorage": {
      "jwtInWebStorageSeverity": "FAIL",
      "tokenishKeyInWebStorageSeverity": "WARN",
      "cookieMissingHttpOnlySeverity": "FAIL",
      "cookieMissingSecureSeverity": "FAIL",
      "cookieSameSiteNoneSeverity": "WARN",
      "cookieSameSiteUnsetSeverity": "WARN"
    },
    "clientSideAuthz": {
      "privilegedContentToAnonymousSeverity": "FAIL",
      "privilegedShellToAnonymousSeverity": "WARN",
      "clientRoleCheckSeverity": "WARN"
    },
    "twoFactor": {
      "noAffordanceOnAuthSurfaceSeverity": "WARN"
    },
    "loginRateLimit": {
      "noThrottleSeverity": "FAIL",
      "notTestedSeverity": "WARN"
    },
    "passwordPolicy": {
      "minLengthFloor": 8,
      "maxLengthFloor": 64,
      "noFeedbackAtAllSeverity": "FAIL",
      "weakMinLengthSeverity": "WARN",
      "noVisibleStrengthMeterSeverity": "WARN",
      "missingAutocompleteSeverity": "WARN",
      "passwordOverGetSeverity": "FAIL",
      "insecureFormActionSeverity": "FAIL"
    }
  },
  "probeSettings": {
    "navigationTimeoutMs": 45000,
    "networkIdleTimeoutMs": 12000,
    "scrollStepRatio": 0.8,
    "scrollStepDelayMs": 140,
    "maxScrollSteps": 200,
    "imageSettleTimeoutMs": 20000,
    "postScrollSettleMs": 700,
    "sampleLimit": 12,
    "imageFindingLimit": 25,
    "rawSizeTimeoutMs": 5000,
    "storageKeyLimit": 300,
    "storageTokenMinValueLength": 24,
    "privilegedSweepEnabled": true,
    "privilegedSweepLimit": 16,
    "sweepFetchTimeoutMs": 8000,
    "sweepBodyReadBytes": 200000,
    "scriptScanMaxFiles": 8,
    "scriptScanMaxBytes": 3000000,
    "scriptScanHitLimit": 12,
    "weakPasswordSample": "password",
    "passwordProbeSettleMs": 500,
    "authFindingLimit": 20,
    "authProbeEnabled": false,
    "authProbeAttempts": 10,
    "authProbeDelayMs": 900,
    "authProbeStepTimeoutMs": 4000,
    "authProbeEmailDomain": "example.invalid"
  },
  "skipped": [],
  "truncated": null,
  "results": [
    {
      "url": "http://127.0.0.1:64845/",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 14.78,
            "decodedFromImgElementsMB": 14.78,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 331,
            "decodedToTransferredRatio": 45.7,
            "imageCount": 11,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 11173,
            "devicePixelRatio": 3,
            "consoleErrors": 17,
            "failedRequests": 18
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": true,
            "originIsCatchAll": false,
            "pathsSwept": 14,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/",
        "title": "Groupe Berberat Thenot | Partenaire Transport & Logistique depuis 1971",
        "notes": [],
        "forcedEagerCount": 10,
        "scrollSteps": 16,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/__realtest_control_1_404__",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/admin",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/admin/dashboard",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/administrator",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/backoffice",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/dashboard",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/console",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/manage",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/staff",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/users",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/account",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/settings",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/api/admin",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/api/users",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/wp-admin/",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 338755,
        "decodedToTransferredRatio": 45.738306445661316,
        "auth": {
          "pathname": "/",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": true,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 4413,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": true,
            "catchAll": false,
            "control": {
              "path": "/__realtest_control_1_404__",
              "status": 404,
              "responseType": "basic",
              "serverRedirect": false,
              "bodyBytes": 0,
              "title": "",
              "markers": {
                "hasPasswordField": false,
                "hasLogoutAffordance": false,
                "hasAdminWording": false,
                "looksLikeEmptyShell": false
              }
            },
            "results": [
              {
                "path": "/admin",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/admin/dashboard",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/administrator",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/backoffice",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/dashboard",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/console",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/manage",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/staff",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/users",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/account",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/settings",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/api/admin",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/api/users",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/wp-admin/",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              }
            ]
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14478,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 11173,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z1bgrE4.avif",
            "naturalWidth": 1280,
            "naturalHeight": 719,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 390,
            "cssDisplayHeight": 772,
            "decodedMB": 3.5107421875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.0940170940170941,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "transports-berberat.D0OB0Dh2_Z1X0BBW.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "transports-thenot.CNVDGgrZ_Z2nJu07.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "bte.B8lQDU8m_ZHrFRU.webp",
            "naturalWidth": 480,
            "naturalHeight": 113,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 61.19,
            "decodedMB": 0.2069091796875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "btl.sntIzq2B_1R7I7P.webp",
            "naturalWidth": 480,
            "naturalHeight": 100,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.94,
            "cssDisplayHeight": 54.14,
            "decodedMB": 0.18310546875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6155325799471026,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "lgs.BijwsfNG_Z1k9dKa.webp",
            "naturalWidth": 480,
            "naturalHeight": 279,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 165.16,
            "cssDisplayHeight": 95.98,
            "decodedMB": 0.5108642578125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.9687795648060549,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "eurocap.D-I_SMZn_ZdrfpR.webp",
            "naturalWidth": 480,
            "naturalHeight": 128,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 69.31,
            "decodedMB": 0.234375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 223.75,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "archive-man-snow.D23F7kiG_ZUg40T.avif",
            "naturalWidth": 800,
            "naturalHeight": 531,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 238.66,
            "decodedMB": 1.6204833984375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.74487895716946,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "flo-trailer.BpwdXHKr_ZkTRJx.avif",
            "naturalWidth": 800,
            "naturalHeight": 600,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 223.75,
            "decodedMB": 1.8310546875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.74487895716946,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "volvo-fh.DWKjkiQN_1MQuvV.avif",
            "naturalWidth": 800,
            "naturalHeight": 996,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 268.5,
            "decodedMB": 3.03955078125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.74487895716946,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 11,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 14.77630615234375,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 14.77630615234375,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 14.78,
            "decodedFromImgElementsMB": 14.78,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 331,
            "decodedToTransferredRatio": 45.7,
            "imageCount": 11,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 11181,
            "devicePixelRatio": 3,
            "consoleErrors": 17,
            "failedRequests": 18
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": true,
            "originIsCatchAll": false,
            "pathsSwept": 14,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/",
        "title": "Groupe Berberat Thenot | Partenaire Transport & Logistique depuis 1971",
        "notes": [],
        "forcedEagerCount": 10,
        "scrollSteps": 17,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/__realtest_control_1_404__",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/admin",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/admin/dashboard",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/administrator",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/backoffice",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/dashboard",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/console",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/manage",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/staff",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/users",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/account",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/settings",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/api/admin",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/api/users",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/wp-admin/",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 338755,
        "decodedToTransferredRatio": 45.738306445661316,
        "auth": {
          "pathname": "/",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": true,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 4413,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": true,
            "catchAll": false,
            "control": {
              "path": "/__realtest_control_1_404__",
              "status": 404,
              "responseType": "basic",
              "serverRedirect": false,
              "bodyBytes": 0,
              "title": "",
              "markers": {
                "hasPasswordField": false,
                "hasLogoutAffordance": false,
                "hasAdminWording": false,
                "looksLikeEmptyShell": false
              }
            },
            "results": [
              {
                "path": "/admin",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/admin/dashboard",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/administrator",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/backoffice",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/dashboard",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/console",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/manage",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/staff",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/users",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/account",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/settings",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/api/admin",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/api/users",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              },
              {
                "path": "/wp-admin/",
                "status": 404,
                "responseType": "basic",
                "serverRedirect": false,
                "bodyBytes": 0,
                "title": "",
                "markers": {
                  "hasPasswordField": false,
                  "hasLogoutAffordance": false,
                  "hasAdminWording": false,
                  "looksLikeEmptyShell": false
                }
              }
            ]
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14478,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 11181,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z1bgrE4.avif",
            "naturalWidth": 1280,
            "naturalHeight": 719,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 360,
            "cssDisplayHeight": 728,
            "decodedMB": 3.5107421875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1851851851851851,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "transports-berberat.D0OB0Dh2_Z1X0BBW.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "transports-thenot.CNVDGgrZ_Z2nJu07.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "bte.B8lQDU8m_ZHrFRU.webp",
            "naturalWidth": 480,
            "naturalHeight": 113,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 61.19,
            "decodedMB": 0.2069091796875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "btl.sntIzq2B_1R7I7P.webp",
            "naturalWidth": 480,
            "naturalHeight": 100,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.94,
            "cssDisplayHeight": 54.14,
            "decodedMB": 0.18310546875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6155325799471026,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "lgs.BijwsfNG_Z1k9dKa.webp",
            "naturalWidth": 480,
            "naturalHeight": 279,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 165.16,
            "cssDisplayHeight": 95.98,
            "decodedMB": 0.5108642578125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.9687795648060549,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "eurocap.D-I_SMZn_ZdrfpR.webp",
            "naturalWidth": 480,
            "naturalHeight": 128,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 69.31,
            "decodedMB": 0.234375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 205,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "archive-man-snow.D23F7kiG_ZUg40T.avif",
            "naturalWidth": 800,
            "naturalHeight": 531,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 218.66,
            "decodedMB": 1.6204833984375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8130081300813008,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "flo-trailer.BpwdXHKr_ZkTRJx.avif",
            "naturalWidth": 800,
            "naturalHeight": 600,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 205,
            "decodedMB": 1.8310546875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8130081300813008,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "volvo-fh.DWKjkiQN_1MQuvV.avif",
            "naturalWidth": 800,
            "naturalHeight": 996,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 246,
            "decodedMB": 3.03955078125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8130081300813008,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 11,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 14.77630615234375,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 14.77630615234375,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/le-groupe",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 4.77,
            "decodedFromImgElementsMB": 4.77,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 118,
            "decodedToTransferredRatio": 41.5,
            "imageCount": 7,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 9309,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/le-groupe",
        "title": "Le groupe, six sociétés | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 6,
        "scrollSteps": 13,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 120725,
        "decodedToTransferredRatio": 41.46945537378339,
        "auth": {
          "pathname": "/le-groupe",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 4391,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14437,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 9309,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "transports-berberat.D0OB0Dh2_Z1X0BBW.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "transports-thenot.CNVDGgrZ_Z2nJu07.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "bte.B8lQDU8m_ZHrFRU.webp",
            "naturalWidth": 480,
            "naturalHeight": 113,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 61.19,
            "decodedMB": 0.2069091796875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "btl.sntIzq2B_1R7I7P.webp",
            "naturalWidth": 480,
            "naturalHeight": 100,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.94,
            "cssDisplayHeight": 54.14,
            "decodedMB": 0.18310546875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6155325799471026,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "lgs.BijwsfNG_Z1k9dKa.webp",
            "naturalWidth": 480,
            "naturalHeight": 279,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 178.92,
            "cssDisplayHeight": 103.98,
            "decodedMB": 0.5108642578125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8942450441009518,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "eurocap.D-I_SMZn_ZdrfpR.webp",
            "naturalWidth": 480,
            "naturalHeight": 128,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 69.31,
            "decodedMB": 0.234375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          }
        ],
        "imageCount": 7,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 4.77447509765625,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 4.77447509765625,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/le-groupe",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 4.77,
            "decodedFromImgElementsMB": 4.77,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 118,
            "decodedToTransferredRatio": 41.5,
            "imageCount": 7,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 9378,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/le-groupe",
        "title": "Le groupe, six sociétés | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 6,
        "scrollSteps": 14,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 120725,
        "decodedToTransferredRatio": 41.46945537378339,
        "auth": {
          "pathname": "/le-groupe",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 4391,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14437,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 9378,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "transports-berberat.D0OB0Dh2_Z1X0BBW.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "transports-thenot.CNVDGgrZ_Z2nJu07.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "bte.B8lQDU8m_ZHrFRU.webp",
            "naturalWidth": 480,
            "naturalHeight": 113,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 61.19,
            "decodedMB": 0.2069091796875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "btl.sntIzq2B_1R7I7P.webp",
            "naturalWidth": 480,
            "naturalHeight": 100,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.94,
            "cssDisplayHeight": 54.14,
            "decodedMB": 0.18310546875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6155325799471026,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "lgs.BijwsfNG_Z1k9dKa.webp",
            "naturalWidth": 480,
            "naturalHeight": 279,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 178.92,
            "cssDisplayHeight": 103.98,
            "decodedMB": 0.5108642578125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8942450441009518,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "eurocap.D-I_SMZn_ZdrfpR.webp",
            "naturalWidth": 480,
            "naturalHeight": 128,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 69.31,
            "decodedMB": 0.234375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          }
        ],
        "imageCount": 7,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 4.77447509765625,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 4.77447509765625,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/histoire",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 4.71,
            "decodedFromImgElementsMB": 4.71,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 72,
            "decodedToTransferredRatio": 66.8,
            "imageCount": 2,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 5796,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/histoire",
        "title": "Histoire du groupe, depuis 1971 | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 1,
        "scrollSteps": 8,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 73882,
        "decodedToTransferredRatio": 66.7875801954468,
        "auth": {
          "pathname": "/histoire",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 2709,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14446,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 5796,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "archive-man-snow.D23F7kiG_ZUg40T.avif",
            "naturalWidth": 800,
            "naturalHeight": 531,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 1.6204833984375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.74487895716946,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 223.75,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 2,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 4.705810546875,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 4.705810546875,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/histoire",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 4.71,
            "decodedFromImgElementsMB": 4.71,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 72,
            "decodedToTransferredRatio": 66.8,
            "imageCount": 2,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 5859,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/histoire",
        "title": "Histoire du groupe, depuis 1971 | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 1,
        "scrollSteps": 8,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 73882,
        "decodedToTransferredRatio": 66.7875801954468,
        "auth": {
          "pathname": "/histoire",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 2709,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14446,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 5859,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "archive-man-snow.D23F7kiG_ZUg40T.avif",
            "naturalWidth": 800,
            "naturalHeight": 531,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 1.6204833984375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8130081300813008,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 205,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 2,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 4.705810546875,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 4.705810546875,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/transport",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 7.12,
            "decodedFromImgElementsMB": 7.12,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 127,
            "decodedToTransferredRatio": 57.6,
            "imageCount": 6,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 8831,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/transport",
        "title": "Transport routier de marchandises | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 5,
        "scrollSteps": 12,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 129622,
        "decodedToTransferredRatio": 57.56059928098625,
        "auth": {
          "pathname": "/transport",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3849,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14468,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 8831,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "transports-berberat.D0OB0Dh2_Z1X0BBW.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "transports-thenot.CNVDGgrZ_Z2nJu07.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "bte.B8lQDU8m_ZHrFRU.webp",
            "naturalWidth": 480,
            "naturalHeight": 113,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 61.19,
            "decodedMB": 0.2069091796875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "eurocap.D-I_SMZn_ZdrfpR.webp",
            "naturalWidth": 480,
            "naturalHeight": 128,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 69.31,
            "decodedMB": 0.234375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "volvo-fh.DWKjkiQN_1MQuvV.avif",
            "naturalWidth": 800,
            "naturalHeight": 996,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 447.5,
            "decodedMB": 3.03955078125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.74487895716946,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 6,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 7.115478515625,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 7.115478515625,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/transport",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 7.12,
            "decodedFromImgElementsMB": 7.12,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 127,
            "decodedToTransferredRatio": 57.6,
            "imageCount": 6,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 8937,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/transport",
        "title": "Transport routier de marchandises | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 5,
        "scrollSteps": 13,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 129622,
        "decodedToTransferredRatio": 57.56059928098625,
        "auth": {
          "pathname": "/transport",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3849,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14468,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 8937,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "transports-berberat.D0OB0Dh2_Z1X0BBW.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "transports-thenot.CNVDGgrZ_Z2nJu07.webp",
            "naturalWidth": 480,
            "naturalHeight": 150,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 260,
            "cssDisplayHeight": 81.25,
            "decodedMB": 0.274658203125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.6153846153846154,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "bte.B8lQDU8m_ZHrFRU.webp",
            "naturalWidth": 480,
            "naturalHeight": 113,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 61.19,
            "decodedMB": 0.2069091796875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "eurocap.D-I_SMZn_ZdrfpR.webp",
            "naturalWidth": 480,
            "naturalHeight": 128,
            "cssIntrinsicWidth": 260,
            "rawSizeResolved": true,
            "cssDisplayWidth": 259.97,
            "cssDisplayHeight": 69.31,
            "decodedMB": 0.234375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.615458588772689,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": false
          },
          {
            "selector": "img",
            "src": "volvo-fh.DWKjkiQN_1MQuvV.avif",
            "naturalWidth": 800,
            "naturalHeight": 996,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 410,
            "decodedMB": 3.03955078125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8130081300813008,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 6,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 7.115478515625,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 7.115478515625,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/logistique",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 6.18,
            "decodedFromImgElementsMB": 6.18,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 111,
            "decodedToTransferredRatio": 57.2,
            "imageCount": 2,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7716,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/logistique",
        "title": "Logistique et entreposage | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 1,
        "scrollSteps": 11,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 113235,
        "decodedToTransferredRatio": 57.1837329447609,
        "auth": {
          "pathname": "/logistique",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3236,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14444,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7716,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 223.75,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 2,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 6.17523193359375,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 6.17523193359375,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/logistique",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 6.18,
            "decodedFromImgElementsMB": 6.18,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 111,
            "decodedToTransferredRatio": 57.2,
            "imageCount": 2,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7819,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/logistique",
        "title": "Logistique et entreposage | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 1,
        "scrollSteps": 11,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 113235,
        "decodedToTransferredRatio": 57.1837329447609,
        "auth": {
          "pathname": "/logistique",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3236,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14444,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7819,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 205,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 2,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 6.17523193359375,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 6.17523193359375,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/services",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 3.04,
            "decodedFromImgElementsMB": 3.04,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 39,
            "decodedToTransferredRatio": 79.3,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 6256,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/services",
        "title": "Gardiennage, parking, affrètement | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 9,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 40174,
        "decodedToTransferredRatio": 79.33489321451685,
        "auth": {
          "pathname": "/services",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3087,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14453,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 6256,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "volvo-fh.DWKjkiQN_1MQuvV.avif",
            "naturalWidth": 800,
            "naturalHeight": 996,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 3.03955078125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.74487895716946,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 3.03955078125,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 3.03955078125,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/services",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 3.04,
            "decodedFromImgElementsMB": 3.04,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 39,
            "decodedToTransferredRatio": 79.3,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 6365,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/services",
        "title": "Gardiennage, parking, affrètement | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 9,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 40174,
        "decodedToTransferredRatio": 79.33489321451685,
        "auth": {
          "pathname": "/services",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3087,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14453,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 6365,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "volvo-fh.DWKjkiQN_1MQuvV.avif",
            "naturalWidth": 800,
            "naturalHeight": 996,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 3.03955078125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8130081300813008,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 3.03955078125,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 3.03955078125,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/moyens",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 9.21,
            "decodedFromImgElementsMB": 9.21,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 150,
            "decodedToTransferredRatio": 63,
            "imageCount": 3,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7861,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/moyens",
        "title": "Moyens : flotte, stockage, sites | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 2,
        "scrollSteps": 11,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 153409,
        "decodedToTransferredRatio": 62.98457065752335,
        "auth": {
          "pathname": "/moyens",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3236,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14444,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7861,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "volvo-fh.DWKjkiQN_1MQuvV.avif",
            "naturalWidth": 800,
            "naturalHeight": 996,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 3.03955078125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.74487895716946,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 223.75,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 223.75,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 3,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 9.21478271484375,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 9.21478271484375,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/moyens",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 9.21,
            "decodedFromImgElementsMB": 9.21,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 150,
            "decodedToTransferredRatio": 63,
            "imageCount": 3,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7924,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/moyens",
        "title": "Moyens : flotte, stockage, sites | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 2,
        "scrollSteps": 12,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 153409,
        "decodedToTransferredRatio": 62.98457065752335,
        "auth": {
          "pathname": "/moyens",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3236,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14444,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7924,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "volvo-fh.DWKjkiQN_1MQuvV.avif",
            "naturalWidth": 800,
            "naturalHeight": 996,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 3.03955078125,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8130081300813008,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 205,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          },
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 205,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 3,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 9.21478271484375,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 9.21478271484375,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/groupement-flo",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 1.83,
            "decodedFromImgElementsMB": 1.83,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 21,
            "decodedToTransferredRatio": 88,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 4878,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/groupement-flo",
        "title": "Membre du Groupement FLO | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 6,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 21822,
        "decodedToTransferredRatio": 87.98460269452846,
        "auth": {
          "pathname": "/groupement-flo",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 2252,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14443,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 4878,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "flo-trailer.BpwdXHKr_ZkTRJx.avif",
            "naturalWidth": 800,
            "naturalHeight": 600,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 1.8310546875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.74487895716946,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 1.8310546875,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 1.8310546875,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/groupement-flo",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 1.83,
            "decodedFromImgElementsMB": 1.83,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 21,
            "decodedToTransferredRatio": 88,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 4914,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/groupement-flo",
        "title": "Membre du Groupement FLO | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 7,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 21822,
        "decodedToTransferredRatio": 87.98460269452846,
        "auth": {
          "pathname": "/groupement-flo",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 2252,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14443,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 4914,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "flo-trailer.BpwdXHKr_ZkTRJx.avif",
            "naturalWidth": 800,
            "naturalHeight": 600,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 1.8310546875,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 0.8130081300813008,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 1.8310546875,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 1.8310546875,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/recrutement",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 3.09,
            "decodedFromImgElementsMB": 3.09,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 56,
            "decodedToTransferredRatio": 56.4,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7678,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/recrutement",
        "title": "Recrutement | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 11,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 57410,
        "decodedToTransferredRatio": 56.35255182024038,
        "auth": {
          "pathname": "/recrutement",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3416,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14434,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7678,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 3.0853271484375,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 3.0853271484375,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/recrutement",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 3.09,
            "decodedFromImgElementsMB": 3.09,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 56,
            "decodedToTransferredRatio": 56.4,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7843,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/recrutement",
        "title": "Recrutement | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 12,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 57410,
        "decodedToTransferredRatio": 56.35255182024038,
        "auth": {
          "pathname": "/recrutement",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3416,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14434,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7843,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "yard-drone.iDOnYsGt_Z15Gfxa.avif",
            "naturalWidth": 1200,
            "naturalHeight": 674,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 3.0853271484375,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 3.0853271484375,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 3.0853271484375,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/contact",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 3.09,
            "decodedFromImgElementsMB": 3.09,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 55,
            "decodedToTransferredRatio": 58,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7079,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/contact",
        "title": "Contact et demande de devis | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 10,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 55825,
        "decodedToTransferredRatio": 58.03851321092701,
        "auth": {
          "pathname": "/contact",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3309,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14447,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7079,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 3.08990478515625,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 3.08990478515625,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/contact",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 3.09,
            "decodedFromImgElementsMB": 3.09,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 55,
            "decodedToTransferredRatio": 58,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7083,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/contact",
        "title": "Contact et demande de devis | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 10,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 55825,
        "decodedToTransferredRatio": 58.03851321092701,
        "auth": {
          "pathname": "/contact",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3309,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14447,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7083,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 3.08990478515625,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 3.08990478515625,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/mentions-legales",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 0,
            "decodedFromImgElementsMB": 0,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 0,
            "decodedToTransferredRatio": null,
            "imageCount": 0,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 4703,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/mentions-legales",
        "title": "Mentions légales | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 6,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 0,
        "decodedToTransferredRatio": null,
        "auth": {
          "pathname": "/mentions-legales",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3382,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14464,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 4703,
        "viewportHeight": 844,
        "images": [],
        "imageCount": 0,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 0,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 0,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/mentions-legales",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 0,
            "decodedFromImgElementsMB": 0,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 0,
            "decodedToTransferredRatio": null,
            "imageCount": 0,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 4863,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/mentions-legales",
        "title": "Mentions légales | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 7,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 0,
        "decodedToTransferredRatio": null,
        "auth": {
          "pathname": "/mentions-legales",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3382,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14464,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 4863,
        "viewportHeight": 800,
        "images": [],
        "imageCount": 0,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 0,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 0,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/politique-de-confidentialite",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 0,
            "decodedFromImgElementsMB": 0,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 0,
            "decodedToTransferredRatio": null,
            "imageCount": 0,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 6145,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/politique-de-confidentialite",
        "title": "Politique de confidentialité | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 8,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 0,
        "decodedToTransferredRatio": null,
        "auth": {
          "pathname": "/politique-de-confidentialite",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 4583,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14505,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 6145,
        "viewportHeight": 844,
        "images": [],
        "imageCount": 0,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 0,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 0,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/politique-de-confidentialite",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 0,
            "decodedFromImgElementsMB": 0,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 0,
            "decodedToTransferredRatio": null,
            "imageCount": 0,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 6379,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/politique-de-confidentialite",
        "title": "Politique de confidentialité | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 9,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 0,
        "decodedToTransferredRatio": null,
        "auth": {
          "pathname": "/politique-de-confidentialite",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 4583,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14505,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 6379,
        "viewportHeight": 800,
        "images": [],
        "imageCount": 0,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 0,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 0,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/contact?besoin=gardiennage",
      "profile": {
        "id": "iphone-390x844-dpr3",
        "label": "iPhone (390 x 844, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 3.09,
            "decodedFromImgElementsMB": 3.09,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 55,
            "decodedToTransferredRatio": 58,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7079,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/contact?besoin=gardiennage",
        "title": "Contact et demande de devis | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 10,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 55825,
        "decodedToTransferredRatio": 58.03851321092701,
        "auth": {
          "pathname": "/contact",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3309,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14447,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7079,
        "viewportHeight": 844,
        "images": [
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 390,
            "rawSizeResolved": true,
            "cssDisplayWidth": 358,
            "cssDisplayHeight": 280,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.1173184357541899,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 3.08990478515625,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 3.08990478515625,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    },
    {
      "url": "http://127.0.0.1:64845/contact?besoin=gardiennage",
      "profile": {
        "id": "android-360x800-dpr3",
        "label": "Small Android (360 x 800, DPR 3)"
      },
      "worst": "PASS",
      "checks": [
        {
          "id": "01-mobile-memory",
          "status": "PASS",
          "numbers": {
            "decodedImageMemoryMB": 3.09,
            "decodedFromImgElementsMB": 3.09,
            "decodedFromCssBackgroundsMB": 0,
            "transferredImageKB": 55,
            "decodedToTransferredRatio": 58,
            "imageCount": 1,
            "cssBackgroundImageCount": 0,
            "oversampledImages": 0,
            "imagesMissingSrcset": 0,
            "imagesSrcsetWithoutSizes": 0,
            "willChangeElements": 0,
            "blurFilterElements": 0,
            "backdropFilterElements": 0,
            "backdropFilterOnFixedElements": 0,
            "positionFixedElements": 1,
            "mixBlendModeElements": 0,
            "documentScrollHeight": 7083,
            "devicePixelRatio": 3,
            "consoleErrors": 2,
            "failedRequests": 3
          }
        },
        {
          "id": "02-session-storage",
          "status": "PASS",
          "numbers": {
            "localStorageKeys": 0,
            "sessionStorageKeys": 0,
            "jwtsInWebStorage": 0,
            "tokenishKeysInWebStorage": 0,
            "cookiesTotal": 0,
            "sessionLookingCookies": 0,
            "sessionCookiesMissingHttpOnly": 0,
            "sessionCookiesMissingSecure": null,
            "secureFlagEvaluable": false,
            "sessionCookiesSameSiteNone": 0,
            "sessionCookiesSameSiteUnset": 0
          }
        },
        {
          "id": "03-client-side-authz",
          "status": "PASS",
          "numbers": {
            "sweepRan": false,
            "originIsCatchAll": false,
            "pathsSwept": 0,
            "gatedByServer": 0,
            "servedToAnonymous": 0,
            "servedWithPrivilegedContent": 0,
            "servedAsLoginPage": 0,
            "servedAsAppShell": 0,
            "inconclusiveRoutes": 0,
            "thisPathIsPrivileged": false,
            "clientRoleChecksInJs": 0,
            "scriptFilesScanned": 5,
            "scriptScanTruncated": false
          }
        },
        {
          "id": "04-two-factor",
          "status": "PASS",
          "numbers": {
            "hasAuthSurface": false,
            "twoFactorPhrasesFound": 0,
            "oneTimeCodeInputs": 0,
            "securityLinksFound": 0,
            "oauthButtonPresent": false
          }
        },
        {
          "id": "05-login-rate-limit",
          "status": "PASS",
          "numbers": {
            "loginFormPresent": false,
            "activeProbeEnabled": false,
            "probeRan": false,
            "resultReusedFromEarlierProfile": false,
            "attemptsRequested": null,
            "attemptsMade": null,
            "authResponsesSeen": null,
            "throttleObserved": null,
            "captchaAppeared": null
          }
        },
        {
          "id": "06-password-policy",
          "status": "PASS",
          "numbers": {
            "passwordFields": 0,
            "signupFormPresent": false,
            "probeRan": false
          }
        }
      ],
      "measurements": {
        "ok": true,
        "url": "http://127.0.0.1:64845/contact?besoin=gardiennage",
        "title": "Contact et demande de devis | Groupe Berberat Thenot",
        "notes": [],
        "forcedEagerCount": 0,
        "scrollSteps": 10,
        "imagesSettled": true,
        "consoleErrors": [
          "Failed to load resource: the server responded with a status of 404 (Not Found)",
          "Failed to load resource: the server responded with a status of 404 (Not Found)"
        ],
        "failedRequests": [
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "net::ERR_ABORTED"
          },
          {
            "url": "http://127.0.0.1:64845/_vercel/insights/script.js",
            "reason": "HTTP 404"
          }
        ],
        "transferredImageBytes": 55825,
        "decodedToTransferredRatio": 58.03851321092701,
        "auth": {
          "pathname": "/contact",
          "origin": "http://127.0.0.1:64845",
          "isHttps": false,
          "isRoot": false,
          "storage": {
            "entries": [],
            "errors": [],
            "localStorageKeys": 0,
            "sessionStorageKeys": 0
          },
          "forms": [],
          "passwordFields": [],
          "twoFactor": {
            "markers": [],
            "oneTimeCodeInputs": 0,
            "links": []
          },
          "pageMarkers": {
            "isPrivilegedPath": false,
            "hasLoginForm": false,
            "hasSignupForm": false,
            "hasLogoutAffordance": false,
            "hasOAuthButton": false,
            "bodyTextLength": 3309,
            "isEmptyShell": false
          },
          "privilegedSweep": {
            "ran": false,
            "catchAll": false,
            "control": null,
            "results": []
          },
          "scriptScan": {
            "filesScanned": 5,
            "bytesScanned": 14447,
            "truncated": false,
            "hits": []
          },
          "passwordProbe": {
            "ran": false
          },
          "cookies": [],
          "rateLimit": {
            "applicable": false,
            "reason": "no login form on this page"
          }
        },
        "devicePixelRatio": 3,
        "scrollHeight": 7083,
        "viewportHeight": 800,
        "images": [
          {
            "selector": "img",
            "src": "warehouse-aerial.Dvo--qhJ_Zpcfam.avif",
            "naturalWidth": 1200,
            "naturalHeight": 675,
            "cssIntrinsicWidth": 360,
            "rawSizeResolved": true,
            "cssDisplayWidth": 328,
            "cssDisplayHeight": 280,
            "decodedMB": 3.08990478515625,
            "hasSrcset": true,
            "hasSizes": true,
            "oversample": 1.2195121951219512,
            "hidden": false,
            "loadingAttr": "eager",
            "complete": true,
            "inPicture": true
          }
        ],
        "imageCount": 1,
        "imagesIncomplete": 0,
        "rawSizeUnknown": 0,
        "backgroundImages": [],
        "backgroundImageCount": 0,
        "decodedImgMB": 3.08990478515625,
        "decodedBackgroundMB": 0,
        "totalDecodedImageMB": 3.08990478515625,
        "counters": {
          "willChange": {
            "count": 0,
            "samples": []
          },
          "blurFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilter": {
            "count": 0,
            "samples": []
          },
          "backdropFilterOnFixed": {
            "count": 0,
            "samples": []
          },
          "positionFixed": {
            "count": 1,
            "samples": [
              {
                "selector": "div#menu-mobile.nav__panel",
                "value": "fixed"
              }
            ]
          },
          "mixBlendMode": {
            "count": 0,
            "samples": []
          }
        }
      }
    }
  ]
}
```
<!-- REALTEST_RAW_JSON_END -->
