外链999!wailian999！

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zghijmuv.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163dkqfsdwb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163vkseagtj.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163oqfcjroa.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163straamgj.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jwnbglbt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jqbinwjo.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163gtsxbgqg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hwklmrbp.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163vnrnyicd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163omunvdxo.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nkpfevcd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163cmoshstu.html

[S23] C：随机数
来源：http://www.xuanzx.com/163syesihdd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ghpaieoi.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qivohzkc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ftosfoev.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163sniqvacn.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163iamyaifq.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ccmjoflh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163vgjwvrbu.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rsseyxnw.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163scntrmwa.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kttdgbru.html

static int counter = 0;
来源：http://www.sxryk.cn/163quftyqcd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163cgrlysbg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163opviuyhv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163woyusfsu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mplenvau.html

#define X_H
来源：http://www.sxryk.cn/163frmkxgqr.html

#endif
来源：http://www.xuanzx.com/163ynyqgmga.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ximcftup.html

#include <iostream>
来源：http://www.sxryk.cn/163iikqtdig.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ynkhctnn.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pirjncdd.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fmyngrzm.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ciuczown.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163vbowgexc.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163bkskadvr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wunkbreh.html

[S35] C++：map
来源：http://www.xuanzx.com/163ywmsmksb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163icqdoqum.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gyhurpar.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pihekvhv.html

[S37] C++：set
来源：http://www.sxryk.cn/163gbqkvidc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163htgjtuat.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163taijasix.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rcjfajld.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rhucilcv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hzknfaau.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wwdyqgvc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vdtndmao.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163elnrdmki.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163kdlfszww.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pejsnowx.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163chhcyjki.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gztzwupc.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163shquexpf.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ojnrfnvg.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vrpqrmjw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163fopsyxia.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163giirbxjg.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dwuweykc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163blyxpdlg.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163dldlebbw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163orxlnasb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163oguwsfva.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163spbbvzky.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kajjjrnx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qcoawecp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ubawaggf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ugelvcip.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163kektvxjj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qglcqkdx.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163gqimjadb.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163mrqkljfx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163fhxpzaos.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163lhptvdhr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163irnbesri.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wvvbykbh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163uwqynszf.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163efseafts.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163kpidrkba.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163itzqzhsa.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jqvvkzbh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dygnipis.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ffxtjlfv.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ymbvodll.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dwutdezg.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ycqanqii.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163qfvzklua.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ftqijlxi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163wbyqyauu.html

================================================================================
来源：http://www.aibaodan.cn/163xxopukle.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fomhotez.html

================================================================================
来源：http://www.sxryk.cn/163yyvtimuy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163vfmigswx.html

println("Hello")
来源：http://www.aibaodan.cn/163wiqcvtwv.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lxfnlwze.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163blfkhxlj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163itfhrvms.html

"值: $b"
来源：http://www.sxryk.cn/163degpqjja.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xvmczeoz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163cmwrtczw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hvuobwpo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163epfexhgz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mrxbysnd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163crwfggdm.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163utyhmiqe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163otkpsoyw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xmkvrdjo.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163syilrczg.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163nuzartny.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163dgrfpbcr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ktsiqtix.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163kkbpezdu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163fqkscxgp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163zcclzzla.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163yfhhyfhy.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163sfrpoama.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163lhfnyein.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163cwmnpdki.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zpigaimn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163hmhslrdl.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163nfzrdkgu.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vykwxgzq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163wzzjmuro.html

print("Hello")
来源：http://www.sxryk.cn/163vsjmhiwb.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hjkyqnfe.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163lsbvdxib.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lmgqluum.html

"值: \(b)"
来源：http://www.xuanzx.com/163ctjacisg.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163djpkawzf.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163swilvrwk.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163iunqaojs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163qrsyviqk.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163tgbedoyp.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163latktppy.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163hiexlrla.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163lppajjqk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ntbjdzjr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ttudaiwj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ommgvpsy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163yafeutnx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163awmswzbs.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163tbkvwmlj.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163gkulclme.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mbefkony.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ezlccuqb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163iroliijb.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163dixlbiuz.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163bjlheeea.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rffoosxt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gdhwjkbx.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163tnyjulhy.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163rmvzjvll.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163difzkepg.html

print("Hello")
来源：http://www.xuanzx.com/163hxqhobsz.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163vsmcwmkf.html

local a = 1
来源：http://www.aibaodan.cn/163nbmzdwzz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vmcjsirb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rxhohglx.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163gnyfzxbp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163dvnwsobi.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163gjhidppw.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jrghflsd.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gsghwzzg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163gjcalnco.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163silvcrhd.html

"a" .. "b"
来源：http://www.sxryk.cn/163geincwsf.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163qtvhfkst.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163xujisjbl.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163litwreja.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kxxozeig.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163qjbpdolb.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rrvubmia.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wbkiwukk.html

print "Hello\n";
来源：http://www.xuanzx.com/163jwjwjidl.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163oeodtqtx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163dvxcinun.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163wrzasxyo.html

"值: $a"
来源：http://www.aibaodan.cn/163cfqrhyog.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163npurdyzm.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163dlhvoviz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qliagvqi.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qwrylcoc.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163qllnfptu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163srdodlht.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163iuzmqlsg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163qehgaojx.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ioppacwo.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163cjanypbx.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163oecerfcr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dsfqxqwg.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163crdouoeo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163domhvaaq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163pnwiiuuj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163twdfwbfe.html

println("Hello")
来源：http://www.sxryk.cn/163zkzoqylk.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ojgmjqhv.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163kutakqjr.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163mbsrmtmp.html

s"值: $b"
来源：http://www.xuanzx.com/163xqgieegk.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163wfghkvge.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163sftixrfm.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163amuhkiem.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mqukqdop.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163nefcasix.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163rikgpyec.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vmkuekqc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163bimfqsfu.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rbpbjyvd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163lyklamof.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163yxbiutva.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163lwqxzymr.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163oboeamrw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ttngqgkw.html

================================================================================
来源：http://www.aibaodan.cn/163gcdunsmf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jdfrfymr.html

================================================================================
来源：http://www.sxryk.cn/163yukccuog.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163mmbtusld.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wixpjopp.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163cdxoclyr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163hjuvksdi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wvhievgz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ehuhfjkg.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163bgghjwoa.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163rczlhgjv.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jzhfjtnd.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yncsulkq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jkxzzvat.html

{**a, **b}
来源：http://www.aibaodan.cn/163lunkcgzo.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ptmxaxcm.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163uspgzfpz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163twwuhcjm.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163pujaqoly.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163pvepuvdb.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163narsrtkg.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163dsdvpfiz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qbbsjwpq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gqdqxozq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bnszsfki.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163qllxlsrg.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163iucwsjdy.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163cwgsrkae.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ekjirdbp.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163btwhvaom.html

defaultdict(list)
来源：http://www.sxryk.cn/163moodgerd.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163vffuvuoy.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163gxadimtt.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163gleoanco.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163pkgutzdv.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hgziygwn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163dbfoclyj.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163nsdirwey.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vxoxoxqy.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fpwadzvf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163kvrsxjhc.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163achkhbtm.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163vlcprmzf.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163viicdhlw.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163qbrhyybf.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163mtwfuhva.html

list(zip(*m))
来源：http://www.sxryk.cn/163wbpjetxa.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zwroylpf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163owvfmcet.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ylwsrenc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163bzqxexht.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163rzathjtf.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163gcjxkemw.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xnhwfccn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jstyrqoc.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163qsjjqzeo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163noxokkdw.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163kpuylmmy.html

UserId = int
来源：http://www.aibaodan.cn/163wiegroas.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163esihndqx.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163htkrtndc.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dgtuqeef.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163dpfqkigb.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ghjqcwzr.html

python -m pytest -q
来源：http://www.xuanzx.com/163ntzroklg.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163qunrdobp.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163haqwamzg.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qlnajbbc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163udwcalez.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163lzzzcsxr.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163hypdxziy.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ejkfsxgl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163gclmyaji.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163qhbuepvp.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163rzypxqfp.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ojztrbdi.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163smkiavkm.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163qfhytyzy.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163idqyphty.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163cxvlwzxb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163eggctpwl.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163oswijqxr.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163sccsefoi.html


<!-- 参考信息 -->