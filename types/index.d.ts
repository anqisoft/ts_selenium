import { WebDriver, WebElement } from 'npm:selenium-webdriver';
export { Builder, By, Key, until, WebDriver, WebElement } from 'npm:selenium-webdriver';
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
export declare enum BrowserName {
    Chrome = "chrome",
    Ie = "ie",
    Edge = "edge",
    Firefox = "firefox",
    Opera = "opera",
    Safari = "safari"
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
export declare function getHeadlessChromeDriver(): Promise<any>;
/**
 * <en_us>Get the IE browser driver</en_us>
 * <zh_cn>获取无关IE浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關IE瀏覽器驅動程序</zh_tw>
 */
export declare function getHeadlessIeDriver(): Promise<any>;
/**
 * <en_us>Get the EDGE browser driver</en_us>
 * <zh_cn>获取无关Edge浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關Edge瀏覽器驅動程序</zh_tw>
 */
export declare function getHeadlessEdgeDriver(): Promise<any>;
/**
 * <en_us>Get the driver of the Firefox browser</en_us>
 * <zh_cn>获取无关火狐浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關火狐瀏覽器驅動程序</zh_tw>
 */
export declare function getHeadlessFirefoxDriver(): Promise<any>;
/**
 * <en_us>Get the driver of the Ou Peng browser</en_us>
 * <zh_cn>获取无关欧朋浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關歐朋瀏覽器驅動程序</zh_tw>
 */
export declare function getHeadlessOperaDriver(): Promise<any>;
/**
 * <en_us>Get the Driver of the Apple Browser</en_us>
 * <zh_cn>获取无关苹果浏览器驱动程序</zh_cn>
 * <zh_tw>獲取無關蘋果瀏覽器驅動程序</zh_tw>
 */
export declare function getHeadlessSafariDriver(): Promise<any>;
/**
 * <en_us>Get the headless browser driver of the specified name</en_us>
 * <zh_cn>获取指定名称的无头浏览器驱动程序</zh_cn>
 * <zh_tw>獲取指定名稱的無頭瀏覽器驅動程序</zh_tw>
 *
 * @param name {BrowserName} <en_us>browser name</en_us><zh_cn>浏览器名称</zh_cn><zh_tw>瀏覽器名稱</zh_tw>
 * @returns <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 */
export declare function getHeadlessDriver(name: BrowserName): WebDriver;
/**
 * <en_us>turn to the corresponding website</en_us>
 * <zh_cn>转到相应网址</zh_cn>
 * <zh_tw>轉到相應網址</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param url {string} <en_us>URL</en_us><zh_cn>网址</zh_cn><zh_tw>網址</zh_tw>
 */
export declare function navigateTo(driver: WebDriver, url: string): Promise<void>;
/**
 * <en_us>Double -click the specified element</en_us>
 * <zh_cn>双击指定元素</zh_cn>
 * <zh_tw>雙擊指定元素</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param element {WebElement} <en_us>element</en_us><zh_cn>元素</zh_cn><zh_tw>元素</zh_tw>
 */
export declare function doubleClick(driver: WebDriver, element: WebElement): Promise<void>;
/**
 * <en_us>Send text to the specified element and press Enter</en_us>
 * <zh_cn>向指定元素发送文字并回车</zh_cn>
 * <zh_tw>向指定元素發送文字並回車</zh_tw>
 *
 * @param element {WebElement} <en_us>element</en_us><zh_cn>元素</zh_cn><zh_tw>元素</zh_tw>
 * @param content {string} <en_us>The text to be sent</en_us><zh_cn>所要发送的文字</zh_cn><zh_tw>所要發送的文字</zh_tw>
 */
export declare function sendKeysAndReturn(element: WebElement, content: string): Promise<void>;
/**
 * <en_us>Find elements (single) through CSS</en_us>
 * <zh_cn>通过css查找元素（单个）</zh_cn>
 * <zh_tw>通過css查找元素（單個）</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param css {string} <en_us>Find the style table used for a single element</en_us><zh_cn>查找单个元素所用的样式表</zh_cn><zh_tw>查找單個元素所用的樣式表</zh_tw>
 * @returns {Promise<WebElement>} <en_us>asynchronous object: element</en_us><zh_cn>异步对象：元素</zh_cn><zh_tw>異步對象：元素</zh_tw>
 */
export declare function findElementByCss(driver: WebDriver, css: string): Promise<WebElement>;
/**
 * <en_us>waiting for the elements corresponding to the specified style table to appear</en_us>
 * <zh_cn>等待指定样式表所对应的元素出现</zh_cn>
 * <zh_tw>等待指定樣式表所對應的元素出現</zh_tw>
 *
 * @param driver {WebDriver} <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
 * @param css {string} <en_us>Find the style table used for a single element</en_us><zh_cn>查找单个元素所用的样式表</zh_cn><zh_tw>查找單個元素所用的樣式表</zh_tw>
 * @param milliseconds {number} <en_us>waiting milliseconds</en_us><zh_cn>等待毫秒数</zh_cn><zh_tw>等待毫秒數</zh_tw>
 */
export declare function waitUtilElementLocatedByCss(driver: WebDriver, css: string, milliseconds: number): Promise<void>;
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
export declare function waitUtilElementLocatedByCssAndGetText(driver: WebDriver, css: string, milliseconds: number): Promise<string>;
/**
 * <en_us>browser driver auxiliary class, provide relevant static methods</en_us>
 * <zh_cn>浏览器驱动程序辅助类，提供相关静态方法</zh_cn>
 * <zh_tw>瀏覽器驅動程序輔助類，提供相關靜態方法</zh_tw>
 */
export declare class SeleniumHelper {
    /**
     * <en_us>Selenium assistant's headless driver mapping single example</en_us>
     * <zh_cn>selenium助手的无头驱动程序映射单例</zh_cn>
     * <zh_tw>selenium助手的無頭驅動程序映射單例</zh_tw>
     */
    static readonly _headlessDriverMap: BrowserNameAndDriverMap;
    /**
     * <en_us>Get the headless browser driver of the specified name</en_us>
     * <zh_cn>获取指定名称的无头浏览器驱动程序单例</zh_cn>
     * <zh_tw>獲取指定名稱的無頭瀏覽器驅動程序單例</zh_tw>
     *
     * @param name {BrowserName} <en_us>browser name</en_us><zh_cn>浏览器名称</zh_cn><zh_tw>瀏覽器名稱</zh_tw>
     * @returns <en_us>Browser driver</en_us><zh_cn>浏览器驱动程序</zh_cn><zh_tw>瀏覽器驅動程序</zh_tw>
     */
    static getSingletonHeadlessDriver(name: BrowserName): WebDriver;
    /**
     * <en_us>Get a headless Google browser driver single example</en_us>
     * <zh_cn>获取无头谷歌浏览器驱动程序单例</zh_cn>
     * <zh_tw>獲取無頭谷歌瀏覽器驅動程序單例</zh_tw>
     *
     * @returns <en_us>headless Google browser driver single example</en_us><zh_cn>无头谷歌浏览器驱动程序单例</zh_cn><zh_tw>無頭谷歌瀏覽器驅動程序單例</zh_tw>
     */
    static getSingletonHeadlessChromeDriver(): WebDriver;
    /**
     * <en_us>Get the headless IE browser driver single example</en_us>
     * <zh_cn>获取无头IE浏览器驱动程序单例</zh_cn>
     * <zh_tw>獲取無頭IE瀏覽器驅動程序單例</zh_tw>
     *
     * @returns <en_us>headless IE browser driver singles</en_us><zh_cn>无头IE浏览器驱动程序单例</zh_cn><zh_tw>無頭IE瀏覽器驅動程序單例</zh_tw>
     */
    static getSingletonHeadlessIeDriver(): WebDriver;
    /**
     * <en_us>Get the headless EDGE browser driver single example</en_us>
     * <zh_cn>获取无头Edge浏览器驱动程序单例</zh_cn>
     * <zh_tw>獲取無頭Edge瀏覽器驅動程序單例</zh_tw>
     *
     * @returns <en_us>headless Edge browser driver single example</en_us><zh_cn>无头Edge浏览器驱动程序单例</zh_cn><zh_tw>無頭Edge瀏覽器驅動程序單例</zh_tw>
     */
    static getSingletonHeadlessEdgeDriver(): WebDriver;
    /**
     * <en_us>Get the headless Firefox browser driver single example</en_us>
     * <zh_cn>获取无头火狐浏览器驱动程序单例</zh_cn>
     * <zh_tw>獲取無頭火狐瀏覽器驅動程序單例</zh_tw>
     *
     * @returns <en_us>headless fire fox browser driver single example</en_us><zh_cn>无头火狐浏览器驱动程序单例</zh_cn><zh_tw>無頭火狐瀏覽器驅動程序單例</zh_tw>
     */
    static getSingletonHeadlessFirefoxDriver(): WebDriver;
    /**
     * <en_us>Get a headless Ou Peng browser driver single example</en_us>
     * <zh_cn>获取无头欧朋浏览器驱动程序单例</zh_cn>
     * <zh_tw>獲取無頭歐朋瀏覽器驅動程序單例</zh_tw>
     *
     * @returns <en_us>Headless Ou Peng browser driver single example</en_us><zh_cn>无头欧朋浏览器驱动程序单例</zh_cn><zh_tw>無頭歐朋瀏覽器驅動程序單例</zh_tw>
     */
    static getSingletonHeadlessOperaDriver(): WebDriver;
    /**
     * <en_us>Get the headless apple browser driver singular</en_us>
     * <zh_cn>获取无头苹果浏览器驱动程序单例</zh_cn>
     * <zh_tw>獲取無頭蘋果瀏覽器驅動程序單例</zh_tw>
     *
     * @returns <en_us>headless Apple browser driver single example</en_us><zh_cn>无头苹果浏览器驱动程序单例</zh_cn><zh_tw>無頭蘋果瀏覽器驅動程序單例</zh_tw>
     */
    static getSingletonHeadlessSafariDriver(): WebDriver;
    /**
     * <en_us>Turn off the headless browser driver of the specified name</en_us>
     * <zh_cn>关闭指定名称的无头浏览器驱动程序单例</zh_cn>
     * <zh_tw>關閉指定名稱的無頭瀏覽器驅動程序單例</zh_tw>
     *
     * @param name {BrowserName} <en_us>browser name</en_us><zh_cn>浏览器名称</zh_cn><zh_tw>瀏覽器名稱</zh_tw>
     */
    static closeSingletonHeadlessDriver(name: BrowserName): Promise<void>;
    /**
     * <en_us>Turn off the headless Google browser driver single example</en_us>
     * <zh_cn>关闭无头谷歌浏览器驱动程序单例</zh_cn>
     * <zh_tw>關閉無頭谷歌瀏覽器驅動程序單例</zh_tw>
     */
    static closeSingletonHeadlessChromeDriver(): Promise<void>;
    /**
     * <en_us>Turn off the headless IE browser driver single example</en_us>
     * <zh_cn>关闭无头IE浏览器驱动程序单例</zh_cn>
     * <zh_tw>關閉無頭IE瀏覽器驅動程序單例</zh_tw>
     */
    static closeSingletonHeadlessIeDriver(): Promise<void>;
    /**
     * <en_us>Turn off the headless EDGE browser driver single example</en_us>
     * <zh_cn>关闭无头Edge浏览器驱动程序单例</zh_cn>
     * <zh_tw>關閉無頭Edge瀏覽器驅動程序單例</zh_tw>
     */
    static closeSingletonHeadlessEdgeDriver(): Promise<void>;
    /**
     * <en_us>Turn off the headless Firefox browser driver single example</en_us>
     * <zh_cn>关闭无头火狐浏览器驱动程序单例</zh_cn>
     * <zh_tw>關閉無頭火狐瀏覽器驅動程序單例</zh_tw>
     */
    static closeSingletonHeadlessFirefoxDriver(): Promise<void>;
    /**
     * <en_us>Turn off the headless Ou Peng browser driver single example</en_us>
     * <zh_cn>关闭无头欧朋浏览器驱动程序单例</zh_cn>
     * <zh_tw>關閉無頭歐朋瀏覽器驅動程序單例</zh_tw>
     */
    static closeSingletonHeadlessOperaDriver(): Promise<void>;
    /**
     * <en_us>Turn off the headless Apple browser driver single example</en_us>
     * <zh_cn>关闭无头苹果浏览器驱动程序单例</zh_cn>
     * <zh_tw>關閉無頭蘋果瀏覽器驅動程序單例</zh_tw>
     */
    static closeSingletonHeadlessSafariDriver(): Promise<void>;
}
