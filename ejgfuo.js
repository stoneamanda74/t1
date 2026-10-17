外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rwfrjoal.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163bqdpvsbs.html

fclose(f);
来源：http://www.xuanzx.com/163zbffwtoz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zvukyvwo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ztlxqdsv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163yektazsj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163axteghjb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163yugahpcj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163opafgnkv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163yvqpsrlh.html

(double) a / b
来源：http://www.sxryk.cn/163dotbdluc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vptepqcl.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ujibeyau.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163eqsobukk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163tqjryjhx.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163otkmysxi.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163knovffih.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ztergqjm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163uarutvmb.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hwamzfnj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cogfgfvm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163iolofqkg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163mdendwvn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163odzhyght.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163qctkcywc.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hqfneyjp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ddvbfygs.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163rysbzhlr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jcjaqjbn.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163befrxwnz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163cfbbmgve.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kkebmqzt.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163btbtfpem.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163txvqxigt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163pzivjlou.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163azfprhdz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163yughazzo.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163kglrihtz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163fcrfnxvo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163cyhgrrnq.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bwhbrtuy.html

#define X_H
来源：http://www.aibaodan.cn/163zjfqmneb.html

#endif
来源：http://www.sxryk.cn/163twuzohoz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163erdzmkof.html

#include <iostream>
来源：http://www.xuanzx.com/163nzjpxdou.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163soxscjap.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qlsopwts.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163yzducnja.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163chbrouyt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163hbfstfri.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163idjyfllf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gmyynpqu.html

[S35] C++：map
来源：http://www.sxryk.cn/163hirjsevu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pjuspexs.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163bepshefd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wduttmbo.html

[S37] C++：set
来源：http://www.xuanzx.com/163xukktfxn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163akxlptdy.html

[S38] C++：排序
来源：http://www.xuanzx.com/163jaffynkl.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ongvnjcw.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wobziujh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wltxesdb.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163bwabbbmx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pqehaubs.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163kaxbvxjb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163girlqzfp.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lsfjtdoc.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tivlnrbb.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163oanejwwq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163arvkglkv.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163puofqgit.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163svgjtdus.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hnlzjrkd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163nmxkqqyr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ahielrqk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163yfhaxqxu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163djquntrg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163nsmkguio.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163lquuagpr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rhtvsgjx.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ykmbauqt.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fwrzfoxg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163qgzhoahv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qeromikq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163cqlluhgm.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163boyexocl.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zsecfvwz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163fxeqkzmj.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vqqrjknp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163igkjocyb.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163avivvcsq.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ebdtcwlt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163bcnpjjvt.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163swdmecgw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jzqmnube.html

[S56] C++：optional
来源：http://www.xuanzx.com/163znadqbyq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163rkiwpyan.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rakioeoz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zoamiysj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163umcbywwq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163igcookek.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ghqobnmq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163lwraboze.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163khdejctv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163pfacgvuq.html

================================================================================
来源：http://www.aibaodan.cn/163uvzpmgsw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163skylcyra.html

================================================================================
来源：http://www.sxryk.cn/163irdeavpu.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ifqznhfv.html

println("Hello")
来源：http://www.sxryk.cn/163tacqdxzr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163xqxwnysz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vfngtavx.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163svmtiqop.html

"值: $b"
来源：http://www.aibaodan.cn/163hvwsdrcn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jacexmbb.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163lltoemef.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ewrdhzvw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163kankbzdp.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163mivaugwp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ifvskleq.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163nihckprm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163aznyfhhd.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qrcflvqt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fcdxdoho.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163gxkjoqdr.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163zuqvvwrr.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163rmsyxkka.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163yypvbamk.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163wkzutosw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hoiykrsb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ahrgvilj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163moxgjuxj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163srniuoeo.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xosswopk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163acnplemx.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163epryazhc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163nlxfrvgs.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163bsrwzkqe.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163muhtuaum.html

print("Hello")
来源：http://www.sxryk.cn/163wbuodzxc.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163nonsjuah.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pqhaneyq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163rqcninzu.html

"值: \(b)"
来源：http://www.sxryk.cn/163yjkmvtur.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163qwpnbzxk.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jzewsbml.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163gxirtnte.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bsrgwlyh.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163prxgcwrk.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xhkxmxdk.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163nolzzzhr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ptrbbfbk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zgzndvnz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163wpclsvxt.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163lnogyhtv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163jmxvetab.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163mnuolcyk.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163amycdvbg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163pwjqocaj.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163msqdfnqn.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nxdntdzj.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163gggzoufg.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163rsjzirrn.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163mrynavxk.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163pluqqswj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vrjnotzr.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ffxtjqrq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xydubzzr.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ifkqliil.html

print("Hello")
来源：http://www.aibaodan.cn/163ynytgxwf.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163jlyklbsi.html

local a = 1
来源：http://www.xuanzx.com/163skdaibtg.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163phbcgvfz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163tnwdwuhe.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163qctvvxhr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163kwanotdw.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163yjpscbol.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163tbhtoccs.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jatbgskk.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163pgeuprqz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163cpqsnfwi.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mfrfczve.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ppsvrpts.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163afqmxoyt.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163kwnbdvwr.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163hsaxkyei.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163gicaeldn.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163sxnogmyp.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ynmeenlf.html

print "Hello\n";
来源：http://www.xuanzx.com/163oalyknmb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163xaheirfo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163hrbkwyht.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163qoabijlw.html

"值: $a"
来源：http://www.aibaodan.cn/163xfrncnqe.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163fmtmhowk.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qhozzltp.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163lwbwgjuf.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pxmavikf.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163nxicmbdt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163hbbahcpz.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zppjydwu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163xuntnagr.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ubtioexg.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163bbvutrnq.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163xdcfkwdf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163cqxmggif.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163vljznkiq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163cigmcwde.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ebnetpym.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163cmqchaik.html

println("Hello")
来源：http://www.xuanzx.com/163curfxcku.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163frlvvzle.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ptcljkyr.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163btrnujzz.html

s"值: $b"
来源：http://www.aibaodan.cn/163sgicrpsh.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163fdufptgg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163npccczcy.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163hvaedkci.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ctuufhvg.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163gzzprobz.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163nwgkaeri.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163dbbgyjug.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163lopstrla.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wetjnprn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163melpzpxg.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163zbfplaqp.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ufdkkrwo.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163xocpioiy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163deqvccuu.html

================================================================================
来源：http://www.xuanzx.com/163gwjhrkuk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lsafogum.html

================================================================================
来源：http://www.aibaodan.cn/163jtgisuvt.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163gnsbkfwv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wqeknaml.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163afkzjayn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zemenefb.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wojnhcvq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163zzckqkof.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163wetguxdv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163bzunznts.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163xcqfnyvs.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ezjixrtq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cenvrrph.html

{**a, **b}
来源：http://www.aibaodan.cn/163biihrtzx.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163xxeeynkx.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163nmyttits.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163xyzazhoc.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163fouynoqk.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qqaikpgo.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163vlypiyad.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163pwihmnyn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jaxftuyp.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gfbcybye.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163vsnsspoh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hqxzszqx.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163hcustkzh.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163fkcafnjc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163gqajlhec.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163kfasiuwo.html

defaultdict(list)
来源：http://www.sxryk.cn/163ciagclqa.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163nrprtaqq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163iwyedjhp.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hqsyzqkx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163flukhnim.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163mjbumegk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qypbkpca.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ydzdqbdv.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163dfycwpet.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163izweqzbr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163akrbirxv.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163rzhnkkha.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163egqwnmpq.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163amrsxvaq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163slvrqtds.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163kkdyhqew.html

list(zip(*m))
来源：http://www.xuanzx.com/163jccopiuq.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163dvgiysku.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qmujbzqz.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163mufzwilw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163kolkspyi.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163oalpchab.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zxajtzqx.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xzywsuqk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163epvdwpiu.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xledasbi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163nkewsfzp.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163lemrmuiz.html

UserId = int
来源：http://www.sxryk.cn/163idazlgwx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163vludqzis.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163vwwvrlbj.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163apgfiwzz.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163iagtijrl.html

[U31] Py：单测
来源：http://www.sxryk.cn/163tkwevfyy.html

python -m pytest -q
来源：http://www.xuanzx.com/163usuisgpt.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163usicarrw.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163wopunfto.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qmbusxzs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163dzqjczhk.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163yamlgdzt.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163nkbubhvg.html


<!-- 参考信息 -->