#v1.3.0
- Resolved IE8 Date output bug (IE8 does not resolve timezones natively)
- Opened up `lesson/create` service from the firewall (blocking registration requests)
- Added Date validation on the public lesson registration (invalid formats were throwing server exceptions)
- Fixed defect where all lessons were registered as an adult by default on the public creation form
- Enabled delete button on classrooms
- Fixed classroom update functionality
- Fixed double scrolling issue on admin

#v1.2.0
- Added Google Site Verification meta data
- Added available Classrooms on the Schedule page
- Removed login button in the top right
- Extended time dropdowns to 9:00 pm (added 8:30, 8:45, and 9:00)
- Added permits page
- Added contact page (form not operational)
- Added delete button on Lesson Rate
- Added rates display
- Added multi-rate enroll buttons on lessons page

#v1.1.1
- Updated footer on "non-homepage" template
- Added Ravenswood location
- Fixed student registration
- Fixed defect in lesson rate creation

#v1.1.0
- Fixed lessons from not creating.
- Added pickup fee
- Removed middle initial from customer forms
- Fixed UI styling defects
- Made classroom notes optional (was preventing classrooms from not creating due to hidden validation)
- Updated navigation names and groups
- Added end time to classroom day
- Renamed "Lead Instructor" to "Location"
- Updated footer