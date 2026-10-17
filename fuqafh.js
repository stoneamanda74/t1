外链999!wailian999！

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163hxwtgkmt.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163barqasih.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163anyjcuol.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163qeklcfwe.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163dpfaztch.html

composer require psr/container
来源：http://www.aibaodan.cn/163tqpimjcr.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163cawgowfa.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163nkqwyuaz.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163mdlxkylk.html

composer require twig/twig
来源：http://www.sxryk.cn/163xbjoxtvy.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163jkmbkjru.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163cbijlfxw.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163mygqdgir.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vnvikwuj.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163gaelbaka.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ugcslbiy.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163zyimfzxo.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163inbsgzit.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ffzjikfx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163awmwcrxm.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163vdpxswkz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ipkpfxsh.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ieuirhin.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163rrqhyzhp.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163jpqcdiei.html

a?.b?.c
来源：http://www.xuanzx.com/163xfiaxdtz.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163smmhijvg.html

a ?? b
来源：http://www.sxryk.cn/163qbmjffqc.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163oumqrsdf.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163ibrzsiii.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163adnqvkrf.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163cqrsaamg.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ergcdbtu.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163coddltni.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kiuhbvdl.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dqysrfzx.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163idunsjeb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163fxsxjzul.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163lerjdhlu.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163kxrcoxdf.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163uvpdbfav.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163uhjjkedc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163dxfmvhpy.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163txlvltuw.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163dmkpmrqr.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163jyobmuwg.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163dtytzrnw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fzasrtts.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163jcmogzcu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gbheslql.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ifzzfxki.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163efdxrgsw.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163qikdcwps.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163veqcdksf.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163wpvxbocm.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ikqzzkdy.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163yobjrfct.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163vblrlghl.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163bsgfawtx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163xsypmgdl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163izpwqpwg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163ugcakkor.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163htkjonun.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ukocurap.html

[U105] JS：节流
来源：http://www.sxryk.cn/163gqgqvrsg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163giatgmjn.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163yfsnbaul.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163mubvgxij.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163jrhqbvck.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163aiarnqtp.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rqthlbgi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163wmzcrzwa.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163viulelbk.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hgecsbwx.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163hkauourw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ghglpbjv.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163mpodlpth.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ybzfnmtj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163jimftszs.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163kqijtttu.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163zcgqsigp.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cwbdhmeo.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163inmxtvln.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163sotfabbn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163xqmckvla.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163wsfibqit.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163zwycqjoh.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163bjnodjik.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163fcnnfldg.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163bnkczyuj.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163dumdgtyi.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163bspqzhyr.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163pwobamfn.html

npx vite build
来源：http://www.sxryk.cn/163dhsinzrn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163lgcceege.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163aojsswos.html

================================================================================
来源：http://www.sxryk.cn/163ugjxfsng.html

统计汇总
来源：http://www.aibaodan.cn/163lhbznmir.html

================================================================================
来源：http://www.sxryk.cn/163ycurpval.html

按语言统计（条）：
来源：http://www.sxryk.cn/163blhdtnfh.html

Python ......... 252
来源：http://www.xuanzx.com/163wyacheur.html

PHP ............ 252
来源：http://www.xuanzx.com/163dorfeusv.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163mrxffjee.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163gxkjffjc.html

Java ........... 212
来源：http://www.sxryk.cn/163vzppduuq.html

Go ............. 212
来源：http://www.aibaodan.cn/163rnsiqnws.html

Ruby ........... 212
来源：http://www.xuanzx.com/163thfeqpzh.html

C# ............. 212
来源：http://www.xuanzx.com/163wfweuoam.html

C .............. 30
来源：http://www.sxryk.cn/163mebfrpjm.html

C++ ............ 30
来源：http://www.sxryk.cn/163ehofocrt.html

SQL ............ 90
来源：http://www.xuanzx.com/163nwgmrckd.html

Bash ........... 80
来源：http://www.xuanzx.com/163hmkhokqc.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hmymmjgc.html

Swift .......... 15
来源：http://www.aibaodan.cn/163upklabqz.html

Lua ............ 10
来源：http://www.xuanzx.com/163drccwqzp.html

Perl ........... 10
来源：http://www.xuanzx.com/163ptcmamdo.html

Scala .......... 10
来源：http://www.aibaodan.cn/163dmiwxdlh.html

------------------------------------
来源：http://www.aibaodan.cn/163nezodjwn.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163joqwfest.html

按章节统计：
来源：http://www.sxryk.cn/163ixfooozw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163yqlitqnz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jskermvl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qwgwmaol.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kajfembx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163hstvkljf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rhshqrnj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163odxhteuy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lakdzgwm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163iuyloyur.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163srirmncy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ggejugki.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ftjdssax.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dasboeyr.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163tyzgtbgg.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163efcixjkj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163npojtfjc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163yhmxyymd.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163xafuscpj.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ekfoatya.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hminklwu.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163xahkvrww.html

------------------------------------
来源：http://www.aibaodan.cn/163avvgtqrh.html

合计                                  2106 条
来源：http://www.sxryk.cn/163vczcckli.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pfxhaswt.html

使用提醒
来源：http://www.xuanzx.com/163jeownuhz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fumesglw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163asxsjgzp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163rwwtvvbs.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163vwskdyca.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163ppbcdhny.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163tyyntigk.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163zgarqcti.html

================================================================================
来源：http://www.aibaodan.cn/163vixkziew.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163kedrnmaa.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163bzuvzaat.html

================================================================================
来源：http://www.sxryk.cn/163bdqftags.html

【收录内容】
来源：http://www.sxryk.cn/163raivibjf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ploiodlx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163upvxtkee.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163wxvojnuv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ohsamsdx.html

【使用说明】
来源：http://www.aibaodan.cn/163glmwxubc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163qsrwbalz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163bjrkgbha.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163tvpvcwkb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163kgfecggt.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163vrytwiaz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163tdbesbku.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163hmewdurj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163euhzjwxq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163bivlqyus.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163hdzzivhw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163uppncqkz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163bqjswifw.html

【文件统计】
来源：http://www.sxryk.cn/163vmxdfore.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163qwuiltau.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vokqkgbk.html

目  录
来源：http://www.aibaodan.cn/163xhtdmzxf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zexygevf.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163fmwjmibn.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163zzkgslyf.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gjafrpqj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vvcvrevg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163fzyzfjda.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163tnnkhhyd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ahjobywu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163axlexybo.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mougartd.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163fxslhphm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mosuvpnu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163masaxzmw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xokgsbef.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cqfzepmc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163hsxpiewe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jgczwbgw.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163hfdvsolk.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163boglhdou.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163zkbnuerj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163phjtyzvl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163odwdtidf.html

================================================================================
来源：http://www.sxryk.cn/163kkgumjbz.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163bvpdmkln.html

================================================================================
来源：http://www.aibaodan.cn/163eslpgnib.html

[A01] Hello World
来源：http://www.aibaodan.cn/163byrprpde.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163yacejimv.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ovogbwpz.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163detszazm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163qygdggeh.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163lenlbpzb.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163lwddzhve.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163lsdihigt.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163okryvctm.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163pdrcjrxt.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163knwefuhb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163bqkzmjls.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163lbqpxxti.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163mkwotfwq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163otqcepfr.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163vonxcoui.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163axhsogmi.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163irrwpxlg.html

[A03] 常量定义
来源：http://www.sxryk.cn/163cvsvwdbd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163rwmdbrhp.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163rgopzedf.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163sydtoemm.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163mvrzxbil.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163miyzojhq.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163kjfqsvyz.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ksehfntn.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163usdwvbit.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163vgalaebg.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163tymeznsh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163qlfmtsme.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163kgseepbs.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163eshckhsf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163cvggdelz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163mevtxdop.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163tvbtymrp.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ktwbftol.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163zhjhdzag.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163vqhcckcl.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163mvrqoyhv.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163lpmdrfss.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163hdwijesa.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ckvgislh.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163iighndtk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163knienisx.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nlenhsxb.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ibjqoalw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ncnubpoo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163pwpwkwkz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163baxlzuwq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163gekuucat.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163clngawzh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163xjzefdzz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163efebgwdd.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163skzqdnxm.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163jcdlufxw.html

Py:   str(42)
来源：http://www.sxryk.cn/163ddofhtuc.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163qeimbnsu.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163bqjbbuzb.html

TS:   String(42)
来源：http://www.sxryk.cn/163vlbuvgzy.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163temiicbm.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163odyspwrj.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163ipfudqow.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163xysmlzic.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163azqfsxms.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163aneidlik.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163lzxegjzt.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163qajorvmq.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163imbdsbnr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ffvoeadh.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163duowkmcz.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163icgtviri.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163festausx.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163unrfxusj.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xbzhvpew.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163aotfspmr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163kosejmdw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163sinmuddh.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ileaathy.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163ieyftqcx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163nmnrlvzt.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163mtdlovcl.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163zvqagljt.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163nlchfzpr.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163fbaqmfkw.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163abxzlklv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163rzjzqnub.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163ncrcikuj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163gpfxytop.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163fnzuzgya.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163nvowedhi.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163qepjxakg.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163xdfdxxjt.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qfrhccof.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wkssgheb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gvgxwnsw.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xitdilfa.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163saqqmhkw.html


<!-- 参考信息 -->