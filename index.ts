/*
 * Copyright (c) 2024 anqisoft@gmail.com
 * ts_selenium/index.ts
 *
 * <en_us>
 * Creation: January 17, 2024 08:20:18
 * Function: Provide the basic functions of Selenium
 * </en_us>
 *
 * <zh_cn>
 * 创建：2024年1月17日 08:20:18
 * 功能：提供selenium基本功能
 * </zh_cn>
 *
 * <zh_tw>
 * 創建：2024年1月17日 08:20:18
 * 功能：提供selenium基本功能
 * </zh_tw>
 *
 * @see https://github.com/SeleniumHQ/selenium
 * @see https://www.npmjs.com/package/selenium-webdriver
 */

// Browser
import { Builder, By, Key, until, WebDriver, WebElement } from 'npm:selenium-webdriver';
export { Builder, By, Key, until, WebDriver, WebElement } from 'npm:selenium-webdriver';

// Attention: without opera.js, but has chromium.js.
// import * as opera from 'npm:selenium-webdriver/opera.js';

import * as chrome from 'npm:selenium-webdriver/chrome.js';
import * as ie from 'npm:selenium-webdriver/ie.js';
import * as edge from 'npm:selenium-webdriver/edge.js';
import * as firefox from 'npm:selenium-webdriver/firefox.js';
import * as opera from 'npm:selenium-webdriver/chromium.js';
import * as safari from 'npm:selenium-webdriver/safari.js';
import * as chromium from 'npm:selenium-webdriver/chromium.js';

export * as chrome from 'npm:selenium-webdriver/chrome.js';
export * as ie from 'npm:selenium-webdriver/ie.js';
export * as edge from 'npm:selenium-webdriver/edge.js';
export * as firefox from 'npm:selenium-webdriver/firefox.js';
export * as opera from 'npm:selenium-webdriver/chromium.js';
export * as safari from 'npm:selenium-webdriver/safari.js';
export * as chromium from 'npm:selenium-webdriver/chromium.js';

/**
 * 	<en_us>browser name</en_us>
 * 	<zh_cn>浏览器名</zh_cn>
 * 	<zh_tw>瀏覽器名</zh_tw>
 * @see https://www.npmjs.com/package/selenium-webdriver
 */
export enum BrowserName {
	Chrome = 'chrome',
	Ie = 'ie',
	Edge = 'edge',
	Firefox = 'firefox',
	Opera = 'opera',
	Safari = 'safari',
}

/**
 * <en_us>key value pair: browser name and corresponding driver</en_us>
 * <zh_cn>键值对：浏览器名称与相应驱动程序</zh_cn>
 * <zh_tw>鍵值對：瀏覽器名稱與相應驅動程序</zh_tw>
 */
export interface BrowserNameAndDriverPair {
	name: BrowserName;
	driver: WebDriver;
}

/**
 * <en_us>dictionary: browser name to the corresponding driver</en_us>
 * <zh_cn>字典：浏览器名称至相应驱动程序</zh_cn>
 * <zh_tw>字典：瀏覽器名稱至相應驅動程序</zh_tw>
 */
export interface BrowserNameAndDriverMap {
	[name: string]: WebDriver;
}

/**
 * <en_us>Get the driver of the Google Browser Unlike Google Browser Driver</en_us>
 * <zh_cn>获取无关谷歌浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關谷歌瀏覽器驅動程序</zh_tw>
 */
export async function getHeadlessChromeDriver() {
	return await new Builder()
		.forBrowser(BrowserName.Chrome)
		.setChromeOptions(new chrome.Options().headless())
		.build();
}
/**
 * <en_us>Get the IE browser driver</en_us>
 * <zh_cn>获取无关IE浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關IE瀏覽器驅動程序</zh_tw>
 */
export async function getHeadlessIeDriver() {
	return await new Builder()
		.forBrowser(BrowserName.Ie)
		.setIeOptions(new ie.Options().headless())
		.build();
}

/**
 * <en_us>Get the EDGE browser driver</en_us>
 * <zh_cn>获取无关Edge浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關Edge瀏覽器驅動程序</zh_tw>
 */
export async function getHeadlessEdgeDriver() {
	return await new Builder()
		.forBrowser(BrowserName.Edge)
		.setEdgeOptions(new edge.Options().headless())
		.build();
}

/**
 * <en_us>Get the driver of the Firefox browser</en_us>
 * <zh_cn>获取无关火狐浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關火狐瀏覽器驅動程序</zh_tw>
 */
export async function getHeadlessFirefoxDriver() {
	return await new Builder()
		.forBrowser(BrowserName.Firefox)
		.setFirefoxOptions(new firefox.Options().headless())
		.build();
}

/**
 * <en_us>Get the driver of the Ou Peng browser</en_us>
 * <zh_cn>获取无关欧朋浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關歐朋瀏覽器驅動程序</zh_tw>
 */
export async function getHeadlessOperaDriver() {
	return await new Builder()
		.forBrowser(BrowserName.Opera)
		.setOperaOptions(new opera.Options().headless())
		.build();
}

/**
 * <en_us>Get the Driver of the Apple Browser</en_us>
 * <zh_cn>获取无关苹果浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關蘋果瀏覽器驅動程序</zh_tw>
 */
export async function getHeadlessSafariDriver() {
	return await new Builder()
		.forBrowser(BrowserName.Safari)
		.setSafariOptions(new safari.Options().headless())
		.build();
}

/**
 * <en_us>Get the headless browser driver of the specified name</en_us>
 * <zh_cn>获取指定名称的无头浏览器驱动程序</zh_cn>
 * <zh_tw>獲取指定名稱的無頭瀏覽器驅動程序</zh_tw>
 *
 * @param name {BrowserName} <en_us>browser name</en_us><zh_cn>浏览器名称</zh_cn><zh_tw>瀏覽器名稱</zh_tw>
 * @returns <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 */
export async function getHeadlessDriver(name: BrowserName): WebDriver {
	switch (name) {
		case BrowserName.Chrome:
		default:
			return await getHeadlessChromeDriver();

		case BrowserName.Ie:
			return await getHeadlessIeDriver();

		case BrowserName.Edge:
			return await getHeadlessEdgeDriver();

		case BrowserName.Firefox:
			return await getHeadlessFirefoxDriver();

		case BrowserName.Opera:
			return await getHeadlessOperaDriver();

		case BrowserName.Safari:
			return await getHeadlessSafariDriver();
	}
}

/**
 * <en_us>turn to the corresponding website</en_us>
 * <zh_cn>转到相应网址</zh_cn>
 * <zh_tw>轉到相應網址</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param url {string} <en_us>URL</en_us><zh_cn>网址</zh_cn><zh_tw>網址</zh_tw>
 */
export async function navigateTo(driver: WebDriver, url: string) {
	await driver.get(url);
}

/**
 * <en_us>Double -click the specified element</en_us>
 * <zh_cn>双击指定元素</zh_cn>
 * <zh_tw>雙擊指定元素</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param element {WebElement} <en_us>element</en_us><zh_cn>元素</zh_cn><zh_tw>元素</zh_tw>
 */
export async function doubleClick(driver: WebDriver, element: WebElement) {
	await driver.actions({ bridge: true }).doubleClick(element).perform();
}

/**
 * <en_us>Send text to the specified element and press Enter</en_us>
 * <zh_cn>向指定元素发送文字并回车</zh_cn>
 * <zh_tw>向指定元素發送文字並回車</zh_tw>
 *
 * @param element {WebElement} <en_us>element</en_us><zh_cn>元素</zh_cn><zh_tw>元素</zh_tw>
 * @param content {string} <en_us>The text to be sent</en_us><zh_cn>所要发送的文字</zh_cn><zh_tw>所要發送的文字</zh_tw>
 */
export async function sendKeysAndReturn(element: WebElement, content: string) {
	await element.sendKeys(content, Key.RETURN);
}

/**
 * <en_us>Find elements (single) through CSS</en_us>
 * <zh_cn>通过css查找元素（单个）</zh_cn>
 * <zh_tw>通過css查找元素（單個）</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param css {string} <en_us>Find the style table used for a single element</en_us><zh_cn>查找单个元素所用的样式表</zh_cn><zh_tw>查找單個元素所用的樣式表</zh_tw>
 * @returns {Promise<WebElement>} <en_us>asynchronous object: element</en_us><zh_cn>异步对象：元素</zh_cn><zh_tw>異步對象：元素</zh_tw>
 */
export async function findElementByCss(driver: WebDriver, css: string): Promise<WebElement> {
	return await driver.findElement(By.css(css));
}

/**
 * <en_us>waiting for the elements corresponding to the specified style table to appear</en_us>
 * <zh_cn>等待指定样式表所对应的元素出现</zh_cn>
 * <zh_tw>等待指定樣式表所對應的元素出現</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param css {string} <en_us>Find the style table used for a single element</en_us><zh_cn>查找单个元素所用的样式表</zh_cn><zh_tw>查找單個元素所用的樣式表</zh_tw>
 * @param milliseconds {number} <en_us>waiting milliseconds</en_us><zh_cn>等待毫秒数</zh_cn><zh_tw>等待毫秒數</zh_tw>
 */
export async function waitUtilElementLocatedByCss(
	driver: WebDriver,
	css: string,
	milliseconds: number,
) {
	await driver.wait(until.elementLocated(By.css(css)), milliseconds);
}

/**
 * <en_us>wait for the elements corresponding to the specified style table to appear and then return to its internal text</en_us>
 * <zh_cn>等待指定样式表所对应的元素出现然后返回其内部文本</zh_cn>
 * <zh_tw>等待指定樣式表所對應的元素出現然後返回其內部文本</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param css {string} <en_us>Find the style table used for a single element</en_us><zh_cn>查找单个元素所用的样式表</zh_cn><zh_tw>查找單個元素所用的樣式表</zh_tw>
 * @param milliseconds {number} <en_us>waiting milliseconds</en_us><zh_cn>等待毫秒数</zh_cn><zh_tw>等待毫秒數</zh_tw>
 * @returns {Promise<string>} <en_us>asynchronous object: internal text of the corresponding element</en_us><zh_cn>异步对象：相应元素内部文本</zh_cn><zh_tw>異步對象：相應元素內部文本</zh_tw>
 */
export async function waitUtilElementLocatedByCssAndGetText(
	driver: WebDriver,
	css: string,
	milliseconds: number,
): Promise<string> {
	await driver.wait(until.elementLocated(By.css(css)), milliseconds);
	return (await (await driver.findElement(By.css(css))).getText());
}

/**
 * <en_us>browser driver auxiliary class, provide relevant static methods</en_us>
 * <zh_cn>浏览器驱动程序辅助类，提供相关静态方法</zh_cn>
 * <zh_tw>瀏覽器驅動程序輔助類，提供相關靜態方法</zh_tw>
 */
export class SeleniumHelper {
	/**
	 * <en_us>Selenium assistant's headless driver mapping single example</en_us>
	 * <zh_cn>selenium助手的无头驱动程序映射单例</zh_cn>
	 * <zh_tw>selenium助手的無頭驅動程序映射單例</zh_tw>
	 */
	static readonly _headlessDriverMap: BrowserNameAndDriverMap = {
		chrome: null,
		ie: null,
		edge: null,
		firefox: null,
		opera: null,
		safari: null,
	};

	// static readonly _headDriverMap: BrowserNameAndDriverMap = {
	// 	chrome: null,
	// 	firefox: null,
	// 	ie: null,
	// 	opera: null,
	// 	safari: null,
	// };

	/**
	 * <en_us>Get the headless browser driver of the specified name</en_us>
	 * <zh_cn>获取指定名称的无头浏览器驱动程序单例</zh_cn>
	 * <zh_tw>獲取指定名稱的無頭瀏覽器驅動程序單例</zh_tw>
	 *
	 * @param name {BrowserName} <en_us>browser name</en_us><zh_cn>浏览器名称</zh_cn><zh_tw>瀏覽器名稱</zh_tw>
	 * @returns <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
	 */
	static async getSingletonHeadlessDriver(name: BrowserName): WebDriver {
		const { _headlessDriverMap } = SeleniumHelper;

		return _headlessDriverMap[name] || await (async () => {
			const HEADLESS_CHROME_DRIVER = await getHeadlessDriver(name);
			_headlessDriverMap[name] = HEADLESS_CHROME_DRIVER;

			return HEADLESS_CHROME_DRIVER;
		})();
	}

	/**
	 * <en_us>Get a headless Google browser driver single example</en_us>
	 * <zh_cn>获取无头谷歌浏览器驱动程序单例</zh_cn>
	 * <zh_tw>獲取無頭谷歌瀏覽器驅動程序單例</zh_tw>
	 *
	 * @returns <en_us>headless Google browser driver single example</en_us><zh_cn>无头谷歌浏览器驱动程序单例</zh_cn><zh_tw>無頭谷歌瀏覽器驅動程序單例</zh_tw>
	 */
	static async getSingletonHeadlessChromeDriver(): WebDriver {
		return await SeleniumHelper.getSingletonHeadlessDriver(BrowserName.Chrome);
	}

	/**
	 * <en_us>Get the headless IE browser driver single example</en_us>
	 * <zh_cn>获取无头IE浏览器驱动程序单例</zh_cn>
	 * <zh_tw>獲取無頭IE瀏覽器驅動程序單例</zh_tw>
	 *
	 * @returns <en_us>headless IE browser driver singles</en_us><zh_cn>无头IE浏览器驱动程序单例</zh_cn><zh_tw>無頭IE瀏覽器驅動程序單例</zh_tw>
	 */
	static async getSingletonHeadlessIeDriver(): WebDriver {
		return await SeleniumHelper.getSingletonHeadlessDriver(BrowserName.Ie);
	}

	/**
	 * <en_us>Get the headless EDGE browser driver single example</en_us>
	 * <zh_cn>获取无头Edge浏览器驱动程序单例</zh_cn>
	 * <zh_tw>獲取無頭Edge瀏覽器驅動程序單例</zh_tw>
	 *
	 * @returns <en_us>headless Edge browser driver single example</en_us><zh_cn>无头Edge浏览器驱动程序单例</zh_cn><zh_tw>無頭Edge瀏覽器驅動程序單例</zh_tw>
	 */
	static async getSingletonHeadlessEdgeDriver(): WebDriver {
		return await SeleniumHelper.getSingletonHeadlessDriver(BrowserName.Edge);
	}

	/**
	 * <en_us>Get the headless Firefox browser driver single example</en_us>
	 * <zh_cn>获取无头火狐浏览器驱动程序单例</zh_cn>
	 * <zh_tw>獲取無頭火狐瀏覽器驅動程序單例</zh_tw>
	 *
	 * @returns <en_us>headless fire fox browser driver single example</en_us><zh_cn>无头火狐浏览器驱动程序单例</zh_cn><zh_tw>無頭火狐瀏覽器驅動程序單例</zh_tw>
	 */
	static async getSingletonHeadlessFirefoxDriver(): WebDriver {
		return await SeleniumHelper.getSingletonHeadlessDriver(BrowserName.Firefox);
	}

	/**
	 * <en_us>Get a headless Ou Peng browser driver single example</en_us>
	 * <zh_cn>获取无头欧朋浏览器驱动程序单例</zh_cn>
	 * <zh_tw>獲取無頭歐朋瀏覽器驅動程序單例</zh_tw>
	 *
	 * @returns <en_us>Headless Ou Peng browser driver single example</en_us><zh_cn>无头欧朋浏览器驱动程序单例</zh_cn><zh_tw>無頭歐朋瀏覽器驅動程序單例</zh_tw>
	 */
	static async getSingletonHeadlessOperaDriver(): WebDriver {
		return await SeleniumHelper.getSingletonHeadlessDriver(BrowserName.Opera);
	}

	/**
	 * <en_us>Get the headless apple browser driver singular</en_us>
	 * <zh_cn>获取无头苹果浏览器驱动程序单例</zh_cn>
	 * <zh_tw>獲取無頭蘋果瀏覽器驅動程序單例</zh_tw>
	 *
	 * @returns <en_us>headless Apple browser driver single example</en_us><zh_cn>无头苹果浏览器驱动程序单例</zh_cn><zh_tw>無頭蘋果瀏覽器驅動程序單例</zh_tw>
	 */
	static async getSingletonHeadlessSafariDriver(): WebDriver {
		return await SeleniumHelper.getSingletonHeadlessDriver(BrowserName.Safari);
	}

	/**
	 * <en_us>Turn off the headless browser driver of the specified name</en_us>
	 * <zh_cn>关闭指定名称的无头浏览器驱动程序单例</zh_cn>
	 * <zh_tw>關閉指定名稱的無頭瀏覽器驅動程序單例</zh_tw>
	 *
	 * @param name {BrowserName} <en_us>browser name</en_us><zh_cn>浏览器名称</zh_cn><zh_tw>瀏覽器名稱</zh_tw>
	 */
	static async closeSingletonHeadlessDriver(name: BrowserName) {
		const EXISTS_DRIVER = SeleniumHelper._headlessDriverMap[name];
		if (!EXISTS_DRIVER) {
			return;
		}

		try {
			SeleniumHelper._headlessDriverMap[name] = null;
			await EXISTS_DRIVER.quit();
		} catch (e) {
			console.error(e);
		}
	}
	/**
	 * <en_us>Turn off the headless Google browser driver single example</en_us>
	 * <zh_cn>关闭无头谷歌浏览器驱动程序单例</zh_cn>
	 * <zh_tw>關閉無頭谷歌瀏覽器驅動程序單例</zh_tw>
	 */
	static async closeSingletonHeadlessChromeDriver() {
		await SeleniumHelper.closeSingletonHeadlessDriver(BrowserName.Chrome);
	}

	/**
	 * <en_us>Turn off the headless IE browser driver single example</en_us>
	 * <zh_cn>关闭无头IE浏览器驱动程序单例</zh_cn>
	 * <zh_tw>關閉無頭IE瀏覽器驅動程序單例</zh_tw>
	 */
	static async closeSingletonHeadlessIeDriver() {
		await SeleniumHelper.closeSingletonHeadlessDriver(BrowserName.Ie);
	}

	/**
	 * <en_us>Turn off the headless EDGE browser driver single example</en_us>
	 * <zh_cn>关闭无头Edge浏览器驱动程序单例</zh_cn>
	 * <zh_tw>關閉無頭Edge瀏覽器驅動程序單例</zh_tw>
	 */
	static async closeSingletonHeadlessEdgeDriver() {
		await SeleniumHelper.closeSingletonHeadlessDriver(BrowserName.Edge);
	}

	/**
	 * <en_us>Turn off the headless Firefox browser driver single example</en_us>
	 * <zh_cn>关闭无头火狐浏览器驱动程序单例</zh_cn>
	 * <zh_tw>關閉無頭火狐瀏覽器驅動程序單例</zh_tw>
	 */
	static async closeSingletonHeadlessFirefoxDriver() {
		await SeleniumHelper.closeSingletonHeadlessDriver(BrowserName.Firefox);
	}

	/**
	 * <en_us>Turn off the headless Ou Peng browser driver single example</en_us>
	 * <zh_cn>关闭无头欧朋浏览器驱动程序单例</zh_cn>
	 * <zh_tw>關閉無頭歐朋瀏覽器驅動程序單例</zh_tw>
	 */
	static async closeSingletonHeadlessOperaDriver() {
		await SeleniumHelper.closeSingletonHeadlessDriver(BrowserName.Opera);
	}

	/**
	 * <en_us>Turn off the headless Apple browser driver single example</en_us>
	 * <zh_cn>关闭无头苹果浏览器驱动程序单例</zh_cn>
	 * <zh_tw>關閉無頭蘋果瀏覽器驅動程序單例</zh_tw>
	 */
	static async closeSingletonHeadlessSafariDriver() {
		await SeleniumHelper.closeSingletonHeadlessDriver(BrowserName.Safari);
	}
}
