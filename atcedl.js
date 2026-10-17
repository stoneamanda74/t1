外链999!wailian999！

x |= (1 << 3);
来源：http://www.aibaodan.cn/163drjsnscb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ndqhltxe.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qszrdcrq.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zegajasl.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163jdhoxacs.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ojsrrsfb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163lsyutxaz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163bmmzaxey.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ghnwvbjw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163yaijqvfu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vqxcurpn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163fvawrvet.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vnxlbyfu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xhbonftr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163agwhgxke.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jeucemse.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qjrcnvzn.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163gdggjlzg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hiqgjpzd.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163cstmfxld.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163neueywqt.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163djyurkro.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ftucdghg.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163lzbgrkiz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163buokeqra.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qsqvijha.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163rrdmcekj.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163tkeedvbm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163qaevslzi.html

#define X_H
来源：http://www.aibaodan.cn/163qikdmogu.html

#endif
来源：http://www.sxryk.cn/163hymzapgm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mxtffvmu.html

#include <iostream>
来源：http://www.aibaodan.cn/163sdrfgvlt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163lzokpgwm.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163razfsmad.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163uveilcco.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163sjsbopus.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163whhbgvev.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163guqbwjyg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163tdoybrxx.html

[S35] C++：map
来源：http://www.xuanzx.com/163rvyosond.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jnywaovo.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163pehkpdfw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qemzjucw.html

[S37] C++：set
来源：http://www.xuanzx.com/163iraokity.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163sahfqjji.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ymiaucxg.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163mgxzrhuc.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163xphasper.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ltffogxj.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163gcfpktxm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163kxtvnwrs.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ujfrwwhb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163cmjdjaud.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xurildon.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fdtpvvnk.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163unmebodl.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163coxqqxyh.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163clvrjhcg.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163cjucrfqp.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163dlbzxvyx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wbbicngc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qnswqwnu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uvrrjxzi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wnicijge.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mbraqwtl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163dvpezunx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163gfjkjnxb.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163tvpwjbfr.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163saiqhrnx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163acdeighq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fpppdqex.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qqkbcjsn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163kzwgbdzi.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163gholealw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163pusayagw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163riqjcbon.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hcjzwzmu.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kjpnowjr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163njoxcrgj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163hhbyoctl.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163echtykxs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163repjgdsh.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ywdmsmck.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163fcfwpguh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163vfpztdbq.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163lqmhnozx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163aeaqlolp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ccphibjr.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zhdgfyzt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zabbfsbs.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163hlbzbglx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163walkedrw.html

================================================================================
来源：http://www.sxryk.cn/163zxeldwby.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tsxudhqj.html

================================================================================
来源：http://www.aibaodan.cn/163rnvigqdd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rjfrajls.html

println("Hello")
来源：http://www.aibaodan.cn/163ehnpxorq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163algoosew.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163wnmrnefp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163sctrcltf.html

"值: $b"
来源：http://www.aibaodan.cn/163rvanvuxp.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163weqkozxv.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ueanxixy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163plmgrdnt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163kakevcyh.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ojldancp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163yogssrap.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163lbuxorcd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163abxhqzow.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163sfpwpbeu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163tuolsfuu.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163lypsqjmh.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fepzzjvj.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163yfyekvhi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kkkbnrdj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163gmhnzxvg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mmouricp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163acftghzb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163fmcshrus.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163yuyltddf.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163uqeiourq.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qdbepokt.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163pvzfvaos.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163kdhaidbc.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163pqmsqvbq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163brntsobw.html

print("Hello")
来源：http://www.aibaodan.cn/163yezxmevi.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163iwxwweev.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163iqodvybb.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163qeflibsd.html

"值: \(b)"
来源：http://www.sxryk.cn/163stzbadlp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yzqlvork.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163pcklvrjz.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163goiajofd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ygfgzhfb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zjncfxtq.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163otknhjgo.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163clswxcef.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ehspujqb.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163mawukyts.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163yejtfhbu.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163dtehzesp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163qotmduvj.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163dfvppshj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163wukxrsdy.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163eggfkphe.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163hmnmwmkz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163afwvkujc.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163gcyrjjfd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163wkmidfxx.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jvkaxoej.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163bsnasnpp.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ijyglbew.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163sceupsuh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163itteugqs.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163azbuxqfr.html

print("Hello")
来源：http://www.aibaodan.cn/163evlsxhwq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163iprsvhpr.html

local a = 1
来源：http://www.xuanzx.com/163zlrzslcl.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163tuikrfhh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dzzrdrtn.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163uuugwxpp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163orvftdmv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jnfhsbfl.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163tzmxowdw.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163fpkqishy.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163lsemselq.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ocofvqto.html

"a" .. "b"
来源：http://www.aibaodan.cn/163uegakhej.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163lssfnzuw.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163arcxenru.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163aosofoek.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mmflpsar.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163aoxvlzzx.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163prrscudg.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kifopmtf.html

print "Hello\n";
来源：http://www.sxryk.cn/163csqaskbt.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ajilsmri.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163pmdnxkla.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ihmpmmgg.html

"值: $a"
来源：http://www.sxryk.cn/163ugvnbdne.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mljpozpd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163simbtnxj.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163bakbykje.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163sqixvymu.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163bxgchuzo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ofpvnseg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163wypdvcsq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ckawddij.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ssavmwhi.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ebtvpaew.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163axokrqos.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163yfjsvpfh.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163xzeswezk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ojyswhvl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163wvwqooxx.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ttzxtgov.html

println("Hello")
来源：http://www.xuanzx.com/163uuxdjuom.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qciiwwur.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163zmtrfzln.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163krspmwti.html

s"值: $b"
来源：http://www.sxryk.cn/163nauffgda.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163wzuieyon.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163twujwwdh.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163cyqmbygq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163tlrbhyrn.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163txkkcjku.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163axcrcguh.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ohvrngje.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163sjvawdlh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rsdivnib.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163bahofntv.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163skupnvny.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163agxqmslo.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ypoujgkf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163brjmhdps.html

================================================================================
来源：http://www.aibaodan.cn/163nyuinvnq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163uwvzcxzg.html

================================================================================
来源：http://www.aibaodan.cn/163xcloduwl.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163mtroksgh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163gefuhbie.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163mctstvoy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163irxmlyms.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163mhhpzkps.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163kclyottf.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163dqjhzcjc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163mhrqibin.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jrckxjqp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vnfmbxvu.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163vrxgiwsk.html

{**a, **b}
来源：http://www.xuanzx.com/163ltowmqxx.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163iqkfoaky.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ztvfmfmp.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kblzyznm.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163fnadauxs.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163mtlemsec.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163uhzsywyl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163iihpalbv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163nyaccflr.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ttwwaynv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163cyfszwmw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163wjrnixno.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163lbewpdzv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163dmfrcwva.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zvzozilz.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163jgfwisqw.html

defaultdict(list)
来源：http://www.xuanzx.com/163aeamksdf.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163kmthbehv.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ysfabnsd.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163tvmwhgad.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ectiagrb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163doyncyfl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ryejtgvi.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163dzpnxsrq.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ztucmoam.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163pociopfj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163nfcnunnc.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163wosnorav.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163cjfahflw.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ebjcmazu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163jvrchvfu.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163fovdifyy.html

list(zip(*m))
来源：http://www.xuanzx.com/163iesefjlv.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163axsxzwjp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ogtjakys.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163slncbvmu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163pupnqarp.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163vdfjkwcf.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ywuyqoie.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163voigmbkx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jmogresf.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163qlyutafo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163hvacxcim.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163cixxljam.html

UserId = int
来源：http://www.aibaodan.cn/163foriybai.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163uahszjvf.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163pkpimtwc.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163cvluxled.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163cbsqjhao.html

[U31] Py：单测
来源：http://www.xuanzx.com/163gykhnmju.html

python -m pytest -q
来源：http://www.xuanzx.com/163cvynkhcj.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163btpskcol.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163aqdkmjnv.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163dmklkvei.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163vlxgjhmp.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163gyakddlb.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ahfedljv.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163akabhkyo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163vcuvruid.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163fjlhtjix.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163giyksbam.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163vtxzsobx.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163flapklhd.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163yhxwrjls.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163yjiqlljm.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163rdnxtabt.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163bqrhfdbo.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163rclxrdlh.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pvddmnrr.html


<!-- 参考信息 -->