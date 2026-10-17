外链999!wailian999！

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163umoecmbx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163shcxidte.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163cflijjcd.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kwcsvsni.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163fylfajxc.html

"值: {$a}"
来源：http://www.xuanzx.com/163vnsqoldx.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163byahpvvk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163xdbnlatu.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163dlwhcllv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163bwgmlury.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xxlaswjn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163bdhkzlad.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163wnulsnjg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163yfikmszt.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163kscgmgbz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163jxaulthf.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163llxetvcn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163kyfkullt.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163fsxwdxxf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163iwsribjn.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ncilgqck.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163kbgpsgrj.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qzklktxf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163oyvowtba.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163sehjhrsr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163rkgxfqct.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163hngamvfp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163jlfhnnzd.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163awpyvbwd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ahtiscjq.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ufwzcloa.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163wotchfvd.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ejsogcsk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163tseoghuy.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163wtlswcjm.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163hmuoikdr.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163sstvuuqq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163dxvszoog.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163whjnfbdw.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ftflzxnr.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163lcketxfz.html

composer require psr/container
来源：http://www.sxryk.cn/163ozhrshvc.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163lboyvgxs.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163jjhazugp.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163aspqhute.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ayfxnesb.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ofegrmrf.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163jexsieoz.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163sxvfaxws.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163bxqmgicq.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163jnpekkzh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163smukokwa.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163dwihftuu.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163efouyafy.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163yonivksn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163zdqtlrje.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163wvwacapj.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163gaopnanf.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ntqtmbrr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163eyutdeel.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163fljodazy.html

a?.b?.c
来源：http://www.aibaodan.cn/163ylfwmscu.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163uopihdnu.html

a ?? b
来源：http://www.xuanzx.com/163ottkiqgs.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163sexzjrfv.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163wojprsxx.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163nlaossgh.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163nsgyllvs.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163akswoyre.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163gepeebxv.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163bdvfwlpm.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cmgfkzzh.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163rveoyriu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163xkkoscoe.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ikztoaoj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163empjhfgu.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163bnmstdvt.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163qtsmeuuy.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163fswjcdpq.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163evqkuhvf.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163hwnwbrkn.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163clnocinv.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163yusgharg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163iapuukut.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163jcbkqcpx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rqxtjpki.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163cnegmtle.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163uaznoncb.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163gdutrjrh.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163fjlybwkz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163lvurdnea.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rydjjlgn.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163dkciktsu.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163dmajesfv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163tfnsyufy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163tboallbt.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163bbbdrfvc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163qohagxje.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ikgjphop.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hrsintwp.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vooyyiuo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163lphssiyg.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163jcstcbxv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163kortamtw.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163zshpdqxl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ysdsviku.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ptbhokex.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163gbmowuqm.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163yahvjjkb.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xgipplgc.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qdljnnmm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163rrtlewam.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163hzutsqqy.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163gejuszno.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163kgcnumyl.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wpjwmyaa.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163cmiolula.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fajwkxcd.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163naysukrx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bbsaqofp.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163sngsyuox.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163rwonrvmo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163cocsbsky.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163niyalpfz.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ktuwnnwj.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ybjpzqgt.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163mgorimfr.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163txtmkplu.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163iyzzavty.html

npx vite build
来源：http://www.aibaodan.cn/163xhpwcegf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163xtjaahhb.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163jpfpyvus.html

================================================================================
来源：http://www.xuanzx.com/163rupihhif.html

统计汇总
来源：http://www.xuanzx.com/163nuldpdoe.html

================================================================================
来源：http://www.aibaodan.cn/163fbquksli.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163xtexvbtv.html

Python ......... 252
来源：http://www.xuanzx.com/163xkwkfqcs.html

PHP ............ 252
来源：http://www.aibaodan.cn/163ssrhtchb.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163fxnodjos.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163fcfnprwx.html

Java ........... 212
来源：http://www.xuanzx.com/163agrfcngp.html

Go ............. 212
来源：http://www.aibaodan.cn/163xxaldchy.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163yurxgomh.html

C# ............. 212
来源：http://www.sxryk.cn/163zexhpfmg.html

C .............. 30
来源：http://www.xuanzx.com/163udpzsdrx.html

C++ ............ 30
来源：http://www.aibaodan.cn/163tdccsada.html

SQL ............ 90
来源：http://www.sxryk.cn/163haxecwdu.html

Bash ........... 80
来源：http://www.sxryk.cn/163yhlrumrx.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ppueaszt.html

Swift .......... 15
来源：http://www.sxryk.cn/163ryhwhtco.html

Lua ............ 10
来源：http://www.xuanzx.com/163zzmwbinh.html

Perl ........... 10
来源：http://www.xuanzx.com/163crfcbrwl.html

Scala .......... 10
来源：http://www.aibaodan.cn/163jdbmatjo.html

------------------------------------
来源：http://www.aibaodan.cn/163glbyfbuy.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163vmutcqoh.html

按章节统计：
来源：http://www.sxryk.cn/163iutknzhm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tbbvrrot.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xmkbyqaf.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vlgpdfeq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163jxmgiqsc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qpswamig.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163mlooqcsf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163uhtulesi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163swutctae.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163edurrolt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fmblygrd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qhuponnt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ckyobjen.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rqajurut.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163yjfzcxkx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163mnmaqqxe.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zyyljkud.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ewwfwqat.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163qondwipc.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163shpuqgnt.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163xsgvgbhb.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163bqxfuuei.html

------------------------------------
来源：http://www.aibaodan.cn/163ntsuokgy.html

合计                                  2106 条
来源：http://www.xuanzx.com/163hiqcoxnd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kjxvssbe.html

使用提醒
来源：http://www.xuanzx.com/163padyeahu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163kryjqbxb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163xzgupftq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163jebloeul.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163zfalmuyj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163ewpxmugw.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163czlgbsvv.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163rjvvhbrx.html

================================================================================
来源：http://www.aibaodan.cn/163uaaufhvg.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163flmjhzdc.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163lhtylifs.html

================================================================================
来源：http://www.xuanzx.com/163qkakadoy.html

【收录内容】
来源：http://www.xuanzx.com/163olagobqr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163yrsmsxvk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163sfilnruh.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163getpqilk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163tyjsoxam.html

【使用说明】
来源：http://www.xuanzx.com/163xgkeladh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163enirhomw.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ozpzlizj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ldfdilqr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163pkydsvom.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163mjtnanvd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163dexldlio.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163hzgibeob.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163smmmwmiv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163jgxrtkrj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163flzynlaz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ydlxssym.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163kcpbgyph.html

【文件统计】
来源：http://www.sxryk.cn/163lvsdpdlb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163reztglcy.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lspvqhsb.html

目  录
来源：http://www.aibaodan.cn/163navylwag.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ipujegkr.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163mohcikdq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ukstpesu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163cgplgyzc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163bsxqzfkq.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163wuvvhaqz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163rrzmtkgn.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163nwnztvvu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ggaxntyc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ufbdnulo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zuqwjkzl.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ytqwbmoq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vsqwodup.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163oeastkth.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163qnrqhnvv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163fhlgrqfx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zfonnkmo.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163xjrmroka.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163maflctih.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163qayvbbey.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kxmajsoq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163kdosbtzu.html

================================================================================
来源：http://www.xuanzx.com/163mjnnhhuw.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163gapcheai.html

================================================================================
来源：http://www.sxryk.cn/163lycgsnbb.html

[A01] Hello World
来源：http://www.aibaodan.cn/163qgvccqkw.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163jennefji.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163momtzult.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163dgrbemmj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163rvwxdald.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163nxxhefzd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163ddzyblir.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163wqvdtiva.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163frbwkihk.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163dermwpgo.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ycontrlv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163seweyhen.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163pesxkcmx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163eocssjgp.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163udmnijzm.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163gfliyfti.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163mmcupqdd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163piuypmcw.html

[A03] 常量定义
来源：http://www.sxryk.cn/163mqfjrrtn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163cjwueiyc.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163hvvidlhf.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163brusjssa.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163zcsgqxbx.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163jxcnxlhp.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163xxqgpnav.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163siffivpd.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163vvpiqwui.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163phbagbul.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163xcwxzjkz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163qcassylc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163dnqbgpwc.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163bkkwlswb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163llmbwclu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163ehvtfdyu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163upgufjwa.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163fxfjwehu.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163lgpzzkuo.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163szdxmowp.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163xcrupfhk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tmotvlgl.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163oakobmia.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163aytqqlzd.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163molhzmiw.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qmczhxpr.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hubyzzag.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163xqavjmwn.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163zjyekjmv.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163cfaianxd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163abemoqgc.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163igmbmumt.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163lbdqaqxt.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163xdcrqlon.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163tefmpuux.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163noacsbgj.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163lluecgux.html

Py:   str(42)
来源：http://www.sxryk.cn/163zdpctjlt.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163qibeyqta.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163cydzgfho.html

TS:   String(42)
来源：http://www.xuanzx.com/163jdofhscz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163vfqcmnjl.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163zxevesyj.html


<!-- 参考信息 -->