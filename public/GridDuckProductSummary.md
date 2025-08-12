



Product Summary


Introduction	3
Key Features	3
Dashboard Features	5
Navigation & Toolbars	5
Summary Page (Widget Board)	8
Data Page	10
Automated Reports	12
Alerts (Template)	13
Alerts & Automations (Templates)	14
Automations (Advanced)	15
Data Downloads	16
Data Uploads (beta)	17
Custom Data Categories, Types & Unit Systems	18
Organisation Management Suite	19
Client Management Suite	21
Tariffs	22
File Manager	23
Site Sharing & Permissions	24
Invoices	25
Custom Fields / KPIs	26
Device Categories	27
Notification Center	28
Device Issue Management	29
Accessibility	30
AI Anomaly Detection (beta)	31
gaia - GridDuck AI Assistant (pre-alpha)	32
Install Audit Management	33
Site & Device Management	34
Automated Billing	35
Modbus Model Management	36
API Integration Management	37
Multi-Factor Authentication	37
Installer App Features (Mobile IOs/Android)	38
GridDuck Admin Dashboard (Internal)	39
Supported Data Ingestion Integrations	40
Via GridDuck Hub	40
Via Cloud	40
Pricing	42
Competitor Comparison	43
Example Case Study	44
58% reduction at a fridge factory	44
Road Map	45
Testimonials	46

Introduction
Product Overview Brochure


GridDuck is a comprehensive energy management ecosystem designed to empower organisations to monitor, analyse, and control their energy usage across large multi-site portfolios. Our solution combines powerful functionality with user-friendly design, making it suitable for both energy experts and novices.
All GridDuck’s technology has been designed and developed in-house.
Key Features
Intuitive Dashboard: Our online dashboard offers real-time monitoring and control of energy usage, with unlimited historical data access and granularity down to second-by-second intervals.
Versatile Data Handling: GridDuck can ingest, monitor, and control various data types and devices beyond just energy, making it a flexible solution for diverse management needs.
Automated Reports and Alerts: Set up customised reports and alerts to stay informed about your energy usage patterns and anomalies.
AI-Powered Insights: Leverage our AI Anomaly Detection and AI Assistant (gaia) for advanced insights and automated issue identification.
Scalable Architecture: Whether you're managing a single site or a complex multi-client portfolio, GridDuck's architecture can handle your needs.
Extensive Integration Capabilities: With support for various protocols (Modbus, M-Bus, BLE, Zigbee) and cloud integrations (NB-IoT, AMR, REST APIs), GridDuck easily integrates with your existing infrastructure.
White Label Options: Customise the dashboard with your own branding for a seamless client experience.
Mobile Installer App: Streamline the installation and auditing process with our dedicated mobile app for iOS and Android.
GridDuck is more than just an energy management tool – it's a comprehensive solution that helps organisations optimise their energy usage, reduce costs, and move towards more sustainable operations. Whether you're a small business or a large enterprise, GridDuck provides the insights and control you need to make informed decisions about your energy consumption.
The product can be broken down into these core components:
GridDuck Dashboard (User facing)
Monitor & Analyse Data
Remote Control & Automations
Organisation & Client Management
Data Handling & Analysis
Device Status Management
Installer App (User facing)
Easily add 3rd party hardware (QR code scanner)
Generate install audit of device statuses
Control & Manage device information
GridDuck Dashboard (Internal)
Client Management
Testing & Debugging
Hardware Management
GridDuck's platform is built on key components that work together to create a flexible and scalable energy management system:
Device: Any data point from either hardware or software.
Hub: This is GridDuck’s hardware used to monitor & control 3rd party hardware to the GridDuck servers.
Device Group: A collection of devices, used for easier data viewing and management.
Site: A collection of devices or data points typically a physical location.
Site Group: A collection of sites, used for easier data viewing and management.

Dashboard Features
dashboard.gridduck.com

The GridDuck dashboard is the core component of the GridDuck product. It’s where the user will be able to achieve all their goals from understanding more about their usage to actioning the solutions through monitoring and control automations.
Navigation & Toolbars
The core philosophy of the navigation of the dashboard is that the central view selected persists as you change which item you’re viewing either via the left navigation or the global search.
Left Navigation Panel
This is where you can both access the various features of the dashboard as well as your portfolio.

In the top section you can access features of the dashboard:
AI Alerts (Beta)
Reports
Alerts
Automations
Data Downloads

This section can also collapse to allow more space for viewing your portfolio.

In the bottom section you can access your portfolio without having to leave the page you are on. This also comes with its own set of customisations and functionality:
Group By (Site Groups, Device Groups & Clients): Changes what you see at the top level on the list. Allowing you to get overviews of data at this level.
Drill Down: Open up top level groups of devices and sites to navigate to the devices and sites within.
Issue Management: Alert you as to any issues your device may have at a glance.
Search: Filter the items with text search.
Resize: Click and drag the right edge to widen/narrow the view.
Top Navigation Bar
Bread Crumbs: Keep track of where you are in the dashboard and navigate back to higher levels.
Global Search: Search for and navigate to anything in the dashboard.
+ New Button: Where you can add:
Portfolio
Devices
Hubs
Sites
Site Groups
Device Groups
Behaviour
Alerts
Automations
Data Export
Report Schedules
Data Downloads
Organisation
Members
Partner Organisations
Other
Tariffs
Custom Fields
Notifications: Get a quick glance at any notifications you’ve missed since last on the dashboard.
Device Issue: Get a quick glance at any device issues.
Account Menu: Where you can access:
Settings
Dark/Light Mode
Theme
Organisation
Developer
Admin Console (Internal only)
API URL (Internal only)
Logout

Persistent Tabs
All pages are broken down into subpages, some of which are shared between items (e.g. summary, data page, settings etc.). When navigating by the left navigation or global search the sub page you are on will persist updating the information accordingly, eliminating the need to click back and forth.
Summary Page (Widget Board)
This is where the user can get a general overview of their usage. The layout and widgets the user chooses are fully customisable.

There is a separate board that exists for every separate device, device group, site, site group & client. The available widgets are generated based on what data the relevant item has available.


Key Features
Widget board: A customisable page of data widgets
Edit widget board: Customise the visible widgets and their layout.
Auto Layout: Intelligently layout the items in the most legible format based on selected widgets.
Add/Remove Columns: Edit the number of columns to suit your needs.
Select Widgets: Select which widgets you would like to appear on the board.
Date Range Selection: Select any custom range of data to view.
Compare Date Range Selection: Select any custom range of data to view.
Display any data: From utility (electricity, gas, water etc.) to sensor data (temperature, humidity, occupancy etc.)
Widgets
Total: Total usage with percentage change.
Spend: Total spend with percentage change and breakdown of usage / standing charge.
Historic: Usage over time as line graph.
Day of Week: The average weekly profile by day over date range.
Hour of Day: The average daily profile by hour over date range.
Site Breakdown: The top five most consuming sites.
Device Breakdown: The top five more consuming devices.
Category Breakdown: Top five most consuming categories (customly created and assigned, e.g. Ventilation, Heating etc.)

Data Page
A page dedicated to drilling down and gaining detailed insights about your usage. The available graphs and features were born out of extensive user testing and market research. The goal being to offer everything needed without overwhelming the user with unnecessary complexity & functionality.


Features
Data Category / Type Selection: Able to display any data type.
Date Range Selection: Select any custom range of data to view.
Compare Date Range Selection: Select any custom range of data to view.
Granularity Selection: Select the frequency of the data, as low as second by second granularity.
Graphs
Line Graph: For viewing historic instantaneous data.
Total / Breakdown: View all items as a single value or each value separately.
Data Format: View the data format as (Average, Maximum or Minimum)
Bar Graph: For viewing historic aggregate data.
Day of Week: The average weekly profile by day over date range.
Hour of Day: The average daily profile by hour over date range.
Site Breakdown: Data broken down by site totals.
Device Breakdown: Data broken down by device totals.
Real-Time
Historic
Category Breakdown: Data broken down by category totals (customly created and assigned, e.g. Ventilation, Heating etc.)
Heatmap: Data displayed as a day by hour grid with a temperature colour. Used to identify peak hours of usage.
KPIs:
Total Usage
Spend
Average Usage
Min Usage
Max Usage
Custom KPIs: Through the use of custom meta data on sites you can create your own KPIs. E.g. Usage per square Ft
Overlays:
External Temperature:  For a site view you can overlay the MET office temperature based on the sites’ address
Occupancy Schedule: Able to overlay the occupancy hours of a site on the line graph. Can be set as a custom value in the site settings.
Zoom & Enhance: Click and drag over any line graph to zoom in to that time period. The data will then reload at a smaller granularity.
Dynamic Legend: Based on the number of items being displayed the legend will dynamically fill less space to ensure a cleaner experience.
Automated Reports
Set up automated reports for any collection of devices or sites. Once a week or month get a PDF emailed with an overview of your usage sent to whatever relevant parties.


Key Features
Automated Email: Receive emails containing PDFs of your usage containing:
Total Usage or Spend
A quick overview of the key takeaways. E.g. Device x used the most at 800KWh.
Hour of Day Average
Weekly:  Day of Week Total, Monthly: Day of Week Average
Site Breakdown Graph
Device Breakdown Graph
Comparison to previous week/month
PDF Viewer: View every historic PDF from within the GridDuck dashboard.
Manage recipients: Update who will receive all future emails at any time.
Temporarily disable: Temporarily stop the reports from being generated.
Share: Generate a link that can be set to expire at a time of your choosing used to download the PDF.
Download: Download the PDFs at any time from within the dashboard.
Per Device / Bundle: The ability to also request a single PDF containing all separate device level reports as well as a total summary report for all combined.
Alerts (Template)
Create email & in-dashboard alerts to inform you of changes of any data. A simple interface for creating a common use case with the powerful GridDuck rules engine.


Key Features
Specific Times: Only trigger alert if the change falls within a specific set of times and days of week.
Any data: Monitor any type of data instantaneous or aggregate over time.
Separate or Inclusive: Trigger alert if any of the data points or if all the data points collectively go above or below a threshold.
Manage Recipients: Manage who receives email notifications.
Sub-second: Alerts can be triggered within a second of the physically recorded change.

Alerts & Automations (Templates)
Intuitive templates allow the creation automations to control devices based on time or changes to data. A set of simple interfaces for creating common use cases with the powerful GridDuck rules engine.


Timeswitch
Set devices to be on/off or any other state during recurring weekly times or specific one time events.
Key Features
Control: Set devices to any state (on, off, charge, discharge etc.)
Recurring Schedule: Create complex schedules that repeat weekly.
One-time Event: Set multiple specific future events to trigger at given dates and times.
Multiple Devices: Control multiple devices from a single automation rule.
Instantaneous & Stable: Because our rules are handed at the hardware level on the GridDuck hubs it means that the control is instantaneous and also not dependent on an internet connection.
Virtual Thermostat
Control any device in response to a change in data. For example turning simple electric heaters into smart thermostatic ones by combining data from a temperature sensor and a control device.
Key Features
Control: Set devices to any state (on, off, charge, discharge etc.)
Any Data: Respond to changes in any instantaneous data.
Separate or Inclusive: Trigger alert if any of the data points or if all the data points collectively go above or below a threshold.
Multiple Devices: Control multiple devices from a single automation rule.
Instantaneous & Stable: Because our rules are handed at the hardware level on the GridDuck hubs it means that the control is instantaneous and also not dependent on an internet connection.
Automations (Advanced)
A fully capable IFTTT (If this, then that) system, allowing you to create incredibly intricate and complex sets of rules. If you can think of it you can probably do it.


Key Features
Possible Triggers
Data: Data above/below threshold
Rule: Another rule triggering a certain behaviour
Possible Actions
Control: Set devices to any state (on, off, charge, discharge etc.)
Notification: Receive an email and dashboard notification
Trigger rule: Trigger another action or rule
Any Data: Respond to changes in any instantaneous data.
Separate or Inclusive: Trigger alert if any of the data points or if all the data points collectively go above or below a threshold.
Multiple Devices: Control multiple devices from a single automation rule.
Recurring Schedule: Create complex schedules that repeat weekly.
One-time Event: Set multiple specific future events to trigger at given dates and times.
Instantaneous & Stable: Because our rules are handed at the hardware level on the GridDuck hubs it means that the control is instantaneous and also not dependent on an internet connection.
Data Downloads
Download your data from any group of devices or sites at any time range and granularity as a CSV for use in other platforms.


Key Features
Any Data Type: Download any type of data, instantaneous or aggregate.
Multiple Sites & Devices: Download data from multiple sources in one download.
Any Range: Download data from any time range, no matter how large or far in the past.
Any granularity: Download data at any granularity, down to second-by-second.
Download: Access previous data downloads from the dashboard and download them at any time.
Share: Generate a shareable link to your data that can be set to expire whenever you want.
Data Uploads (beta)
Powerful tool for uploading data from CSVs. The tool automatically detects columns and is capable of ingesting almost any layout. Any data can be uploaded whether utility or custom data types (e.g. Screws manufactured per hour).


Key Features
Saveable Templates: Save the table layout and data type configuration for future uploads.
Multi-Upload: Upload multiple CSVs at the same time, even if they contain different data in different layouts.
Header/Headerless: Compatible with CSVs with both headers and no headers.
Multiple Data Types: Capable of ingesting multiple data types in a single upload.
Any Data Type: Upload any data type, whether utility or a custom of your own creation.
Any Unit System:  Upload any unit system, whether utility or a custom of your own creation (dimensionless, metric or non-metric).
Any Date format: Upload dates either across multiple columns or in any string format or Unix timestamp.
Any Table Layout: A flexible system designed to allow for tables laid out in any manner or way.
Attach to anything: Upload the data for devices (e.g. electricity meter), sites (e.g. footfall), whole organisation (e.g. total revenue).
Preview: Preview your data before committing it to be uploaded.
Custom Data Categories, Types & Unit Systems
Create any custom data categories, types and unit systems. Viewable for comparison and analysis from the summary and data page on the dashboard.


Key Features
Data Category: The category to which the data belongs (e.g. Production, Electricity etc.)
Icon & Color: Give the category its own custom icon and colour that will be represented in all data and summary pages across the dashboard.
Data Type:  The aggregate or instantaneous data type that belongs to a category (e.g. screws produced, current etc.)
Unit System: The unit system of measurement that belongs to one or many data types (e.g. KW, A, Screws etc.)
Aggregate or Instantaneous
Unit Types
Dimensionless: Discrete objects or elements (e.g. Item/Items)
True/False: Two state conditional value (e.g. Open/Closed)
Categorical: Predefined categories with IDs (e.g. 1 = Produce, 2 =  Shipping)
Metric: Base-10 structures units (e.g. meters (m), liters (l)).
Non-metric: Diverse, historically derived units with inconsistent conversion factors and varying base numbers (e.g. inches (in), pounds (lbs)).
Organisation Management Suite
A suite of tools for the purposes of managing your white label, partner organisation, user invitations, your organisation's users and their permission levels.


Members
Manage your dashboards organisation members.

Overview: Get an overview of the users information (name, email etc.)
Organisation Permissions: Manage the users access to your organisation and everything it has access to.
Owner: Delete and change the permission levels of other users.
Admin: Create or delete any item in the dashboard.
Edit: Edit the details of any item.
Boost/Snooze: Has view access to all items, but can set controllable devices to turn on or off for a set amount of time (e.g. Off for one hour).
View: Can view items and data but do nothing else.
Site Permissions: Limit the users access to selected sites and the permission level they have to each site.
Admin: Delete the site.
Edit: Edit any site details.
Boost / Snooze: Can set any controllable device to a specific state for a limited interval (e.g. Off for one hour).
View: Can view all details and data but nothing else.
Activity Monitoring: Keep track of when people last logged in, or if they’re currently online.
Logout Everywhere: Log out a user from every computer.
Invites without limits: GridDuck does not charge per seat, so you can add as many users as you like at no extra charge.
White Label
Set up your own custom branding on the dashboard.



Custom Logo: Add a custom logo both in long form and square format.
Custom Colour: Add your custom brand colour.
Full Coverage: We’ve ensured that your branding will appear anywhere GridDuck’s previously appeared, including the dashboard, all emails & report PDFs.
Easy set up: The logo and colour can be set up from within the dashboard at any time.
Custom Domain: Host the dashboard either on your own gridduck domain (e.g. company-name.gridduck.com) or on your own domain.
Partners (Clients)
Invite and manage your clients. This will allow you to manage their access and curate their experience. (Read more in Client Management)
Partners (Installers)
Invite and manage your installers. This will give these organisations a special permission level allowing them to easily install hardware via the GridDuck Installer App.

Client Management Suite
Give your client their own dashboard curated and managed by you. The intuitive clean interface makes the dashboard suitable for all levels of expertise in energy and data management.

Site managers can view only the sites and users relevant to them whilst you manage all their sites and users. Compare branches and client performance to give more informed insights and create branch energy rankings.


Key Features
White Label: Your client can either inherit your organisation's white label or you can give them one of their own.
Client View: Navigate the dashboard as your client, allowing you to manage and curate every aspect of their experience.

Tariffs
Add multi-rate utility tariffs for any utility to then display utility spend on data pages and report PDFs.


Key Features
Multi-rate: Tariffs can support up to forty-eight, thirty minute tariffs periods within a single tariff.
Standing Charge: Apply a standing charge.
Currency: Supports multiple currencies.
Multi-site: Add a tariff to as many sites as you want.

File Manager
Upload files related to your site (e.g. images or machines, certificates etc.).


Key Features
Multi-Upload: Upload multiple files at once.
Multi-Download: Download multiple files at once.
File Support: Supports almost any file type (images, videos, PDFs, Word Docs, PowerPoint Docs etc.)
Notes: Rename and add notes to your files.
Search: Search for your files by name or notes.

Site Sharing & Permissions
Share your sites with other organisations on the platform.


Key Features
Multiple Permission Levels
Admin: Delete the site.
Edit: Edit any site details.
Boost / Snooze: Can set any controllable device to a specific state for a limited interval (e.g. Off for one hour).
View: Can view all details and data but nothing else.

Invoices
Generate fully customisable invoice of your utility usage.


Key Features
White Label: Add your organisation’s logo.
Fully Customisable: Add/remove whatever information you require (e.g. VAT ID, notes etc.)
Preview: Preview your invoice layout in real-time before committing to generating it.
Download: Download your historic invoices at any time from the dashboard.
Share: Generate a link that can be set to expire at a time of your choosing used to download the PDF.

Custom Fields / KPIs
Add any custom text or numerical metadata to sites for use in generating custom KPIs on data pages (e.g. Usage per square ft of building).


Key Features
Icon & Color: Give the custom field its own custom icon and colour that will be represented in the data pages of the dashboard.
Types
Text: Text metadata (e.g. region, restaurant type etc.).
Number: Numerical metadata (e.g. floor area (m2), students etc.).

Device Categories
Give your devices (meters, machines, circuits etc.) a custom category that acts as a means of grouping your usage.


Key Features
Icon & Color: Give the category its own custom icon and colour that will be represented in the data pages of the dashboard.
Category Breakdown: On both the widget board and the data page you can view a graph showing the total usage over any given time period of each category (e.g. Heating, Cooling,  Ventilation etc.).

Notification Center
Keep up to date with user activity, issues, custom & automated alerts.


Key Features
Notifications
Create, Update & Delete
Site
Hub
Device
Group
Report
Alert
Info
Your report is ready
An alert has triggered
A site has been shared with you
Warning
Device has low battery
Device has an intermittent connection
Error
Device has become disconnected
User Tracking: See who is doing what from the details section.
Browser Notification Sound: A distinct sound will play when you get a notification.
Quick View: Get a quick glance at the notifications you’ve missed in the top navigation bar.
History: View the entire history of notifications in the notification history panel.
Filtering: Filter the notifications by type (info, warning & disconnection).
Mute / Unmute: Mute or unmute your dashboard notification sound.
Device Issue Management
Monitor your field devices' status in real-time, enabling early detection and resolution of potential issues before they escalate.


Key Features
Universal Access: Everywhere a site, site group or device name is shown on the dashboard you can hover over the ! icon to get an overview of the issues. Clicking this will open the device issues panel.
Dynamic Panel: The device issues panel operates alongside the main dashboard, enabling swift problem diagnosis without disrupting your workflow.
Issue Types
Disconnection
Intermittent connection
Low battery
Low signal
Alerts: Receive email/dashboard alerts at set intervals informing you of any new issues.
Ignore: Mute alerts for specific devices to focus on relevant notifications only.
Search: Search issues by site, device or hub name.
Item Filter: Filter issues by site, site group, device group, device, hub & client.
Type Filter: 
Accessibility
Tools that allow you to customise the look and feel of your experience.


Key Features
Light/Dark Mode: 
Themes: Choose from a set of existing themes or create your own with custom colours for both light and dark modes of:
Buttons & input borders
Navigation background
Navigation text
Borders
Navigation list item hover
Navigation list item select
Main list item hover
AI Anomaly Detection (beta)
AI and machine learning that automatically detects behaviour out of the ordinary in the users data.


Key Features
Fault Detection: If a machine seems to slowly degrading over time (e.g. HVAC degradation)
Equipment Failure: If a circuit or machine has a sudden change (e.g. machine trips a circuit breaker)
Unusual Usage Detection: If it appears as though the usage is unusual for the time period (e.g. fridge door left open, equipment left on out of hours)
Status: Set your anomaly as new, flagged or resolved.
Snapshot: See exactly where in your data the anomaly was triggered and where it was expected to be in relation.
Model Analysis: View the full expected range of behaviour of your data.
Adaptive AI: Tell the AI if you want to keep detecting the specific anomalies it found and it will learn your needs.
gaia - GridDuck AI Assistant (pre-alpha)
The GridDuck energy AI assistant that is able to assist you on any questions or issues regarding your data or dashboard experience.

Created by combining the users data with machine learning and a large language model.


Key Features
Conversational Insights: Ask for insights specific to your data and industry.
AI Reports: Generate out of hours usage reports with predictions for saving amounts based on tariffs.
Enable Upselling to your Clients: The AI will make suggestions for further sub-metering and/or control and automation where relevant.
GridDuck Expert: The AI will also be an expert in using GridDuck itself and can act as customer support for the dashboard and installer app.
Install Audit Management
View the audits installers have generated at the point of install with the GridDuck installer app. The audit manager allows you to see every aspect of your site, devices and hubs at the point of the audit creation.



Site & Device Management
All items managed on GridDuck have the same format of settings tabs. The main ones are listed as follows:



Site
Details: All of the top level information about the site (name, address, occupancy schedule etc.)
Custom Fields: Manage the values of which custom fields are applicable to the site.
Tariffs: Add and remove tariffs to your site. You can have one tariff per utility type per site.
Access: Manage which other organisations have access to your site.
Phase Audit: If your site contains a three phase supply you can carry out a phase audit
Family Tree: Manage the nested structure of your meters and circuits, this allows the data to be representative of the total (e.g. Mains Meter > Lighting Circuit > Back Room Lights)
Device
Details (General): All the top level information about the device (name, device label, device category, load type etc.)
Details (Advanced): Gives the user the ability to move the device to another hub or site.
Event Log: An event log of all the actions that have occurred since the device was first connected (connected to hub, updated etc.)

Automated Billing
GridDuck can handle automated payments (Debit Card & BACS Direct Debit), managed from within the dashboard.


Key Features
Integrated with:
Stripe
Xero
Payment Methods
Debit Card
BACS Direct Debit
Subscriptions: Automatically charge customers on a subscription basis
Manage from Dashboard: Track your current subscription broken down by device and also your previous invoices from within the dashboard.
Modbus Model Management
Manage your own custom Modbus Models to be easily reused at the point of install from the GridDuck Installer App.



API Integration Management
gridduck.com/developer
Create and manage your API access for your own applications.


Multi-Factor Authentication
Add an extra layer of protection to your GridDuck Dashboard account, making it significantly harder for unauthorised users to gain access.


Installer App Features (Mobile IOs/Android)
Android App / iOS App

The GridDuck Installer app is designed to streamline the process of managing and integrating third-party hardware devices into the GridDuck energy management platform, enabling efficient on-site installation and configuration.


Key Features
Scan to Add: If the device has a QR or barcode you can use your phone camera to add the device saving a great deal of time.
Low Friction: The carefully considered design allows for an installer to quickly install several devices with very little time in between.
Audits: Once the install is complete the installer can create an audit of the site. This submits and saves the current state of everything in the site along with a note from the installer.
File/Photo Upload: Quickly take photos of boards and machinery and upload them to the GridDuck file manager.
GridDuck Admin Dashboard (Internal)
The GridDuck internal dashboard is a comprehensive management tool designed for GridDuck's internal operations.

Key Features
Hardware Management: Overseeing and controlling GridDuck's hardware infrastructure.
Client Management: Managing client accounts, permissions, and interactions.
Data Administration: Handling and organising client data, ensuring data integrity and security.
System Monitoring: Tracking the performance and status of the GridDuck platform.
Troubleshooting: Identifying and resolving issues within the system or for specific clients.
Analytics: Providing insights into platform usage, client behaviour, and system performance.

Supported Data Ingestion Integrations
GridDuck has integrated with a wide range of protocols and APIs to ensure frictionless data collection or device control and retro-fit.
Via GridDuck Hub
Modbus
Modbus is a widely-used industrial communication protocol. 

GridDuck leverages Modbus to integrate with diverse building management systems, maximizing compatibility with existing infrastructure. This reduces implementation costs and complexity, making our solution attractive for buildings with legacy systems.
M-Bus (Meter-Bus)
M-Bus is a European standard for remote reading of utility meters.

This expands our market reach, enabling comprehensive energy monitoring in multi-tenant buildings and large facilities with minimal additional hardware.
BLE (Bluetooth Low Energy)
BLE is a wireless personal area network technology designed for short-range communication.

This allows us to offer flexible monitoring solutions using battery-operated sensors, ideal for retrofit projects or temporary installations with minimal infrastructure changes.
zigbee
Zigbee is a low-power, wireless mesh network protocol.

Its mesh networking ensures reliable communication in challenging environments, strengthening our position in commercial and industrial sectors.
Via Cloud
NB-IoT (Narrowband Internet of Things)
NB-IoT is a low power wide area network radio technology standard.

GridDuck's NB-IoT support extends our reach to remote locations and enables city-wide energy management. This positions us for the smart city market and allows monitoring of geographically dispersed assets.
AMR (Automatic Meter Reading) Meter Data
AMR is a technology for automatically collecting data from energy metering devices.

Integrating AMR data allows GridDuck to offer comprehensive multi-site energy consumption views. This capability is crucial for our enterprise clients, enabling centralised management and analysis of energy data across various locations.
REST APIs
REST APIs are a standard for creating web services.

GridDuck's REST API support ensures our platform remains open and interoperable. This allows easy integration with third-party applications, positioning our solution at the center of clients' broader energy and sustainability initiatives.
Power Radar (HTTPS)
Power Radar is a popular system for monitoring power quality and energy consumption with thousands of devices in the field across the UK.

This allows us to offer our premium dashboard offering to clients with large portfolios of sites without any need for retrofit or hardware installation.
Emlite Meter
Emlite produces smart energy meters for accurate consumption monitoring. 

GridDuck's Emlite meter integration provides high-accuracy, real-time energy data. This enhances our ability to deliver precise insights, crucial for optimising consumption and implementing complex tariff structures.
Pressac
Power Radar is a system for monitoring energy consumption.

Pressac sensors offer non-invasive installation without circuit interruption, ideal for large-scale retrofit energy management projects in occupied buildings.

Pricing
Pricing Sheet

Our pricing model encompasses both hardware and software. The hardware is a one off fee and the software a recurring monthly payment. Discounts are offered at scale and also for longer term upfront software payments.
Competitor Comparison



Versatile
End to end sub-metering
Smart
Control & automation
Modular
Only connect what you need
Universal
Connect to anything
Cloud-based
Fully remote

GridDuck










Demand Logic










Hark*










Dexma*










Wattics*










Infogrid










Fabriq*










EnerBrain










Measurable Energy










Panoramic Power* 










Traditional BMS












*Acquired

Example Case Study
All Case Studies
58% reduction at a fridge factory
The Manni polyurethane heating system was previously always-on.

Several conversations with maintenance and production teams led to an experiment (switch off over Christmas break).

Machine is now on a daily time switch Monday to Friday.
Result before and after

Week of energy usage before change

Week of energy usage after change

Road Map
We employ an agile approach to product development:
Gather market interest
Build Minimum Viable Product (MVP)
Refine offering based on client and market feedback
Our pipeline is regularly re-evaluated to capitalise on emerging large-scale opportunities.
Current Focus (Next 18 months)
With the onboarding of larger partners and their substantial portfolios, our priorities for the next 18 months are:
Client / Portfolio Management

Targets:  Enabled partners to set client/branch/site level targets to increase their client engagement.
Benchmarking: Allow partners to offer their clients clear insights as to how they are performing against other businesses of similar size and industry.
Branch Rankings: Empowers partners to easily see which of their clients branches need the most attention, as well as offer incentive schemes and competitions.
gaia (GridDuck AI Assistant): Provides AI chatbot for GridDuck technical/product support reducing their resources spent on supporting their clients.
Monitoring & Reporting

Carbon reporting: Either by uploading directly or generating based on energy usage, give insights as to tonnes of carbon consumed. Assists partners & direct clients in completing ESG compliance services.
Operational data support: Upload and analyse any operational data (e.g. Usage per item produced). Assists partners & direct clients in completing ESG compliance services.
gaia (GridDuck AI Assistant): Both offer their clients additional AI energy insights and reporting as well as use gaia to gather their own insights for use in consultation.

In the design and development process, we ensure that these tools are suitable for both direct GridDuck customers and partner clients, where applicable. This ensures that we can cut down on product bloat and complexity.
Testimonials
EC Drummond farms
Alun Howard, Finance Director

“We have installed GridDuck on several of our fruit and poultry sites, and as a result we can easily monitor, manage and analyse our energy usage. 

Staying on top of our energy consumption is more crucial than ever. GridDuck provides the platform to help us do that.”
National Highways
Kevin Denney, Energy Strategy Manager

“GridDuck provides us with the additional granularity of our electricity consumption data and we need that for our carbon reporting, but also to be able to identify improvement opportunities in our operations. 

We recently moved and made a point of ensuring GridDuck was installed as part of the fit-out.”
Go-Ahead Ireland
Chris Stringer, Head of Engineering

“We chose GridDuck because we wanted to reduce our outgoings and build a greener brand.  

We have set a target of reaching net zero emissions by 2035, so efficiency is a big focus for us moving forward.“
London Cocktail Club
Andy Walsh, Energy Consultant

“The dashboard is a dream to set up and breaks up consumption into simple elements, making it easy to cut down. 

Overall, the system is amazingly user-friendly. “
Pomona Farm
Julian Cotton, Director

“I could see exactly how much energy my farm and cold stores were using. 

The data showed me that I was wasting loads in my refrigeration, allowing me to make huge savings.”


