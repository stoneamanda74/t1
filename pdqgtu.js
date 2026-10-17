外链999!wailian999！

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163kroocrww.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163thdvwput.html

s"值: $b"
来源：http://www.xuanzx.com/163spcfgrie.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kroiwooc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163cofeezuc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163wcnxztkp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163aytfpocs.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163xkdsvrmf.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163fgchotcs.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163afmxmbxn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163iankuzga.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163pfcgcvbc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gdyxheyr.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163wmvrkqqy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163cztpvooy.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163haiflwvi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163oygydpwz.html

================================================================================
来源：http://www.xuanzx.com/163qnrracam.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qzgcvuwv.html

================================================================================
来源：http://www.sxryk.cn/163cqgjgsmi.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163bhziasgt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163uuwhtkut.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163chnfcwpz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163pemybuxh.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163slclbhkm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163lywbzbuz.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163mkrbyflw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ltnxxfag.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163sclwruyl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xusmzrwm.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163hacnqwyw.html

{**a, **b}
来源：http://www.xuanzx.com/163cmwjcwlf.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ppzhhkgo.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163kiupycam.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163jusqnkdu.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163fluspbof.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163qkbgbozl.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ijddhxip.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163subwecsq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163dhgehlmd.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163uukkcyis.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163vxfkrhvv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ktkgoxce.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mykpzrqk.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163mpozgorm.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163iigquewj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163neocczji.html

defaultdict(list)
来源：http://www.sxryk.cn/163bflcqtci.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163gxfuiegw.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163wpneeglh.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163gvinlvru.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163gnibwmhi.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xozprqez.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163drgehbgi.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163tefwsocc.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163cdxfdmrb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163jdxgckgn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ipsptlbc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163tauiqgua.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163nyvgphft.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163dcewfypp.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163menvaokn.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163wjxvgwcy.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ygypvjib.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163rovpuhxv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163myoxarot.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ghbsfuno.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163qbeforou.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163rmbusxyk.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163heoqkyje.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xnotrvuz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163tlvujsew.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ainyjqcl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163doiarrve.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jynylrmd.html

UserId = int
来源：http://www.xuanzx.com/163yucburxk.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163kjwvskcl.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163qepshnrs.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163yxotwadu.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ocqavchc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163mmzpjnfo.html

python -m pytest -q
来源：http://www.xuanzx.com/163izqyouuk.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163wysbbfnu.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163pqrpadyr.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163nlgxnsvy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163rdgvahfc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163gcsbcmfw.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163bvuhvwhy.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163vpyizfbd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163saslxxjn.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ibqkqgqo.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163qznvxqno.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ezrfgmjz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163gmwusxqb.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163kmflwfds.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163zrhelwfx.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163zcskbpnn.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163daimrvqt.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163lhdqfbsz.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163prbuyvsu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163brnnlnqy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163emeblgrn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163yohnzxdo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ioikwklt.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163czrkcqyk.html

namespace App\Http;
来源：http://www.sxryk.cn/163uhbqjfwj.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ucxsdaat.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163dchnfopn.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163tcxzvjro.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hwueijzj.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163wkbhkkic.html

?string $name = null
来源：http://www.sxryk.cn/163dzhdesnd.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163qrhyfwnh.html

int|string $id
来源：http://www.aibaodan.cn/163ibnbtqsi.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163wiqolkud.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163mvuecwgp.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163dbchlvdf.html

public readonly string $name
来源：http://www.xuanzx.com/163kcauakxx.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163uicjqpvn.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163rvwilzey.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163kwhjwotn.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163qdabxhlk.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ksaqmjcn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qcpakire.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163yvlybyeg.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163gzpnbmyx.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163upimufuv.html

$obj?->method()
来源：http://www.aibaodan.cn/163wwalqxns.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163dvpovcte.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163yuqxyjor.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163bfvwoftn.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gdqvgbco.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ucdholyw.html

"值: {$a}"
来源：http://www.sxryk.cn/163ugpfneud.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163umoyncot.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163uuypcwhc.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163bdlhgtjm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hidmnxwd.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ybcjdepd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163fevhjfow.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ldutpnhm.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kfhnvfau.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163rjysfmfn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163teapsnwf.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163andyoqky.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163gcbaghkr.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163xulfiusu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163gkdassxd.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163evtkbepr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163sdhjvzvo.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163qsjkkvxv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163jlovzoks.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163gochkplm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163wppfxwvw.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163zzfdhfxt.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163xuaeysbt.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163epjdozji.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163jolaixlc.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163lguymixo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163bhanybzn.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163gplnxxgd.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163pflsuanm.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ubwderwn.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163cctrshpo.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163werftemj.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163dbjwxihj.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163fjqmqdtx.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163epuffvyp.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163suodyrul.html

composer require psr/container
来源：http://www.aibaodan.cn/163syzqyriw.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ztebwshh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163vzlexunw.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163pyxsupjf.html

composer require twig/twig
来源：http://www.aibaodan.cn/163twjtkzmw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163gvurtqls.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163txvychlc.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cnjkafco.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163eclyomlp.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163citywmbf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163qwkwxkgn.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ubztchec.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163bfiwhaog.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ckqyltfq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163gapzjsrf.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163usuhxpuz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163kibdkfqr.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163lhtkftqm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163zyjaclzy.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163aybgjqxk.html

a?.b?.c
来源：http://www.aibaodan.cn/163vojtpoio.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163txqhkfvr.html

a ?? b
来源：http://www.sxryk.cn/163rxsszbkc.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163qqjntwhp.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163gjizkpkq.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163lscpazrv.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163wkdixzdh.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163eatrkjyt.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163kadmgxzu.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163vgknlkrf.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xcteexqf.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163xjqdsxym.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wwcefqsn.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163wrcremgy.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163qqfnxczg.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hltfoejx.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163povbawzs.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163aejwmzhe.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163qhvqsaiq.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163kujgkpze.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163elqbccco.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163viyonlyx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jkirvzcp.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163fsbbzubx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xtjacgzo.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163scquvglc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163fzeedsgm.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163nqyaaoqk.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163nqjowmdn.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ixykipbg.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163mhcoveyd.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163zzgotdeq.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163xbrubsaj.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163pmhvapip.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163vssfuwsn.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163spfheuew.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163bqlbiivt.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163lvsvsdxe.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mqoniqwy.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163yehiugrd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ekgpfrvi.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163yxrvdlsc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163svsobcgm.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163itsjvfqh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fqrkxkfp.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163didchxbk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qzqvdgch.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163uuuzyokm.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jbfulnzz.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163gatbumde.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163fndbemgf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163yyaslusg.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163rsszthwm.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rdqvpiqy.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163vvbhcike.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163waquideg.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mmgyiror.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163rvixjude.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cxkyhumd.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163etewsiwj.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163ndhesolt.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163mfjygevc.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hojsfrsx.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163pgmgptkj.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163uishvxlv.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163yzvnskzw.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163zxkfsvfm.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ynguzwto.html

npx vite build
来源：http://www.xuanzx.com/163trgefcvr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163hjipdcgf.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163uyhhdgag.html

================================================================================
来源：http://www.sxryk.cn/163bcfaaqcd.html

统计汇总
来源：http://www.sxryk.cn/163kblmztzh.html

================================================================================
来源：http://www.xuanzx.com/163zidocjod.html

按语言统计（条）：
来源：http://www.xuanzx.com/163asfhukjy.html

Python ......... 252
来源：http://www.aibaodan.cn/163ipujtztu.html

PHP ............ 252
来源：http://www.aibaodan.cn/163gvgtldkh.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163xcfhcuic.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163efwvikqr.html

Java ........... 212
来源：http://www.xuanzx.com/163bqhzqjnx.html

Go ............. 212
来源：http://www.xuanzx.com/163emzzgyzm.html

Ruby ........... 212
来源：http://www.sxryk.cn/163qzexdghm.html

C# ............. 212
来源：http://www.xuanzx.com/163euhfjsgt.html

C .............. 30
来源：http://www.sxryk.cn/163ivuxnadk.html

C++ ............ 30
来源：http://www.sxryk.cn/163qtaifmfm.html

SQL ............ 90
来源：http://www.xuanzx.com/163ymvsxyin.html

Bash ........... 80
来源：http://www.sxryk.cn/163loaeaqbn.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hvhskhla.html

Swift .......... 15
来源：http://www.xuanzx.com/163mkyapjkw.html

Lua ............ 10
来源：http://www.xuanzx.com/163mbxtbxpz.html

Perl ........... 10
来源：http://www.xuanzx.com/163vdwjayjo.html

Scala .......... 10
来源：http://www.aibaodan.cn/163juljzbka.html

------------------------------------
来源：http://www.xuanzx.com/163mwdxwclh.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163mhcvilgj.html

按章节统计：
来源：http://www.xuanzx.com/163fnytcljc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lqixwyvc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163orhpykar.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jlekrvxs.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qnkngfyr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163tkdqrsfa.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163guspwktw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163oiqsockx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wzzdiitd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fhsjhntv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ssibjnwf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dwtgkjix.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dusdrczg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ziyeupjv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163bwcadagq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163zuijctwk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cexvqeeb.html


<!-- 参考信息 -->