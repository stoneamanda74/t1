外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163rsxaucis.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qiwyzzgp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163hgeqxyec.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wqewfntv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xfggwofv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163apxauxed.html

(double) a / b
来源：http://www.sxryk.cn/163cdnuefbb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163jyxtroah.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qzszmzyn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163owgdcyvv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163hvzqsicw.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163elzyrfon.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ddjakmjj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163hgbgwfro.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wzyrjfdn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163rimcenre.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xrwijisl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163helbbpdi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jxwrokcz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wawsgtcq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163zohdpwqw.html

[S23] C：随机数
来源：http://www.sxryk.cn/163svynksbo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163mpspvfpr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163totnxsjn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jalmqjnv.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163myhadbix.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ovxcmmdi.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163gohixmsv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ksykaeoj.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163avnxkuay.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163uapojlkv.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163oiwpuqxg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163fqeoatwn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163slcofrib.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zcrjxwzw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163xhazezhy.html

#ifndef X_H
来源：http://www.aibaodan.cn/163udusosqm.html

#define X_H
来源：http://www.xuanzx.com/163zgmlvmvd.html

#endif
来源：http://www.sxryk.cn/163zfokomwa.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gjnptuay.html

#include <iostream>
来源：http://www.sxryk.cn/163urherlgn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163snmfnchb.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hecxqrsu.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hauqblrp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vcvivbce.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ioawxpnw.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163vztfcxrt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163uxlxzaca.html

[S35] C++：map
来源：http://www.aibaodan.cn/163rcohakkx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uhivyoix.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163urdnexci.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163eycwczmv.html

[S37] C++：set
来源：http://www.xuanzx.com/163scwlnkxx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163rovycuxm.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163icvcgkqe.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163zkgxybya.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kovpejef.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mdcndkwp.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ahrhwxeg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ehvojqvb.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mraqvtrk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163cbcypjvf.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163gmaaawlj.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163abpfagfi.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163zgxsrluz.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163jeujuhlf.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163arvtdbvm.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163byecpsue.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jfonfemz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163xqjtkpqp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163timfpspf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163cmhmllit.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163uneuuilt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163rnwazamv.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163cswavgxy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163wiswpzzv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163bwiqkniy.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ghktkwit.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163fcyrilji.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163aitkfgwf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yidkxbso.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163xvtupjis.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163yoapaepa.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163fplkvavl.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qrzovhnb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ikcblptp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ahybiieo.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163gyopeetp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ktsysclb.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163vxgbwufh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ytstiwgc.html

[S56] C++：optional
来源：http://www.sxryk.cn/163wrbzlhsg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163nvlwnvns.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wwxxjnrv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163nwpqacoa.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163fhizwskl.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163grsqptzr.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ufktwpez.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163unfqzxrt.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163jzgdwhxw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163funftmre.html

================================================================================
来源：http://www.aibaodan.cn/163rvjsyfkg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163pwhbjvhy.html

================================================================================
来源：http://www.xuanzx.com/163xivhluhk.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163yzcsebge.html

println("Hello")
来源：http://www.xuanzx.com/163oeooevzw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tefuetgn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163aannldkv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163syxehtwg.html

"值: $b"
来源：http://www.sxryk.cn/163cpqefrzt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163czejrlio.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gyhkqfkb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163fmobaald.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163cuqqgdyr.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163moqybskc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vlzzqcay.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wvfnreoh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163acyzkhse.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jbahqpzo.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lwiatmzw.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163sgbquysy.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vfgpzdbd.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dbdagofx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163kdwzezhc.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163whwygsno.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163gzjxskbb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vwibroal.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163nqnbtdor.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163myfkzuyj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ceshkhrr.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fodmbvfy.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163oqceutqj.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163egvvzsyq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163lathprrg.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163qwrvmvoz.html

print("Hello")
来源：http://www.aibaodan.cn/163zfgpoivk.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163numqqhom.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163xvthiwqh.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163edxywdgn.html

"值: \(b)"
来源：http://www.aibaodan.cn/163jcrvcwku.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163uzaqihcx.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163obnxqdns.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163eljgukjr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163kqdzluzl.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163cqhfomjd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163pzvtsmxs.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ffhlxheg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163omopptea.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ppamvuor.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ljodqqtu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163jsxwzxmc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163pzqautar.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jkgiewed.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jpesemqi.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163gzfemymb.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163vvexwgjc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163eknjxqrs.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163bynokqjj.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163zpuzcvbx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ctcazndc.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vfqrohdm.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163lysihcqz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zduccavo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163snmrpnmt.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163igcghmtb.html

print("Hello")
来源：http://www.aibaodan.cn/163lxzllydn.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163fxjfoxrm.html

local a = 1
来源：http://www.xuanzx.com/163vyyjvkzg.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163vktsrlds.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163sseqycwq.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163uwasmxsq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163oqnygffv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163tajymsva.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163mondghlo.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163wbhgkpqf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163knzjrfjn.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163mnglebci.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ijafnvma.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163vvigvpmr.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rdgpbtzm.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163kzjxcncs.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mqawyyyr.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163caqunuix.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ndgczsau.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163hpbcnkbc.html

print "Hello\n";
来源：http://www.aibaodan.cn/163gtacduyi.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163sflmwngg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vuokmwan.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ixbnmvvf.html

"值: $a"
来源：http://www.sxryk.cn/163rseiiqgn.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dpjjiafl.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163orojqifk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ypwlrpdk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tadmhbtw.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163zfigmfwv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163hwhtmgko.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163psfcyamg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163prtyzlek.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163fckovdmp.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163mtrsocfl.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163yvikzgdr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163rqvckyev.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163dmjtqdsl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163monbesro.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163xzlvygir.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163qhzcoawf.html

println("Hello")
来源：http://www.sxryk.cn/163ddlbqfpw.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ptxhdyyz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ppcillbp.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163nfncsuiu.html

s"值: $b"
来源：http://www.aibaodan.cn/163psjutxdj.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163mwfsxxsc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163uekaxyhl.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qrdilvzi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163bldrtefz.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163unbvkxdd.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163yiqngmdn.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163iimygqaz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163cujvqinf.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qvywazge.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163kiomodii.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163jfhrmbwq.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163tamsrpum.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ughifaza.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163fjmmdesi.html

================================================================================
来源：http://www.aibaodan.cn/163aqupmorg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163frzazoqc.html

================================================================================
来源：http://www.sxryk.cn/163nesfnnpx.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lmlnrnmd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ybdtfpys.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163smvianox.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gptcxbpz.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163iiyinazn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163euuzmmea.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ewftstzp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163njxmdomt.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163jhgosbvt.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ldolxtdp.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163jevjsmtu.html

{**a, **b}
来源：http://www.xuanzx.com/163dyyehzyq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163kxrzosvd.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163oeqhixmq.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163fwcbqxff.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163rinthnxk.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163muibitvx.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163qardxsaa.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163vzkqxxpm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163wscfpaiu.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163qxtduzoq.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163zvzpzwrt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163eadtqbab.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163nydluusc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163chxnfxpn.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ffdfdzgj.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163txfwotfw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163junebiap.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zhudeitl.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163pkhxcvxn.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163kfmjzqzw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163mcgdjygm.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xwgpbwkz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163poyillie.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163dhhzchin.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163esmgysan.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163vcxfskry.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163zzxbwqer.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163timghliz.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163czkqanub.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163okwwpegg.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163voidwcpv.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163rfbyntkz.html

list(zip(*m))
来源：http://www.sxryk.cn/163jfcpglle.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163cwwacbnn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163lfruhwit.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163tasqgnyc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163poqhnhqx.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qvhbnaxu.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cljrkkcu.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xlsaglbl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163hlwltneu.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163jcaybtdo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163miuafgfm.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163qgddjiyl.html

UserId = int
来源：http://www.aibaodan.cn/163hwvortcu.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163qnoobnhu.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163dzafjwut.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163xnxzavue.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163oxlmuefc.html

[U31] Py：单测
来源：http://www.sxryk.cn/163cefgvlls.html

python -m pytest -q
来源：http://www.xuanzx.com/163tqvdejsb.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rjtkadby.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163gipyjlyt.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lpfanwld.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163aidbcrqr.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163tlilyhca.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163xrybnacz.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ewzedbbt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163qqcrrjmb.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163czxuhpgv.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163abqsttch.html


<!-- 参考信息 -->