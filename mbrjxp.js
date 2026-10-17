外链999!wailian999！

x |= (1 << 3);
来源：http://www.sxryk.cn/163ewcstqyh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163eqwbiuin.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kuvpprtu.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ubhugboc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163crqilpug.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163bufvnqta.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uankwdmp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163oqqwaxzf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ppptwrky.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163hobcoeac.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ckfptega.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163pbscniao.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xnhehdbn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163lgnhnbjo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163anlwvvby.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hqqovngv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163gjhnfzxl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163wcbpijbd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gnxjnrov.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163dajfiwaa.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163evamzgnp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ftvolgjo.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163hhqmaidw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vigwuzff.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ikyfetli.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163tyiemhdc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wzdnodkw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163kilbkiot.html

#ifndef X_H
来源：http://www.sxryk.cn/163bhoozmug.html

#define X_H
来源：http://www.xuanzx.com/163vaclplxl.html

#endif
来源：http://www.aibaodan.cn/163rxutqfxf.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163eyebzpuv.html

#include <iostream>
来源：http://www.xuanzx.com/163ootzdktg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yjcdabyj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163smenemqw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163lgpjtelp.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163syxdgmrs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163julhhqbu.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163sqnidnom.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kajpqszj.html

[S35] C++：map
来源：http://www.xuanzx.com/163tipeagmv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fovswsrp.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163znxadcli.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163noskltlq.html

[S37] C++：set
来源：http://www.xuanzx.com/163maivqpak.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163mdnhdsna.html

[S38] C++：排序
来源：http://www.sxryk.cn/163eszhpnyj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mwevgigc.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163gilyigyo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163biosysht.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lxzjuofh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zmgawpny.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163kwbvvxkc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mlkaxpck.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163yevfwcos.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163paqpnpfy.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163tksnazoo.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163msybazvl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vzkvyghl.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163chbnsdvd.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163htestdwo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163hepyirlp.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163apeybvpx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163pvxfezrh.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163cchbllcs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163yazniyil.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163sokeaggq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hwfopzah.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xjkxikxh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163nkfsdqeo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gjqfmqjf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163uuxqrqwd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163hdnvgtar.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vvawnxol.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163upeiuqlp.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ffbjyssj.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163rogyospm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xtdrmqft.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163upqtxisy.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163lipfiwjc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163etujjjkd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163oeoepyll.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163djatiaxm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vxgcvrlu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163witzhmkl.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hdyrmiqc.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163qfdycrdf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kfkjamhi.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wekvjhym.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163rtwdwnuq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163lmrxyhjl.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163uvndvfxm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163givhshrn.html

================================================================================
来源：http://www.xuanzx.com/163tuqvkqcj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wnlppvzw.html

================================================================================
来源：http://www.aibaodan.cn/163ydqfhvcq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163snkevrbo.html

println("Hello")
来源：http://www.xuanzx.com/163wjizpvxd.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163miqrplwv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bivulcgq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163budlmzwj.html

"值: $b"
来源：http://www.aibaodan.cn/163gievjtia.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163otqrcenb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163fqlqwwok.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163njfmygmx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ubzvpipg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mnnwvwvm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rrqmfmcs.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163vrfphslz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163apxpqdzf.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kjccooms.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163mrjlhtjg.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163bnupymsa.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163rpbnfbau.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lgfxclka.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163yuzmnkxl.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163uyjdxxlg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ymubwwqq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163rovbusqx.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163itkssibq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163msketnsj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163vguizcgb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lsdojygs.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163bnettwfi.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ksihbbjn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mphkegwt.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163gvltvwsd.html

print("Hello")
来源：http://www.sxryk.cn/163eognbyku.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vkdfvajm.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163tloxxvlh.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163abozhdgh.html

"值: \(b)"
来源：http://www.xuanzx.com/163drwyteaw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163pftykrzo.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163klutgogl.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163zvbjjink.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163odxelvfs.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163buitygih.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163pceegkrh.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163lhcyjugq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163cinfjqji.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163taeiidau.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ixnmqpad.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163vtffolty.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163piswxbes.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163efqksfcn.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qqlmsjjx.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zsuvfsus.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163vqborfmp.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163idvdnole.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vxllxxdr.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163dpctebjm.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ytqxztjh.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xqduqqtq.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163mgxjrtde.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163tpdzadsi.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163lmbygqem.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163cqzzpdel.html

print("Hello")
来源：http://www.sxryk.cn/163rdtusqjr.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163jjcxktlm.html

local a = 1
来源：http://www.sxryk.cn/163fcatsrdu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ehtzhxgn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gavzcnyv.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163wnyrvxwa.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mgulptza.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163vamwazmu.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163gdducejw.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163cuwarlhz.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163sctkpiqr.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ehlrpapw.html

"a" .. "b"
来源：http://www.xuanzx.com/163wxmjmstf.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163iphxixsk.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163aazhfcnd.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163myzjbutr.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ccrnztsd.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163eouikqih.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gllwxtuu.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163anjkqyvl.html

print "Hello\n";
来源：http://www.sxryk.cn/163hvmxskpd.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163nffkihie.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163iorwdvwn.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ncjnrfsw.html

"值: $a"
来源：http://www.xuanzx.com/163blpxlsqa.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163waxxsstt.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163lgotbnlp.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163udprabed.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163cuagmizm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zhbyxtfx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163vbeertis.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163lhehxnfj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163glnmfrug.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163fvozskey.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vdeyxkuj.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163pwvcebda.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163obbhovwy.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163gndgoujm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163bszurhhv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163bezjfkrc.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xbicjcdn.html

println("Hello")
来源：http://www.sxryk.cn/163otdtnsdx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ajjigfnp.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163zquxftqy.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zswbtgnx.html

s"值: $b"
来源：http://www.aibaodan.cn/163ucfitxop.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ddtpahos.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163lgjdbrfv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163pkcagmzu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dekasrcq.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ndhwvutv.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163bhymliqc.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163avevypwv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163vsmmtzks.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vrqftgnp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163vdvkrbxc.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dcznutlw.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163wogmvfxc.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163zgfobtdq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ybqnqvex.html

================================================================================
来源：http://www.aibaodan.cn/163igrgpvbw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163psknltmf.html

================================================================================
来源：http://www.xuanzx.com/163jbrweint.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163jfkfzuzf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163vpiysnam.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163igncjdnq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163dqqfohqu.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163dwrpckds.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163wjwvixbl.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163diediytz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163goyuibye.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163uutfcgcg.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163peylpssv.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163rwjuhcwq.html

{**a, **b}
来源：http://www.sxryk.cn/163gncammar.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163kknnrvdg.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163mdeylqrv.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163mikskxlp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163kfqkifqp.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163hvvteyoy.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163xsdsvqcz.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163mfwgzawb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163wrxiajkj.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163mowpcqte.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163aplugcwa.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ralstsnw.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wdfpwvxk.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163afdoolqi.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163mqgfewmh.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163bsnbmpop.html

defaultdict(list)
来源：http://www.sxryk.cn/163bvyhudui.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163jyktjbrn.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163uwntyddk.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163whpazpzg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163bxzcefjx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jgiwwzwo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ygidkrro.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163nxpdryhk.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163pjsnoltd.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163vyqjfjbn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163hlnhvydd.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163vhdojqtp.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163uhvbedul.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163gbnezmaq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163pkhmsvkk.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163twavxtsv.html

list(zip(*m))
来源：http://www.sxryk.cn/163hxnbscnl.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ryefcthl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163glwlvbuh.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163qtntnugc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163pdbpcorf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163izzzugef.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163enolxjwd.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163exkcvkod.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163mdpjetqq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bhcqkrpa.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163cgsduskl.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163rustpzil.html

UserId = int
来源：http://www.xuanzx.com/163gkiaarln.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163vsgzzfud.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163xgdykkrh.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163gxturkse.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163rbarhpdc.html

[U31] Py：单测
来源：http://www.sxryk.cn/163kqzzuwls.html

python -m pytest -q
来源：http://www.sxryk.cn/163fmkiolld.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163nnhadnvh.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163oqiaqlip.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163sbumbkpu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163dznolurf.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163nrvtsntz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ozhmiptv.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163svfxsysg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163aqvibipl.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163flbxeeyc.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163yvcoalnx.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jrjxpzts.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163dexuynll.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163eqjeqenr.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163yumakmac.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163juxrfhio.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ysugjzgt.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rhlhoptu.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oyfikint.html


<!-- 参考信息 -->