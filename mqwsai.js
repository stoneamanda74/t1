外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163iiwkxvke.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163dxgzpcri.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163uezpvynj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ucpkqqsy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163bwugizow.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163tfbarocp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163zabfkyuy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163hekxzpeh.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rlefcsjq.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gvxgcpii.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163yoydpinq.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163gxbiuzbg.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163naaiffyx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hsookrev.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163idtrjups.html

?string $name = null
来源：http://www.aibaodan.cn/163haycwfwe.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163jfwlctvj.html

int|string $id
来源：http://www.aibaodan.cn/163vjtjsnva.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163guklgabm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163rmkuegig.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163tyftzqwm.html

public readonly string $name
来源：http://www.sxryk.cn/163gkmykutc.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163mfzbvsfb.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ptvvukjy.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163wvycjkni.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163zzknvsxp.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163beihpksl.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163gmsvrmas.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163alwwsykv.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163doyehmfb.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163mpdlwcrq.html

$obj?->method()
来源：http://www.sxryk.cn/163lbzypefg.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163hnfhhvpk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163atmbxclu.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163cazucpnb.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ggecphda.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163jkwdnyta.html

"值: {$a}"
来源：http://www.sxryk.cn/163wkedkumr.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163unnfixcn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163udolzwzw.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ttpynduf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zfzqxdmp.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mgctvuod.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163lxfnjqxt.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163hnxmffkq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bjctovlf.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163dbkqgcdb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163yswcayqh.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163gsqsxzft.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163krixbbbh.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163mduwwrhj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163hbmrjhsm.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163jczekxnc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163mpymjubk.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163jvwgmzsg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163smbfpohx.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163uaplckok.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163mwoiidpl.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163lsrxmmtk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163leqonznp.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163mqevesfy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163btfeegal.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163cyogrvgi.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163yktcnqth.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163zrrktlxa.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163jgmegbqd.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163xzwrcqwh.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qtcsypbv.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ajggzjso.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163uoupjoli.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163znlscjoy.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163afydsskk.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ivlmvarr.html

composer require psr/container
来源：http://www.aibaodan.cn/163uorlhuse.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163hvpiktvf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ykucryfc.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qgxpagir.html

composer require twig/twig
来源：http://www.xuanzx.com/163whwqjgjy.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163xbxktrxg.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163fjfemxuq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163ryyvelxh.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163jowxujxx.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163aeviurbb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163twxcfsel.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163qtnkzoal.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163wfioanko.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163wozhqvir.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163kdnpcclr.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163mpsxyfoh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163fketcvxi.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163dwbilkkm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163xalsdrnt.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163xqyefihn.html

a?.b?.c
来源：http://www.aibaodan.cn/163kujejjme.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163vnqbkwlz.html

a ?? b
来源：http://www.aibaodan.cn/163ohpnwqks.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163beesrnap.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163bbsikhih.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zcznudwl.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xzfgdgwo.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163oclkiaff.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ciixogcd.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163pmfubjst.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163coiggyag.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163fxdjchpp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163kyzgommr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163dnppgrkm.html

structuredClone(obj)
来源：http://www.sxryk.cn/163tjiwbvdf.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163aingrxau.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163bfqicglt.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163khzytimb.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163nfzayfts.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163fsbmznzz.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163pnsaqnrp.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163nujaolnq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163aqlxcqyo.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163yhcyntaq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kzgtnyas.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163uyzhxbrf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163zuxpzztn.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163kphauxji.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163pjhrpcsl.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163idwcbhcn.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163mscvodaa.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163kspexhch.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163vlzglfhp.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ifxcigba.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163bmgzlbka.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163krdihgpx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163tvrzvbjf.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163rfgztyzo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tcjrmsho.html

[U105] JS：节流
来源：http://www.xuanzx.com/163lpojdklp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163svvncnfy.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163gkdnigjq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163zrdoavse.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ismfopva.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163bllamiui.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163onrbotlw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mogyigjn.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163sdxymibk.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cfyelzxb.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163lbuxswtb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163allvqurp.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163fpeqaqmr.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163mvzdftmm.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163fdheogjg.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163vlixmcnx.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163xoemzpsv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163clawhphi.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163rqessllt.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jirypsgf.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163wjdzzrqz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163cdqlgord.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163rzbjuaiq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163zvtlggqm.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163hrumldob.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163gkqtjjgx.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163zuvavycr.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163lbocjluw.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163uecoltbf.html

npx vite build
来源：http://www.sxryk.cn/163xetquwrd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vrdmceog.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163obkagdxb.html

================================================================================
来源：http://www.xuanzx.com/163yentssot.html

统计汇总
来源：http://www.sxryk.cn/163hlqedrmj.html

================================================================================
来源：http://www.sxryk.cn/163bnqfasuo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163kzzfzhra.html

Python ......... 252
来源：http://www.xuanzx.com/163bvuqxmdg.html

PHP ............ 252
来源：http://www.sxryk.cn/163vfrzohum.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163bklxrvqa.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163iqmukezi.html

Java ........... 212
来源：http://www.aibaodan.cn/163oynciseh.html

Go ............. 212
来源：http://www.sxryk.cn/163ybwjyzpq.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bcaywris.html

C# ............. 212
来源：http://www.xuanzx.com/163usbrbioz.html

C .............. 30
来源：http://www.aibaodan.cn/163ocdmeyqg.html

C++ ............ 30
来源：http://www.aibaodan.cn/163cyobgrak.html

SQL ............ 90
来源：http://www.sxryk.cn/163huforfbr.html

Bash ........... 80
来源：http://www.xuanzx.com/163svfkheeg.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163mgrtknbn.html

Swift .......... 15
来源：http://www.sxryk.cn/163hgvmgcsq.html

Lua ............ 10
来源：http://www.sxryk.cn/163uwhkamom.html

Perl ........... 10
来源：http://www.aibaodan.cn/163zjjqtqfb.html

Scala .......... 10
来源：http://www.xuanzx.com/163lplbxylb.html

------------------------------------
来源：http://www.sxryk.cn/163usagyppg.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163yfmwiucl.html

按章节统计：
来源：http://www.xuanzx.com/163riyuxbzl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163chgahdsh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yhlhwbif.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163puoksknz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163gvxpuoso.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163yaggrpop.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163gxncogsm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163obkregnk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163tdlmuone.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nahuxcpp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163beznscem.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163woxmzwbx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tfeabqfs.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rkgeqebz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163optpzrtm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163opwzunkl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kwdqfnbt.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163vjagdqgm.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163kgmlnyyt.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163oisnaoaj.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ctfxkvzs.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163iqsjqitu.html

------------------------------------
来源：http://www.aibaodan.cn/163lmxystqi.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163abvqldsn.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163drakiuyu.html

使用提醒
来源：http://www.aibaodan.cn/163gvvwfdlz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163iigagweb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163wnwrayby.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163zevaxajf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163axjykzos.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163jdiaewcf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163vjyikesr.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163eglbaelz.html

================================================================================
来源：http://www.sxryk.cn/163qanviwum.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ktnnddbd.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163zqsmkcan.html

================================================================================
来源：http://www.aibaodan.cn/163xssxdzfr.html

【收录内容】
来源：http://www.aibaodan.cn/163jlinxuzp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163axosqpdw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163qhlbdphg.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vdcurqvh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163apsosbtc.html

【使用说明】
来源：http://www.xuanzx.com/163dzghuhgf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163nppsphlc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163rxcgldib.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163rpskmuxz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163fjgapffw.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163wqwnaknc.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163yxtkgqus.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163tfszohdl.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163hmixaxzd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163vcwbmgzr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163lftqvlqq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163tfyzqqbt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163wiipfmef.html

【文件统计】
来源：http://www.aibaodan.cn/163vqokbjeo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163mlxmxzln.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ilaczvvs.html

目  录
来源：http://www.sxryk.cn/163ohmtzaxn.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wkofflsx.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163dhejhatr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fslgwgmh.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xusvtcqp.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163gxaudres.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163grkrwbjw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163mnbolxuq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163lhyxkdeq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163vpzschuf.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qonuuuhe.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163mrdbnoee.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163bkuucuqq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163drdmbwae.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qmvlzmee.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163flpqdfpg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163eyqbdakr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163cfgeamxi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163lcrecrzv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163caixwaui.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163djbekzyv.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jfvsjpgt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163mcrfqdzn.html

================================================================================
来源：http://www.xuanzx.com/163nvwahunu.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163zjiriava.html

================================================================================
来源：http://www.sxryk.cn/163wcoukxlj.html

[A01] Hello World
来源：http://www.xuanzx.com/163ugvstwyj.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163oqhplgfv.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163miesjegi.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163eyoacnfi.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163klwchvrc.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163cqubxkgd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163tujagzyf.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163zddwcejh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163djfxplfk.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ixkptnoe.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163usuexjeo.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163pjuxjyks.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163xvlrcnny.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163oqijwlqu.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163pzleziqv.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163caogkoca.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163rsxoazxk.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wrzheocn.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163iehtjpmd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ndkpmttr.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163rvjnecem.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163kecslpcc.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163tplcmrek.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163jyxtpyxq.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163czabfepz.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163hdkerulj.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163pdtvlvse.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163lhzzqzlw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163gsuhyflk.html


<!-- 参考信息 -->