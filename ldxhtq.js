外链999!wailian999！

[U65] PHP：会话
来源：http://www.xuanzx.com/163wiiyqtmx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163vpaaxghs.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163antelmkz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dmucezyz.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163osgnpfqe.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163zjguogxo.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163mfimplkm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163aipynpom.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163stzbflvt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ygvqqupn.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ekehwwse.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163gejwnwhm.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163gysnznlx.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163bjfnfdhk.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163qpqxcacd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163agdazpwc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163bbcisqlz.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163kvctxwnf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163luosdgki.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163wysyapcb.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163tkwxdksf.html

composer require psr/container
来源：http://www.sxryk.cn/163bvrwigga.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163fuhwgnbt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163fuubqssu.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163cazjonia.html

composer require twig/twig
来源：http://www.xuanzx.com/163jbnjlsvg.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163sbhrvyka.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163wjsiluvm.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163orissnog.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ymdehfaa.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163gilqacts.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163efrghizp.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163apuazkea.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163pcqqrvyb.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163juhyjifv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163wmnfdjvz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163prowzxlb.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163bfgfqrtx.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163nqtofbrp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163kusrlrhq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163nwgfnohy.html

a?.b?.c
来源：http://www.xuanzx.com/163yzczrlde.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163vmpafjxw.html

a ?? b
来源：http://www.xuanzx.com/163vezcryvb.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163nfhegmdh.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163ireghinv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163dmuwrzkv.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163kjkggplq.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163gdlwpncv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163uomtouuw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163lytyzzgv.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eiijddzj.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163edchnnui.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163xilflknn.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163aqzdopkc.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163arlaeofh.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163utysippz.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163bwsmzwzr.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163ubaowbyh.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163laagdvbk.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163lhjrgxjv.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163pibzmjia.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163zowekmfm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163krxdqknk.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163iqtutsmd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nqhhkeiz.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163clbbbeyf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163dpomvlch.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163aaqghnxr.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163yzukwmog.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163hyrvdeuz.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163sbqcclrk.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163tkrkfcpq.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163oexovvel.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163fauvnfxy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163xeazsjwv.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163hljnsyth.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163huthqbgx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163furtewwl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ttbgriwo.html

[U105] JS：节流
来源：http://www.xuanzx.com/163orhuazth.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163whaarcft.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163qvogupps.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163bynlsywi.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163srqbvzzi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jddaphfa.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163rracspnh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163rluynomm.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ylxjknaz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zegrhklv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163mhsfclji.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ikwgahjf.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163xkknvtzl.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ftfkwbji.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ahptjovr.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163byeocqes.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163xfaegigp.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ktystmta.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163afvvmenu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ukeaiwdw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163srssgtrr.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163cwgtepnf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163swrgzqmv.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163mjiejtjy.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163hrobjlfs.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163nrfemupw.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163kydxhdxj.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163gcjnnmgd.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ysicxxyz.html

npx vite build
来源：http://www.xuanzx.com/163shhhbwff.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163wjalvqzs.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163jwxliwgm.html

================================================================================
来源：http://www.aibaodan.cn/163rvbhgmxc.html

统计汇总
来源：http://www.sxryk.cn/163gedjmckm.html

================================================================================
来源：http://www.sxryk.cn/163dedcusfm.html

按语言统计（条）：
来源：http://www.xuanzx.com/163onprlmln.html

Python ......... 252
来源：http://www.xuanzx.com/163hdkcjzym.html

PHP ............ 252
来源：http://www.sxryk.cn/163ebzvwfrk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163esvuygax.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163etpyvbnh.html

Java ........... 212
来源：http://www.aibaodan.cn/163ryifqnmi.html

Go ............. 212
来源：http://www.aibaodan.cn/163ehtaxbzt.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ggitvlii.html

C# ............. 212
来源：http://www.aibaodan.cn/163akhlsuyp.html

C .............. 30
来源：http://www.sxryk.cn/163fbccgqgz.html

C++ ............ 30
来源：http://www.sxryk.cn/163wugkrhon.html

SQL ............ 90
来源：http://www.sxryk.cn/163vtdknrql.html

Bash ........... 80
来源：http://www.sxryk.cn/163jerdpxvw.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163fomukawt.html

Swift .......... 15
来源：http://www.sxryk.cn/163mhwoxcko.html

Lua ............ 10
来源：http://www.xuanzx.com/163xphmltpy.html

Perl ........... 10
来源：http://www.aibaodan.cn/163hknmhhsa.html

Scala .......... 10
来源：http://www.xuanzx.com/163czessavo.html

------------------------------------
来源：http://www.xuanzx.com/163quumvxem.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163urniihgc.html

按章节统计：
来源：http://www.xuanzx.com/163rmwzfhhy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163bfmdsgub.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nukrgtjt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xwpryhey.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ezudqdgg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163trwmquto.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163eqqagdcv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nclwuayb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zaszyqcj.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163odzsaink.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gatrhklo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163frqmcbwq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163winfcghn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rhvhhqmi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163bvczdbxz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163vfmqjlgr.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163muljcjam.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163tfxfsgeg.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163kfiellbi.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163vecxayac.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163xvycoyrv.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163yhfldjln.html

------------------------------------
来源：http://www.aibaodan.cn/163nxizuuyg.html

合计                                  2106 条
来源：http://www.xuanzx.com/163zqkmqozb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163oemxfrtq.html

使用提醒
来源：http://www.sxryk.cn/163jrssecha.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eurqtpgo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163huxqlylm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ltvwtlks.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163xxjlyqpb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163vpweawvv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163tlzvgduc.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ndrzmwec.html

================================================================================
来源：http://www.sxryk.cn/163tkkjcqxx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163zkciivks.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163rptqftzh.html

================================================================================
来源：http://www.aibaodan.cn/163zekqlhov.html

【收录内容】
来源：http://www.sxryk.cn/163lzdudxgn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163wfrcwyjx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163pwcmqnxc.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163rzgnjgya.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163jxhqrwlc.html

【使用说明】
来源：http://www.sxryk.cn/163gquqdhun.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163kundedlk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ambsgbug.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163oxfiyeey.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ebbdmcny.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163aucttnie.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163kseeedru.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163pkbepfxa.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163uwyxthmx.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163dxjcruju.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163xlofsuvk.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163lzgmnwto.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163kyyptvwg.html

【文件统计】
来源：http://www.aibaodan.cn/163swtxljvb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163mvbomglu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163anzxnphc.html

目  录
来源：http://www.sxryk.cn/163hrhgnbot.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yyvroumi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163iazaoisa.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163soovaigq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163oqjdiooa.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163qnbdyefp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163vllrexoe.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163noulvivr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163uqecocxa.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ujjhydrk.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jzymiffr.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163tpirlpjg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mpmilogm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wemwbwox.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hhxatgkh.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ibgbhcyj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163fuygggyp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fxciyzrm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163uprtvgca.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163sgznuksl.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163wanseyfo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163reawwdck.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rrtbqeqy.html

================================================================================
来源：http://www.xuanzx.com/163yesijzrm.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163balrvwrv.html

================================================================================
来源：http://www.sxryk.cn/163dqcwvfob.html

[A01] Hello World
来源：http://www.xuanzx.com/163yzqzzpth.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ljuacaxn.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163rfjvtgel.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163xjguisne.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ktmbeygd.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163cytscbur.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163rxakzbfk.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163dpyxytau.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163xuvogybt.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163xikknkiv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163tqvvweal.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163xjxuremi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163ixmkklzv.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163iibzxmdq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163tfixndlw.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163kebjgrev.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163jaunnmcc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ircagskg.html

[A03] 常量定义
来源：http://www.xuanzx.com/163hakwgruf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ohpctqds.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ckjqmkuq.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163zlgvzlbi.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163hcahxaui.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163nzqbnbwu.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ysmvhzji.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163rmkzzlcs.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163yqzmgskv.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163mnrspvml.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163issfcuxq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163hibwkuju.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163mqaxwdti.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163lnlbisbl.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163jpoylifz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163yvhoukzz.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163qhkjtrze.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163mqybazgg.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163kmviergo.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163yizvnhfa.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ztfpxuwb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163rsesuwdi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163qeaofraz.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163agcjygpb.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vwhyqoig.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163cekayqml.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163newsszni.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ftcybhel.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163obrxkueu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163lfkqoeoo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163bqympmuj.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163rhotvmmg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163bmuocvww.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163vbsomhvd.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163bovyshyo.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163zithvxuh.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163aolfwbrc.html

Py:   str(42)
来源：http://www.xuanzx.com/163dowpkwsv.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163sqnxavnu.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163fjwoumad.html

TS:   String(42)
来源：http://www.aibaodan.cn/163rzrpriax.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163sjjhmxob.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163pgjdwlhw.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163nqygkuwc.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ssmbsbht.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163ynkdrtbk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163aambnrst.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163byrbtccz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163zdfukwon.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163clflcbzm.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163gwdwegin.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163uldffrff.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163kbdkinpn.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163cxesmqit.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163jepfqwsm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163gnhfgchu.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163uvpikjhh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163jmnzlsnp.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163zilquxpy.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163wyplknao.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163dkuiunft.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163xycxcckz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163nrhoatgk.html


<!-- 参考信息 -->