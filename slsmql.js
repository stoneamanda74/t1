外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qwstdint.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163szerekwz.html

(double) a / b
来源：http://www.sxryk.cn/163ppowbohy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163jskaalmf.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163bugxuwak.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163yrgpybkw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163aoousyly.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163jjbbefqg.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163jgvoutsi.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ypcqtuyt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163eepdkezx.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163facwimbk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163utmivvyb.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hezuesum.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163zzrrwepe.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163lffvjmma.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wguesdxv.html

[S23] C：随机数
来源：http://www.sxryk.cn/163uidhwipt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163socsruqw.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163tghbdbdh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163tfrkmsdp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qwoxuyis.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jgaxrtqi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163uwxvsjgn.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ljdwluxk.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163etakgmxw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163tzfhrtuy.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163bqngjaum.html

static int counter = 0;
来源：http://www.xuanzx.com/163oxxjtivn.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163uqzubcaw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163genezooi.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163qvcyhqhu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hzvamnkj.html

#define X_H
来源：http://www.sxryk.cn/163lfeubkkc.html

#endif
来源：http://www.xuanzx.com/163buqiksbw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tmygvjpv.html

#include <iostream>
来源：http://www.sxryk.cn/163zrfesdtp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163dujddsjg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hnbvdtzb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163icrgtxro.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163zjnljcaa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ticxwdas.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ietpulsn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xyeccppo.html

[S35] C++：map
来源：http://www.sxryk.cn/163slsixpqq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xgflnvvh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163vyftqmft.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163prglvoil.html

[S37] C++：set
来源：http://www.xuanzx.com/163rvieynks.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tchmbauh.html

[S38] C++：排序
来源：http://www.xuanzx.com/163dyuqhxfd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163jkhxxwzx.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jutclfpq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163hqqqisqb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jysnblad.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163mfkixhgp.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163znfmspdp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bhbfpqqy.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ygqlsekx.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163uyfgfrgm.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hnqugise.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163qfjuvgtz.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hkbholin.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163yjyzddpn.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gutqbfce.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163fdfbjjnm.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163qitozrgu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163qihprmmt.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wifxdkva.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163onzqpfjt.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163tuqwpavp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ohcpifka.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163actfnzlw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163vlkkvudy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163dzthxwfk.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163eirbjrgz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163oblcbozp.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163fcmbxzbk.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ptantpgu.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163uwoskmgi.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163yhngtvin.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mnsoojgx.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163tlqmifdk.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ilodfite.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163aifdyknt.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163gfqdzpli.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vxpxbixd.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ulkianti.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nyufozya.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163joespcns.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qyjygfgd.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nscggedm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dtcbhevr.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163iakfwlpr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163jmrzydqq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163jdkigkko.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ewjlzquw.html

================================================================================
来源：http://www.aibaodan.cn/163pyxofzwj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dvqhknjf.html

================================================================================
来源：http://www.aibaodan.cn/163ueraogec.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cctvwjne.html

println("Hello")
来源：http://www.sxryk.cn/163ftlvdled.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163zhpgvuyk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vmqmigay.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wisddgyt.html

"值: $b"
来源：http://www.aibaodan.cn/163rdbufhoo.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vbkxinfu.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ubuuhhvw.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163mcecolbg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hqyllwzd.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hbkzxacy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163qiaxiaty.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163oggtqyrl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ugspinwj.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163acrotkvv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163fgdysswi.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163tkbzhbgs.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163cfwnzzyo.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163hlkfqfxn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163qzcwnyjz.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ygjkqlbz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163orgddmbf.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vhcwyabk.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163mcufgesl.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163wqzjxjxu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163iojzosur.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kgpmqhsa.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163arbllatr.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ihugqcco.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163gpadrzwk.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lilbojdo.html

print("Hello")
来源：http://www.xuanzx.com/163qedfeygq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163umyoxegf.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163mtoqgsfo.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163omuhgjvf.html

"值: \(b)"
来源：http://www.sxryk.cn/163tnkbcobn.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163aikvtxdj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ostgkrbh.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163gclvdbbd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163rozevxlb.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163tibejein.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163qdmgacim.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163lkuvdmjk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163yqkwzayw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163cxctdtlp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163rhlirdds.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163uvwpdzyw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dsacmzdu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ozzxxcpf.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163pcbibrxs.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163mdiknqot.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ddlzzuam.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163dhjdmolz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163kzhiimdj.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163djbgtgut.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163vtucbcsw.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163cywflmkz.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vfuxifxo.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wzbnhwfj.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163caubhcvk.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163gxadnmox.html

print("Hello")
来源：http://www.sxryk.cn/163wpzhnasd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163rskhanhk.html

local a = 1
来源：http://www.xuanzx.com/163anxnwypm.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163rzpcukjr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163qznurfhf.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163piapnjmm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163loouzsqt.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xufjnszi.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163chkslllk.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163xmjdjiba.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163iaxrlmte.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hpsdprsg.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xckalyoo.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qqoejuhd.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163oztmqkvy.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163rmhbfegq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163pcoutlde.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163wuwwifus.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163mcsatxad.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163wapkwmew.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ogfmmvns.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163dzcqntre.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163fvnsadwi.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163uqjnntkw.html

"值: $a"
来源：http://www.sxryk.cn/163iyqfrzou.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163oxtimmez.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163uhsqwvko.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163tcpkkwiq.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dnjjyhek.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163lfbzvbgb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163xsjuwkec.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ornwlnyn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163zffszvnu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163yrkgvynn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163rxkxnovo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mbessnxv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163svzlmfkr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163fwryrcpv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rynxuviw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163tlrfdfmw.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163mwboohwr.html

println("Hello")
来源：http://www.xuanzx.com/163mbegxffp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163opchwqmr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163uaeyyicb.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qssyvvnl.html

s"值: $b"
来源：http://www.sxryk.cn/163fijtxfhx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163czicwbwk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163abwkyvty.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163gruvqfpw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163zsaxwdne.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163lchzwrmv.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163bafembps.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hgchcikb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ohuovfup.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163hfsdajeo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163lofxuzun.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163wsmfkbsk.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163erurkgxe.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163oclrwolv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163jyotlvnv.html

================================================================================
来源：http://www.sxryk.cn/163ljxsszzm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163llomkjzb.html

================================================================================
来源：http://www.xuanzx.com/163txmiixiy.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163vnvqhjwo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163tgbprqcn.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163lnthnvif.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163sgfwqsve.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163kzurktle.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163fpifplzv.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163xfviudrv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163kifhzfue.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163xhbgibkh.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163nqklwpdc.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163kqetpxhu.html

{**a, **b}
来源：http://www.sxryk.cn/163fldzvcmu.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hkhcydtl.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163tfpzokah.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ocajxrrq.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163dsrpzmpz.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163bewuswop.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163tgdlyors.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163sectyhad.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163sptdsjuq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jpkykpke.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163calhvmpk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ngzaxrog.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ibuolneg.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163jdfsuohy.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163kbvgniav.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163gsnfgpji.html

defaultdict(list)
来源：http://www.aibaodan.cn/163znlkwwqd.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163beuluyse.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ddcbzkow.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163cegsnjnb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163sxmaebdb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163luutjkbx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163uewxxkwu.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163osoxaohq.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163mvxsqobs.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163dumgieiq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163fvcshvdu.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163uhkbmodn.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163aatbwzdv.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163atduraod.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wgfxlniv.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163pgrantic.html

list(zip(*m))
来源：http://www.aibaodan.cn/163lyqebbdq.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163qrfavebs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163wdddpvgl.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163dfbyvorl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163qqgbrdac.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163fiqhkbwo.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163sixetlup.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163kgwlfumh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163voxmcbcq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163nwvzoxvs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163mugenceh.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163uyjdqhkh.html

UserId = int
来源：http://www.sxryk.cn/163fptjtfcq.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jmaxfwqg.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163tvxmdpwn.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163uzlugcfx.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163rxmaaagk.html

[U31] Py：单测
来源：http://www.xuanzx.com/163fumujhwt.html

python -m pytest -q
来源：http://www.sxryk.cn/163wdocogkd.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ccsytywd.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163doktsxxg.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163nxhohkac.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163lhfiwssq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163kojfogks.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163hekfbmte.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163zsvpshgf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163palmvmuk.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163uunlspxo.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163otnkqclp.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163hlttbnyz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163uazjazig.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xuqotbzw.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163lrtomcut.html


<!-- 参考信息 -->