import os
from playwright.sync_api import sync_playwright

html_path = r'C:\Users\选择永恒\nexior-work\poster_45models.html'
out_path = r'C:\Users\选择永恒\Desktop\bigplayer_poster.png'

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(viewport={'width': 1080, 'height': 1350}, device_scale_factor=2)
    page = context.new_page()
    page.goto('file:///' + html_path.replace('\\', '/'))
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1500)
    page.screenshot(path=out_path, full_page=False)
    browser.close()

print(f'Saved: {out_path}')
print(f'Size: {os.path.getsize(out_path)} bytes')
