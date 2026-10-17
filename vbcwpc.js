外链999!wailian999！

x |= (1 << 3);
来源：http://www.xuanzx.com/163qdizjgvm.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163uwyntrni.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ikpvsfbl.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163dggvtzqr.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163fddetxfo.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wctwfolj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ikfxcami.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mljabqxc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hhanyjeq.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ucwegpiy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163zuvfzkpn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163htbiclgx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kshzaizy.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fyesskkw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163miibloqd.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163crkzezyt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163uwvxhgzi.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mtspcmrc.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163oaanqrxt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163eydwmlrs.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wvaluhsg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163orcmjbwt.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163brwjzbxw.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163riwlulhs.html

static int counter = 0;
来源：http://www.sxryk.cn/163hgoxnnqw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163bixfjsfu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163mwrwqopa.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xgrhdryk.html

#ifndef X_H
来源：http://www.sxryk.cn/163xwxlnjjc.html

#define X_H
来源：http://www.xuanzx.com/163zazsaogg.html

#endif
来源：http://www.aibaodan.cn/163fctpjopb.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163uftrguau.html

#include <iostream>
来源：http://www.aibaodan.cn/163xxvgrfgd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ioluacme.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ikmlgkye.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163abdqednw.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163wxrddfwz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163uvujgraa.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rljnnyvy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163xintpfsc.html

[S35] C++：map
来源：http://www.sxryk.cn/163ebsftcpz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xokfeozj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mpjympmm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yyslnyog.html

[S37] C++：set
来源：http://www.xuanzx.com/163kdacigfl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163wdvdzkag.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163klwleamz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163woyoyuoh.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163cmdcozsr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163xbdlvywb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163syflodgm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163opsxkvkl.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163aquphpxd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163shnmgtjh.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163fwglqfsc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163bqxkjriq.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163eliftsxe.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163eliywyvd.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163iqkeozhp.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163cpbkejxp.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fycgwvvy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zrgdhydq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163oppafnne.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163dtqkjsko.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xmzzyasz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163wtlmcoco.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163mmoybccy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163kdvaramt.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163sqpxnror.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163dzqfkzif.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163aliukddz.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163lezjuine.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ipijcxrw.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qkyxpiex.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163swromqwc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lepjcvdh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wgsnnqzw.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163arxdfotv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163owjssnbo.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163zsndlawq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163fmyozwmf.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163pbwpudgs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163wcfxgjlx.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kfenfddl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163fanndvbq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163cjvivpcs.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163nwpncrjq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ewacpnsu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163pxacpvjw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jqtxkqxu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163yyktyufu.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dmohezol.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163yjaeybqu.html

================================================================================
来源：http://www.sxryk.cn/163hbyrjbmg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vfahfgjv.html

================================================================================
来源：http://www.aibaodan.cn/163gqbnpapq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ztczrsav.html

println("Hello")
来源：http://www.aibaodan.cn/163wxmguggj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163yyswpmrs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rdcgmmyr.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ynnkmbhb.html

"值: $b"
来源：http://www.xuanzx.com/163xezwepnf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163dbgqiblb.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ldcgzvcj.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163webdonzw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bvzxagcr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163kppiawza.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163yutujcye.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ehsgkesp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jjazofty.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tjlsooug.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163kxksdaxt.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rzgmrmgn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163gxisqnih.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lvuzryys.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163sqpfjfkz.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zdhjieje.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163dmfcmdjb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163doxyxlzv.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jonnuybk.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163qgwhcjgd.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dttinnvy.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fqmhxasl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163bnjdhpus.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hzlqzaio.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163nxrdxtal.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163xkxweziw.html

print("Hello")
来源：http://www.xuanzx.com/163plwhnmbc.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163axtzourg.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163rxfadtrb.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163afznkgnu.html

"值: \(b)"
来源：http://www.xuanzx.com/163afbjvfmj.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tcaxmthc.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ptzzmfyp.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163czvcnnql.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163vrohosui.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163rfxokrug.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ypwerxkm.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bfrkwujr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163badrzbfo.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163kogjljaf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163gvmncdht.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163jkcbkjlh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163uvhctipi.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163zxskmpud.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ucpjncyk.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ilznvfxk.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163xxeemwrx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163jvcbrecv.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163hqmmgldq.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163leylrajp.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ubkqrbrm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163rsjddiud.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163orpgskaa.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ezrhvnca.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163rpzctuoa.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ybuizvqr.html

print("Hello")
来源：http://www.xuanzx.com/163uyrgtffl.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163pvjsugzx.html

local a = 1
来源：http://www.aibaodan.cn/163nvoikmjp.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xweekzhm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163dwxeuufo.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qypkzgtx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ihibckjc.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163xdowudye.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163maqqzrvi.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163kmqpbzek.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163wuzohmqw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163eywhlssm.html

"a" .. "b"
来源：http://www.aibaodan.cn/163altorncy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jmruestp.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qrlzyyft.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163qunzaklf.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163zxicibbh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163tsuwslma.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163gjvuwqfl.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ssjibyuy.html

print "Hello\n";
来源：http://www.aibaodan.cn/163qhekxpuw.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163qzyshvby.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163sehewgon.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163sqkszkpb.html

"值: $a"
来源：http://www.sxryk.cn/163upihmgyu.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163htqiuabu.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163rhoxsfah.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163krwbmoyr.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ivtourzi.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163rrkqjnni.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163kbddjkku.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163pwtmiwby.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gjmtdhbw.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163bevjskdi.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163gmpkqxpc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163zbywamvg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163qlqnrrwl.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ibacuufy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163lgnrmozk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163crmgflrk.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163mqwdyzle.html

println("Hello")
来源：http://www.sxryk.cn/163nlkyufjm.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163xpxfcdae.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163heqvqqer.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163tgnhawho.html

s"值: $b"
来源：http://www.sxryk.cn/163cyhmkpit.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jbsqlgtw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vpuzbkxw.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163xmqonyya.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163pzzypxij.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pdpadgba.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163bpvghdji.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163aohigrgd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163fxbjtqqg.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163tdyirzvq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163dnssngng.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vebrqqpc.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163sqdqyqwo.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vgssgwga.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163rbigxswg.html

================================================================================
来源：http://www.sxryk.cn/163vybtfnbq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163oscpyjpe.html

================================================================================
来源：http://www.sxryk.cn/163ypqmozuv.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ujcvtzcv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ooggxjoe.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ritnoude.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163motvstrd.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ewqsgezt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163aobkzwyc.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163icgowwtj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163wmajlvgy.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163wxhxdpde.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tmaicqeo.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163eshvwjkk.html

{**a, **b}
来源：http://www.sxryk.cn/163wjmkydvz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jmdngonx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163mevdtvah.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163iwjredsy.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163oqaoskqk.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ngiqkqta.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163qqvojlut.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163kpuiaanp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jpwmebst.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163dxbogqcz.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163trqgklpv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163uzvrfjns.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163bsgxpkoo.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ybltwwwn.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163hrtdsgqg.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163xznyakiz.html

defaultdict(list)
来源：http://www.aibaodan.cn/163eartokgn.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ytvnpdla.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163xfqwzele.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163khnmgrru.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163tgzeznip.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163tnpetjnu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163unbcuggl.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163rtcltgov.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163eolebxod.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163uomdrvir.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ducghabq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163auxxqmws.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163nwyyxyiy.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163epvgfxgv.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163elphdqes.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163yyrwuliq.html

list(zip(*m))
来源：http://www.aibaodan.cn/163usbbsuxm.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163xpsuibdw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163mywrauhj.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163tihzlppg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163jgtnowov.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vzxiudah.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163iiggsuvw.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163dzejgeuk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163eqowzssv.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wxtyjwjk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163cdbslnvy.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163qmnuuuyk.html

UserId = int
来源：http://www.aibaodan.cn/163wbodibrd.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xsyteirb.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163rsjtdnmp.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163acfoohdi.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163wewirsea.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163iieiyaoa.html

python -m pytest -q
来源：http://www.xuanzx.com/163jhedyydl.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163lleywwdu.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163dkmsyrpi.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ewrezqqo.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163oipokvyz.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ipvalnes.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163jhnydvrl.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163qzcqvrwq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163gknmxcks.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163sdodbfix.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163embdyafl.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163hqbkbcix.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163bkqkogdk.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163coyqoonw.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163jepzpsui.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mpbqddfe.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163tjizoycd.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ghymdmuw.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163mdailjzf.html


<!-- 参考信息 -->