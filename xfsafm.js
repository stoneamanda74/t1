外链999!wailian999！

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163wwdhvkbd.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163zanzctks.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163huszjgyc.html

$obj?->method()
来源：http://www.xuanzx.com/163gzaclrhi.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163qqgssifj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163tkicbfmp.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163fwvrvkbn.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163iqeeuxlk.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ispajhbf.html

"值: {$a}"
来源：http://www.sxryk.cn/163vreruqxg.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163bdfjdmzf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163rpizdymo.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163dsssidwp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dgnriyew.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wgfobkta.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163yqueijzy.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163pjjxbeqk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gepwqebg.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163lxnnnztq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163csgrcqmm.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163aorkjruj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163awbmxxhf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163jazqzatd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163liopnqug.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163iklqjkcs.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163krstbzwu.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163kycswiib.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163jbwccbmj.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163qclahtut.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163vmyzpwch.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163mfetkgia.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163rbndxvot.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163maizwaqh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163newtnvmi.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163bchcvjik.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163bbpmyexz.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163hqbjqzzc.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163zmsptsts.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163hrfelgay.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163idpskvev.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163rtniefto.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163hvxspuze.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ssomdmde.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163toknmgmz.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163aeyahgjq.html

composer require psr/container
来源：http://www.aibaodan.cn/163vsxhcvvy.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163kpoxzgfy.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163rrunkven.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163sattkhmk.html

composer require twig/twig
来源：http://www.sxryk.cn/163ytqmjhra.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163jtntrthv.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163xmsbizae.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163gredhwhk.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vxcwcinz.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163spkhyrmj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163oxcpgbgj.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wltdgzpl.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163xlbsrxcf.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163pcfmbifh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163fvinofkz.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ipseygjk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ctcudehs.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163qnchmpki.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163djrlfzqz.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163hbunpiyl.html

a?.b?.c
来源：http://www.xuanzx.com/163oejwbhpy.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163kahhfqhi.html

a ?? b
来源：http://www.xuanzx.com/163rjcmknqm.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ahyrayih.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163xcdwhmac.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163fduzrjof.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163nuinuqdk.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163lkxsitfm.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163wdizcybf.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163pzlyvcns.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ovhgkfth.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163vukeyaeu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163afxyirxc.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163hsrasetr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163uuqylwsf.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163cwyphvut.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163wbgownle.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163kfbtliwp.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163shizitcq.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163zusgfkjw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163zhxyxpcx.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163kvuigjcr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rogzgjgi.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163rtubgdqi.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hpaltkxc.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163qhyveuvz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163dvwttlag.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163soyqvvbo.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163nufzsrek.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163sfmzzxkg.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163kolzbelz.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163uhvqcrot.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163hrywcdqp.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ltaisole.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ftpdvgsa.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163lcgyhkti.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163pczuzwex.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163combluvv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tkhsajdc.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hvnknoje.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163sowdekxj.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163fujtmlzj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163dfurnqcc.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163tmntzhfp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ielrmyke.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163svbqjsow.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163rtzvunfq.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ykbzjmve.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ikzihthx.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qvjxjbxr.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163znsjptft.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163xgmzdegz.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163vpriqmuh.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163cijdxbsw.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kzjixooq.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163gmunlvub.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rcuqfjav.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163jsgnoxlp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163inkwuerb.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163kdnlvvrn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163lthvojjq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163dbuxmerw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163qudmeibk.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163tuabsgar.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163kazvnwaq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163zzskfebo.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163twndewxv.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163epjwfyib.html

npx vite build
来源：http://www.sxryk.cn/163wvpfyjtz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163lyheznlh.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163doxqhuyj.html

================================================================================
来源：http://www.xuanzx.com/163fteiykxw.html

统计汇总
来源：http://www.sxryk.cn/163ksygoopo.html

================================================================================
来源：http://www.sxryk.cn/163mvvaebwj.html

按语言统计（条）：
来源：http://www.sxryk.cn/163cblonegy.html

Python ......... 252
来源：http://www.sxryk.cn/163wrpiqqhv.html

PHP ............ 252
来源：http://www.sxryk.cn/163ajeqacnv.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163njzbpfrq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163fdrprkoe.html

Java ........... 212
来源：http://www.aibaodan.cn/163ntnjoixc.html

Go ............. 212
来源：http://www.sxryk.cn/163ssiigvnd.html

Ruby ........... 212
来源：http://www.xuanzx.com/163lrbifysd.html

C# ............. 212
来源：http://www.aibaodan.cn/163ivpndqcy.html

C .............. 30
来源：http://www.sxryk.cn/163pepwoljh.html

C++ ............ 30
来源：http://www.xuanzx.com/163xiwowvvo.html

SQL ............ 90
来源：http://www.sxryk.cn/163zysbsiln.html

Bash ........... 80
来源：http://www.sxryk.cn/163ifrogexv.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ifpnwacp.html

Swift .......... 15
来源：http://www.xuanzx.com/163zkeudzix.html

Lua ............ 10
来源：http://www.xuanzx.com/163gkuxbyxb.html

Perl ........... 10
来源：http://www.sxryk.cn/163tqwwexwz.html

Scala .......... 10
来源：http://www.aibaodan.cn/163qbzhmxxz.html

------------------------------------
来源：http://www.aibaodan.cn/163mnodbbem.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ikunyoax.html

按章节统计：
来源：http://www.xuanzx.com/163hmchvegd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163rhpthgof.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qapkbuog.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vsxeaabv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163yznqndbp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mjdllzbo.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163snepbkro.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zhlpderk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163akwmkqxs.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xjtqjooo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zzasofsr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163okpjfzka.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wyutgfif.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163iygezwyj.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vrguxhcw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163sjlfdpcs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ketfrtgu.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163uouqgpus.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163rxdbaiqm.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163wcteokdg.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163tlwprvwz.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163rlnfcnzq.html

------------------------------------
来源：http://www.sxryk.cn/163lqcdafqa.html

合计                                  2106 条
来源：http://www.xuanzx.com/163uqulfbcm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xmylitbm.html

使用提醒
来源：http://www.aibaodan.cn/163kmetgtcn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163fulvvntd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163juoiwwhv.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163xtuqryah.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163pbiiqjgv.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163tkkxdlar.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163rhiyuxde.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163fftlzkmp.html

================================================================================
来源：http://www.aibaodan.cn/163pmtnowlh.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163anbdkyhk.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163zefjzzjm.html

================================================================================
来源：http://www.sxryk.cn/163jeebzhyv.html

【收录内容】
来源：http://www.sxryk.cn/163irpdltmi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163pvtnccni.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163lrdktawd.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vmbdcevw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163nzqetoxp.html

【使用说明】
来源：http://www.sxryk.cn/163rnnujgtk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163kyctymwk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163jgqalvsp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163otzkbgnh.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163jsnlenuy.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163irewjjsp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163jmtplhrl.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163vkxgzmou.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163wpohwpze.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163pnfvejcm.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163fjvhzlps.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163uyvpwewe.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163kzripywg.html

【文件统计】
来源：http://www.xuanzx.com/163unwrocme.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163sqsehiup.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163azawlrto.html

目  录
来源：http://www.aibaodan.cn/163fkjyayjz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163arqulxev.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163mjrfrepj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163griyuqbo.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qfylrffg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163djyguuqg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163frxxzthv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ymrjdczm.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163usmbeelu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163swervjbd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dkegpser.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hnxfdzel.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vsrxnvlq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163iducojjy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ieemahpc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163drkhbeti.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163fgerfxsi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163khyyxmxb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163thzoadhg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163dnqknsqm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163eurqtgtp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pfjdyuln.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zripqjcf.html

================================================================================
来源：http://www.aibaodan.cn/163isvuirri.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163zrhurbeh.html

================================================================================
来源：http://www.aibaodan.cn/163mdirughn.html

[A01] Hello World
来源：http://www.xuanzx.com/163badhgtoj.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163vpudhkhc.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ruxgqlur.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163labarimc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163nahrmslc.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163mthwjoqu.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163vpchhkpt.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163sparvrxk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163lgpomaba.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163vhbmiyga.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163oeiakieu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163gfeahznh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163jnkkmdko.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163duhyddkp.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163mbmjkafq.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163iazrsstw.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ssgebwae.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163snteedfp.html

[A03] 常量定义
来源：http://www.xuanzx.com/163micwadig.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163epjtrfuk.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ihpcaiyk.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163fejyifog.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163tcyaaemb.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163yqdnrvri.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163tyiszkpt.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163pyabxwgj.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fvyskvax.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163jfuzohqx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163bvthhveb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163pvklkydf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163tpwgqznj.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163fgnemzrm.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163pupyfiuo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163fctibpnv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163ekyottzp.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ucergije.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163qvxklhtw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163yeplebrg.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163rgmhetac.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163cpmeysan.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ptbfczse.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jpyptzel.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163piuqqarv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qwvlbuhk.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ccpvydrp.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163dusnpzhs.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163zeaiaepj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163zykownug.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163meshnvra.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163rilchiap.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163wrvahzkj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163mwhydsba.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163lzewgahi.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163wixfnyoe.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163ljripbng.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ibbjlyvm.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163lqohdgsd.html


<!-- 参考信息 -->