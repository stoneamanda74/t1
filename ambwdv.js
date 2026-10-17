外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163qqnqziva.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163tbjlvwrk.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163dcznjnbw.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163rmyagtba.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163oieygynw.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163mmyvhjyc.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163dwkbskbd.html

list(zip(*m))
来源：http://www.sxryk.cn/163yvotrvgn.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163uprjwhti.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163bgmbjyki.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ztgpdhgc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163jofjmicq.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163wfqedwzc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zautrikq.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163fgscxdcz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163dtpsggbd.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163aswbmnrd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163dsiglsil.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163xgjqogku.html

UserId = int
来源：http://www.sxryk.cn/163cvcoidrn.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163mclmztip.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ieffjlpw.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163zclwapcw.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163omuzmgmw.html

[U31] Py：单测
来源：http://www.xuanzx.com/163hbsyjube.html

python -m pytest -q
来源：http://www.sxryk.cn/163rsfohlxr.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163bneqntyv.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sgpnviei.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163jvqqpyyp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163neraijke.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163hdeixyer.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163phazedop.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163mlifskfg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163awfmwxxq.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163reyrhbhr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163oduhgmha.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163esjqunth.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ecrlcvyt.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163puxopehb.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163cflabzrj.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163rchkpiep.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163wipdvqko.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163nfxfykgm.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163irqgjqag.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163dgzbihaf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163vdkwtaso.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163wzrevkgs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163xcscxlko.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163dttmlfdj.html

namespace App\Http;
来源：http://www.xuanzx.com/163ryiftcvq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163treukjiw.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163qrhyaeaj.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163fbesttuc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dmmorisk.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163hbddbtgv.html

?string $name = null
来源：http://www.xuanzx.com/163isgjtaop.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163dnyfxbus.html

int|string $id
来源：http://www.aibaodan.cn/163gmiornax.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163wcjybhcv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163iyeblkpj.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163qgymbcff.html

public readonly string $name
来源：http://www.aibaodan.cn/163vvbsggvk.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163kkfmdihg.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ycuycaaf.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163tlodixan.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ypqwvbhs.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ekjgapqm.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163fglqemkl.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163yhhnyote.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ouciurhn.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163tovxwyqj.html

$obj?->method()
来源：http://www.aibaodan.cn/163guepmxtq.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163laqwousw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163lfaiovtu.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163kxofaaat.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163comfrxnb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163gdldglea.html

"值: {$a}"
来源：http://www.sxryk.cn/163kyrinalm.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163qyxrkhrd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163pbwqhori.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163bgzrqfzj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tszybjdp.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163qooggkbo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163hnhcxpzo.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163riibnqub.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163aepakzpk.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163hywcrdzx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ynddtsma.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163gexbpjnb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163vjttsijr.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163rcwwepnl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163mecjgclm.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163vocmfeek.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163hqopnzbj.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163hogqpwjo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163opyktcbk.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163uicsvkcy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163wachcekc.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163zvqbwgrf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163mdnxcypp.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163lcemwtsj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163gdeizada.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ixovepzv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163gkexdefb.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163nxrssdyc.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163pnaivzrd.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163yqatfdgr.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163dxhuwodr.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163efflgyho.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163domkwkas.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163zzrzfynb.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163hxjatunu.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163tpkkerqw.html

composer require psr/container
来源：http://www.xuanzx.com/163ktwuicxg.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163tggsnmlk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163trxkgfld.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163bautoxga.html

composer require twig/twig
来源：http://www.aibaodan.cn/163fvnphwmy.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ftoguand.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163mhrhvlge.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163wjeplpkz.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ioagqews.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vmciyprm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163zyhionzm.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163qdokcrop.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163yjznjyep.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163scssbnqq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163urubyglk.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163jrdnrkuu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163tsqlgmmy.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163brjedqnp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163vpxiugzs.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ehxwqlog.html

a?.b?.c
来源：http://www.aibaodan.cn/163qcfawwpk.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163yukivqiy.html

a ?? b
来源：http://www.xuanzx.com/163naxhxeea.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163yuwiwlzz.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163zdugwdla.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163qzkumdjf.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163nezmugor.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163nsqgzwof.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163xotuhudc.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163wptcksjf.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bwsbjscq.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163jwwthaal.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163xweddehc.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ywuqtfsl.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ydtjcpyq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163axqicgck.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163sfcvtyur.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163gurfnjdy.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163rmoevupr.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163dpboucnp.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163qoyajajd.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163lapnakrj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nmuzvvvw.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163npnwicin.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bzququdq.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163kotukcdu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ymxbnrqq.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ljdzefzf.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163bnapplvq.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163wthspmja.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163vgcjsuph.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163dutotixm.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163meucmjdx.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ibjmraaz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wcesgsmr.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163zbpbinpp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ssokfkmw.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163qjjxzasr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ckosdkpd.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163fcijbslv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163lkxdkyxw.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163stvfewhp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ddckoreg.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ipwjcooc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163bqpnawuk.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163vucmbgum.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ygylmknr.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163eoptvmoi.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bwjpsxri.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163lkdayovt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163kanryqhv.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163dqilbfye.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163yaufdckm.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163qkyhmlil.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163gfxydkfj.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qrvktiff.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163olttcmeu.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163qoecqcpk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mjwvyugc.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163fpqfdfki.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163bdkwjyse.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ejvrrqmi.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163psoltmsi.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163kfrbohvy.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163egepyogw.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163keoyxcoz.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163tsqacief.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163jrqwhocz.html

npx vite build
来源：http://www.sxryk.cn/163xtlyljxj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163heejowlv.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163zlvrculs.html

================================================================================
来源：http://www.xuanzx.com/163lgqnmvzt.html

统计汇总
来源：http://www.sxryk.cn/163vvxbezss.html

================================================================================
来源：http://www.sxryk.cn/163iicezbwm.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163adbfqhqf.html

Python ......... 252
来源：http://www.sxryk.cn/163qxskjdeu.html

PHP ............ 252
来源：http://www.sxryk.cn/163wbudrkwa.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163vzcwzgou.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163aqirulht.html

Java ........... 212
来源：http://www.aibaodan.cn/163gwnxozem.html

Go ............. 212
来源：http://www.sxryk.cn/163ypwdkkfk.html

Ruby ........... 212
来源：http://www.xuanzx.com/163pcwsytyx.html

C# ............. 212
来源：http://www.sxryk.cn/163khavsgdo.html

C .............. 30
来源：http://www.aibaodan.cn/163nwipzvnl.html

C++ ............ 30
来源：http://www.xuanzx.com/163lbsqdakl.html

SQL ............ 90
来源：http://www.sxryk.cn/163pwiiujvi.html

Bash ........... 80
来源：http://www.xuanzx.com/163dujrkhen.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163qkpsobpk.html

Swift .......... 15
来源：http://www.xuanzx.com/163fudggrjc.html

Lua ............ 10
来源：http://www.xuanzx.com/163zaeaezlz.html

Perl ........... 10
来源：http://www.xuanzx.com/163trpzxgfk.html

Scala .......... 10
来源：http://www.xuanzx.com/163ymougdkh.html

------------------------------------
来源：http://www.sxryk.cn/163veazikun.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163aifesjjs.html

按章节统计：
来源：http://www.xuanzx.com/163tzrxgkqq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163agnwcbxh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163amhrqbuo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163equenigr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pmteypjd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163sivqlqzh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163rlwcrgfc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lkfhfxuu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163phfljsug.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163avqvmrkz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xdqfxyly.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163avxxykod.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163djxjqyph.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nuxtmpxh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163msygbkuo.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163mjnghotw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fvetpexl.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163lpckuhmt.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163treikaqj.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163kmsmpwzl.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163mysjfonw.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163wjwdnkqo.html

------------------------------------
来源：http://www.xuanzx.com/163vszzoluk.html

合计                                  2106 条
来源：http://www.xuanzx.com/163vrxtjvgx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jndktcif.html

使用提醒
来源：http://www.sxryk.cn/163zooprxlx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163czpzuzad.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ayntbofu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163udglkerc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163oqhagswp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163yeirrjdr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163wwvxlzea.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163uyctxcas.html

================================================================================
来源：http://www.sxryk.cn/163vtthkohr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163idnjmhld.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163menltzeo.html

================================================================================
来源：http://www.aibaodan.cn/163vypiuejy.html

【收录内容】
来源：http://www.aibaodan.cn/163vfhhszle.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163qpjreohv.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163tjeuqgld.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163drnozena.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163oddyqolu.html

【使用说明】
来源：http://www.aibaodan.cn/163jtpcsrpc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163emnuyzdd.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163ahuvxihi.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163vhisiuai.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163wiikyqpo.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163piugbubo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163xovjcrua.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163fhcgzkni.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163zbnlbaxx.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163glgfrubq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163qlltlsux.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163qzlhgacc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163dylmetzz.html

【文件统计】
来源：http://www.sxryk.cn/163fxbiwufi.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163rhsimrnl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ourvmgos.html

目  录
来源：http://www.xuanzx.com/163abfaetiq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ttcaggic.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163sllzrbat.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wkkbkril.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mqdbtoit.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163hwzhuwfi.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163neuhzhod.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163kwbwgfvt.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dvrvtqrr.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163dcikqumz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rhmxuoor.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163enivdqbd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ckeosyei.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wkuxqorn.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xnplouie.html


<!-- 参考信息 -->