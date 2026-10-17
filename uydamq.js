外链999!wailian999！

[U33] Py：打包发布
来源：http://www.sxryk.cn/163eaiwwfkw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163izjyhszb.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163yynofasy.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163rjxqnlph.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163revhznnw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163zlqjozku.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163gqcoylel.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163umznodjh.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vvhoxwkv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163pajdzmqg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163jexgdksz.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163gosiixvb.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163crcckoyq.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163tqzrmlnh.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163foxekkwh.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zwfwfukl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163bihcpwgw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163tyjrfmos.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163qajtlhzq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jbdxuarm.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163pikqktpv.html

namespace App\Http;
来源：http://www.sxryk.cn/163fmaeflff.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163aywtmaup.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163uexogmpm.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163uytaeouz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xhcdtzcp.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163hzhomdmx.html

?string $name = null
来源：http://www.xuanzx.com/163irpuiapk.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163puqugegq.html

int|string $id
来源：http://www.sxryk.cn/163otijqxmr.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163swpjhkgs.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163dhujspvr.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163iadpmumw.html

public readonly string $name
来源：http://www.aibaodan.cn/163nsctnysc.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ivcyfwnc.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163deaeymvb.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163dggghrzw.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ypcwleyk.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163yebelcat.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163jevyblsw.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163tyhtyxnh.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163eoefnkfr.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163cbrrgfpy.html

$obj?->method()
来源：http://www.aibaodan.cn/163xwauklch.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ieqozqlv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163wihbdqrn.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ttrzdexz.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xwwggzwa.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163asadyvcb.html

"值: {$a}"
来源：http://www.sxryk.cn/163tuyzggax.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163zllnxbxd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163uoyhgcri.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163pnjaxcqr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pzgglefu.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163zxqqaasg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ekelsylg.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163hyvcqvda.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163yyhgcsky.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163xfppaetb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ddhfzhcx.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ydyhjmpw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163mxvdftmm.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163tfgoaumn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163hokkrimw.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163hbpfgrqf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163lyxnbneq.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qqhfkqex.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163flgnmyym.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163kgonsqzb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163pyipxgeh.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163yhxlfepj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163noqqfuzj.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163zvspocfa.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ppwlvjjs.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ujjbqruc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163tgovtgeu.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163fofoxhcg.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163koeytbrr.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163hshmxowg.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163mganxzwp.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163pkhcumdv.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163hderrglx.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163sbublkjh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163orjikpue.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163iqgsslka.html

composer require psr/container
来源：http://www.sxryk.cn/163jdjamtbs.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163blwvrkuu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163koqmfyps.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163byveiboa.html

composer require twig/twig
来源：http://www.sxryk.cn/163gyaehegy.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163cbuavxng.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163tzmuridr.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163txqpbjks.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163auwaymlg.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163wxolqezm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163enoqotck.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163vyqwkeve.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163zfrrmvmr.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163tpcujzhq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163fywbmsno.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163hrfujdza.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163mrifdsrq.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163hpytymgs.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163vbmoivtl.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163fhgxverx.html

a?.b?.c
来源：http://www.sxryk.cn/163qjhhkqez.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163cdmbysnz.html

a ?? b
来源：http://www.aibaodan.cn/163jyqzmtcw.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163wfxigoev.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163yzcojmsh.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ldasumyi.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163cpvkzvzv.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163dfvfkhfc.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163mrjhwrhp.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163csgcrjzq.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oczldetx.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163drathzcz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163dcbsbsrh.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163dpzsppfa.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163wxhrgcad.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qlsqsrpy.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163csevktid.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163gtjasvbh.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163dsnghvdm.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ligjhxkq.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ykjsqyxq.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163nvdrvuhi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163amicfrbl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163qyqkblqp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hulyzcqk.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163mnlvrpks.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163licuahoy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163cotqggbr.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163jbxjxier.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163pwsfuucz.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163pvjbxkzl.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163dlpfvrbw.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163rzskfqdm.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163oerbeuoa.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163cdoxvjjv.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163jirgqduu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163cfsiwpit.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163xcmznbqw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163uzhhpxfy.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hxdvrjgv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ysgnkzdc.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jglbqsnc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163avgifpwk.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163wmesfhxi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163nazjyzfa.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163weghehgw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163fotsubuq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163yoohfwxh.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163aybkqzzj.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163uiiddfdn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163tnsegdnn.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163pqsiwbsh.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163nkhyubie.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163fogdkdfj.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zrrgjwth.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163hhofmzqo.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gufxdpnw.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163uyoflmtz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163crmrhojg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163wjqdmovt.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163imguaoye.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163knikovkh.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ezzifhyt.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163entwdozy.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163evwrikkw.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163btmsahdw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163umfirhro.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qvgrgugi.html

npx vite build
来源：http://www.sxryk.cn/163kjjwnpor.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163fkusaqvz.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163kqkcmvem.html

================================================================================
来源：http://www.aibaodan.cn/163oueizkew.html

统计汇总
来源：http://www.xuanzx.com/163qrgpvfig.html

================================================================================
来源：http://www.xuanzx.com/163kqpyldtr.html

按语言统计（条）：
来源：http://www.xuanzx.com/163euklzqez.html

Python ......... 252
来源：http://www.xuanzx.com/163ogbcybmg.html

PHP ............ 252
来源：http://www.xuanzx.com/163swkdegvf.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163xiteyagd.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163kosrupkg.html

Java ........... 212
来源：http://www.xuanzx.com/163jeguuipr.html

Go ............. 212
来源：http://www.xuanzx.com/163yezvdrur.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bmfsegoc.html

C# ............. 212
来源：http://www.xuanzx.com/163arvfkisi.html

C .............. 30
来源：http://www.sxryk.cn/163gzwhcogs.html

C++ ............ 30
来源：http://www.aibaodan.cn/163yuakwrmi.html

SQL ............ 90
来源：http://www.xuanzx.com/163hdshyoco.html

Bash ........... 80
来源：http://www.sxryk.cn/163ttsrerjs.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163dhezlvlc.html

Swift .......... 15
来源：http://www.aibaodan.cn/163vnebtmkl.html

Lua ............ 10
来源：http://www.xuanzx.com/163jyvzkeib.html

Perl ........... 10
来源：http://www.xuanzx.com/163etqugfzj.html

Scala .......... 10
来源：http://www.sxryk.cn/163zbiokknc.html

------------------------------------
来源：http://www.aibaodan.cn/163xevrobgr.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163epmkhxhy.html

按章节统计：
来源：http://www.aibaodan.cn/163zhpxidgd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163qeghkjka.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vrzanmwq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163czdrnlgp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163gmaqqtlc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ozinrkzm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163laqkrnsr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163edfpdqfn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ptlrxfbg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wgpuzhrc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163diyiteuc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yzyzcofz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kwwisntw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dwqsiova.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cfymcfos.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163vctjbngd.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xcygdjxw.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163tnylsjnk.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163egvzqkca.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163sxmiipoq.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ilzjmwbn.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163wdsdatsf.html

------------------------------------
来源：http://www.aibaodan.cn/163cxlekxoz.html

合计                                  2106 条
来源：http://www.sxryk.cn/163lztpispm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163envqazul.html

使用提醒
来源：http://www.aibaodan.cn/163xumbjuyz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ynyeuetx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163mujgdzug.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163rjthphxh.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163xqxjvqcf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163bvrjbrsm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ffgfeuny.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ycpxlrkj.html

================================================================================
来源：http://www.aibaodan.cn/163qxinewor.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163rsfsxdcb.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163jckykcmg.html

================================================================================
来源：http://www.sxryk.cn/163ylfitqht.html

【收录内容】
来源：http://www.aibaodan.cn/163gkxmtvya.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ryuxfbjo.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163eviowepr.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163xbenmlrk.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163vcwncjad.html

【使用说明】
来源：http://www.xuanzx.com/163hnjamudt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163oactopkc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163pjimjhob.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163osdkwtqz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163cyxoxqtl.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163gfzvabyd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163fyucvtwh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163jovkpidv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163pbevptsz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163shppmpyi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163pgndqsev.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ogeunftq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163iukijlha.html

【文件统计】
来源：http://www.aibaodan.cn/163binmrrfz.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163idtvvteg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qaafbbdf.html

目  录
来源：http://www.xuanzx.com/163fbokzjov.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163sfaekcjl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163fdpvifnq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wkcmyjsp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gaxkcdyk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163shqmsszc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163gfwphnoc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163nicpbblt.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163cdyhrpjc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163kuyjbmyy.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mnaexafu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163rmzuxijz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kbayoeoy.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hncaowhp.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sjnbefqb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163onzvrfwu.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163wjnfwgfg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mdhfxvzp.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163vjtqanok.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163cjspsjsz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163tfognvuh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kjatvpjz.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hyixtzuk.html

================================================================================
来源：http://www.xuanzx.com/163sleecxhy.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163mrzzpwjr.html

================================================================================
来源：http://www.sxryk.cn/163ldofmmlb.html

[A01] Hello World
来源：http://www.sxryk.cn/163cooswxvc.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163lppqccui.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163yyzyfcdv.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163bhntqgrh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163dxcnpiyu.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ptfiabym.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163zhcrzdxf.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163nhiifecp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ispkdteg.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163dtgazkmw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163npedpfwz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163yyuwnhvk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163bqmtjvnr.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163umvlbyef.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163pgxojwff.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163dqdrzqej.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163klcmitfd.html


<!-- 参考信息 -->