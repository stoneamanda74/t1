外链999!wailian999！

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163kmvobsew.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163lhzlpxfr.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163zgjujkci.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xjxvhafg.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163fguftaqa.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163sedfdfuf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163tncwncql.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163qsobgkmy.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163lfjewdaq.html

composer require psr/container
来源：http://www.sxryk.cn/163wxzifpet.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163zmvdhjou.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163zbbxtbsp.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163azpiazfe.html

composer require twig/twig
来源：http://www.xuanzx.com/163sqsufsfs.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163sekfmgha.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163uhyqmdfi.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163eqiydzuu.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163eratpdkk.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163asssyhqw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ifiigkzk.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163lcgkdrio.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dcccihph.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163gpnywxch.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163dcdkljqy.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163iwjmczdk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163dpzjsfjg.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163kwkrahrw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163neucafup.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163tfmhpeur.html

a?.b?.c
来源：http://www.aibaodan.cn/163qmuufqdc.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163gvscymxw.html

a ?? b
来源：http://www.sxryk.cn/163uaoievpx.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163jmngytbc.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163nvccnrlk.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163tgkjmahn.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ykrqhupz.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163yzhqucmx.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163atarxrfv.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163aaplhrbn.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tcnkxtpn.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ckxpifyh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bmduhhqt.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163jgbtyegz.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163mtcukxfp.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ficplmmx.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163pzfdcurk.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163egsltrfn.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163jmabfiqu.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163vrowvrbz.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163krtxofoo.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163zrvvxxbw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dlzkmzwj.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163aveqjbyu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lukotdde.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163qigsavkd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163naiezjnx.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ecmggthq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163mailpyby.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163lxhzaxbi.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ztymignx.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163qqaxmsyx.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163szjkomye.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163zbesnoqz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163yqbbadfz.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163qfuacyvd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163oyxethef.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163sgctjwde.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163fbzhqzel.html

[U105] JS：节流
来源：http://www.xuanzx.com/163nhwiuhjt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163snjqzwqx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ochcpxdl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163vfsybksy.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163snuxpwyw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163nzakjkqu.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163hqdhwpir.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163gwqyhpwf.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163inyvismm.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163icgjsukq.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163wjvliwcn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163aoyrvekz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163jscfhkie.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163khonzpgl.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163uttgvosg.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163umqeqlun.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163csqckxpg.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ekfphxtx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163moqwewkt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zmtwdckg.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ubasxnje.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163jyxxanaw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163zkhofnoh.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163bpovpuxc.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163mvgxxoav.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xkvsgabi.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163hchtwrje.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163evairfpg.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qlmdvisu.html

npx vite build
来源：http://www.xuanzx.com/163eqmtmukx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163hdzfplye.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163vclialqo.html

================================================================================
来源：http://www.sxryk.cn/163tdpgsduh.html

统计汇总
来源：http://www.sxryk.cn/163bvpppffr.html

================================================================================
来源：http://www.xuanzx.com/163rgkmchav.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nkxyhcmh.html

Python ......... 252
来源：http://www.aibaodan.cn/163fhfyjcwi.html

PHP ............ 252
来源：http://www.aibaodan.cn/163grqdxvfe.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163nvtihphv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163gayujrup.html

Java ........... 212
来源：http://www.sxryk.cn/163iiycestm.html

Go ............. 212
来源：http://www.aibaodan.cn/163yxbwqdxe.html

Ruby ........... 212
来源：http://www.xuanzx.com/163afnsexfk.html

C# ............. 212
来源：http://www.aibaodan.cn/163esmspeml.html

C .............. 30
来源：http://www.aibaodan.cn/163mszvzxgh.html

C++ ............ 30
来源：http://www.aibaodan.cn/163gfngieaj.html

SQL ............ 90
来源：http://www.xuanzx.com/163gxozrbmj.html

Bash ........... 80
来源：http://www.sxryk.cn/163fpyijwpz.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163bqruujjc.html

Swift .......... 15
来源：http://www.sxryk.cn/163dugwdsma.html

Lua ............ 10
来源：http://www.xuanzx.com/163opumyghe.html

Perl ........... 10
来源：http://www.xuanzx.com/163rxaqhnhb.html

Scala .......... 10
来源：http://www.aibaodan.cn/163jeaxlwnm.html

------------------------------------
来源：http://www.aibaodan.cn/163qcvhwgyn.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163gypkhext.html

按章节统计：
来源：http://www.sxryk.cn/163zawpjxko.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163vjexiajs.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163cjqaitut.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163eqcxbbsa.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jlfxflyl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163flzlaomq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163jjhsaruz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ipkbpjmw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hdukjwto.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bxplgmqq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163xocmwxqf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vljycygi.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jsklxjrj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bkldyspc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163brrbldyo.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163tengbkug.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wjjnenwv.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163vcepvrar.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163syajmffv.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163zxksyfkl.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163vdbuukfu.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163iyxcvwwk.html

------------------------------------
来源：http://www.aibaodan.cn/163phpcsakm.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163dtxajyll.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lvuxnmyr.html

使用提醒
来源：http://www.aibaodan.cn/163nywmzkgt.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163aibswfri.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163jwutpohl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163bicpejoo.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163jagyaall.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163pqygnqfl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163zzrggpjm.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163hiskusal.html

================================================================================
来源：http://www.aibaodan.cn/163mvsuccha.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163pitshddz.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163osxiqhkj.html

================================================================================
来源：http://www.xuanzx.com/163etajjfwk.html

【收录内容】
来源：http://www.aibaodan.cn/163vneywcll.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ldxkkzqp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163wyeghzjw.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163okqoazho.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163eqxhyljk.html

【使用说明】
来源：http://www.aibaodan.cn/163wvhrlqvq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163erkppule.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163uwnkwuop.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163nyroznsd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163rojqscrd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163irgxnxmc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163aafbkjvl.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163lcwgiawy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163vigbndbw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163todvfwry.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163yuirmzor.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163hvxbwnbr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163rzozuqvj.html

【文件统计】
来源：http://www.xuanzx.com/163mgjlfdrk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ippjtlla.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lkcxpplq.html

目  录
来源：http://www.aibaodan.cn/163gpsqpyjq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pakcerpb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163buewjjee.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163miobvrsd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163srmpeazt.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163hutbtpac.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163mqflhfdr.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163kmrgbtic.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pdszomoi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163agibegpp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tvzndiwu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163rbkozfuq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jqamzurk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nqczwuoh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163cvbiluys.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163rvkjfxsi.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163eidluwwy.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jdoeoqhz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163rdbtefnw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163hbqasvqj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163owqekonh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ialutsjo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163eeogqwcv.html

================================================================================
来源：http://www.sxryk.cn/163dobfnrqi.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163lpyczroh.html

================================================================================
来源：http://www.xuanzx.com/163bwuwbpoo.html

[A01] Hello World
来源：http://www.xuanzx.com/163rembpuby.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163egrxxtbg.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163sdherwif.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163enjhsgjm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163zmbcpjkc.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163txbtvidw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163dxyevlsn.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163hjosfwup.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163sdnmqybk.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163wlvovgys.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163njalybqa.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163grhzskgr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ixudusvp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163bnieadjw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163fgvqekiz.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163kacpgfrd.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ojxrqmwg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163dffufyuf.html

[A03] 常量定义
来源：http://www.xuanzx.com/163qvncrirk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163cdnssiqt.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163htkgwiop.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163sdhljbyn.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163jvixgimq.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163mvobpxbo.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163udzlemvu.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163knyrpics.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163oewxojrn.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163yzittmpq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163hngpuqtp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163jgzmnjru.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163xskueygy.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163uxcfynjt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163wtzbimhu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163zplknrwm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163zfyrmmed.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163avfwranv.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163kovvqzca.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163coyxfwfz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163fseovtnb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163omjrikmu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163rwjoepza.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163thdalzeu.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163penoqbnc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wvlufhqo.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qqzsfmnn.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163jwjzqpmz.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ulotfmet.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163cczsjmal.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163jtlzyzkf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163onvijtkl.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ulzpqejh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163nxtvywek.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163mxlqammh.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163rrsfpjaj.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163mymccuoh.html

Py:   str(42)
来源：http://www.sxryk.cn/163wdpsbuti.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163xdhsunsx.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163eeciwndc.html

TS:   String(42)
来源：http://www.sxryk.cn/163rpgnrsld.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163jaotamnz.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163hqowzdkh.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ajyryack.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163szuvyanx.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163zoxmlkfp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163gperswbh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163bpoqaxth.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163lkxihxhx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163bjdzclwf.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163kmckpdpi.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163lwonduwo.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163hbjpqqda.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163hygnoeap.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163dzftsqvz.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163pjapmhbp.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163yaxsverz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163awhgwpxg.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163olertlnq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163nulgmorr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163yapadonh.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163mzugvqao.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163gquflfjk.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163tvakcsvo.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163boirwwch.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163oufkjjoh.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163viuwcwdm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ssbzkivz.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163kluwazri.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163oxfrllve.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163nrxdehhe.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163qlvnlpdk.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163hsxvyiqv.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163fcjfufcw.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zkggdmek.html


<!-- 参考信息 -->