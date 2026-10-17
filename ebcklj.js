外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163yczzxoen.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163jmhxznmq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163sufqrevd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163hwlslmiq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163sikzsvku.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163amhscgsm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163kotdkhmt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163xpslmdis.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163rltebahj.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fahzydag.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ozroyoxo.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163sxsyneoj.html

static int counter = 0;
来源：http://www.sxryk.cn/163qtlvkpgs.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163gtkfmhuz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vngjqxug.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163jmnswqgs.html

#ifndef X_H
来源：http://www.xuanzx.com/163kuuxxkev.html

#define X_H
来源：http://www.xuanzx.com/163rfqudixq.html

#endif
来源：http://www.sxryk.cn/163pmtkjxrb.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163fnybxear.html

#include <iostream>
来源：http://www.aibaodan.cn/163ffufdywo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163lhljtjwl.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163teckiwkj.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mrdswnjj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ovlsowqh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ofonyzmv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163dvgvrzyz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163lajedmpk.html

[S35] C++：map
来源：http://www.sxryk.cn/163xikrmyxn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rgjobqvj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163vrgkzesf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lewqgkkz.html

[S37] C++：set
来源：http://www.xuanzx.com/163oarmzghn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163chamwrkv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vdhqbnqp.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qtkuotlb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163usfidvcw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wnrpgapx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xchpvmbz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163yonojzkt.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163numhluxs.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163rzwbgbxi.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qlgwhdtc.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ldneozqh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163nmiiegnj.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163niumwfij.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wgvyfiip.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163hgjfgvfm.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pcatdppx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163hbcelgqn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163arcyfnhm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163xqnnrywo.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ecqhueha.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163xgznrftu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163zvuipacz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163urfmjaga.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163jlenqcvt.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zbcclypa.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dbtgdowv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163wvzdjckb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163lljtcstv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163zitaaphp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163iixuoesp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163mwpoxlye.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163umipiwhc.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fxjpodsx.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163eiqdjqgv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163igundwhj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163csrpuuml.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163whabpiey.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163yqaojmug.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kkindpls.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163befszsdh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163jqxdkegx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qpraznpg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wyqmhirx.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163abdqnovc.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163uxpotjtt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163behbdzhl.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ylsdcxpr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jyypxwsr.html

================================================================================
来源：http://www.sxryk.cn/163sveelbkb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hwaxwure.html

================================================================================
来源：http://www.aibaodan.cn/163payyvwfl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163tsyyibcz.html

println("Hello")
来源：http://www.xuanzx.com/163ftdizdll.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163zdiefxpm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ssfvqyut.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163vsxoumyq.html

"值: $b"
来源：http://www.xuanzx.com/163oihnlitn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163uffbwevy.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163xeboblnr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163xywibkte.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163krpqhtiu.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163eyrxyvba.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ajcjytxo.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rtboznan.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zplkwmmy.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163jmtuvtnu.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163zahtfkyr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163uwaheblx.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fitpvjll.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163hwumcvgl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163lpvxtyky.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rqrpirdf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pnkipkba.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tfrxizao.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dqcklchr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163gqixybxn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qvdamcps.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163tznxsubo.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163xjzthwce.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163qxfqkxux.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xyxtnjid.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163qbajpcxh.html

print("Hello")
来源：http://www.sxryk.cn/163gqxhelvb.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qvrzgpnl.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163tpwyuwjo.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kogyqolu.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ibmddjzw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ugulghum.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163slnhstio.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rztrtakk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fbnngjhr.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163avweowhn.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163fizzlcvy.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163uywrzyqx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ktoijsox.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163fpdbcsfk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rltomerr.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163czjizoxc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wzonspcq.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163twpdnltv.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nolclyjh.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163sppxgkwo.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163pvibiybv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zoaapfta.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163lsjsfxdd.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ssnnfxjv.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163comofhhj.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vgleingu.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163aclbqexg.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163pxrmpqna.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163cvbnkytf.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163isrxipnw.html

print("Hello")
来源：http://www.sxryk.cn/163dacjvatk.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163vfvtmhkc.html

local a = 1
来源：http://www.xuanzx.com/163nxnkkeou.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163iqcebyll.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163hnktsoel.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163mskeuigu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163fzvtduxj.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jpnazwca.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ibangatj.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hbllknck.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jogoshnh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163wlgvsajl.html

"a" .. "b"
来源：http://www.aibaodan.cn/163swdwjxxj.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163blmptppl.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qpveikky.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163paowcdpw.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163fghktgvn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163hcygjkrt.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163fnaeasvj.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163gbdqswzi.html

print "Hello\n";
来源：http://www.xuanzx.com/163vfmanqjf.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163cwmaslcn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163yttutufe.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163inhpodsl.html

"值: $a"
来源：http://www.sxryk.cn/163uzubgdvv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163gcamdxrc.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ucrnnqsg.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163knkzvvww.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163xjiekdpx.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ykfnxrgx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xlruwwld.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163hyicwjte.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163dbpojqpv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163nvibgbxz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163jzsjobpd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163rctwgcrn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163nycjconq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163rxovgxcg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hbymgliy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163zxbqgogd.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wyldqsqv.html

println("Hello")
来源：http://www.xuanzx.com/163okdarpyu.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gvhxepvr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163zkqfwojb.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ykrdplcp.html

s"值: $b"
来源：http://www.aibaodan.cn/163rtigbrad.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163vshomhbu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163zgkjwqhy.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163aqimyorx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ysnbuffr.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163twxrfqkp.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wxhnumcx.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163fgnyfimf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163lmosfsih.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163wplownux.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wfilldft.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163tzlkychx.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163wpgfjuoi.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163cxqxvcfr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163acqcdlyr.html

================================================================================
来源：http://www.xuanzx.com/163dvqqclyq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xczwypeh.html

================================================================================
来源：http://www.xuanzx.com/163mgrautcu.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ihezqycj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wslzpkyl.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163vephhfjb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163oohgvhfp.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163kjptggor.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163czposrhs.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163mqaiosdz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163awqlalzb.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ngkktrgr.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lniekyfd.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163kjucwbrh.html

{**a, **b}
来源：http://www.xuanzx.com/163yzjipuyg.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lxswmhly.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hzbmkgoh.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163gonhbjdx.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163cijrecns.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163aimtgdvo.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163okjjewmy.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163azpdcokv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163wqfiwqgr.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163hdagmxfh.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163yvwybhnu.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163azwqidqm.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163tabdrgxo.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kgltvxqm.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163tcnoiakd.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163cvwsatmr.html

defaultdict(list)
来源：http://www.xuanzx.com/163fjqalvpl.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163rnmdhwrp.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163gwwfbarb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163taikkvhi.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163rncgghvb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163egufnrom.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163twlxigre.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163hzinouav.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163iqdpvrvh.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163fovtpuil.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163yolwwonc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163zdtwyppe.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163qsbxghbd.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163lpxellfk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ltrvslno.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163kparmtpt.html

list(zip(*m))
来源：http://www.xuanzx.com/163vlcimnxj.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163joggguzy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163xbazdsxm.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163jnwskash.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163tudflwsf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163sckdvlzq.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163dfoaifug.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163odobgskx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163vbgfgguw.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163wcaquwnz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163vajevyjs.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163mxxmpsyh.html

UserId = int
来源：http://www.aibaodan.cn/163iccejrcv.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163auanxmkc.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ycdjgfxr.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163tnfigvxf.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163rfsijvrb.html

[U31] Py：单测
来源：http://www.sxryk.cn/163nzwtwdup.html

python -m pytest -q
来源：http://www.xuanzx.com/163fhzipmll.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163fkoulzch.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163dafqangu.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163czkiwqri.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163dcyrykxs.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163gbiuipsa.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163bzolwgme.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ejehyklo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163eqcuqerh.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163tbyrpdjk.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163inurhumm.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163frwujehq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163kmkdksws.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163brkjfkuk.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163qyjyzulp.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163bnszumwq.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163jjqcluaq.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hflhrqlm.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wrvvhxoy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163kxxatdkt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ibfogskf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163gcjyxiqe.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163mgupmgga.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163zvyamxog.html

namespace App\Http;
来源：http://www.xuanzx.com/163erhrsdnd.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ttinwmwy.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163texqgrmi.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163bvjcbkxx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rgixfnom.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163oopifspy.html

?string $name = null
来源：http://www.sxryk.cn/163zyrpbvhf.html


<!-- 参考信息 -->