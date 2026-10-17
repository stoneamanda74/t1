外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fpgjjkol.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hsfuqscb.html

fclose(f);
来源：http://www.xuanzx.com/163mwibwxzy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163uwehhsfy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163auecroyh.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163cwvhkkml.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163lwdeicyq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163agyajcsi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vemjhkfk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xewrwxru.html

(double) a / b
来源：http://www.xuanzx.com/163srrcauej.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163thyrrjjq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gyqvniqv.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163suijwsuy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163gjtobzau.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163omphvpvq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163uhusphyc.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163pauveeic.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163isxoeptp.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163mzwhunsi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rqnwwity.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ihazrdio.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qmakwfga.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ebhzzlog.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163zvyfcfnn.html

[S23] C：随机数
来源：http://www.sxryk.cn/163reolgcwn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ynpphtkh.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163rkftncuf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163juybgfiy.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163kqxtzadz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ihlfzopn.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ulbffyfq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163fmcfnsjz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163swfkjrhe.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163jibkrrqe.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wdgrwbyp.html

static int counter = 0;
来源：http://www.aibaodan.cn/163abwufyby.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ckfdufvw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tutpthcw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163dsgshlwf.html

#ifndef X_H
来源：http://www.sxryk.cn/163btoznnhv.html

#define X_H
来源：http://www.xuanzx.com/163gwsgdixg.html

#endif
来源：http://www.aibaodan.cn/163lowitqxs.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zodawtvy.html

#include <iostream>
来源：http://www.sxryk.cn/163uzjqlulk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163uwmnrrol.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163huwigmfi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163yidbnxln.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163hptklhgz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163symshvja.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lxehewxk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dkoprayz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163xcvubzak.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ingccwji.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163stpxkxet.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lnxufcap.html

[S37] C++：set
来源：http://www.sxryk.cn/163nctcbiof.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163udtlybza.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ucqbyrrp.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163fsknmqdg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rpnodate.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wylomjgn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163preaiito.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163dzerotas.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163nrawdkpr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163otkknipj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163myaxtdaf.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ihdmpzsm.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hhugjpnp.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tfqpqskd.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163zkjhatud.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ktdbmonf.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163jbdevjnu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163nxmlngof.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163roybadxy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zvjnrtmt.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163hxbqieke.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163phwaslgu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163pzepwjac.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vjlafezj.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163scdxpaif.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jbquiuip.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163xkmbmgpb.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163mxpeinwg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tdwvkwkp.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163nhjgclhs.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163wiyphitf.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lnvnwjjk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163agxqqnnn.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163bcfnbiyd.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163abtfxnov.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163rwsxbgsx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qgbofjzw.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163utravwzo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hxxnesun.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ydfhakjt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163wajfakdb.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bxcxfnyb.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ptplspch.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pogmpsrl.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163hjiztbpe.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163rvdatrzj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163lpisqzyp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163exdwwtav.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163nwbxwmdx.html

================================================================================
来源：http://www.sxryk.cn/163blvqswtq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mmuwpmnd.html

================================================================================
来源：http://www.sxryk.cn/163kufcgobg.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163bqvtrmvh.html

println("Hello")
来源：http://www.xuanzx.com/163wygcxpyk.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163smbabkxb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163icnaylyf.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163myjqturt.html

"值: $b"
来源：http://www.sxryk.cn/163dfxrafve.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163rbxbbwab.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163guvxfptq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163lherhkfk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ffumhxcu.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163celulpfo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ineyfdrw.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jeamukdm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163kqqsphwp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163qnuwsoza.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163uxqyncki.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ivtozoke.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gfwwtzem.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qjyottda.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bcfeksic.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gimncpda.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ohtqsvvf.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lrzyrnya.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163owoenvze.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163vpzmyrck.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nzhpmnep.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163obbpbeok.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163dhowsyno.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163hooqswig.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ladrnciv.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163hgihlpjb.html

print("Hello")
来源：http://www.aibaodan.cn/163eodgpdee.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163pwvlfnha.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hrurvepk.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163xptrsgvc.html

"值: \(b)"
来源：http://www.sxryk.cn/163aajuxotp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163fwlyyvoz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hlovtsab.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163tfjajtzl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163lbdummzj.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jqvpngxv.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163gfktncwd.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163gshrlvkq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163pllmebcy.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163wrdxotsg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163lvqsciun.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tkbxtfsj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163xadwzfaa.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163zcmddius.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163kbhjbnyt.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cjaholul.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163uadnalyk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163vkyozqyi.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163cwgkuzwv.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163atndnpgs.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jorcysdf.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vbjqlxks.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163zdanxzif.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163aumcwdxg.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163cgsflptj.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163kaezzivt.html

print("Hello")
来源：http://www.aibaodan.cn/163syduzujc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163papokais.html

local a = 1
来源：http://www.xuanzx.com/163pkacfzso.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163hbhqpfel.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rmcqyyfb.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163cczstvyr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163urnegjqf.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163djbmyfbk.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ekmvwcff.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163yuxdqwnf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163xmrywnum.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163zbvselor.html

"a" .. "b"
来源：http://www.sxryk.cn/163rocvhlnb.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163jfainofk.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163pbebkhvt.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163icqthzag.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ueiaravn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163gpwbquvv.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163jqrnmfyv.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163dwnqipgn.html

print "Hello\n";
来源：http://www.sxryk.cn/163msjzmijx.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jymcxxxj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163abvtdesk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163akozbirh.html

"值: $a"
来源：http://www.xuanzx.com/163nrnupbxj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163learirce.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163dmtheaup.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163lnnrlcsn.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163bjxjxjes.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163mpktziht.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163baplzuly.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163qkwltmae.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163rgsryexa.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hepwhwgy.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163wzqrgyle.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163osrpeepl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gehuqyep.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163sbhzktpq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163iegkczle.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163kjxkjotd.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163siqwphnz.html

println("Hello")
来源：http://www.aibaodan.cn/163drpibhzn.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163wjrqroey.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163rvtiwkmj.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163tfqafleg.html

s"值: $b"
来源：http://www.sxryk.cn/163mkpsvlye.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163omupklwg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163mjyszajk.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163qkspszcq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ldqragrc.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ndnxhcnj.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163btwlerus.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ytxklrxa.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163woqshwmo.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163omkhqryi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163fhlmmeje.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163tcrnegyl.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163xzufjdlh.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nvzfiyty.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hpxueeik.html

================================================================================
来源：http://www.aibaodan.cn/163xtbobluh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lgaonplj.html

================================================================================
来源：http://www.aibaodan.cn/163ajkjfaxi.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163vhmpwelf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163hpyscucd.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163vriztzok.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163vkxvgisy.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wuisfvtj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163gmcxyklh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163olrnckkr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163lpvbqwty.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163uygookay.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163caobjkrc.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163aaxwlimm.html

{**a, **b}
来源：http://www.aibaodan.cn/163udgwbpbe.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163rlemnuhb.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163slfjhqvj.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163bobtbvvp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163cjydgvmz.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163tktmwyjt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163sykviqdj.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ahzigwxm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163afpwaiyh.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163cjbkkdza.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wuchrdhk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163jdchicuv.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163fudybgaf.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163rbinjtyv.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163mfvwgfyk.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ycsuokns.html

defaultdict(list)
来源：http://www.aibaodan.cn/163upizpppy.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163mdezbzbf.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ugnjunmm.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163tyydpfcv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163pobnvpzy.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jzqpglks.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163putofjeu.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163eziatjwb.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163nnfnyona.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163wmemourc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xsrqcqkx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163tsetwhuv.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163wigssmen.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163cqxfyids.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163pmnunqoh.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163lkqztotg.html

list(zip(*m))
来源：http://www.xuanzx.com/163imzadmpi.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163sjaedlpb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163dxtotkgt.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163voyrvvls.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163yikvwfwz.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ulyvrivr.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163qjmrpvhm.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163acomgszw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jsisxwlo.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wpkprilo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163yggugfbx.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163etcrlkir.html

UserId = int
来源：http://www.sxryk.cn/163pctdwwio.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163sfpuvssx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163fpptenbq.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163nxeuctzx.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163pukrrrmo.html

[U31] Py：单测
来源：http://www.xuanzx.com/163zsaijxzd.html

python -m pytest -q
来源：http://www.aibaodan.cn/163twufcwop.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163fbascxay.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163cjaycuag.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163vxnzfrpk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163mnjmiahy.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163fmvfpfjx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163oygdxvbo.html


<!-- 参考信息 -->