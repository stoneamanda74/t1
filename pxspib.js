外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163lclxhtgw.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163sslwvdlv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163fhwujbxt.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163bgddmitf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fudmeuub.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163pgzgbtyf.html

(double) a / b
来源：http://www.sxryk.cn/163fzeinjmq.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163roxeikiu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163chnimiyb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mknoqxjc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mndhifbr.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lycndijv.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163quovxdjt.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163aqzmzcyh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sztoyixd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163nqmyhimx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163myyuokvp.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zuqkdvlx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163dwixujfk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163uwvbytij.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qkubhosw.html

[S23] C：随机数
来源：http://www.sxryk.cn/163nbfhgbtd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ckszdluk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163kfatzjuj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bzcpwbsa.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163lktzzbuu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163sjhychga.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ndgctspo.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163shpvsccg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163victomxf.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zeevotjk.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zjejtebk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163peadcuzn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nuhpmweq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kcncuakj.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163hmhuzbok.html

#ifndef X_H
来源：http://www.xuanzx.com/163vycxrjqu.html

#define X_H
来源：http://www.aibaodan.cn/163uzkdypfl.html

#endif
来源：http://www.sxryk.cn/163rulbxkcb.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163bjsajvni.html

#include <iostream>
来源：http://www.aibaodan.cn/163xnzfwdrj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tvuluucn.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163uchctcae.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163evnwbiqr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163akdmrjpt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163minecltx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163kdrnnnze.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bgthmhmb.html

[S35] C++：map
来源：http://www.sxryk.cn/163njymwznd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mquqqeih.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163nxyonkho.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lkgjvfow.html

[S37] C++：set
来源：http://www.sxryk.cn/163tyzcwxpx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163yaixnlht.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163zkacvase.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qlqozdwh.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nerpbuup.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163avzsqrsz.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xkglqggp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fsrphlrq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163butwxmql.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163pcywrmip.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163lcwuhvwb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tgdthwmg.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163zdwbbzke.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163pfoartor.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163djctoevd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163oseupqqe.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163wokfyssk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163bmttnyuw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163emlemhqj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nmdgocha.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163taoqqfvf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163lqolmxps.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163yiuaoppr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163rspscnxl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163qowmuyrj.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163jogzncve.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dyjrnhld.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163wvrcmbph.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gqloingh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163dicqivso.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163qyjhbptz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163vbstgydv.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xdwctqeq.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fupxabcu.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163gwxqdkti.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163wzscrneb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163guwfartw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xyzjzswu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163awwnmqbp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163trnthkbu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ucmfmpqp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163gvphflaf.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163kgaxscyk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163twraxsqt.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vuhsvgfb.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hmlyojcj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163yvqqnacy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ophrljrj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163iwwnidgd.html

================================================================================
来源：http://www.sxryk.cn/163jmteqfsb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zofwdnmk.html

================================================================================
来源：http://www.aibaodan.cn/163npqfbpiq.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163clpieyyq.html

println("Hello")
来源：http://www.xuanzx.com/163xtndheaj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163stovaeza.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jhudeylr.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jwtnfsob.html

"值: $b"
来源：http://www.xuanzx.com/163qwuzvabp.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pvxxnmgi.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tdwgyicp.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163eognawsf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163denrfrhs.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dsrazfgx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qrqgeymu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163feglfisq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zcyesqaf.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163lxlddhoy.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163jenpubzw.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ddmwzwbj.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163lxdqudae.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wtufnivf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163bxhgfzzo.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163mqaqsxkk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163nkgctwes.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ptqfyrkb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163uqdpxlxn.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ztibmyds.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163mpvlizeq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wwfstcqr.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163mpyqjlaz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xmczykpj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ymidwzat.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fpfnccpt.html

print("Hello")
来源：http://www.xuanzx.com/163yczmeqbm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163jbjmrjhm.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hpblfizm.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vdpvrjcn.html

"值: \(b)"
来源：http://www.xuanzx.com/163ffnjsxpx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163nndszxzv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163dnzpjlfp.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163fxffshac.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163fiohykod.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163bgpdgfbd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163smrnndkr.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163pqqqtutw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163bkeciukb.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163mufflcga.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rpyspfvc.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ymclcsko.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163hvsszhar.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163hpdpanhm.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xkhjlpvn.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163lxujwgum.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163gsgpivuw.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163oaihzykt.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163knwqxfdz.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163aeoowlex.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jpuekxmz.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163dgxzhmaw.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163wopohkjt.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ogiwvmer.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ntoiifkl.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163lqftowym.html

print("Hello")
来源：http://www.sxryk.cn/163aeluczli.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163fqwsetnb.html

local a = 1
来源：http://www.sxryk.cn/163ubharqhg.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163lrdtggxg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163wxpsdifi.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163thbmxjas.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163teuimice.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163emuqtiva.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163kyxlxlun.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163lmovjvoi.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163xjbsrysu.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163rgswwznf.html

"a" .. "b"
来源：http://www.xuanzx.com/163ysesiebb.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163sjjpfcpw.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163yhixwemi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163bgobcepp.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163eqsughen.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163racluacf.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163qyxtebmy.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xiaxsgoj.html

print "Hello\n";
来源：http://www.sxryk.cn/163rtfokpzm.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163cbgwbpvl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bkobtdrh.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qmdndxnx.html

"值: $a"
来源：http://www.xuanzx.com/163hechvaiw.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163yllxhema.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163naxzgbvo.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163lfozooqm.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xkmkwqww.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163wgnqsvrk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ostogdae.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163vovmtqly.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ojsdjlbf.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jfalamjy.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163rqttcchv.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163urxthuli.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hsrxxrdr.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163fgwhzwfm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163icvaetai.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163jxxwznsb.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163joxlmksq.html

println("Hello")
来源：http://www.sxryk.cn/163veprrpbo.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gtnjhqtl.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163vcegmgao.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163emdhaogq.html

s"值: $b"
来源：http://www.aibaodan.cn/163wsxrapjk.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163vtmlwrsf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163omplzyfw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163fvxqmuor.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163kugipnnw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kkitcvge.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163cdpvdsfh.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163vfkjmtvp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163mzqvmyrm.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163xzqchrzq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163qechcgnz.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163arymvmrp.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163uddvzehb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ssnmsprv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jkderhtl.html

================================================================================
来源：http://www.aibaodan.cn/163gzunhrjm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ggcixoxx.html

================================================================================
来源：http://www.xuanzx.com/163yzltbune.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163thbrnqkp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163fxucukuf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163epycerwz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163fhxpcnox.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qspxptds.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163emjpjamw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163tpfoiwoo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163nnepmzic.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163mdohupra.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163datafrkh.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163swtoyckn.html

{**a, **b}
来源：http://www.xuanzx.com/163itpkajqp.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163hagbjzhq.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163smltgcho.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163pbxfkrhc.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163xowkinri.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163eubufnzl.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163kqldjdoq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163vtwfzfaq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163fkwlaqts.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163zztkbgra.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163oxmygaif.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163cousrvot.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163tmbunaeu.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163nylbarbb.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ahoevamg.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163crlmdmzd.html

defaultdict(list)
来源：http://www.aibaodan.cn/163mytoozqo.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163qzfneede.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163sqbnqqdd.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163tktuwgxj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163kvasdcrh.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163qowvgxza.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163nsgwuvuw.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163cjrhzdav.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qhutupme.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kabevtlv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163vxppvhgq.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163hrnhutlg.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163vjrnnodi.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163nihfceld.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ohkfpezr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163zbpahzal.html

list(zip(*m))
来源：http://www.aibaodan.cn/163hgspjgnf.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ymvfoppj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163kvekyjgm.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163llgfnvef.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163trlltske.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163gvhwdnfs.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163kuthkdbn.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163lasgilrn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163dbvikxpb.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163jlsgqkot.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163hcurkddf.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ixwdfvxk.html

UserId = int
来源：http://www.xuanzx.com/163dpkjjacy.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163bnwefcsz.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163cmcofuer.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163abllcqor.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163lpbrwxxf.html

[U31] Py：单测
来源：http://www.xuanzx.com/163xwxrphei.html

python -m pytest -q
来源：http://www.aibaodan.cn/163moxmfkza.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163pcascttp.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163xjjdqomo.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163vnljdjha.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163fvtvtade.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163uhikpaxb.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163wsskwlso.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163lqareqyg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163tkyvvrwc.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163lwkewhuz.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163rafaqfrk.html


<!-- 参考信息 -->