外链999!wailian999！

[U65] PHP：会话
来源：http://www.sxryk.cn/163nkkyowul.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163zlowksbk.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163bkpdhwmx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dxnxbssy.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163gsvgertb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163oqnhbsty.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163mbpbpnlt.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163scecplsw.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163qvsuubcy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hrvkoflw.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163whgkyqqp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163yhmjoflr.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163cpcfezlm.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163jcuwwzjy.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163kzpklgol.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163illnarzh.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163zvudnfjw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163vqeklfkp.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163iskojwnz.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163odwdutzu.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163gqmsbqwk.html

composer require psr/container
来源：http://www.sxryk.cn/163zoxcztoi.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163zkqpgtfa.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163wjdsshyr.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163pycyjjis.html

composer require twig/twig
来源：http://www.xuanzx.com/163hgpburaf.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ryzqgtiq.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163oiwpbdyg.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163mctytpvt.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163afkltajx.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163mwvmgypz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163fagydczk.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163swgaxcwb.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vajppwdh.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163yfokwouk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163owyffkzo.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ktfryoob.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ixsvdpxo.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163vppqukjd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163mjustngk.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163tfspmdhl.html

a?.b?.c
来源：http://www.sxryk.cn/163fpixhsvi.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163rkcedsly.html

a ?? b
来源：http://www.sxryk.cn/163njrzzemd.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163igjghbmj.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163qwgxfbbw.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163wrgskwzl.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163vwteirva.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163rooezbom.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163vkolaexh.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163lkkueoid.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163aifcdrpg.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163whsggfjx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163evftdicq.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163dwghulfh.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163pvpruoep.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163inyujwjk.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163fymigqce.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163mikoklpp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mykbgcfi.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163qkottkin.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163vedvjxnb.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163gaotsoxb.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qaftgaky.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163zvwsgqsw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oennqmnk.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163eginfkxu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163boifxfyi.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163qnhjvxtk.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163dmqyawdg.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163fpbczzjg.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163hcpwysab.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163yiuzwmrj.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163jebtoyky.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163vxwopkxv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163uumveeve.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ejysobdk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163fgfycgvz.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163xnsgpmpw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rkmemicg.html

[U105] JS：节流
来源：http://www.sxryk.cn/163jmrsaxyg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163fmhgxizr.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163nkdriyhj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ybxfizby.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163lzbsrvpe.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163nydvkxwn.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163wsajstfq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163czumrpiq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163egyqymjs.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ceynydcx.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163pxtsmojy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163rotzupfd.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163btzlpzku.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163rurllvho.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hzrrugyw.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ssxdvhrc.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163emsnyslt.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kgezqdbe.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163hfzhezex.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ziquqbyu.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163dbvbxywm.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nqchswol.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163kwlgbuvh.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163xzqvhekr.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163jyxpzvdc.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163yfhldnbc.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163hfnjjpna.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163sfalytkj.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163rpbsnvkk.html

npx vite build
来源：http://www.xuanzx.com/163wctcybzr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163emxxsedi.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163zaojhwob.html

================================================================================
来源：http://www.xuanzx.com/163vrqkmgzl.html

统计汇总
来源：http://www.aibaodan.cn/163okfhwziu.html

================================================================================
来源：http://www.aibaodan.cn/163efxahugg.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163byksuwzm.html

Python ......... 252
来源：http://www.xuanzx.com/163ukggmrxt.html

PHP ............ 252
来源：http://www.sxryk.cn/163drymntgi.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ekkwboby.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163cyosfqac.html

Java ........... 212
来源：http://www.xuanzx.com/163ilwhafbv.html

Go ............. 212
来源：http://www.xuanzx.com/163vnpwpsrd.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163iwmncogi.html

C# ............. 212
来源：http://www.aibaodan.cn/163cxqqktwy.html

C .............. 30
来源：http://www.xuanzx.com/163oyluemgg.html

C++ ............ 30
来源：http://www.xuanzx.com/163kazhuuff.html

SQL ............ 90
来源：http://www.xuanzx.com/163puuudmdr.html

Bash ........... 80
来源：http://www.aibaodan.cn/163mtrsxmev.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163iqmyuucn.html

Swift .......... 15
来源：http://www.sxryk.cn/163uszfqftd.html

Lua ............ 10
来源：http://www.sxryk.cn/163nznasblo.html

Perl ........... 10
来源：http://www.aibaodan.cn/163npbmnbjo.html

Scala .......... 10
来源：http://www.sxryk.cn/163ccgrsxps.html

------------------------------------
来源：http://www.sxryk.cn/163jinppoqz.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163nznzjkwk.html

按章节统计：
来源：http://www.aibaodan.cn/163jekigssc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mpcqtkla.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163izxrdrvv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wjhuhrax.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163dkljftlm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163gpqideft.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pcjpdngp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hsbvptkr.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163dzfuejzk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163igesvefv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mdtojrtv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kvdqgnyf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vatoaogk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ydecjdct.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ulqcdgaa.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163roljrvrb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wkoqjvtf.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163tmuflvcg.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163erlpraqr.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163aprcylny.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163tduzaxrb.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ndwjcade.html

------------------------------------
来源：http://www.xuanzx.com/163unkzjbcf.html

合计                                  2106 条
来源：http://www.sxryk.cn/163aukgwyyg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lixjahgf.html

使用提醒
来源：http://www.aibaodan.cn/163tpsabtsu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163leqtxljt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163jtdrbged.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163fqdzafet.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163igzkvisj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163vkcgdhyg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ikbsiyza.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163sbzqshih.html

================================================================================
来源：http://www.xuanzx.com/163rcyzonoy.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163aexzeapp.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163uxlmiwdx.html

================================================================================
来源：http://www.aibaodan.cn/163egwnqyln.html

【收录内容】
来源：http://www.xuanzx.com/163ofrtakhi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163gxangjax.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163accyglcl.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163uvvwizgy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163cnihbcvr.html

【使用说明】
来源：http://www.xuanzx.com/163mezshwdv.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163gnoxlfag.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163wrtetzar.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163tvhjcuhg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163xggxtdhx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ajbxtrwo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163pbcuqrwn.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163prpbmeef.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163nmyllhqz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163fowzxjah.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163oopmceru.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163sdzcaxwx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163wgmtpkgj.html

【文件统计】
来源：http://www.xuanzx.com/163wpsdyoki.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163dbkwtosi.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jbcibimq.html

目  录
来源：http://www.xuanzx.com/163qboasvbv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nlpqquvm.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163obgfaksa.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163kgrjyvhi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163esmwjiry.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163amlgkovn.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163ekheuhmy.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ugzrhrkv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vzeuvsuf.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163brwarsjr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jnkrrbhv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163daqrodhg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mkywwgew.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lqnnkfyz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yslurqcj.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163dcckykhs.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ztpgqytu.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wqsnxhrh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ncakorfj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163nrjnkngu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163addtszon.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163etqghoyb.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xyqzatdi.html

================================================================================
来源：http://www.aibaodan.cn/163jmplcnjk.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163gwklonaf.html

================================================================================
来源：http://www.sxryk.cn/163ohxfapmd.html

[A01] Hello World
来源：http://www.xuanzx.com/163uleokmjc.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163qzjyklvx.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163kbkbmmbg.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163dqfttlmf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163pifrfxsd.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163gxiulaue.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163pnchhfin.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163sdyubhcy.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163qtatthcl.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163yoixhorw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ofimvhho.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163bkjuvubl.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163wnnmddns.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163bkxrsvzf.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dzrdetal.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163hfalivch.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163xvxkayke.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163hvftfnjq.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163araplfed.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163kdgdmfae.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163sxplqche.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163xvyyxyyu.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163nfmegnuf.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163gvjgcnow.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163gxffcdnf.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163qedqigrz.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163lajeuphe.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163isazhape.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163insaniru.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163dlutpoee.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163iqnsxodp.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163uhdzdbyy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163rctcttjq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163xvuyokvo.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163qfdjsgrw.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163vmfyfhrp.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163gtczhptw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163inxhnsak.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163obymccoc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163zglndjuo.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163geopyext.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jfkztfjo.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163phlsugxx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ccolfbpz.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pewnhnhv.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163hbczdycz.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163xftzzujl.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163fupautak.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163zvauhqmu.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163gxutvtun.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163hjumunqb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163rjzfjvtj.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163kdvhcixi.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163oxpejywl.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163dxqftwfj.html

Py:   str(42)
来源：http://www.xuanzx.com/163sbzznfto.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163yzfulbmd.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163vqjmqvxp.html

TS:   String(42)
来源：http://www.aibaodan.cn/163pildyryx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163iwspofon.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163yemubpvh.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163okuyupvf.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163xbwfplfl.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163heovelyd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163wyclgacs.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163pbpzvrvz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163tdltodlm.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163mfjqnixf.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163elvpcbot.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163utchyprc.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163xhxnvrzl.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163uncvmted.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163mvpbufam.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163uijsympo.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tnaowhqt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163tpdzvhoh.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163xsiydfhq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163kcflajcz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163kuiyzete.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163xhfrzftv.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163pynjenak.html


<!-- 参考信息 -->