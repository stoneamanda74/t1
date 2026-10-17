外链999!wailian999！

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163mbqnmqxr.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163sohqczhc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163zecxioby.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jemvstfz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163smbfcsvb.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163rdvxukmw.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163sjgyuqhx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hmtovxvv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163gpvfugdo.html

================================================================================
来源：http://www.xuanzx.com/163ktmguwws.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mzhbljid.html

================================================================================
来源：http://www.sxryk.cn/163jszqnxiz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163zkydxuav.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163bfhwymnt.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163wyyjzxzf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ryijifhc.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wuczncea.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ellckiho.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163djjnlltt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163nbppcpfj.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163chhxbttw.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mfcizhcg.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163zryhhmdx.html

{**a, **b}
来源：http://www.sxryk.cn/163xtvazphb.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tmmwusdm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163mvhcnxxs.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ipxgsvyw.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163hslelqgj.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163isuboeor.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163wvcbcaxu.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163vtwamuvk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163larfvkyd.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163bunhocwz.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163gtccnnxy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163dxjlsbqw.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ugaaczoq.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163fxenhmet.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163eisyohcr.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ugbmqhjd.html

defaultdict(list)
来源：http://www.xuanzx.com/163jnpngweb.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163susbumbb.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163xpguzfdu.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163qazzdyqt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163iadcqjbx.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cmthbquc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163eajoaynx.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163jqigvbvi.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xmrqlrec.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163cxaomycl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163glxvrwka.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163udimvkiv.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163fzizrogm.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163agsmrjno.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fjbqxhxk.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pedcvhsu.html

list(zip(*m))
来源：http://www.xuanzx.com/163ohmcbvxi.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163wofioawj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163qvrkjpaa.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ybbjzaqt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163kkmvqkio.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163hdutymkn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163alqsonhl.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163pgxtxixi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163pwtkgkqg.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gmvntvdk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163qjqzvhel.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ifdpzcoa.html

UserId = int
来源：http://www.sxryk.cn/163zejtrplx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163zglzyaav.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qasikeef.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163hjyqynmg.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163tzdmeyxy.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163agoatyac.html

python -m pytest -q
来源：http://www.xuanzx.com/163zufvwskv.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163axthyziz.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163riboovgu.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163usfeudyt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163tjayibqx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163kbyfbxjs.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163kepawlzm.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163iuresbya.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163dtypzzvc.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163jjpigsdf.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163jqzeozrw.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163dtaktzgc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163qctalzsg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vozjhrcp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163umdccssw.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ucnlznbm.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163mikdkfjj.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163kokopqeo.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tqcbwjxb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163enhcwoiy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163bkfrsenb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ztyaufoi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163efqadbds.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163hoirfcdg.html

namespace App\Http;
来源：http://www.xuanzx.com/163wocqlwrb.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163bmgscmyg.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zamqcpfy.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163xudeorwx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rkjyseta.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163dcdlmawh.html

?string $name = null
来源：http://www.xuanzx.com/163aviiqkuk.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ijehtevz.html

int|string $id
来源：http://www.xuanzx.com/163ttiemqqr.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163mrwixfhi.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163hdiyyxql.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163uctlvqbu.html

public readonly string $name
来源：http://www.sxryk.cn/163naigdwsq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163zhkbjvpy.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163jfphyniu.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163onlfhrsj.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163cdbwbffd.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ybvhhgfa.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163rhfrzsbq.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163nnglxxkc.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163auupbyrx.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163pvoyozot.html

$obj?->method()
来源：http://www.xuanzx.com/163nunefxqk.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163mgdnzhxf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163rjerobqi.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163lboviyfn.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163sjhvsizk.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163phdyapxp.html

"值: {$a}"
来源：http://www.xuanzx.com/163xevkxsno.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163gjnjvfxo.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163sufzgcjd.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163xckeidrf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bpxacqqt.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163fgzkuwqa.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163yeygorsb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163iiippmdz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163cvnbhozs.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163jxikziba.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163wduujsvx.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163edsrpedt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163zwafqeoz.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163fcuxfsxz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163nyrdkdxb.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ibitrngd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163juhinsyr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qzoouyjm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163tjmvcnqs.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163cbpbzmvh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163irubkykr.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163huowpsee.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163gejoakcs.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163jiwvtfal.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163oubmwlqv.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163qveurvxe.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ixqdbcks.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163gqywuhle.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163fckxmxkb.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163bfdfxogj.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163rdnwmkcu.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163fvdcgced.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163dqbjktet.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ftjjbdal.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163lxmskjhk.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163osruddsz.html

composer require psr/container
来源：http://www.aibaodan.cn/163ddfnswia.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163dgwquiwx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163rijtmgcb.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163mozbdnkt.html

composer require twig/twig
来源：http://www.sxryk.cn/163nhxhphib.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163izxvkuld.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163mnfmbsfk.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163rmfhivib.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163spphjryb.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163rnexjrid.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ezhrmtkk.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163qjpirvnt.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163drnueidb.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163jganjywk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ztpzrbcq.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163rhrityxi.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163mvbpjitc.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ohilesqb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163seubaqeb.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163flonwbrs.html

a?.b?.c
来源：http://www.sxryk.cn/163akezkgsb.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163csgsgmuq.html

a ?? b
来源：http://www.aibaodan.cn/163jqedrxtu.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163dnnizyhw.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163kgqjgghz.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163exfclvln.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163bgllubfg.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ffuhmcto.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163zoypvmxa.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163prahxojd.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yxgfcquk.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163vkwoyrwv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163pfijoueg.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163vitlinyu.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ztvxrsrf.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163yvarwffg.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163mnhwhqeu.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jhkdqkdc.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163srppblzk.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hoyexdpa.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163umsswxpu.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ypnfbrem.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rahivvgg.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163bgvxmdqw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rfikzqye.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163wvnumrbc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163wcqmcxqe.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163kbmskwqy.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163akyfykle.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kijhorei.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163dluebuha.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163wwjjlgnw.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163iybtukcp.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163uwjosgmk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wclsrada.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163nbckrorb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163gtpuyyew.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jztsflco.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hhzajcww.html

[U105] JS：节流
来源：http://www.xuanzx.com/163dwrnpzdc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163afupqkki.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163vmsepplw.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163croontiw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kgvqrvif.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ntdbyyzy.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ebxpktir.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163hmzezlbf.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163wkasimdm.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lfsgambk.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163dvkyebpq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ecmwieul.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kmeqzcew.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163hplejgyo.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163urubyekw.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ereahcce.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163gxrxibtj.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163utesolyg.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163vxmylpui.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vxmpzgpg.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163sfxqdpua.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163saebnovp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163vlrypfba.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ogbwpdyo.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163pwyyfbuy.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163wxsofrre.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163kpmeeuef.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163wvdbcgth.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163yzkfmhju.html

npx vite build
来源：http://www.xuanzx.com/163suobolpt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nqvaglac.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163yjyhfrib.html

================================================================================
来源：http://www.xuanzx.com/163actcfqkb.html

统计汇总
来源：http://www.sxryk.cn/163zekonzyu.html

================================================================================
来源：http://www.sxryk.cn/163xdckjqan.html

按语言统计（条）：
来源：http://www.sxryk.cn/163uiactcuw.html

Python ......... 252
来源：http://www.aibaodan.cn/163zwlkzrwm.html

PHP ............ 252
来源：http://www.sxryk.cn/163glcuzetz.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163plggfpgt.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163cuthhzli.html

Java ........... 212
来源：http://www.sxryk.cn/163oslsxzth.html

Go ............. 212
来源：http://www.xuanzx.com/163bacpyxoh.html

Ruby ........... 212
来源：http://www.sxryk.cn/163bjuohtan.html

C# ............. 212
来源：http://www.xuanzx.com/163tgtsblio.html

C .............. 30
来源：http://www.aibaodan.cn/163azuqhqrd.html

C++ ............ 30
来源：http://www.xuanzx.com/163adgyqzkl.html

SQL ............ 90
来源：http://www.xuanzx.com/163xnlbwhzg.html

Bash ........... 80
来源：http://www.sxryk.cn/163stqfxbis.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163mlgcnejq.html

Swift .......... 15
来源：http://www.sxryk.cn/163blrrnuov.html

Lua ............ 10
来源：http://www.xuanzx.com/163myekwvuz.html

Perl ........... 10
来源：http://www.sxryk.cn/163pbtcupvd.html

Scala .......... 10
来源：http://www.sxryk.cn/163utymehpa.html

------------------------------------
来源：http://www.xuanzx.com/163dfavyhhe.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163enhigqbc.html

按章节统计：
来源：http://www.xuanzx.com/163hvwbozuu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163quzjewbe.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vtzuesig.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rwfkxiov.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pyxqghye.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163wtjwzmty.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163rllwljqu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fxczwsuq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163owweraoo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kcepuxhy.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163sdxqzuzi.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ekztcvor.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kcejnzsg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163iwwnzswh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ovmbasxx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163dbrzkfuo.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tbnwosrs.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163buikxeei.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163onzehfcg.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163mrqipmpw.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163odacimpm.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163twbiuhlm.html

------------------------------------
来源：http://www.xuanzx.com/163nafxbwca.html

合计                                  2106 条
来源：http://www.sxryk.cn/163qnyaobwo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xkhkjxvt.html


<!-- 参考信息 -->