"use strict";
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error('User has no displayName field');
}
function logUserByDisplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}
