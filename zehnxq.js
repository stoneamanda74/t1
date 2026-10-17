外链999!wailian999！

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163bmztpxyi.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163hsaokyho.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163bnbyfjny.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163neunmacj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vpipznue.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163kdtenkvp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163soolhwcv.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163khtmottn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163tntmtyaw.html

================================================================================
来源：http://www.sxryk.cn/163fgbjynet.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163gyjlccfq.html

================================================================================
来源：http://www.sxryk.cn/163oifqfqhv.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ailjisxc.html

println("Hello")
来源：http://www.xuanzx.com/163kdvjyigi.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163feexiewe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163whxobvbr.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163xebjagpv.html

"值: $b"
来源：http://www.sxryk.cn/163ikpneian.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163fbhkokgn.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163tsiksxhn.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163rdjlcplo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163gebfxqpj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xfzrmtiy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wjjipbmt.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163wulxsvlk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zpmlruft.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ypcoqqgd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163wvxhgxgc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163htgxvpli.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163kmydxfrr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163kicyioga.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ztxldvth.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163lottxptl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163qmckyreh.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qfoukzet.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163scpgyejy.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vrxrrawo.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163cjcztacc.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163slfhbwip.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xrygyxif.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ilfzucxs.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xoykxjeq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ckozappr.html

print("Hello")
来源：http://www.sxryk.cn/163fmocludc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163dcxvqizv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163jgemmebs.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163synoenme.html

"值: \(b)"
来源：http://www.xuanzx.com/163bpruwbpo.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163lyfbqxcf.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mzkfwkfh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dnukrair.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jypmtxjj.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ecetqpmu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zdsmplri.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163uyuiswxj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xhpuegwn.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163teyinniz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163yzxirzlr.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163gckjvsad.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163bdjlfcjc.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163nbixtbig.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163axtalhfs.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163sekrjwbh.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163iqmoodlv.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163olaytzmz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163gxjrtfys.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163tubrjwed.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163wzkbhbek.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vqmhxlxd.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163zffbdpga.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mqtpyazh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163piqsqsnn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163poemuave.html

print("Hello")
来源：http://www.sxryk.cn/163mendcxlf.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163madzmthx.html

local a = 1
来源：http://www.aibaodan.cn/163wnkkytdf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163bpcbopek.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163vivfekcq.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163rycaguvo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163zwxfrdbq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zdpiibvb.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163vmsszqez.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163npjharuu.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ljqcrqyn.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163jlobazex.html

"a" .. "b"
来源：http://www.xuanzx.com/163ovexmwxn.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163uruczhxu.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kxublvni.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163eirzyppn.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163fwadesce.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163oeqgsrtz.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ebshqopg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163znpmuxbq.html

print "Hello\n";
来源：http://www.sxryk.cn/163rgacmmzy.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ggakwbya.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163wkflsxgg.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jgqtwwhu.html

"值: $a"
来源：http://www.aibaodan.cn/163sqzraalj.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163nxprovxn.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ilkjgfvf.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163csmueics.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wvgiartl.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163vjsvzuwo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163xrhejorm.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ombfopkr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163kcofkoij.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xfkvovjl.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bjjhgeqh.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ifypnmnc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163elunshyo.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163gcgkubot.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ympqqzdv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163sottkhip.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163obpsnkwh.html

println("Hello")
来源：http://www.xuanzx.com/163mwhgorpe.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163dcdzvlpn.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163asxodfva.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qdzqzted.html

s"值: $b"
来源：http://www.aibaodan.cn/163pemidciv.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163opdispgv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ymigyywh.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163wrpqjsfp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rvibduys.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163zqguumpt.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163buwlgzzh.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163eyycfjhu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163niepqbhf.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163bwutrhoy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163bzcyvwqi.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163kgppdzod.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163trnkjzed.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163rrljbzgs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163lpvnqbax.html

================================================================================
来源：http://www.aibaodan.cn/163qbuvfdqb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163vdhtnrpb.html

================================================================================
来源：http://www.sxryk.cn/163tdixnrfl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ahruqfyp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163qcklbocv.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163awfwekeu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163wewdkbvt.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163cjtsnmtl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163rckizefh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163nbeeivhy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163nsebfiuj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163msynakze.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163efpqtfdq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163hpnjbebh.html

{**a, **b}
来源：http://www.xuanzx.com/163ncldtdlz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jejgvixw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163yyprgjob.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163kgpuvqds.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163zhxrktjp.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163mmsyozjt.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163biafgfzg.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163uknpwfpt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163uqzzpinv.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163qdzoimap.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163dvgvbxkh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163kiyolpka.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163amqtjcug.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163shsxpsyu.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163aqqqjvwv.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163qxzodlpq.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hlmtwrdy.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163duyltkyx.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163qcacaxdq.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163kmobzgju.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fhubvhoy.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163yualqoin.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163crrjtzvi.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163elvtrshl.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163pvccxaed.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163qlcoxoof.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163hwjxvnck.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zpigyjif.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163lqocqgld.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jsrdygtj.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163elyaqgdi.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163bsjnjfni.html

list(zip(*m))
来源：http://www.xuanzx.com/163zxuscnne.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163dtykyavo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163afjapppw.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163cncpgkvd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163orkudkpq.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ewjbjkru.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nuvecuqi.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qbaksdgs.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163kygqdbqs.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163hgjtsesb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ktwseaqm.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163guyzdnfn.html

UserId = int
来源：http://www.xuanzx.com/163gfjsutlz.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163nwmvsqam.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163iuposbxn.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163cbjqspwv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163lyrambex.html

[U31] Py：单测
来源：http://www.xuanzx.com/163igcdpcwq.html

python -m pytest -q
来源：http://www.sxryk.cn/163hkchtlix.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163sstvxnto.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163hjlizxpc.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163stemnfwh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163yzhiywsh.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163uzwdxgdu.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163qnoqjnei.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163yruftyzk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qpuobcyh.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163fixoksks.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163dbntsvks.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163bgkllpix.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163uwtbkwxw.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163wmmjtyff.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163gdjegwom.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ndsgmjzs.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163mberleln.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ienxgfwb.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vpnjslwe.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163uoxqlskz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163gmqyqjgx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163hfybgmud.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163gfolknmj.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163dxcjxqwz.html

namespace App\Http;
来源：http://www.xuanzx.com/163blrmhatt.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163djkurowt.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163nsnwgoqu.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163jflsnbvs.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ijpnyksf.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163dxllhymt.html

?string $name = null
来源：http://www.aibaodan.cn/163vtdgfmnv.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163vhowhsaz.html

int|string $id
来源：http://www.sxryk.cn/163drwgymkz.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163xuuwacma.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163yrrhiyhs.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ncaguqdi.html

public readonly string $name
来源：http://www.sxryk.cn/163nkdzsrof.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163czmqlcru.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ulemybqk.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ejnmytik.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163jqlhfllg.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163actoektm.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163pistsmxo.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163denuacbv.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163cxtbhsmy.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163bsaykdhr.html

$obj?->method()
来源：http://www.xuanzx.com/163gteaiaxc.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163wkibywxa.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163unpllvrq.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163dkqppamj.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sqtwoshy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163gjwntgxp.html

"值: {$a}"
来源：http://www.sxryk.cn/163nvzrpkgq.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163kepanxfm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163uzqtmdfl.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163utdoimss.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vxyjkhgn.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163htpljgwn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163fglmitfj.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163euatictf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163yckfabik.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163vcuaogsf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163yowqiklo.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163lezoxcsc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163taerksox.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163buqmwgpw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163jppomxxv.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163sldsdzbl.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163haskrwvm.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163mwudrlso.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163akaxqvjt.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163vqbvzefj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ceyybajd.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163tugnvznn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163talxwfyg.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163mgdurmbi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163zfjeghik.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163lmhuwgat.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163kargagjd.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163fwblcmur.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163prhhokpt.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163bmbkqcqd.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163inukzzcj.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163bpjmvpne.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163hxempkss.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163etswjuhz.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163hldqzgyb.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163vpvdayon.html

composer require psr/container
来源：http://www.sxryk.cn/163fiwukljh.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163mcnxgfbh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163bxuhmyun.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163jcthulqr.html

composer require twig/twig
来源：http://www.xuanzx.com/163bajeaztu.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ttixuwhe.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163kneuasdm.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163lfbvpugy.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163adgyimla.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ozkjwyzq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163hlvwrqic.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163ojjicyum.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163vqzmrptf.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163oxemynux.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163vqnrvzbj.html


<!-- 参考信息 -->