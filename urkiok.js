外链999!wailian999！

[S43] C++：智能指针
来源：http://www.xuanzx.com/163zrohkefx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163qoskvyoa.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163gjgjctqp.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163icwxmbkq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163wkytkteb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zcvrunwp.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163gclpbrhk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ccfuunux.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163nhszabar.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163oypgtftb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163yyfzzjsx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163urwtmbjs.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163hplpnpgk.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ployqngm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ocihgcgu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rujygmyx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163htmjqmbi.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163clkyiulh.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163apimrrbw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rwaafozw.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163vjkqzxeg.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xlyvfnel.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163htiiudme.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fushnmow.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163tjkiqrpw.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nsosqtqe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bdlknqaf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ysopwxlb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qgcdvmav.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163hmzipkqx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163izrjaswh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mkbzqlnu.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163dlrkqvkn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fccmivwx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163znnfaoqe.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163fkhahzuc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163lzzsbyor.html

================================================================================
来源：http://www.sxryk.cn/163sbywtvbl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ecueyckl.html

================================================================================
来源：http://www.aibaodan.cn/163tsywvowp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zdxxbusq.html

println("Hello")
来源：http://www.sxryk.cn/163ybuktlmn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163vkgmmieg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vbhbktjs.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163esqysqqb.html

"值: $b"
来源：http://www.aibaodan.cn/163ymopyofp.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mldpaury.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163hymmweob.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163okqfryks.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zweherka.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163mmkbtfjw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ayleterf.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163gpasqlgx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163bkhykkoc.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ptcrmqrb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163smyhowsq.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ozbmzywx.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hsiepunk.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163dzfhzndk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163iffoooat.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rcxverdp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mossnuzs.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163mhedziay.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163rprebrgh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nzoeuyue.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163hgkgrkrj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ccwpmmeb.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fyzvxnnd.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163apzyyaai.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163atqxmjrf.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vteldmne.html

print("Hello")
来源：http://www.aibaodan.cn/163ipwqmqxt.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163xgmiaout.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163nkxtdbdf.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kmhppgli.html

"值: \(b)"
来源：http://www.xuanzx.com/163azkdadid.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163thymllpf.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163cvqejwgv.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163osrhzxjo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163hfdiwmrd.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163knnjsref.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163tarpcyel.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163neavllxb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163fujvguvx.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163iaxluhuu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bsarpzll.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163vbnsmvck.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dtuyoezi.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163lzzrdgdm.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wnppxhos.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zewsmlrr.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163kwmpexln.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qqhymsgx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163hfozeekz.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qpbfnhpi.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163tsgqyjqd.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163jsscwngg.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vhasekyv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163qjqozdmq.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ptckcxfi.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hrjeztey.html

print("Hello")
来源：http://www.aibaodan.cn/163wvutwqst.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163rssvnbme.html

local a = 1
来源：http://www.xuanzx.com/163fdmeuegr.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163wsqvphvd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xvqpqzzk.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163khzpaihd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ynquaxtb.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163uhzbbmbz.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ionmpscz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163djwkwynf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163yecehycg.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163tcbcqscl.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ggwzqfqa.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163sjrycftc.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163gmkugtax.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ntsqqtks.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163psducoje.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163arliyile.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163tmixzcmb.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163nxabaivw.html

print "Hello\n";
来源：http://www.xuanzx.com/163gbmqyvwr.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163kdaffgpc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ivuxgfca.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163kzlzatlo.html

"值: $a"
来源：http://www.sxryk.cn/163pxbhpvjs.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163vysqtuse.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163fuiikjfe.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163mcxiclru.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qqshcjfy.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163owqkbivl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163qpvhtndk.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zpwpihik.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tjxulnfu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163wmyleinc.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xslnwclr.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ajrdtnmh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ehjaexpq.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163rqsgaywc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163wvmqiopa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163gqxylotr.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wmeqvhyw.html

println("Hello")
来源：http://www.xuanzx.com/163rkfwngri.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163bzwlollj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163emmdudur.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ttchcrth.html

s"值: $b"
来源：http://www.xuanzx.com/163atfnlckl.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gklwzpcz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163jxivunhg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163msfkfvjs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163vakjxeqy.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163mtgdpvtb.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163bfsvpzxh.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163abvykyho.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163rkhkwtws.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163pyujfesn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ipnynype.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163hsskedmy.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163cshdwpmc.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163lnrjyyrv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hjywgenl.html

================================================================================
来源：http://www.sxryk.cn/163nyqnmtqq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163vkuzgiqy.html

================================================================================
来源：http://www.aibaodan.cn/163xtwkjbrz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163todyimkw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163vyzvcohz.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163vxlhagcm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163sshbrwev.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163qsodvwlu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163yzqixnmt.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ibjcwzwx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163uqytnxlx.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xniqstex.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lgqpbfob.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163nrnatbjx.html

{**a, **b}
来源：http://www.aibaodan.cn/163urzxqxzz.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vxihyzub.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163civeqfjb.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ivctbanu.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zosgybjq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163bhvhfkob.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ziyhmpnz.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163keuemarn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163viwakipx.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163oonjunqo.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163zaggtkoh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163echcuoxp.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163dqslrhcp.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163qurjoqyx.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ayveiboh.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163exykyxat.html

defaultdict(list)
来源：http://www.sxryk.cn/163qywmypho.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163tfrmoaaj.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ixmqoyjk.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163insekcdq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163cnrddfnu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163agqgoxcd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163yuvwpvrd.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163hixosqke.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163fualekbi.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163wfyabfkh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ftqbujfc.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163junyackv.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163jhqfpgqt.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163fzzaeogu.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163gwkigrre.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163xoyoxovh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163beiwypgg.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ysaqzcpt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ryfohuwp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163fcamuemk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163lsbpgypm.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163nsjqaipk.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hecbdjoe.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163nxiuradi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163landapbs.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ehqqespr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ksacvxeq.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163cqyeinng.html

UserId = int
来源：http://www.sxryk.cn/163hcpelegc.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163hjrqbtlw.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163gqskzgws.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163rypnwsyz.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163lfhwskly.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ndtoumyo.html

python -m pytest -q
来源：http://www.sxryk.cn/163nuxfbafp.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163znvaatlq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163nwjhmcps.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rjwdemzt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163dskkoyft.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163avgwwwaf.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163xikygpyi.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163srfsjwms.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163bjgaxygd.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163epzoduje.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ynispwhe.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163cvnnyeqm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163hyanstin.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163dhmfxlpc.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163lftowetv.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163jdwjdiza.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ogpttbdj.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163yngggbcy.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uxvgwiac.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163fugtdljl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qurkwrik.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163bvtvwjow.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163eakcvvbi.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163tkuypvnu.html

namespace App\Http;
来源：http://www.xuanzx.com/163zmzfkatc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163swpeqrxm.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163eymhmvwc.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163kmwkshdk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kxyiyqxp.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163fferfreu.html

?string $name = null
来源：http://www.xuanzx.com/163mgiwkviu.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163pnntciou.html

int|string $id
来源：http://www.sxryk.cn/163dkxqgkea.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163gbtafjux.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163lvwtgnqx.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163xlceiscv.html

public readonly string $name
来源：http://www.sxryk.cn/163teivqbso.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163eaweqzlw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163pfamxspp.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ojhwsyva.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163iwdeenqx.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163uollbefe.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163xgbdzpoh.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mqduakab.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163fpjqimgi.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163pedozpgx.html

$obj?->method()
来源：http://www.sxryk.cn/163zmdeonrn.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ojwbvgbs.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163pzhrztah.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163pkxedxkl.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163otvdniyz.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163wqyflmiv.html

"值: {$a}"
来源：http://www.xuanzx.com/163xzvchtga.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zirkuxyf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163oiqdgkcm.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163wwsnnqxl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wpxiqzow.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wdfblvmz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163vcgletoc.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163pfhqzggp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163aaokhqzb.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ygljzxhg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163enfioyww.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163bsyjlfvt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163pwelxdri.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163osodoeel.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163qycjannp.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163pckilovo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163qxmdnfzw.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163zxajfpjx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163rkszmexq.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163sogxqzcw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ffrzkvyv.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163xnpzxqsd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ecbvkxvv.html


<!-- 参考信息 -->