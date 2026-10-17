外链999!wailian999！

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jxaopgmj.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163embrwebb.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163xairkgdo.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163rnhlmjst.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163dclpfnuo.html

composer require psr/container
来源：http://www.sxryk.cn/163qehvcgsd.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163vjgxoegk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163dmzenhxq.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163chtmojyk.html

composer require twig/twig
来源：http://www.sxryk.cn/163gjhmxhcp.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163kloahyxx.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163rpzkwlog.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163kwlvjiun.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163pemgtpam.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163sgbdekhu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163qvzzbszv.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163gnrxnpiz.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163poyblhzj.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163anoammhw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163plgvgxxz.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163kmwipxxm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163etozrohq.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163quqecpee.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163sdgeapdm.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163bxqbhufm.html

a?.b?.c
来源：http://www.aibaodan.cn/163bxudxzeb.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163gldgeiam.html

a ?? b
来源：http://www.sxryk.cn/163ffneuzxh.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163awfkiqid.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hoeouqef.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163clhopcxs.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163dlnrfnsz.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163lceqrrfk.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163fhstdyjs.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163gsrxpuni.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163meqsiocp.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163lwnmvlxn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163xhgeapzu.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163jotheqaf.html

structuredClone(obj)
来源：http://www.xuanzx.com/163vqvdjmxe.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163cbbtlqbh.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163yeoajnfw.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zymjznsk.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163xyecbdcb.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163zuwxggao.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ozqpacnj.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163hijgwtps.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wlcjvdds.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ssmueqhl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pjasjrel.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163aaufmozl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163plnkzgcq.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163vhuclstn.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163iejncjkp.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163snbtpbeu.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163jwphmdzu.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163qyhxyrci.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163jcjopfdl.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163cgatmeve.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163dyrazitw.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163xisetfis.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163kacvgcji.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163boftosye.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qloieuel.html

[U105] JS：节流
来源：http://www.xuanzx.com/163bqkprqtq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163dqudqsna.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163nlelixro.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163xxgghzss.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163nuucbiig.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163shreocrt.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ggezlrcb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163pcwablbh.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163gngwrwzw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ngfboxlf.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163xdnjuxep.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163vjjtwrcp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163krqurqgg.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163msjavhma.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163azwhgroz.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163jbnitxbx.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163jywloefu.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tfwnsrmf.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163wmmymmeq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dxuwobuu.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163nurabspt.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163slgisgvi.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163zpsaretw.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163dzmnvlsv.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163jrrbgsei.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bmxvkcks.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163uniyffgs.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163iuankevn.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163dribsqlt.html

npx vite build
来源：http://www.xuanzx.com/163xnjqswup.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163tcxnbgjb.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163hljzdowf.html

================================================================================
来源：http://www.xuanzx.com/163vqzczevh.html

统计汇总
来源：http://www.xuanzx.com/163dbyavbqc.html

================================================================================
来源：http://www.sxryk.cn/163ludtqzgw.html

按语言统计（条）：
来源：http://www.xuanzx.com/163urlkgcgy.html

Python ......... 252
来源：http://www.aibaodan.cn/163zognszvy.html

PHP ............ 252
来源：http://www.sxryk.cn/163qpiqzpub.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163wlcqelbi.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163pulxkgwq.html

Java ........... 212
来源：http://www.sxryk.cn/163zlmdfseq.html

Go ............. 212
来源：http://www.aibaodan.cn/163bdtekoge.html

Ruby ........... 212
来源：http://www.sxryk.cn/163uqtfqcnk.html

C# ............. 212
来源：http://www.xuanzx.com/163uaktwjiz.html

C .............. 30
来源：http://www.sxryk.cn/163ekobflox.html

C++ ............ 30
来源：http://www.aibaodan.cn/163pbyvgqzj.html

SQL ............ 90
来源：http://www.sxryk.cn/163ourupogp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163xuqtrepr.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163whzgxnqg.html

Swift .......... 15
来源：http://www.aibaodan.cn/163akeijspu.html

Lua ............ 10
来源：http://www.aibaodan.cn/163vuwzwhxf.html

Perl ........... 10
来源：http://www.aibaodan.cn/163hinvwhon.html

Scala .......... 10
来源：http://www.xuanzx.com/163mqohdmau.html

------------------------------------
来源：http://www.aibaodan.cn/163kdiryeyy.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163sqvyltpj.html

按章节统计：
来源：http://www.sxryk.cn/163snlopnap.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163bbyntyyk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wvourerx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163symlarlg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ojkkwubc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163zoksntpg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rqmuesow.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xkgqpuag.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163cmnygdap.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kdxrucut.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163kmpnmowm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ilgqhocv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bdeterrv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pspatkih.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163stvqimdx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163fpjxqghc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nbalsnco.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163aefqvrkb.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163phwtrahn.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163urdxkliu.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ctwlurxh.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163vdhtsuvm.html

------------------------------------
来源：http://www.aibaodan.cn/163chdifhxp.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ebjbtxuo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163twlnamux.html

使用提醒
来源：http://www.aibaodan.cn/163ssdoggyl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163rpgacrvw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qlxarfnx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163akyqfvmt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163etgwiyuo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163yafaypod.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163irlchlqm.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163hdazeyxp.html

================================================================================
来源：http://www.xuanzx.com/163lwtivhdu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163kzspiihi.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163hgzbxren.html

================================================================================
来源：http://www.aibaodan.cn/163cmmwisna.html

【收录内容】
来源：http://www.aibaodan.cn/163ozwoxfwu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163wtpykfpz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163ddqqcwfe.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ljswicou.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163gctgjotp.html

【使用说明】
来源：http://www.xuanzx.com/163grhccvfl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163opgmxrxv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163uphaqeio.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163tihsunzw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163hoywvztl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163kcdqhhgi.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163mzbvrxih.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163suuupcdz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163wirrhowm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163kulouxmb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163yzisjrfp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163aalpwisi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163mswqcmrd.html

【文件统计】
来源：http://www.xuanzx.com/163xrdmamdg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163vbwgepjb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hlijkxxw.html

目  录
来源：http://www.xuanzx.com/163tdufbhxa.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163znpblwuj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ryxlfbes.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163zrvsfxya.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ixivyuqo.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163gipumasx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163qnlnscvb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163veyuwfek.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163zcbchmgp.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ficimeyl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ohubiepl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163fiogddwg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zvluotrg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sajhznck.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dkjmqlyb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163pokhmuoz.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163pitesrdx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cpjpehgu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163dsqlvxeh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163pcgfhhna.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163polnlmtw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jdoibkeo.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ijtsmwjz.html

================================================================================
来源：http://www.xuanzx.com/163emkrzjbh.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163qlrmvxmg.html

================================================================================
来源：http://www.aibaodan.cn/163pmkksadi.html

[A01] Hello World
来源：http://www.aibaodan.cn/163kcusjlgr.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163qsuibcmf.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163vevorqee.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163eroxvndb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ukuylrnj.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163clxccssi.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163vxfcnfnt.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163tpiplbsi.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163kzszlemy.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163qwmeiwha.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163xuybcfyv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163janurpfe.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163vqobrjvn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163zixnohda.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ojlnckoo.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163izdlfarn.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ojzmujtp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rnwgfejr.html

[A03] 常量定义
来源：http://www.sxryk.cn/163cwrwoeey.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163zyurcffz.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163jhhicunn.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163qfxdxtgi.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163fulbvhls.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163yvhrtoxl.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163fcumzzmj.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163fmxcuotf.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163vyegwaos.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163rnfevtnt.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163gevkmrzz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163cwpzeofk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163qvobkfug.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163jpblejtv.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163rdjyqooi.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163mcewrppn.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163tmkjmulv.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ykxywuxv.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163pgccrktx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163eivnriuj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163eojvctob.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163muzpkahp.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163jomrknbo.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163meyppkww.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163pqwkztpu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sqjckdlu.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kbtflhrp.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163gbslpdug.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163dskjzsbm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163oumfckpn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163zykdcwdh.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163gwtarijj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163mwvfvaff.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163kcadpeex.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163mwhnalwd.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163vbaaorgj.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163dffhyhxy.html

Py:   str(42)
来源：http://www.aibaodan.cn/163fnrgsciq.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163csrohvjw.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163rwxuqgab.html

TS:   String(42)
来源：http://www.aibaodan.cn/163uxtwurvh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163gramrnvi.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163kviiguiv.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163wrsffbha.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163sbdwxdqb.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163uvsvtmpa.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163scxrpkdp.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163crtsjord.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163fhgorzxy.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163iopsfrzk.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163vuwvxazz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163yrmyflht.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163xitgutnq.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163tivalecu.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163jgainmbl.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163swtaehmk.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163hfeqqvgi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163eensduhm.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163vrflqbhk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163tfjjxarc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163htiowpqp.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163pmlesnut.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163anfnyfec.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163gcehlpec.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163mxwsjweb.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163ufvqgkiw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163wnyvjbas.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163tmabzrir.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163xvxrxgnh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163wafqwbtn.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163yeqwmegl.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163zqijmnoe.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163orttwaav.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163admpvzde.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163viraegvq.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163atodtyew.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163lzyjxxfz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ntgmqxpx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163dszdfzsl.html


<!-- 参考信息 -->