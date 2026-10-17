外链999!wailian999！

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163yxmnyiif.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163tgjxmfau.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163vtyfptxy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163pjoyxlfk.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163urrcwsaw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163qfahdhbk.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163qygueijz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163yttvirsi.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163hkawtwtq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163xuxsdnln.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163clschwhp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163augktqhi.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163drnsglyy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163rngenhvx.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163zogwnzlf.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163lqeadzjb.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163exkagkbb.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163dlcrelmt.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163xuufmywo.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163oduxensa.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ddtxcvkw.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ystbvhgw.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ixgofzlz.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163lcfdnbdt.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163wdyonmnr.html

composer require psr/container
来源：http://www.xuanzx.com/163fibpnjnd.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163lqpwrpht.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163wdvfqnid.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163gxmnevtw.html

composer require twig/twig
来源：http://www.xuanzx.com/163qoovrzta.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163uuvgmexl.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163uhysbzlr.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163flnuixco.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163hbieiyss.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163zbyppgly.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163pyoizgdn.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163hspuclou.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163fzjsumug.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163fseivfvd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ozzlgmdu.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ogsdcnck.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163kpopuyza.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ovwfjxay.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zbdagvyk.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163mbnaotuj.html

a?.b?.c
来源：http://www.sxryk.cn/163kpbpyorb.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163mwsctndo.html

a ?? b
来源：http://www.aibaodan.cn/163pjkkerod.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163mubokxgd.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163vanjncgi.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ynnroikm.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163yjebvvcv.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ghohxdia.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163miydtmgu.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163xmlmusfd.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mjchfotz.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163xxrwcpzb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163tpljnzar.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163nesdbrnk.html

structuredClone(obj)
来源：http://www.sxryk.cn/163qcsqozol.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163mrvwgmpe.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163pvmgcevj.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163yhakvgii.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163lroxidgd.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163dqhlysfy.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163mhwxpqxt.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163jmzaizrh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jowntbth.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163irejiexm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163aaugvmml.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163ebqxlmzo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lqmnptmt.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kuwlrlnf.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163sbtqsnxf.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163szzuhamg.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163xvbqnjsb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163yvmuyspo.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163oacqyzes.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163vanutdxs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fkkasepq.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163flrnyiyb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163higqbgwm.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163yftuimon.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163latukhof.html

[U105] JS：节流
来源：http://www.xuanzx.com/163fbhgvndx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163winebrpx.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163dmiiaget.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pljbuwjc.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163mzcbhdkg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163sfnktalm.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163gdtnqyji.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163fzhyiroo.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ooddgwst.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tnqooxvp.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163iqmgeene.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163liutvvha.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163orrafyxp.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xtxhjiqo.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163gkhpvpbw.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ulmzohkz.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ufryiozg.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163whoadeud.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163eqtqohsa.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fqcuusjy.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163temoriah.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hsucvlmf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163oikakzyq.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163hmhxasci.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163omwceddf.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163catukpfb.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163iovwyqhf.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163pbdxchpn.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163mdvxycmx.html

npx vite build
来源：http://www.xuanzx.com/163joojtufi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163lajlyrsw.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163aoklvnjp.html

================================================================================
来源：http://www.xuanzx.com/163hlpkvnfe.html

统计汇总
来源：http://www.sxryk.cn/163ddbcukur.html

================================================================================
来源：http://www.xuanzx.com/163eqrmzqlo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ywirprdx.html

Python ......... 252
来源：http://www.aibaodan.cn/163fcruywiv.html

PHP ............ 252
来源：http://www.aibaodan.cn/163ytssuddj.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163yhhcgkoy.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163wfgavlba.html

Java ........... 212
来源：http://www.sxryk.cn/163aidroyqf.html

Go ............. 212
来源：http://www.xuanzx.com/163rejaprmx.html

Ruby ........... 212
来源：http://www.xuanzx.com/163lrsxxsvc.html

C# ............. 212
来源：http://www.aibaodan.cn/163fdiaqamr.html

C .............. 30
来源：http://www.sxryk.cn/163kbgwxuqa.html

C++ ............ 30
来源：http://www.aibaodan.cn/163sfrzmeqt.html

SQL ............ 90
来源：http://www.xuanzx.com/163jobojrjw.html

Bash ........... 80
来源：http://www.aibaodan.cn/163vipegefc.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163rjvifwtq.html

Swift .......... 15
来源：http://www.xuanzx.com/163cbqqpbwi.html

Lua ............ 10
来源：http://www.xuanzx.com/163wtzmfvyg.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ipbgbsbu.html

Scala .......... 10
来源：http://www.xuanzx.com/163zinxpoyt.html

------------------------------------
来源：http://www.aibaodan.cn/163qwwfvttw.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qmurglxw.html

按章节统计：
来源：http://www.sxryk.cn/163whzmrjgq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vqrkbjco.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ehyzktyf.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qraizyan.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wwfpudcd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163nislpgmu.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kfgqecll.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163haaluopv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pxqtnpfk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tfkegdnk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ypvtjjqg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ozecnfhn.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cfdjausg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fxhodhzc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xtmbuild.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163zozxgula.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ojhnyhxk.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163weqmbucj.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163fmrjupxt.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163phwppfrm.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163tfeknemj.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ftkwtmuw.html

------------------------------------
来源：http://www.aibaodan.cn/163gzzslyyi.html

合计                                  2106 条
来源：http://www.xuanzx.com/163wdqnpvcb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yoyztbvs.html

使用提醒
来源：http://www.sxryk.cn/163khampugd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nchblnon.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163abjritmi.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163wudvsmnb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163dtunnvxl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163afhuistd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163qikzzvya.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163cjqvcpkr.html

================================================================================
来源：http://www.xuanzx.com/163qrkiobhv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163utbcjdlw.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163frktcgux.html

================================================================================
来源：http://www.sxryk.cn/163kgttwtef.html

【收录内容】
来源：http://www.xuanzx.com/163oazsylwy.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ftlwohgj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163gqoeijff.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ygjoevbk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163xauqueks.html

【使用说明】
来源：http://www.sxryk.cn/163kjjmxret.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163pfkuabky.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163khkpvscy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ueyjweww.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163tamfvqow.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163osuxoido.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163knjkekoz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ityjyboy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163gcuelaoa.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163gviuknay.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163vivlxuyn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163jusaitzp.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163lwuxtkbf.html

【文件统计】
来源：http://www.xuanzx.com/163pqijrkww.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163emwjqgfo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163aahqjroo.html

目  录
来源：http://www.sxryk.cn/163mzauwhfw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nggyqbsg.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163nhpsfzzb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xruuglsr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ssjqvuqt.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163sxsduumf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163rywdsnkw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hsurjshg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gjjrgxeq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163krwqcmzs.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zswhprwh.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163tdwtpnss.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pemsqczj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ygpquywl.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gtbijyls.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ocmvzwto.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ufgwdepr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fjvguutd.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163altizpig.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163ytlppkyo.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163rkgxigul.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163iwnbziwv.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qwebgbqx.html

================================================================================
来源：http://www.aibaodan.cn/163xdeznjex.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ajliqieq.html

================================================================================
来源：http://www.sxryk.cn/163bhdxwtlb.html

[A01] Hello World
来源：http://www.sxryk.cn/163pxsafosd.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163pwuuzqmd.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163kyqjqjsx.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163ncvvxzyf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163abtyzrnz.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163pqvgzhdr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163tniooyij.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163qxhpiigz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163nnpvqvzl.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ccsisrdd.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163ypiykrww.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163wqtbqjav.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163bzhqdrtj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163fdzdbehb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ltdhwoww.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163juydzusy.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163wsscfoug.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ypdfhdjn.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163nhfegxxx.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163bqvfpfuq.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163rqjeoqgq.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163vphgaznf.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163bhqekuyz.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ktjasiec.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163rnzkenzm.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163vagmzpxi.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163mrxfljfl.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163exavovie.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163myarloxx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ttfqrkdr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ievuxirl.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163pmtxptro.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163pfqrxfsm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163muupdngn.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163wnucojlg.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163duyczseq.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163nnxotbha.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163uwpyrwqw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163jpivnsyw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163bgesoqec.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163lfnicbtc.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163yusaorqh.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zxjzmwio.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163whdpjlsj.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xugpgpsj.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163zcwqyfdf.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ktiamtfw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163luokjcqr.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163pkejncrd.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163yeilcifr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163feuvismo.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163cezdumtn.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163kmzlfilv.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163afzvspkp.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163rrwbeiid.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hpmrsaxo.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163ttjaiggu.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163klzzzmgw.html

TS:   String(42)
来源：http://www.xuanzx.com/163slplvder.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163owojixvj.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163rnhwhsvs.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163ilkbmmeu.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163xkfrhije.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163rrsnewza.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163gzwiiyod.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ngobcrex.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163paxzjtrx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163dpjxocyr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163teqjuhjv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163qwshupkq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163gzhckdho.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163gvynwiwu.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163bdizztvk.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163zhggkxne.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163elwlxeja.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163zorwrdck.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163noxkmrzb.html


<!-- 参考信息 -->