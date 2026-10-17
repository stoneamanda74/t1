外链999!wailian999！

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rmwkhxxw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163clnltpyj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163znvcyyvw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163fsutjqae.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163puyzypxi.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163diulcqig.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163dxxhjtcq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163epzqspqy.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163rggsvjoo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163unzvfiny.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163axescirw.html

UserId = int
来源：http://www.xuanzx.com/163mqpflqdw.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163reafmvhy.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163jdconkag.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163zefkvltw.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163yyufofzk.html

[U31] Py：单测
来源：http://www.xuanzx.com/163callwxwd.html

python -m pytest -q
来源：http://www.xuanzx.com/163mktrgmgr.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ozmsggql.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163fgkbqiln.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163pmkqtbod.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163rlowsata.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163kvpxurqb.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163tvmqcwsc.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vbnbqjzz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163tfdpvrik.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163fthxqzqj.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163qxwsumyu.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163iavxzsvj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163givahwif.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163svyarigm.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163tccnvtem.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163pdpxuiyb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163nfzigoxy.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163uuuswcpn.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pfwuepuf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163qeollkbf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163qnjdbngo.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163sdoweals.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163vhbnebnb.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ricppmqd.html

namespace App\Http;
来源：http://www.xuanzx.com/163wdsqsfyf.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163omffvdsk.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cwcmvoul.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163qbnsbhyg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ndmynxcp.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163cfffdkqs.html

?string $name = null
来源：http://www.sxryk.cn/163ypocwfal.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ysryqpdq.html

int|string $id
来源：http://www.sxryk.cn/163dsdsdtrl.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ykxaveop.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163gtjidvks.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163jjsobpan.html

public readonly string $name
来源：http://www.aibaodan.cn/163zhjkywwr.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163jhcyhukn.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ksqsixkg.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163wpmdgyab.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163gubbamtl.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ixnrxtzm.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163lqjyifax.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163sqoweizg.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163cyilqkgh.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qapwrtlc.html

$obj?->method()
来源：http://www.sxryk.cn/163jihpedyx.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163kcdxjaow.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163snqfvlut.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163cspxcszr.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163betueagv.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163dkonhetk.html

"值: {$a}"
来源：http://www.sxryk.cn/163jyvjkyzb.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163bqksptze.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163pwflmkzq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163hkkyotas.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163edhmrlsc.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mjccjoyn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163hbxbzkbl.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163avghsrjt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163imlomjsl.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163svmhjkft.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163gxpsizac.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ypzlloio.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163yctutdho.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163gksckbmh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qcndtgvx.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163fosiabso.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163rwndniay.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163slmpjipw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ucujwlvu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163qgntborb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163fcuvrbyi.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ikffkann.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ylolpqtg.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163dxhvojxz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163suuugwdo.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163sjawjvjc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163csaxrthe.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163pissflzo.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163yhcmlvyp.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163dpaymljx.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163bwgoiqde.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163sehphixx.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163efcquxzm.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163xanjrysf.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163hcukxhhr.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163mjoxdsfx.html

composer require psr/container
来源：http://www.xuanzx.com/163muzfvzkc.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163oisjmcaq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163wtcdywqd.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163kvcbpwlx.html

composer require twig/twig
来源：http://www.aibaodan.cn/163qdmnhmrz.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163tmdecvrl.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163evpqjzwb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163raettiuc.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163iwrwvqow.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163lexwsygi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163nywkkvjh.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163lzndnvlv.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163eiyyiljf.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ziqnaqhi.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163gyoxrfgt.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163zyczxucc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163xcpbuazw.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ckkodrjl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ulindbpz.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163bwrxvvyo.html

a?.b?.c
来源：http://www.xuanzx.com/163wdhumrqx.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163yjuqitlw.html

a ?? b
来源：http://www.sxryk.cn/163afqreayg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163xpcfbvnq.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163aibyzpxo.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ccwgnmov.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163rfdxzfql.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ihuvowgl.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nvqfuswi.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163bkinebyw.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wtrsqqka.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163dqsryean.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163vfuwmumx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163cwizqvfh.html

structuredClone(obj)
来源：http://www.sxryk.cn/163qeebpxca.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163bmzrwsso.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163kudkokwj.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163gvlhmjvm.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163yoqcwinr.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163dwwyfzcu.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163fnidoncg.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163hsaywaoi.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pvslgqku.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163zmelzton.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qoflmjvr.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163msjtacns.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163zfvrrqef.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163splzkdkq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ynzqpgcp.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163gqlykqvy.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ymgsivld.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163pkajdfon.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163jsolxngh.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163kbinylxs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163licjcqmz.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163efxpxhxq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163twptzvsx.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163qwivoexj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ysnbaclw.html

[U105] JS：节流
来源：http://www.xuanzx.com/163yhzfrxea.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163xbddebdq.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163yhhxewrz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163fayjjrdd.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163agxegefd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163gyettvzr.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163pyzcvchg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163filthdxu.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163aoketfdh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fzpzcbsd.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163oikcsdgq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163wugmvyss.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163sphpcvap.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xxdyodqk.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163pliafymc.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163wtdvwkdl.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163jddsotoy.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ybcdizts.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163epunpnem.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ehzoollj.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163aaksydrc.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163qmgjgguf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163mlqbrven.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ehebtjem.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163hsxmjtjl.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163prbjbgfz.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163blueygzw.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163htcgotba.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163hnygomki.html

npx vite build
来源：http://www.aibaodan.cn/163ygdziwuh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ikfdakee.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163iajmqqvc.html

================================================================================
来源：http://www.sxryk.cn/163ktxnvoai.html

统计汇总
来源：http://www.aibaodan.cn/163qbjbutxl.html

================================================================================
来源：http://www.sxryk.cn/163yfykgnow.html

按语言统计（条）：
来源：http://www.sxryk.cn/163csbgthsk.html

Python ......... 252
来源：http://www.xuanzx.com/163bbpxxjvl.html

PHP ............ 252
来源：http://www.xuanzx.com/163diysovwo.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163utogjbmw.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163rdrycrpn.html

Java ........... 212
来源：http://www.xuanzx.com/163ogbgkwxg.html

Go ............. 212
来源：http://www.xuanzx.com/163oppaidbb.html

Ruby ........... 212
来源：http://www.sxryk.cn/163pwcoohlr.html

C# ............. 212
来源：http://www.xuanzx.com/163zpbknbpa.html

C .............. 30
来源：http://www.xuanzx.com/163eranirke.html

C++ ............ 30
来源：http://www.xuanzx.com/163rszmmkkc.html

SQL ............ 90
来源：http://www.xuanzx.com/163lazeqtxv.html

Bash ........... 80
来源：http://www.xuanzx.com/163dncqqjrn.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163fwrjnhlq.html

Swift .......... 15
来源：http://www.xuanzx.com/163kcrvdlxz.html

Lua ............ 10
来源：http://www.aibaodan.cn/163xuulzoyw.html

Perl ........... 10
来源：http://www.xuanzx.com/163rpsnpogw.html

Scala .......... 10
来源：http://www.aibaodan.cn/163abpzgfdm.html

------------------------------------
来源：http://www.sxryk.cn/163rbhgjkpt.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163kmpffsjo.html

按章节统计：
来源：http://www.xuanzx.com/163xwiyoasb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163berbofju.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wrsppzux.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kpevzvam.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163btiqsayy.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163ssuvoltp.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163nylmstam.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nahfcoco.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jaimcxdz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hghzcysx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163yulupevs.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163euzmgkuz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ctpepcjh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jpsnjyjs.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wxnynhie.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163dqeetaxi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ljgiwkwu.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163nupsuovt.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163gtyddmue.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163lntfkeuc.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163shvmhuwx.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163tbxhudxm.html

------------------------------------
来源：http://www.aibaodan.cn/163rpgmzuyy.html

合计                                  2106 条
来源：http://www.xuanzx.com/163hamsjuns.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lxwxwbfq.html

使用提醒
来源：http://www.xuanzx.com/163plmrpkrw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pnbvdwyb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zbbmruri.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ihfglofo.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163xqpjjztz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xrwtpkcc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163rczhioog.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163zbtcrsjh.html

================================================================================
来源：http://www.aibaodan.cn/163wwaydiyz.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163uwetulri.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163iloviopt.html

================================================================================
来源：http://www.aibaodan.cn/163gsfwdsan.html

【收录内容】
来源：http://www.xuanzx.com/163nugyxqic.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163qykexsid.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163rfeaogla.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ikbfzjpj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163tzzcpobf.html

【使用说明】
来源：http://www.sxryk.cn/163fhdqrzwi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163qvaztxxa.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163bilaqkkg.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163xvkubyze.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163cjqaiibb.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163xhlelazf.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163rxyfopji.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163yitpnqxm.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163tnlmaxgl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ochawzjo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163bpuktmgu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163tjwbpcbt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163pmgcqjnl.html

【文件统计】
来源：http://www.aibaodan.cn/163wpyfyaga.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163spwdcisl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163czrcogth.html

目  录
来源：http://www.sxryk.cn/163gnfzdqld.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bqlkrijp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163waluvemt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tmsmaiia.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bkovcygc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163kmhtqymb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163usignzvm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ptyypaza.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lvkhmusm.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163desugdeu.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qnitfrqu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163mhunslgn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pyiuiwrc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nupjvuen.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tzrpcgpa.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wwkenxnd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163vlcqjona.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mvkdzeyl.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163kxoyyzfd.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163iqffkzrm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163nargvkge.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zfjpmteg.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163pteextke.html


<!-- 参考信息 -->