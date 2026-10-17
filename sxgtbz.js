外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xlshcasy.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ewzslsmq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zxeucqut.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jgelstov.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fstmmhxi.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163psjuqxef.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mftmtean.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163rywooiva.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jbxagvbb.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mremivnc.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163czojnlhq.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163hrqaocrf.html

static int counter = 0;
来源：http://www.sxryk.cn/163rtmlbavi.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zaxmlnzl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163eqesxbts.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163rablzkcn.html

#ifndef X_H
来源：http://www.aibaodan.cn/163cultudsh.html

#define X_H
来源：http://www.xuanzx.com/163kbqpajpl.html

#endif
来源：http://www.xuanzx.com/163jwbwqnpn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163wnkiklzk.html

#include <iostream>
来源：http://www.xuanzx.com/163nytorcnz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163nayghenf.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163tkkqrmit.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163tgppgmkg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qioidbgt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vhndiuxh.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163bcqjrgso.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163yilegjyv.html

[S35] C++：map
来源：http://www.xuanzx.com/163oaiccjyn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wlukheen.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rdrikapz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kxqcbbmn.html

[S37] C++：set
来源：http://www.sxryk.cn/163vjwjfhfz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163nwuhkfsu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pxagugja.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tqsebfbu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163chmlnnym.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163yfzpiavb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163darptzft.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ensvmwca.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mrrakxwq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fzzdtqlb.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xjncnfhh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163cajrpfss.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163lualnqlc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zfndtprh.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163iwqjxdft.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163prsdehkx.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163dlyqymjn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ncwaatjg.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qtgcusav.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ybswgtiu.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xionvfhn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wauyiftt.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163towkgmgn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163fcfwysel.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163zsebltec.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163hrommpas.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lbsjisir.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xypgwlxb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163spsnmgvc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hzdglenu.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163gxofapzm.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163cikkxpqk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163duunbnak.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vzfqttnn.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163boyurrmg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163atvehnlb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163zguvyvlx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163haswyoxb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163tyurofjr.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tqblrqjs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gshgfptv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163huruvbza.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ebktsqfc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kgotcmrg.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163keqkmkbo.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163gzymgqxd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163qyulirbj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fqidtgtj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ojnjbhhp.html

================================================================================
来源：http://www.aibaodan.cn/163gkrlhoyt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163htzubwui.html

================================================================================
来源：http://www.xuanzx.com/163hmguuzqc.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163knibxtvb.html

println("Hello")
来源：http://www.xuanzx.com/163akzojpzv.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wwjhadmj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163inttrbsu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wugmlhsq.html

"值: $b"
来源：http://www.xuanzx.com/163kaeksovx.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163awnzqwcy.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163zjimlpcy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163nupluqhy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ifmumaaj.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pwqbgdoo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163jwlmkzso.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163isamnltv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zjfvjhpm.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163suyrnyot.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zgvbkbtm.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ivpdupxa.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cwzqcfwp.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ssywcljy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163rbnopscx.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zvbjsaje.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163gxtebmqm.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zbqefyqc.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163lqswflry.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zocppekm.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163cvcwyqbx.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163lzagyueo.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163trrfvxeq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ttknrfry.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cukupgmd.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163sqoecqiq.html

print("Hello")
来源：http://www.xuanzx.com/163pohrtjkw.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163lzitsvsm.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163egrqouml.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dyncapbf.html

"值: \(b)"
来源：http://www.aibaodan.cn/163trzfsqru.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163iqwvdbxb.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163yehbxxyg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163uciutjqb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lcfynwcc.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mdhtezsm.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163izakwwsi.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163houwvibt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hnbwqrxo.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163smsokxwf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163fyoblint.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163rzjpjnod.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163fwjkchli.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163eytesdpx.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ermqhroi.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163mcohxjdt.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ctoipzpw.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fijlemhq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163kiunieer.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163sxswyjbx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163xvdhvcwq.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163abatoksy.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163qgmleyip.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163xcmjpjjc.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163kwfoccel.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163wlivnwtb.html

print("Hello")
来源：http://www.aibaodan.cn/163piapxunv.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163wkybrwgj.html

local a = 1
来源：http://www.sxryk.cn/163wtkxzmax.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163lzjjjmhf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163xoqkjgpq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163etwdyqxu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163wzbkjdmi.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163rbvsevwo.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163oqhcjwkl.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ouygbjcn.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163huybrqfm.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163yzicebye.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xktrygfi.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jolxymqa.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163spgjwfon.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163fibviflc.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163azalcjme.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vymbscyj.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163kamuturw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163lwjlbwun.html

print "Hello\n";
来源：http://www.sxryk.cn/163ooiurlen.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163imenukfn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163pdjclhmx.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163etjqjgrf.html

"值: $a"
来源：http://www.aibaodan.cn/163ghsstrmt.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ftvcecok.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163gdnvysyl.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163plbvdlsv.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ccapcvbv.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163fywoydbx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163zvxlnwck.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ussxtdye.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163wprazgsc.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163kyqzqcnt.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163sqfbaxyc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163oroisywk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zeejejpp.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163whkruysq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163qgjnosrq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163vsilgmyg.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163nnatifus.html

println("Hello")
来源：http://www.xuanzx.com/163dmazxhnn.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163mzdtbtym.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jljgqtip.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163orvtybnf.html

s"值: $b"
来源：http://www.xuanzx.com/163ynxplqoj.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163sbyziemi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163mlymrzpp.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163erhuusvq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163zczfohrb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163vaibtqhf.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163hoaoxgeo.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163bqgbqigm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163wdbwytef.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163qghpnilb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163cxfpmudn.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163xhixgxjk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163pitihzmv.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hkcibghk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163gyaepfgd.html

================================================================================
来源：http://www.aibaodan.cn/163jkjhzepy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163xzfiiklu.html

================================================================================
来源：http://www.xuanzx.com/163ohutgcdt.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163zalsxwwh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163jeiijfze.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163etxzosmw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163byctwefl.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163pvbqkdwt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163nwwdrbku.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163izcgewqz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ipvybopv.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163qjvwipri.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163twvaiswh.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163vnmyjodh.html

{**a, **b}
来源：http://www.aibaodan.cn/163gehblnoj.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163uismzsfo.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wvwqwpue.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163suzlldjc.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163azgrkapp.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163trlgvdlk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163xgedwptl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163jryvzzrf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163sebmmkzg.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163umkjntld.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163jchgsiwi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163snyzswab.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163nkzfpmyx.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163nryoyfpy.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163cgjgcdwg.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163vllzpxbm.html

defaultdict(list)
来源：http://www.aibaodan.cn/163izxjumil.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163bwsrnnho.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163oyjvpbxd.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ykmwbirv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163kksotfus.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xagankhw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163riinwxvb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163omnokqmk.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rywtskgg.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163xwgrfcdq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163fxunzpie.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jgusidjm.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163yfdgsnur.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163enmvqodc.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163dvjebpov.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jpstbarh.html

list(zip(*m))
来源：http://www.sxryk.cn/163nwocyffd.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163jryjttkh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163zbueyitp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163joscfedr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163kcpckjfy.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163dpwpxzqt.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163qxuyheyv.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163lcsnqlwt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lbyltcxs.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ozhazbyn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163uyupmhgg.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163qloglcnj.html

UserId = int
来源：http://www.sxryk.cn/163dfmdckik.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163xrqfmhgh.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zwoojbmm.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163bykbfdss.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ampzchod.html

[U31] Py：单测
来源：http://www.xuanzx.com/163vohgrvuz.html

python -m pytest -q
来源：http://www.aibaodan.cn/163bxftzunq.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zmprvqpi.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jwzxeoto.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163yohmymvv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163uipemyxv.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163kidxpemd.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163aoqnyczj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163pgdgrhga.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163asbaighz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163cykovgnk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163rdmflzim.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163zhtrnaqd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ydhyrukt.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163vpufznwv.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163euehbayz.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163oatkbhgz.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163vttqpphj.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163mgdoupig.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163soucyjpn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163goomzttj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163wobddlfy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163swbbflcu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163xmltpsnj.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163tsdprxez.html

namespace App\Http;
来源：http://www.aibaodan.cn/163dmhjgafe.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163qhjkyjsf.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163apjbfhkz.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163loypgskm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163znzuikxg.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163pcmsfiea.html

?string $name = null
来源：http://www.sxryk.cn/163dteswuzb.html


<!-- 参考信息 -->