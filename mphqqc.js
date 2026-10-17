外链999!wailian999！

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163cmbpbskb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163jobaibez.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163gkcjawns.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ivyejeol.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163wupygupi.html

"值: {$a}"
来源：http://www.aibaodan.cn/163hsenygbi.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163fkaxeghe.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163lmgwuwpa.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163tiygztjg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pblldzqb.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mcdtiois.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ixvhnrvw.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163jpsjphjm.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ipbodgdn.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163axhaaltf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qetdzzha.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163zyfynbzd.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163tnzavmyq.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163xtdqwpzi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163wzewzstb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163rkojuatg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ryzhlpwe.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mpaxbbvm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163urmnlynl.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163nfnyihip.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163qcebkmgv.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163eeecbrnk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163jiwjkmqc.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163biqgjksh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163bvyaojsz.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163lptqdvqe.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163tvlrvvfd.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163rbjnyzzj.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163foievjkl.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163mggbwcok.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163rwhukgry.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163pfhrmjcs.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163kvycjjuq.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163bningqzb.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163tmoznjjt.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163mbbsojgz.html

composer require psr/container
来源：http://www.aibaodan.cn/163eixonxrd.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163zakdftmb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163tbhjyxlb.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163hwrexzzl.html

composer require twig/twig
来源：http://www.aibaodan.cn/163blfnrevt.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ktrrzvjv.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163suvmicnr.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163cfxrnfas.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163lcyugxmr.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163vcboqhxp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163rfrdsxkj.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163orprzanb.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163yhdnbbgm.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163rmokihzk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163nlsleguk.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163gzmvtjnn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ezduakft.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163cqzfjlbe.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163przdplvn.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163nwkyaijn.html

a?.b?.c
来源：http://www.sxryk.cn/163ciijfyex.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163pchjcyuu.html

a ?? b
来源：http://www.aibaodan.cn/163gimvzdpa.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163myfazrom.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163iwxsnvoy.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ejxgzyna.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163yhcnegzr.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163snbevrah.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163fwjxxcxe.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ulyqwjwf.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mmisepfm.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163qwejokcb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163njzuwexi.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163smhlarsm.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163baelzwuc.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163sfdibsca.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163qnfbwaag.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163vmbapbce.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163lreuwloc.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163egvroysg.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163wyickhbj.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163gushofoy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163irxgjfen.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163mivncdyt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163eeedtvnr.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163bcaazbxn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ccbzbafp.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163smlglfvu.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ogicxjvk.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163qgaxsvas.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163wykfamko.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163mabkcnvq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163hosicuzt.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163wgwpawkq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163kpxnnctc.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163punrzytu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163oqgkugkq.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163xvxrpkmq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pxvqapgu.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ulajsxpz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163spohanwz.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163jvbbzpju.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163xymlilyi.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163nqsyarlw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163cyceohuw.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163xvypelvd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163awwfkayv.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163byduskqw.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163eajgipap.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163yyivzwwc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163iqcliejv.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qrbteoeg.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163lfzwaleg.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zyyqzjiz.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163zhtxubps.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163rhxqwelo.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163eqvoqnjd.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163aaunauml.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kgirjjcf.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163mtmfyvaa.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163xivpazjj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163aohvbmju.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163lkoimnpq.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ealoxccj.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ewrqwlei.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163uozlnrtx.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163prtcudtr.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163jlxflfer.html

npx vite build
来源：http://www.aibaodan.cn/163ndsroqfv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163mfhvmyzs.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163vuraqmbr.html

================================================================================
来源：http://www.aibaodan.cn/163yfbqmhms.html

统计汇总
来源：http://www.sxryk.cn/163ugckhucd.html

================================================================================
来源：http://www.sxryk.cn/163vuebpemq.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ivybbjzf.html

Python ......... 252
来源：http://www.xuanzx.com/163fmzxoera.html

PHP ............ 252
来源：http://www.sxryk.cn/163owubrkum.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163xmeabmsz.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163cscolrpw.html

Java ........... 212
来源：http://www.xuanzx.com/163fmvcbwun.html

Go ............. 212
来源：http://www.sxryk.cn/163axjardvp.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163xtnzfddo.html

C# ............. 212
来源：http://www.xuanzx.com/163hgbngjop.html

C .............. 30
来源：http://www.aibaodan.cn/163ycwfvfpj.html

C++ ............ 30
来源：http://www.sxryk.cn/163wwlinuji.html

SQL ............ 90
来源：http://www.xuanzx.com/163uuugvcnj.html

Bash ........... 80
来源：http://www.xuanzx.com/163nhadiabp.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163zokkynhk.html

Swift .......... 15
来源：http://www.xuanzx.com/163nsvzcxcz.html

Lua ............ 10
来源：http://www.aibaodan.cn/163jsumjxxr.html

Perl ........... 10
来源：http://www.aibaodan.cn/163fgaaqvwm.html

Scala .......... 10
来源：http://www.xuanzx.com/163yyjyoger.html

------------------------------------
来源：http://www.xuanzx.com/163dxxzfoqa.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163mnyksjuv.html

按章节统计：
来源：http://www.sxryk.cn/163bvnrzkfb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163qcqqtjrj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rhausrun.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ymkgfdyl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163kbmeiuaw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163nblkcopg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ijozloos.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163whxfnvim.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kxqieqae.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163npnjvlkm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fhdcdudt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zbpfbebg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rgmxognt.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zseiefnb.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163hrkhoazk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163acjpggod.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nbkyhjwh.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163gqpqoexo.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163yofwpkij.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163tvmxvmvn.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163itsyhigp.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163nvjhdxvy.html

------------------------------------
来源：http://www.sxryk.cn/163koyryjkp.html

合计                                  2106 条
来源：http://www.sxryk.cn/163gdpfczcu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yovglxqy.html

使用提醒
来源：http://www.aibaodan.cn/163gszscvur.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jhxnenrq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163xfrtwetf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163bxwkqlye.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163pzhpqbtz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163tjkjjzfw.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163oyocojur.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163iucaxauf.html

================================================================================
来源：http://www.sxryk.cn/163uvwycijg.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ruzfdpsp.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163bkzgvnji.html

================================================================================
来源：http://www.aibaodan.cn/163blwdomxh.html

【收录内容】
来源：http://www.sxryk.cn/163enbhblju.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163jxwbsnxd.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163bmiditil.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163frxflree.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163szuzklta.html

【使用说明】
来源：http://www.aibaodan.cn/163gssoqewr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163faszpinj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163jlhtlesv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163clvoyrxe.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163nguckwbz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163fiyqzhmf.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ygjdhrzd.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ourwjguv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163hveicntk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163wnoaqhxp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163phhryind.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163gtmpmmis.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163dnamklwt.html

【文件统计】
来源：http://www.xuanzx.com/163kxuzjhio.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163rfkmztpb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lgaokloi.html

目  录
来源：http://www.aibaodan.cn/163glfddydc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nfgjsbdk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qxpkydps.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163buiapwqa.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wimbzojs.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wrxwxkbx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163stpquzpu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wrqthnxa.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163astklfkb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163awvyjlet.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163yxbgqlpk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163pbgrepib.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ssikwnmt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163brctztql.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163jejrabby.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hrncedde.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163vdctfavi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163omizdfmh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163oijfqoky.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ycjzxdiv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163rjbxowxy.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163inyhiyvs.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163efxivrpp.html

================================================================================
来源：http://www.xuanzx.com/163yiwznoqq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163alewufzw.html

================================================================================
来源：http://www.xuanzx.com/163wdgzqpat.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ehpugqyu.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163fwzwywmk.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163nkgglvdk.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ogvmtqjx.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163rffpztpy.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163rifdemfx.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163bwcjikuq.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163xizewcnq.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163czntsxuh.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ggqhqdxw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163zsdbvhvz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163djhajboy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163xzmibgjp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163rjiqegpa.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ktruldse.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163chwpldcv.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ywzdakaa.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jiaohrry.html

[A03] 常量定义
来源：http://www.xuanzx.com/163hsoahxsd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163cjbhqbar.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163qoumabiw.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163owxatkid.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163idcgcadt.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163pzkfxrku.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163eicuqfdf.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163zedsatoe.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163brnwtenz.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163rvbqxgro.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163fsdasgdm.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163xoqqtbxf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163dxwbekws.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163qnrrfwju.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163iasnzvdq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163gtetzdce.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ezhslbim.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163njvizixp.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163fftsbuzn.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163twtmyfvs.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163hjpsfgws.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xecaqwix.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163cbndcxdj.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163jmfzbwpa.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qxdduvtf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163swwbguhx.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163dhbsqpbn.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163xfnvppnt.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163avqaifzp.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163wvenncag.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163kabnspvl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163dvsoxaec.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163zdfhuyhn.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ucxempec.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163wnvrhejx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163yxcumirq.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163begdnmxy.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ynefaywv.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163ukbhquzk.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163jqdixjkl.html

TS:   String(42)
来源：http://www.aibaodan.cn/163rmkvcmfh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163qiqyzyxz.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163nqylhufd.html


<!-- 参考信息 -->