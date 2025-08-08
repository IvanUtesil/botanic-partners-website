# Botanic Partners Admin Interface

## Overview
The admin interface allows you to manage all content on the Botanic Partners website without editing code directly. All changes are saved locally and can be exported to update the main website.

## How to Use

### 1. Access the Admin Interface
Open `admin/index.html` in your web browser to access the admin dashboard.

### 2. Available Sections

#### Dashboard
- Overview of website statistics
- Quick action buttons to jump to different sections
- Generate Website button to export changes

#### Hero Section
- Edit the main hero title and subtitle (English & Czech)
- Update hero description
- Change hero background image URL

#### About Section
- Modify company title and subtitle
- Update lead text and company description
- Change about section image

#### Products Management
- Edit individual product details
- Update product names, descriptions, and images
- Modify product specifications (height, spread, growth rate)
- Available products: Standard Cherry Laurel, Dwarf Cherry Laurel, Premium Specimens

#### Contact Information
- Update phone number and email
- Modify business address (English & Czech)
- Change business hours

#### Settings
- Website title and meta description
- Default language setting
- Google Analytics ID

### 3. Making Changes

1. **Navigate** to the section you want to edit using the sidebar
2. **Modify** the content in the form fields
3. **Save** your changes using the "Save Changes" button
4. **Generate** the updated website using the "Generate Website" button

### 4. Data Storage
- All changes are automatically saved to your browser's localStorage
- Data persists between sessions
- No server required - everything works locally

### 5. Website Generation
- Click "Generate Website" to create an updated version of the main website
- The generated file will be downloaded as `index.html`
- Replace the existing `index.html` file with the generated version

## Features

### Bilingual Support
- All content can be edited in both English and Czech
- Language switching functionality preserved in generated website

### Real-time Preview
- Changes are saved immediately
- Use the "Preview" button to see how changes will look

### Product Management
- Individual product editing with modal interface
- Complete product specifications management
- Image URL updates

### Contact Management
- Business information updates
- Bilingual address and hours support

## File Structure
```
admin/
├── index.html      # Admin interface
├── admin.css       # Admin styling
├── admin.js        # Admin functionality
├── generator.js    # Website generation
└── README.md       # This file
```

## Technical Notes

### Data Storage
- Uses browser localStorage for data persistence
- No external dependencies or server required
- Data format: JSON structure with nested objects

### Website Generation
- Reads current website template
- Applies admin data changes
- Generates updated HTML with all modifications
- Downloads as new index.html file

### Browser Compatibility
- Works in all modern browsers
- Requires JavaScript enabled
- Local file access for template reading

## Troubleshooting

### Changes Not Saving
- Check that JavaScript is enabled
- Try refreshing the page
- Check browser console for errors

### Generate Button Not Working
- Ensure you're running from a web server (not file://)
- Check browser console for CORS errors
- Try using a local development server

### Data Loss
- Admin data is stored in browser localStorage
- Clear browser data to reset all changes
- Export data regularly for backup

## Next Steps
1. Customize the admin interface styling
2. Add more sections (Services, Footer, etc.)
3. Implement server-side storage
4. Add user authentication
5. Create backup/restore functionality 