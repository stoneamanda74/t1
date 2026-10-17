外链999!wailian999！

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163tigpwnjg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163fouwqtdi.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163wotgkifj.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wpepwtyj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163pbcxzgcv.html

"值: {$a}"
来源：http://www.sxryk.cn/163mzvvnchm.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163vgumqrec.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163pwvrwbyv.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163ifmnjwiu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wnwrephf.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163sjmhshum.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163teqmurza.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ysexhprn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163belrxtuk.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163hpkgpigx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163cheeksff.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163dhwfvolx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163tbazsewv.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163zarzoixj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163xdpwdctz.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163lzxndyrq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163natafdkw.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163heiuzlbh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163gxxdscfk.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163jyfbdoya.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ncjxxlri.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163jiwjxogy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163msababog.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163cqqykqhv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ukunvedn.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163kdarjvsj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163mjlkxmvq.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163jvlgstsv.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163pfjfylla.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163xdurqoic.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vssjjynf.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163yloqyjxp.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163dzwnyyyy.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163xycnbznq.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ldkjlwze.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ohtlwqau.html

composer require psr/container
来源：http://www.xuanzx.com/163rtuzqdlm.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163oazmjewg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163dywuqkin.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163oxmvtljy.html

composer require twig/twig
来源：http://www.xuanzx.com/163prdofqqy.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163jhbybgch.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163guzohuye.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163kjgefsht.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163pwmkvmxd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163qckkhrtq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ebelpxqb.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163jvsqlycv.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163pjcwuchb.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163xirhxisp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163gesluzdy.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163wumtiusl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163pfkmtxhv.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163vujzxqjf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163bptxvbts.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ufecuuuz.html

a?.b?.c
来源：http://www.aibaodan.cn/163hamcrcuw.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163pxzbtltw.html

a ?? b
来源：http://www.sxryk.cn/163hupbyffu.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163brlmvwes.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163cgyydfmt.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163tnxfxxcq.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163dakuoefx.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163jkyqotkh.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ahyrcmrt.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163qbreukwr.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zdaicwba.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163skbbcglc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rznnzfnu.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163uurhueyx.html

structuredClone(obj)
来源：http://www.sxryk.cn/163kxounyuk.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163npytgudy.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163uyalzktf.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163fxioyjhe.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163vtxtbkkc.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163pmxkehmq.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163rlwpyyez.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163dmoeffnm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ctclrllx.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163uyjpbubd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zfpboyst.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qrzzwgwa.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163crfutamu.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163wwobcwjy.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163vlwfcglb.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163aciuyrpm.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163bvcxwzda.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163xtqcvfru.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163nmlthlps.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163oyinjerz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163vlzjavsw.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163rmcxhapq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163xpiauwib.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163rcmodkez.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ppoewzbd.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163plviwtlv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163iskcgeki.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163zukciwbe.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163nvmqnleh.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163dojaygyn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jiakknic.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163oxmorxly.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163gyvmugdj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163gybcqyip.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163pynvcckh.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163fepecvdg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163wzzjhiai.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163whxhedxn.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163jezxjzha.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163nveeqyed.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163nazjtivj.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163upboapef.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tcxgjyhd.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163jhmdxxjv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lsfpjkzf.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163tnavuoxy.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163vejihrua.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ekkboxkc.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163wtnqjmge.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ntcoxodu.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163nzqkefzh.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163qmrcwosu.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163uqmnpsxc.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ekrgytsd.html

npx vite build
来源：http://www.sxryk.cn/163bxeugxrl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163zgibhsgf.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fxpudjch.html

================================================================================
来源：http://www.xuanzx.com/163egrwmuhd.html

统计汇总
来源：http://www.xuanzx.com/163xtftvzvk.html

================================================================================
来源：http://www.xuanzx.com/163yzsozjnn.html

按语言统计（条）：
来源：http://www.sxryk.cn/163cpsphdhn.html

Python ......... 252
来源：http://www.xuanzx.com/163uqjbhqco.html

PHP ............ 252
来源：http://www.xuanzx.com/163ijwgpmfy.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163blccfnnz.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163zgtpucfz.html

Java ........... 212
来源：http://www.sxryk.cn/163ptkfkois.html

Go ............. 212
来源：http://www.xuanzx.com/163ajshscov.html

Ruby ........... 212
来源：http://www.xuanzx.com/163rmfmhipm.html

C# ............. 212
来源：http://www.sxryk.cn/163aeuqwpho.html

C .............. 30
来源：http://www.sxryk.cn/163knilwwlu.html

C++ ............ 30
来源：http://www.xuanzx.com/163ddmmmpgl.html

SQL ............ 90
来源：http://www.xuanzx.com/163oldlvwvp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ihpsfbvm.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163dssvknhu.html

Swift .......... 15
来源：http://www.sxryk.cn/163zqmnwijz.html

Lua ............ 10
来源：http://www.xuanzx.com/163wxpfsoxr.html

Perl ........... 10
来源：http://www.xuanzx.com/163olbbjdvn.html

Scala .......... 10
来源：http://www.aibaodan.cn/163wvqinnvs.html

------------------------------------
来源：http://www.xuanzx.com/163vhmzwwhn.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163hnnohxqq.html

按章节统计：
来源：http://www.sxryk.cn/163eiqxdjhv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163mflqbxxd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rhwdjzzl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ykxzcprt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163nwgjufnr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163tywfrqnv.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gefweiyg.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163fjvxmgcv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ipyqvruf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wmixsdtv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163dfdfvmai.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vebcvmec.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qxjpruop.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xizoxxou.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163oxmtxqhk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163baufzmad.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ipptoutt.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163eimpvrqn.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163lofxiqbm.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163wlgmqfsc.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163sbueqenv.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163sistiein.html

------------------------------------
来源：http://www.sxryk.cn/163wqctnudh.html

合计                                  2106 条
来源：http://www.sxryk.cn/163jxukhjxb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ikgnjwoq.html

使用提醒
来源：http://www.sxryk.cn/163ufoebhbj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163shsmvhag.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163xgrxkikr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163rdgbvshq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ettcvohu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163qyghybwh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163tymbddne.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163bhusyeyk.html

================================================================================
来源：http://www.aibaodan.cn/163dstbietr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163oznnenak.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163duxmuifj.html

================================================================================
来源：http://www.sxryk.cn/163kviwzyvk.html

【收录内容】
来源：http://www.xuanzx.com/163rnabnkhl.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163gmllifbq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163fegzdtlx.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163dimvyday.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163zrctugjd.html

【使用说明】
来源：http://www.xuanzx.com/163oxaezfxl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163zhlcnfgr.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163ysqocovh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163nqgxtwjj.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163lucckyzj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163cszemwlw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163fordugcm.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163shetqckd.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163eyntdmrl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163bvjyiyvy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163gglnosnu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163eqmjexkz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163dpoivtup.html

【文件统计】
来源：http://www.sxryk.cn/163hckrtwuj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163atllquqc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nztrocym.html

目  录
来源：http://www.sxryk.cn/163bnhuckpq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163cnfmnywn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163iqguquhr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xqwakxmq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163khwnahnh.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163rqyrxxfh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163ebbjsvyd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ukwcbbio.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qyjbjjva.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163nvnmpaap.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nptnblol.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hhjndfcy.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163tnzlljaq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163fjyxzuew.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gdmtkvmg.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vcednlag.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163jupcmrst.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jkwvnhxr.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163kqlbilfc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163puuuuypv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163yxjfgouq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163bugmcxjg.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zdocmhrw.html

================================================================================
来源：http://www.xuanzx.com/163thyyeoyf.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163pfnnnbzf.html

================================================================================
来源：http://www.sxryk.cn/163wixxuhwq.html

[A01] Hello World
来源：http://www.xuanzx.com/163wxgkmqss.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163mzlqfrji.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163nouyztca.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163cjonxypy.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163esdizvhw.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163hflonkel.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163jhpxlmzf.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163wrxejedm.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163sndbzfvu.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163dckezibl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163tvhmuncx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163poisxiqo.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163yukxtfga.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163xrtyubja.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163xvzxshuw.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163qnnetsht.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ddofamyo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163mjfehqqe.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ruqbcazs.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163fvonhktk.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163tpxpllgz.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163invqyzin.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163ieswthhc.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163wxjvakcj.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163sdzizzte.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163zmyulief.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fclxjvue.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163bciceznq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ubldvelt.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163iagvdxmv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163hctlkthj.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163aypilxvg.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ukeoljkv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163wbyrpinf.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163bbawkbbz.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163opwergvi.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xmrolyrl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163znslafme.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163jkvevkpw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163wszurlyy.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163wunascto.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dfcsmibk.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163xrmynaaf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qwzdhrlr.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uhhemlee.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163kchkpqcu.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163gkktphvg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163zvbrezaz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163cmgzewlb.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163ggnwabbi.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163rpiqotfz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163toapsghd.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ixcjmffz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163kjqlcgtp.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163sogdppee.html

Py:   str(42)
来源：http://www.aibaodan.cn/163wiqxbafh.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163prlvxvpy.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163vqvdqrxo.html

TS:   String(42)
来源：http://www.xuanzx.com/163wxphbwrz.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163asnnaerl.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163mceqqluj.html


<!-- 参考信息 -->