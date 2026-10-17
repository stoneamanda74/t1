外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ywfcdmed.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163oaeaqiit.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ybioeeve.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mrutigue.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163wafwqnvf.html

================================================================================
来源：http://www.sxryk.cn/163cwjuqplw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tkmxqdqd.html

================================================================================
来源：http://www.xuanzx.com/163tpcfaxdb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163onjnihot.html

println("Hello")
来源：http://www.aibaodan.cn/163otfouruo.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mmtsnplg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jvibzyjm.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ommfmbat.html

"值: $b"
来源：http://www.xuanzx.com/163almdppcq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163fwzxihgu.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163pixpgktl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163tiovnryi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163mzigsiff.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163icrfrnmw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163iwuddcoa.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163rbiurjdu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163jfusueyc.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dvknrshb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163yoaazldb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ajhdarve.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163dqxadxnc.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163plnygbbv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tumespke.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163alsnkfrf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hiduxvrr.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dziewrbl.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163lhuizbkp.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ahawfeya.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163vonszxjm.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tdoppclr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ahiyowje.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xpxavwyx.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wpgdsyos.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163fvcufrkf.html

print("Hello")
来源：http://www.xuanzx.com/163rnfclbau.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163lklcdfsr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mragocgh.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163eocqpiqa.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kavzqhgq.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yxxbvwzw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163nggawwei.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hmvfibnd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163dthiaoay.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ckkzdbvf.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163fznhptdc.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163hhsiedoj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163alervxld.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163emauidih.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ffofxcmv.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ylsvuiea.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163cvwvqxgb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163eajvgcrt.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ijqfthxg.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163zraodkoe.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163yseefqcg.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163rhkqhacw.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ebltgbwd.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163szcccanl.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163rlyokmmh.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163tkvafpoz.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163wklptbmq.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163bgfwjxke.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163dobqkqpc.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hhfuuott.html

print("Hello")
来源：http://www.aibaodan.cn/163bstfrsng.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163dbcrdbii.html

local a = 1
来源：http://www.aibaodan.cn/163muelwobn.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163xrbjbvme.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163chuaxolg.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nboyhsog.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163scrktetx.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xuziutss.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163kwqvuryn.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163txfkmtyi.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163lkaowsbz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163mlwhjwuj.html

"a" .. "b"
来源：http://www.xuanzx.com/163gbfklmux.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163flfvpmwn.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ncujsmum.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163sbpcloid.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ichdmylj.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163sbryktfy.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163yqrdnkjo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163rguypyfq.html

print "Hello\n";
来源：http://www.xuanzx.com/163ejqoxfbz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163cdnypwrh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163anrzzibm.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ieiespmh.html

"值: $a"
来源：http://www.xuanzx.com/163zlizoxsz.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163gywfpyya.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163jpgzllxk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163dpzinrst.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163eddnixol.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163oxddpucg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163aecrcrvh.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ragmthkg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163oxkqqmdq.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163furxjaeh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163fzsqisbz.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163felhakzm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163yxyjharh.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163dyloczpd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163pyupyrhv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163dyopglqr.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163uhxysczo.html

println("Hello")
来源：http://www.aibaodan.cn/163hwmqalvr.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163nevxnsxu.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qnsuhnkw.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cokpnubx.html

s"值: $b"
来源：http://www.xuanzx.com/163eqcukaet.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163yaggpbzk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163sobddlfv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jvzftmpp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163kzzbwqvy.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kxqnvcty.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163kifmxbsy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163fbpykxhn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163wzbkszov.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163uzoopjgl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ptpegmge.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vqsrpved.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163wskzleln.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163lghkmaox.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163vbdthlje.html

================================================================================
来源：http://www.sxryk.cn/163zxzmisnj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ntrfegfa.html

================================================================================
来源：http://www.aibaodan.cn/163ptkolnep.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163vylsdwtk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163pklzibeo.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163gdzpuvtr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zhvcrqsj.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rvcvuqkp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163imhxfnoy.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ulynpqpu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163svfyrwlu.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163sgxjtewt.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dckxyhgv.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163kuwzpmzn.html

{**a, **b}
来源：http://www.xuanzx.com/163btndkkmv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163exvirhiu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163myrrvvyk.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163armhcryp.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163qotafgol.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163emhgtlxw.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163qxubqmxd.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ozchonuj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gjecljzi.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163rxzmskmf.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163pcbsfaqc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163otsehxtr.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163efyywkfj.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163reofeopo.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163oltlxzpd.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163kenfuhrq.html

defaultdict(list)
来源：http://www.aibaodan.cn/163aheyralf.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163isvvmklq.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163aapdqcac.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163oiaghnvt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163jteosvhi.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ujwgfhrb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qwuodohl.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163qwvaduda.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163iledjwwa.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163mpzmzcsr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wvbezqkg.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163tumfuuzp.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163acplyxdj.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163wgntdfyk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163gnhhgcjp.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vabklaie.html

list(zip(*m))
来源：http://www.sxryk.cn/163ncngpvyn.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lybblgyx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163iozagspu.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mpgcbeex.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163pcbcntew.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163jssnlimg.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163nrwxewwm.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163htgvqfot.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ojpryuml.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163cfwrnher.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163gblcsgvm.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ryztsaps.html

UserId = int
来源：http://www.sxryk.cn/163tfvudkgw.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163kiuckuch.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163gnwyrgzu.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163dcobfffo.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163exwfwwvb.html

[U31] Py：单测
来源：http://www.xuanzx.com/163wudtsjiu.html

python -m pytest -q
来源：http://www.sxryk.cn/163novznwbg.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vkpzpjbv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163hcwbucvd.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163qalkgunl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163khybmsej.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163seyxluds.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163cpwsmmvw.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163aedtlluf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ouwgbknh.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163kepsgdhr.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163bxnnbwbq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vfqvaaan.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163lagtmqhe.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163frclrspr.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163fagcuxxo.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163gxmbtnnw.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163rgrephrk.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163mdfkwwlj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163cemkbbml.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163qivwcrqv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163kadgetwr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ixzahbsg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163pfmyylrb.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163huxhejcu.html

namespace App\Http;
来源：http://www.sxryk.cn/163vibxrrvv.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163mwsulznz.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ldjimkyy.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163svkycvde.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163idmkahyg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ikcnvjva.html

?string $name = null
来源：http://www.aibaodan.cn/163pongtbmj.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163payguhzb.html

int|string $id
来源：http://www.aibaodan.cn/163udvugtbw.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ddeoghmc.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163lmwzobso.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163strlfsic.html

public readonly string $name
来源：http://www.aibaodan.cn/163cvvovhsw.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163selfpgms.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163whvrovfc.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163uygolaby.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163xwevdyzd.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163eiwcyiph.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ixfftbgz.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163pmbyrkuw.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ubhcpvap.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163aitjepae.html

$obj?->method()
来源：http://www.sxryk.cn/163rdmsyqwg.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163iacdbgfv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163blwhquwb.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163vewtnpdi.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eewrrcxo.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ikpezihi.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ulwpyqxa.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163plotsdkc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163xovahhls.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163rmdyoyme.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ycrsqegg.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163nkizlgih.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163tbkrazoa.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163hteeqegs.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gpxhcbce.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163spubsjhs.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163fovxfcsg.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163broxkxcg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163xbxxkpus.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ojxwgnvh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163aqzdhsyo.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163jsbeaktf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163lpnrtdam.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163itumbvzd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163riqhvekv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163exufavha.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163lxoyceco.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163uhcvzaco.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163yksttgis.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163bxryccra.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163invfmdfy.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163coqpldza.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163lddjrqww.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163odiwvcyy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163eufbblik.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163eljvowfu.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163yanesxpr.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163cfeorabv.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163qbqguvow.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163xholmgtp.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163gwogykuh.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163oetjexek.html

composer require psr/container
来源：http://www.xuanzx.com/163wsplajny.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163cmnjbdre.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163reyrusqo.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ttqpkexe.html

composer require twig/twig
来源：http://www.aibaodan.cn/163uiiyejei.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163zzpmyhfn.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163coyctxdo.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163qrfsnlqm.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163onwxrvha.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163qdqkomdd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163docblsbq.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163zxnntdmp.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163uruyrqsy.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163eunhhfzp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ointcvcl.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ternhgxi.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163unyepqtn.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163lsshailx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163vnntfbyl.html


<!-- 参考信息 -->