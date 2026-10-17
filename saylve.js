外链999!wailian999！

[U61] PHP：正则
来源：http://www.xuanzx.com/163aeuntfdf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163edhtfjok.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163fioqllfk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163hxvetdxf.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163jitkujhx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163zghfrnpz.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163rzwjweng.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163hbhjkalw.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163umhklozy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163dpelyctq.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ctqhybpr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163tghcqgsz.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ekbcmzen.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163bikwfigk.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163qjaccjzn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163jywbteud.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ybptanqp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163bbfwqhql.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ovnuvsgd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163rvehsuqa.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163tawkxryn.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163sczshhqj.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163wlcgahbr.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qzmyjdwh.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163uieahevh.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163zrqrmrmt.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ejrjfhdk.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163biguvtoh.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163jmewizpt.html

composer require psr/container
来源：http://www.aibaodan.cn/163vawdwitq.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163rybpxalt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163aufraoeh.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163obftjber.html

composer require twig/twig
来源：http://www.xuanzx.com/163jmayicfw.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163lwbvbrub.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163hchszxps.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163hhajwror.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163pyjckdkf.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163cechzdsf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163xqzerhla.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163qawluxoh.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163hnlypwbs.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163urcavxes.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163gkffmzud.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163cmmyycou.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163atgucimm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163abavwzyi.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163rghpnwcc.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163iupgjsnt.html

a?.b?.c
来源：http://www.sxryk.cn/163jerakasc.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ypnzqsyn.html

a ?? b
来源：http://www.aibaodan.cn/163whdyjprh.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163cibzbadm.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163sonvljaj.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163gacamupu.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163llwwhgtc.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163tmicgalm.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163luosfiwk.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163vrlhhbjn.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jumjpcmc.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163grlxawat.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163cphdyjeq.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163obvfnziv.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ggfuclda.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163lxqkcigu.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ppegurxr.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163gmdviksh.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163emlqqflr.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163hjyawzkk.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163tfpriawx.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ivcaltmi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ifdplikl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ymjtbvko.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kstrwikl.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163xvmbcaau.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163iuglggcq.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163irzzfjlx.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163vvwprhnt.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163regcqsbq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163tzkwyxxl.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163jvelqnxe.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163asqrvcfw.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ekjpylnu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163iffiztpd.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qwrdknss.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163mxcpdudl.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163orbwlpgk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tvqnvbdb.html

[U105] JS：节流
来源：http://www.sxryk.cn/163lvxkpzwo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163twwcmgtv.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163pzoufwcs.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163xdqyjehv.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163xpixsuyh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163boylvzbi.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ttwoewtv.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163qgreddzs.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163axaomwje.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bcanxyoe.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163tuhwsesf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163wtcaywsi.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163zklsdojy.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163rhiwpona.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163pwgsdept.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163aeokgmxd.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163jgpkbkld.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pakmhnnc.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163llrjkerj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wljjzzji.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ygcwemjm.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163oawkplpl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163twhknmut.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163crakzpvj.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163xdcexpbm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163lnweftop.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163typgfkoh.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163yistmvot.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163yneqndjo.html

npx vite build
来源：http://www.xuanzx.com/163rfzytami.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163tadknrjl.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163phubzfga.html

================================================================================
来源：http://www.aibaodan.cn/163wuhtvvsc.html

统计汇总
来源：http://www.xuanzx.com/163bcbudhhc.html

================================================================================
来源：http://www.aibaodan.cn/163zolfqucy.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163kvemolsp.html

Python ......... 252
来源：http://www.xuanzx.com/163ltkhyvmc.html

PHP ............ 252
来源：http://www.sxryk.cn/163ovtqufve.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163dmhduzyq.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163xynuueoa.html

Java ........... 212
来源：http://www.sxryk.cn/163jnfzrbsf.html

Go ............. 212
来源：http://www.xuanzx.com/163qosaotic.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jvbgmhts.html

C# ............. 212
来源：http://www.aibaodan.cn/163evrzlzek.html

C .............. 30
来源：http://www.aibaodan.cn/163zlukitwt.html

C++ ............ 30
来源：http://www.sxryk.cn/163wrtajctn.html

SQL ............ 90
来源：http://www.sxryk.cn/163vezjqvan.html

Bash ........... 80
来源：http://www.sxryk.cn/163nbqkbqcs.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163vohhsmpu.html

Swift .......... 15
来源：http://www.aibaodan.cn/163wyenznfy.html

Lua ............ 10
来源：http://www.sxryk.cn/163vufeppov.html

Perl ........... 10
来源：http://www.sxryk.cn/163ejvszdfw.html

Scala .......... 10
来源：http://www.xuanzx.com/163vklmtayu.html

------------------------------------
来源：http://www.sxryk.cn/163tequgpsu.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163kqyzqgbq.html

按章节统计：
来源：http://www.xuanzx.com/163yzcazpkp.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163morakpvc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jrnmfjdy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wsdemvat.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xnuovwdm.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163atphouoc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163grilnfsw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sgmcyuyz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163cwswylea.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lxzzzlha.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163dmackros.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tlebtpyy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163whawfknf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jsshllpm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163nxroyrdt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163dcsloqxj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rvbindxo.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163xppqggnn.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163xmvtdjrk.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jfxeboro.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163usmzosoi.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163zgjwiqcg.html

------------------------------------
来源：http://www.aibaodan.cn/163ujhyishc.html

合计                                  2106 条
来源：http://www.xuanzx.com/163cqycbzju.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163svoltnvs.html

使用提醒
来源：http://www.aibaodan.cn/163gvwvkiod.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dwaurpjm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163bnwabcnh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163lrrcwfyb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163hzogzjpv.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163zbjxeask.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163fsuxrskr.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163unfhhvzb.html

================================================================================
来源：http://www.xuanzx.com/163euhapkzj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163tiksepsc.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163wnlnvkvs.html

================================================================================
来源：http://www.xuanzx.com/163fyqpxplk.html

【收录内容】
来源：http://www.sxryk.cn/163vfghtris.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163bqtquilz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163dxgfovqm.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163jhgtkyau.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163jttyvhed.html

【使用说明】
来源：http://www.sxryk.cn/163uxqovnqh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163yemmowra.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163jubksluh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ebauhphk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163rhxqavbc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163urcqpcba.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163sepsiuko.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ifhudsae.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163qkzegdts.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163neduapjp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163qjyuklfw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163gpzpomcu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163tslzicir.html

【文件统计】
来源：http://www.sxryk.cn/163xobuofhp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163bkrnxasy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163iwxnfcoa.html

目  录
来源：http://www.aibaodan.cn/163ocpqbslq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163plnvdmep.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qgtpgtlk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163bvgmjvhh.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fcmxnwjg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ibxtyypa.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163otomyppp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wsmmzbeg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nfzhfatk.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163xsrwytsu.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mgsdehit.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zlrvjkad.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163myfdracj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bwnvuddz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zydinsxu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163pwrodhmt.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163tiqgpkwi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163njqherti.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163gwlxwnqd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163grkhlsqm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163pmtzztsq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wwvkqbow.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163eikpdmux.html

================================================================================
来源：http://www.aibaodan.cn/163xnsseyua.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163ryddbchq.html

================================================================================
来源：http://www.xuanzx.com/163imadmbcd.html

[A01] Hello World
来源：http://www.sxryk.cn/163lwazrhei.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163qzefitck.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ohifszrx.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163rfnmsquy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163rgogvmde.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163vhazmfzh.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163yteohyzw.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163cxvfzzvr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163jhppfxjt.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163glerpjjh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163mbyfvkyb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163szpqpsgn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163bgorcocj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163ybffvvjb.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163iohmlxdb.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163bgeqbfzl.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163rkzctkwm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163tnonpzed.html

[A03] 常量定义
来源：http://www.xuanzx.com/163wqjueyox.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163pqemgllh.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163jkdiqclo.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163jjrhgewi.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163yzatwdqp.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163vdgsxdid.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163justbxhl.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163wkhxwner.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qlmwdzfd.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163xzibumfp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163ibolotjx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163gleragbf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163pefyijbj.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163zgiweesz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163kbawdgcy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163nczadhuy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163rurrjbjf.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163edqabczq.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163tixevxyl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163xibugkwt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163fdywrvvg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163yzowpxww.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163htmilnoe.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163npmqcaof.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dnvmloaz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163otfkmjct.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163sgdjgezq.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163pynyqpzk.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163qgmmtwws.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163pkzjckzk.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163clseceeq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163lijeqaew.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163kmwkiaev.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163giznskzl.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163smdjjvua.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163xcgrctiw.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ecswxkay.html

Py:   str(42)
来源：http://www.xuanzx.com/163uatikpwu.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163xemeuazo.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163lxacyucx.html

TS:   String(42)
来源：http://www.aibaodan.cn/163grwymwlc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163rwvknqpl.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163ywixejbv.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163qtfxcijj.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163pfcnsjpo.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163bpgjxrmw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163kfiqiygs.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163qwvgsmtf.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163ufyoyldb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163jrlrrmft.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163feaealrx.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ulnxkndn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163fvafruqn.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163kgekiowk.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163wjfkxdjf.html


<!-- 参考信息 -->