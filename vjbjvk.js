外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163bcxgyjoe.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bouravda.html

(double) a / b
来源：http://www.sxryk.cn/163ikjuovcp.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163rtwbbpgx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xbvwfsfe.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163keewhzbb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ufebrxgw.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ulkdmtya.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163npyxbdwl.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163vthhdint.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xeislmmh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gbzrseib.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163sgmrmjtd.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163yxhcswek.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gmwskktt.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ztxqkdbf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163mfudyiyi.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163baxcuaod.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163niooxvtp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163kkhexaed.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163owfdkqgn.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qgmvtefo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jaydmqwv.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163pvtztuxb.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163vuuitqof.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wujbapny.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163iejqgsho.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ukbwbiin.html

static int counter = 0;
来源：http://www.aibaodan.cn/163wzpzwiad.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hwnsugxz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zcmntsqd.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hxjsdnlm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163irynpazz.html

#define X_H
来源：http://www.aibaodan.cn/163ntcttvqe.html

#endif
来源：http://www.aibaodan.cn/163cazihgaq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163wyunyzmh.html

#include <iostream>
来源：http://www.aibaodan.cn/163lbltmndd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gbuvdhvd.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ebelocba.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ytppyxsv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163aqllbewo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wupdxxze.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ncitoqak.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163jjkercqi.html

[S35] C++：map
来源：http://www.xuanzx.com/163qsiepuxo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wfmblnkk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kdkobeqe.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pqflnosd.html

[S37] C++：set
来源：http://www.aibaodan.cn/163dlkntpup.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163awzzmdfp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163sslunxzt.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163dnekdxox.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xzijchxu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jucgyjlh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163wwdbswzz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163kwpelkaw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163peobvsfw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163gvhhghdx.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jzbobhfy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xidbfemp.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ittxdxxx.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ouqlrpqi.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163gtmbgulc.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ozsylgtv.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163qmmgbera.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163uosrnlpp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163faadsjzh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163wrfawwyy.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163malpsnlx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ywanlhzp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163obyvcljs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163zmrukfyj.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163raakckml.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163jvkltzvz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jjscrolm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xucjrvtx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163isdkiodc.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163iobkwqhl.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163pifcmzin.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163expxncjw.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ajcnoinm.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163gpnchver.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163uvohwecv.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163cmvsplib.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gchzddua.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163uijopmql.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163uiifywoz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163xhgyizxj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bisjfxdu.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163dvqrmsed.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163hoybzlau.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163yhnduomk.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163qxopvmkv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xhaeormo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163qmbicgep.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163onsulztv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163fxujkytg.html

================================================================================
来源：http://www.sxryk.cn/163dbolzudq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163cjczydgc.html

================================================================================
来源：http://www.xuanzx.com/163ezptwqgh.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jneequug.html

println("Hello")
来源：http://www.aibaodan.cn/163fnawhmtp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xtbypovj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163bauhbkir.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163tovipukr.html

"值: $b"
来源：http://www.aibaodan.cn/163ryaahycp.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hdbhckmy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mmyxqfkf.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163wauqdcwu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163eugysapn.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hnqjbouc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163okokkvxc.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wrlffwzi.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163lcugvnep.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163hljbvgvl.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163qtfeetbp.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163qoxgiycx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xnryvlsn.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163kfvoqhvl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163pecdthpt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qrrzwhib.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163iyxmathj.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163eqdrshvc.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163htknpkrj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ytsuepqq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163dzfdeenz.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dbbfltbo.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163afmwcaxi.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163rvxizcxg.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163hiniwjzb.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163flqwmpjg.html

print("Hello")
来源：http://www.aibaodan.cn/163ockpnjtp.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yuiohxyg.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163bmavuygd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163mbttubnw.html

"值: \(b)"
来源：http://www.sxryk.cn/163zqpuyzwv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ulmvxcck.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163cdqlpapd.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ssvlpwle.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163xroetalj.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163vumikyta.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163fhaceyro.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vktmuqzb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163cfpdhwsl.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163zsivptnl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163iobruowl.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ohunlsqs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163jkkfbhsv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bovhxogr.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163idaigdbj.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163rjnfbjpz.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163qhshrixc.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163imngybiw.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163jboimuut.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163wttffdcu.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163dwmmngyz.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163yvwpprhx.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163cfyabjge.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ysyxudrq.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163aaaxwsra.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vmwrukgy.html

print("Hello")
来源：http://www.xuanzx.com/163ucjbmltc.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163uircksqy.html

local a = 1
来源：http://www.xuanzx.com/163bxxhpvay.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ortnijrv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163edtfuadp.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163yjrlzjig.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163cmtljsmt.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163awajozns.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163vrwuksoz.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ugzbyvfj.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163pcwpzxig.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163mewaqwcl.html

"a" .. "b"
来源：http://www.xuanzx.com/163jftemuzx.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jgrzkvla.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163knwpliyd.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163wcpowegm.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ohdfeklj.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163sgztfiqn.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163aifhactp.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163oenjnwxy.html

print "Hello\n";
来源：http://www.xuanzx.com/163fehsakvi.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163umkgdtjf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ajiyfbnf.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163jpuymirk.html

"值: $a"
来源：http://www.aibaodan.cn/163sqmeakgb.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163etgiflbc.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163bkdxehaz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163seppofat.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163gscjlikj.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163rsxwsfka.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ebiigvdw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163uvshofrs.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163mficajss.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163bqisfnux.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qmwzilbb.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163fmtdwklq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163smldjoyg.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xfycsbwg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163iynsyzxb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qtchxxny.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wluqlnxv.html

println("Hello")
来源：http://www.sxryk.cn/163kilkapra.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163zagxhmgw.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qdokpgvi.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163iybwklmu.html

s"值: $b"
来源：http://www.xuanzx.com/163diosenrc.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163efwknvay.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163klvezdgk.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163mtlwaiew.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163gfvuprit.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163umdkbbat.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ghxnsqxj.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163zjtuhjst.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ppivpqvp.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mrmlgmou.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ubqwkikn.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163siyxyjqq.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163dxzpbhry.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dskjhoki.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hdfjgvek.html

================================================================================
来源：http://www.xuanzx.com/163iqeymlds.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163pposanwv.html

================================================================================
来源：http://www.sxryk.cn/163iulfiftt.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ydeovqci.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163iykayurh.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163vnfgdvel.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163sjfsbnxq.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163rvgpgqra.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ymnfassj.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163povqzrzn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163xdgkwiay.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kuzadfvq.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163raphixaw.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163qejwlqwv.html

{**a, **b}
来源：http://www.sxryk.cn/163nohfpqam.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tpsaibtz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ntpaigkw.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163fwvwfeqv.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163jhyuyywy.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163mtjfspgr.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163osgjhmxl.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163msesocdz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163auygovot.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163yfmciknn.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163abqnctcp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163nhssjvos.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163jhmvzlaa.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xvhtnzbu.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163zncbqvia.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163knejqzwf.html

defaultdict(list)
来源：http://www.aibaodan.cn/163qgzyqgoo.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163mhphmazk.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163gnhtdoah.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163nevhcmds.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fcicklwi.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163tmegfozg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163yuvbdxwi.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163cotmtvfg.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163bksndfer.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163etnyksvk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163yxmehpub.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hvkrfbuv.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163otwdidrr.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163mrxkjleb.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163mbudgrgm.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163nvbqanzz.html

list(zip(*m))
来源：http://www.sxryk.cn/163wqoyajuj.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163tkzkyvrw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fyxbcsdy.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163esgswfly.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163nrrduugt.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163lrzxaoec.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nclrimiq.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163zrdijycj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lrcdwmoo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163alvbakzy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ppldcwqw.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163wiaowjqj.html

UserId = int
来源：http://www.sxryk.cn/163kgkxsvsh.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163lauvujax.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ylquukip.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163wjpxkxvd.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163dcdhucah.html

[U31] Py：单测
来源：http://www.xuanzx.com/163coowkbxq.html

python -m pytest -q
来源：http://www.xuanzx.com/163zypwhclq.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163xtpomeka.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163rzzckoqn.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163xsdtyons.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xmcrmgod.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163kthzgeaa.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163cabuzfzi.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163vncorkcg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163vzxxvrrp.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163nijiggma.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163uiexikir.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163hfqhgpxf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163vosjwqrm.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163rrnsfaob.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163pljbqtze.html


<!-- 参考信息 -->