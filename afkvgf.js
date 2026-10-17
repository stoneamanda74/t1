外链999!wailian999！

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163zksfkafo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163lbaaagpj.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163daghvlkp.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mgcrgiug.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163sykslspw.html

"值: {$a}"
来源：http://www.aibaodan.cn/163dbojgsct.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163aoljaish.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163gkgjdjke.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163vpxseppk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163totkrhri.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163nqxfskuc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163lwxqvshz.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163bxngxafx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163eoggwbmt.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163talwpfjv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163sqcpwdbx.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163qpnkyhzc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163rriwnpsm.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163pizwfooy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163lxvkfgqg.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163eekxmlmi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163cglcdiwk.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163nbxxwlux.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163msobpddh.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163nbiyexyp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163bweuayhz.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163eyzrksnd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ngxlpkva.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163acghtcsx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163gylqjvtw.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163vvglqjbp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163wirjwsri.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163nvwbjouy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163cyfsryws.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163arsimkdd.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163pgprgmkm.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163tpajsyhr.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163rzwqfbjp.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wpvcxybl.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163grnhfdft.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ilylwifc.html

composer require psr/container
来源：http://www.aibaodan.cn/163udlmkeff.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163lygkrqnm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163cogtyjqn.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qeqbrcat.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zqjbosiv.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163pvpkmmrx.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163fisgxftx.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163jtcdpudh.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163kghmdopj.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163rrtmuwsx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163yrroixaz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163yewqrjxj.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163guitweoj.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163htmsaaav.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163jmlukecb.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163gvxvbbcj.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163gboqhlwt.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163clwlajim.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163lrxhemvy.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163gyszqyhv.html

a?.b?.c
来源：http://www.xuanzx.com/163hcjedplp.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163codluylu.html

a ?? b
来源：http://www.sxryk.cn/163kauhylpd.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163zwfdqjim.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hdeqcxuv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163kitbymkq.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163jkeulftm.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163skbsiuhr.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ahuxoype.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163nmdzspvw.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qrtesxdb.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163sqwtfydy.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163qxjtdbbr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163dmihkbco.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163kjzjwkut.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163mwwsmesl.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163pcyexjpk.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ftlqdazx.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163gzmxlkjh.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163xwkxyxea.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163gqdxnvsm.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163zwpfhnad.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qxdcinvt.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163gzuhmbcx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163schivotv.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163kieqghff.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163oukymlhz.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ndizecec.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163cziopuby.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163otxpbjcs.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163pzqbmieo.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163akckzxkq.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ysckjgwi.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163igadlkzf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163cwpufrsr.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hzbdoctj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163koidgcmk.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163dcoqcrcf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lihbbenu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163uekcscsg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163bojkpjvr.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163ckdowzna.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ieeyfddp.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163htztvfqg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163lpazxmux.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163otrblhkf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163acedifvi.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163qxxmfltx.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vgagwjvk.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ukjlrzfe.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163pbejhnxh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163heqvbkss.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ckkvgxih.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163wmucoocc.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ngewprxn.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163mjzxdyri.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pnxulcfa.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qxljircu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163utksvgiw.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163pnknukyz.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163qvvkwzko.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163pgkfsefc.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163fhglsctu.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163pdiiyvle.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ixmbvaax.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ozbufjir.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163tiubeycc.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163hmushaim.html

npx vite build
来源：http://www.xuanzx.com/163tccxjste.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163otpsjaun.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163enyapsqi.html

================================================================================
来源：http://www.xuanzx.com/163sxnropdf.html

统计汇总
来源：http://www.xuanzx.com/163thzqjfyu.html

================================================================================
来源：http://www.xuanzx.com/163kdtwiuxg.html

按语言统计（条）：
来源：http://www.sxryk.cn/163rshogkjw.html

Python ......... 252
来源：http://www.sxryk.cn/163gcgczzso.html

PHP ............ 252
来源：http://www.sxryk.cn/163twaypszx.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163fpbklxfz.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163dzidubue.html

Java ........... 212
来源：http://www.xuanzx.com/163jvtbkijx.html

Go ............. 212
来源：http://www.aibaodan.cn/163mjartxdx.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163nfmprhis.html

C# ............. 212
来源：http://www.xuanzx.com/163ztepuxbf.html

C .............. 30
来源：http://www.xuanzx.com/163vkenxdmd.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wpsttrzs.html

SQL ............ 90
来源：http://www.xuanzx.com/163igdzryau.html

Bash ........... 80
来源：http://www.xuanzx.com/163lribothq.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163gbhymlsu.html

Swift .......... 15
来源：http://www.sxryk.cn/163hwqfvhpe.html

Lua ............ 10
来源：http://www.xuanzx.com/163rintiixi.html

Perl ........... 10
来源：http://www.xuanzx.com/163iqkukwyw.html

Scala .......... 10
来源：http://www.sxryk.cn/163qutffjgb.html

------------------------------------
来源：http://www.sxryk.cn/163pxfmzrmm.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163stckxbjo.html

按章节统计：
来源：http://www.xuanzx.com/163mmkonavz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gfmftxsy.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rzongafn.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rznkeasj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163daqkrauw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163cnuudzcw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163szgvbqco.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ebpnilmt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fgjnwknz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ieuhadzl.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fxbonhfb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qbantcvk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qmmrupsg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zcxcbfuh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pwxpnskp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163nkviowso.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xqwwfmex.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163avscmwng.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163xcynincs.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163htnakpbg.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163jgieaiwc.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163pwsknwmo.html

------------------------------------
来源：http://www.aibaodan.cn/163nukykipv.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163xbbgyqgq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163aykzqvlq.html

使用提醒
来源：http://www.xuanzx.com/163bkamgdid.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163actvzxfw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163xqipwknw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163sibgqcvd.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163mzehzada.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163zklcvcdh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163gexucpou.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163cjukeagr.html

================================================================================
来源：http://www.sxryk.cn/163outdmwth.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163kseidkho.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ngzvesuu.html

================================================================================
来源：http://www.xuanzx.com/163ujodinez.html

【收录内容】
来源：http://www.sxryk.cn/163watlnwtt.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163jcauatmy.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163xziysgkj.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163iyzkndkd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163tssudeny.html

【使用说明】
来源：http://www.sxryk.cn/163ertxqbtp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163srvldljh.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163dfvvwnem.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163yotszmbi.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163fipgbusy.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163rfgrdnod.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163yebpeavd.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163rawzoiak.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163iovcznyl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ydbhjdau.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163zoybodif.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163rqzkenez.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163fqcuorco.html

【文件统计】
来源：http://www.xuanzx.com/163byjeukvf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163fhtkbyqz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wazmobuu.html

目  录
来源：http://www.aibaodan.cn/163jrdwsgab.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qkqqyymg.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163byfconlo.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163cgqnmvkd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ynunumjb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163dkgedbwo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163risleocv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163dzqcnlkk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163uofkklpa.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163whzldqpx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pkhvtkap.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163aqedhtwf.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163upsvrwex.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jucmqyen.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163byyzahqq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163rcbjfwni.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163cdijwlqh.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163veszizax.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163rtoadzyp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163hhjttgyr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163crofmogr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gvkqpghq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ruypyvcb.html

================================================================================
来源：http://www.aibaodan.cn/163lbajljhw.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163fvzogijz.html

================================================================================
来源：http://www.xuanzx.com/163dhgothns.html

[A01] Hello World
来源：http://www.sxryk.cn/163juxrjozz.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ukkipgmo.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163growtwpb.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163fxixdeex.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163zgumrrjx.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163gkpjhebo.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163euozuagh.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163skitrkjg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163rvmuzjcv.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163qzsjgbll.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163xabsddxv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163galdbghc.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163kvpwbvws.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163ufekxkev.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rsxfgghl.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163mbwggqkk.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163aeiqzjsj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163mzuakzrr.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163dtlodhgo.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163zhfsypja.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163anblijvm.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163zrtgvysh.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ruypyhha.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163dondbuke.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163pqkkzmux.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ajwhukrf.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163voaddgie.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163vyqfqklc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163vrwrgosl.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ijdjamyq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163qgtciapd.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163erxovjzw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163bpwvgzcm.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163rxxretdc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163bwekhyfv.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163gqtkaxnk.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163pjfptzbj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163zgshjxxr.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163jfihltmb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163htrofgdu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163uzpdlehx.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163cnggakgn.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jyshdjnf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jwkwfynm.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ghsuados.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163wpfhwyqs.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163yfyyinjz.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163iqljmkhx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163wggrzncn.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163nnqxkxnj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163abusmilh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163yjjpdtfm.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ahejhysn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ouggevkn.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163olcrxwah.html

Py:   str(42)
来源：http://www.sxryk.cn/163tnapvbnd.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163evdjltff.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163mfcbttls.html

TS:   String(42)
来源：http://www.aibaodan.cn/163xixyohzr.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163nxkjibla.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163omejxgtg.html


<!-- 参考信息 -->