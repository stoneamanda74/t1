外链999!wailian999！

[U65] PHP：会话
来源：http://www.sxryk.cn/163jdeguczt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163odinrpcr.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163luvnegee.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ulybxpsd.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163wapkuqij.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163hijypgdq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163taquagpd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163uuvheoqb.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163jznnrnts.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163pdikgjlc.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ztdldpye.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163hbgmfuxe.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163hgygixij.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163okriprgz.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163xuyegrtw.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163cvagdrdu.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163abghfxvg.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163mmmewqra.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163fdtfnmxl.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ktwunuec.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163njjjdsrh.html

composer require psr/container
来源：http://www.aibaodan.cn/163dgzkoeij.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163mllgtjdu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163rddluckm.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163nqxpxoyr.html

composer require twig/twig
来源：http://www.aibaodan.cn/163mtivmdvf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163jopfgnvj.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163hzkzltxy.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163uopjuuop.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163mniuddeh.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163igtbszwq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163tgxreznf.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163fpjgnlip.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ldzdzyhb.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163wpenamwz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ifptoepk.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163nlehwcns.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163tgyrhgcx.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163gwsfacuc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163qpalvlnn.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163tzqzsodm.html

a?.b?.c
来源：http://www.xuanzx.com/163latlqkhm.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163qyausdkm.html

a ?? b
来源：http://www.xuanzx.com/163sglxeolj.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163unlqqgca.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163wkoncfei.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163rhbnqrbq.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163rytipxtr.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163aptrnlry.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163hhecslqf.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163lulrrixz.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163naboxhrr.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163snmfhvlr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163vjqetgef.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163aeyufbwy.html

structuredClone(obj)
来源：http://www.xuanzx.com/163wuosfpil.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xeqjgkbt.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163urewodly.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rtqaqxvx.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163jtwfgtwz.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163bdzpkguj.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ymtdivze.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163zujdyzff.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tzqwxrsu.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163puxmakbs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xzvmmhze.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163etknvwlc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163zcanstrr.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163xwjixojl.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163wlohcbvu.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163qgxohinu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163cmoaocvu.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163yrjwfvbh.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163uizcqpwi.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163bgmfaseg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163oxkxzmki.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163nxnpgszr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ehrpjzbv.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163wnzingnb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jkkwvggt.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vqnojlhl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163foobsovh.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ygfppuzu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163gstpgxop.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163hppebngt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163cgtbtpts.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163myszokon.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qkkozogw.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163zlhdbzpi.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hdyghmxi.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ewqhdtnn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163wvyzqjht.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163mkzqbsgj.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163gvcygogu.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163gczkhzzf.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fegxbwhi.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ibiowfvf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fszogmuu.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cifykwiw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163higmganh.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163lldqcnec.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ptsbdrfc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163bknqasar.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163zmrvcpse.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163vbzisrri.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163txbolkrb.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vftkrexg.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163juokqdnr.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163npcjfqok.html

npx vite build
来源：http://www.sxryk.cn/163tkrpdiez.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163xgkckldk.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163zdnqjuzg.html

================================================================================
来源：http://www.sxryk.cn/163hparccqk.html

统计汇总
来源：http://www.aibaodan.cn/163izppqocq.html

================================================================================
来源：http://www.aibaodan.cn/163jjlitjim.html

按语言统计（条）：
来源：http://www.sxryk.cn/163iwnlrekl.html

Python ......... 252
来源：http://www.xuanzx.com/163kyvoqkfv.html

PHP ............ 252
来源：http://www.sxryk.cn/163jzatcffd.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163cyhsrczm.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163lftqrgmk.html

Java ........... 212
来源：http://www.xuanzx.com/163canfosqz.html

Go ............. 212
来源：http://www.sxryk.cn/163lghpddvl.html

Ruby ........... 212
来源：http://www.xuanzx.com/163nkybgwhp.html

C# ............. 212
来源：http://www.aibaodan.cn/163rgvawqqp.html

C .............. 30
来源：http://www.xuanzx.com/163arjfjday.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wrzewnef.html

SQL ............ 90
来源：http://www.sxryk.cn/163hbcgyjdy.html

Bash ........... 80
来源：http://www.aibaodan.cn/163bemrtfcv.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163yboikgjr.html

Swift .......... 15
来源：http://www.aibaodan.cn/163oqpfiwrk.html

Lua ............ 10
来源：http://www.aibaodan.cn/163rmgijoma.html

Perl ........... 10
来源：http://www.xuanzx.com/163zkgxymou.html

Scala .......... 10
来源：http://www.xuanzx.com/163ldebyqjo.html

------------------------------------
来源：http://www.xuanzx.com/163utvzyiiz.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163rhcvdfmc.html

按章节统计：
来源：http://www.sxryk.cn/163qzheigyj.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163foudqowp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ubygwvqk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163iouosdrs.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163qpvhnhci.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163apiacpkj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163itukomhq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163payczatc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163izarwgao.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ejtsfndw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vqdchhed.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tlfynkui.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xeiibrfl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dumomdrs.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ldcyekee.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163lcqbpovm.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tbsskovf.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163twvipjgt.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163yyyudujl.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163qzkvmjow.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163fpzcxedz.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163zhyuaytc.html

------------------------------------
来源：http://www.xuanzx.com/163bsmjfzuc.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ucksnfcl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zydkaaoc.html

使用提醒
来源：http://www.sxryk.cn/163yaqpcuxk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dbgcbkrj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163qsjshdfs.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163gbgxhbdf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163aaqnskgr.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163ujgcvwgk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163vvkyzusq.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163abhzyfts.html

================================================================================
来源：http://www.aibaodan.cn/163cckoxnbh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163stuchata.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ojsvcekq.html

================================================================================
来源：http://www.sxryk.cn/163claoftjf.html

【收录内容】
来源：http://www.aibaodan.cn/163cmpkiluj.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163lvvrjsmq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163mnljnvda.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163vyxgzfzs.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163sjcdtcep.html

【使用说明】
来源：http://www.xuanzx.com/163pymbobeb.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163qjxuneqx.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163sknrqyfs.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163wlpuyvdt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ndfqylom.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163fssumqwu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163axlhlydw.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163xragfkdu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163mwmqipbe.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163ldswvotv.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163scrbdvwp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163pqxzpqjn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163lrapnqoy.html

【文件统计】
来源：http://www.xuanzx.com/163xpuitnjf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ipgzrwpi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kvncubwl.html

目  录
来源：http://www.xuanzx.com/163jztgrtrw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wwyxkuej.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163enipfobj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163auhlsphb.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xahoqwiy.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wpmribhu.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163mxsmsopv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163girtjypv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jlfaaekk.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hepqgcsl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hjsiafgw.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163arkxvhxz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bveberib.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sttvyecb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ucpxyspb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163gdmlmnfm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163mfbiyzjr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fbjkardu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163xuvauryi.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163vtorghtn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163uximjqrk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tbadvfqy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hdeqofqe.html

================================================================================
来源：http://www.sxryk.cn/163sxmomsom.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ugulbgkb.html

================================================================================
来源：http://www.xuanzx.com/163vohogkls.html

[A01] Hello World
来源：http://www.xuanzx.com/163oizmzhcy.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163abqxvjax.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163kqzxalvg.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163onbjletm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163fdblrnes.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ndewpiec.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163tyasrtve.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163ymodkzmh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163snceiucc.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163rffodsiz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163lqacpquq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163heehofza.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163mnjtzsid.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ufsjdlxb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ydkqfpfn.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163sfbdbgmc.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163rscewqlh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163gqtxvkdr.html

[A03] 常量定义
来源：http://www.sxryk.cn/163yxzfgbgo.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163wvewliyi.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163sbvcufkc.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ywpteyiz.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163raqoosxy.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163gxkuhnfz.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163byqipuaq.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163yxnbzvre.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163kyjphkex.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163dnnwthpr.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163stuvhzne.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ewbgsnzm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163jaapjnvk.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163ubqajtuh.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163xqahjcql.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163hjaeipiw.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163mrkkmnuf.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163dvxhumel.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163spiaoxqs.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163sxopwffw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163qnergxnu.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163qkngopmu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163jfwdzsjl.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163bvtbirrl.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fyoixysw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bkrrxbde.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gwfgvbqc.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163vazlkshs.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163rnjyvust.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163yucgfkwr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163rgtuuzsq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163fycamoci.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163aqldholx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163mmszcogq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163pnbuxijl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163kvpgstkf.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163gwuxalun.html

Py:   str(42)
来源：http://www.sxryk.cn/163lxzeyubq.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163dzcqdcli.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163eameutmm.html

TS:   String(42)
来源：http://www.aibaodan.cn/163kszstjjm.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163tupgrdpf.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163pckblxcp.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163wjbdphgd.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163tsdngdfq.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163pjcumiyc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163gdybpouj.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163durefceu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163hhbrkxmc.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163uzbmumnp.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163uqxouxcg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163nrhtkltr.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163phgkxnau.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163icvhyqmb.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ftzeyqhi.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163klzbcaoe.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ojmlcqam.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163wzjqmsdh.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163nvdwiumb.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163reurylxy.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163ynjueqhm.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163vygfbexw.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163dyebfuqw.html


<!-- 参考信息 -->