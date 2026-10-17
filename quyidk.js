外链999!wailian999！

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163iwxegyfl.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163kezgoxvc.html

s"值: $b"
来源：http://www.sxryk.cn/163lplrjnta.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163veijjkje.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163xtjkerwu.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163qiuoxmwi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163dfzrwdib.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163mjrjxuiy.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163iefgcnad.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163styldjcc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ffqaiojc.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163slgklmdh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163jooflxrg.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163kbicgzhm.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163zcivpzil.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163dxndtotn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jaooupri.html

================================================================================
来源：http://www.aibaodan.cn/163vumwyifl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163jzpuxrgk.html

================================================================================
来源：http://www.aibaodan.cn/163gjikhgsd.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163hktuyhwt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163omhkrija.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163cmcxsacj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163lzccrsca.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163tkhurdne.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163lbwlvtqu.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ojxnpqfv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163jarbpshd.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163aubufiae.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hipjacut.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cnicdqiq.html

{**a, **b}
来源：http://www.xuanzx.com/163vxbojfxq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163zuvobrko.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vswrfkte.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163eaxtuikm.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163rchgwphv.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163iydshlhj.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163mpgdhmac.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163witvhusc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163kfblheix.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163elyncgrw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163wfqkxklf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fwousums.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163tzpumvqb.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163qmrxhduy.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ucfcfiov.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163czwnhhfd.html

defaultdict(list)
来源：http://www.xuanzx.com/163qeymbmxh.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163gjcjsjlz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ydtujqjs.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163mcuravxo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163aflfrelu.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163qvvfoeco.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163bmhrahmx.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163vyjjjuum.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163lhpbmaro.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163srnvfwfw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163sedbkjep.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163uyaqtacg.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163mgauyiqv.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163mxqusmtu.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163kadmzoks.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163smafhamp.html

list(zip(*m))
来源：http://www.sxryk.cn/163ankmgujk.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163vwaqwlae.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163myqxursr.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163yximthtv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163krwswpxn.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163vtnwuxaz.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ayicpxdm.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163wigvdokw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163fmqhpbbv.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163qsvityyk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ahnxrxml.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163izlkmkor.html

UserId = int
来源：http://www.sxryk.cn/163lfgzfzyi.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163yukywvcp.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163qczlcdbj.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163sznnyfdm.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163klubpajq.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163bzlnrpoz.html

python -m pytest -q
来源：http://www.sxryk.cn/163whdljmpm.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vbglfaba.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ssfdrctj.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163coulugkk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163nfwidrne.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163cdukfygd.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163nqixfjkt.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163emjbinwp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163kxwxhviy.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163jpyjujdg.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163lgmkwzok.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163uyicfree.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ivbavfvo.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163nmdidnwr.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mixpafgo.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163soceyphz.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163gpayefmz.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163khcrhkko.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ajiqvccd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163sxvxspft.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163rpuogice.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163mmzzwvqm.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163rktfwyor.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163kiumzgwy.html

namespace App\Http;
来源：http://www.sxryk.cn/163qwckysde.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163seepxces.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163stkvmyfz.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163qdregstw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163icbwetfa.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ojurzull.html

?string $name = null
来源：http://www.aibaodan.cn/163mdliuhjz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163uddhgygj.html

int|string $id
来源：http://www.sxryk.cn/163nxdeojmm.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163nobnhknk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163qkoedudg.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163oghqnnaf.html

public readonly string $name
来源：http://www.sxryk.cn/163yztfgjvz.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163xrsmrdip.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ajkuahbq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163jkckpiln.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163hrpwucsb.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163llxvztvo.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163sfhfogso.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ptngbjkz.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qqkoqgiw.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163diqrbdwj.html

$obj?->method()
来源：http://www.aibaodan.cn/163tdfujwna.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163cxjyozuc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163cvzohuii.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163thgeujit.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fzgjtyvs.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163qjxehmns.html

"值: {$a}"
来源：http://www.xuanzx.com/163ibkwhnif.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163rnynpdur.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163cwrgdqtv.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163xsuittpz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vunrppdo.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163sbbfzyyo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163lvrrpprs.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163szxzdyfl.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pmggwilc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163yqosrzsm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163xvgnzbrg.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163zojvinoa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163tyoepyci.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163yclegesj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163aeuluyqy.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163fwjifcst.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163npoaqptu.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163tyrggwbx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163toipyarb.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163kgjdxrjm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163tlxzsbsz.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163lzupxrii.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163sieyirxg.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163uqonbisw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163jghzyvrk.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ikozqljh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163jvuoglxs.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163xkgqmrzr.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163vthwlfxy.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163orixaomm.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163esbiyawd.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163qemokitc.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163dcwaksam.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163gllqbcfh.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163vrvmuqls.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163gldvqrga.html

composer require psr/container
来源：http://www.sxryk.cn/163lnmrbhrz.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ozhhnina.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163rnxnaewj.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163gyfermti.html

composer require twig/twig
来源：http://www.aibaodan.cn/163wjyzfxnr.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163enetuwzd.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163usqpbvql.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163imhidfvb.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ahjmvuxt.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163bjrmkkgi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ziipdaoj.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wlmtvrvw.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163rcvtcgtq.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ziasczgh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163srubcqas.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163qwriivvu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163qxygeazk.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163bllosvvh.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163cuuftvnq.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ldinddgg.html

a?.b?.c
来源：http://www.aibaodan.cn/163kcrvalgf.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ijvzyzwo.html

a ?? b
来源：http://www.xuanzx.com/163qynffcvi.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163vcoyyiso.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163mkixcgua.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163djyhoexm.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163ncfmwdwn.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163bsikegki.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163uopdzyfi.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163lqfgfkck.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ebxyrutx.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163gmwgflsd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163dtkviilg.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163heiwuxta.html

structuredClone(obj)
来源：http://www.sxryk.cn/163xeqorsmx.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163zrnctiir.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163vdvazigc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cemjcrez.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ilaxnyhx.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163wnbpamir.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163gijtfccn.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163okujmrbd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qbbdgcad.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163fmafrmro.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wyzehqrt.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qotrgpsq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163vkwpqofm.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163frtbcxxv.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163xurfnrgz.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jjdytrae.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163frdfnxns.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163xrjkhwkk.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163bfvhkqae.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163qlhmhyll.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ewarndve.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163wpvemzcd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163umvlzswl.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163cugespsl.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zcklrnim.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163zsioumys.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163rfamqkks.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163swnmkjue.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163vahqdybh.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163bbihgpzt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163gcfrboze.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163aiqrsvpa.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163xtkscrlg.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163vzuqfuga.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163wjwxoxbh.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163acozowrs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163wvohmbvc.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163uaprgggd.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163yvrqowvq.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ywcvctld.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163njuunsfh.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163mkmvwnot.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nhdztmhi.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163znmtgjqb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163paooqyqr.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163qrnwvkce.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163txplpgig.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ewlpkzia.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163kdxpijex.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163yyigtaqa.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163wzhxxjtj.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163tfupyluj.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163kufsaiyy.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163jhifmhlp.html

npx vite build
来源：http://www.aibaodan.cn/163iyofvkwt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163kunnkvcw.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163bisemldx.html

================================================================================
来源：http://www.xuanzx.com/163lzigcdug.html

统计汇总
来源：http://www.xuanzx.com/163jgcnfjmn.html

================================================================================
来源：http://www.aibaodan.cn/163agxmxpog.html

按语言统计（条）：
来源：http://www.xuanzx.com/163bdgnwnzf.html

Python ......... 252
来源：http://www.xuanzx.com/163dvemiuvm.html

PHP ............ 252
来源：http://www.sxryk.cn/163sacsmnvo.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163nqzholyo.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163glbikocw.html

Java ........... 212
来源：http://www.sxryk.cn/163portbdgu.html

Go ............. 212
来源：http://www.xuanzx.com/163vuybbmvo.html

Ruby ........... 212
来源：http://www.xuanzx.com/163knkbvogi.html

C# ............. 212
来源：http://www.xuanzx.com/163qohhzqzh.html

C .............. 30
来源：http://www.xuanzx.com/163ywmcmfdu.html

C++ ............ 30
来源：http://www.aibaodan.cn/163claxtzhn.html

SQL ............ 90
来源：http://www.xuanzx.com/163tefclxjk.html

Bash ........... 80
来源：http://www.xuanzx.com/163cyvxxxmn.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163stbufeny.html

Swift .......... 15
来源：http://www.sxryk.cn/163fkvyyzrj.html

Lua ............ 10
来源：http://www.aibaodan.cn/163erzzkndl.html

Perl ........... 10
来源：http://www.aibaodan.cn/163rkrvpnsk.html

Scala .......... 10
来源：http://www.aibaodan.cn/163tqnlfpgo.html

------------------------------------
来源：http://www.aibaodan.cn/163fbgakklt.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ngwwwksk.html

按章节统计：
来源：http://www.aibaodan.cn/163jwqhyhoi.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163wuyftdal.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163phpsrwps.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gutxpgop.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rbygwbov.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163rhfowidx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163agauchof.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wjqkglxv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163xunsocwi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tkcbjwfi.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163bipttigg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163zgcuuxis.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163efxkivnh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kkcffkwr.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163eprokzmu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163acrftiys.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dkpgckbj.html


<!-- 参考信息 -->