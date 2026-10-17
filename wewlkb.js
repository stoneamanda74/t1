外链999!wailian999！

x |= (1 << 3);
来源：http://www.xuanzx.com/163gijaztvd.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jfsqmgzy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bsplqqcf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163wsbxgbqn.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hzyppdxe.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163nnophcms.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qjmgeifx.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ryvtqmru.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163iomyjvzp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ltvgpuaa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163kwrnywos.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163llkmctvi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163kethvysh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163noifjcru.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wicvgpbe.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ljlococo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163izlpnggw.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163niyrugee.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163eolgaclv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ndzqzqmw.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163nnhnzete.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ysdvnhrg.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lgepesvx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kqowrmou.html

static int counter = 0;
来源：http://www.xuanzx.com/163wsgqwjez.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ijyweios.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163aicmioib.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163sgzdkvnm.html

#ifndef X_H
来源：http://www.sxryk.cn/163nxmuonue.html

#define X_H
来源：http://www.aibaodan.cn/163mphszycf.html

#endif
来源：http://www.aibaodan.cn/163jbzyfudt.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163vyvxxtgp.html

#include <iostream>
来源：http://www.aibaodan.cn/163yjzsmrgl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zxxsrnfs.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163zyjquepf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ahpdczrw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163txsqizll.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163etbpeumj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163uogapfmc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163xmxwyogk.html

[S35] C++：map
来源：http://www.aibaodan.cn/163umvocyzg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nhvaqxgg.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163iejbhbrt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163khisyljo.html

[S37] C++：set
来源：http://www.aibaodan.cn/163lhrkkptk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163uowjhvxo.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hgsuvxkt.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163kxlzyqiu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vcmuvhsp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163avildytv.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qiyjwaim.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163eupojiqf.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163fuskltfs.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bnbvcngb.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163dggywsxp.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163sgmvzosf.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163amuqrqqd.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163gyioutab.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163choikkpv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163fwucxwmc.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jivifhko.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163zpzzbowa.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163abgvabek.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163jwxmykqe.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ufadpnny.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163bqcmgtau.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163xdpnnvuf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163omrmemmv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163elzxwuww.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ibtkzzye.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163apysaxfu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163diyjltrp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kuyxpton.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jvsvlcat.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vwaqtiez.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zbebifey.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163luwlaqau.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163qeywltmo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163edfnagyr.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163otcxguby.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163obbcbcyk.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gzkbuhvo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163kbkeqlnm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163bzetjmys.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163czofmvny.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vrzbkmal.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163befowybu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163gnamenae.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163eszrtpuf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163aipmmtyj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163pppzzfpb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163nythutmy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163duujgcwi.html

================================================================================
来源：http://www.aibaodan.cn/163demroanl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hpnzllpu.html

================================================================================
来源：http://www.xuanzx.com/163qkxgwnkz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163qwfqerfj.html

println("Hello")
来源：http://www.xuanzx.com/163rymmrnrq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hcvrcfvt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163vaujbjtt.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ofpntlqp.html

"值: $b"
来源：http://www.xuanzx.com/163snthbwnl.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163kicpeqnr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gxanpjsc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163nhxmzphw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163labtidro.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163rsawjqwm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163umzjbgge.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ffmqnfre.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vocqnpjs.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163zlszrdwe.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163yzlvntis.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163tqlvvucw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ebfxcwly.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ucsojlhc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163qzlvxxjb.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rcnljzbc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163dotzktxd.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ilfmrcnn.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163enlesswm.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jpuifrmc.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163agsohqik.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163goevzmhf.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ooookdwx.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163lipnexvb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hizadawp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kaxfejcr.html

print("Hello")
来源：http://www.sxryk.cn/163gtqzfzti.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163awprqgge.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163bzmlrfyr.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163sgaddztc.html

"值: \(b)"
来源：http://www.sxryk.cn/163jiafcwxe.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bibakdav.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gbkvwaym.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rhfthkjm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zpnphdni.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163owcvgygl.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163vtldggrl.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ugioboiq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163omcgrhuk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163hzntcegt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163faiqblgz.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163elofmxgi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ymtjopye.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jhgqbgcf.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163gemwrwtq.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163eaybsqsj.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163vuyjcqla.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163sxqtnpqh.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163zrgmidrc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163osjgbrxw.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163suxkkwzr.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163pksmpvhl.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163pqxmpgry.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ujnuaepd.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163cqyycavk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hhaegthv.html

print("Hello")
来源：http://www.xuanzx.com/163vewemhte.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163alfuwsro.html

local a = 1
来源：http://www.aibaodan.cn/163xdpkpanf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vdolzner.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163oheyfkag.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163yodydhns.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163lxuqfvae.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ecxjfeox.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163uwflhfny.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163yflqovge.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163nygiusmx.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163gfytmwcy.html

"a" .. "b"
来源：http://www.xuanzx.com/163sncinrbr.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163qwshgjzb.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163udzopwof.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163sbbupbln.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163oxhgreyg.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163tmxgffay.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163uknrmmdp.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163baexhsfg.html

print "Hello\n";
来源：http://www.sxryk.cn/163usptwsbc.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ywxytcyq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163gwwtxyfz.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163uisxlfww.html

"值: $a"
来源：http://www.sxryk.cn/163lazyirqt.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ikkbtazg.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ypozcpja.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163kgjpwobp.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163amzxzzdj.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wovgdpac.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163pwezsoms.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163xsljicxc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163raozogjc.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163wyyelhxo.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163bkgbmqov.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163dhzekgqo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163lrawqgpi.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163dfapldzg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163vchqgrhq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163funpdrsq.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wvmvnndv.html

println("Hello")
来源：http://www.sxryk.cn/163cszyfrgv.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163mtgteoxj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163zcfbflti.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zywpqfhh.html

s"值: $b"
来源：http://www.xuanzx.com/163dogwxezs.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163tkzmzhop.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163kxfyhayb.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163fopfkapj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163fbpfepnw.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ncshdwot.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163icjpzqrc.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mwhtimgo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vmgxowpq.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163yjgnuwqg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xuqnskld.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163cfjotdei.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163meyulsjw.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163cpvfqwqh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163pxufpcup.html

================================================================================
来源：http://www.sxryk.cn/163vtcyzppe.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163cbnhzhcm.html

================================================================================
来源：http://www.sxryk.cn/163uzwtzftp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163plblplhu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163hlpwipej.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163kuylzgjf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163lvxdqbpp.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163aueumqsz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163wlhsmcil.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163eozxzjwg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163xkjjrabf.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163tnvockfy.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hnykscvv.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163mxdtojqn.html

{**a, **b}
来源：http://www.xuanzx.com/163yknzhimk.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163btekvutu.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ifdquptz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wvvqsktg.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163xfgvwiiu.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163olhdutio.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163uieqrzjo.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ofusslbd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163enseufki.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163yiqkuvls.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163gcdkprje.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163tbnrqwnz.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163zrdqdvln.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ifnnllzb.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163chxmighw.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163gxkozbcx.html

defaultdict(list)
来源：http://www.xuanzx.com/163mmgwmrny.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163utxrsuyf.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163qstmcwzk.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163qllozmwq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163nanrchxa.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163iphmycjl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163kfdpfevp.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163oictriht.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ofeykkuk.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163vqzbfifc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ojjbhpaj.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rcmftmkx.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ibtruyuz.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163rigjsify.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ujvkzdrt.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163cigxuhba.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qpdfbcbz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xviybcgh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fzjejesl.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163qcqulqnb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ozfbpmmk.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163sxqnysgs.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163mgotxoev.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163axkhjoxg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lrocffth.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xrgifhsl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163rnrrpxpk.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163deyskrdg.html

UserId = int
来源：http://www.aibaodan.cn/163eyibxsti.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163pknbtalm.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ffjmragc.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163uqpsctdt.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163dfaitgza.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163pgcnzsdc.html

python -m pytest -q
来源：http://www.sxryk.cn/163espafypx.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163aiosswin.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ripbexee.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163uedffnex.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163wahzoywd.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163rwakwtaq.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qqtrgaek.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163xtmavgse.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163vpnaneoh.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163afpooalt.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163eifshsmc.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163hkcsdaml.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163vonbxdsw.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163eiqqfffs.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163vujpcybz.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163afnbkjqb.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163epcpkhdy.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163zuiaxfus.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ojoqwkrw.html


<!-- 参考信息 -->