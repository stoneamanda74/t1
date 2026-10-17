外链999!wailian999！

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163cnlkvned.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163awhusfto.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163xghxfqtg.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163prhgeikw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qpkweriw.html

================================================================================
来源：http://www.sxryk.cn/163iyhzsjrz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163nqkmvedx.html

================================================================================
来源：http://www.xuanzx.com/163dykqkjro.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163vhedmbpm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ografcav.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hjgdfrhx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163yyslgwdf.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163bcluvkvq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qltcymiw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163mcltnigk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qgrbuthb.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ghvujwrj.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ohckyewc.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163yjitoado.html

{**a, **b}
来源：http://www.xuanzx.com/163ufejnled.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163sfsqjyix.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163tymzxrxl.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wjgdzfjl.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163tawfgoyr.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163pcdczuyo.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hgeerydb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163totluuwm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163orajrycd.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163efpcuqem.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jwqqcfwh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ztarphij.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vstzewci.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ydbywrdl.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163fidbgpzp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163rxxvssok.html

defaultdict(list)
来源：http://www.aibaodan.cn/163uxnyzcuv.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163dxnvjghd.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163aochgxnd.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163osloxznt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ykpikzgq.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163orbkdipf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163mabsxnjj.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163qwkavmpa.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163napaiwlb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163teuzsdaq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ufvtundy.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163muxietuc.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163bxvutvsv.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163fiehhsoa.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163xnnhkkby.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163xrkaqecg.html

list(zip(*m))
来源：http://www.xuanzx.com/163oeafnigo.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163tfnotbcj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163cceadvjh.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163latencnu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163rgafmrkw.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ozjjlqwu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163spzuutem.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ixpcdzun.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163xfiblysu.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163aehajosr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ryfuzzcb.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ifofxpxm.html

UserId = int
来源：http://www.sxryk.cn/163euttdnnu.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163dkactfjp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ygigqlwv.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163kivjaofm.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163syfxuywt.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ydxszkdc.html

python -m pytest -q
来源：http://www.sxryk.cn/163xebkqmkp.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163osyjmhag.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163zggorubx.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qijadmdy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163wrmxrxam.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163yljmgiha.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163gakarxax.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163aqfxwzgv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163mvizsjha.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163aiabhxjd.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jatktyqq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163odtbhesd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163tisiwwlv.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ccbrmiua.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163rtouyrae.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163rvxgbgng.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163hxryhhps.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163kvhaldlf.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zgtdqdsa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163lwuqboai.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163xyttyvbl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163peoylgxn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163qztmubjx.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163fcvefdjt.html

namespace App\Http;
来源：http://www.xuanzx.com/163vavxgoxc.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163qfrnwwnl.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163cuoavomq.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163lnaucrla.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xuyuoycp.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163gqvbxowi.html

?string $name = null
来源：http://www.sxryk.cn/163amrxjuxb.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163nagzuxev.html

int|string $id
来源：http://www.aibaodan.cn/163iulllozq.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ygmzpcws.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163klmrhyuc.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ljxbbpab.html

public readonly string $name
来源：http://www.aibaodan.cn/163xxytgfgj.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163yzexijhk.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163kxbqpjhj.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163qypktwoh.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163anokihvp.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163xsihoraw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163flcckpgb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163fszswhex.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163yucgvapd.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163clsimten.html

$obj?->method()
来源：http://www.aibaodan.cn/163aaifvukd.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163eyskdmln.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163cpzxjrps.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163yfaamjjo.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qqmxvatp.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163msdcahra.html

"值: {$a}"
来源：http://www.sxryk.cn/163blybkwwe.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163pyaqldri.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163cmdbjgvt.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163fjvzbyhf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163cesswitg.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163elfqzfzk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163icyyncvr.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163evtpqorz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mfhkgviz.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163mlnawxna.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163hfhlwexv.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163cgrgfcaz.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163afjjqnhe.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ftibkuha.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163nqfrgrmv.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163zcjwbeul.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163crlqdelg.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163jkducyrk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163mqdyssbt.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163pysqcnvl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163hneyahgt.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163sqlazbde.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163qxbjxvni.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163opflaslc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163jdazhjqe.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qwjgmwkt.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163qipcohhn.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163cpyejoep.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163aperiqhl.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163fefnrymy.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vpkelbbh.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163vnpkuolk.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ayfgtkzm.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163yovlyhha.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163xsemkwcu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ldyojhxe.html

composer require psr/container
来源：http://www.aibaodan.cn/163uyelbgix.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163eyhjbeyd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163qiketwqy.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163emvisjke.html

composer require twig/twig
来源：http://www.sxryk.cn/163yoednvfq.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163iqfcdxij.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ogpqiiam.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163laonwaop.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163lhxuxhrd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163mzxyvmcx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163trsvlbbc.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163vmplcfin.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163vzinyijp.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163kflxyrtb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163vpnxzsvc.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ealmvsnt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163prtmuono.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163qhpksjtt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163mzysqdjd.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163xeoyjqih.html

a?.b?.c
来源：http://www.xuanzx.com/163vmugydpc.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163eshcqgpk.html

a ?? b
来源：http://www.sxryk.cn/163dmytwafk.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ussyzjuf.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kjvqrbjs.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163qqdeimkv.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163yhcccrjv.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163dfkkvegp.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163yqbphthw.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163pxagtgzw.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zqabarpp.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163kervfouu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ayiuwlux.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163oqodwhwd.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ezalmjtr.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163oiocthgr.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163lgwvszji.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163mlalvqav.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163zdztbvup.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wgsdiuoj.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163kpucvmog.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163vcuoqmwz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163frcxcgle.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163rpuaodwp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163warlezdv.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163odkgpfnu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163pwfalhkd.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163pewjotvu.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163igncjsqx.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163zqspyetj.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163fporqytj.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ttbbcdho.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163kafuhokw.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163sezdettu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ccydhinf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163nszhmyxv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163gqrjqoni.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163veoabgew.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163spqjkktp.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ixffxspy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163uuqukhyq.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163pbjfwkcy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163miprjfcu.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163gxmcmhcf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163qjzpqdns.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163jpolyssy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163vxhyswwx.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163tqgzmiuz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zgirayyt.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kenqxnjs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163yjwahqwd.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qusqvvhz.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163yykkdbzu.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163hgkkjlpe.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163gmliyqxp.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qxuqrbam.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jsdmicsu.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163eeecyepv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wcunqvjr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163rwwjdrky.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vqnjrvhh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163mjvxfvxq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163kgijzqme.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163djcjuskh.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163gnilbnee.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163njlalvpd.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163kcpvoclp.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163wwjnjxmp.html

npx vite build
来源：http://www.aibaodan.cn/163tpcwtukn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163zvqtbuqp.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163hzwxngtu.html

================================================================================
来源：http://www.sxryk.cn/163sqempyyb.html

统计汇总
来源：http://www.aibaodan.cn/163kqovftwr.html

================================================================================
来源：http://www.sxryk.cn/163ufhtxtjh.html

按语言统计（条）：
来源：http://www.sxryk.cn/163wzgyonfn.html

Python ......... 252
来源：http://www.sxryk.cn/163xiznfhas.html

PHP ............ 252
来源：http://www.xuanzx.com/163qchduzcp.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163oomsbcvz.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163pglwdxqd.html

Java ........... 212
来源：http://www.sxryk.cn/163qyhwvevj.html

Go ............. 212
来源：http://www.xuanzx.com/163unnoelbw.html

Ruby ........... 212
来源：http://www.xuanzx.com/163cnwudvri.html

C# ............. 212
来源：http://www.aibaodan.cn/163ashgrslo.html

C .............. 30
来源：http://www.xuanzx.com/163cnfrkthu.html

C++ ............ 30
来源：http://www.sxryk.cn/163jlytvvfs.html

SQL ............ 90
来源：http://www.xuanzx.com/163rzhnexcg.html

Bash ........... 80
来源：http://www.sxryk.cn/163limxslkc.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163gynornjg.html

Swift .......... 15
来源：http://www.sxryk.cn/163uesdlwmn.html

Lua ............ 10
来源：http://www.xuanzx.com/163pyjxdctp.html

Perl ........... 10
来源：http://www.xuanzx.com/163aupdlqfc.html

Scala .......... 10
来源：http://www.sxryk.cn/163blzklytk.html

------------------------------------
来源：http://www.sxryk.cn/163wrdfetqo.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163fkjttape.html

按章节统计：
来源：http://www.xuanzx.com/163mkiodezz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mgkiqnzj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163toarnfhe.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cbesiupq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mcfxqivx.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163hfumvsdm.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163xkdjnlpz.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ugriqlqw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163rcqatrkv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rucpxsgx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163nhuceclg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cexeogfk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rbtohgct.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163apcozxso.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mhhblcnu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163fcxwwyng.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cecjqjhl.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163hhpauoxh.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163svptnmfd.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163fecmwugq.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ogshyqkp.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163uzeytksl.html

------------------------------------
来源：http://www.sxryk.cn/163mmwwxpmf.html

合计                                  2106 条
来源：http://www.xuanzx.com/163yadjekml.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163gtqocoxw.html

使用提醒
来源：http://www.sxryk.cn/163yffelucm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zdqxhqzo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163owxkiieo.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163lccvxhhx.html


<!-- 参考信息 -->