外链999!wailian999！

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163jzhdkvbo.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zembsspw.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163hgtqmlwo.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ugsafatf.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163zxuhvwee.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ohsyrecd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jlkpgatt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wrlylmis.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163itfjficc.html

================================================================================
来源：http://www.aibaodan.cn/163qhwwgpvg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vxvfzsvg.html

================================================================================
来源：http://www.xuanzx.com/163ckqrdlmb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163eojigmou.html

println("Hello")
来源：http://www.xuanzx.com/163gzlgpxxw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163cydqovwa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163xpxqjjui.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zcetctsj.html

"值: $b"
来源：http://www.aibaodan.cn/163vnekhods.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163gftxcopl.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163cizntsls.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ogmgdpqt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163nlxfvaqb.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uwjblkfm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wlzyauzi.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ltsebgwx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163wmhovhqs.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fwydzuvs.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163anefpolk.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163lihdzxjo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cgjmxofq.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ydbwgdhy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gnjgwxlp.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ormdyrmd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163prqkblsl.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163arhhehrs.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163zsjzlwbj.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xpqqyosv.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163msmzjecd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ttwzgmob.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xjonigls.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163sgooozjt.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xrwngkpl.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bzfzuofo.html

print("Hello")
来源：http://www.xuanzx.com/163oixlzgke.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rlwoqloa.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163thcpfmma.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163fldpfzql.html

"值: \(b)"
来源：http://www.sxryk.cn/163kmweyedk.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dgyluzlo.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mvzvbnek.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xavwussl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ssztuorm.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163paakxopw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163bvaftlol.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163paxtvfim.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163miqsligj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rxevrnnu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bouxjmjg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163pqdiskhs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xcwwvlug.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163xehffnwe.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ywzgfopn.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zzexzvqr.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163uvfpdhgt.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163rwfqjrap.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163icejiaev.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qlssthtz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163idmxsgof.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163klxpqyzf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mmitsnpm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163vxvvdadi.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163jujgiuht.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ottnsavt.html

print("Hello")
来源：http://www.aibaodan.cn/163heounwuj.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163mypwlfmd.html

local a = 1
来源：http://www.sxryk.cn/163uvxzkpvv.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163eydwvmvx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163exvqtzxm.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163geifvnuq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163fvhwfarv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ejkqhsgv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dctxxvmp.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163occxuvei.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jmxkoqiu.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gxqdwgsr.html

"a" .. "b"
来源：http://www.xuanzx.com/163fnsyldmk.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163zwqnlzff.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163xhkalrjp.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163kswtohpd.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163vlgmqdmk.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163rotrsogp.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ztubltrz.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rkufdlwh.html

print "Hello\n";
来源：http://www.aibaodan.cn/163mkacnpvo.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163rtwdlotg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163yqecppdh.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163qoevtrpy.html

"值: $a"
来源：http://www.xuanzx.com/163ufglurcr.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163zmkfvkkf.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163gyjuauik.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163lgxvfhyq.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vchoktxi.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163vtvhfher.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xannevto.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163fktbsnjn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163jknlpjyx.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ptoqnvff.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163diksppjw.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163btxjwkwu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ikuvuukj.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163awiifafb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rgqwrzse.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vuybarwt.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163pxpfmiph.html

println("Hello")
来源：http://www.xuanzx.com/163egsdgiav.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163xpwctrhn.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ihgmotuz.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163jfpqlpkq.html

s"值: $b"
来源：http://www.xuanzx.com/163ccbfricy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163dtkqqlrz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163kievtahl.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163zcjmvyjy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163traxmsxd.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163rpwgqfxo.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163whmwzvec.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163sarvnqux.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163qnhfripf.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163auccisxg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xzseinil.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163saopukbt.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163onijxrmr.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mqawnayq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163goaeljxm.html

================================================================================
来源：http://www.xuanzx.com/163nalgtmki.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163gbaxffnu.html

================================================================================
来源：http://www.aibaodan.cn/163kxoueopg.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163clhvpnmf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163wbhpyafc.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ycsxmpjv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163nshyeppt.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163cspyxghp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163rfsmdyxo.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rbclzxlm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163fwpwlzmn.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kaspdrye.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163yuuxqxfq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163wliopxfp.html

{**a, **b}
来源：http://www.sxryk.cn/163ovlngumk.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163hmtbwwzw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163efcjmgkc.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163qmyccpkp.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163blnmrprz.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163umjoivig.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163notkjyfq.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yqooeplg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gtwtemas.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163fnygxwiy.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163jiyzejqv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163qpkgodxj.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ugelqdex.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ornvhxic.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163dnnvsgsk.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163jwsjfblx.html

defaultdict(list)
来源：http://www.sxryk.cn/163cauvsdki.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ffekykkw.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ijnbblbv.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163sgdlwxla.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163isuymmue.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163lqqgyyou.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163xojraudb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163cmzvdpcv.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bwexxlmt.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163irbzscyl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163zyakpgxb.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163dgzbwxxo.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163jeklpcim.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163obifuwie.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163nrtqhrrt.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163lthlalyy.html

list(zip(*m))
来源：http://www.aibaodan.cn/163pzbrmhga.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vnlqqryb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163vdnbytvf.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163nwhogwgf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163fgihtnqe.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163fxhwdqbm.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163jtrlchxu.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163catcxdjx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163lzykfoll.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163zbthlrhq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163fbpnxpgt.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163kvrruzle.html

UserId = int
来源：http://www.xuanzx.com/163igimpivk.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163wlsysjzh.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163tefgcttl.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zfyxuffp.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163cmjerpcx.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ngshsiod.html

python -m pytest -q
来源：http://www.aibaodan.cn/163hlcsrxap.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163aglflwxo.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ljhgeync.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163izatouic.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163goeixrdu.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163hwaqpkal.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163scebuhiz.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163kokonznx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163hgohnjyd.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163mmftljnm.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163bijkekko.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ykncvtqt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163houbnyvj.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ovispxrh.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163brlpkuny.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163jrlvkpnk.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163loozydwx.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163hnmafbnx.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qaydjjla.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163rdrxsciz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ysqdsjcj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163dguxvlox.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163sqrzsksw.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163tlzaagqy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gzokrkdk.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163mzutlkwd.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163flfretwx.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163qfvbhxkm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nfioilok.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163uthjzvrj.html

?string $name = null
来源：http://www.aibaodan.cn/163tqaqteam.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163jgvrmogw.html

int|string $id
来源：http://www.xuanzx.com/163lptuetru.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163iszwunii.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163jwnhbefg.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wurdnwtx.html

public readonly string $name
来源：http://www.aibaodan.cn/163qoooysjd.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163rotlczvc.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163jwhvhajl.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163fxndfily.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163lvvrtqbj.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163liyqqtep.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163qwmflztb.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ckymxyge.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163qodbcfjq.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163pzjswgkw.html

$obj?->method()
来源：http://www.sxryk.cn/163fbqvaetb.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163fbrhvhbh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163tkedqjxy.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163fmgieejt.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hmkggrwz.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163hdalxobp.html

"值: {$a}"
来源：http://www.xuanzx.com/163awwkexzj.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163hbvmlaon.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163cbekbyqs.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163gzdpipcw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fcqbakks.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163djjtwiwd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163mbmkpzhj.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163djicvnpb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pykwjqei.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163nqpmkweq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163alaoytsc.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163dwrpkigp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163umypzmec.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ugamklmv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163rheyhakx.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163uppugvuz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163opqxlvvb.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163lpgsvlap.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bephgjxg.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163tcikkyka.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163zkozuisn.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163vartamqa.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163nycxhtgt.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163itivrexk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163wsecdyzj.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163wlfrqfhd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163feaqyerd.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163xcqghqbf.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163taoqtxyh.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163vrxwcdcp.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163nshkrwsf.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163cizzfpuu.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163nmpbngxo.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ancpdabs.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ezvqgvxw.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ygaptibs.html

composer require psr/container
来源：http://www.xuanzx.com/163trqqmemy.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163hgukjkru.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163rgflzgzq.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163uphfqswv.html

composer require twig/twig
来源：http://www.aibaodan.cn/163mhxcdnup.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163wwohnkyi.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163fgxsfcwl.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163peqdeeig.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163sjizqpan.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163rkzkszzi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163oqukgvaq.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163zlgixnbw.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163nwsqcstw.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163lrcuizvk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163dobnwsxn.html


<!-- 参考信息 -->