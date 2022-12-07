# One Cerner Style Icons
 One Cerner Style Icons are the official icons from Cerner for use in Healthcare IT solutions. These icons are not intended to be consumed directly, but through its companion repo of Terra here  https://github.com/cerner/terra-core

 ## JSON Schema

 The accompanying `src/CernerOneIcons.json` file is intended to be a programmatically consumable source of truth for Oracle Cerner's icon imagery, corresponding aliases, and usage thereof. This section explains the structure and usage of that file so it may be more easily updated.

 ### Overview

 At the highest level, the schema is a list of icon images each with a list of corresponding aliases by which the images are consumed.

 **Image:** Each image has the following properties:
 - `descriptiveName` - A name for presenting the icon image in documentation. It is often, but not necessarily, the same as one of its aliases.
 - `fileName` - The name of the SVG file in the `src/icons/` directory of this repository.
 - `searchTerms` - An array of terms that a user can use to search for the icon. Please see the Search Terms section below for more details on how these work.
 - `restricted` - used for regulatory or otherwise restricted icons. Icons with this designation should not appear in general documentation. This is on the image rather than the alias because there should never be an icon image that has restricted and general use purposes.
 - `aliases` - the alias objects used to consume the icon. There should be one for each intended purpose of the icon. The advantage of this is that it decouples implementation from the imagery so User Experience can update icons as required which can then be passively adopted in consuming products.
 - `secretAliases` - the same as `aliases` but will not appear in general documentation. Used for aliases that are marked for deprecation or otherwise need to be available for developers without encouraging new use.

**Alias** The aliases used to consume the icons. Each with its own discrete meaning and usage. An alias (or secret alias) has the following properties:

- `alias` - The alias that will be used to consume the icon. In Terra, these will be prefixed with `Icon` or `RestrictedIcon` in Terra. For Example, an alias with `"alias": "Manufacturer"` would be imported from Terra Icon as `IconManufacturer` or, if the image has `"restricted": true`, it would be imported as `RestrictedIconManufacturer`
- `usage` - this is a free text field that can optionally give guidance on how to use the icon/alias.
- `sets` - 
- `isAction` - whether the icon can be used to perform an action
- `isStatus` - whether the icon can be used to indicate a status
- `isToggle` - whether the icon is part of a toggle set.
- `isInteraction` - whether the icon can be used to indicate interactivity
- `isColorable` whether the icon has elements that can be colored dynamically by changing its container's `color` property.
- `isLabelRequired` - whether the icon needs to be used with a label
- `isBidirectional` - whether the icon is bidirectional

### Search Terms

The Search Terms list defines terms that can be used to filter icons based on a user defined search string. Similar terms are grouped into subarrays so when substrings match, users aren't shown basically the same word several times.

Search terms should include:
- Aliases
- Secret Aliases
- Visual descriptors or shape or image
- Colors used in the icon
- Names of sets the icon's aliases belong to
- Any other relevant terms you think might be useful in finding the icon

### Validating

It's very important that there be no overlap in aliases for these icons. Before committing changes to `/src/CernerOneIcons.json`, be sure to run the following command for this repo:

`npm run validate-json`

and fix any collisions it finds.

Be conscious of using terms that describe incorrect uses of the icon as this may be misleading.

## CSV File (deprecated)

The accompanying .csv file (deprecated) is used to identify:

* the icon's concept name
* the location of the icon's SVG file
* whether the color of an icon is static or themeable
* which icons change with bi-directionality

Copyright © 2017 - 2022 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
