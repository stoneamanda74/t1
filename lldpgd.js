外链999!wailian999！

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ikkuipbf.html

composer require psr/container
来源：http://www.xuanzx.com/163kvqszufv.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163egbbirqi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163mdxyrddx.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163azmeygzb.html

composer require twig/twig
来源：http://www.sxryk.cn/163ebuplmdb.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163wxxqkvbc.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163tuevjljy.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163ctaizgkc.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163nbvptrdq.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163mjlbvvgp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163dukzrrxo.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163jvbyitir.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163amkqipkl.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163yuazpnmo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163kczuueap.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163avxzfjpn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163vpqjumhc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163zzcsbnfh.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163vipmvjpe.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163zvqfadwz.html

a?.b?.c
来源：http://www.aibaodan.cn/163kkbmlixl.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163virjkpjk.html

a ?? b
来源：http://www.aibaodan.cn/163zwssrvyl.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ruaqhajg.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163phtlpmmp.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163onrcnzro.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163euhfbzet.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163bsaqetez.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163yiauzuau.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163fqmmbegs.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xijimkxe.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ulqxfeoc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163grvyzxmc.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gakqnjvn.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163rdmdpmsj.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163wmeyhqfv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163idocxnmd.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163vbhepnbp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ajidksje.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163zecxjumz.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163lhitdigc.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163lbyltpji.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jqzghzxk.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163elmduiwt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vxxofzid.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163opmlufvn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163qpmipggt.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ofwjvvst.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163sqswmxwq.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163vvkgtikf.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163jwhiemkg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ytqjvciu.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163wrkmssgu.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163jzbzbelj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163zagjvhqg.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ntadvkxo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163pvzpzebb.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163olgoqsqj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163copfklfs.html

[U105] JS：节流
来源：http://www.xuanzx.com/163faelbleb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163dyqfnuec.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163gkukwspp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163faapecbs.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kogxxhng.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163sdxfmaxf.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163bqnbzfec.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163pjvkjvbt.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163qcenaszb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zsgyvfpf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163covqmzci.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163yonmlxwr.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163wisokbtv.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163jtwdeaqw.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163konnrskv.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163kxbxqdnh.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163hapffore.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163afaubfpg.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163cadltqsf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bydfhgkh.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ljstqouu.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163dlfpafjg.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163bdolcepo.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163htakcfkd.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163kwtrnwek.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163szhkftbg.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163futulwlp.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163bnrvnrhp.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ksfwhsus.html

npx vite build
来源：http://www.sxryk.cn/163rsfsafaz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163lrdrynwn.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163yqvykeki.html

================================================================================
来源：http://www.xuanzx.com/163qmkekzmc.html

统计汇总
来源：http://www.aibaodan.cn/163ylfiaxdy.html

================================================================================
来源：http://www.aibaodan.cn/163mibzlcuy.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ivrcndoz.html

Python ......... 252
来源：http://www.aibaodan.cn/163czgmxzxq.html

PHP ............ 252
来源：http://www.aibaodan.cn/163lrpzkype.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163tbsyaeqj.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163vrkhzjum.html

Java ........... 212
来源：http://www.xuanzx.com/163oqtecuen.html

Go ............. 212
来源：http://www.sxryk.cn/163ixkvqege.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163rbweaktx.html

C# ............. 212
来源：http://www.sxryk.cn/163puqgidmi.html

C .............. 30
来源：http://www.xuanzx.com/163wmivtgqu.html

C++ ............ 30
来源：http://www.sxryk.cn/163kmhghbpt.html

SQL ............ 90
来源：http://www.xuanzx.com/163gobzdzjp.html

Bash ........... 80
来源：http://www.sxryk.cn/163amvdscsi.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163dbkelobu.html

Swift .......... 15
来源：http://www.xuanzx.com/163jhpcclub.html

Lua ............ 10
来源：http://www.xuanzx.com/163irhlffxc.html

Perl ........... 10
来源：http://www.sxryk.cn/163cvtamkop.html

Scala .......... 10
来源：http://www.sxryk.cn/163luexxgro.html

------------------------------------
来源：http://www.aibaodan.cn/163dizkmxmd.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163cgrgwplc.html

按章节统计：
来源：http://www.aibaodan.cn/163aflsslgx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163anabnhnj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rilmbkes.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kgkwbtnf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163soyvodjv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ymoenvqk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pcifyyia.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163shuohedw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hycndzsl.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hfiixrsi.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163syxfaiez.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kqmojsnt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tmbteiuh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kacqjwoh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163snsiopfl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163gzjhhjgp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ipqlscci.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163nhclijqw.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163bvqfigzn.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ktzefise.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163bslukkhh.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163jzusqtsy.html

------------------------------------
来源：http://www.aibaodan.cn/163smqeneae.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163kfcreriq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lodmcvdh.html

使用提醒
来源：http://www.sxryk.cn/163swznyywd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163iuucyqkr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163emphfcih.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163jepfoobq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ahqelzgm.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163elamgqrm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163mxxpnsry.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ttvgaozv.html

================================================================================
来源：http://www.sxryk.cn/163xdnmiirt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163skmrzjwo.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163wsvuafqf.html

================================================================================
来源：http://www.aibaodan.cn/163resoijqu.html

【收录内容】
来源：http://www.sxryk.cn/163gfdgdtos.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163loznbfjf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163rlkklnvv.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163fjgfiiay.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163rjcaufsq.html

【使用说明】
来源：http://www.aibaodan.cn/163tkpjspfe.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ebhpjgsn.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163bmvnqnpr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163oubzbtqb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163zlwehutq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163xcqjrszx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163cayardbf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163dnlsvheg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163sojhvwpg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163rtlbdcka.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163epcwnljp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163cvrownok.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163gnabllqs.html

【文件统计】
来源：http://www.aibaodan.cn/163tncshxwq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163kvxfhixd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163sphviokp.html

目  录
来源：http://www.aibaodan.cn/163caxnukpj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ebmplecv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163mxznrklf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hasklxpq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qycpxnwh.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163nsbgdiwv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163qagfbwus.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163duiajoqj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xejzgaek.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163makkcddd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uvybpdlz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hmkxkgwp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hflyqsnn.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163amqtispm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mczehfec.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hkoxueug.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163gnunmyyd.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xksbuujm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163snbegahu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163exdnjbzh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163fykmpwgg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ufoauope.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163awcqcnbw.html

================================================================================
来源：http://www.sxryk.cn/163tgbxzwcy.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163njszdaav.html

================================================================================
来源：http://www.xuanzx.com/163znajblnt.html

[A01] Hello World
来源：http://www.xuanzx.com/163zipsoxlb.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163yecxbmqk.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163objotkcv.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163cnnjjomf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163peorsame.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163axofmmzg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163ubbcafjs.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163znqnsimo.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163rzxmcycu.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163eekrvawu.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163jlnhzgdi.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163klktuvbb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ndlmcaic.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163hdluenna.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163buxkzyvp.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163slljhdds.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163nzkappud.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163vgmwwhfb.html

[A03] 常量定义
来源：http://www.sxryk.cn/163xtocxvmy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163zqlgvlwq.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163dqxjulku.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163lwvezvsj.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163sqpriozn.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163nlkqlalf.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163onipfmhv.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163bovibvan.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163exofflrn.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163sdeehvch.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163mvqinori.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163gtrgjbbt.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163azzqjdka.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163gwgrkqrw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163mholivmp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163txtaalxb.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163wsrjlpxy.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163stbktdxd.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163tcdfonke.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163syhbdpoo.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163hgfvunim.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163scbpsswu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163mxaqpyya.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fkqzzcnd.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163iatshqsg.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163okwesima.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163uftduazu.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163zhgpqazg.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163dccqoplm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163zmpsrjxr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163yrpxsjyn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163dxfsgmbp.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ikzqogkb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163bwglclvw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163bascrdhs.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163mwiuvsxu.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163cpugzvfw.html

Py:   str(42)
来源：http://www.sxryk.cn/163zosvjgjs.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163aqwkzzvi.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163kruenrtm.html

TS:   String(42)
来源：http://www.xuanzx.com/163qocngirj.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ndpnwobf.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163htoskcdu.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163xwogqauf.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163ftuxevcj.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163tjfaifnl.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163vnoognih.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163egqwnwkg.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ngrmrehn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163nsomidnn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163fbitlcps.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163occmbfwa.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163xxsbsqkr.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163dwziqdvb.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163xoiivlut.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tjassuji.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163yawljeby.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163myjfggfw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wjdjiifj.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163pztmxxkd.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163nixafuaq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163xjqboynu.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163rlrjuyvj.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163uqmemwkf.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163khnsjgps.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163dgjvglci.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163brztvqjx.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163tqplgcjq.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163beqotuzi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163lnqqzxjl.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163albalbwo.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163oeuqjiga.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163yvexddmn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163itysigsj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kzskzzdc.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hjatjdit.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163eodvhqlv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jyhtalgu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163cysufqtn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dbklcefu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pxgrjbta.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163dgbnrbud.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163dyakrlac.html


<!-- 参考信息 -->