外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163monytmku.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163virmkylj.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163gczdbwfw.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xbuumkyv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163esfitlbb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163rgbadlca.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163qnilxfat.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163hevmadkz.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163cnivbxuj.html

namespace App\Http;
来源：http://www.sxryk.cn/163jmsaogth.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163vlppcxpl.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163aiehwyxh.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lgdgtnsb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oxzcpyhh.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163cwawjvli.html

?string $name = null
来源：http://www.aibaodan.cn/163creobjgw.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163tetubaqs.html

int|string $id
来源：http://www.sxryk.cn/163bfouulda.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163mtvtatpd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163zvstkqvg.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163fkbkwhum.html

public readonly string $name
来源：http://www.xuanzx.com/163ofveatoy.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163czzjyolo.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163yecimzhy.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163cxncyzjf.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163fvhrezlo.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163gczjondh.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163eoxwtyen.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ozwjlnjt.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163hnmahryq.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163miciegjx.html

$obj?->method()
来源：http://www.aibaodan.cn/163qymamtpd.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163iyrelxvc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ufymhcbv.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163utrsnpjd.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163izsdtwdp.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163detmhxlg.html

"值: {$a}"
来源：http://www.aibaodan.cn/163gyfsumyu.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163kdqsymec.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163rtzmyndh.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163ihlsslyg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cvepwcpm.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ptmwoiof.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163dqodfseo.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163fcjvrmid.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bzidqhyx.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163qmvybpch.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163uqpifxuu.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163cfvdclom.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163kjzfvyzd.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163fuexieok.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163aokweycz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163tivfnbwk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ccrcikmw.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ydovrioa.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163vkdfzkxx.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163lhunycvp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ylltieoy.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163rmnaxqkp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163qoohqinf.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163rzqffvnt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163slztebto.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163xntloqdo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163kdmfnlbi.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163bnsiwgzx.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163zmswfguw.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ynfmfxei.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163irviufhn.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163verjiius.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163zahfkpek.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163dgfszxbs.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163gerqsvch.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163dmgbxeih.html

composer require psr/container
来源：http://www.sxryk.cn/163byrgjijv.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163fjigqkek.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163tpghjgtr.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163utvnwkds.html

composer require twig/twig
来源：http://www.sxryk.cn/163otbqagcm.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163tyosaxpo.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163edbpigcz.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ofbjblli.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163muhygdzy.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163uqhbdzlj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163wnrxziun.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163aerxzuxs.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163mwezsoni.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163drzdguln.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163hufursoh.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163mjjhosuo.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163faomfybh.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163asstqgyl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163wmqucvxc.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163xpukmugu.html

a?.b?.c
来源：http://www.sxryk.cn/163mknwrynj.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163iqaunrbm.html

a ?? b
来源：http://www.aibaodan.cn/163gysequyo.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163tryefptg.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163vkugnyrb.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163vecgmlpn.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163bmcmhqfy.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163oyptyasd.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163zlecgcrd.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163tvlndhbq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hdfloxcs.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163gsfrlbsp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163sjknxoko.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ktftnlyj.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163lythduhh.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163msdvjkhy.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163arqkeoaw.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163brrfhnjv.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ahqswnhv.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ayjcnbkv.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163yqnwdzxw.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163wvzqvpig.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163kktlsinn.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163atfshftj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163aypwfwvw.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163fscnoeew.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163gooaegpk.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163gplreyjf.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163yvojwsqi.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163cgmbhgyq.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163cveghltd.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163qanewrqu.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163uwijyfns.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163atgqfedi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163jxdectuf.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163oxbtewya.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163urwpnvyi.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163fbhrqtxc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bkjpdqop.html

[U105] JS：节流
来源：http://www.xuanzx.com/163aywnhucw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163qapdtowv.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163sntiogdv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163mcjlaiko.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163gdsbuand.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fzyhvonn.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163dvojzygh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163lrjxcqjq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ynmwufdn.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163kyogwmkt.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163rbrriiup.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163tnpoazdr.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163gfgydwnv.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163zvjycpsq.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163eyrgsmqb.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163aixaedfb.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163krwfsgak.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ojdnfork.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163grmwpwrz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xbhqkepz.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163xskcmdru.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163faskthjr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rcovccqk.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163cphcjvsl.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163opnbkfza.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163przvuhwz.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163metgaihd.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163dzbvryzj.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163wykcswfw.html

npx vite build
来源：http://www.sxryk.cn/163ayybhsdo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163douzbekk.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163bzcgkyov.html

================================================================================
来源：http://www.xuanzx.com/163ybpybxdn.html

统计汇总
来源：http://www.xuanzx.com/163mzwprvxu.html

================================================================================
来源：http://www.xuanzx.com/163acshwlix.html

按语言统计（条）：
来源：http://www.xuanzx.com/163hmdrrlnw.html

Python ......... 252
来源：http://www.xuanzx.com/163tnqwxpgr.html

PHP ............ 252
来源：http://www.xuanzx.com/163wsvfrueu.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163gsjymfel.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163yfrwfimf.html

Java ........... 212
来源：http://www.aibaodan.cn/163ltcqexbb.html

Go ............. 212
来源：http://www.sxryk.cn/163apovzapi.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163mlbiypgl.html

C# ............. 212
来源：http://www.aibaodan.cn/163cfkjrbba.html

C .............. 30
来源：http://www.aibaodan.cn/163vzluktap.html

C++ ............ 30
来源：http://www.xuanzx.com/163hpexbcoa.html

SQL ............ 90
来源：http://www.xuanzx.com/163gmoldzeb.html

Bash ........... 80
来源：http://www.sxryk.cn/163fvynrhbr.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ujhprpzp.html

Swift .......... 15
来源：http://www.sxryk.cn/163idsioqbj.html

Lua ............ 10
来源：http://www.sxryk.cn/163zfefejsu.html

Perl ........... 10
来源：http://www.xuanzx.com/163abecdglr.html

Scala .......... 10
来源：http://www.aibaodan.cn/163pixhehik.html

------------------------------------
来源：http://www.xuanzx.com/163tgxmxluu.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163oslsuxaa.html

按章节统计：
来源：http://www.sxryk.cn/163qzmtinur.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ciicxldg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vggsviic.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163flowjtil.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163izvowzwt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163chbmcdju.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ehkiwyqx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163oosxkfwo.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163nmsixnrb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jkpgfonf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jxhiwvlj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163koluzrho.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ehhbyhel.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rfupxhhs.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163oevczkyz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163sfvleelb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wcgvczdw.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163gbptkowo.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163onuzfoav.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163sczkgsoy.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163kgehzzlr.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163efotecha.html

------------------------------------
来源：http://www.aibaodan.cn/163iehjcxil.html

合计                                  2106 条
来源：http://www.sxryk.cn/163xxcggylj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kcdforph.html

使用提醒
来源：http://www.xuanzx.com/163qtlqobcu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163tagwoyfu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163hanimunf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163rtpxguyy.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163mrktqogb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163eljqvgxi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163htfvawnd.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163rpgbjadf.html

================================================================================
来源：http://www.sxryk.cn/163frfxmqsl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163mrezvsrs.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ngnptrht.html

================================================================================
来源：http://www.xuanzx.com/163mlpfptni.html

【收录内容】
来源：http://www.aibaodan.cn/163hryyaiuz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163vgnnxomx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163hqarozff.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163eytgegyu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163snfjdcvy.html

【使用说明】
来源：http://www.sxryk.cn/163oildhtyp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163vbkpkrdk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163yghwrnmn.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163mdzeitss.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163rnamuvmf.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163eospxhch.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163tkiwjtxh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163auohhhbp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163maotlyop.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163wkfapqqr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163lrkjftad.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163eitireha.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163onimzdop.html

【文件统计】
来源：http://www.xuanzx.com/163btnpeetn.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163rtxnctsh.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163znbrkunt.html

目  录
来源：http://www.aibaodan.cn/163vnmtlvfm.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jxaycphq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163piqnxwmx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xrpjchcs.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163likftkvr.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qjjjvkdf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163acnevrny.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163eodrwkpp.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ebeafijp.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163amqfqxon.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163menbcinq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163fmcewvbq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wprslona.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163usfgkcrv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163oceswjwk.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163mmhxcoen.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163swdnecuf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tryawkit.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163plxukfzv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163uewtxvno.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163jnxdrerx.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ioneeiwl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hwgvazhs.html

================================================================================
来源：http://www.aibaodan.cn/163bvypjwta.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163htbutwam.html

================================================================================
来源：http://www.aibaodan.cn/163fhmnlkbr.html

[A01] Hello World
来源：http://www.xuanzx.com/163ouqghpdj.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163pychpfvp.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163hivlptjh.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jixwqeml.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163suhdwnmd.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163zndshefp.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163fibfwmck.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163evhutfmz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163uyjfwzuj.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163ewklkkng.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163exxzhmix.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163dqjoqskq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163srdytjmd.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vmhnopjg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163lhznrxtg.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163tjpohtka.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163hnaigxfh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rjzanhyv.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ymkiekvv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163nzjadart.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163hlkypbfw.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163onyblpyd.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163afyyuosd.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163mccqqjws.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163muwdwuhn.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163loiatuat.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163krahizuo.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163xwxpwtpq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163vxlwghcz.html


<!-- 参考信息 -->