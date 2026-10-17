外链999!wailian999！

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163lxfiuiiy.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163zywbzeim.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163bqfepuom.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163uhggpnqp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163sigvjvhb.html

composer require psr/container
来源：http://www.aibaodan.cn/163gimulxxh.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163elibgcwf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163pvzxydsd.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163yluuwlyy.html

composer require twig/twig
来源：http://www.xuanzx.com/163vhjrlbyv.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163thffosee.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163mpbuedfc.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163pbmyjrhn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163pmpaqarx.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163mepkfppp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ndspewfr.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ccngsniy.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163mumkatsa.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163bsdxadlv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163labbiekz.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163xtxgoqox.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ogllbhvb.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163irozrirb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163gyccjboc.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163enkhzzol.html

a?.b?.c
来源：http://www.sxryk.cn/163hvusyixg.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163pedwjpcz.html

a ?? b
来源：http://www.sxryk.cn/163pzjeyoyc.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163yyqstugn.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ozytrxgc.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163vjqbpxxq.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163fwjyjies.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163makttzck.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163egjwuyrj.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163zganveyk.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lmotuzwb.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163teziamsm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ualhrldy.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163omnzgxsd.html

structuredClone(obj)
来源：http://www.sxryk.cn/163lrwvwfbw.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163evyxpzzo.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163fikjtupi.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163yjlinfmg.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163fnjxqyhn.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163jlufftpv.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163cjiiqvyu.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163qjolurne.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nobjzrig.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163fifmgdjq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ufoqlvsf.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163fgqqhuhr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163gljutiwq.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163yksrtatd.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163uslszsvp.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163apysitwc.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163havzzslc.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163dmreuogk.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163lypdognn.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163yqvoaojp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163xyxibqkn.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163nlafftoh.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163hdfdpjvv.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163awuaclkn.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163snsoktxd.html

[U105] JS：节流
来源：http://www.sxryk.cn/163uqgbanft.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163wegeenmv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163kokjkfhf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163inxmhjsp.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163rvjlzyka.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163hxngmtlf.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ewxongny.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163fngyaiml.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163nfbfcpzz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163omautenv.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163htklkxyb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163aivnmamu.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163egvupila.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163welvgrow.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163hnwrkwnj.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163tzadxjtx.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163vfepcbho.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163yzmczgtt.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163rkrtfndd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163mbagmior.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163xdymmpts.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ulgnmses.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163muckabwm.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163uhnzyqgs.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163wyyeyxzv.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bxeelnkp.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163cdkiijxl.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163owbszxyn.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163zeinuuka.html

npx vite build
来源：http://www.sxryk.cn/163vvuzmuac.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163etwuhzvf.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163aayazrwx.html

================================================================================
来源：http://www.sxryk.cn/163zwuohrva.html

统计汇总
来源：http://www.sxryk.cn/163ytotvmkb.html

================================================================================
来源：http://www.sxryk.cn/163acpyjwqp.html

按语言统计（条）：
来源：http://www.xuanzx.com/163rljawtmi.html

Python ......... 252
来源：http://www.aibaodan.cn/163xozmdeen.html

PHP ............ 252
来源：http://www.xuanzx.com/163jwlrnqit.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163khjnsbfh.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163bwmnuqty.html

Java ........... 212
来源：http://www.aibaodan.cn/163lncpmbfl.html

Go ............. 212
来源：http://www.sxryk.cn/163dhskskno.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163qskrmpis.html

C# ............. 212
来源：http://www.aibaodan.cn/163kpxcdsxu.html

C .............. 30
来源：http://www.sxryk.cn/163xcixrsyb.html

C++ ............ 30
来源：http://www.aibaodan.cn/163svfavwxi.html

SQL ............ 90
来源：http://www.sxryk.cn/163rbbngenx.html

Bash ........... 80
来源：http://www.aibaodan.cn/163lggbvdye.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163fzyxlbcd.html

Swift .......... 15
来源：http://www.aibaodan.cn/163nggivjvl.html

Lua ............ 10
来源：http://www.aibaodan.cn/163fyyvlnay.html

Perl ........... 10
来源：http://www.sxryk.cn/163qfczkovm.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ziwrkolj.html

------------------------------------
来源：http://www.sxryk.cn/163pjczvxjn.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163usoglibm.html

按章节统计：
来源：http://www.xuanzx.com/163yhtlzugn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rubqckpp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ypmoodcb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ztewguvz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163pvnrmrzr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163bvhbsftn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wftdxjsz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nkaivbba.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163icpizpxm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163trrszfle.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fkbvqhde.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qcsjkbbu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yfnaptkl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wzbqfgjp.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163svugggjb.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163abovawcp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lqbuyxee.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163kfvjabep.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163hstxpwoy.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163arenqyup.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163uoiflhqd.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163nvkrmuoc.html

------------------------------------
来源：http://www.xuanzx.com/163jnlgcrfr.html

合计                                  2106 条
来源：http://www.xuanzx.com/163ulsfcost.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qacjyajo.html

使用提醒
来源：http://www.xuanzx.com/163qsgqoljb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zacuaqtx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163sjbglzme.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163dkmmhtna.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163sjzbzcox.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xgkirhfu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163hpajfjhn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163hocvlsxa.html

================================================================================
来源：http://www.sxryk.cn/163kqjdnvby.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163hqzszuof.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163zzwvzxov.html

================================================================================
来源：http://www.aibaodan.cn/163bwhslskf.html

【收录内容】
来源：http://www.xuanzx.com/163hmvdowmh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163jhcehymz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163uhntggxy.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163lcgkvwho.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ioskdwvu.html

【使用说明】
来源：http://www.sxryk.cn/163kfjuiqze.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163xmzvshrh.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163yobylmhm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163qzfjqcoe.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163juucgjbh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163dhtoswvq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163cbebebik.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ssmsshfp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ccddsnpi.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163zvzrfecp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163xgyopfjg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ldjzbtmr.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163sobyaqfh.html

【文件统计】
来源：http://www.xuanzx.com/163gojltadz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163fmvnouta.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ocvbvoep.html

目  录
来源：http://www.xuanzx.com/163avzmvxaq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163iwbmwzus.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163tynpqyio.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163oxelnztp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dupsvczi.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163lttzvvbc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163sfkqpqfc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163obkdorup.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163oxmqzxbd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163rqyqmknw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ddsdvhpv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zmnuucuo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tadzsnjs.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ysmvwnkb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bqvubjwo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163swpqsyqb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163sjmmjujm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hevbcxso.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163mfcldtjm.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163dbihmllw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163qyhjjeil.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163itmvbczb.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163cnpmkkkh.html

================================================================================
来源：http://www.xuanzx.com/163sjibkmcq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163hzeatzlz.html

================================================================================
来源：http://www.aibaodan.cn/163qzpdqhlf.html

[A01] Hello World
来源：http://www.sxryk.cn/163vrvxtpfp.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163mvgfhhkf.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ubjrhlgw.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163zfxljcmz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163nbpbroos.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163lkaoxplh.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163ejkznfvj.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163asirgfmx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163vmcrdkzp.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163hipilykh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163otivlgrg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163qzxzuaya.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ssnnxjec.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163saywgbwx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163cunqarzf.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163icyrilff.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163rrlcjuhs.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163seufnmkr.html

[A03] 常量定义
来源：http://www.xuanzx.com/163hvfdcyls.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163uoadyqqj.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163rszojasi.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ciofusia.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163pbmsuozp.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163fcnzohdi.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163slqiwcvt.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163tqnrqkke.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163nwlslqql.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163dbvwsefa.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163firoybep.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163mnfzwwtm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163czqkxkev.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163sieueceh.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163eclooaxg.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163zqfopscp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163baqrrmit.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163kvszybtv.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163rslbophe.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163tlitnbwp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163frcejqke.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163upxtvram.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163pochxyuy.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mfdmmynq.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163yvddwjdp.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fvgrahig.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nqewkcnu.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163mmckxnof.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163islotdmu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163bdgoybcn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163nmunuawu.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163nyabnjax.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163gadtcibv.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163trflnqbi.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163kuxgpuhw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163qzhbynuo.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163elchhpdu.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ojlcgdik.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163jgqxqfly.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163rqvmoomp.html

TS:   String(42)
来源：http://www.aibaodan.cn/163opvzwsja.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163mkrplrqu.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163uhdlierh.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ovxvrobu.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163tcpwjdqg.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163rozgjbuu.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163rgajseym.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163nqnyxjwj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163htkeddaz.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163xsrjjkgj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163hxflfile.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163syskbemb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163oowfgpgf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163srkltpxe.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163wcirinug.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mqksyoyq.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163mjnamerc.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163qwcqwoai.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163guixgxih.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163rwxdieqe.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163akgsaofs.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qctetmct.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163eovrnsnc.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163wyygbkwa.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163kliupnkq.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163ueqjldbc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163dtdksgbn.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ovadsfyg.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163cxwkccpi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163pmanwajd.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163xwnwvuvp.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163mdqrtprg.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163tpudzcnn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163vflvhban.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ueeqnhas.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ythwvnfz.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nmmjpqdb.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yqmmjypw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163yhbwvwrs.html


<!-- 参考信息 -->