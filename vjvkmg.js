外链999!wailian999！

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163phcwyhag.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163zccpphpj.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ljsovtmc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163lpoideph.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163kjbyxqsn.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163tlnjlwwm.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163tqrgalth.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163cdkvxcmp.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163eugrovjd.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163sxedpjye.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163nmeqoceg.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163mhsqmirp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163glkldixl.html

composer require psr/container
来源：http://www.aibaodan.cn/163rpapwrzt.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163ctkrpmeh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163pfytjawi.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ejtmzhex.html

composer require twig/twig
来源：http://www.sxryk.cn/163frhqptjo.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163qdjzgjjx.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163aclljoft.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163edsjgfkp.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163hillyitz.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163akfdozbt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163zamkecxt.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163amyryamr.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163rqfjhxhx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163kscogwty.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163miuszrah.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163wznxtrhr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163iauesuqw.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163emfpeegp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163qrqlkkws.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163cypifdca.html

a?.b?.c
来源：http://www.sxryk.cn/163spiqavai.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hmremmsq.html

a ?? b
来源：http://www.xuanzx.com/163hkpendxq.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163wkvmxyci.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163duzjfqfz.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163wcrzrmew.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163aexwuedb.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163dvpqxgxi.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163aowkurqy.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163hrxpdzte.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rxbclbwz.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163xgserdyy.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163kskgynro.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163iftsusnt.html

structuredClone(obj)
来源：http://www.xuanzx.com/163thchwnsx.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163bdfnnmux.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fepjzago.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163cbawkqcn.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163hrvdvojk.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163iquotose.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163grkvlmmb.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163gocxgwxm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163upahtjhc.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ladsdnij.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ooywhacm.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163riuzqubh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163zsowssaj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ipcwxbfb.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163yxfzkfph.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163gspbjmek.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163emflxzhd.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163erslxgsc.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163nkaoqaxf.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163gbgjejsk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163auhbhcuw.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163vrztvtnk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163iitszrdb.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163lbodongz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163csjqlssb.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163tgrczvjz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163mpanvmsk.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163klcqozpn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163wfywszrd.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163yxuabkza.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qupxeqdc.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163wjpbhfgi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163xeppursu.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163swselijb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cwrdxuxn.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163aujcwjhp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163iaqvdnpi.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163xvxlmzek.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ofinekrj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163jskmtvan.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163cpzisloh.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163iwzltscd.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qezlleem.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163nfihvocy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bnklmjie.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163bbqqfbiz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163skwrscyo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163okenucld.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163vtwreyss.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163cwwfwsen.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163jhgfwymq.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163xwvehnnw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163anfmucmr.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163cvaiyafi.html

npx vite build
来源：http://www.xuanzx.com/163lgnbktok.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163zuxvphhj.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163qjpviagv.html

================================================================================
来源：http://www.sxryk.cn/163nvoeuzsx.html

统计汇总
来源：http://www.aibaodan.cn/163jivsyznq.html

================================================================================
来源：http://www.aibaodan.cn/163tymiffhd.html

按语言统计（条）：
来源：http://www.sxryk.cn/163jbizqrzg.html

Python ......... 252
来源：http://www.sxryk.cn/163ffdwgrpl.html

PHP ............ 252
来源：http://www.sxryk.cn/163zjsuqpmm.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163hrwueuwk.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ajdisxov.html

Java ........... 212
来源：http://www.sxryk.cn/163momonpos.html

Go ............. 212
来源：http://www.sxryk.cn/163idrzfojt.html

Ruby ........... 212
来源：http://www.sxryk.cn/163oqxikqvr.html

C# ............. 212
来源：http://www.xuanzx.com/163pdimdzjh.html

C .............. 30
来源：http://www.aibaodan.cn/163unicmvhk.html

C++ ............ 30
来源：http://www.sxryk.cn/163uephepkg.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ijdtmnkl.html

Bash ........... 80
来源：http://www.sxryk.cn/163veoliidq.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163oolpejil.html

Swift .......... 15
来源：http://www.aibaodan.cn/163vnswybep.html

Lua ............ 10
来源：http://www.aibaodan.cn/163zvsruxyn.html

Perl ........... 10
来源：http://www.aibaodan.cn/163zkmxizrj.html

Scala .......... 10
来源：http://www.sxryk.cn/163xavspnhg.html

------------------------------------
来源：http://www.sxryk.cn/163jchorxdu.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163tqdiwnqs.html

按章节统计：
来源：http://www.xuanzx.com/163zgapbioy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163aulsvsjq.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vhirhagi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nwbnling.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wppphlqk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163eoyheoup.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163jfvxpgwd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hurmqvgc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163navqgxqq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kkopkuyb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rkjhuzco.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tnkibxnx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iplzrqgb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163omdckqkn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ngsxeldt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163gsyiawge.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dahpblnu.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ghgcgqdo.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163fvxzezin.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163nsxjoidm.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163vrwpgscg.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163pijxjfkf.html

------------------------------------
来源：http://www.xuanzx.com/163rcmsyrar.html

合计                                  2106 条
来源：http://www.xuanzx.com/163tbrtywoc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ahoqccjx.html

使用提醒
来源：http://www.xuanzx.com/163gfegsyqb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pxdbqudk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163vekcukri.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163vkddxesy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163hdgcbapc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163pwoyaljz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163cqdxzzkt.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163isqohfza.html

================================================================================
来源：http://www.xuanzx.com/163sbusjgnw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163zuybrhin.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163fevzquvo.html

================================================================================
来源：http://www.sxryk.cn/163shsyjuhj.html

【收录内容】
来源：http://www.xuanzx.com/163wsdpyass.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163npmocrnj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163tiviqpps.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163peuwndqp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163kiclqhgx.html

【使用说明】
来源：http://www.xuanzx.com/163alxwdauk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163cozdtgtl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163pghxioda.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163juljwmtw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163linegjdm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163uxqwzzwj.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163chujahba.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ttrumtmr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163bsdwetmk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163kuslrlnx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163zoirdxvg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163xymnegfr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163vbktyhou.html

【文件统计】
来源：http://www.aibaodan.cn/163lrfuahrz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ucmubofa.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163poqdburp.html

目  录
来源：http://www.aibaodan.cn/163iuohknpz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vjneewul.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163opzuklsd.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ertdznbi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163doikiqvs.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163prsbrllc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163xdbfaiay.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ougtmpbw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ppkuxcap.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163uqwjzytp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mpyboixt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ojowdzoo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163atyebcup.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ctsqhydi.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163umburlgy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163eputczsm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163rghhuyzt.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hdpqgnra.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163dkyaizpm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163digubicg.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163hxysvzjn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ewdcxmfy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ntmxobrk.html

================================================================================
来源：http://www.xuanzx.com/163mvcejetl.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163arirdovy.html

================================================================================
来源：http://www.xuanzx.com/163hfmllyrj.html

[A01] Hello World
来源：http://www.xuanzx.com/163mnsjrdll.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163xpsgbfln.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163rvbwvffw.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163sgyxrjxz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163glddojry.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163nsqysjah.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163bpriioiy.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163dizzbdiq.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163milrvzbg.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163blglycna.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163fjuvobga.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163ympnqdvu.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163zrdwfpqg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163jrpchavu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163nnrhdcqy.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163xguiujul.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163xvgmkwsx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163zaeyidvj.html

[A03] 常量定义
来源：http://www.xuanzx.com/163oksjyscu.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163svcgxxrs.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163tekeyavy.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163lbitsbge.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163mcfmrmgg.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163kgeodqwq.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163wmcvtezx.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163yogslzqn.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163sidpglyd.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163ssxqgijb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163oxetwiwr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163prowfssf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163cvfzfsnj.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163hzbooceu.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163sthqttqy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163kjjvnbdb.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163gegxvsqd.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jpoxfpbt.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163aluqhkkc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163mnzwuoao.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163jzrvocmz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163yjvsjctm.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163fnwrddbd.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tcjsomun.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nabziypx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jlqybfdb.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ubbznchd.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163mygmaafa.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163fgfggdru.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163nkqrhguz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163kmawglzo.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163oqmekaba.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163rxdhnnjm.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163eydwatxa.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163uvdvfpxk.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163fwxxreqb.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163occhghvt.html

Py:   str(42)
来源：http://www.xuanzx.com/163uudmlonr.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163vkotfvxl.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163bsidjsqt.html

TS:   String(42)
来源：http://www.xuanzx.com/163joippgyw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163nuawluai.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163evdgnhmz.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163arrgrnya.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163xunvkpaf.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163mmijrzle.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ekqkwory.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163wjrxjfwr.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163lusdxisb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163asmcqjiy.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163zjdgwmus.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163qozhvcip.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163xlugjvth.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163gdahurxy.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163tbhkksoy.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163qlsfiwaq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163uodlwfdu.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163nucxbxtm.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163kfklzkxl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163aisebrsy.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ilszqahg.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163fgfabywp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163nxncgavt.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163lxgihjye.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163sqadmkln.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163erumeidd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163myupdzdg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163sqepurwj.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163pxsulzxp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163jgjhgrlx.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163urowtzwq.html


<!-- 参考信息 -->