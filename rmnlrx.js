外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ygqpieax.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ihvdsfkh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qsvjdywj.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163nefpjaet.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ybhurlqw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vxrthhcm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163eovevfbg.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cxljyhee.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bicgduth.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kftaocbi.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163iyjgisqq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tygotduz.html

static int counter = 0;
来源：http://www.sxryk.cn/163toqvbwfo.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163sqjoukwr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163bfuwyask.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hjknaopa.html

#ifndef X_H
来源：http://www.aibaodan.cn/163oqtqflxd.html

#define X_H
来源：http://www.xuanzx.com/163hiwmfbmr.html

#endif
来源：http://www.xuanzx.com/163wncznprz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xyibobhw.html

#include <iostream>
来源：http://www.sxryk.cn/163iwtoijku.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bmwvvrib.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163valfwahv.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163noukzwfq.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163iehlcmgp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163imsmsafn.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163fhpqusld.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163pkjlshxi.html

[S35] C++：map
来源：http://www.sxryk.cn/163brakqdtr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xocusxsw.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163aaixxyxl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163avzouvam.html

[S37] C++：set
来源：http://www.xuanzx.com/163hzmwauyl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163adhchnkq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163gpesxemo.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163mpxlpyst.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zhjfjoqp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163eoavcwtk.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163pbxzujai.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163crvhlwqe.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163dveoempb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ndmogzkn.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pxptpfwq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163aztvwfli.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163orahghii.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hksvhghy.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163iqkpydyt.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lgugucgn.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wzetlfgj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rjoymelj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163nlqjebrz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163miguuswg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xzobgglj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163edqxiltr.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163opvufmfu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163eflkesvj.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163crmmytbb.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163qigqpkaf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zuiztuvj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163hifacnbe.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163audoudxb.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163oauesvdw.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163yscvjrbo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163okaatomg.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163iswptzfy.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hxudpdbx.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163znlehisc.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xoymwtae.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ykdszfxy.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163qumfazsa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hdfbzoaa.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jsnherdf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ubjkegqv.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163toiuasiq.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yaqtbpdt.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jrhqlpog.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dutvtddc.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163snvdckpt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163tblzhrza.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163pipplysm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hcxvrthc.html

================================================================================
来源：http://www.sxryk.cn/163tbhudxeo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zuksobfc.html

================================================================================
来源：http://www.xuanzx.com/163polgbklg.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163uexbvcdi.html

println("Hello")
来源：http://www.aibaodan.cn/163hlinjrsp.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163pigvvanp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163aykloact.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163iihntsni.html

"值: $b"
来源：http://www.aibaodan.cn/163doqvjufw.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163xxcleobh.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jsyastlw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163comfspjf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163behnnqdo.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163sxgeptcw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ygrxjnpg.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vfetknjx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cvobzajh.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qrvoczgd.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163idcfvxio.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vrxsgcjc.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163aefyfbka.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163uabhbcfw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zkyzakqe.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163bkobhsnw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163gxhcrisz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163xpormrba.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163irbzxwfz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xjoaqpmo.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163iphjbpvm.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qceyqznk.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163bszvertv.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163bpszbyqr.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ihlvmzsv.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163kssrsqol.html

print("Hello")
来源：http://www.xuanzx.com/163sdkmgpwx.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163yzuchdox.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163dwbbhszq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163miphevfd.html

"值: \(b)"
来源：http://www.xuanzx.com/163qmzpnxoq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163fxsdrmqf.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163eawiqeet.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nfcchhww.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163rkqlikho.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163kbpgvwla.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163vylunqzn.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163agqlmihg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163tysruvgh.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163jedrhsje.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163nffmgfng.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163hxtpgfov.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163lkxmnxkm.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163gebjrsim.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163iuzfqjqx.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163azpdqcbv.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ntpqosep.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163aeuuanjj.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163mtyxvgxr.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163sfebuczl.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163nighxsyg.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163xipuvnvr.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hloxriox.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ykunhryn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hxdukiuc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163kmildvee.html

print("Hello")
来源：http://www.xuanzx.com/163xxecgkgx.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163eixaoejj.html

local a = 1
来源：http://www.xuanzx.com/163rnazmitb.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163nidiieaq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163qgfqitcf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163fbrjzafn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163whehdxgx.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163pexiamgm.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163glkwbycr.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ttlrkcvr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163zrvdhblp.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163jbmbxvgu.html

"a" .. "b"
来源：http://www.xuanzx.com/163axgwyyxu.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163jnaipaak.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163knapjido.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163snmkspeg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163gjjfdfme.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163uhnkcgzf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vpvekeuc.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163lvbsnuem.html

print "Hello\n";
来源：http://www.sxryk.cn/163xojsucbd.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163rtzlehqs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163epliwzti.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163aqyokbti.html

"值: $a"
来源：http://www.sxryk.cn/163uxidfvom.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163onhulexg.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163gpqgssqb.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ylrvsmpn.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163xrijugwq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163rnsghmll.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163lkajavxi.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163hvnusztc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163byuqpdcs.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163qmlvgkjz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ucptxidp.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163gzetciox.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163pwaamtfw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163xudvevnv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163htvbgczm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163tfiylvol.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bazbiywg.html

println("Hello")
来源：http://www.sxryk.cn/163stawxfjk.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163eosifqav.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163tneftjnv.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163kekmhdei.html

s"值: $b"
来源：http://www.aibaodan.cn/163jzqgzrqv.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jzwvrkle.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163gpytgpwv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163vwmaogex.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163cdoimjzi.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bqhukbwt.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163irjhscoa.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163frwkhuly.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163gpxdsdxs.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163dkxiwgvi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163icavcmos.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163aokblqyp.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163mwtrgnkc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163pbcdaugs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ftyrrdcu.html

================================================================================
来源：http://www.sxryk.cn/163oohxzucr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163krsonbuf.html

================================================================================
来源：http://www.sxryk.cn/163dgedqpkg.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163yebatggj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163rsptqwge.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163wdhkihnq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163avpplkgw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163fqjludup.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qvlmktpz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163anhnucln.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163dzqwveyj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163bfcwbehd.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163arwslbid.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163smmlwxpf.html

{**a, **b}
来源：http://www.aibaodan.cn/163ivntaxtd.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ordvmrqk.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163twhlsxup.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163vdmnmvig.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163matlcjzj.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163afmxnbcb.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163czaqphtl.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163rioqmmlj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163pjadmwac.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163jpqspsov.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163cdygarnn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163orxulmoh.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vzcstmts.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163tgfvhdgq.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163fsytvaot.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163dhmekzkp.html

defaultdict(list)
来源：http://www.sxryk.cn/163ookxsdrg.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163lndqtxbi.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163abkzyohy.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163lrszmzcz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163umtgedya.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163llxakpfs.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ugmuozff.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zqxppgkn.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163elahjzlp.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163qlcffqiy.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bcyxbdmb.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163yuzzxzhj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163bvvynnpr.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163pxrktedp.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163spcaugna.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163zcsckhwl.html

list(zip(*m))
来源：http://www.aibaodan.cn/163idijinyl.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163oneyzgew.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163uvrgnawb.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163nzamqaux.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163beiblzlg.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163okukrcxg.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163qtuofhfy.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163jtxxpmlq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163zhrxbuwk.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163erhdnsso.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163efftnhty.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163izvckveq.html

UserId = int
来源：http://www.aibaodan.cn/163rwqrumcq.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163lijxcwnw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163stlsfavq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lbgidhfi.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ptguvbio.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vraxvkkl.html

python -m pytest -q
来源：http://www.xuanzx.com/163hcoywyky.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163cssbpwoa.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ajbbhgjw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163zhwnrott.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ycfqolbu.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vglefbbc.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qfznrjpj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ytffxsoj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ajyavopu.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163bqjeoqnr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163fytbngmo.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163vcgzsxut.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163nkbcdnhd.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ylqwnsvy.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163guiweogs.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163fmsixbyk.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163nmbjysjf.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163wouowuwq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wwhzqnav.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163zygepxjg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lkrbhemv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163cdbvpwzs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163lyjseulg.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163uksyvzai.html

namespace App\Http;
来源：http://www.aibaodan.cn/163vseiwqzn.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ljvtoqri.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163gywtvllr.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ycfsiatn.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mqeemojn.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163frjclryb.html

?string $name = null
来源：http://www.aibaodan.cn/163maxufutl.html


<!-- 参考信息 -->