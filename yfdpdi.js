外链999!wailian999！

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163myejlapx.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ijsrjvzs.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163mczomxxh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163knmrsqxe.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163gotbcivn.html

composer require psr/container
来源：http://www.aibaodan.cn/163sqkggeyi.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163vwyoijov.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163lflxdelp.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163cwbhelyg.html

composer require twig/twig
来源：http://www.sxryk.cn/163vntgujqq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163oguqbqee.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ypnmowkq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163aotttafd.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163jlfswizn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xqsvibrj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163wjtbhopu.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163tpqqeldy.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163luixcibb.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163hxdrsbeo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163tytdfmad.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163pojwhlgs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163vruwpclx.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163bwzbnjxx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163wtrwdczc.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163tohjyedv.html

a?.b?.c
来源：http://www.sxryk.cn/163swhajyoa.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163olnrgcja.html

a ?? b
来源：http://www.xuanzx.com/163djjokycx.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163qgqippjb.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163fglnrtno.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163hvfojfkm.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163lfquuddt.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163lszwjluj.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163jlhaboyd.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163swzitjpr.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xsyehavy.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163tqrvsdgm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163crgrremu.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163zegfwhqp.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163jfyhlezc.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163hnmlxujy.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163qjaabflk.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163mvemprvj.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ifgyemxt.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163llgtwjgl.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163aqoiqvek.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ippzdexr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163tzwytmgh.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163fcwumsps.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163dfsryagp.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163eymxurvm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ndudauqh.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163mivabxpk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163slubnmlu.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163eswnwmiq.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163yvxzzylh.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163faqtdlan.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163vosjqifa.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163xnnhkzvp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163lebxsfal.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163eaaxhnkd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163tpfgzcny.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163dabfyuel.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aysefefe.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jogklqll.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163kdocmuwc.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163rguhduja.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ixcgpsza.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163qgyldwcl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163nrzqotex.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163eejyxske.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163bidbxkje.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163gebssgbq.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163etzcxnfp.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163zuppwsmd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163nzprsiai.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163wjbomqru.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163pjbbxlbd.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163fkmsqrxe.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163wuqrpbbo.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163cnaiffsc.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vvhuphxy.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163irmcocxo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163itmmhrxc.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ahrmiffg.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163cvztexur.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rcfbxokj.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163nhrtyafs.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163zxaqdgnu.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ouecohdq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163yqwuqakr.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163lhvdbxdl.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163oxqdodhf.html

npx vite build
来源：http://www.aibaodan.cn/163rhnrlxpd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ttfbbded.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163tgxxldus.html

================================================================================
来源：http://www.xuanzx.com/163clfkxtxz.html

统计汇总
来源：http://www.xuanzx.com/163npwvskml.html

================================================================================
来源：http://www.aibaodan.cn/163viwfdgha.html

按语言统计（条）：
来源：http://www.sxryk.cn/163wetkxfya.html

Python ......... 252
来源：http://www.aibaodan.cn/163uczyulhm.html

PHP ............ 252
来源：http://www.sxryk.cn/163wfqfqclg.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163aicmqrny.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163nvawkmpo.html

Java ........... 212
来源：http://www.xuanzx.com/163xpyhnvvi.html

Go ............. 212
来源：http://www.xuanzx.com/163lsqrjscj.html

Ruby ........... 212
来源：http://www.sxryk.cn/163mrhnvgpm.html

C# ............. 212
来源：http://www.xuanzx.com/163ypfvizzg.html

C .............. 30
来源：http://www.sxryk.cn/163tcmlcojf.html

C++ ............ 30
来源：http://www.xuanzx.com/163oebsrbso.html

SQL ............ 90
来源：http://www.sxryk.cn/163gvtvkvja.html

Bash ........... 80
来源：http://www.sxryk.cn/163ptavdgiv.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163afweafpn.html

Swift .......... 15
来源：http://www.sxryk.cn/163ltohbsrk.html

Lua ............ 10
来源：http://www.aibaodan.cn/163citpbtsu.html

Perl ........... 10
来源：http://www.aibaodan.cn/163fvizsmdb.html

Scala .......... 10
来源：http://www.sxryk.cn/163nysmgfvk.html

------------------------------------
来源：http://www.xuanzx.com/163zrxjnjos.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163bbhzqyxc.html

按章节统计：
来源：http://www.aibaodan.cn/163hpwjofpq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163nrfdxsib.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bsvheyjq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wziwlwgt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163lhitpfzr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163rovlopeg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163gogtdhzm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163dcuoshdm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zdxtatmq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xallrvfk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ecnjwykl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cvaxaabc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gukxuhzf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xgsdbdiq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163bglchxxo.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163cvrmgxgu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fckdauov.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163jqwvuecf.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163fcrsqlaa.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163igponafg.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163zutslsnk.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163odytcqvt.html

------------------------------------
来源：http://www.xuanzx.com/163eswzozlt.html

合计                                  2106 条
来源：http://www.sxryk.cn/163lbokawjp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ulxcoobl.html

使用提醒
来源：http://www.sxryk.cn/163ytdrqxee.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ovpajnzn.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163pnazwewc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163wjkigkft.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163exlttngw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163kdogzadg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163zygifkdx.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163uhjvxiwk.html

================================================================================
来源：http://www.aibaodan.cn/163cerjnybu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163agmahmid.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163agvaxuko.html

================================================================================
来源：http://www.xuanzx.com/163eyczngts.html

【收录内容】
来源：http://www.sxryk.cn/163fokjqqri.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163arrdpgcm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163jyuwiven.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163xwyljfty.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163zkpclnka.html

【使用说明】
来源：http://www.xuanzx.com/163qbejckzn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ttqczmuu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163glomhbgl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163qernbfwe.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163nqkkgpct.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163vmnnnapo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163gjazlogh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ocesfozm.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163hvjgrrzo.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163crmritpa.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163rsubgtuj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163dxtambys.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163xeieqwno.html

【文件统计】
来源：http://www.aibaodan.cn/163cvgwecxh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163hjykyaut.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163metkchsb.html

目  录
来源：http://www.aibaodan.cn/163dtynjdhg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mejbyybb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163oxasyydc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163luxhlszp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163grsflaue.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163evzdhtyw.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163brebliqu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163fjfqejyr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163djorvuds.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163rlblsjzg.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ceqrzqpv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163uskfoxoz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tzzamqyg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jpwurbhq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dbomsnlq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163psdfkcmk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ydtwmfyp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mspclilf.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163qqygjfzu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163tzsorlud.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ftpywnmo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163diwyuzzw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163mvnzixhv.html

================================================================================
来源：http://www.aibaodan.cn/163nmzplang.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163mnszglte.html

================================================================================
来源：http://www.aibaodan.cn/163bvwjwsjd.html

[A01] Hello World
来源：http://www.sxryk.cn/163jolgiktz.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163hchvbdxk.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163nwfefwgd.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163ksfoocee.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163vhotlhlk.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163vlwjzzjn.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163hddophzw.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163xtfhzyat.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163qzhxevru.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163pwqlorcc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163uhmwpdsm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163ybxhdcua.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ulfswzaa.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163qtaodvsl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ykjgestz.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163sqaezpms.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163wlwmjnhs.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163yrjsyviy.html

[A03] 常量定义
来源：http://www.sxryk.cn/163vvghunxg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163jchtnocz.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163cuaeymga.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163gfwzuuja.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163oxqghwku.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163zufjeoxe.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163zvsuhbyi.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163wuokcbfi.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163kvoisoax.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163pdhwyvjp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163nzeljdou.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163udgpihvi.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163jeounipu.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163raouwgdj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163sjcylxzf.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163onoabdoc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163etoarqwn.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163vfuwngke.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163hjziyvdb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163dnpukqev.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163agktodua.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163icjuzuyb.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hbvkiwft.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163swcrdits.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qizahbuu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lzurlksz.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xuycqfeh.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163mvgnyrqq.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163dhrjdatg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163enjtkzqr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163axsfqoxh.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163gedwtzwy.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163rtyjolwy.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163linqsfqr.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163flvvhzhu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163aqzszxms.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ozxpdtkh.html

Py:   str(42)
来源：http://www.sxryk.cn/163mgozoogn.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163bedhmaxg.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163cbnmvauf.html

TS:   String(42)
来源：http://www.xuanzx.com/163zeexpszx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163qqdvujgm.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163dhrvsfqi.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163brekmamq.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163nkkufyzq.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163stndbsdk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163mgqlsfrh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163zqinfdia.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163tcrbpjsu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163grafuhse.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163wnlnntps.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163ggfekdgn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163eewqodws.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163qejhrryd.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163mxvnowtt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ixjqbtrw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163tvyjjmgp.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163coaewnje.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163itronbgg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163akhdnxjq.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163oxhwlaba.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163qpbgddmz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163hplsalzl.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163llulfruj.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163cdubinwn.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163ksievuce.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163knqbabja.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163acogdzxv.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163vduuiijd.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163tqnmzvuv.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163xqibrgwq.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163piszqojs.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163gumhgbua.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163mbzfaakl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yskotjec.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163btzgowsn.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pikwcpql.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ewimdmnq.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163spbhtato.html


<!-- 参考信息 -->