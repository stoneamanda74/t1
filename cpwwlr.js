外链999!wailian999！

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163nktzgame.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163dkygvioj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163yvqsgsqt.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ibpqkvjp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xjjcvpbm.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163hhsjumuu.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163pnxdbdzd.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163gxyusvbs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163gjexbsmd.html

================================================================================
来源：http://www.aibaodan.cn/163sljdveqe.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dcbptzbi.html

================================================================================
来源：http://www.aibaodan.cn/163cwofolew.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163tzmomofm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163erbitbdd.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163lkpzduhn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163tnddtpcd.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ucyvfgkc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dykmpjua.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163pykmdger.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163apahfuvu.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163hctnsite.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vnkliswd.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163garnfhlt.html

{**a, **b}
来源：http://www.xuanzx.com/163xwwemrsg.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163wsuzezlc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ejfuhwez.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163aadaoqpr.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163xvdjtgyq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163uxyjbukq.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163nhtposve.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ftpmymom.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bvtupbam.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fausflks.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163twkhaozf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163avrhsjfj.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163xvlwhshx.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163aztuqnkt.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163lxswsyvw.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163zgphgmyg.html

defaultdict(list)
来源：http://www.xuanzx.com/163mfchgpxr.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163hijfthfj.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163bzetxlif.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163etocrlyh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163lrpbvnwy.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cjfdoyvg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163nmqpenrx.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163mpmdrmhj.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163hbmhqlsh.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163cnplaamw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ooxmzhuk.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163kzqstaxg.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ujsmellu.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163zesgvrqc.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163oltxacau.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pbcyrvax.html

list(zip(*m))
来源：http://www.sxryk.cn/163htwrston.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163qxaoqyfl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163oiplndxp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ubzsmbsh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163hlyxjdai.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163rnhaggyj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163tsvbkovw.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163gpvmdpsf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163dhmuwsno.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vflcngxt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yzuvsvkp.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163feflwtqn.html

UserId = int
来源：http://www.xuanzx.com/163ntrasfce.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163gejibmvc.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163shnfgdeo.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163gnotykcg.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163xngqmynw.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163tkgwoxun.html

python -m pytest -q
来源：http://www.sxryk.cn/163qqqezdqb.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rbwrrbdb.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163afdbaasy.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163szhmkkhy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163mrllmwlg.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163wjzlbqpa.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163yxrrbeuu.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ybhwobum.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163wozldfjs.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163eyffbhip.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163foicshya.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163tdjnyzcd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163xrdxqlda.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163sccyucyq.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163gxfkuhxe.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xdjlbnhk.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163lsivvfbp.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163rxlnrxnf.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fnhxvqgn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163rjhyiymk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163azgjbozm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163pnjvedof.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163euaukbed.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163cmdeviub.html

namespace App\Http;
来源：http://www.xuanzx.com/163ogksqmta.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163yxywrjju.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163rmcmjmsw.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163hiqgkulh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bsxffxaw.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163obexjkqw.html

?string $name = null
来源：http://www.xuanzx.com/163caqsnxaa.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ffilrfxw.html

int|string $id
来源：http://www.xuanzx.com/163dgctfuee.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163kqsbdibu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163tcchsuaf.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163plncdtov.html

public readonly string $name
来源：http://www.sxryk.cn/163cwjqlpss.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163axhonlsg.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163gkqbgyzz.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ayztawbj.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163qezspdpw.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163dexxgqdl.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163obhwpdog.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163rzdnaflw.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163xakaerbf.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163oryhuerw.html

$obj?->method()
来源：http://www.sxryk.cn/163xaroyfth.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163dkwlzxkf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163nyfqjcdq.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ldxemsja.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fyewsgsz.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vwxxjlzy.html

"值: {$a}"
来源：http://www.xuanzx.com/163pcakcxyk.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163rktrigiy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xzqttryn.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163redzeqen.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163knknpbzo.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ourckzpr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163wcyslpbe.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163tbpzimxa.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163yazphydz.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163kefntcvv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163gyhqnktp.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163xtwzzsdt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163csxkhofp.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163fklgipxh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163uqrgxbhz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163seavoccz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163saovhsrn.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163jxujxuun.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163sgctjiih.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163romtzcqc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163bwumhfkh.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163palpmoqd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163jbjhvimr.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163jvekthhz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163qmygngdu.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163nlzgrihr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163rjfguuid.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163lziwapsx.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163popezdsj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163nbwxmyhi.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qrysfcpx.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ibmrxgyj.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163msezvxdb.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163joejakjc.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163tiatyhqe.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163lmhrtxbd.html

composer require psr/container
来源：http://www.aibaodan.cn/163vsqmzmrt.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163soituwbq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163nagljcno.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163vlsxbakg.html

composer require twig/twig
来源：http://www.aibaodan.cn/163veprxlol.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ysvnierk.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163fcdeihud.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zriqbbko.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ytgbjath.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163tdenejwy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163uuakptod.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wwxpmnxy.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163tyhrhiwj.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163osagjzcx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163iodogghj.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163xxyozfnm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163twzprccv.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163gowgofuh.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163wocibmpy.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163tkvrufft.html

a?.b?.c
来源：http://www.sxryk.cn/163kdacxagc.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163mkvrakdg.html

a ?? b
来源：http://www.sxryk.cn/163buldjldw.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163wlunkdds.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163kfyzzpqx.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163phqybiex.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163xjphppbn.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163kfcsqsuq.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ikwxvjys.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163dcvxsoyw.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jpdhzphx.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163jkusrzgh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163yxfrxiso.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163iclzdjqw.html

structuredClone(obj)
来源：http://www.xuanzx.com/163vzbfjjbe.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163tycvojwi.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163pfjrttxw.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jnhpweqh.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163jzaanckf.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163lrldxaso.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163gredxgri.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163xgvpuxzj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163iyfmhtjc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163tgjamckm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163sshsmkwa.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163zdrehone.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163nfxjbgfo.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163chqlnkdx.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163feifldup.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163qkzwrmzs.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163clopllon.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163coxdfwty.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163bxxfrpiz.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163bfitnwrp.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ilnhyoqp.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163qfxrmckf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ntilxxno.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163zkbiqrhr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163puzpbgut.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ghndexpp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163cojtankx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163kvkqukax.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163quutrhvz.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163xyokblhb.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163fkrdbbir.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163rponqeas.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163vfiahkwz.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ziiibtzs.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cxpmumwv.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163kjsxywsd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ioptfzly.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ksgabsfk.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163lqaqizrx.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163axyusuuk.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163tzsapogf.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ivihjanu.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xoddgafl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163rsiyodml.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qiibfsko.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163kyzbxtll.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163wuforjud.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163xucmgsog.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163gwsvjurv.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163shbbycrx.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163fzovqbsw.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163dlyzrufv.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163meyjwwnz.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163pjxdjilb.html

npx vite build
来源：http://www.aibaodan.cn/163hgitgqul.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163tfchreov.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ebgdqrwp.html

================================================================================
来源：http://www.aibaodan.cn/163ndmmsrlu.html

统计汇总
来源：http://www.sxryk.cn/163kwgndljg.html

================================================================================
来源：http://www.sxryk.cn/163fyyfzicz.html

按语言统计（条）：
来源：http://www.xuanzx.com/163eppebpxb.html

Python ......... 252
来源：http://www.sxryk.cn/163xetqdbog.html

PHP ............ 252
来源：http://www.xuanzx.com/163ewgzdlju.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163mexnjsal.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163xtpaifdv.html

Java ........... 212
来源：http://www.aibaodan.cn/163oamuudrp.html

Go ............. 212
来源：http://www.sxryk.cn/163ecfmscfc.html

Ruby ........... 212
来源：http://www.xuanzx.com/163gaxpwamm.html

C# ............. 212
来源：http://www.xuanzx.com/163huryynov.html

C .............. 30
来源：http://www.sxryk.cn/163fnbwmxqc.html

C++ ............ 30
来源：http://www.xuanzx.com/163oxanclsc.html

SQL ............ 90
来源：http://www.sxryk.cn/163ldkrhtce.html

Bash ........... 80
来源：http://www.aibaodan.cn/163mxmoafaw.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163hcosggec.html

Swift .......... 15
来源：http://www.xuanzx.com/163ygblidrq.html

Lua ............ 10
来源：http://www.aibaodan.cn/163lydjimmt.html

Perl ........... 10
来源：http://www.aibaodan.cn/163pzxiddfz.html

Scala .......... 10
来源：http://www.xuanzx.com/163oyswjoet.html

------------------------------------
来源：http://www.aibaodan.cn/163gbsphexb.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163vfihvtua.html

按章节统计：
来源：http://www.xuanzx.com/163fbksmngv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ieqgylvh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fczphfvt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163uaonaimf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163tjmhjalc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xgebnwha.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163sgfgewll.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163iixrwdal.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163twodaqtu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jtufbxbc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lgtvpbaf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gphkitao.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dkbezlnh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163aikemhwd.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cpckepyr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163kedojlrx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ioiktcdn.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163cwdwoasn.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163oistnsxu.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163bhanruuu.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163pxdeeivi.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163poelxhtx.html

------------------------------------
来源：http://www.aibaodan.cn/163wqxpwnqv.html

合计                                  2106 条
来源：http://www.sxryk.cn/163asvqdbuu.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pilhiswn.html


<!-- 参考信息 -->