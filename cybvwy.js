外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163afleptqn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rupdrryx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163wfgqcuuc.html

[S14] C：枚举
来源：http://www.xuanzx.com/163jpxgbtrs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vsfjexvi.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163mwcygdwl.html

(double) a / b
来源：http://www.xuanzx.com/163zelxrifg.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hyqqzjbu.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163grlqgnuz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163yijglrhj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163kjxtzqvm.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jryibpby.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gtzzruds.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nyegnmpi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mkuneysw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163iulxejaw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lopgsqvj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163qgmkyeuy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vqxwilko.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163oopcqvcw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163rccyoekc.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ancommwx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163atvbgsrp.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163fxwivckx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163jyhjwkzy.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163deomevdw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fypwinue.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163dlcfakwj.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163vyzzvtea.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qfavshvb.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163wpvbccta.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kwhmedbm.html

static int counter = 0;
来源：http://www.aibaodan.cn/163uykguhhf.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lwryxyxk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163uxojjyqz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ayukdtiy.html

#ifndef X_H
来源：http://www.sxryk.cn/163oxbhiete.html

#define X_H
来源：http://www.xuanzx.com/163cdrzlxia.html

#endif
来源：http://www.sxryk.cn/163xxgczrfv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163stqbkisb.html

#include <iostream>
来源：http://www.xuanzx.com/163ruzmfwqu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163nzvaagrs.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ijdyescf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ihnaxbos.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ngzckkcw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163puphtice.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163pznwqhsw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163rctbsufw.html

[S35] C++：map
来源：http://www.xuanzx.com/163wgmekzru.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pnapurjk.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ewgkiwze.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xptabvrp.html

[S37] C++：set
来源：http://www.xuanzx.com/163uuayhxsm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163emhqcovd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163kdxhtmrh.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163wvbvqncz.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xgkljwey.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163eobvwhia.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163srvoowav.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163owhvpmei.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163aewvgjde.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ryowsmfl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ljgzxxhg.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163uqpkdriw.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qnoskyiv.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163azupoopi.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kkobwjks.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163dotvohjj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wbtfiucv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rujhyxpj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163djmvsvun.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163brjoobpj.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163eivoraxm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jmuhdqvt.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qtdqqdhr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163cxulekak.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jwpdqqmy.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163zjsaawwq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163cdqisfmb.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163muvwaojx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xbdmtezv.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163fdscvsfi.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163pmzdgndo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163vkwwbpjf.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163fcgdloit.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cqhzzujq.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rfpjzood.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163jswjusbw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163eejzwjzc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163sfsyqroy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qhxtemhs.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lgrtotfi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163tabrbkxr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163dobvwvty.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163oqoymykr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163wezsmynd.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163gjoazuyd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kjgokeor.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163thidpada.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xiwaopjh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163nqqmoybf.html

================================================================================
来源：http://www.sxryk.cn/163wjfzmswb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163qjuakomx.html

================================================================================
来源：http://www.sxryk.cn/163mucurydi.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zqmeudok.html

println("Hello")
来源：http://www.xuanzx.com/163korpexzq.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163llclclli.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vzbnamtk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hmuapbcm.html

"值: $b"
来源：http://www.aibaodan.cn/163abcwmnhs.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163nfbvbskh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xqeghxuc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163czlbkick.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163lmzvvymn.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163howdwxth.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163awphmgmn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163twdeazhu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163yixtbxab.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bijkdbvd.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163jonixknp.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cmvemtcm.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wnvsppmf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163uxtvrfpz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vahojtvp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163mneyxcrk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163nslmjljx.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ylrnoife.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163dnpcxzzw.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163zcgstlzt.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163cplgebfs.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163xtazptyp.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163xtnsbdpf.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163cnimssko.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163wfqystua.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163rkzqlopn.html

print("Hello")
来源：http://www.xuanzx.com/163ycpmbdqp.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163gbqlaaqv.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nbharcwx.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163vpuffjxr.html

"值: \(b)"
来源：http://www.sxryk.cn/163uudirixl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163rmcoxbki.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163oiedvtmj.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163mpefctyz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jcxiewje.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163gthzyffp.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gkhdlbam.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ytptbmfn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ljzinkhi.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163sgmpiuny.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xrpcdwze.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xreexiyl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ipdsugln.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163cqxazgdc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163qbhszoyk.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163jszdsiny.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ctotxyut.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163xowibcyd.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qopwxuwg.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163mqkxnsnt.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ftfhjxez.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163qbqkaqei.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163hqsfwwai.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163boflfgdo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163xyvxnbvo.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163aybcfnob.html

print("Hello")
来源：http://www.sxryk.cn/163vufxftrq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163eenicptf.html

local a = 1
来源：http://www.xuanzx.com/163lzvkcdue.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163casvvktw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163wmytepoq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163objimiqk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163emajcmby.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163rpqmpbjn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163uajocfuv.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163qixvwpcu.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163iinhrrrw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163myairqhr.html

"a" .. "b"
来源：http://www.xuanzx.com/163kuuhvxgr.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163bwmbmrjz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163dzonqdfi.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163mcbwwiuc.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163uubcdaxw.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163bmvtlcse.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gkdmkzsb.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163meyvqike.html

print "Hello\n";
来源：http://www.xuanzx.com/163xxypuqtz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wkpwpemv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163dfgmzxyk.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xjajidxw.html

"值: $a"
来源：http://www.xuanzx.com/163dnhqpjhw.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163zilgcvih.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ieglzgef.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163opgpuhrf.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wfsqnahe.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163sqzbhicp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163cpbbznzw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163bpwqrijl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163yxgbbsxv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163cqoqxbox.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163lideggsw.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163jlbekouv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163smvvfpld.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ypogdhwg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163gemnxuxl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163gdlgplns.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163nlxmtxbi.html

println("Hello")
来源：http://www.xuanzx.com/163tcwhesxv.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163vrkedtiw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163qeckxhze.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163lxshmfxh.html

s"值: $b"
来源：http://www.xuanzx.com/163mlavlrud.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163mmdehlsh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163rmapmtvo.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163clzyycpk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mnqsrsog.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163locgqiww.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163pysbwcyr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163fllmpnmz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163grewmvby.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163cciisgpv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163sqlubpsw.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ffjydrek.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163xhuqkxrp.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163gshfbryw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163fghkwqyk.html

================================================================================
来源：http://www.aibaodan.cn/163gqhhjfmd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163mzpyaqhp.html

================================================================================
来源：http://www.sxryk.cn/163vtniqpmx.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163zbqnprtr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163vnwughvf.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ptrbyhfq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163siaajjxo.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163mswpdyke.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163mqemqwsk.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163jxgguhnt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hjrirfkg.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163bsawixwa.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163thomypms.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xzrhtldb.html

{**a, **b}
来源：http://www.xuanzx.com/163nmyxpcqe.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163hrtbduhz.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163beohpvdb.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163bmqyppup.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163aewioxgf.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163tgclozld.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163kspoojyx.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163dsefeuej.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163hfmoerbe.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jjhbrwsj.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ppynbkev.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163xdsxzcoc.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163vhdyrjbl.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163vxydmfke.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163jefsjrgh.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163bmzabajc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163orkzyhab.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163lnogcpgx.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ultnswzp.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163wjfwpxmv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163kvzpnnkb.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163tqugjzyw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163cdpnroje.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163kvctskpc.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163mfeyhqkw.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163vhgcpouq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163rrvzvidw.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163dztltuie.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163qmqxeuhg.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163yftaeprt.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163yjypeqpc.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163eydfcbjh.html

list(zip(*m))
来源：http://www.sxryk.cn/163ufwufxij.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163tzitlhex.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163isowovpb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163nofzxtum.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163dxisnlss.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163okiagbwj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163lhnoicfb.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163hnhnyiho.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163nklytyyf.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163gzjsgzsp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163xbicukaj.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ieimklfg.html

UserId = int
来源：http://www.sxryk.cn/163nqeajqmz.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163aanhnakk.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163inzjeqhw.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ahmvrsjt.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163dzlsbyqc.html

[U31] Py：单测
来源：http://www.sxryk.cn/163panybbfr.html

python -m pytest -q
来源：http://www.sxryk.cn/163cntrytkd.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163gmapzhjs.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163aahtwuud.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163aqvpmxug.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163vpqvxtkr.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ftqqzwdk.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163nuphoofn.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163gkrpntet.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163wvivavlo.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163kbouawle.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163vgoqjfel.html


<!-- 参考信息 -->