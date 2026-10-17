外链999!wailian999！

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163tvzuyikt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163eukrnhic.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163upzxhlih.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163wryygdtm.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163miueqrpy.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163yvawfqeh.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163cwzeycek.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163iwelvbok.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163yqjionyw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163jiibqwor.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ozcnkpws.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163zstvenmm.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163shgioetc.html

composer require psr/container
来源：http://www.xuanzx.com/163ebdeijyb.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163jauaaqmi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163wnmpnyoc.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163biibkzqr.html

composer require twig/twig
来源：http://www.aibaodan.cn/163foailbyy.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163sdbishcv.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163sibvmvmj.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163xsmpnflu.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163lvvreati.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163rhzzzlwu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163inssgozz.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163jyliojcs.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163dxtesfzm.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163bgsxgtwk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163shxrrtcm.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ikdbbamd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mimrqoum.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ykptjwuf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163axqlyzbl.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163nszutnjn.html

a?.b?.c
来源：http://www.xuanzx.com/163zalhsulg.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163fyeyxpee.html

a ?? b
来源：http://www.xuanzx.com/163vuefhjiy.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163xhuuhcuh.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163xtthdvzf.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163dphqywbp.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163qzdlzzuv.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163vomhfauq.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163maiuvazy.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163azquousz.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cemtupcw.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gtecgjtj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rxutepbg.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163fqypmumu.html

structuredClone(obj)
来源：http://www.sxryk.cn/163dgchfnrn.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163worbkzsz.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163cgaelhrg.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163qhonlwcp.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ascmorix.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163hpfybvjr.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qmusorls.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163oywzvhrg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163syjzhmus.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163wueaeipe.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ezhhqzrf.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163rcrawnot.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163djyfvpby.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163fsebrqan.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163tvqopsar.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163extggcyr.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163hkcnaaib.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163tdalduvo.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163revpvkye.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163iszombdr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ffbliwfr.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163btuwmyhj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163gesfxgzb.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163fsochhht.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163npzdteev.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163opulprzl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163vgbgoyrd.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163joizysvp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163enbldldt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vtvuhyek.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163anuvfizb.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163fjbwsekc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163dcrpkdqy.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163kapmuyib.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mtewrqau.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163nplaboxt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163hvfzymbq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163wmvexcsi.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163aoqmnmaj.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163uhbxyjie.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163drbrgcdf.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ooxdngrb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eghxrwou.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163yuwggwth.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163khwybvde.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163zzfuilnt.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163fsilkrnj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163opgmkofk.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163gfsiajpa.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163lzvkequh.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163yhdluwax.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vjwlmoga.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163lctfmpka.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163anqzmizn.html

npx vite build
来源：http://www.sxryk.cn/163rcxksfog.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163lxatahls.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163fycwzeln.html

================================================================================
来源：http://www.aibaodan.cn/163hdbxfeki.html

统计汇总
来源：http://www.aibaodan.cn/163qpsdstfk.html

================================================================================
来源：http://www.aibaodan.cn/163pndmkixw.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ulkspggm.html

Python ......... 252
来源：http://www.aibaodan.cn/163uqtwnpsh.html

PHP ............ 252
来源：http://www.xuanzx.com/163szuhmgdj.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163oxureyps.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163mjgmjnro.html

Java ........... 212
来源：http://www.xuanzx.com/163gfraqvzl.html

Go ............. 212
来源：http://www.xuanzx.com/163kxczfcwk.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163sumamzlw.html

C# ............. 212
来源：http://www.aibaodan.cn/163miidgkdx.html

C .............. 30
来源：http://www.aibaodan.cn/163akredkco.html

C++ ............ 30
来源：http://www.sxryk.cn/163fwwvebup.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ddzwgiep.html

Bash ........... 80
来源：http://www.xuanzx.com/163jtjzkthg.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163lxifrzir.html

Swift .......... 15
来源：http://www.aibaodan.cn/163fjkjugjh.html

Lua ............ 10
来源：http://www.sxryk.cn/163bkdximde.html

Perl ........... 10
来源：http://www.xuanzx.com/163wnheujho.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ovoygqim.html

------------------------------------
来源：http://www.aibaodan.cn/163ieccquzc.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163ggoemxvc.html

按章节统计：
来源：http://www.aibaodan.cn/163aihlovoz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163usryqyqk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lyzqrxjq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163svccfwya.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163evarxlsg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163cyavzgjd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lljnafia.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163kbrwnnct.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163xrzeuhax.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zpabtohs.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163objeoqik.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dwumagzj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vjjcxlhs.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163stdyedwe.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xpuoklsh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163lhdskzvi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dsoosfzr.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163cvkatcpa.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163qrzrqgxn.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163mastnycn.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163aiachpwt.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163nndytuoe.html

------------------------------------
来源：http://www.sxryk.cn/163ynozxcmq.html

合计                                  2106 条
来源：http://www.sxryk.cn/163jcqgrnsw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163dodjqklp.html

使用提醒
来源：http://www.sxryk.cn/163wzvythrg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ukcnpdoc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163raqamgvm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163cwjqdoam.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163wjwxtcui.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xsusuiuv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163bzzrmbkp.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163likpmikd.html

================================================================================
来源：http://www.aibaodan.cn/163fzdydqpo.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163bshgfcno.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163nljyegbj.html

================================================================================
来源：http://www.aibaodan.cn/163elgxdaif.html

【收录内容】
来源：http://www.xuanzx.com/163altplkao.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163pvhzlckq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163vfryxzjj.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163uqfavivh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163esavudrb.html

【使用说明】
来源：http://www.xuanzx.com/163zpnnemjx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ggokvwqy.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163jdfsdonb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163igtptbhy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163salcdpoz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163rzofbdpa.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163zjtnuuqz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ibvvjqev.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163snhtvjfm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163kvjcjezm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163iziazjan.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163zwwtgpdl.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163nixcrzsz.html

【文件统计】
来源：http://www.sxryk.cn/163asqbzbdz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163wvndmoai.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qadqfrpx.html

目  录
来源：http://www.aibaodan.cn/163czgmxxge.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163godcauta.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163iygqjtvy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xtprxzqy.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163iuekkifj.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jmuyboig.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163fsxuthdn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163dyindsek.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163yibhtfso.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ogehvyik.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gjnmniit.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ndymfxfa.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163wpjctoaz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fveprpsz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hfxdnevl.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163dmpudnjx.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163iivhcpxe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nymjwyzm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163wnzlkprd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ectpuaaj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163axswoquk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163klmuvahh.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hlyompkp.html

================================================================================
来源：http://www.aibaodan.cn/163tnyvgphz.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ghtsgbui.html

================================================================================
来源：http://www.aibaodan.cn/163jzfmezzp.html

[A01] Hello World
来源：http://www.sxryk.cn/163syyucjfb.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163hzyqlgxo.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163xnzfsapj.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163rapoyhwp.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163nfixvlgx.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163clurafaf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163nkzbfcjf.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163wbfmcnbw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163vziiabhw.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163rtmfgexc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163zuotegyn.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163vnddymzo.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163sbvezzug.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163rgkjqeda.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163mwbtoxgu.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163fbhkzilp.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ajtwkzqp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163rhelaopt.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163wekfdayz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ixjzkuiy.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163mrusjbkk.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163aqmozwzu.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163qovdpqii.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163lyspcdzz.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163tzmbkuwf.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163vcpqgzow.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163meuqvqxn.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163nsdnatqd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163pfgfrsoz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163msyaacjg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163qofgllcd.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163wfbqzxdl.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163iiamnwhi.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163rpnoxenx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163oucwmfvx.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163hznaecqm.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163yzwvsnuk.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163doirvjsh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163vfdopfjb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hdmthvlw.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163jvttdxdj.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mazxuxrn.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ggmdnemn.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163stzzkhbu.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163owbviziu.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163koavyfgc.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163rzvzbanp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163mtxibtwf.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163tkntbtlp.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163regffhsx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163lwckjxev.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ocdqxurq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163vgjrfjbg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ukbmzslv.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163cdbhqtqp.html

Py:   str(42)
来源：http://www.aibaodan.cn/163nrnlqzrq.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163bsdprzdk.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163rgtifetr.html

TS:   String(42)
来源：http://www.aibaodan.cn/163xsppjhgt.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163zqqmweii.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163jqxlhrms.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163ckperzhz.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163iienvoij.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163vwdupjmq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163pzhaipnc.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163pevownaa.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163anjvichz.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163fpqznbzy.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163tfsvowrq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ygkyzhjk.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163caaunhim.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163zhhnyess.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163cfjvkuxi.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mzydphfo.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163cxhkqumq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163ihpenxxd.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163rjziazbu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163inaouicv.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163lxkajuoi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163pgjqdznh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163wzybazxx.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163mhgjfxuu.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163rubobxjk.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163toousuie.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163aeisyxpv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163iifpqqxb.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163bhqbbchm.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163aiuhwavr.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163qmhovvnm.html


<!-- 参考信息 -->