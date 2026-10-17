外链999!wailian999！

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163pguhwtln.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nikgrwty.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hoihihbt.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163iinlprqv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wlkjdnnw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163sgytqqfj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ekstgtsg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fftddabs.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163aesrxjap.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163fsmeyzmq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163mxbxeyjf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163zycnzdtl.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163xpzrjmfl.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qxlxmfxi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163sfdyhjov.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163nvzkzlou.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163nkafxrpo.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dnsdvxyv.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jpuflfit.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vselshhj.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163nisipyxi.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163qpgnjhhn.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qxkohnia.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rozfsyqt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163dmsfdthz.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163arjxdnur.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163tikpxowf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163miutcmeq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bvsncmws.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ctuinugj.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163grgarjhp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ifdznqyf.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163wsyqblsv.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163kymxsndk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ligabzun.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163dtgybkyq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163rtwsubee.html

================================================================================
来源：http://www.sxryk.cn/163dijrgdpk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nkfhoxvr.html

================================================================================
来源：http://www.aibaodan.cn/163tjaformc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hpohbazf.html

println("Hello")
来源：http://www.sxryk.cn/163xmbhpeat.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163txpqukhe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163tkvflryu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163kgkevzwj.html

"值: $b"
来源：http://www.sxryk.cn/163okzijfog.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hxlshwjn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zfplzmvg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163oxkcdxtq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163snsiwsxm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163wqzpyngb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mjmvxnqq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163aldmqpnm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163rrsqtqbo.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163egriutoj.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163uojdysum.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163okomjvyk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163exayxyhm.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fhdfnlje.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163masgyecz.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ptluzbvs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163marizdhv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163chzdludn.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163zyuvjqug.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163lclvnyze.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163kdzdsiag.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163quwupyoy.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ylewppow.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163cpmdejbh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163jndzpvra.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163qgzvfwkw.html

print("Hello")
来源：http://www.sxryk.cn/163qyyxmtxx.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163plzbjzja.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ybxnkmwk.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vhpzwtsr.html

"值: \(b)"
来源：http://www.sxryk.cn/163llxapwzp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kgzpdfzq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jxkpcifv.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163drwpycaz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vdpvccqf.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163giepiary.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163bqwwhgas.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163fztwdpae.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bybpivtd.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xapqkcmb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wnpqxhof.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163jexruviu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163yawanshm.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163axnwhmmb.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nujtgduw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163izluiknr.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163avophjeb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wgmgmdyz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163dljmwgxw.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163nkubrmfb.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163qlmfpulg.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163exfdqxon.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163wwgwwtgu.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163srteaydb.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163vjgkhnyh.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163uzuoizzj.html

print("Hello")
来源：http://www.xuanzx.com/163tbukzqbe.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163qcjnnito.html

local a = 1
来源：http://www.sxryk.cn/163labqfhaq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xallcpyu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rcahhkdm.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163bnfiugjt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163nooukxbk.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163xnjychzq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163exjtyakt.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163zyhfejqv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163lfpsmwwj.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163jjpeoohn.html

"a" .. "b"
来源：http://www.xuanzx.com/163tkbnnpti.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163upyouwjg.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163hqddlspr.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ejzypeza.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qcxxjzvz.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kzbncozw.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163oozfopui.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rnlxfcnk.html

print "Hello\n";
来源：http://www.xuanzx.com/163jzufvpoc.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mjjckrmu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163pipvvotf.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163dsvzontt.html

"值: $a"
来源：http://www.xuanzx.com/163kxzutgfc.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163hoxzluxm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163sjotfrxx.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163dtsszdit.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ewlelssb.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163kkudbmgu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163irwfaifs.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163xhxpfxeu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163rnswrqqa.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jlzhkimi.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163czkobxkh.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163arzwrqan.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ilgwsbom.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163lvzwwxhl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163kstopcik.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163hrbmryuj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lmuczptm.html

println("Hello")
来源：http://www.aibaodan.cn/163zhpbyqdh.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163uktsatyo.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163wngirizt.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163hoxtnczm.html

s"值: $b"
来源：http://www.xuanzx.com/163ikbfmcra.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163sxmvnvke.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163azygatql.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163kufgbsgm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dzqgtywr.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163zljfgfqj.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163hdagkxgm.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163qwmcmnve.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163tkipkhwg.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163leslvphd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ifztauos.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163zpjqggbz.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163zxuejrbc.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bcodasqs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163spcoftuy.html

================================================================================
来源：http://www.xuanzx.com/163xsvanhpo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kdvltyyq.html

================================================================================
来源：http://www.sxryk.cn/163ndlihdeh.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163cmntackn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163pagtcrto.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wzpckluk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ympekdtz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163tbbylexb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ukguoboj.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163pcsazzkl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163mlbxffax.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163umnpcwdo.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dsoqlpve.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163napbpwfw.html

{**a, **b}
来源：http://www.aibaodan.cn/163zpykwgav.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ztvudwgw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ejvmbdgc.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163zpjxosmg.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163smnniimk.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rrxzpmon.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163fixlsozp.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163gomdfrzg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ibrbkcjq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ufpdnvsm.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163gcpgjiiy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163suwmxnqs.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163tshvzdtv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ndmkytbg.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163sdvfxhrs.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163jrmhntwh.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rmuldtwq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zgtvsizz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163fapdvglf.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163xotypcxw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ptztmqcx.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163udmqobop.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163oerppkih.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163ehqcbxrb.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xdnjxcdt.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163qrmhvflm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163yftqqejp.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ipmoyiul.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163hmezigxv.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163klvmabry.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163raqadiya.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163eyzmkgeb.html

list(zip(*m))
来源：http://www.aibaodan.cn/163bfcesywl.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ezjhanks.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163nyybpejj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xynemzpv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163umdzklyw.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zldgbayy.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ospcagbg.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163eiqrmxlb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jxoygaya.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163sbwfaxff.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zeluehjm.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163pdcoepzf.html

UserId = int
来源：http://www.sxryk.cn/163swgqwiqc.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xghwmmwj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163srxfzpzk.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163yjuhlcbd.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163tvaqgupp.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ncnaqxtp.html

python -m pytest -q
来源：http://www.sxryk.cn/163mtiizjxa.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163uptzbyrj.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ntwdjrty.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163retlmkwy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163pibambly.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ronyopdw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163puqkyoev.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163alwsxvho.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163pnpyscnh.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163xbufhiie.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163pxvjzkwd.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163gfxwmrnt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163lcczndzf.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163tfncpcex.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163aqjvjvbw.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163gklmhpnx.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163tgkxypbz.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163tmfeytux.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vxdpzeip.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163zjjgxsmh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163juduybee.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163sbjtraeq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163bovukrmg.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163iypxdany.html

namespace App\Http;
来源：http://www.aibaodan.cn/163euezsdgh.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163nebuvwth.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ijykzqce.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zqmyaasq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163itsblraf.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163guczmolx.html

?string $name = null
来源：http://www.aibaodan.cn/163rrokvsmp.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ovvrwenk.html

int|string $id
来源：http://www.sxryk.cn/163zgwyqvkd.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163hmwwbxrt.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163gsqpznmz.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163eidkxohg.html

public readonly string $name
来源：http://www.sxryk.cn/163phbwrsvz.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163yhyjjkop.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ilzxxhep.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ytfrztqr.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163jllhflar.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163bynsgvws.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163qfpbwowr.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163simsmfwk.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163kidwgqiz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zhdshdhe.html

$obj?->method()
来源：http://www.sxryk.cn/163egttebxj.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ukhkfknc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163hrtjaszb.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ynwpkmju.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ejnlwgjn.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163tjmohbek.html

"值: {$a}"
来源：http://www.aibaodan.cn/163gglsxuct.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fhxjtgwc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163bakpagva.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163cjxdqhld.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mtvrhmkg.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163plnogufj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163rkkiyxea.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163efcyzjzt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fusipupo.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163xdooonkf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163svutlwyj.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163klrtpgpg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163mxkqpymx.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163htgnkemv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163pcoessvo.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163bpvfxwkw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163lgzdneek.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ahmeiqhl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163latrimqf.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163bdjwrapn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163oyykfpih.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163naqczlyd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163krnwhlij.html


<!-- 参考信息 -->