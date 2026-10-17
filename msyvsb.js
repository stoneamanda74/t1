外链999!wailian999！

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163vgxjlkfu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163udvuufyb.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163tndwlxen.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163sttstrtf.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163yceomqxe.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163fmhmwhpt.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ddxchxod.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163rsogozfh.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163jziqipoy.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ipgrrxqx.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163iymguqfp.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163yqculxlh.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163lstijway.html

composer require psr/container
来源：http://www.xuanzx.com/163xnwucfcd.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163pldknudm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163vbjlsqoz.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163vfwwuphj.html

composer require twig/twig
来源：http://www.aibaodan.cn/163texpeiae.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163yinrimdg.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163negnrtza.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163kcpboojf.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ljovycnd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163lnsalshm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163wldumoxv.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163blafebjb.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163wtvajwra.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163uldlipdt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163fexxsbxv.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163whpwdtvh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rcgglbaz.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163lhwwonzr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ijurqnmi.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163lqppkuro.html

a?.b?.c
来源：http://www.xuanzx.com/163sfermbjx.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163hsnhvqsh.html

a ?? b
来源：http://www.xuanzx.com/163iioovhhf.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ttgvvtei.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163clhyfybr.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163tbkyduje.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163tleihjzn.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ffqunuyd.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163gkaghnys.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163cstkpdmb.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ymtdeorz.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163hkpyfvpi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ujjxcktu.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163hblnwdvi.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ychzktip.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163vqcfevmq.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163uianypmv.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163sddytduz.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163vfjhlxqr.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ziukxtey.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ocfravfb.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163gphklfau.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tubxfmlx.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163vyvmssxt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lvhjeibs.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jjgjeyvq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163mdpfqtjv.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163hjafzucn.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163vjaidfqn.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163mpexgupw.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163qayyaahi.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163dbnbjphh.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163uiarkuoj.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163sqkvprns.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163jnhmqexg.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163bquuzopk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163tlnidguk.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163nwunyqpm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kkeapygy.html

[U105] JS：节流
来源：http://www.xuanzx.com/163jnkjzgft.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163klataxep.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163vidthkis.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163txthkrkv.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163lbakvjuu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163earnukec.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163pvpkhshl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163cqlvgdzt.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163imaoteoh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163efybolyw.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163lghtgggz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ozmtbdgm.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163suroaxcz.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163hbipgpzv.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163kdzeuvpz.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ygcmoaha.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163sqiapjlc.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163htncmptb.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ifktlrgc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hgltumip.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163qqvmoqlk.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163xgbqatau.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163xjgsynis.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163zqugyltm.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163auhfeojd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163dshuouha.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163fpwntgyu.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163fceudvbk.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163oifqjpxl.html

npx vite build
来源：http://www.aibaodan.cn/163uzycoxcp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163zodsxltu.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163bkhldysk.html

================================================================================
来源：http://www.sxryk.cn/163zfavyrtm.html

统计汇总
来源：http://www.xuanzx.com/163bjznctct.html

================================================================================
来源：http://www.aibaodan.cn/163gdaepdjv.html

按语言统计（条）：
来源：http://www.xuanzx.com/163aolvhegr.html

Python ......... 252
来源：http://www.sxryk.cn/163lkwpnuli.html

PHP ............ 252
来源：http://www.aibaodan.cn/163vgzmneac.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163zoexpnya.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163ncgmcgjp.html

Java ........... 212
来源：http://www.sxryk.cn/163doqwsqrv.html

Go ............. 212
来源：http://www.aibaodan.cn/163vebngena.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163cublpjxs.html

C# ............. 212
来源：http://www.xuanzx.com/163jonlhbea.html

C .............. 30
来源：http://www.sxryk.cn/163aqgroyfq.html

C++ ............ 30
来源：http://www.sxryk.cn/163hyypkryv.html

SQL ............ 90
来源：http://www.sxryk.cn/163gpjdmpfe.html

Bash ........... 80
来源：http://www.aibaodan.cn/163razsmpci.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163fhpmbcsw.html

Swift .......... 15
来源：http://www.aibaodan.cn/163eysswggn.html

Lua ............ 10
来源：http://www.sxryk.cn/163uejnypbt.html

Perl ........... 10
来源：http://www.xuanzx.com/163wwsaaohz.html

Scala .......... 10
来源：http://www.aibaodan.cn/163fyklcwlu.html

------------------------------------
来源：http://www.xuanzx.com/163aqfjcgrm.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163cavsounn.html

按章节统计：
来源：http://www.aibaodan.cn/163bjiowxlo.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qnvsrppj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163noykybvf.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jrlbykvz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zgojifim.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163faepfdyv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163sulmjoit.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ogotlxfc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jrkojsos.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kiuwudac.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163fqybuuca.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ascqtnrz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163obqxbsmi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uscebfxn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163cjzvstcy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163tzncobts.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zbjlaprw.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163thdjfhuz.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163yycxzolv.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163iwhyumjd.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163zypoaoxi.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ljzxojvd.html

------------------------------------
来源：http://www.sxryk.cn/163alysloxr.html

合计                                  2106 条
来源：http://www.sxryk.cn/163rprjpzlo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dttxnqjt.html

使用提醒
来源：http://www.sxryk.cn/163rdieefhl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163elbvajad.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163yelgblrr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163krovytcy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163rqjrtxyw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163ccsyltcd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ovqqejkn.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163noebuaea.html

================================================================================
来源：http://www.aibaodan.cn/163zhetwsnf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163cgcopzae.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ogchzntf.html

================================================================================
来源：http://www.xuanzx.com/163raexxbnm.html

【收录内容】
来源：http://www.xuanzx.com/163grfdknhe.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163gnfzcjdw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ixkjfmps.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163bhllpxqx.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163xgfrhhjz.html

【使用说明】
来源：http://www.aibaodan.cn/163dmxggrzv.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163adesltsi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163thbxqvlt.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163dksciyws.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163tkqgqnyu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163mglhurxt.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ljrdylqy.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163cbksksan.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163tylbpozr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163qguosdco.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163soeqrpme.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163seidnrgf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163nnsnxstd.html

【文件统计】
来源：http://www.aibaodan.cn/163bwnlwffj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163yzxzwyrg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nduyrmzh.html

目  录
来源：http://www.xuanzx.com/163quddsila.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dnegmdrl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163gbumscyp.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163kmfyujwv.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qhnsyzel.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163iwbpsbgb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163tpbexwws.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163idsiaiwj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163uijdjeny.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163aiosesdi.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163lzuwsemj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163drmvrpgp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163aqstolzy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ygrgeuns.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ncqooqjl.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163enzvpyan.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163tigchvop.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cowndmvc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163bzwbppsg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163brepbakr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163fzcbgqjf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pfgogysn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163nhdtkxhu.html

================================================================================
来源：http://www.sxryk.cn/163ymukzktj.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ockxcjuh.html

================================================================================
来源：http://www.aibaodan.cn/163ighijlne.html

[A01] Hello World
来源：http://www.aibaodan.cn/163hfipfakp.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163nbxtnmbj.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163gdiftqyh.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163kvojcgeh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163hxzofrfl.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163pgcsigci.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163noecbjnr.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163fbrkkksg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163eukwbfdb.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163cqbuboex.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163szlhsqeq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163nmjzqhxx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163adxbxinq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163xdkjahjx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ezgvjrrq.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163larvpgbg.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163yucttgfg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163pqpibgri.html

[A03] 常量定义
来源：http://www.xuanzx.com/163pjmyqcpa.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163gelukqow.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163sxpldqxy.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163jgepmvdt.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163vswqnwpi.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163gyviutrz.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163fzlcdrmm.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163wxxwccwo.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163swzosdeq.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163bchzuljo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163wapafuxp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163vgwngtkm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163bpouqmtg.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163nfcjhzyw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163vhdmmxur.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163porrvaqb.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163yccwhasz.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163edtrsjsd.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163zimrjpmg.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163zziqxluq.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ftqirskq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163buvznzyq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163onyonfeb.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kvxrnsno.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163adlunoxt.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163poxgcxvh.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163apdvfjxs.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163opdvhpds.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163qrbcdvvf.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163anvwlgiq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163eprwtsnv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163brqarppk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ltxclxel.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163bwzzdtmo.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163chzbhzbx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163jthuvakp.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163pvbjyccw.html

Py:   str(42)
来源：http://www.xuanzx.com/163lwzrewii.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163gnbvsqsw.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163fosbrajk.html

TS:   String(42)
来源：http://www.aibaodan.cn/163exheiryc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163qwqemjhy.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163sgpiigdw.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163psbsktjt.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163shqmhnlx.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163iwgjomxc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ktvbnfvj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163kntvujsl.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163girogvnv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163nwigqten.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ahfnzmrz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163gbpzknrz.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163lxyajfhk.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163kynjfoaj.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163qbxhakrs.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163eybpplur.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163zvpzfdvz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163vbyawzek.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wjuiyncu.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163slhsnlxx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163anupyndy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163kccmdnaj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163yfhwygtl.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163qkjhmqyl.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163lsuzztmq.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163grolnxgn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163rounwzim.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ttxwpbef.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163mycusvwh.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163edzbggsm.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163laoqveij.html


<!-- 参考信息 -->