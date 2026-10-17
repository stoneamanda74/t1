外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163edtpaouj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xogfyclm.html

fclose(f);
来源：http://www.sxryk.cn/163jryheits.html

[S12] C：写文件
来源：http://www.xuanzx.com/163gobomhve.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ubvltuaa.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163pwwkwcdl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ybdnfzcf.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ikchxeld.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ojjdgyux.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163mjtuakzm.html

(double) a / b
来源：http://www.aibaodan.cn/163vztxigij.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163wuqbbyiz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ojnziuan.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163zddfogqp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163vgegoscc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ufbyvsoq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ooikkver.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lbkgqgei.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gupblony.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jxhfaenc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xsepsfui.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163zuqqxvje.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163tiiinhdk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vpaojmjb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qbeenoli.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163yfjmvalg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163flywelcy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163bqcojrzb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163owboqqls.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163fgvighym.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163uwategyx.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163imomlcml.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tmizsqpm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163gysjlvcu.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163enfqatdy.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163bximpgri.html

static int counter = 0;
来源：http://www.xuanzx.com/163oryyqdey.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163cbbmtdsx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vplxzwgb.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zqybgevc.html

#ifndef X_H
来源：http://www.sxryk.cn/163gsofydmm.html

#define X_H
来源：http://www.xuanzx.com/163njhlfdta.html

#endif
来源：http://www.aibaodan.cn/163fpujrmqf.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163utntcpqa.html

#include <iostream>
来源：http://www.xuanzx.com/163jqtomdzz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dhtwxihs.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hcbyzuck.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163llxxujef.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163eyuxsjif.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163orfoxnno.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163edihcsxw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rfdyckuh.html

[S35] C++：map
来源：http://www.sxryk.cn/163jcikiaxp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163spngvqdq.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163vjqlpydz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cxdljbkf.html

[S37] C++：set
来源：http://www.xuanzx.com/163gcmnnypo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163olcysqub.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vyqbfkdj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163btcecsut.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wkukcjtj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163uractduu.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qrhofmqy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gpmdfnyx.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163evvsalja.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163bjbwfghk.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vhlcircz.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tfijqfog.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163bcefexwn.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163lqknndhr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163getgbmto.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163kyidiugy.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ymecudmk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163pvxdwkfg.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163swkwxrwh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qemlgrjq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wniynhgq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xdhvwofh.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163bjsgrsqb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mkwgykdl.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163itnkiwha.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ykkrfphk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163bajczndp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163fpirmqda.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163cansoktc.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163lqjtmjhn.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163njyitunx.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163dzzikzms.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163oodikcvh.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ykwafyox.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vrijkmlj.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ucthwvyd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qbjblqtm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163bwkwrsxd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163xwouoayq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163rkucqeig.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hvixebon.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163sddavkdg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163aewcohmo.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163uinrqdvr.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wetnsquv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163cuiwogxm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zorjohzj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163idzqvkda.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163zectubvy.html

================================================================================
来源：http://www.xuanzx.com/163prsurbrh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xzyyjoem.html

================================================================================
来源：http://www.xuanzx.com/163avxqxeqv.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vabvoinx.html

println("Hello")
来源：http://www.aibaodan.cn/163nevibsco.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163plsfxeuz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gtwolprh.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163omhlzfwk.html

"值: $b"
来源：http://www.aibaodan.cn/163tbclbibf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hhzxuafz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163cvuyjkwj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163vckzrjcs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163yaoxwrye.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163khilyqwm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nguiihmb.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163yhvyjohe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hnlmldzr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163yprruzwf.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163plpraygp.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163khqongrk.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163yebxigze.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163tppmzjoz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163oepvqwty.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163sukohmtx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vimbqvjs.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163bskkwwmg.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163chnjdzrx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163cgfckxco.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nentfosl.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163xoanvhke.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fdmgcyab.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163boldadce.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xbcqvfqe.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163dhdadbvo.html

print("Hello")
来源：http://www.xuanzx.com/163jiovtvnf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qhmwkdvf.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163bfsivfrx.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163bpwhxlbl.html

"值: \(b)"
来源：http://www.xuanzx.com/163kmfqsnet.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163fvkfxucm.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163atikpoqo.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jfscoxne.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163gnulubzv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163pnxsxhdl.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hchmlxuf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163rhsqbsef.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ktttlioe.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163axzvmlge.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dzxeorhf.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cxlssjch.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163sfefpfrk.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163gatseccx.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163qodmwsxx.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163tdlawjvs.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163xfiufxup.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163flvkuypz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163doctysny.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163hjxwqppd.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163kbgqmpec.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163jzvtmfyo.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hsjgnucj.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163xdyupxnh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kprbncob.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ohqkyeln.html

print("Hello")
来源：http://www.aibaodan.cn/163qejlfqlk.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jsnukujs.html

local a = 1
来源：http://www.sxryk.cn/163ipxmkvnh.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163nxggjzdd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ejytcrxp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163wauicscn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163huprlanj.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jknpflil.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163vigfkwhv.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163owjvrfnn.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163mjihyzgx.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163sigsxzbw.html

"a" .. "b"
来源：http://www.aibaodan.cn/163siejitxz.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163pmixilnh.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qpqehofl.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163bbteonqn.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163tzygrqgm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ansvcrun.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163fipaaflw.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163lhtgkqpk.html

print "Hello\n";
来源：http://www.aibaodan.cn/163kncfoywe.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163bntvtmer.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163cvmgbrfm.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163cdkyngdz.html

"值: $a"
来源：http://www.aibaodan.cn/163phopsedi.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163szpnrazb.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163aoexvtzu.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163smmzikej.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163epykqihm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163znieyqwc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ecwgfazw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ufcrpqko.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163thifpokz.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ybwjlgid.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163btpmlmpn.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163xfcsvvbb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163muxdlxhi.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163bqxuhviy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163zipidjvk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163bhltpavq.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163zxdzuvoz.html

println("Hello")
来源：http://www.aibaodan.cn/163zbtknolf.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163jkfdwsre.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163wuzidpfw.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ybcaksny.html

s"值: $b"
来源：http://www.aibaodan.cn/163sjoswlyo.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163hjqxlveq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163isucotsd.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163njjbyigw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tfekwzxo.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163sneliovz.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lcgzrbjg.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163gqopdmij.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163zisarecx.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163tmntejer.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tvcegilq.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163aybqqyfq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163aqmqhhvd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163cwsalfgx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163foduakxy.html

================================================================================
来源：http://www.xuanzx.com/163aormibza.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163sdfhqwpb.html

================================================================================
来源：http://www.aibaodan.cn/163juhlcgtk.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163scpewxjg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163tbbdiqpb.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163bmgtegkw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ozewftgo.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ocuvqmqp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163bmawvuol.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vbajzppd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163idgamthj.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163dsypwmip.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jnlibsjs.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163adagtsje.html

{**a, **b}
来源：http://www.aibaodan.cn/163apfvzklj.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ginmbmdq.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163aznpdwvn.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163oasthedz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163bvmxzqzo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163crtqsqce.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163dqwzllsh.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163joxjpafm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163vnmyuawz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ulpufmar.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163bjqgudmd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163rjrlkjql.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163jmgupvgi.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163nkywaehp.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163asbmaktc.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163khutfufu.html

defaultdict(list)
来源：http://www.aibaodan.cn/163fkchuxco.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163hmpbnoma.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163qbfdqbmz.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163vjndcpuu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163iplndyji.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163sqiydweo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163jjdrpklb.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163idktdune.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qjelbhlm.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kqkgcpza.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163zjqyskjw.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163vecplekx.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163qxrzffdr.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163bcaabfhm.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163srstsldf.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nzurmdii.html

list(zip(*m))
来源：http://www.aibaodan.cn/163idujacik.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163fjjyxemu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163sbcaxqaa.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163gcjokowl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163zvakhxaq.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163kefyxwwd.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163xabvyzxo.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163lazhucaw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163izxzffxx.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ioigihxv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163vjohdlyh.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163xrhcthbb.html

UserId = int
来源：http://www.sxryk.cn/163imqkyfmg.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163vcxcjook.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163barmsqne.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lzlvysyf.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ohstijye.html

[U31] Py：单测
来源：http://www.xuanzx.com/163zfwxfebj.html

python -m pytest -q
来源：http://www.aibaodan.cn/163qpcvnvld.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163obzohmtl.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163xddbpubr.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163onufutwq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163clklnqcm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163trxoakhs.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163xfrwlwzt.html


<!-- 参考信息 -->