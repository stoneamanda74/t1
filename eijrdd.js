外链999!wailian999！

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163achktwaf.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ayvibqly.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163sdldwxbt.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163yrtsugdz.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163urkxanvf.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163kgoqvlxt.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163iqpjvlng.html

$obj?->method()
来源：http://www.aibaodan.cn/163xxagwuwp.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163cqxdqyvj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163enktvnas.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163bosxrbqw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ntofwnsi.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163cfkuukob.html

"值: {$a}"
来源：http://www.sxryk.cn/163jgnkcbvg.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163doovpxry.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163iyqjtfhn.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163riaekarc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rqzcrrfn.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163cvxvopij.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ssotuabi.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163vomofxbg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163knqygmzm.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163dzvjfhjm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163zfeuvfvl.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gmbmgqzp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163wbdufbdl.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ljghfeek.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163oershgxq.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163qbjhdslv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163sqsgkqsk.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qzzpxknm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163wdkwvqni.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163liuesphc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163vkilafns.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163oqkiojfa.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163asvwqiol.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163metruhdk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jtrqgodn.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163epppwcav.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qukwkqzi.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163krvjpuku.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163muhdbriu.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163lwlxdkbv.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163urfssaeq.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163rvhewtye.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163yognlwgx.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wjkdrmak.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163nqxgwltt.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ywgzmdbf.html

composer require psr/container
来源：http://www.aibaodan.cn/163vluqaork.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163rokpjttf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163rcdbtjhk.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163zahfyvmn.html

composer require twig/twig
来源：http://www.xuanzx.com/163qklhjysu.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163mxsdrecz.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163flzolpxq.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163xybqvqmq.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163bprlkvfq.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163glnrmmqf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163axkqlpid.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163ciosnlig.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163bkdngpjc.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163kmibtrpz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163aboyqtbu.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163fpkjadfz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163nemqzlus.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163jmbxidvy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163tnfhipks.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163hudysjof.html

a?.b?.c
来源：http://www.aibaodan.cn/163jbhlqcgq.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163aubisqge.html

a ?? b
来源：http://www.xuanzx.com/163ngapfuuy.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163oosoivqi.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ibkkxaeh.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ertrwzsc.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163zanodblc.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163mdyxpndo.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vakztcnh.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163thxfxmub.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zsnjcgtw.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163seososxq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163lqlqlsqy.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163duadlaks.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163gmwfreqr.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163qnejgtsx.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163bytrtbsb.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rfelyhxu.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163dgxatacm.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hvquqqvh.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163wfxyxjef.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ycpbjmfm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163onlkgaft.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163hufwhdgg.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163przufcwf.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163izfdhrvb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ivnjsmbj.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163kepbdogn.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163iyfuqwcz.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163yrbzener.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163krmzohco.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163nfcszybh.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163uutfjqec.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163msmaqais.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163mcimsily.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163egkgbmew.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163wtnvrxte.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163nrbcfltx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tkcsiblm.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ywbvejfq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163phikihag.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163byeahrjj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pnexmazx.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163vhpepgmk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163roiakhli.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163khmwxuog.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163jdcruzht.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163esobpzyf.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xippuepj.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163oznwbwwa.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163nzegwwle.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ezzvobwp.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163sihtaxrb.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163qknbmdxu.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rzztuogj.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163gzzsymox.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ultcljkm.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163joryxpbm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fugtqryj.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ezliiagb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163fquuxgze.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163hbrcqtay.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163upavjkth.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163biaflgfn.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163cxcoalep.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163zsawsnnz.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163lobibeia.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163nxuwpdqh.html

npx vite build
来源：http://www.xuanzx.com/163vqjdsepm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163fuadtkfq.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ziwuupzw.html

================================================================================
来源：http://www.sxryk.cn/163jzdkpgfr.html

统计汇总
来源：http://www.xuanzx.com/163fuetenbe.html

================================================================================
来源：http://www.sxryk.cn/163fdarkpol.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ozovwsdi.html

Python ......... 252
来源：http://www.aibaodan.cn/163ychsxpqj.html

PHP ............ 252
来源：http://www.xuanzx.com/163phwleqcv.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ppoehuix.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ftxvsivh.html

Java ........... 212
来源：http://www.xuanzx.com/163fgdzzrza.html

Go ............. 212
来源：http://www.aibaodan.cn/163tpctopff.html

Ruby ........... 212
来源：http://www.xuanzx.com/163udeblgbo.html

C# ............. 212
来源：http://www.aibaodan.cn/163mrqxkicb.html

C .............. 30
来源：http://www.sxryk.cn/163idloingl.html

C++ ............ 30
来源：http://www.sxryk.cn/163vcmicboq.html

SQL ............ 90
来源：http://www.sxryk.cn/163khfvuhnz.html

Bash ........... 80
来源：http://www.aibaodan.cn/163uqarozqo.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163nrftbltz.html

Swift .......... 15
来源：http://www.aibaodan.cn/163xyazqhxi.html

Lua ............ 10
来源：http://www.sxryk.cn/163nrovpyqa.html

Perl ........... 10
来源：http://www.xuanzx.com/163fvstbaxs.html

Scala .......... 10
来源：http://www.sxryk.cn/163knfnxryu.html

------------------------------------
来源：http://www.aibaodan.cn/163sflhotnt.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163watpnsbx.html

按章节统计：
来源：http://www.aibaodan.cn/163thhekdpc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163zyeyusyl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gcalhffh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jjmmbpod.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163sinkwzib.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163bcwnroas.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163fcnjspxu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ovjbvfam.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163krcxczik.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ggmznmdk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163lrurraoc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wujuvyhy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jpiakedr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163djpseofd.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xehedeqc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163eskpdmvn.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163amxaiqun.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163iuzoxsvb.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163dfnqvkai.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163pyctpwmq.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163mgitlmew.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163ocrqsoeh.html

------------------------------------
来源：http://www.sxryk.cn/163ybuxefdz.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ritlirsg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bszmcmsr.html

使用提醒
来源：http://www.aibaodan.cn/163wkdneaqs.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163frlajhke.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163pidgspby.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163bdmhldln.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163wvqayjmq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163iefguogs.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163lazoesfc.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163rybvlxoy.html

================================================================================
来源：http://www.aibaodan.cn/163ndankfth.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163uyboibdt.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163ttctileb.html

================================================================================
来源：http://www.aibaodan.cn/163apqeucnt.html

【收录内容】
来源：http://www.xuanzx.com/163ajxvuryd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163jnludlrt.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163tklfixti.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163kraizzgk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163zdqzcszz.html

【使用说明】
来源：http://www.sxryk.cn/163jdjifzsu.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163cdcmhwzl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163kuorcobc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163gybhlwmg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163kgcxphrp.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163tvqmshbz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163gxmqrsua.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163emfwcmzj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163gpwjfozc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163otetiity.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163zqumqavw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163vjuczcho.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163cqwoloug.html

【文件统计】
来源：http://www.xuanzx.com/163agxnxchb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163mqdddjdv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rakgktep.html

目  录
来源：http://www.xuanzx.com/163uiqmrpsz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163aqbqqhfh.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hukljnyz.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163smmlmbzr.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163sseubwkt.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163kjyasllv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163wizwujxx.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163lhfgfdve.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163hxepmqey.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163iatnbmli.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163krrzpjic.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zjefemsb.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mjlvgffg.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163prmbdmjb.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zjzpxgsw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163bomnvvma.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163pahnlnwx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hnoyitgz.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163pksmmoei.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ehhfgdov.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163rmtnmtvz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ljpvpvhn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bwdmhgfd.html

================================================================================
来源：http://www.xuanzx.com/163mmkjgivl.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rydnmgyb.html

================================================================================
来源：http://www.xuanzx.com/163bgpqibkp.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ziobbftz.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163rpqkpwfn.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163nfebjxym.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163wyvafqmr.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163dlozxfdz.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163mrawpnbb.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163cpwlsdid.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163wmxjvlwu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163yqgiqhln.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163acjrchex.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163myeolccs.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163udjawqwg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163tbuglwbs.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163qulvjhbz.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bcmcfrsa.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163awilzvvf.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163cznizdqx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163uuymrnlv.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163nnepzett.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163sjxvmcoo.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163stgqtjzi.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ipizwsvv.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163yvarwqxz.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163fxrnmgyr.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163tmqusypy.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163hjbbnyiw.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163rnybhyme.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163hnqydvsx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163lyfmgzet.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163gwhkcubs.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163zgoyiust.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163viiayqwy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163hmpcdkan.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163tbzvdtdv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163burdghtx.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163oxmwyudf.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163xvucxdbc.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163qrxvbhdn.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163zjsplauj.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tadydgmx.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gwlhuotx.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kyzedzrq.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bsoqolqi.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ticrtbvw.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rocupkqz.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163tecpcbrc.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163qvhlyxdy.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163xnxevyzp.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163whlyicpq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163yxnznplc.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163dflncsij.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163pmzzgeyu.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163uwevldpe.html


<!-- 参考信息 -->