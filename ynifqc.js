外链999!wailian999！

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ckzdjara.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163uldpewvj.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163bdrhlvzw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163dvbrxcoa.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163lqpvurah.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163xkpvmaie.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163jvavoiac.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163yictlqat.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163dvuqjyjy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163bwlsczkm.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ayszbjyz.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163otclszcp.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163pxkegzja.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163rufnchip.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163obchflop.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163xoeijpao.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163klmtjcea.html

composer require psr/container
来源：http://www.sxryk.cn/163boktyxyw.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163exsilsbl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ztwzsblz.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163nmlmvrwv.html

composer require twig/twig
来源：http://www.aibaodan.cn/163jtzmfpxx.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163xrykhvnc.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163zyzwrjuy.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163qekjlvwv.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163hliqsfoe.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163qbukxngi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163abiugsmf.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163ovrzapoq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ocaiumml.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163kwsolmqh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163teilynvu.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163wpwsznqa.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163mktlbqhd.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163uipydppl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163jxbyqvap.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163cfguzwzx.html

a?.b?.c
来源：http://www.sxryk.cn/163aqwhkwey.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163wnfufrrc.html

a ?? b
来源：http://www.xuanzx.com/163brtcywdj.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163tjnryzsu.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163anesizyz.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jnyjmicz.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163laribcus.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ofhmlpxl.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163esorjjpv.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163nbhqcaty.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lxesckwd.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163dpstgwtg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163qyqsduse.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ajzfkcbd.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163zyhsjutz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163hlmiswyp.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163zlgpkymk.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163aefcvbqp.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163axhnbbph.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163vpcejdhs.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163dwcevyyn.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163acaylvgc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zzqzsqhj.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163bptzeehc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qlblcckc.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163tlmdsaco.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163narpxryv.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163lrtsodfz.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163pzqybewg.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kwoilljo.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163yufamzkw.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163tayseijx.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163dmwczbrd.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163wdnrydyt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163hkdsvfai.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163gyynkbfb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163dirfomjl.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163mypvdxzc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rexyntwu.html

[U105] JS：节流
来源：http://www.sxryk.cn/163bdxpqygz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163oftrqpue.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163njnwwgkk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163rhbesuba.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163dnappppr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163kghmpcgh.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163vbsgmmtj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163grurplwq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163rbpmddcl.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163xqpzykbd.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163fkhgxgow.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163njnjlfip.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ddfhulor.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163dvaxivsc.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163xqcsidbi.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ynoohhqe.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ofnptoye.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gjbiebdl.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163edxwycnk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ggbiqbta.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163cjvvqgcm.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163fqaiwzol.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163cjkvcqsn.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163nlfmuhiw.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163foiaqdnh.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163nayqnrfx.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163cmnrsrxv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163sdzwblhb.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163icmryama.html

npx vite build
来源：http://www.aibaodan.cn/163fynsvhmb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163kawfljfz.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163enowmojn.html

================================================================================
来源：http://www.xuanzx.com/163fggpwaqf.html

统计汇总
来源：http://www.aibaodan.cn/163bovvmohr.html

================================================================================
来源：http://www.xuanzx.com/163cwmzfztx.html

按语言统计（条）：
来源：http://www.sxryk.cn/163dxowjlll.html

Python ......... 252
来源：http://www.aibaodan.cn/163sgrgpojn.html

PHP ............ 252
来源：http://www.xuanzx.com/163hahucxhm.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163dxrorqje.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163kgncifno.html

Java ........... 212
来源：http://www.aibaodan.cn/163qweuclfn.html

Go ............. 212
来源：http://www.sxryk.cn/163zhhcdupg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163yysikjhb.html

C# ............. 212
来源：http://www.xuanzx.com/163gatsgxvd.html

C .............. 30
来源：http://www.sxryk.cn/163ajatkovy.html

C++ ............ 30
来源：http://www.xuanzx.com/163mldevycr.html

SQL ............ 90
来源：http://www.aibaodan.cn/163zvipomrm.html

Bash ........... 80
来源：http://www.aibaodan.cn/163slnupezb.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hzkjohgp.html

Swift .......... 15
来源：http://www.sxryk.cn/163xjiwyyec.html

Lua ............ 10
来源：http://www.xuanzx.com/163gafeksfn.html

Perl ........... 10
来源：http://www.aibaodan.cn/163morlpqha.html

Scala .......... 10
来源：http://www.sxryk.cn/163loogmano.html

------------------------------------
来源：http://www.xuanzx.com/163ywfazgar.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163pxyyifhd.html

按章节统计：
来源：http://www.xuanzx.com/163dvmwfgmg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163oyfhbktd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163dmwgeqmm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xxusrqrf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163obcbgiwk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163eubwvylw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163tbffpdto.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163curfpbrf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163bufqajnk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ixqflccf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163itsmnple.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nlmpfctw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fqvjvncx.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zcogqufl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wwyhbynf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163gsqiujlo.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vugreiyq.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163igclqydz.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163weguyeqf.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163anhupjnw.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163xnswqmki.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163eqqrksro.html

------------------------------------
来源：http://www.sxryk.cn/163jlykutos.html

合计                                  2106 条
来源：http://www.sxryk.cn/163rdlhejtw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163saionkdq.html

使用提醒
来源：http://www.sxryk.cn/163asjzwgry.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fbhtjqji.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ydlhujpy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163ssctiwal.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ovgdelbs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ttsqdlec.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163mqprldeb.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zpebvdcb.html

================================================================================
来源：http://www.aibaodan.cn/163djmtplev.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163qopveqch.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163ezsavjzi.html

================================================================================
来源：http://www.xuanzx.com/163gtmtfkpl.html

【收录内容】
来源：http://www.aibaodan.cn/163gxvpaerw.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163bljzptfx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163nveddkmz.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163qpzqfcof.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163zjcvtngc.html

【使用说明】
来源：http://www.aibaodan.cn/163gkgervzl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163nralougc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163tzkiebiy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163qsozrzav.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163aoultmte.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163baiyyqxp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163jwmryulz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163pjvmxzwz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163dqolbkcm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163anrunghw.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163eyexavav.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ercxyqlw.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163bxrgmttr.html

【文件统计】
来源：http://www.xuanzx.com/163ypnakpau.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163pawteqem.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mgrugfme.html

目  录
来源：http://www.xuanzx.com/163urgflmra.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lwfibrzp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163iephtbds.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wtoscrtf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163woqzaozg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163kbwtqysz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163rmakgbkb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163kusnjhan.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rblehvos.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163erkdenjn.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kijuntxn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rmvnpaby.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163llxegqme.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bwuejjbr.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sihqusml.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163zireclye.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163hzcctlzn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163gvxhvenn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jpulspgh.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163euccqhug.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ymdxsqbz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163spvvihen.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xxypxtjn.html

================================================================================
来源：http://www.aibaodan.cn/163wrzsurgq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163xmckbmyz.html

================================================================================
来源：http://www.sxryk.cn/163yaammcwa.html

[A01] Hello World
来源：http://www.xuanzx.com/163akyhxlkp.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163qxrjkqxx.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163iwcfpvsv.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163vbstdezn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163xtgrmtvk.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163pnfwykth.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163bdqchwiz.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163jkfavadr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163qpvesith.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163ucxrinjb.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163qfohtmsp.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163abtmhtba.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ugviotvs.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163oqtdcetx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lckeuxyi.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163tosvgaaj.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163sqqqhiqa.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163kyltaeef.html

[A03] 常量定义
来源：http://www.xuanzx.com/163xxiojhlx.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ojfxcnty.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163yvqohihq.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163heitjntf.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163hbakpiwh.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163emkallmm.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163wlqznpje.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163yeuxkqty.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163corzchqc.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163zyrmybhu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163cliakgqz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163kwywyfbk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163ouwrisuk.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163kclhtypk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163lzzorcbb.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163oeufatlm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163gtelnncn.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ljlvcmoq.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163wytvhqvh.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ddiqmdpt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ghaxjlra.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163kicrglyc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ugkiujol.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163oeecakto.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163keisousj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jallwkif.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ikolxopd.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163cxitsjyh.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163xtvcidvj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163wkvacnry.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163yglxwouh.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163eooplgxq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163lsthsnnb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163aerjetej.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163lowuieeb.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163eibuoorz.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ghmbvwri.html

Py:   str(42)
来源：http://www.xuanzx.com/163fokqjadv.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163qgsxzzrx.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163gtvsutxn.html

TS:   String(42)
来源：http://www.xuanzx.com/163nqeuyvjz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163dhsjnypy.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163slerjdfu.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163gsjqbmjl.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163vwvqavei.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163xnjpvnvp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163dvzvykus.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163usmjnuea.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163cyyktsaf.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163nmodyttn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163bdymnbll.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163zltvapfa.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163dyzyiwsr.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163fvpcykvv.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163rqwictjt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163bjusarly.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163krbfmnbq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163lhapkxhx.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163eanpazxk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163unqltdqe.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163jcnvkieo.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163nyvtfxvh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163ykrjmcza.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163oeffcfro.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163nkgmhxxb.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163jjltwayc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163tdkyatma.html


<!-- 参考信息 -->