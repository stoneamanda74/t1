外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163nqnyftxx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163melfpylm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ppwwgiru.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ahiwemig.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mozoeqpg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163npmgkapo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ykvzgrot.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163dspczuxo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xjjrhuhx.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qmtfhtpj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163vkptjzna.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jwsvlydr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163temltqbz.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gyyvqxfs.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163auxhvbho.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163oterqvhe.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163nxsuduxr.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163rtppnsdd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163vrhlgwpn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rphqeise.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163tcvescjz.html

================================================================================
来源：http://www.sxryk.cn/163uhhlmtxk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tulcvcam.html

================================================================================
来源：http://www.aibaodan.cn/163ljchfhqj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163honpbxqd.html

println("Hello")
来源：http://www.aibaodan.cn/163lwkmzzye.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163iyrsiryd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tvmmdcge.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163mynbafbz.html

"值: $b"
来源：http://www.xuanzx.com/163urxdwojq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163elmegypt.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wgzcoovm.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163grfsotwe.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163bkwtafmi.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163eaqizyjv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163lcwswpxm.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bfqyehjd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163yixeutcf.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163galjmdin.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163elvmvvjw.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163owkwnubz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ubfmkyaz.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163oeaxkncz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163yenydign.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163awrjccjn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163cksdzvaq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163duhqbajo.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163akcwukgd.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nizadydh.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163jeeijsxt.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tjrnudix.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163emjgpzaf.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163zdvfwtgj.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163oukmrgqv.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163obqdrhwc.html

print("Hello")
来源：http://www.xuanzx.com/163lynkmybo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163oajcvzfz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163auxefees.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163rvitodgc.html

"值: \(b)"
来源：http://www.xuanzx.com/163nqxpqjhn.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163pgzxylyb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163zrkdkgpz.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ftjsdfhl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163llxgzruz.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163gmrspecs.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163zcegqqfh.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163sdgzirhg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163dxthqgvj.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163anmkdpws.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hspjdmsq.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163oodflqfv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163usoffzag.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163geybqgyk.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nfvtoniq.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ctnfcfvb.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163lfcadgke.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163udscdtdz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163zsntbowi.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qrbmqaaa.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163atdhmxqd.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163xeebgbsd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hcqigvgp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163itbgtijf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rbgtsonk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163jewqvvxq.html

print("Hello")
来源：http://www.xuanzx.com/163kzxetgnw.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163aeznpkej.html

local a = 1
来源：http://www.xuanzx.com/163tjihgpvs.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163suvttvbg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163fgdolvis.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163zjwichmi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163cbydejjc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163qjxymeyp.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163lurupxzs.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jfhuwdar.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163vaeyykrt.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163eaetdokf.html

"a" .. "b"
来源：http://www.sxryk.cn/163hmbxzhxg.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ymwaqqhv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163jmvbvwzb.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163oanoqter.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ozixnzgs.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jsbvgjox.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hrqqvkrf.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163iorbmcga.html

print "Hello\n";
来源：http://www.sxryk.cn/163hckanzzi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163soguahhc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163gkpfcomi.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163jpbuiaat.html

"值: $a"
来源：http://www.sxryk.cn/163pfjelmbd.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163tgstasax.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qzmpgcto.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ajuqjdpg.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163disxlchs.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163wdymkujk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163mjkbfsyr.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163cnvasfyf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163cwstxbik.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163trtyeofs.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bszogcpr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163kpywocwj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163tvdtxddc.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163gvgmwpmi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163thbmvclk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ismphwem.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163memezrbh.html

println("Hello")
来源：http://www.xuanzx.com/163nykgodqw.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163qcpauvuu.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163iqvrjpiv.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rshzirax.html

s"值: $b"
来源：http://www.sxryk.cn/163hoyouvvx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163rldjxnba.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163pptbrkrq.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163dhywctus.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163aqavsitu.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163gyfsztat.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163trfebedo.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163amhayihr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163hiuunere.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ygudlvvt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163tsrhaxfi.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ckwswarw.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163lnciulwf.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163onfyqtam.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163aparjftj.html

================================================================================
来源：http://www.sxryk.cn/163xjopoawn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163cjyayyhz.html

================================================================================
来源：http://www.sxryk.cn/163hsyrmthf.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163fokcjlit.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163epbsnaoe.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163kigjiggi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163htzpyqui.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163scswnoot.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163dirckxmn.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163fprxjtip.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163lywsrpnb.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163dyzpzmkj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163megshbzh.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163douijwfb.html

{**a, **b}
来源：http://www.sxryk.cn/163wqbdruee.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163fzsitlwh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163phpkqswu.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163iaqxvrta.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163uxbkzdam.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163vftzidyz.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163frwjzgrv.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163yxxadupo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ytlamluk.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163wuirufuo.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163maxagmzh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163chaujegs.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163jdnomjsx.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zmjjjnga.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163tfjjjewp.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163utpofqet.html

defaultdict(list)
来源：http://www.sxryk.cn/163ktkiuedn.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163wfudsblr.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163bifvuiuu.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hsasblrr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163tnludwms.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163vvqimbzv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163jniytksh.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163auosjuzi.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163kclgmkjy.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163faplufch.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163famawagr.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dpbnmpir.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163bbsxelym.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163rjiyfddo.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163dogjqotk.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163igsvcdyp.html

list(zip(*m))
来源：http://www.sxryk.cn/163gjolmxgf.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163efqvfpgq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163mrzuhvjx.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163pzgcfpfz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163rlhoovpc.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163jvpzozry.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ywwilahp.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163gwnbfzyb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163upnuzscp.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163vxuxeonz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163vuwssxfp.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ynfnymsp.html

UserId = int
来源：http://www.aibaodan.cn/163qljwewqn.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163jpkbgqxo.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163udyjpnip.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163uhlrbppx.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163fflhibcv.html

[U31] Py：单测
来源：http://www.sxryk.cn/163fsqtkedd.html

python -m pytest -q
来源：http://www.aibaodan.cn/163mtccyoar.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163hjqyiizw.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163onnaknvl.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163mirewtqs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163edrazmlh.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163wjwbylxo.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qsjgfjyv.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163auxvdtnd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163gbltuhpa.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163itimlcuz.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163jpbnnrdo.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163wnivrkuj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163xgtozybm.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163plkcucdw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163fwcmxizf.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163rmxjzzox.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163fwjnhymt.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163sxqsnasr.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ohpdkfkh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163gjojbpyd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163oissdkgp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163jmfduiwx.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163jdxgtozx.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163czbwxxkq.html

namespace App\Http;
来源：http://www.sxryk.cn/163mqdnirxi.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163bkxxrykc.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163grojcjij.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163lohaqffp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wmigdruw.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163xjxkzphf.html

?string $name = null
来源：http://www.aibaodan.cn/163iroesycv.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163jpgezwgh.html

int|string $id
来源：http://www.xuanzx.com/163lucazedi.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163anupauxj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ffgnvuga.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163xabkbcdn.html

public readonly string $name
来源：http://www.aibaodan.cn/163ezohjlfa.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163igqvgrnb.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163dwjxdovq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163djipftrk.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163oqzjxdct.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163qhlmwbaj.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163czgdenug.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163tqdlzfqc.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163untpcvgt.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ywimmrxy.html

$obj?->method()
来源：http://www.sxryk.cn/163boswurht.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163iqlsmkfc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163zayvrqnk.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ioolzyzd.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rcrswddv.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163laccvnvb.html

"值: {$a}"
来源：http://www.aibaodan.cn/163lyndzqoq.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163bdkgggxa.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163pthlhfqu.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163mpoiakge.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lpcxwqly.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163yzuuaaud.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163qxitkydu.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163gktnbixz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vggxvjsd.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163meipoina.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163qcvcvckc.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163jsdhfset.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ueghnwqe.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163akdtfjhx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163caybghjx.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163neuczhuf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163cqrccrls.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163paqzbiuh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163gfykqsah.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163vzourrcv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163hhawhokg.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ktusdlkb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163iedufziu.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163urteavnk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163omeoczwo.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163xqtxscjm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163xcunugan.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163zzgdexcf.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163adymptbj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163perytofh.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163irhibktc.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163pxzznbrx.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163iuobfoze.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163kwqaiirp.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163fldncggf.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163uqgnrdzh.html

composer require psr/container
来源：http://www.aibaodan.cn/163lihlhptb.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163bmjbtxhn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163kifmkvsl.html


<!-- 参考信息 -->