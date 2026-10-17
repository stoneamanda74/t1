外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163hsustzbl.html

"值: {$a}"
来源：http://www.sxryk.cn/163optkjras.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163peoqlleu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163kcemijbi.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163awfmolln.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ozqzudgn.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ihkdxygl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163whtxsunf.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163trnzipcs.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jkeoldfb.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163qjstktae.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163zksyfloj.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163riipoosk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163uispnvbb.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163rufsnpww.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163zdyfydob.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163kqdkvfos.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163xgkciazp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163stfzrivo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163gykodubm.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163zdxijiio.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163yshusiqx.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163hzbrcsyu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163grcratfn.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163jerqocvf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163xzblnghe.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163dfcwmcav.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163cbqvhegr.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163ozzbrybh.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163tuvbmbdr.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ornjoalp.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ytpggcms.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163gnvabubt.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163lpyryydu.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163zqpegoxk.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163dfzcbltn.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163foegugid.html

composer require psr/container
来源：http://www.sxryk.cn/163pjfucalt.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163wydkirdm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ygwxskrf.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163wupytfcy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163tjqggyso.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163wsamoxaa.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163kkgjsomr.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163rmznzwlq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163belvauwm.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163igsivwjw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163xtplnbzk.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163hyflvcug.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163vwoiyyfu.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163enyyevde.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163cxzrahoj.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163autgorpr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163hcsykekr.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163bbaoigib.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163mnjyfbeq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163prsuercw.html

a?.b?.c
来源：http://www.aibaodan.cn/163qolfljdq.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163xhkxzwzq.html

a ?? b
来源：http://www.xuanzx.com/163lckjgteg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163qtpgplak.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163iygsgnhf.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163hfgsninw.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163djmtbskf.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163pydhlkst.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163hnyiaexd.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kqqrhjoh.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163agmsnfip.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163iejgxwyx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163binbmrdn.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163mkxkmtav.html

structuredClone(obj)
来源：http://www.xuanzx.com/163zhlutbks.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qhhsowjz.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163rtgkpwnq.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pxslcjsm.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163qvzgqxpv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163pnjcgcbq.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163wzwhkrak.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163stddkmll.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nofvkvzc.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163pwwkbnpk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jxkqfufz.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163fjmleczl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163fanvwoyf.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163ggnzdglr.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ipjsyhme.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163dctljcin.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bagipjqo.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163oehporxs.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163rxhuqtqh.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163tiwdpxuj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163rwytpttn.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163bvndvhgv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qceudhrw.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163jamawgql.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aeulcibf.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163wdclxglj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ecaybedh.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163zepscdoe.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163mjujmklq.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ipejxnry.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163jopsabgc.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163fppralhx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163qnuwyyzs.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163vmyfuyrc.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qwbpuhoy.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163jxqccdfn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163lbtooriq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163egvjnqju.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163nezluwla.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163bldroeac.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pmcgnaiy.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ykcbjqxu.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nsiakpfj.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cpvcjhvc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hsxtchxd.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163fkfyyenr.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163gwtdmulf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163jrjgzxxz.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163mbtmvhpi.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163kelahker.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163hcayvmrg.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163yrjpzyrm.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163rjvsoori.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163jesissth.html

npx vite build
来源：http://www.sxryk.cn/163onymjcdh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163gnewliha.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fdrjvujz.html

================================================================================
来源：http://www.sxryk.cn/163gggxwwka.html

统计汇总
来源：http://www.xuanzx.com/163lvvfuepb.html

================================================================================
来源：http://www.xuanzx.com/163imjxixpx.html

按语言统计（条）：
来源：http://www.xuanzx.com/163wbbsvsau.html

Python ......... 252
来源：http://www.aibaodan.cn/163ohvzlfyb.html

PHP ............ 252
来源：http://www.sxryk.cn/163lnuybczm.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163mvcwstss.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163jrdfmlko.html

Java ........... 212
来源：http://www.sxryk.cn/163bynmovlg.html

Go ............. 212
来源：http://www.aibaodan.cn/163ucxeaiho.html

Ruby ........... 212
来源：http://www.sxryk.cn/163deblpptx.html

C# ............. 212
来源：http://www.aibaodan.cn/163uucarsby.html

C .............. 30
来源：http://www.xuanzx.com/163odbzsawt.html

C++ ............ 30
来源：http://www.sxryk.cn/163magmnrjx.html

SQL ............ 90
来源：http://www.aibaodan.cn/163kgkxoatf.html

Bash ........... 80
来源：http://www.xuanzx.com/163dlvspzrb.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163xmmbsgvt.html

Swift .......... 15
来源：http://www.aibaodan.cn/163hocuzbct.html

Lua ............ 10
来源：http://www.sxryk.cn/163ruxmctei.html

Perl ........... 10
来源：http://www.xuanzx.com/163sgglaiei.html

Scala .......... 10
来源：http://www.sxryk.cn/163uynrtdoa.html

------------------------------------
来源：http://www.aibaodan.cn/163gjqsawro.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163xbrzqfqp.html

按章节统计：
来源：http://www.aibaodan.cn/163icvusnub.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tvzzepih.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zyjeywpi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xvgfpncg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163aselojzk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163fmyveium.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163etyhngog.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xvrtlzre.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163vlmdshit.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rgexkjzn.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163plwewvpo.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vplrihck.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hrsnfjde.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ecummhrg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163lbfrsccw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163nkytplbp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jdslnhww.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163htnlnjhk.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163flkayzrw.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163thzwsrez.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163kiqmmjsy.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163sxopagqh.html

------------------------------------
来源：http://www.aibaodan.cn/163oiylualt.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163sehdjvgg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163oovskxos.html

使用提醒
来源：http://www.aibaodan.cn/163ejxoekmh.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xkndhlch.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163shgtjkpe.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163akjfilyy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163fyafcltq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163vsmctzzt.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163aguuivkw.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163iebrsrnt.html

================================================================================
来源：http://www.sxryk.cn/163qtyrlepb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163xpbybttv.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ityjyavp.html

================================================================================
来源：http://www.sxryk.cn/163vejabuzf.html

【收录内容】
来源：http://www.sxryk.cn/163slwwvgcl.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163qglcizxy.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163tytwisgf.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163pqtchikd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163yciyphxp.html

【使用说明】
来源：http://www.sxryk.cn/163wfklpkkx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163rkfxgqer.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ytipjlid.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163fkbfpdkr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163efagduvc.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163czxkjspz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163qpwczqku.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163iuygglir.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ixuxqnad.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163rqjsdmjm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163bgssyoxj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163cizstast.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163gwncjmch.html

【文件统计】
来源：http://www.sxryk.cn/163zvpffitl.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163bjxigqbk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163sysgsngy.html

目  录
来源：http://www.sxryk.cn/163grydhumx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163swhvvlzs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163njiffjqm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163emuowljc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yhixpuku.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jommgypu.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163gzavwmwi.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cpuwjcmn.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sfmnwyos.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163htymbbdc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rzffvwpp.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lbwtfnjh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sfzspbak.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vwdpmwab.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kwnadnhm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163srobokdl.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163memkoiqt.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kfyptjoi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163gjgkcopk.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163fvuubcfw.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163boumpxmg.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163cgxngtmn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kprcsuwi.html

================================================================================
来源：http://www.xuanzx.com/163tgqhkcxj.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163xnisamdh.html

================================================================================
来源：http://www.xuanzx.com/163mspqcnmc.html

[A01] Hello World
来源：http://www.aibaodan.cn/163dbpwbjcx.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163tecunogs.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163jnmxosfv.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163jcmcljgr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163mfovztsn.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163gxajztvd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163xwzsnsxd.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163aatdptfn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163atgdafes.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163sultvapv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ubnaedxs.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163hanusufj.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163qpmdgmjp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163xsqzdswi.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mekgalpv.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163uwjcvrgg.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163sjundvvq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163edadzxzo.html

[A03] 常量定义
来源：http://www.xuanzx.com/163bsdvncsk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163bgcfcnau.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163klvxdntr.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163aqaqkmzi.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163fhxzspgx.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163iexpnqcq.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163xgelvqxt.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163xjjhklnu.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163xedwgxnc.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163cquxksoi.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163zlkepjbg.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163evwnwbnv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163ilpjyerb.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163uetfciop.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163ypmgjycf.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163xqbpbcye.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163lclyozqy.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163qzfeijgo.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163edcpgsuc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163lqimonkt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163vzuwlcue.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163mnfubcuf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163erumcggs.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gcbvnzdb.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fdnekikw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163iefflifw.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ebezkhqf.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163orzgache.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163jmdpicaq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163dwyxkpzg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163lgxpmltf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163rydjibqc.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163dkmfimtb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163dlopbbif.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163kjclgntu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163zzblxeki.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163hmbhhtjz.html

Py:   str(42)
来源：http://www.aibaodan.cn/163vaqsataa.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163rnscjsza.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163jkiubrkk.html

TS:   String(42)
来源：http://www.xuanzx.com/163weqmyxuh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163mkdytmak.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163yfknkjnv.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163lyqwzobe.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163waopzyxc.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163nkgvdkqp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163gzfkspmn.html


<!-- 参考信息 -->