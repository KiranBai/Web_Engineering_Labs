function createPartyInvitations(guestList, ...additionalDetails) {
  return guestList.map(guest => {
    let invitationMessage = `Dear ${guest.person},\n\nYou are welcome to join us at our party!`;
    
    // Add extra details if provided
    if (additionalDetails.length > 0) {
      invitationMessage += `\n${additionalDetails.join('\n')}`;
    }
    
    invitationMessage += `\n\nPlease RSVP at your earliest convenience.`;
    
    // Check RSVP status
    if (guest.confirmation) {
      invitationMessage += `\n\nWe look forward to seeing you there!`;
    } else {
      invitationMessage += `\n\nWe hope you can make it.`;
    }
    
    return invitationMessage;
  });
}


const guestsList = [
  { person: 'Kiran', age: 24, confirmation: true },
  { person: 'Pari', age: 22, confirmation: false },
  { person: 'Bhumika', age: 23, confirmation: true },
  { person: 'radhika', age: 24, confirmation: false },
  { person: 'Amaeda', age: 22, confirmation: true }
];

const invitations = createPartyInvitations(guestsList, 'Please wear a party hat!', 'Join us for a night of music and dancing');
const invitationsContainer = document.getElementById('invitations');

invitations.forEach(invitation => {
  const invitationDiv = document.createElement('div');
  invitationDiv.classList.add('invitation');
  invitationDiv.textContent = invitation;
  invitationsContainer.appendChild(invitationDiv);
});
