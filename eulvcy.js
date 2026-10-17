外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mhgtqims.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163nsegqwaq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163onfwsdcr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163yrzcytoa.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163arhmuzmc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163msxlgorm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ovopgnbt.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jwwiirrm.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163appbxesl.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163cfggordb.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ssukbmvh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163acdobdcw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163zcufadzx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ftusntpo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xirwcebp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163xvoggazy.html

#ifndef X_H
来源：http://www.sxryk.cn/163zztjtstz.html

#define X_H
来源：http://www.xuanzx.com/163bibbrbkg.html

#endif
来源：http://www.sxryk.cn/163nbkbaxul.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hjhpyjrr.html

#include <iostream>
来源：http://www.sxryk.cn/163adwoxsrg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163vnttpmsf.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jixypcsw.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163zaruhqyq.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163vmbzqena.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163filgftjp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rpkdxokb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163swrqfmqp.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jgczzgpv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vhtvrozc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163vifkzjpo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fmkzvvgw.html

[S37] C++：set
来源：http://www.xuanzx.com/163rxxfjcrz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163dicssnjq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163nnmgsyll.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tnveobqm.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163aqqlysof.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ngrpkxsv.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163wgusyifs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rhhxwxwg.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163gwxxmbth.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163vxkopotp.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163uyldeqsq.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tdcmilxe.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cmmutmqn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rkgakxlw.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wlmpqevm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ubpxictb.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163inygpicl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wcwuyqwn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163cadoyfey.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163iorsaspl.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163dfzbltjm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163moactltp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gbvctcwb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163opunahty.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163syppafbr.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ssnyrhcj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lurcagyg.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163hrdchssg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dmvbysts.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163lljpiahv.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163njrhsaez.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163oyiatvsd.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163utnkzyva.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163iswpjsqm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vdgccdyx.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wgywpvwr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163paympqyb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hdyzvzek.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nrooyksq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163elhplfmf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163cszmcawr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163fcxfkitm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163etvatmzv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163olyzbwhn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163eodriimj.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163lctcgped.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163pchgqnhf.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163crsyvphu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163yowadbvq.html

================================================================================
来源：http://www.xuanzx.com/163sklrkdwf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nhmkuein.html

================================================================================
来源：http://www.xuanzx.com/163ejehrlzj.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kehxpgou.html

println("Hello")
来源：http://www.xuanzx.com/163sozdtogn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163dnwgmhxv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163gnfvpgyk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163tafmemwe.html

"值: $b"
来源：http://www.xuanzx.com/163uvyskrup.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qjixvciw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163gmodcuam.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ncbanqly.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163bifalsik.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163gtuxsihe.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163cpjijqxq.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vipqkquf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163srpwrsfu.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163pwkugepb.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163gxhvwxsi.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163kopnfeku.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163eswghkeu.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qqkbwjqi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163lvwswelv.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163hldzndvq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pktfmlmb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ffktfesy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163esisbkkd.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163zafrgogm.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163bbtkezhz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wlepfjuk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163rcuxbjhz.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163tyngwscg.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ekodfxpu.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163tcfozago.html

print("Hello")
来源：http://www.xuanzx.com/163nyhzbhpo.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163zlmcsdxb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kkbiszcv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163vzfpoyry.html

"值: \(b)"
来源：http://www.xuanzx.com/163gqgcstkv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dkraoecf.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163uvtsatsl.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163pgtmmsbc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ofgkkkej.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163idqzdwkd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163mcbweltt.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163lsgmwcai.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163yvxlebvj.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163saztfkbr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163vgjmcsto.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xdvmtsnp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163zavsvxjk.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ndlngftb.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163xwhnqgny.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163zfifwngn.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163zdlyataa.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163oiusyfeq.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163qvktzmrt.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ucchpjer.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163wjxwvrsf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163xpypiktd.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xvmlpsmw.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163edxspsxs.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163irakfpsr.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ibfojvze.html

print("Hello")
来源：http://www.aibaodan.cn/163jshshpjn.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163dvsplcjw.html

local a = 1
来源：http://www.aibaodan.cn/163kmjrxldw.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163suzrfwlx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163lolttxgd.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163miwidctu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163drgxtmuv.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ujzbyfzi.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163nqkguzrj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163mhkxnrgj.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163oqpgsdje.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163xaqmnyww.html

"a" .. "b"
来源：http://www.sxryk.cn/163qujdcoxb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163xxadlshs.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163oqtulnpq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163amutqaoi.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ougiebam.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163nckrnluq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163arwmfizt.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ksmbgjkf.html

print "Hello\n";
来源：http://www.aibaodan.cn/163yamapdlh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163qoakiata.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ejqrtgzz.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xlgvocth.html

"值: $a"
来源：http://www.aibaodan.cn/163iwbwfsiu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163onerruik.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hzxohsma.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163tkiehgqq.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lhevtiip.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ahtmnood.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ctpzklyc.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ufmzqvbr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163wxqwaydh.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ijexzybc.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163slmzmduo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163iuvgridq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163yzrczgua.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163itvsimgy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ekttqynz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163pjpcvxte.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163nnpuensq.html

println("Hello")
来源：http://www.aibaodan.cn/163zxoomhiy.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163xvmjixrn.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ynwvpqak.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zcycakbj.html

s"值: $b"
来源：http://www.xuanzx.com/163knodyytv.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163mjbprvzz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ofysnxlb.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163whjlulpc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163swrxmkzj.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163piqktqnp.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163gavuizcf.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163sjldohsi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vhuvctdt.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163hkxzldkj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163hirvsybz.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163hcqnldnf.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ejvgdrrv.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163pmhmfsrj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ncbppksd.html

================================================================================
来源：http://www.sxryk.cn/163vtijkcaq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163eaixvxvq.html

================================================================================
来源：http://www.xuanzx.com/163dxktjket.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hlawuyuy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ywnouqvx.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163dzuelnhn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163yjxhxjxb.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ulidfgpb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ynpjrfrb.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163llourmug.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163zstggpuc.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163trwprlcx.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163eosvvtpr.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163govtnqih.html

{**a, **b}
来源：http://www.aibaodan.cn/163fvuskzfh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163orwlotpm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163rhjlxyan.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163focqbkrd.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163uerrpakh.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ralzzwaq.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163sjfpkvyc.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ofybyziw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163hgkmqbmj.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163zwwlzjlm.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163twinfurx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163prcikxqi.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163zntnxcdr.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163gpnxioni.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163rexypzpv.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163tnyaaqgz.html

defaultdict(list)
来源：http://www.aibaodan.cn/163lezvvajo.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163sknzhmqr.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163yjylnkdm.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163allrjjxs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163giwoorat.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163yjgowolp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163wwbvspzr.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163yqjmuicy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163gnxquxiy.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163tysweviq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163aslqjptx.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dvpqnqnf.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163krgkjlno.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163bvmvzktn.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163mtrmcett.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163wdwahhkc.html

list(zip(*m))
来源：http://www.aibaodan.cn/163urrxiqwb.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ltzfkwbr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163qcrjevmj.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163tqlrfszk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163npykgadx.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163tboflnas.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163mxbfmgeg.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163wqasihov.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163blqjnzus.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163nosxxlfw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163qcqytzri.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163davvkwiv.html

UserId = int
来源：http://www.sxryk.cn/163kbkrjhag.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163sjagyszo.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163hpvwqdwu.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163orbugnta.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163qxorjiby.html

[U31] Py：单测
来源：http://www.sxryk.cn/163xwfvaiwl.html

python -m pytest -q
来源：http://www.xuanzx.com/163udcesfeq.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163vybhtxwj.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163hsslmlwf.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163thhbfroa.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163tdpzvftj.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xmlsmyiq.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163qqjlwqry.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163avbrxtkd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163nauxvtxc.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163trgnjlgb.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163gblsdwbj.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163yaceldre.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ffyeziou.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163dunpxfxw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163clevolhy.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163zrryxoil.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163xysvuspy.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163brktbasd.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163afbbbqgd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163aftemrsq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163xutzcnhf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163yrkuvbeg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163tgbblwdk.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163foyfrlzr.html

namespace App\Http;
来源：http://www.aibaodan.cn/163niizhxhx.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163wkklpivo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qxietvod.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163xmotqqri.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ohuznmfp.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163xfhuotdc.html

?string $name = null
来源：http://www.aibaodan.cn/163ocgwdtaa.html


<!-- 参考信息 -->