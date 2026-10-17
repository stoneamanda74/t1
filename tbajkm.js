外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163xzeworia.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163tqdjbddy.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163pjgeyhoh.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xsanjrqe.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163pmopqlyg.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163zkpfirfg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jagrvjak.html

list(zip(*m))
来源：http://www.xuanzx.com/163yfvozber.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vrlksamq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163mcngqllo.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163yqylucmc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163moyydmws.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vldpdtgq.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163gihcjeuq.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163iymyxcml.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163nzppqxrt.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163cvpdxvtd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163zbeniqia.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163yhdlelnj.html

UserId = int
来源：http://www.sxryk.cn/163rjqnkyoy.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163zvicsite.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163hnsrdcfc.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163zfimqqcm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163qqfvenpp.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ctmqzbib.html

python -m pytest -q
来源：http://www.xuanzx.com/163vibbtnjm.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163zdfckcis.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ionwjarx.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163tfpainuw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163cycatylm.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163tjtakwtt.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163gytybmhm.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163unpwrrpp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163bjxbwlbq.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163dlialpkh.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163yfsdmyxt.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163enpdadgz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163kwttgtlq.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163lhhutltd.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163yxocchdw.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163cqviadnx.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163tsmujyvy.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163oknfuxzw.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rmhbrtpg.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163xeyzejjh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163sitqdrke.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163jpzkqhkk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163gvzlykzo.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163vrilmzrr.html

namespace App\Http;
来源：http://www.xuanzx.com/163axzlfnfp.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163cruepuxo.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163befdkbih.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163tzqhbubm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pvaquvib.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163plwyixhh.html

?string $name = null
来源：http://www.aibaodan.cn/163lmvlzfif.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ujxefuoy.html

int|string $id
来源：http://www.aibaodan.cn/163xhphslct.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163cqcdglyk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163whdbqeko.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ukgeelxw.html

public readonly string $name
来源：http://www.xuanzx.com/163srsmwlqa.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zbhsfzjj.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163lexrpfcw.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163jyukiaco.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163oqlopbgb.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163fyfrrwcm.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163krlmzqce.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163nwcmigje.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163lyparkms.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163zpvzsbdo.html

$obj?->method()
来源：http://www.sxryk.cn/163fsbwnxgy.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163gnbtuakl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ajtgzvwz.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163pnzgqyuw.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uphbzclz.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163hcdvpztm.html

"值: {$a}"
来源：http://www.xuanzx.com/163iwejmvdv.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163cqwejlxf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163lmnysrro.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163pyogwphe.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163twdpiwcb.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163nnwtwkpa.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163htausdml.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163thgwkbwx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mgtofipj.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163jipravph.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163qqquhtqk.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ypfnguat.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ikjlhkmu.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163bewufxbp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vpdbiwhg.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163jiwjwffn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163tihjnilr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163itvxgchq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163vodecwjr.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ptidyudv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163yqlisxlz.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ynlcwbnt.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163gqjxsuzk.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163agajnrto.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163xpfkotlf.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163teyyjpxk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163mgecobkk.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163ropvrqtu.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163lifclwnt.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rcnjkmsh.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163dgqdxdch.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163vtsabykg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163adaklxrv.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163grbnxyga.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163idmxuvxy.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163vykdlrnx.html

composer require psr/container
来源：http://www.xuanzx.com/163qlonwgrf.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163hwipaakl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163fhqpzoza.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163spwuhhei.html

composer require twig/twig
来源：http://www.sxryk.cn/163jxvnflri.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163izcmtlvh.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163wzalromk.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163inazguxy.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ygnkrevm.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163kywsyrtm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163tpzgcpct.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163fzzhzpfn.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163epeuklgx.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163swojgnip.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163impswica.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163jkazsbcp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163yyjuorch.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163irwmhieh.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tvexwtng.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163pzckgqen.html

a?.b?.c
来源：http://www.sxryk.cn/163ndlllklg.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163xhxkqhqp.html

a ?? b
来源：http://www.sxryk.cn/163nctngwmh.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163sjxcysnt.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163gowraubo.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ozesbhhm.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163diqyfjaa.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163atymxzio.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vcmqmhtw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163fcdmntte.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lvyyxzck.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163bqhmfjwx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bfetzjsf.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163zdhkentj.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ujivoiqd.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163mnlucnxl.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163omfxwlya.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163vatgeosr.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163tpdnetwo.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163sjujbleh.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163zfopwhiv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163jkxalgvp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vdrofzpt.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163lbaknsgy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lfyambcu.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163zhiaukjk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163auzcgewu.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163nididhfv.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163yeczutsb.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ghwzdsda.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163yhfqmdfy.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163yxkroedf.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ggoefaxz.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163oebhlhyq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163cyeijqvw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163zsznzzgx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163zkglxixy.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163tutlcbxs.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pyfustpt.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163sijnmizo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163lzmjuadu.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163siudbcxo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163vxfewben.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163qhddsvwj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163lvobwtcd.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163iufimqbc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163smhdhjni.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163mrovshuh.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163efdloawi.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163lydngpqf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ghdwejdc.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163jcqhajcv.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ecbbrsel.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163szndzjuj.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163rrgqxkxc.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163uftykibq.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mtnqxpal.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163cfufebej.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lpjeiqug.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163kfoaeers.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163tnpqovzl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163pdpupfmt.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163nzjczuom.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163pvtnkpfh.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163omfljgsx.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163anxtrvxg.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163zweghkqg.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163lzidkrzp.html

npx vite build
来源：http://www.xuanzx.com/163ycpkyapi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163saimopwo.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163jsymdbcg.html

================================================================================
来源：http://www.sxryk.cn/163kmaoumeu.html

统计汇总
来源：http://www.sxryk.cn/163wcjihhip.html

================================================================================
来源：http://www.sxryk.cn/163ireaujpc.html

按语言统计（条）：
来源：http://www.xuanzx.com/163wqjzpddq.html

Python ......... 252
来源：http://www.sxryk.cn/163angzlyug.html

PHP ............ 252
来源：http://www.aibaodan.cn/163kvmahbpq.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163gefcmlie.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163waeekslq.html

Java ........... 212
来源：http://www.sxryk.cn/163lnkpwgpm.html

Go ............. 212
来源：http://www.xuanzx.com/163kbczpbid.html

Ruby ........... 212
来源：http://www.xuanzx.com/163glddlsgl.html

C# ............. 212
来源：http://www.xuanzx.com/163ouyvqshr.html

C .............. 30
来源：http://www.sxryk.cn/163qzoqljqe.html

C++ ............ 30
来源：http://www.xuanzx.com/163tmkpbgdd.html

SQL ............ 90
来源：http://www.sxryk.cn/163ssiniqwd.html

Bash ........... 80
来源：http://www.xuanzx.com/163dnvpsyfk.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163wasqevpn.html

Swift .......... 15
来源：http://www.aibaodan.cn/163vxmycdfp.html

Lua ............ 10
来源：http://www.xuanzx.com/163yxpzmecf.html

Perl ........... 10
来源：http://www.aibaodan.cn/163rrygcsvj.html

Scala .......... 10
来源：http://www.xuanzx.com/163eisyempq.html

------------------------------------
来源：http://www.xuanzx.com/163dllmlipf.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163lzlvvzsr.html

按章节统计：
来源：http://www.sxryk.cn/163gdtuiwcg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163yscbwnls.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hjxngohr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ikeiiils.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163eksbqsxo.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163wqstzahm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163iggcoogx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163oajwrsou.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163dywewlgz.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fsbifsld.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hukupnrp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163phvwinzs.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xxdwgqzp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163sttwrkxf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cebsiavn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163bwycvtby.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uyyhqaov.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163kreurgbm.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163fyzhypoy.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163bhappgcm.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163vdsasfba.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163muxhwusg.html

------------------------------------
来源：http://www.xuanzx.com/163hbabtfxk.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163rgtpeoqd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cgzpfler.html

使用提醒
来源：http://www.sxryk.cn/163sejmolup.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xjhwmfzb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163tvtpsdjg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163mfsdvyeh.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163mkvmvprr.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163bpturcuh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163lbpcrdzy.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163vstafwmd.html

================================================================================
来源：http://www.sxryk.cn/163zpskbmkl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163pmvvfzeh.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163hpadviom.html

================================================================================
来源：http://www.sxryk.cn/163kbwnbwmq.html

【收录内容】
来源：http://www.aibaodan.cn/163tfirdnpn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163llolwcnd.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163vmqrmoxe.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163octjgvpy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163bxokxtye.html

【使用说明】
来源：http://www.aibaodan.cn/163fxvulhyx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163pddvyyul.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163dpeotvnx.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163hwqeoqyw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163owgcoswa.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163lhbwddby.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163oathslub.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163zaxmsyir.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163zxmmxsij.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163meaftykt.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163xwbjcyhg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163pqjviadj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163wlohasdm.html

【文件统计】
来源：http://www.sxryk.cn/163jmdtwhiq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163evyjcjcb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xyclqwpg.html

目  录
来源：http://www.xuanzx.com/163ypgpjeei.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ctxrgjom.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tkhsxelr.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bxzdtovs.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ssybaccb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163gcavkivv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163jafmpyrm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163wooeqtnl.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163gkyjjffv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qllcfepb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163trharvir.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163oqjremji.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zngismgw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163rdglmbgv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nzsqrkil.html


<!-- 参考信息 -->