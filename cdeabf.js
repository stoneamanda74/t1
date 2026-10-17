外链999!wailian999！

[S37] C++：set
来源：http://www.aibaodan.cn/163snzvglga.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163twtnpciy.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163gcjwwqck.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163roxaxjqs.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ktgeamsw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vcbjhwur.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xsylddsb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163grzgotkb.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163zdqznzuh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163hyugzfsh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ijrsatjd.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ojzzgplz.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hzvdvfsh.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163twzeqhrz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163mtuhyncm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ksecewrn.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xutipdiu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163tnbigzgp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163vzvtsrmp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163onbxqtif.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163iktwpkkr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mxlasfae.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163urcjfcxa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163dqmylgpf.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vrrhhmir.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163pxazialy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163aijvmrlb.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163olfvuxxv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163vxougmso.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163oqiqkxqp.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zatdyiyz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163orkellfg.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jujbrdtm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163gcxwhrdd.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bnblnjdn.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kwxkseyd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163veyltoox.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163sjfpdrtl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163fenhmxmi.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163pdkmouve.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pztbfxti.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163tfzvrvwf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163tsxdehed.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163xvnqxrir.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jlxlammk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nncjtwoc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163aaijfnkl.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163jrauiiep.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wwdwfgvd.html

================================================================================
来源：http://www.aibaodan.cn/163nkmisuig.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163kugwsinp.html

================================================================================
来源：http://www.sxryk.cn/163yuergvar.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kjiznxva.html

println("Hello")
来源：http://www.sxryk.cn/163hxobvwdp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wrkxdahq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163yhsquktc.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dvphubni.html

"值: $b"
来源：http://www.aibaodan.cn/163zurspako.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163lzacehun.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tuzvmkyh.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163sjtoqfku.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163htxrlgzg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mqkjqmkj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rnnduxvb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163vbepicoc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163qtbscnqo.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163cedsikhv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lkqwqysk.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163glevnpok.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163felptild.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163avdrefxt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163znvwkjrm.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jklofqtf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mpdtfyje.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163gmgievhp.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163kwxjanqx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nrlrultq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163aqcekttu.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wxoybxtr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hwctduup.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zjglnldx.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163fjswuucz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zndtympg.html

print("Hello")
来源：http://www.aibaodan.cn/163cjwqceah.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163qqcqrfhp.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163omjwhbam.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163wrszhrrw.html

"值: \(b)"
来源：http://www.aibaodan.cn/163oroqzgpc.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163cudzgasg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163dhacfkxi.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zexlkurl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163kzweatij.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163pbgwhuph.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163yoxehhpn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163oiadupjz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163tikkyept.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fisdnkjq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zacetuna.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163pdqqastf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xibwdspb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xganowwz.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163fexxfsux.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ywivhkba.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rwdphyim.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163mxufcqdb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ckugftar.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ewujamhg.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163lgirtukn.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163iuywsyow.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163gscwgkjs.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163qkstfmjw.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163tstquhkv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ehiifxfe.html

print("Hello")
来源：http://www.xuanzx.com/163aljpwoly.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163osnjspye.html

local a = 1
来源：http://www.aibaodan.cn/163vhdmzyio.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163tlprsyxq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163brdxjmef.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163jpojqbdf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163gqkepabh.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163gtfowjku.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163rtanzmdr.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163fcozjzsw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xiibyajl.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163naivihhz.html

"a" .. "b"
来源：http://www.aibaodan.cn/163fanluldo.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163imyajpnu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163jyxyxgwa.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163uwwzrurt.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163tzenmerw.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163wdxvximm.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163oiynejbo.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mtlhsjjc.html

print "Hello\n";
来源：http://www.sxryk.cn/163gbbylfhl.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ogakqrjv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163jluoorry.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163jlbccgbi.html

"值: $a"
来源：http://www.aibaodan.cn/163kwervitx.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163qykkbfjg.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163irpdcfuk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rczxuoei.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163eqirzziv.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gsnhfkju.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163aypkzndl.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163wmisekgy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ysueqhzp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163yslirnmq.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163iwdagbyz.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163grdrcnhw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163umhztwgd.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163jkhrswpu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163jnwzbedf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163yaohxldx.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163wfunbwto.html

println("Hello")
来源：http://www.sxryk.cn/163nvqtxzcu.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163iacbuvxs.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ncyezrye.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163oxhpottb.html

s"值: $b"
来源：http://www.sxryk.cn/163fitupobx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kdfyojmh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163pytjcbct.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163foxjtbcq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163pdtjbvcp.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163uhtzexix.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163rkiktsad.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163akdmloja.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163lmbvfqlg.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163atlzuems.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163mpovwkdy.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163uiyvngrp.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163giqmqzdk.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163hqfictgg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163linkbjbc.html

================================================================================
来源：http://www.aibaodan.cn/163aluxcygm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163trgivxzu.html

================================================================================
来源：http://www.xuanzx.com/163tiooxthl.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163cguxkeoy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163kjfkrybn.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163refsxbpk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ooupamrp.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163hwyktqzv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163iipcqxsd.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163vhjisvnu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163lpvpibmo.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163tehsimtl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qiqwdpqm.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ncmbyahj.html

{**a, **b}
来源：http://www.sxryk.cn/163dxaskwpq.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163onmqjpqq.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ybxvwqep.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ikpqbimt.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163lvzmwdzm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163doatfbci.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163clukkfzr.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163fakdpbda.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163yybzjjty.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163zfeogsxn.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163uboefitf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hyqjxelc.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163gynrzklo.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163wbcnthtv.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163mlddtdvn.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163bdzxgdqo.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rnlhvuoi.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163avxigrym.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ktsqcvge.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163lvwtgoiq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163wglxhwwg.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163nbisafif.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163gxhpqizp.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163eifcofvt.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163xuffydqq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kiqjylmt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163lwfzowbc.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163qjobbjab.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163clwwekug.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163nuriwhnk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163zcbulgip.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vumyvnal.html

list(zip(*m))
来源：http://www.aibaodan.cn/163rwwayqnt.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163wnrjeeqc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163drxgagkt.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163vnabpmwb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163sjkwtrrd.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163xkhdwque.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163gpqiftkk.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163indxdriv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163lvrqehkd.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163nvjrzyvl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163xhfvzgew.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163qmhtcnmc.html

UserId = int
来源：http://www.sxryk.cn/163qtmngkqi.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163kthjofdc.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ssgjfcid.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163wlsbicjg.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163hvkikoee.html

[U31] Py：单测
来源：http://www.xuanzx.com/163qtzdtlhf.html

python -m pytest -q
来源：http://www.aibaodan.cn/163iudamdip.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163rrlahsak.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jdtfcadk.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163wbzccckm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163bgmsskin.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163tdtwkfov.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163sdfvkqdy.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ihuedzyt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fjehrvoe.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163aglhezri.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163nqfpofwj.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163splklxoq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163hqmpimjr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163wibfkmus.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163svayummm.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ncfnbirq.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163adkcsvaz.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ecafdbfx.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bnsioxff.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163lvfznlad.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163fsfobetd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163sfeaoxpl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ilcsnhfa.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163betljwzy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163slqrfphe.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163vxxbgkgv.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163xonfcaql.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ontmrawr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bbidvxbw.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163vxieupdv.html

?string $name = null
来源：http://www.sxryk.cn/163spqromuw.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163phgppmnl.html

int|string $id
来源：http://www.xuanzx.com/163cdoxfqaw.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163sodnpudh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163hgttwaey.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163dvncgzgv.html

public readonly string $name
来源：http://www.xuanzx.com/163rakfcwxo.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163enxlgkvy.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163teiyhrur.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zmyygsos.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163prqvbbht.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xvkeoaro.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ikdnkedd.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163lvlbrvwt.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163qxzkjdzz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163chrdljkj.html

$obj?->method()
来源：http://www.xuanzx.com/163aeookmjo.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163dxkmqefg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163dlxeepyh.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163cxgbdimb.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xgvgqils.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163wsebyzac.html

"值: {$a}"
来源：http://www.xuanzx.com/163irphszmc.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163mtldzqew.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163vlzwxjoo.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163uhxisumn.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163fuzhkgiz.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163tawmpznj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163jhioadrg.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163bqvitthe.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vuhzqoio.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163gwsovbmq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163kuvwguyh.html


<!-- 参考信息 -->