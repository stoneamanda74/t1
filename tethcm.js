外链999!wailian999！

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163cynogkqx.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163vhlcpulm.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ybjdluit.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163tpxdfbib.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163toxrmypl.html

composer require psr/container
来源：http://www.xuanzx.com/163chgopmui.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163tterjgrn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163jnelwhcm.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163opwtujfs.html

composer require twig/twig
来源：http://www.xuanzx.com/163ikwznrmp.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163icdvvrnx.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ekabikkt.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163mtdqwdlr.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163bqtljojs.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163kvfuilvh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163hnuccgki.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ecdpkpzh.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163nsoingms.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163lpqyyxyh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ffuyefvv.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ypdguame.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ovqprpkm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163elwancsd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163hbiqwzxg.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163bgnjdquj.html

a?.b?.c
来源：http://www.xuanzx.com/163qrqsclmo.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163erjshcqr.html

a ?? b
来源：http://www.sxryk.cn/163zissdlpn.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163qetyglvb.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163djoskqkb.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163rcytgjyf.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163vnbcztzu.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163omtvozsm.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163fwpwirqa.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163vgbwkygl.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xvkhxqbi.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163hvrghaea.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163lpjowqqb.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163oqbdhois.html

structuredClone(obj)
来源：http://www.xuanzx.com/163yakxmqbo.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163iivhfokd.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163baxigtam.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163xwxesxip.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ogkynksd.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163nxacsqbb.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163kqzfrmru.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163kbgragms.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jebtduqi.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163vbrprqhl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xsqdxnqw.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163sddggyqd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163mxfghkmx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163hwduooyg.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163grcxavlc.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163hxnymydv.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ozgurzpg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163mlbowlqp.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163femzejjz.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163fernuxia.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163uaeobzfl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163rxunvsrr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163kjoycglu.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163otlxizwk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lbigzhwa.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ggkqksoa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163cdnwokjp.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xtawmviv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163hencokgl.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163dnehkbty.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163iirwmjxa.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163lxlhpzfh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qyaocgat.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163oxzvtpnx.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163oqbxczye.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163vwbkumku.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163vufxfeud.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163kjwfbchs.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ynhlnnsp.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rspxmuzz.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ekhmnhho.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163exwllbhn.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163plhnuplp.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163qtjxtlje.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163eocrhehf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163bosnnfpr.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163turhuybf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163iqdaiivd.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163vizvghbx.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bmquxjsq.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163euqbvgrs.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163caciiprh.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ikhhxthb.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163beoacjzg.html

npx vite build
来源：http://www.xuanzx.com/163yphkmhbv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163sxxfxcyo.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163ukloolfi.html

================================================================================
来源：http://www.xuanzx.com/163zqthmexr.html

统计汇总
来源：http://www.sxryk.cn/163mphozkrg.html

================================================================================
来源：http://www.sxryk.cn/163kpdcqfda.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163brbivjze.html

Python ......... 252
来源：http://www.xuanzx.com/163rzdvglmi.html

PHP ............ 252
来源：http://www.xuanzx.com/163cdkdbwgg.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163oebuxjgv.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163fjwragsy.html

Java ........... 212
来源：http://www.sxryk.cn/163ecwkcwnf.html

Go ............. 212
来源：http://www.aibaodan.cn/163wrpdkomi.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hotgzaer.html

C# ............. 212
来源：http://www.xuanzx.com/163mmvncyrg.html

C .............. 30
来源：http://www.sxryk.cn/163inkppkka.html

C++ ............ 30
来源：http://www.aibaodan.cn/163klccpbfe.html

SQL ............ 90
来源：http://www.sxryk.cn/163sleoewsr.html

Bash ........... 80
来源：http://www.sxryk.cn/163swhmgixe.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163dlwsgnxo.html

Swift .......... 15
来源：http://www.xuanzx.com/163rlkukwtb.html

Lua ............ 10
来源：http://www.xuanzx.com/163ooejszld.html

Perl ........... 10
来源：http://www.sxryk.cn/163vmawqmac.html

Scala .......... 10
来源：http://www.xuanzx.com/163rhcnkzvb.html

------------------------------------
来源：http://www.xuanzx.com/163zlrojwax.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163cjgxptgg.html

按章节统计：
来源：http://www.aibaodan.cn/163tsjzmwvo.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163rcldlufm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cvmkbjek.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163csxahkal.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mwugigul.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163muexqrgn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vwgjtjvd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yuyypunr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tochwbtd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sejstxol.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163obvqsfsj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163waskdhdn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fjxiepod.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163itwcnule.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163oflnszee.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163dgxnlgkt.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xxsrvufs.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163avuatrod.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163kgrnngmb.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163gkmxkkwt.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163xizoseyu.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163tgjtkuie.html

------------------------------------
来源：http://www.xuanzx.com/163bsemrufs.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163wsvzxcmc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gycdmjya.html

使用提醒
来源：http://www.aibaodan.cn/163itomejfl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ngnsmdjy.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163tehhgfcd.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163dvueneek.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163knrhmsca.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163vfeekmxz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163vyaztvex.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163dxiyoklx.html

================================================================================
来源：http://www.sxryk.cn/163ryqtijfd.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163qtomlhxp.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ngvczevb.html

================================================================================
来源：http://www.sxryk.cn/163nwyglpvk.html

【收录内容】
来源：http://www.aibaodan.cn/163dvtuosup.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163spetztot.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163ujkvxqrp.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163rebptqtk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163lhjvilsg.html

【使用说明】
来源：http://www.xuanzx.com/163kdyvgenz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163owrqhxgj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ztcqmvuy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163orguicfc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163yueqexmj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163eteckffr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163xbnvmhtw.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163nrfftpgv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163sncfxjdw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163yaaifxzy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163fsokcnch.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163tlpfzift.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163iinbyxxq.html

【文件统计】
来源：http://www.sxryk.cn/163ldsjnjbx.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ygrlbcaj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163inwkwfdt.html

目  录
来源：http://www.aibaodan.cn/163doktafgg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tqyyekvr.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xolegwnw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bdhnlcvf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163vtipnhpg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kupbtfjt.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163fcnxlahe.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163sxzyrwbc.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163aattgdhi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zkxfsmgv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qambcinq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163amdbhvak.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vgucenba.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163byqnaahx.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vmxjxlis.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163jyqnwkxp.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163jdgjakkm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hpwhhoxf.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163aqrmcbvf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163aefazuzt.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163gcuchsfg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163kckkzeiz.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nsrhfgjh.html

================================================================================
来源：http://www.sxryk.cn/163roferxhq.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163iljzbshj.html

================================================================================
来源：http://www.aibaodan.cn/163ownzjduh.html

[A01] Hello World
来源：http://www.sxryk.cn/163zkfdqmae.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163dkgnjtrj.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163gymbvdpe.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163lvcqyqun.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163osqvtfnj.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163luibsjtl.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163xujcbwwg.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163dpsxhrli.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163uclzdwrq.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163wjzdliag.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163htsvpjei.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163xqpcdmql.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163vftcoidb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163bjexkryn.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ozerkpxk.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163vjjnzivb.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163djsgrccj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163gmrywybm.html

[A03] 常量定义
来源：http://www.xuanzx.com/163ebmvxhsd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163csegmnmp.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163igunhqjh.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163xprhqwnq.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163xbafqjwn.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163tadrbibg.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163iclvmyeb.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163xysrqklt.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163aoazctjn.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163jkjzmiqp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163qywembig.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163yjwmhrtk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163yfhhbohr.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163wpbvjwwm.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163hoqlqpos.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163wvuuelet.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163crkhkwkn.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163xfzmqvma.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163wlihufpb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163jahueztr.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163dyslgrwe.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ldtsiyld.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ogwkvnud.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163untekalz.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bgbeylvj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jjctbwxn.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fyslgmxi.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163xtanffjp.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ctnhlpeq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163gurusngo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163scaeevpr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163vgcqfypp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163krzrsrvh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163qdlpydfo.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163sxwqunuf.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163rzpdpnin.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163oczhefnz.html

Py:   str(42)
来源：http://www.sxryk.cn/163okgjanjz.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163iwmufpid.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163nobinzrv.html

TS:   String(42)
来源：http://www.xuanzx.com/163vvxunazj.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163kblpolzq.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163zrhdbits.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ffuxorbq.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163fzztoiwp.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163epuietar.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ebmmedee.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163smhcojuq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163vbtkksyt.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163tzkhpfqw.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163wkqfsdjv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163vmruwwxl.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163xxuipjyc.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163dsqtykks.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163tojmrwud.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163caowuvrp.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163nyzuawrl.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163xciyzcnq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163issaoudw.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163cgjdsrfv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163cwxkzxqz.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163ofxbsqqb.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163bqfbyuhn.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163dxoulcyc.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163kyfvolxg.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163intjaifc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163jumwrgof.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163tldmysri.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163gecrikab.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163jvcirlhn.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163iwumdwjc.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163qinjvqee.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163yrzzqsoz.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163fixhlops.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163jobsjfln.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nqqsdkdl.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wasotedt.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fqyrnnqs.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163oqwuouzc.html


<!-- 参考信息 -->