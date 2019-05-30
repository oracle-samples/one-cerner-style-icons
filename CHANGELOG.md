One Cerner Style Icons Changelog
=========

## v.1.23.0 - 5/30/2019
* 1 New Icon Added
	* Do Not Disturb - Allow users to set Do Not Disturb ad-hoc (short term, frequent change). Used within CareAware Connect

## v1.22.0 - 5/17/2019
* 2 New Icons Added
	* Instance Tracked - intended use for instance tracked items within the pick list 
	* Extensions - serves as a rollup for application extensions that do no fit within app header
* Updated red color on 0037_exclamation_i_heavyDiamondRed.svg
* Updated id on S_0001_circle.svg

## v.1.21.1 - 4/04/2019
* Renamed src file for 'Undo': src/icons/0152_circleArrowLeft_a.svg
* Added 'Deprecating' column
	* Added 'Reload' icon back in.
## v.1.21.0 - 1/29/2019
* Redesigned icon for: SortAscending - src/icons/0028_arrowDownFourLinesUp_a.svg
	* Modified design to be more consistent with standard sorting icons. 
	* Removed arrow. 
* Redesigned icon for: SortDescending - src/icons/0029_arrowDownFourLinesDown_a.svg
		* Modified design to be more consistent with standard sorting icons. 
		* Removed arrow.
* Replaced 'Reload' icon with 'Undo' - src/icons/0152_circleArrowLeft_a.svg
	* Having a reload and refresh icon was redundant.
	* Replaced icon with the concept of 'Restore'. Functions similarly to 'Undo'
* New Icon Added: Redo - 0015_circleArrowRight_a.svg
	* This icon will be used for the concept of 'Redo'
* New Symbol Icon Added: src/icons/S_0012_circleLines.svg
	* Advanced Interop will use the icon to represent differentiate internal (solid fill) vs. external (hashed fill) encounters in both the Gantt chart and a corresponding list view.
	 
## v.1.20.0 - 11/14/2018
* 5 New Icons Added for: CE Marking/Regulatory symbols.
	* catalogueNumber -  indicates the manufacturer’s catalogue number so that the medical device can be identified (would only be shown on the CE Marking “about” window)
	* caution - indicates the need for the user to consult the instructions for use for important cautionary information (would specifically be tied to help & reference page labelling)
	* consultInstructionsForUse - Used to indicate that the location of “electronic instructions for use” (eIFU)
	* dateOfManufacture - indicates the date when the medical device was manufactured (would only be shown on the CE Marking “about” window)
	* manufacturer - Indicates the medical device manufacturer (would only be shown on the CE Marking “about” window)
	
## v1.19.2 - 9/24/2018
* Reformat Icon Coloring - the following icons have been re-exporting with Presentation Attributes
	 * src/icons/0003_check_i_lightCircle.svg
	 * src/icons/0041_x_i_heavyCircleWhite.svg
	 * src/icons/0061_questionMark_i_diamond_light.svg
	 * src/icons/0124_arrowDown_i_lightCircle.svg
	 * src/icons/0124_arrowDown_i_lightCircle.svg
	 * src/icons/0124_statusArrowDown_i_lightDiamond.svg
	 * src/icons/0124_statusArrowUp_i_lightDiamond.svg
	 * src/icons/0124_statusArrowUp_i_lightDiamondWhite.svg
	 * src/icons/0125_squiggle_i_lightDiamond.svg
	 * src/icons/0172_exclamationDoorOpen_i_heavyTriangleYellow.svg
	 * src/icons/0173_exclamationDoorOpen_i_heavyTriangleRed.svg
	 * src/icons/LL_0003_check_i_lightCircle.svg
	 * src/icons/LL_0037_exclamation_i_lightCircleGray.svg
	 * src/icons/LL_0061_questionMark_i_diamond_light.svg
	 * src/icons/LL_0124_arrowDown_i_lightCircle.svg
	 * src/icons/LL_0124_statusArrowDown_i_lightDiamond.svg
	 * src/icons/LL_0124_statusArrowUp_i_lightDiamond.svg
	 * src/icons/LL_0124_statusArrowUp_i_lightDiamondWhite.svg
## v1.19.1 - 8/6/2018
* Minor update to 0179
	* Knocked out exlamation from triangle to fix "all gray" triangle.

## v1.19.0 - 7/2/2018
* New Icon Added for: Expand Row - 0183_arrowsInTwoLines_a.svg
	* new terra component for treeview has included funcitonality to expand or collapse the hierarchy (show or hide all children)... icons are needed to allow this functionality
* New Icon Added for: Collapse Row - 0184_arrowsOutTwoLines_a.svg
	* new terra component for treeview has included funcitonality to expand or collapse the hierarchy (show or hide all children)... icons are needed to allow this functionality
* New Icon Added for: Back and Forward in time - doubleChevronLeft & doubleChevronRight
	* In the Timeline Framework, we have a navigation concept using the chevron icons. A single chevron moves the view in that direction by one column, and a double chevron moves the view by a larger segment.

## v1.18.0 - 6/20/2018
* New Icon Added for: Simulation - 0182_monitor_a.svg
	* The icon will be used within Learning Framework to indicate content type as Simulation.
* New Icon Added for: Half Star Rating - 0056_star_a_half.svg
	* The icon will be used within Home Care Analytics for star rating system

## v1.17.0 - 5/24/2018
* Non-themable Terra icons had several legibility issues and so a "Low Light" version was needed. Below are the added icons in the low light color palette.
	* success_low_light
	* success_inverse_low_light
	* noRisk_low_light
	* scheduled_low_light
	* alert_low_light
	* warning_low_light
	* moderate_low_light
	* critical_low_light
	* critical_inverse_low_light
	* information_low_light
	* information_inverse_low_light
	* error_low_light
	* incomplete_low_light
	* incomplete_inverse_low_light
	* help_low_light
	* help_inverse_low_light
	* unexpected_low_light
	* dueSoon_low_light
	* overDue_low_light
	* high_low_light
	* high_inverse_low_light
	* low_low_light
	* noRisk_low_light
	* abnormal_low_light
	* deviceCheck_low_light
	* deviceAlert_low_light
	* diamond_low_light
	* pharmacyReject_low_light
	* bedAssigned_low_light
	* dischargeComplete_low_light
	* dischargeComingDue_low_light
	* dischargeOverDue_low_light
	* drugDrug_low_light
* Added new assets for Symbols, that will be used for the purpose of graphing libraries, like Carbon.
	* circle_symbol
	* diamond_symbol
	* plus_symbol
	* rectangle_symbol
	* square_symbol
	* teardrop_symbol
	* teardropUp_symbol
	* thinDiamond_symbol
	* triangle_symbol
	* triangleDown_symbol
	* x_symbol
* Updated exterior stroke weight on 'light outline' icons
	* noRisk
	* noRisk_low_light
	* moderate
	* moderate_low_light
	* high
	* high_low_light
	* high_inverse
	* high_inverse_low_light
	* low
	* low_low_light
	* abnormal
	* abnormal_low_light
	* partiallyMet
	* lowRisk
	* lowRisk_low_light

## v1.16.1 - 4/12/2018

* Swapped icons: flipHorizontal and flipVertical to accurately reflect icon use.
	* flipVertical becomes 0174_twoTrianglesRight_a.svg
	* flipHorizontal becomes 0174_twoTrianglesUp_a.svg
## v1.16.0 - 4/2/2018

* Added 'incomplete_inverse, to be used in the context of a selected table row.
* Added 'partiallyMet', where insurance has indicated that they will cover some of the visit, but not all of it. This will represent a state between the current two icons: Met, Not Met.

## v1.15.0 - 3/12/2018

* Added 'drugDrug', to be used in the context of a specific orderable, on a list of recommended (or saved) orders.
	* src/icons/0179_pill_exclamation_i_heavyTriangleYellow.svg

* Added 'secondaryProvider', units have a primary caregiver assigned who is responsible for the majority of care. Frequently they will also have a secondary caregiver assigned to them. In our assignment application, we allow the user to make both of these assignments.
	* src/icons/0180_people_a_light.svg

## v1.14.0 - 3/12/2018

* Added 'rollup' icon when an action header has many different icons and either has been pulled to a smaller responsive size or has too many icons for the space - they are all rolled up into this icon.
	* srsc/icons/0036_ellipsesVertical_a.svg
* Adding icon to hide items within a workspace
	* src/icons/0159_eye_i.svg
* Used to fit component to width
	* src/icons/0177_arrowsLeftRightLines_a.svg
* Used to fit component to scale
	* src/icons/0178_arrowsUpDownRightLeftLines_a.svg

## v1.13.1 - 2/20/2018

* Correct extension nameing bug in the csv

## v1.13.0 - 2/12/2018

* New icon added - 0176_stopwatch_pause_i.svg
	* The icon will be used in Transfer Center to indicate that a transfer request is on hold
* New icon added - 0037_exclamation_i_heavyDiamondWhite.svg
	* The icon will display on a selected row to improve visibility within Population Health Management
* New icon added - 0124_statusArrowUp_i_lightDiamondWhite.svg
	* The icon will display on a selected row to improve visibility within Population Health Management

## v1.12.0 - 1/8/2018

* Swapped icon numbers 0172 and 0173
	* Icon 0172 now accurately reflects the status of dischargeComingDue
	* Icon 0172 now accurately reflects the status of dischargeOverDue

## v1.11.0 - 1/8/2018

* Updated icons 0124
	* Included more space between arrows and diamond container shape for clarity.
* New Alias added for icon - 0037_exclamation_i_lightCircleGray.svg
	* Icon will be used to represent Moderate in the Risk indicator family
* New Icon Added - 0003_check_i_lightCircle.svg
	* Icon will be used to represent noRisk wihtin Risk indicator family.
* New Icon Added - 0169
	* Used within Transfer Center to indicate a bed has been requested.
* New Icon Added - 0170
	* Used within Transfer Center to indicate a bed assignment has been made.
* New Icon Added - 0171
	* Used within Cerner Care Team Assignments to indicate a patient's discharge has been completed
* New Icon Added - 0172
	* Used within Cerner Care Team Assignments to indicate a patient is past due on their discharge
* New Icon Added - 0173
	* Used within Cerner Care Team Assignments to indicate a patient's discharge is coming due
* New Icon Added - 0174
	* flipHorizontal - used within Media Gallery component to flip image horizontally
	* flipVertical - used within Media Gallery  omponent to flip image vertically
* New Icon Added - 0175
	* rotateRight - used within Media Gallery component to rotate an image right
	* rotateLeft - used within Media Gallery component o rotate an image left

## v1.10.0 - 1/8/2018

* New Icon Variant Added - 0039
	* Added a default black version of icon 0039, which will be used as a 404 error glyph.

## v1.9.0 - 1/5/2018

* New Icon Added - 0169
	* The icon will be used to represent a bed has been requested for a patient
* New Icon Added - 0170
	* The icon will be used to represent a bed has been assigned to a patient

## v1.8.0 - 11/21/2017

* New Icon Added - 0168
	* The icon will be used to represent an external link. Selecting the icon will take the user outside of their current application/solution.

## v1.7.1 - 11/20/2017

* Minor change to icon file name: src/icons/0116_cancel_a.svg
	* The icon previously did not have a usage in the file name. Included icon usage for action

## v1.7.0 - 11/2/2017

* New Icon Added: src/icons/0167_speakerCurvedLines_a.svg
	* Icon will be used to represent the concept of audio.
* New Icon Added: src/icons/0061_questionMark_i_lightCircle.svg
	* Icon will be used to represent when a question has been unanswered within Ontology Mapping.
* Icon Alias Update: Added the additional alias, featuredOutline, to 0056_star_a_light_off.svg

## v1.6.0 - 10/11/2017

* New Icon Added: src/icons/0166_pause_a.svg
* New Icon Added: src/icons/0127_bell_a_light_off.svg
	* This outlined version will be utilized as an off state for “reminders”

* Icon Updated: src/icons/0020_curvedDoubleArrowLeft_a.svg
	* Accessibility concerns with previous icon version. New icon version includes
more space between the arrow shape and the second arrow.

* Icon Name Updated: src/icons/0127_bell_a_heavy_on.svg
	* Updated naming convention to reflect toggle state documentation

* Icon Name Updated: src/icons/0056_star_a_light_off.svg
	* Changed icon variant from “outline” to “light”
	* Changed icon state to off

* Icon Name Updated: src/icons/0056_star_a_on.svg
	* Changed icon state to on

* Icon Name Updated: src/icons/0165_pinDown_a_on.svg
	* changed icon type from “t” to “a”

* Icon Name Updated: src/icons/0165_pinDiagonal_a_off.svg
	* changed icon type from “t” to “a”

## v1.5.0 - 9/27/2017

* Icon Added: src/icons/0165_pinDown_t.svg
* Icon Added: src/icons/0165_pinDiagonal_t.svg

## v1.4.3 - 9/05/2017

* Icon Updated: src/icons/0061_questionMark_i_diamond_light.svg

## v1.4.1 - 8/30/2017

* Icon Added: src/icons/0162_phoneArrowRight_i.svg
* Icon Added: src/icons/0163_phoneArrowLeft_i.svg
* Icon Added: src/icons/0164_phoneDownCurvedArrow_i.svg

## v1.3.1 - 8/03/2017

* Icon Added: src/icons/0139_phoneDown_a.svg

## v1.3.0 - 8/02/2017

* Icon Added: src/icons/0161_microphone_a.svg
* Icon Added: src/icons/0161_microphone_i_slash.svg
* Icon Added: src/icons/0150_videoCamera_i_slash.svg

## v1.2.4 - 7/24/2017

* Icon Added: src/icons/0160_arrowLeftarrowRight_i.svg

## v1.2.3 - 7/21/2017

* Icon Added: src/icons/0159_eye_i_slash.svg

## v1.2.2 - 6/15/2017

* Icon Updated: src/icons/0037_exclamation_i_lightCircleGray.svg
* Icon Updated: src/icons/0037_exclamation_i_heavyDiamondRed.svg
* Icon Updated: src/icons/0061_questionMark_i_diamond_light.svg
* Icon Updated: src/icons/0061_questionMark_a.svg,themeable

## v1.2.1 - 5/25/2017

* Icon Updated: src/icons/0147_circle_i_light.svg

## v1.2.0 - 5/23/2017

* Icon Added: src/icons/0157_exclamation_i_lightCircleGray.svg
* Icon Added: src/icons/0158_pencilSquare_a.svg

## v1.1.0 - 5/18/2017

* Icon Added: 0156_questionMark_i_diamond_light.svg

## v1.0.0 - 3/28/2017

* Initial stable release