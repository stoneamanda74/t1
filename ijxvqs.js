外链999!wailian999！

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163wstlsdpg.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163vevpaala.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163affuirtf.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163zhpgocsq.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163oztrezye.html

composer require psr/container
来源：http://www.sxryk.cn/163jyuklzfq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163viyibthi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163numjvhmg.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163uxxxkjdr.html

composer require twig/twig
来源：http://www.sxryk.cn/163coquoalg.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ueqetpbo.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163xjscumfz.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cxbqdsnz.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163bvdxuzam.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163lfbrolaw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163hoojfpqr.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163fudohmmx.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163fuprfnoi.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163houdxdwf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163quboavxp.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163nwwmywyz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163nohwfdat.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163lfyfmcdc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163qhztmazv.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163ugacpvtz.html

a?.b?.c
来源：http://www.aibaodan.cn/163dglyljuz.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163lnpwdpwo.html

a ?? b
来源：http://www.aibaodan.cn/163kvnztjqq.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163fcwmqayk.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163fijfxait.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ywfnngzy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163daywvqrw.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163hnryryok.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163fhjduhsx.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163sygmfknk.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163azpouloe.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163azkadmng.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163lxglotlk.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163zervmsst.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163fijixmoz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163chrwblak.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163zytogpxn.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cggfyqup.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163kcqvvxez.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163jaenocaq.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163czadvfpp.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163fpfwxwpv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pugzkikg.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163fweedbgd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163eadzagyb.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163adjzxebr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bubvbeqg.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163yyeddfgk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163tucybwct.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ydrlfnnc.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ryviwhmm.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163cqbsyakl.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163kghuqxwj.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163sjwmnjmr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jdbvwnui.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163qqtfkzgu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163jerlvfzh.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163rcczzofy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163muuoigaw.html

[U105] JS：节流
来源：http://www.sxryk.cn/163iybzywyf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163tracqijr.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163vjqmqgqx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163qcmlmkhi.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163rcocwxqv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jdhwirki.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163kjcyqtav.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163xlntcvyd.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163zhubhogh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cigxpxym.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163kpdnlxvj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163hjlfdlhc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jofdpbea.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163rvwcbajb.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163cnvjkouu.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163vnklsrkm.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163bshoqwdj.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ahlfndei.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qrhoorqh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cidnsyyf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163svxzmzal.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163wucgwejb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163elnkkyux.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163dwepkyag.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163zqhcadkk.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163euecwzhp.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163qtgbunlq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163pwjwplmu.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163xdkkyhiv.html

npx vite build
来源：http://www.sxryk.cn/163fbysxbul.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163eoobacrm.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ahdlsoaq.html

================================================================================
来源：http://www.aibaodan.cn/163lyujrtra.html

统计汇总
来源：http://www.aibaodan.cn/163shmwqmul.html

================================================================================
来源：http://www.sxryk.cn/163ensdpcqz.html

按语言统计（条）：
来源：http://www.xuanzx.com/163wgqnrqsb.html

Python ......... 252
来源：http://www.sxryk.cn/163aalddpem.html

PHP ............ 252
来源：http://www.xuanzx.com/163tpjtwevr.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163gbognufp.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163eryfbndj.html

Java ........... 212
来源：http://www.sxryk.cn/163huxbbomp.html

Go ............. 212
来源：http://www.sxryk.cn/163mgeqikjf.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163peaxjdwn.html

C# ............. 212
来源：http://www.aibaodan.cn/163zogqxsvh.html

C .............. 30
来源：http://www.xuanzx.com/163rppmxbqt.html

C++ ............ 30
来源：http://www.aibaodan.cn/163iytghhng.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ruvptsfy.html

Bash ........... 80
来源：http://www.sxryk.cn/163vhsgqlpu.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163hhbpdhsm.html

Swift .......... 15
来源：http://www.xuanzx.com/163knchldtr.html

Lua ............ 10
来源：http://www.aibaodan.cn/163sucofdwp.html

Perl ........... 10
来源：http://www.sxryk.cn/163zoaoqkww.html

Scala .......... 10
来源：http://www.sxryk.cn/163qnvokdck.html

------------------------------------
来源：http://www.aibaodan.cn/163sxrwcrxs.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163qgnszdqy.html

按章节统计：
来源：http://www.xuanzx.com/163btymmjir.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163rstfocwj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163woxivhxj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ojxosqpx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163onwznbvn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163yslfulsv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jusklwzi.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kakawjev.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163afsosbqk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163msqzvesw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163bausfxwa.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163owxgmjgf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rqqyxmja.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vrbqrwzo.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163arroompe.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163clwinbtp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ukrlfdwd.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163yaggspwo.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163rbkvcqsf.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163nhfblnwu.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163hszfdfts.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ftguzqdf.html

------------------------------------
来源：http://www.aibaodan.cn/163tzeehuwh.html

合计                                  2106 条
来源：http://www.xuanzx.com/163fdnifsse.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xeseomkv.html

使用提醒
来源：http://www.aibaodan.cn/163arzqyxhy.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vnuujteq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163fbopxosc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163tbwkjtqt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163hjxcslud.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163gayuejjb.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163vluettti.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163xlgkzohk.html

================================================================================
来源：http://www.xuanzx.com/163wkvrlfgo.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163mivhfxne.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163dvjpaolb.html

================================================================================
来源：http://www.aibaodan.cn/163wbgapqhh.html

【收录内容】
来源：http://www.xuanzx.com/163oxqtlxtd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163yltdctar.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163iaalehvq.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163bzdrrkil.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163pzydhiwf.html

【使用说明】
来源：http://www.xuanzx.com/163ahifeymi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163lpiqqarx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ehuewclb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163bosefjrh.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163kttbgopm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163bjrvxnmq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163zndataqy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163cekzbmvf.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163spjuewll.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163fwmyrhvd.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163hfmwrxwg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163canpvgxt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163zviodwjl.html

【文件统计】
来源：http://www.xuanzx.com/163yblufccv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163osnxgbix.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163antjoyjd.html

目  录
来源：http://www.aibaodan.cn/163pkohjufm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163tmrurfbl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163dpmmlgnt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rbmiqdfx.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dxfqvzay.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163rmfbiild.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163jyobvzro.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163lyilvbuo.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163prlxsbaa.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163lucvripx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163vewodbzx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hholgfme.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jkbtzlph.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ftzdtyrd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bhpjhpbu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163wopbhvfy.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163rirlurje.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ccbtrfav.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163gteqrsjl.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163wjmeorof.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ziirzbic.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xozvbyax.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163mrrqdbwv.html

================================================================================
来源：http://www.xuanzx.com/163aziufjce.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163vcwbnbla.html

================================================================================
来源：http://www.sxryk.cn/163eqamzggk.html

[A01] Hello World
来源：http://www.aibaodan.cn/163gafqbynn.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163gycnwgzt.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163uibmjgpx.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163ybqexkkn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163kalmqvec.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163tkedkhqc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163hgmtxutt.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163webhkoho.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163zwnmoaju.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163hyzumdrb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163zhjujfiv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163gpcyjrih.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163yneaxrvn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ttohghcu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163zsmnejlr.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163mjvxgnig.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ubfsjsme.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jiunhxjj.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163hileafwf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163vxgchzht.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163hwzzkndx.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163bscfxqxq.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163xgpwfbpo.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163zkstcail.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163kecpyldp.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163bvynlerd.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163hdbjfiyl.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163bnnujmxk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163ruubjeiw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163taispfvr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163bmjggbao.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163xcdiekjc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163atyuxfil.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163poywqcdz.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163debgznet.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163zhsopamj.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163xhwamzwy.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163nujzthsx.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163tfkzsqrj.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163sagysasq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163rgutdvxq.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163attzqwmj.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163qrhpntyd.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dhwjvvip.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hsndsopj.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163rblxbvdo.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163dwfytnfn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163pfcdebbz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163ocrtprux.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163kpfoixyx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163kjscowdu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163hcfanzsg.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163pwwxnwyw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163cvhwasst.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163bfwucsbi.html

Py:   str(42)
来源：http://www.xuanzx.com/163ioguovpa.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163nttutxuv.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163mosifjdf.html

TS:   String(42)
来源：http://www.xuanzx.com/163jailablw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163hmdqlafd.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163enkhrdse.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163pnpgydti.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163nlgzffob.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163yxachhgr.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163dmxgwzmh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163nootagly.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163nvcqlifl.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163opeltioh.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163tfqmivij.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ueljtmpa.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163hwvikzec.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163mckdxrsd.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163thgxjshg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163zxgeamcb.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163zpuqjsvc.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163zlnmrgui.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163czwurxww.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163jioimgja.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163eeqyvwtn.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163lcwglzpj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163uvejdvwb.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163nrfhlsoi.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ltnktgkn.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163ccsvclst.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163mwmdfulg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163yrggsaws.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163xxgxpgnq.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163gjigypaf.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163gcswoxur.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163drvwivfr.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163mingogye.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163zpzcbexy.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fxxdgxdv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vokbzuek.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cbmeuuvk.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mbtpmile.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ummwgbbk.html


<!-- 参考信息 -->