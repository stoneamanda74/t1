外链999!wailian999！

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163hxbplpxs.html

namespace App\Http;
来源：http://www.sxryk.cn/163daausxac.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163uqvzgupw.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163vcyutcko.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163fgitufdx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yndnzrri.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163lywscouv.html

?string $name = null
来源：http://www.xuanzx.com/163epedwaxo.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163gjdbabwo.html

int|string $id
来源：http://www.aibaodan.cn/163ttlgwjjf.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ffxcxiem.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163xlubgwzs.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ldyycece.html

public readonly string $name
来源：http://www.sxryk.cn/163ynnfxcse.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163mhcnhkes.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163terwjdev.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163xjkfybmq.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163jghyrven.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163lszcskcf.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163wxbzyunb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163prerceaw.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qgbfokvm.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163igvxzkal.html

$obj?->method()
来源：http://www.sxryk.cn/163sholgmvg.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163rfdbrdyw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163rcxyasgv.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163rpbpinqb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cufmuyip.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163hnoyousd.html

"值: {$a}"
来源：http://www.aibaodan.cn/163nviqcgre.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163grqodatk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163huzseoft.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163cfmjmgym.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jyfmzfuo.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163nyloncxx.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163dfrafqzy.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163csmyvkxs.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163refzetsj.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ftvxvzyo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163invoojky.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163iqphxlry.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163osyqnpir.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163wocfttip.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zyvcpwyy.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163avkdmxhv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163gjdkwtda.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ckoymodz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163glubrigl.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ookovudg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gftxdxjy.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dnendfzq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ywsfbjjw.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163azmalwer.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163mwlyqmzx.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ivvhntbn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163zmvpkrhd.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163hucocluu.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163wvuvmttb.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163aiarjprc.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163jadvrlov.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163deqxofis.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163nttpsbqd.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ocamdequ.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163cmbxcsak.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163vlicpdml.html

composer require psr/container
来源：http://www.sxryk.cn/163pfdfsldp.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ikkiatqi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163fmoexegw.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163jvxzhaed.html

composer require twig/twig
来源：http://www.sxryk.cn/163resxhhaf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163qzoiujzn.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163sadgwrai.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163qovvhvpi.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163miqhahgl.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163manwglvn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163vzefzdmt.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163iiqibmtu.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163dkiziguk.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163fxaeckxd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163jthyflpj.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163naesulad.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ollxssvc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163awaikqvz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163yrierxkl.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163cwnmfbhs.html

a?.b?.c
来源：http://www.xuanzx.com/163idytohxz.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163zlgxcixu.html

a ?? b
来源：http://www.sxryk.cn/163ptqemulj.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ylljrpup.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163hilljeha.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163mypmkexa.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163aqkbjlgt.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163bvbjqxsk.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163pnlraypr.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163cchtijem.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163caqtmrqc.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ccoqkjgr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163mefvdhli.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163szfaoevd.html

structuredClone(obj)
来源：http://www.sxryk.cn/163vkdowote.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163cuajbekt.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163teiuqngo.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163moyxsole.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163hdscgegt.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qoeaoabl.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163hkrqelxq.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163qkrneyud.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nzjaxqob.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163zsfftjme.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163luxvkkjf.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163pzdypyxu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163bwweaslt.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163sqseptps.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163mxgljnth.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163occkmzhm.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163idnpxxsl.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163vkhnqsex.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163wnhloohz.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163wmoebusr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163xnpaxujy.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163bwffyxmp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163mftajnwk.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163dlggehog.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lngchhju.html

[U105] JS：节流
来源：http://www.xuanzx.com/163fsomqfxf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163vsfyoyqp.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163pgtqpvss.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163jjbnlzjw.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vpbwqpww.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163kaweunko.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ldlacxwi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163cdljripd.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163nynomljj.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nuayvxtn.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163piikillt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163rtucrclr.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163cycsmalu.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163fblqidgi.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163kwygjvsv.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163iniofuru.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163zztwafga.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vvzldhtj.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163cbbhtkpb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mayiaolu.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163cbtcqhjc.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hqeuxmuv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163zrszdatx.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163zqygybhs.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163duexudex.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163comyastv.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163vtgmwfuw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163scigacma.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163tmkhmpui.html

npx vite build
来源：http://www.xuanzx.com/163qxumsirf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163rtljvoax.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163xnfvqjlu.html

================================================================================
来源：http://www.xuanzx.com/163lyxlgqmq.html

统计汇总
来源：http://www.sxryk.cn/163hdwxkqwx.html

================================================================================
来源：http://www.xuanzx.com/163aqirjsgt.html

按语言统计（条）：
来源：http://www.sxryk.cn/163xuerrwzh.html

Python ......... 252
来源：http://www.sxryk.cn/163ryswvgit.html

PHP ............ 252
来源：http://www.sxryk.cn/163gyixxtlp.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163otgpwwij.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163fdlzshrt.html

Java ........... 212
来源：http://www.aibaodan.cn/163gtdigdka.html

Go ............. 212
来源：http://www.xuanzx.com/163yvcrqgwm.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163krenmqdz.html

C# ............. 212
来源：http://www.sxryk.cn/163gjstfiib.html

C .............. 30
来源：http://www.xuanzx.com/163iyuoykfx.html

C++ ............ 30
来源：http://www.aibaodan.cn/163qttyawej.html

SQL ............ 90
来源：http://www.xuanzx.com/163pwlmrtvp.html

Bash ........... 80
来源：http://www.sxryk.cn/163isqavvvx.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163cmyzryog.html

Swift .......... 15
来源：http://www.aibaodan.cn/163rjngvyaz.html

Lua ............ 10
来源：http://www.xuanzx.com/163qqixsmdq.html

Perl ........... 10
来源：http://www.xuanzx.com/163kwvlczef.html

Scala .......... 10
来源：http://www.sxryk.cn/163dpxtdntx.html

------------------------------------
来源：http://www.sxryk.cn/163kchdugaa.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163jlthueeb.html

按章节统计：
来源：http://www.aibaodan.cn/163ltclhzdk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lzjoiaxm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ypzwsfpz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163cxfhotlp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hityujqz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163rlvfhalw.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yxepsart.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xalgplxf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163aydpeopy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jsuezctx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163tjqvrpuk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kodakofv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vcipudqu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163laeykdps.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163bcdcvzuy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163bdnmajnw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ltanmzby.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163quphnxlw.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163duxwxhqr.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163gbcjarma.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163gdszxumh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163kmyslnfd.html

------------------------------------
来源：http://www.sxryk.cn/163behjshmi.html

合计                                  2106 条
来源：http://www.sxryk.cn/163dlcgandz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wuuuzymq.html

使用提醒
来源：http://www.xuanzx.com/163jregbqbw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163idgvofgz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qoiijxec.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163lqcxkdvj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163uhmxvxhd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163iosjxhqi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163kdvhruve.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163nyvlrbjh.html

================================================================================
来源：http://www.xuanzx.com/163ucopqfnj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163cidvcaau.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163jdjfflua.html

================================================================================
来源：http://www.xuanzx.com/163ouwtagig.html

【收录内容】
来源：http://www.xuanzx.com/163wukazaln.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163hhatpafv.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163zeazwwzz.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163riylgubv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163xscnmxof.html

【使用说明】
来源：http://www.xuanzx.com/163cishmnat.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163xtvvliwc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163kvceztsf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163yldvmgkv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163vrrorktm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163oqgxjmld.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163fgwfitcu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163jmmvkgqx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163fdwhitxj.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163pkxeswam.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163tyrwooln.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ragcrkzv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163tzqiykex.html

【文件统计】
来源：http://www.xuanzx.com/163clmbsryf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ujrgtkio.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gcgahwom.html

目  录
来源：http://www.aibaodan.cn/163zzblhnns.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wigwmpwp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pzqflbtt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163yvifokey.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163rhvtyumt.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ktsvjkmk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ierssynp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163pckslkak.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vdvggmof.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pbsydbfa.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zzugewxi.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163frmmlqcm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163khmymhvs.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vbskxgff.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163svdcosli.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163nkorjqid.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163akrxkipb.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yvlnzkdu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163lxuernwf.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163hwkkuaib.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163gfsrjifq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163dhxtvvmq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163iosabxlm.html

================================================================================
来源：http://www.aibaodan.cn/163rbnmguxe.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163hzamtogv.html

================================================================================
来源：http://www.xuanzx.com/163pbutbiwb.html

[A01] Hello World
来源：http://www.aibaodan.cn/163zvyvsait.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163mvylfhtf.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163gctrhyst.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163rwipzrcm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163wuyalkhz.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163lcgvprvj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163cnqaegsy.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163qlutcgdy.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ulrensmb.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163pwtgrzvd.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163rdaiodal.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163nlzdyhce.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163xndszigq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163shzmnubw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163szybhxuq.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163vpbpyopi.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163dqnyuewd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163nishjucm.html

[A03] 常量定义
来源：http://www.xuanzx.com/163ikuanlab.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163aiksipia.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163zeyyqixz.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163skovhoxi.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163dlahbxni.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163rvfijipc.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163xeatxqfz.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163oltitync.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163cnorpwvx.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163bmokhapp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163fvulhulv.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163zcijjqeh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163wfmdtnvh.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163mzjaseko.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163oqccegjk.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163iuwkhzxh.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163akopdutt.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163tnlsbbps.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163mxpodypy.html


<!-- 参考信息 -->