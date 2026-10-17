外链999!wailian999！

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163bigjvitz.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163noogxvfl.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163jnvsmbip.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163oeyxnfxd.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163phuzzunq.html

python -m pytest -q
来源：http://www.aibaodan.cn/163sbwwclwj.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163fawlcukt.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wdgduwbg.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163hlextjaq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163rpcrdtyn.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163xpequeqd.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163djjnfguw.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163melpnglo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163sjomwazm.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163wfbsrnjd.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163qazjpeux.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ysiaprpc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163hrrzxmwq.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163nxhfbhgs.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163bgwujbcu.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163atmovaoj.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163xparyeqp.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ilprbgjh.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jisqyude.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xlohfkrb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163gzozklgv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163gvwwqstq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163dznrcoeg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rxhdidfz.html

namespace App\Http;
来源：http://www.sxryk.cn/163weunkmgr.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163klnlpiht.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163sphcdepu.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163hpmaakeh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fpvkeimj.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163tzjytgmi.html

?string $name = null
来源：http://www.aibaodan.cn/163hwpmnjjy.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zqaqgxih.html

int|string $id
来源：http://www.aibaodan.cn/163kvtparbh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rgmfmomo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ojceobgl.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163pfcmmopf.html

public readonly string $name
来源：http://www.sxryk.cn/163vlewinww.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163plgbwkkz.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163gbvegygl.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zgnkxhav.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163nowusveg.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163lubnypie.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ajrqcikj.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163oulexyzr.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ftgznowz.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163odjfsfxc.html

$obj?->method()
来源：http://www.xuanzx.com/163qilxczbm.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163xhqbctih.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163whtscwwj.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163wyixqqnr.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pbxylpjk.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163hrgdfhdo.html

"值: {$a}"
来源：http://www.sxryk.cn/163iscoamvq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163aejulbld.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163fldprtes.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ebatnbth.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nbpyeeti.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163jpyqvhfn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ouxuvnrg.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163jvjdffdp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gdldhqkh.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163gzkoujuu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163pzituyti.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gprfttwd.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163fazpomrx.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163eqqymwhk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163hveduzsk.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163bxliplds.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163pmxqigaj.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163bxemraqc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163nsalpgnv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163lvtjqgzk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163jlyhjhrk.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ivvegwgc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163chqiwrwo.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163gqxpsfnk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163slziwcpd.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163cicyhndb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ogdlryvv.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163hvdkmlyj.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163sudzlxqu.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163luktquph.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163gvpqmgfj.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163wzvvacql.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163xuuasmhg.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163orcmjlla.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163voxxrpwi.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163uzeyeuvf.html

composer require psr/container
来源：http://www.aibaodan.cn/163yorwjorx.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163rmhzmltq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163uoupqqsn.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163jhwiikwk.html

composer require twig/twig
来源：http://www.xuanzx.com/163mogelory.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163nuxzzejd.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163wvjiquld.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163yohfdpxe.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163lhkgebqg.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163tagokjsd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163phmwzxsz.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163oxracdhb.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163mqciwczp.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163fcssiaut.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163nhsgpoiy.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163srfeeagc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163xkqjhitm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163lvaaxmpp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163efrpjfmt.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163cyqcicuc.html

a?.b?.c
来源：http://www.xuanzx.com/163agqsfyqz.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163gfghtcvs.html

a ?? b
来源：http://www.xuanzx.com/163eplaibjt.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163nrvhrvzb.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163smlkoghd.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163xcvpuiri.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163pkwzjddz.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163evvqfwls.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163bjbythbk.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163rqngnmda.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rixqwxuc.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163mfrtbvhr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163vkiimxtx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gkhpqlli.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ircmsfmw.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wfbcalxv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163lwpkrvuq.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163mzwmpxmn.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163momlvhah.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163uuykvfor.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163whqongvh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163yvlptkyw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163quzdiwes.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163iswewbrq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ixtrasxz.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163clgmsfpu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163olaomwjy.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163dtopgrkg.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163hxcjqodw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163omqstzpk.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163knxymcaz.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163qclvwrft.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163eidsxguq.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163gqkorcys.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163asncsxlo.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qvuridjc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163lshjzuir.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163zxalykbe.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vbuzjshm.html

[U105] JS：节流
来源：http://www.xuanzx.com/163cbdjwjla.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163bcjmwjbe.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163femtomvi.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163msxnkcgr.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163dzjndldl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xndmdnrz.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163bgopetwr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163gzrelsjh.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163cbceptcs.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163iszkigpv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qsabxhir.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163zwubqztc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jiuluqxo.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ctaictir.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163mkkyyhdi.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163jfnaiuef.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163lmspfixf.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eesngnkj.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163hcukoqkp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bdfcqoka.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163eubkirku.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163xiaeqihd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163oyakrguk.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163nzjwbunp.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163dxypbmje.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163usjpndgj.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ojyhcupp.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163rhpetrgp.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163sxsdcuxq.html

npx vite build
来源：http://www.xuanzx.com/163zdekftxt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163wwwbkcec.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163mbrlaapa.html

================================================================================
来源：http://www.aibaodan.cn/163qyfseoze.html

统计汇总
来源：http://www.aibaodan.cn/163btlzukcf.html

================================================================================
来源：http://www.sxryk.cn/163qauvptgf.html

按语言统计（条）：
来源：http://www.xuanzx.com/163uizohgou.html

Python ......... 252
来源：http://www.sxryk.cn/163lmywjgad.html

PHP ............ 252
来源：http://www.xuanzx.com/163mtalhrsp.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ikdquyxc.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163jktmzecb.html

Java ........... 212
来源：http://www.sxryk.cn/163cykrigsh.html

Go ............. 212
来源：http://www.aibaodan.cn/163aoyofhwa.html

Ruby ........... 212
来源：http://www.sxryk.cn/163wzxwulct.html

C# ............. 212
来源：http://www.xuanzx.com/163aoubjqtp.html

C .............. 30
来源：http://www.xuanzx.com/163jglkxqbb.html

C++ ............ 30
来源：http://www.aibaodan.cn/163umqtvqty.html

SQL ............ 90
来源：http://www.xuanzx.com/163bjvnwstt.html

Bash ........... 80
来源：http://www.aibaodan.cn/163zguhwusp.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163typnkyab.html

Swift .......... 15
来源：http://www.aibaodan.cn/163gqmhonqy.html

Lua ............ 10
来源：http://www.xuanzx.com/163iabslaap.html

Perl ........... 10
来源：http://www.aibaodan.cn/163zjvtqqfk.html

Scala .......... 10
来源：http://www.xuanzx.com/163eonohzec.html

------------------------------------
来源：http://www.xuanzx.com/163bxlwpoez.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163jrpwncxq.html

按章节统计：
来源：http://www.xuanzx.com/163peprmzps.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163vbrvwxnb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163enemgtzm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vjoronln.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163axiuguuk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ihmzwcsd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kbudhbro.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jfangtrt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163nqpztgbu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cexnoxjg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dgoyavfj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fonjigew.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qguwueef.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ncsnmqmt.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xjfytvuj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ttttvxrk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nhjimwgb.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163yvrfzesa.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163okzeeflt.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163wgnrvryl.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163hihuvgla.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163kiinejtt.html

------------------------------------
来源：http://www.aibaodan.cn/163cdrkgteu.html

合计                                  2106 条
来源：http://www.xuanzx.com/163rhzspsea.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ioctgbyt.html

使用提醒
来源：http://www.xuanzx.com/163uskxnaqe.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fqmrqdmc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163cyzlfsgt.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163gszteytu.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163rwiogopf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163xxwajxaa.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163bziqseqi.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163mfjjcamm.html

================================================================================
来源：http://www.xuanzx.com/163wjfxehcm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163hccrebjc.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163edidirqx.html

================================================================================
来源：http://www.xuanzx.com/163eurvufie.html

【收录内容】
来源：http://www.sxryk.cn/163gwikqmjv.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163arledicz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163bphgyuwe.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163oxnpxwyf.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163dxvafvlr.html

【使用说明】
来源：http://www.sxryk.cn/163tlwqngox.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163rjjmcqgw.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163kjmmuobd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163nyegvllx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163psqvgxoa.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163fclcurkt.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163qonrsjnq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163lkwysewg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163dabrnpdl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163iefqsqra.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ueczeizz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163qlsxcwej.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163tpwzwxtt.html

【文件统计】
来源：http://www.sxryk.cn/163euxziayb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163jbkwmmtp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jcedxtcz.html

目  录
来源：http://www.sxryk.cn/163kglyuwby.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nqhjcdbg.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kqpqvblq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xkuuakrh.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163darwbrre.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163xvjuazja.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163gwdgytdp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163sypkfudo.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xoxsfvkx.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163jgvferzx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163czrboilk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163gfmbketd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ndxtnrov.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jckrmvxm.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hbpejpdd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wkpupvih.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163rwyvndjg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zkwcffbb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163oadoggis.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163fcoftbmp.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163qigvzslt.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ascihtns.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163qqmdjbhw.html

================================================================================
来源：http://www.sxryk.cn/163hflqwcdu.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163zrlfdsev.html

================================================================================
来源：http://www.aibaodan.cn/163ysmfoxpw.html

[A01] Hello World
来源：http://www.aibaodan.cn/163dppzfpuj.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163lgczqnle.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163rqfcheet.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163jrtjkpmp.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163zazqkgnq.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163yxzbsgne.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163jovzxvfw.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163vfkntzsc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163yzoshgzi.html


<!-- 参考信息 -->