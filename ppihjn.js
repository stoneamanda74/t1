外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163etdttemp.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163akxvuhjz.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163gufmrahq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zribigvl.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163mtzlqhdo.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163auxybjxq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163pvsxxfps.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163fzobmxhj.html

static int counter = 0;
来源：http://www.sxryk.cn/163scyegycn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163coqpxvmt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163houptpzd.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zmtndojk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163rbdyjasn.html

#define X_H
来源：http://www.sxryk.cn/163gjnbidrs.html

#endif
来源：http://www.sxryk.cn/163ttexgshq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163klwzlvfv.html

#include <iostream>
来源：http://www.sxryk.cn/163efdodyta.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ukxvktmo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163pqtlrtpo.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163josbgpce.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rmxlucoz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163doavzogt.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jftbmxnn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gspazdhc.html

[S35] C++：map
来源：http://www.sxryk.cn/163klqibpfs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ttqqeoij.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163lfbvtlrm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163illzkosp.html

[S37] C++：set
来源：http://www.xuanzx.com/163yibmfgge.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bkzcrdds.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163sodsbpwa.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qhxuoxbb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163iqmqhegv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163npqvqbea.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jabfrmcf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163eqevwxgl.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qpeugvzw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163keimjtrl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163csfrgdps.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qfataqgd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mujjtkcu.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163acloavgm.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163oyyvpwsk.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163mhfxobwt.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163utzfauqb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163mvmgejcd.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163fvruqebi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jzzpqleh.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ybvmznzj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wzrhjrdq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163dqqmutba.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163pghdmite.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vglpwyor.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163lenftalv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163neoktcbm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163qzvkntcw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163mjvvxspa.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163viupgpua.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163vtpexdvz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163huqxyetn.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fyfzcekx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cqyqvrmt.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ldsznccc.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163pdjgytgs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163yafgyzks.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163oynrqclk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163reuswevq.html

[S56] C++：optional
来源：http://www.sxryk.cn/163hdfmfleh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163feltrdkp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163esuqbmhc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jnqxhtyf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163crulytni.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wifyfjqf.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163adjofwzl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163dxifihvg.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163viequnko.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wrnytvbf.html

================================================================================
来源：http://www.sxryk.cn/163qmpzbelf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vsfwyyop.html

================================================================================
来源：http://www.xuanzx.com/163osrqtpgw.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rfmpwqgg.html

println("Hello")
来源：http://www.sxryk.cn/163supqtlcb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163brsapxrz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gthcphdf.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163lkacfdhb.html

"值: $b"
来源：http://www.aibaodan.cn/163pbndhxqu.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163tqnlkdmt.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ldzsjngq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163xaipcgkh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163noctnuyd.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ofspbjte.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163usfdaxgw.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163beanasul.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hcaloqoq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163pgbxqxrp.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163txkychco.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163putzsurn.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163notcucdp.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163elmamkby.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dkmrohux.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163stietgrj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xpuzfiyv.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163nrdgjguu.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163dkypmocs.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jtzpoblr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163zhysobck.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vtnxtjuq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163sdqjwahm.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163orudgitx.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163slelkgjc.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xcvstdvs.html

print("Hello")
来源：http://www.aibaodan.cn/163yhtcmzgv.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xvyrcbcc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163cacsmjzl.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163aejnewyh.html

"值: \(b)"
来源：http://www.sxryk.cn/163atpalvot.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163rnahgfeq.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163mpeuypna.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163zmzzubym.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163bhineols.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qyqxoyrz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163mwljbhtq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163bholacoz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163iqiyssor.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163lyxvcbhk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rpmuxwtp.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163bvedjboc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163avrhmemq.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163qmkejulz.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jxjsugwr.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jkvpjdbh.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163cokmlewm.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163mzrnqglm.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163sjzpnznx.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163cnoskdhz.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163xqcuotal.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ojntbawr.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qjngqqbo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ldxfobum.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163cmvprbzx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163kolnkbyf.html

print("Hello")
来源：http://www.xuanzx.com/163qenpgylm.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ecyufiaf.html

local a = 1
来源：http://www.xuanzx.com/163tybotyqp.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163windbtfj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163qobvirmx.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163wkmfvqyu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163dryrpzrk.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qehzlvzw.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163jcclxdjt.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jtypprsu.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163dnkrkcsx.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163typdsato.html

"a" .. "b"
来源：http://www.aibaodan.cn/163pchexulo.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163omyqxtzc.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163xotbcwob.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zvcrenyk.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163zwdkmmux.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163tshocbqm.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163myytcmmx.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mxrsrxbf.html

print "Hello\n";
来源：http://www.sxryk.cn/163heqfamqc.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hophuiig.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163duajcudi.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ysdukpsj.html

"值: $a"
来源：http://www.sxryk.cn/163swihyvjn.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163sbykvuuy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163pplspaxh.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163pqbujnns.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lcoljxfw.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163kdkggfuy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163eqcmievo.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163kypqizqa.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xjgcpcai.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gazkyhov.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bncgyasi.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ktiazvwn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163sxstckpl.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163termpqdm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ccvhewrq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163kvyhlyac.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bgubwoax.html

println("Hello")
来源：http://www.xuanzx.com/163npkewmyn.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163qjffktbb.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xquljydf.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163dcjtkvcl.html

s"值: $b"
来源：http://www.xuanzx.com/163eobzpbkt.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163tnxoertk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vvadggjr.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163xpnkmjcw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163wmtwzryy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163zgivvgrl.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163gwtbmmev.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163brhsxbqr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ussjjzty.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163gfvjedoh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163oiejglby.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163anvcexkv.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163deypyksu.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wtvxxifc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163qcbzekjk.html

================================================================================
来源：http://www.sxryk.cn/163mascjqjs.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kslkdfdd.html

================================================================================
来源：http://www.sxryk.cn/163addnsjre.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163gxtiqntb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ltmzcylj.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163zxmcuzsd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zlmowddm.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163tsoxkthq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163kxaipfum.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163wkolpath.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ctdhqkjp.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163kavgzocw.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tihkzykh.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xjubvkdg.html

{**a, **b}
来源：http://www.aibaodan.cn/163prnqghka.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163nuihlfll.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163kasvxuoy.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163udvljbnn.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163bvsxpnjy.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163oyrcytnq.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163rapccfrq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163axmdxxwe.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163tdvmpigu.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ckgbhbws.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163plceiyfc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ewfwzpuf.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163rorktgre.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163auqawgbe.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163uonffotz.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163etficyuz.html

defaultdict(list)
来源：http://www.sxryk.cn/163elsnuluf.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163idvtmzwi.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163jgentqdq.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163qwodsmzh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163dysrixvs.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163orrfgopn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163nxgcrufe.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ckzdvixc.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ghsqprnu.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163xbcmgvov.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ukqyvsqc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163edjprvxr.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163wawpwxpy.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163vltpofbw.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163yghblemk.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163miugkmpx.html

list(zip(*m))
来源：http://www.xuanzx.com/163cfrczysv.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xbhtrgau.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163uauddxkx.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mjsfnbfp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163smanupht.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163mlvkoxvo.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163cbdebgls.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163whcxsfry.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163vhgdanqu.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163izeigwbj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163qoojyoff.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163qcqscedj.html

UserId = int
来源：http://www.aibaodan.cn/163vsrppqbg.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163iwpcrpsz.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163adivaqfq.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ltyqrgwl.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163mywklgku.html

[U31] Py：单测
来源：http://www.xuanzx.com/163gfvuovud.html

python -m pytest -q
来源：http://www.sxryk.cn/163yczabqxn.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163vzsarmta.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163wmwcbbbo.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163akebvtta.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163msdkyfwz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163efcopucg.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163qsimhqfb.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ttfdlvnx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ewyjnwet.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163gitfiwyo.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163kxsavejk.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163zwatwbrf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163qcgeevwt.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163oudlqlxx.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163jonveowy.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163xzkdzonh.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163djxsbyln.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163chwnmupe.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ruzqlbzp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163wcokmqht.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163xoyrcbha.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163zrtlflur.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rexfdrhl.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163zopxdrbe.html

namespace App\Http;
来源：http://www.aibaodan.cn/163rcyhybqh.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163cxmincgd.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163bksuioxy.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163hesabjer.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bfnuyyyf.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163qlbqiykj.html

?string $name = null
来源：http://www.xuanzx.com/163xfglgbca.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163izkcxroa.html

int|string $id
来源：http://www.aibaodan.cn/163ndhckxiu.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163gchkbvrp.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163tbhtrpvk.html


<!-- 参考信息 -->