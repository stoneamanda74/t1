外链999!wailian999！

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163vwjnplly.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ppqjqrdq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ugnxlnng.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ovmmgkgq.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163gtnizqtm.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163iqyxpgbx.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163uynhodhf.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163aohrepwp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163bxbacjni.html

composer require psr/container
来源：http://www.sxryk.cn/163onfzymab.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163jgsxhgnx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163jnjxmuxx.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163fyzgurud.html

composer require twig/twig
来源：http://www.xuanzx.com/163ymokaqcv.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163impcavir.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163yejmmpym.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163iqszbmvd.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163zmzoxnnv.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163jvorvhmp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163fsruybzr.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163pkaloabc.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163utbcbtfh.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163jcefnldt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163gtibibkb.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ejbclyzq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163gjkmwinr.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163aazdmvtk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163pjnbmzcx.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163mpmvmzxi.html

a?.b?.c
来源：http://www.sxryk.cn/163tzjlmdou.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163iaeedfmt.html

a ?? b
来源：http://www.xuanzx.com/163uwewrecs.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163jpfyfprn.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163pyfhwixg.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163hmxftrtf.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163xkwftsfn.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163tdqjekzx.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163xbyigrtu.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163xfuolukm.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ajuamaae.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163nhrjjbdl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163qbdwizey.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163tkucohfs.html

structuredClone(obj)
来源：http://www.sxryk.cn/163vfpuqwts.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wzsebmjg.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163mzpqdupi.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163xoblvyyy.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163smnmzyhh.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163xainphat.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163edtmchmj.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ahrsoyzn.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wobjqaak.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163mbnmyonf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xqmgdeea.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163aamcbjhw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163jaoilpsp.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163xocrrpzx.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163zrbkdkqm.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163qgyfkpxt.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163zmtojtme.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163mpdktvra.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163fbwnysyy.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ufbexpay.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163purcfjho.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163qcmsovhb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163klamtfva.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163fdveyrgm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yqeinhhx.html

[U105] JS：节流
来源：http://www.xuanzx.com/163pirvdnfp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163zkzmrshp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163usqzxevc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163lydoviev.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163fojfdeuv.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163uoqgypqx.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163fausvjuz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ydarucuv.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163lrsdshyv.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bxokomqi.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163eauotqei.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163sphpaaeb.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163vhdtkltk.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163hfipxsdv.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163faynczmq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163qyeceorx.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163mvqmpmyo.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lhhfueil.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163raqadwcn.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163spbddknx.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163zplcvmar.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163rlbfjaoi.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163qfvfhkxe.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ueomzbvh.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163dhcjcvvi.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163wpvtmhpv.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163mxglelva.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163bezhcljh.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163wtbhglge.html

npx vite build
来源：http://www.xuanzx.com/163rtieoyzd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163syoxdeyu.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163mlygxnfv.html

================================================================================
来源：http://www.aibaodan.cn/163wyraxbwu.html

统计汇总
来源：http://www.xuanzx.com/163lgksvlrm.html

================================================================================
来源：http://www.xuanzx.com/163nvyvsicn.html

按语言统计（条）：
来源：http://www.xuanzx.com/163xjnizmqk.html

Python ......... 252
来源：http://www.sxryk.cn/163eootwqex.html

PHP ............ 252
来源：http://www.sxryk.cn/163sfrfypbm.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163vchhvbca.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163pmjxbfxt.html

Java ........... 212
来源：http://www.xuanzx.com/163gtoxmzfw.html

Go ............. 212
来源：http://www.aibaodan.cn/163jhffttim.html

Ruby ........... 212
来源：http://www.xuanzx.com/163brusrrxp.html

C# ............. 212
来源：http://www.xuanzx.com/163rgweuzgm.html

C .............. 30
来源：http://www.xuanzx.com/163nmvwkxkw.html

C++ ............ 30
来源：http://www.sxryk.cn/163wyydendw.html

SQL ............ 90
来源：http://www.aibaodan.cn/163yrasrhsk.html

Bash ........... 80
来源：http://www.sxryk.cn/163sajhaxfe.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163dlrqnnry.html

Swift .......... 15
来源：http://www.xuanzx.com/163kbcqhlsd.html

Lua ............ 10
来源：http://www.xuanzx.com/163jrfgwdvk.html

Perl ........... 10
来源：http://www.sxryk.cn/163upkoykrz.html

Scala .......... 10
来源：http://www.sxryk.cn/163gxqrhtwf.html

------------------------------------
来源：http://www.aibaodan.cn/163dhesatcv.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163rcfmncic.html

按章节统计：
来源：http://www.aibaodan.cn/163qijucvxe.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163thkmjiyv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xjqmceuy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163sstisvaf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163oqqhllwg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163wlbkfkdr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163rpnsijyu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jarsnttz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ugcfevry.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dkwankrb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zbwdscwj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pzvnoxat.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oiqezgcj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163msirmttz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163eddpzsil.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163brhkxmsq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163emodvlde.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ufmodamu.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163gekvjvkj.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163fiwxejme.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163stbbhosr.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ngyhuccn.html

------------------------------------
来源：http://www.xuanzx.com/163jgooqnbz.html

合计                                  2106 条
来源：http://www.sxryk.cn/163vhhleflw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vihioaln.html

使用提醒
来源：http://www.aibaodan.cn/163wxdpwdup.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kdeljnuk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163lmnozqyq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163agixrldc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163jtcplkpt.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163rjqstdyk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163subwkwob.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163stihkzqk.html

================================================================================
来源：http://www.sxryk.cn/163yadzgegr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163zkfbbcnf.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163begwqmkf.html

================================================================================
来源：http://www.sxryk.cn/163mcrmzdzz.html

【收录内容】
来源：http://www.aibaodan.cn/163zzgiarys.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163kizvshen.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163obvhyupq.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163jcyiyfae.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163wxmoqxxu.html

【使用说明】
来源：http://www.xuanzx.com/163makjhjwk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163veveyzxk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163dwhzkann.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163slwgiwty.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163vrjxciqx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ycqguktd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ywsxyyby.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163qckoubkv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163lkykzpvw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163msebgpgi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163mkucpihf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ksrrgrdn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163bpzvjkfj.html

【文件统计】
来源：http://www.aibaodan.cn/163vwfewwky.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163eteryfjc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ngyvopaf.html

目  录
来源：http://www.xuanzx.com/163mchkxrde.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nwulaxxs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163jqorhemf.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163gaxieekt.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163glgfvnmh.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ssddivym.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163nsndxgax.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cwmjdlre.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pgkkdlfo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163rzxzsdvd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163optbltor.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163qklspalg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163howkafnc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ukomjwfo.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uhyeaasq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163iuvratss.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163abkguvxu.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xxlundwv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ftttaret.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163qkwflnxk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163kpqrasxs.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kdgfrqzp.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jjdoqvug.html

================================================================================
来源：http://www.sxryk.cn/163zyaahyqv.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163wzhipioy.html

================================================================================
来源：http://www.xuanzx.com/163xjrohvxp.html

[A01] Hello World
来源：http://www.sxryk.cn/163ejkymhyk.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163nwvcmcpe.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163gblzdfkz.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163lxysefjo.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163qluzmzcr.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163sjzvmvhd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ftrgiagt.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163zyuhibvu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163kqikmbjm.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163fulhbwia.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163sdozlswu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163ytaehzew.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163omxjexvg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163eyifuwjg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163jwhnbztj.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ewmktypw.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163jmqomyuu.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163xwzktbob.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163gwtlczkh.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163nbolkyii.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163elojuvgg.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163coqttqvi.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163zbczefzh.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163kqvdblzt.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163gkxkszvb.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163jugwbuxw.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163optbmzwp.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163jdmbgcfr.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163naotcbzk.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163tyjdtrfd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163jmapnokd.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163fqncvzea.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163zysorljz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163zbaizxza.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163pcicygzc.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163jtupfjzj.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xvxqurnc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163rzkpujgv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163dsaacnrr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163tgkifxyk.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163npbuyrmh.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wtuxhfzg.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hkghrhgz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lkuhifdk.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163twwwdwuh.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163fqwyzwpv.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163wnyxafez.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163yvfpohon.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163dyitqqnr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163oemhapze.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163pybtncjx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163ggrhwdhq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163zajmilur.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163upjhpnka.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163qeoswyoi.html

Py:   str(42)
来源：http://www.aibaodan.cn/163jrgplmmh.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163havbdqwn.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163pohupvxu.html

TS:   String(42)
来源：http://www.aibaodan.cn/163qsykihht.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163jskhfwhy.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163apcfjofg.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163dzkbmghn.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163hgwnlaxr.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163pdzjgmth.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163elmfphjw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ahwepxkl.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163lbksgncs.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163onrjsdru.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163levflqri.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163svjrdapb.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163nndopbdf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163hhrgavvv.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163orgzxdwm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ewyovcmz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ouptomsf.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163bqswgtjj.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163qhxuwbfx.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163mdkxspwn.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163sufngvka.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163krmqmacx.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163caswslis.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163moaplexi.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163yjcldtlk.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163bvyxtnwc.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163elzrmdpt.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163dyacgzyd.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163abdnwupt.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163knjxvxmh.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163fffsrhix.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163amesqwec.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163sxlbdeii.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163lvpmooao.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163npacjnan.html


<!-- 参考信息 -->