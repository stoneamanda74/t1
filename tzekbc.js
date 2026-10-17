外链999!wailian999！

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vyjcwpdo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163jniskewd.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163vdzyetke.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163lmlhcjbk.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wnbmoirz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ygkobarc.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163kalizsqw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163pomrpdgx.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163zrnxvxue.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163wsotlxuj.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163pwznlvqt.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163adrfrnak.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163wnvjidod.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163pnltewpc.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163digikdwc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163psuywrqw.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163vblylsso.html

namespace App\Http;
来源：http://www.aibaodan.cn/163pwqjvjkv.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163wpiaezaw.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163azmbbrcb.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163qfiyogfj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ykxphcet.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163forkwmzr.html

?string $name = null
来源：http://www.aibaodan.cn/163pwssfcmp.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163pniftvgj.html

int|string $id
来源：http://www.sxryk.cn/163kcqswzzv.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163wszdhuiu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163xyitpltt.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163jadfqpeb.html

public readonly string $name
来源：http://www.xuanzx.com/163cwslvllq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163tzckfita.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163cdbxkffd.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163umzplvcf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163bdfzludh.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163wnpueulw.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163omgabism.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163qhygevpu.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163zscilfdz.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163hduukgqm.html

$obj?->method()
来源：http://www.xuanzx.com/163yfypmzqa.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163fkltoenq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163nkeudfyu.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163tbksnmzs.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lqlhdjzo.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163gkgjxamz.html

"值: {$a}"
来源：http://www.sxryk.cn/163diehgioi.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163nlfofyyo.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163rpmhirxj.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163svxapsug.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qeagpscb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163nnjqhxza.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163owbqouwi.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163rylmozup.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163muegrbfy.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163mmfomjls.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163fwrycaia.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163wbjnrwao.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163bjriicjm.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163fhhcohvn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163khujkrjo.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163euwsgkvs.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163dbzyplgy.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163gvyynhgb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dklwqiwe.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163zjicytkt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163irgcwqsy.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163fnkzvgmz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163atzitozq.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163dlolctvy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ydvxaqug.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163iarstomu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163fmrpdrjs.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163guixbdhw.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163hccfmcpe.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163luauzmyc.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163yqfiqxdf.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163osdlawwq.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ptdfvtbm.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ebfflxgr.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163iiiogcwl.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163eujvznfl.html

composer require psr/container
来源：http://www.xuanzx.com/163dlswgpaq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ykyoqtnd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163seshvoll.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163vuhwayyx.html

composer require twig/twig
来源：http://www.xuanzx.com/163kyltttmu.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163sxkvxvqb.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163spthqrep.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163snzbahlt.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163rphrerzl.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163itzhxbyw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163exwyrrrm.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163hjbfrfpn.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163oyqjmgly.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ceopfknf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163jqmvdjor.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163lfqwbnex.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163uofbeekw.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163gjpgwlgq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163yzdycfzj.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163gzxsvsfe.html

a?.b?.c
来源：http://www.sxryk.cn/163flejeavp.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163uvddghhm.html

a ?? b
来源：http://www.sxryk.cn/163eaqzpcxc.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163trcvchkk.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163vqcssuzb.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163dfeziigc.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163mzfxadza.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163rdrlntiq.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163znnbfzsc.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163avcucxrn.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xsrkfobu.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163naubtnpq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163iodzlzwv.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163kcdqttfr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163dasbvouf.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163arlovwzl.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163scloucqz.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163zxsnavlx.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163yowxrdzq.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163xkissjvm.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ogmqzlnv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163efebpcxs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rphorvuo.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163laenpziw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uidbowxh.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163peqtuqtp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ywxogiou.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163lbvsszlx.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163hqnzgdfv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163wcdpduaj.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163oaujvynz.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163cnggjpgi.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163clmtnyqp.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ngropmza.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fknofxow.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ebxaukyr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163uuvsxfxx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163hutprpxw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pbhzoalx.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ocwkzlps.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163zgpbjbct.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163jhtsgthk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163xrhizwgc.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163abhqezki.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163jxclekrm.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163aedaoekq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163sqvwrmtq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163mxwcsjub.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163misdxqyc.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163fhbwzpkk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ykuhkmgv.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163aweyskfz.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163jadixtuw.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zskbxuqn.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163uirpcezx.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ixfzneww.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jaqgsxjl.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163mshkruab.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cgmpmtvs.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163tloljoin.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163tjxafnly.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163oxxbeyut.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163exrwpniz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rnvgsifg.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ezzrdsew.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163nkhjuzab.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ndwdsxwr.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163yudozbyv.html

npx vite build
来源：http://www.aibaodan.cn/163mwgwsbdm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vnksdrrs.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163aypevoey.html

================================================================================
来源：http://www.aibaodan.cn/163kbsduyii.html

统计汇总
来源：http://www.sxryk.cn/163xafndfbi.html

================================================================================
来源：http://www.aibaodan.cn/163okcovckj.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163gyslnamm.html

Python ......... 252
来源：http://www.sxryk.cn/163mffweyuy.html

PHP ............ 252
来源：http://www.aibaodan.cn/163qtljxyna.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163pcwzwpfz.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163afenmqgd.html

Java ........... 212
来源：http://www.aibaodan.cn/163dspexekb.html

Go ............. 212
来源：http://www.aibaodan.cn/163bghzjnme.html

Ruby ........... 212
来源：http://www.xuanzx.com/163tyqdhfsr.html

C# ............. 212
来源：http://www.aibaodan.cn/163logdlzju.html

C .............. 30
来源：http://www.sxryk.cn/163yajyqyuq.html

C++ ............ 30
来源：http://www.aibaodan.cn/163bupvwvjt.html

SQL ............ 90
来源：http://www.xuanzx.com/163qviqwqxd.html

Bash ........... 80
来源：http://www.aibaodan.cn/163bqpuduez.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163fmszaevc.html

Swift .......... 15
来源：http://www.xuanzx.com/163tihconvw.html

Lua ............ 10
来源：http://www.aibaodan.cn/163qzhmtauo.html

Perl ........... 10
来源：http://www.sxryk.cn/163jvtagrkw.html

Scala .......... 10
来源：http://www.aibaodan.cn/163mxehkxeh.html

------------------------------------
来源：http://www.sxryk.cn/163mablfofy.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ksbvxpir.html

按章节统计：
来源：http://www.xuanzx.com/163xfizzbpy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ytcwhkhy.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163aivtjukw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163iwcwgzls.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163sttrmqbf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mwgqywhz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163bxmptvaq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163iwenqffj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163zoaakmmb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xmsysijp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163maubltcp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163udublhwf.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163udjkdpda.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ajgsvziy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163haloyevx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pudtuweb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vidnvxtf.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163jkxaevqd.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163tdzkgbuz.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163xsugmogs.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163lxvwsfun.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163davjsibc.html

------------------------------------
来源：http://www.sxryk.cn/163limvxesj.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163uxsdjzro.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cxccwxjm.html

使用提醒
来源：http://www.sxryk.cn/163aiungieq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163heephflw.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163plghxnnc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163uhcwgrtm.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163wzpusudf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163sjpqfbcr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163donfdkpg.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163jvknoazt.html

================================================================================
来源：http://www.xuanzx.com/163tjazlzuz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163fwqfxmnj.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163xmskfwmc.html

================================================================================
来源：http://www.aibaodan.cn/163dqunwqqz.html

【收录内容】
来源：http://www.sxryk.cn/163viqepvmk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163hdeekqfb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163vgocebmz.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ucfbgdnb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163mkqenaib.html

【使用说明】
来源：http://www.xuanzx.com/163qwknlwzg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163evgdcsco.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163qpcxaocl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163mzirifra.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163bxwjluah.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163gvkwerrr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163aqdfsdcv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163rdoojyoq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163pdxttgej.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163zekxpssa.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163mqtjkhmz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163pdlecwdv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163nbqycyan.html

【文件统计】
来源：http://www.xuanzx.com/163wranlxid.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ybtxxatc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163xqzedykn.html

目  录
来源：http://www.aibaodan.cn/163zymwxiew.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cjbhvuqy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163tthfvhgo.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163pkzlzeqj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163kzkbvbqm.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163jiwbmnty.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163ffudwogg.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163nqfcqzcf.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ikqufmrx.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163tjpstgsy.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wwspedbh.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163wzxyfyjh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163swgkzats.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uymlurmy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kbclytux.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163oxlivawe.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163nsfkzxuw.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mplmrgke.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163oopktbvn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163prjpworq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163hdhrxrjl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kkdsiysu.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163gijsyfzp.html

================================================================================
来源：http://www.sxryk.cn/163ejzwsnaq.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163oxyalsca.html

================================================================================
来源：http://www.aibaodan.cn/163vsvdydgy.html

[A01] Hello World
来源：http://www.aibaodan.cn/163biyzpivd.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163lkyvcwjl.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163gbdbfmgv.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163uigalahz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163stjqwytw.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163lzjhfdgd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163dsjvpyqd.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163oyakwczr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163japdzgxh.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163vjdnjinl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163slmhqjyv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163sgibhdlm.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163olnggrru.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163xnesqyru.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163svzercvu.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163oabnemdx.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163cxtxiglm.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163thjhpcre.html

[A03] 常量定义
来源：http://www.xuanzx.com/163liuqfyhr.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163tmdksltj.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163chpapbka.html


<!-- 参考信息 -->