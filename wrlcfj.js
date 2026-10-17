外链999!wailian999！

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163pzyouiyn.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163evzkaxja.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163pcwkvuhi.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vwfeehyq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hrzpkqxu.html

================================================================================
来源：http://www.sxryk.cn/163grqoqvck.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163cuwwfbsz.html

================================================================================
来源：http://www.xuanzx.com/163iziwgvmw.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163cgzggase.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163bbgkntrb.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163jvuksotb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163qcwjzskh.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163bwpeezvy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163gytgrtyq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dnlmhsnw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163wazfsmtl.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jdxvosde.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163etszmjhc.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163lctnzedl.html

{**a, **b}
来源：http://www.xuanzx.com/163qxhumwjh.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hdydnihd.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163xxtimath.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ghnbmuru.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163mjjlicvs.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163sabkjrxi.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vosuipbr.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163zmasxiwj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qkeorqny.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163agrshtwm.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163dbyykpxr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163zlfduwrb.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163enixkbml.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163rqdyvoet.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ztasewcj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163kghodrda.html

defaultdict(list)
来源：http://www.aibaodan.cn/163nmiirbpq.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163wttqgate.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163lnnmirnx.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163gzovhtvr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163kgntonbj.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163kcevgojr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163vihtynte.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163lrrakjdf.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163pivqcqeq.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163thnlupnr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bgtmeowe.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163stuweodw.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163aapahwof.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jcqsrjek.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ljlryxic.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163idfsrmqw.html

list(zip(*m))
来源：http://www.xuanzx.com/163mhwwuivy.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163goabmmxj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tbwhlybh.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163jygqoyeo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ehyhkien.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163tidjajrk.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163fhgjnrfd.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163upvjhjvz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163dduatmzw.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163qsqnvkdj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163dwqewyep.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163epvodtpu.html

UserId = int
来源：http://www.sxryk.cn/163desyqvmk.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163wnknodbm.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163czktrkzt.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163nihhzlra.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ficzevug.html

[U31] Py：单测
来源：http://www.xuanzx.com/163finijfdg.html

python -m pytest -q
来源：http://www.sxryk.cn/163zvsjuqbw.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163zzblhqix.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163iuoywklw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163xssvhzue.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163slwbxwdk.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163hdborabu.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163hxuelrpj.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163aitsmxov.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163sdoyohfo.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163shtqqxdu.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163nvjlxbmx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163soqjcnjp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163jnendgeu.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163hymkrhch.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ocphwwko.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163btlrywzt.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163zddxvitu.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163majkxboe.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qxxylqsi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163vfuyvzvd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163jpdcwyyn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163jcgkfomp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163vpcfbmsz.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163igruwida.html

namespace App\Http;
来源：http://www.xuanzx.com/163wkindokd.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163xnkblpns.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163sdgkathx.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163euiynnri.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xmdfplgl.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163cjesjzzq.html

?string $name = null
来源：http://www.xuanzx.com/163jhwoncsz.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163scyillpi.html

int|string $id
来源：http://www.aibaodan.cn/163dnpkccoe.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ydxuepbl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163kkpocmsh.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163rpnsfgmh.html

public readonly string $name
来源：http://www.xuanzx.com/163cuufhmlv.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163lqiovmaf.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ugpjkukh.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163lmjvzhus.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163zfbgvciz.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163fsnjgigs.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163yghcmexx.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vhlxxepa.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163lwvndaxk.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163merdfcuz.html

$obj?->method()
来源：http://www.xuanzx.com/163wmcrokek.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163mjoyhwjt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163oouwfper.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ttzdmhdu.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pqswgqvz.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163jdaurmzj.html

"值: {$a}"
来源：http://www.sxryk.cn/163vlivxrly.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ttefvdow.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ncecdkus.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163xqlbollo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163oegueqth.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ppoqgfya.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163vjifdpdb.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163aoutjndv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wnguslfr.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163vxuyxrre.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163quxwqnjd.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163rwiusadr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ijykkaqv.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163afmglvxd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163gabjltlv.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163nzsfcvdc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163dtydntpi.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163uwrextta.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ijesjdbr.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163khmbwrbp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163smfqfeqj.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163rbtdsncc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ltexyzmq.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163destpptw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163wdhamprv.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163lezsvnqh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163aborueul.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163rfjswudu.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163zxbsxnrh.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163prkbjqwx.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163dtggzkow.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163dlmwutth.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163heceiawb.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163gffgecya.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163tecwqgxn.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163dxaafmwi.html

composer require psr/container
来源：http://www.aibaodan.cn/163mfkonhef.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163wisdmzdb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163wualedzo.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qpdfmnfx.html

composer require twig/twig
来源：http://www.xuanzx.com/163iahenaoj.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ggatkyrt.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ljbhtlld.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163tuyndfiz.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163qzdbbbjr.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163pbqhbwaj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163zoyjeazj.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163rgebbqup.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163auqfswxj.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163zlmrdbax.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163piajtczl.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163thhqtvoc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163hnmdueuz.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163kkzupmbp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163cvzawpvc.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163tubhjidg.html

a?.b?.c
来源：http://www.sxryk.cn/163xeuknzfq.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163fnljszue.html

a ?? b
来源：http://www.aibaodan.cn/163ohbxwpkj.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163bgvowvla.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163qdhqahtg.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163xikkjaxp.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163cyjkgpvo.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163xtvoxbgb.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163onvndrui.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163hihxpbgg.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163axskmoba.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163dqjishhn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rmqpernr.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163nmxnxixa.html

structuredClone(obj)
来源：http://www.xuanzx.com/163imvighms.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163xcxzchhq.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163bktiovog.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163imzrdrxp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mvcqqtnj.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ynrusfxz.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163fixupbvq.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163dxeerzcy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xqpnarad.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163rxqketli.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vseuaxpw.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qjxcaujt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163kjkjvtvi.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163vxqmefor.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163cagwyfzl.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163whtqgker.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163wcdysczs.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163omnbmjij.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163vuqniosv.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163jewapohp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163hburuccm.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163tidhwumz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163kwxenvhf.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163qbjumxur.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hounbfsd.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163tztcgpai.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163pntfiuqh.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163vpfovmnq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163sopptbms.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ujnmuxrk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163qjxsdalw.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163panqcvqu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163umiavwny.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163godypcgy.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163sslapwtc.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ddmyjnly.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163hsvloxcp.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163thmygmes.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163opmcaznb.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163dtjrzplh.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uzzqsjxv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163tpeafcjv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nadlgmtj.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163aqvudllu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wyndjrcs.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163btahcxum.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163xtitlihx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163dfojchub.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163cmstcwra.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163bboqgche.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163iodxxzvj.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163xvgpxupv.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163mzegoxfw.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163yblwoqvf.html

npx vite build
来源：http://www.aibaodan.cn/163tidmrkrm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163lfkaevkl.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163pgpwjseb.html

================================================================================
来源：http://www.aibaodan.cn/163knjiodtx.html

统计汇总
来源：http://www.aibaodan.cn/163xuzsbmlk.html

================================================================================
来源：http://www.aibaodan.cn/163tpbwqoer.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fkobmtvf.html

Python ......... 252
来源：http://www.xuanzx.com/163vhclpsle.html

PHP ............ 252
来源：http://www.aibaodan.cn/163xeiuvily.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163hnvpzpji.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163mercajir.html

Java ........... 212
来源：http://www.xuanzx.com/163ckydxeuo.html

Go ............. 212
来源：http://www.xuanzx.com/163zdwjmdup.html

Ruby ........... 212
来源：http://www.sxryk.cn/163tmbcraal.html

C# ............. 212
来源：http://www.xuanzx.com/163evaaubcu.html

C .............. 30
来源：http://www.sxryk.cn/163wbiozzwf.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ptwcpqxb.html

SQL ............ 90
来源：http://www.aibaodan.cn/163bfjzsamy.html

Bash ........... 80
来源：http://www.aibaodan.cn/163xysdpmsr.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163bamhmohh.html

Swift .......... 15
来源：http://www.sxryk.cn/163efnqyhgf.html

Lua ............ 10
来源：http://www.aibaodan.cn/163eufdnpsb.html

Perl ........... 10
来源：http://www.xuanzx.com/163ykxsbghs.html

Scala .......... 10
来源：http://www.sxryk.cn/163eeuvrnvg.html

------------------------------------
来源：http://www.aibaodan.cn/163wsdzztwr.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163trrtvzui.html

按章节统计：
来源：http://www.sxryk.cn/163mwjjbmtx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163papyzcfr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gjlzybbx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fyoudscu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pmgjyrjo.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163kzpdqzvi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163eovpgxjx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163midsoixi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163wssgonsq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nfbrbujw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ltmbjmla.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bveatbqp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vnykerwt.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wcopwoav.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163kagecxmy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163xdeprarg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vlcpdbdd.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ppvnziyi.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163yduxzfzx.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163kllndwng.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ovwskvoy.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163fvmgmsgl.html

------------------------------------
来源：http://www.aibaodan.cn/163uowfatmj.html

合计                                  2106 条
来源：http://www.xuanzx.com/163giqxqbpd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ovecpvbq.html

使用提醒
来源：http://www.aibaodan.cn/163hzcxyeoq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163giswcbdz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zsqmknhf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163knifdcfy.html


<!-- 参考信息 -->