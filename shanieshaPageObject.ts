import {By} from "selenium-webdriver"
import { BasePage } from "./shanieshaBasePage"

export class Page extends BasePage {
movieTab: By= By.xpath ('//a[@id="mvl-flyout-button-3"]') 
marvelPic: By= By.xpath ('(//img[@class="card-thumb-frame__thumbnail"])[31]')
latestNews: By=By.xpath ('(//a[@class="card-overlay"])[9]')
comic: By=By.xpath ('(//a[@id="mvl-flyout-button-1"])')
stormPic: By=By.xpath ('//img[@title="Storm #2 "]')
zip: By=By.xpath ('//input[@id="input-zipcode"]')
findStore: By=By.xpath ('//button[@class="cta-btn cta-btn--outline cta-btn--dark"]')
kangDynasty: By=By.xpath ('(//img[@class="card-thumb-frame__thumbnail img__blur"])[2]')
kangDate: By=By.xpath ('(//div[@class="featured__data__copy"])') 
moreTab: By=By.xpath ('(//a[@id="mvl-flyout-button-7"])')
lifestyle: By=By.xpath ('//a[text()="Lifestyle"]')
howToDraw: By=By.xpath ('(//img[@class="card-thumb-frame__thumbnail"])[32]')





constructor() {
    super({url:"https://www.marvel.com/"})
}

async repeatClick(num, elementBy) {
    for (let i = 0; i < num; i++){
        await this.click(elementBy)
    }
}
async switchTabs() {
    let currentTabs = await this.driver.getAllWindowHandles();
    await this.driver.switchTo().window(currentTabs[1])
    await this.driver.sleep(1500);
    await this.driver.close();

    await this.driver.close();
    await this.driver.switchTo().window(currentTabs[0]);
}
}
