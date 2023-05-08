const saveContact = (name, phoneNumber) => {
    // Create a new Contact object
    const contact = new Contact()

    // Set the contact's name and phone number
    contact.name = new ContactName(null, name)
    contact.phoneNumbers = [new ContactField('mobile', phoneNumber)]

    // Save the contact to the device
    navigator.contacts.save(
        contact,
        () => {
            alert('Contact saved successfully')
        },
        (err) => {
            alert('Error saving contact: ' + err)
        }
    )
}

// Attach an event listener to the form submission
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Get the name and phone number from the form
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value

    // Call the saveContact function with the name and phone number
    saveContact(name, phone)
})
