from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # 1. Homepage
    print("Visiting Homepage...")
    page.goto("http://localhost:3000")
    # Check for the main page heading (H2)
    expect(page.get_by_role("heading", name="Mentat Commons", level=2)).to_be_visible()
    expect(page.get_by_text("Axis I — Systems & Decision Design")).to_be_visible()
    expect(page.get_by_text("Training & Capability Building")).to_be_visible()

    # Screenshot homepage
    page.screenshot(path="verification/homepage.png")

    # 2. Navigate to Axis I
    print("Navigating to Axis I...")
    # Navigate using the link in the card
    page.click("text=Explore Axis I →")
    expect(page).to_have_url("http://localhost:3000/axis-i")
    expect(page.get_by_role("heading", name="Systems & Decision Design")).to_be_visible()
    expect(page.get_by_text("Core areas of work")).to_be_visible()

    # Screenshot Axis I
    page.screenshot(path="verification/axis-i.png")

    # 3. Navigate to a subpage
    print("Navigating to Subpage...")
    # Click the AI/ML card
    page.click("text=AI / ML & Data Consulting")
    expect(page).to_have_url("http://localhost:3000/axis-i/ai-ml-data-consulting")
    expect(page.get_by_role("heading", name="AI / ML & Data Consulting")).to_be_visible()

    # Screenshot subpage
    page.screenshot(path="verification/subpage.png")

    # 4. Navigate to Training
    print("Visiting Training...")
    # Use the nav link or just go there
    page.goto("http://localhost:3000/training")
    expect(page.get_by_role("heading", name="Training & Capability Building")).to_be_visible()
    expect(page.get_by_text("Explore Decision & Learning Labs →")).to_be_visible()

    # Screenshot Training
    page.screenshot(path="verification/training.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
