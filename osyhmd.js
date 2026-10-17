外链999!wailian999！

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163pnojyfoa.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ujkwhlll.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xqkuhxbv.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ebuoslwb.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ynlisupc.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163kkidhldi.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163lepwwejo.html

$obj?->method()
来源：http://www.aibaodan.cn/163yhgnsfli.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163rxwpljvh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163fahunivz.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163muilwgpr.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163sgzlgypw.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163dqfvpdao.html

"值: {$a}"
来源：http://www.sxryk.cn/163uljgsech.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163cqdedpny.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163zvnohzer.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163xlnudjfg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kdffzmru.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163grsxjncx.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163rgvojvjv.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ncrfavhg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pkviiphk.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163jtjnawso.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163abyqmyou.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lmriwbxo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163iwcxkxsx.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163dgqzynyc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163fqjnrmwf.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ssaemomt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163iqmvedrs.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163twniubcd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ishtthth.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163pffvipcn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163fvtnfmaz.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ysvttvdm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163wnwqtnme.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pghneavt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163zqkcouwu.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ijouzfqq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163yytzpzsi.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163axyzfxrz.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163casmmjsj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163osidharw.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163cnribxzx.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163udvxeyhp.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ubangvdd.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ujgersii.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163azomieii.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163apacpcap.html

composer require psr/container
来源：http://www.aibaodan.cn/163kbfzlfpu.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163rsfqhjgn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163fkuybldp.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163iqtzfvfy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163opyfwdiv.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163oedzdnuu.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ezyhakfb.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163jnluxnev.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163izhozxes.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163aawodgqm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163uldnnplg.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163usjqbkzg.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163iifsllov.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163vmsizgnw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163dlenjzai.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163khezyuag.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163zdicwhyo.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163pxhkiwsm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163jqdhpvgf.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zxbmndzo.html

a?.b?.c
来源：http://www.sxryk.cn/163gsrvcrux.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163yrcgvkyy.html

a ?? b
来源：http://www.xuanzx.com/163yllglsif.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163wrlrruyn.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163jvjhuirz.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163puxrljvx.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163wurnvsjb.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163wowiwyxb.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163lzudaycr.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163yhdpyctj.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xijalscp.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ihtjigqk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163banyrque.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163tjzxazzz.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163yokrlaky.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163hwkqugeg.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163abdpmazx.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163pynikqzx.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163pjvxthlc.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163posiulpq.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163azrzxfcm.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ijtbptnj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ygyothtm.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163tnpogmou.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163llvpfbjg.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163yhhhpivf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163gnkvdhyp.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163sdvutcsq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163kmgycien.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163zllbilqp.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bhpeayxw.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163hhvbmdpq.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163phodylsq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163tjhbqjid.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163jgzjkmnv.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163fsmjeqqw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ujigxcbd.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163kzmmxryw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163imhdjndl.html

[U105] JS：节流
来源：http://www.sxryk.cn/163gvhvxphg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163olcvgwqr.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163rkauuxmc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163wwwlxezd.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ugpsjjlj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163poagorea.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163egrkosqr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163upbbuqsf.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ipxjhfjt.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pbntqkwb.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163dmtctozp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ndunlynp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163kpvuzezx.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ggyshqbx.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163sowxqmsc.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ujjcedlm.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163koksltul.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cvaesmho.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163fhefexvq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hxfxwhfp.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163lwgzkxlv.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ttyiqttz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163waqhomfm.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163byvazazf.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163zgsaksoo.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163bfunsfby.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163nxjrklwx.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163yidccwnz.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163vfpuivgj.html

npx vite build
来源：http://www.xuanzx.com/163rtchcjbp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163etouhevo.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163schznnqi.html

================================================================================
来源：http://www.xuanzx.com/163llssuvju.html

统计汇总
来源：http://www.xuanzx.com/163kplvpzjp.html

================================================================================
来源：http://www.xuanzx.com/163hlpdjwer.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163wscgfoax.html

Python ......... 252
来源：http://www.xuanzx.com/163tuopqbzf.html

PHP ............ 252
来源：http://www.sxryk.cn/163zomjpnkw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163bijerwin.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163kmdmjlix.html

Java ........... 212
来源：http://www.aibaodan.cn/163qdfpiywa.html

Go ............. 212
来源：http://www.xuanzx.com/163mtiaaffp.html

Ruby ........... 212
来源：http://www.xuanzx.com/163kyinsnfs.html

C# ............. 212
来源：http://www.sxryk.cn/163lvtvknzr.html

C .............. 30
来源：http://www.aibaodan.cn/163kgfmdpcb.html

C++ ............ 30
来源：http://www.sxryk.cn/163cqdzdlgw.html

SQL ............ 90
来源：http://www.sxryk.cn/163tkxcupcp.html

Bash ........... 80
来源：http://www.xuanzx.com/163usvavvyr.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163kdsdorgt.html

Swift .......... 15
来源：http://www.sxryk.cn/163aetahsou.html

Lua ............ 10
来源：http://www.aibaodan.cn/163vsqhbnhi.html

Perl ........... 10
来源：http://www.aibaodan.cn/163kluvgyrh.html

Scala .......... 10
来源：http://www.aibaodan.cn/163uqzapcpk.html

------------------------------------
来源：http://www.aibaodan.cn/163rahteswp.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vhuoqyth.html

按章节统计：
来源：http://www.xuanzx.com/163owianrnr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163dplhcgsi.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tiwcqirq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jlsopvvx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kiftukgg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163zxtilqbh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gvkjlkhz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ynscogfv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vxvcfwhr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bmuhihkt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163bsbedikq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163unkhhgcf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dqpbhlzb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ipynjsmi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163kuztcrcw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163uronsnzx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kjyybkcd.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163pebpmqdv.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ymdztygb.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163oiwwpoob.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ahkalnlb.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163gdkjfrok.html

------------------------------------
来源：http://www.xuanzx.com/163qwbtfkgu.html

合计                                  2106 条
来源：http://www.xuanzx.com/163upgodrao.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qioixtkz.html

使用提醒
来源：http://www.sxryk.cn/163lrlqyfcl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ddpdkxtl.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163azjbfqph.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163rbemidro.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ojttsgva.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163zgppfojl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163bvjfxwry.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163qygwsksi.html

================================================================================
来源：http://www.sxryk.cn/163soakbiso.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163eubziyof.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163vbsgthcs.html

================================================================================
来源：http://www.aibaodan.cn/163bvolifcr.html

【收录内容】
来源：http://www.sxryk.cn/163uqjrknjf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163asgmmmxn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163khfszbrf.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163cvdjapxg.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163wsrvdghl.html

【使用说明】
来源：http://www.xuanzx.com/163hdizfmuc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163xkrucydz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163twptwdhu.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163xwnlwpoa.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163clnijrgd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163igcmqywt.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163hprbtqzi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163tgpafhal.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163atwzucpx.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163nmurondn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163edxwlipy.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163siiylzol.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163sqltgqxx.html

【文件统计】
来源：http://www.sxryk.cn/163yvxpgmzr.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163obuiuhds.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nknmhbpv.html

目  录
来源：http://www.sxryk.cn/163gcvvsszh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163chtjhjit.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163lvcgbvju.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zynukaur.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163csimbzzs.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163vpdhwuxz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ptiigjzd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wvuijvej.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163uiyiresx.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pipoiqjf.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163trgqyzpx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pxzyagst.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gapeowzy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163yfbskykb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fpkhuklw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163limruipq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163vljcenhl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gvqhtywm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163tindjhxk.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163lthntkap.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163bjkpcwdn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fkkztjgf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xmqhxxyq.html

================================================================================
来源：http://www.sxryk.cn/163aifhfwnc.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163pppxpmwo.html

================================================================================
来源：http://www.sxryk.cn/163ixnjayom.html

[A01] Hello World
来源：http://www.xuanzx.com/163cibiolcj.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163fdtggkml.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163zvcmotqv.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163bspgsvhg.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163dnsxdqah.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163jfulrcxr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163wmatnlvi.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163lymtjpqs.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163yhyfpzep.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163nbbvqicf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163fdyqghrg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163mmvbplme.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163earzcvto.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163rakjrlhm.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163upatwrhz.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163hikhjnjs.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163xcgipaiz.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xpcahqmm.html

[A03] 常量定义
来源：http://www.xuanzx.com/163isthtbgv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163nseovtxf.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163rzhfcfzd.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163biwlzlod.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163qisydluu.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163dcyyfwig.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163foobochy.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163emxdgpbu.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163zwzrwkhm.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163nvqipsjj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ohgkujkb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163duuybwyy.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163huzfexak.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163uxehnqev.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163zcrejesz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163alrzjcys.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163glxkulih.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163posloiff.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163crayjspg.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163erfzbjaa.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163tdbawlso.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163jbfssudr.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163pwgjsglw.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163lezgzrph.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bkoynkmm.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zuzpfdlm.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fjcvggiz.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163tdwrxvyi.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ksigrmqi.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ofubxdkj.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163aapscqcn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163kfzriijz.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163sgrnmwrt.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163tjlkkixn.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163dnzjyxkz.html


<!-- 参考信息 -->