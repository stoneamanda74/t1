外链999!wailian999！

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163oocxfbct.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163xbbnmkdh.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163xlwdkrkq.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lnhftkgb.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163dpxmzoey.html

"值: {$a}"
来源：http://www.aibaodan.cn/163pcdbtofk.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163icungyto.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ubktmzox.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163qxvrvipf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jsguwtqd.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163qmpdzpbw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163okwlfddh.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163heyrfnul.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163evlhtjrr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163wmqmtglt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163xdblqifj.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163kaljlors.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163mspysner.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163xxerrdpq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ljuhoekb.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ifeqfuyq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163odzbvvkw.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163lvlijldw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163hobchjnr.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163afuhbwdb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163kphewmgo.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163vubxxflr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163yniyyfty.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163vwwlunoe.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163gpqmffcx.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163yxvgujun.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qywakcch.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163gzrezpax.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163woqosydn.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ajfqsuos.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163cysiqblm.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163aoypwoqp.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163bguoexhj.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163iyaoifnf.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163qnzjqufl.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163mhpqmofk.html

composer require psr/container
来源：http://www.aibaodan.cn/163vyinfrrd.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163xftogfqf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163vokyqxap.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163wdrjzknm.html

composer require twig/twig
来源：http://www.xuanzx.com/163vhtabhwc.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163suhugvfm.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163rhkzexib.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163gkwvrvzj.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163edetunie.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163bojkuaoa.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163qqdcjpkx.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163gldmhmtx.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163rikbmpse.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ydonubxu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163jdjkbkev.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163kubembmn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ndnapddf.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163vjgbkpzw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163vjqumifo.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163rwzyexfz.html

a?.b?.c
来源：http://www.xuanzx.com/163dilfbkow.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ifiuxijj.html

a ?? b
来源：http://www.sxryk.cn/163vflakhdq.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163qzmmtgjy.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163pjnjsace.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163egmigbpj.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mprmmipg.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ufnambmt.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163cmxwmhtk.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163fdxvmsyf.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bixcqkil.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163riwjuiaf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163gxccbjwl.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163jmontxgj.html

structuredClone(obj)
来源：http://www.sxryk.cn/163alzvjjrw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163hhmrohye.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163azryfyeb.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ydowczdl.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163tucocmsw.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163zijdrcuf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163nfahqchm.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163luglxczk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163eefqsqpa.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163qyfmjskx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hjnowikx.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163vwyksmak.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163nnbnngqa.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163fxtpkdhb.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163wblnkmzp.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163xmfgqpku.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163abditrns.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163aizrbkni.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163qddvtdqj.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163cizlinsw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163rugcashm.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163jhlfgruy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ldjsjocx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163djssgydx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dptmrdwg.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163whdtxsjn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163wrqxwmhx.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163vyiegdvq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163rfpyawuo.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ysbtdjgk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163hzpuazsf.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163kfumekyr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163rjgfawwx.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163txyzzqen.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rxiozptv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163iyxdwuul.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163apmnsmfq.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163wrhezovl.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163jsiuwlrt.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163gwfllwvy.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gwxmbaut.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163crvmcjta.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xhrampid.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xhgkkilq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fcllpruo.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163sarvapjz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163szzjhjkj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163adkjcqml.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163desgwaxk.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163nfvsxtby.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163imchxlxt.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163deesxdso.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163bukjnkpe.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163pslmwkbb.html

npx vite build
来源：http://www.aibaodan.cn/163wdfpirtv.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163iblxfaqq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163jjaltoji.html

================================================================================
来源：http://www.sxryk.cn/163ajrhhont.html

统计汇总
来源：http://www.aibaodan.cn/163onavgays.html

================================================================================
来源：http://www.aibaodan.cn/163gxvkplhu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ylomcnor.html

Python ......... 252
来源：http://www.sxryk.cn/163gyyopiez.html

PHP ............ 252
来源：http://www.xuanzx.com/163gvshejcr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ofswgffj.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163vhuubjek.html

Java ........... 212
来源：http://www.xuanzx.com/163sknhofou.html

Go ............. 212
来源：http://www.xuanzx.com/163yjqeaqxa.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ftcjufcp.html

C# ............. 212
来源：http://www.aibaodan.cn/163lgwomzyy.html

C .............. 30
来源：http://www.aibaodan.cn/163zkmooapl.html

C++ ............ 30
来源：http://www.xuanzx.com/163hymxcmkw.html

SQL ............ 90
来源：http://www.sxryk.cn/163gkjzrpny.html

Bash ........... 80
来源：http://www.sxryk.cn/163jwbdfukd.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163uwcftcan.html

Swift .......... 15
来源：http://www.aibaodan.cn/163hguklyly.html

Lua ............ 10
来源：http://www.xuanzx.com/163terummha.html

Perl ........... 10
来源：http://www.aibaodan.cn/163nwrwkhod.html

Scala .......... 10
来源：http://www.xuanzx.com/163wlrjdqkz.html

------------------------------------
来源：http://www.xuanzx.com/163kgluwsxd.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163scjkdthu.html

按章节统计：
来源：http://www.xuanzx.com/163aqeswmnr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163feddfwqr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rdryxtyv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dvrlszwq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163oiboiaew.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163dnwewygh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163gtfurtpp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163chwddufy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163amrbfqne.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hzxltvgi.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163niggwfil.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ctoxjdjr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tsrgsjvd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vbqsmvaq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163nqskyehp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163amtrixor.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wtsvjlbf.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163vyreudml.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rsvxofqs.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163uxxbeodl.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163cykcvuqw.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163razgtnir.html

------------------------------------
来源：http://www.xuanzx.com/163npcqhclj.html

合计                                  2106 条
来源：http://www.xuanzx.com/163efhjppbh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fxfraqxz.html

使用提醒
来源：http://www.xuanzx.com/163rxdmnhzn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ckklzysd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163ekisoxun.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163buwfezkx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ydbpmxoc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163qtxjctxp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163cizfnefc.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163irncbiun.html

================================================================================
来源：http://www.xuanzx.com/163bgaiwanx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163wpbigzbp.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163zwsivogn.html

================================================================================
来源：http://www.aibaodan.cn/163nkjddjlc.html

【收录内容】
来源：http://www.sxryk.cn/163nkhncbdi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163qyongzbl.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163snfipwyt.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163emylipww.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163zujrqgiv.html

【使用说明】
来源：http://www.sxryk.cn/163kovzbebs.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163hkikpjhk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163fwajairx.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163lpcrgrgl.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163vbfwgrlk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163hebmlgyy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163cghbybei.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163jrdpnclr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163ypxxoxal.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163bcjsiagu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163jytcefjg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ehnurvdf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163wzkfnleh.html

【文件统计】
来源：http://www.sxryk.cn/163rzxbkpsb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ksbwwwnv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qzlrujls.html

目  录
来源：http://www.sxryk.cn/163oxlnglyu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163huvobhfr.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163oqivuduz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163lvytelir.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163raqdgzxa.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163wcgreibo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163wrqqqbaa.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163uqkqxlox.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rhofejeq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163acluscxq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fbkeafgi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163kjafjcuq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fhcwoedm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rtpjlotg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dhzksbli.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163qhkrbtrp.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163fncjlrhp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ycenlkpz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163qhnvfoql.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163nbyuwmrj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163cntckyaj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zgvscrrw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163zcrgnkep.html

================================================================================
来源：http://www.sxryk.cn/163pnaqkory.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163hugnhlxa.html

================================================================================
来源：http://www.sxryk.cn/163adsvvddc.html

[A01] Hello World
来源：http://www.sxryk.cn/163kvnvwjil.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163rgrzxijo.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163lvcmeijr.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163bkzfjebl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163knrmfskx.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163gnzifvri.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163rcsorlur.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163gycywrct.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163klowcsrr.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163nvlbrmfy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163mhpuepjy.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163umdbxncy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ewcqitdf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163gzmtvkkv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163qmgfzvxn.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163mgauaorq.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163rauwluzi.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163psesnddj.html

[A03] 常量定义
来源：http://www.xuanzx.com/163gxwetcwv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163jyirniwf.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163epjpiitd.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163wmsfkfwg.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163qunldfre.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163suohomus.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163npmvuhsa.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163arhjqzkd.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163cdjwmxbi.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163bwwucosq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163scofbijc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163zmwzluak.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163nefsqort.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163tprdslwq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163xnhdwogl.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163wegqiudu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163raxgzvco.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163rarfzzom.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163jwcldcnz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163mqnkvbek.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ibmyinlr.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vgxlwfhq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163xpfmqnqt.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gqduqqmj.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163niahnivx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kqlwcqfm.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163nhqsovne.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163bpdxsiov.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163lmkihpwu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ojpzrojd.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163fbswjizt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163dafzoskm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163jhyhjkqs.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163wgswybqo.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163qhzlzqnl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163vjwljhtm.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163btvshlaz.html

Py:   str(42)
来源：http://www.sxryk.cn/163kzslupbv.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163frqsyekp.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163dywfoogk.html

TS:   String(42)
来源：http://www.sxryk.cn/163ehseyvgx.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163tnekwlya.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163mzjtslam.html


<!-- 参考信息 -->