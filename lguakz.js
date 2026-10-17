外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163azivywih.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163pbulmupa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hvihmfci.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163sapkemye.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ydvqmgdu.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163daalrqfo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qtwcqrxx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163abdvmlzi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163cetloowf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163zycprolx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163htvexzfy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163rrtqbkjp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163jwoqnwju.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cijuskbp.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163tgovswqg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163isftfkra.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163uqdbhilb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163amfbnnqn.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163rjvpjiut.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163sqzpmzrx.html

static int counter = 0;
来源：http://www.sxryk.cn/163utdoyavx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163lcjmrbbl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163qrhzudhw.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163gtbfttkz.html

#ifndef X_H
来源：http://www.aibaodan.cn/163vhsqxfhd.html

#define X_H
来源：http://www.sxryk.cn/163ncrjhzgl.html

#endif
来源：http://www.xuanzx.com/163xcwgsvdp.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mxauxyrf.html

#include <iostream>
来源：http://www.sxryk.cn/163btwtvqld.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163fhlnscmx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163isyicksw.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qiotepmz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rxjxkbqh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163rlpscmiy.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wowpqvkq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ylfsttua.html

[S35] C++：map
来源：http://www.sxryk.cn/163joudpxjh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pksrdxiz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163moyvycpr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xqclwbge.html

[S37] C++：set
来源：http://www.aibaodan.cn/163rhlvwxnc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163hyslqhve.html

[S38] C++：排序
来源：http://www.xuanzx.com/163opdftmwd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mwbgxjuf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jsooqyuh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163iybggrxw.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163lzahnows.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163phjgjagi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ifqwfseo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ozfmgtrh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163bzjtinmm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qwadqjed.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163fxxsfwqb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163afrwqkyp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163foqrimjh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vttgejsc.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163zclstooy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yimajbzs.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dlbwsnnz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163dbtdonxj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163upvplomi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xssgkfzj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gyiudwms.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qkjqlyca.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163hnerllqj.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163jromoxct.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vwnoldml.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tdmkszqv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163puziaoai.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163myfupitt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163wbrjcvob.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163anpwabwl.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zseqqcch.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163luebkccj.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163mlalkizz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rqodgupl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163cpemrbit.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gabjgrsn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mvyonmvj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163bzqnuudv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163qmbvditq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ggipltwi.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163harrqfou.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163lqmhgrmc.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wlrjlcgm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163efbljfjm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163dtzpkiun.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mmhbyxfy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163pcezrmhu.html

================================================================================
来源：http://www.aibaodan.cn/163bsskjhjp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163colhhils.html

================================================================================
来源：http://www.aibaodan.cn/163pubriyxr.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163nqljxquv.html

println("Hello")
来源：http://www.sxryk.cn/163bwsdykdr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hncypjvm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ptoiuheo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qmjekwmn.html

"值: $b"
来源：http://www.sxryk.cn/163edrucbkm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163dezqzssw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163sryviaew.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rmheacve.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163rlghdhuy.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163pyjfstdf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ybsvtknb.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ospzrlxw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wvdpyqyh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wrokbuck.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xzuidxhc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gyukdisp.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163wlmyajis.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qyertdjd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163rruagjgf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163pwetbgbr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163qyooxrhq.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163azqcwizs.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163zqhhjzpw.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163daupavpz.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163mvhgasuv.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kpjrthzg.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163grgdgajt.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163fkeqbjey.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ptunawdx.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163weoklrxw.html

print("Hello")
来源：http://www.sxryk.cn/163ecepbmrh.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163mfrdpahy.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163hitcpgbz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163tfgszerz.html

"值: \(b)"
来源：http://www.xuanzx.com/163jeuijeiu.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ztndujrb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fcwybhmz.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163tairakzy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163kgohegcz.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163kjcydhvz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163dcmrfiyc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163avnnljga.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163lioaxdoj.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163norneodv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zsqcupmk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163auctxpfg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163fawmqmot.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163yxyczirk.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ryynroka.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lujnvlvg.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163getrccbv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163uweadyzn.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163dunjtcia.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163febwxmwb.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163zpwaxfzp.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vbwmhkxy.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163sdjvaoqk.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163oxxxraig.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ldfqaukd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163vjlxhnne.html

print("Hello")
来源：http://www.aibaodan.cn/163lewmvwvc.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163exyolier.html

local a = 1
来源：http://www.sxryk.cn/163zejqewqh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ehbajxqj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163anktagnc.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163flzngluz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163mdwerfct.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163epojimow.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163iykfytnt.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163oemmaedq.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163gubksnox.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163qoirwaaz.html

"a" .. "b"
来源：http://www.sxryk.cn/163pwycfzty.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163vjhzksrc.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163qhxeediv.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163kykyzkjf.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163tjftiury.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163cfhjzhch.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zbwqbrsh.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163xkfktmia.html

print "Hello\n";
来源：http://www.aibaodan.cn/163uvnvomsl.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jxkgrqtj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163irbwtzoa.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163thbprrwt.html

"值: $a"
来源：http://www.sxryk.cn/163wvkojmep.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163obwflqvo.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ohwwgpuk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163thtioujh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163hnofvqwy.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163wwtmmbhl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163vzdbcjkc.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163yxhtrtcm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163pvqpzggr.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163oryltpuw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163nyjdoeen.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163wsnutcck.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163lhhfizqy.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wwjykyhh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163yrsgyfye.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163cahktefg.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163xedmwnyd.html

println("Hello")
来源：http://www.sxryk.cn/163elrldqoc.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163yiejvlnc.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bmqdgkle.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ezupemfu.html

s"值: $b"
来源：http://www.sxryk.cn/163ezncrimt.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163oaufzxry.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163jqyikbjh.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qmkpfmkq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163iiurbidg.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163bvispzal.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163mrzqzjty.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163njsbaslb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163trqiydjr.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163dlfnjwtv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163uzoyomrx.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163cjnvbomj.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163pinofcqm.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163xdzlxurz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163trohwwzl.html

================================================================================
来源：http://www.aibaodan.cn/163strllogo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163gcepxasi.html

================================================================================
来源：http://www.xuanzx.com/163ybnxhgjx.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163uprgdchb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163idxiejjq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163stcmejwq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gnfastks.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163zqtarlib.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163kbalxkbd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vxzixgzo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163klnddlwq.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jtmuxypu.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lhbkxzam.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163rvcxroaw.html

{**a, **b}
来源：http://www.aibaodan.cn/163sesomxnk.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163glohumcd.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163nyhmyowe.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wirtykuv.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163knacviyd.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rlfmvorq.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zocfnzuk.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zaraylgf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163pikkcfpg.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163jeinoplv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163kycibvdg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163haexflog.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163zqhkwign.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ocmxypvh.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163aeujzoup.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163blnrrzbu.html

defaultdict(list)
来源：http://www.sxryk.cn/163fjqeenmx.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163nnyotzbq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163lwehsjka.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163pgljyxvd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mqcofjvu.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163qybqknza.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163uaszgbpt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163fgtrqjqj.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ekdbvmta.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163fkfmhsup.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163sqibkbqn.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163lurwxzzq.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163jdtfhokc.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163qomvbutf.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ihvurvsh.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163hmlvygkc.html

list(zip(*m))
来源：http://www.aibaodan.cn/163lfqkyhxi.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163rbkbkpcu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163fpcrfmhb.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163bhhmlwop.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163wibwgskr.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163mrbjmplu.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163xbrxkprz.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163tqstomao.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163enymcvii.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163rqxahhiq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163wygnhuyp.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163cnuaeuum.html

UserId = int
来源：http://www.xuanzx.com/163fqpljlsr.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wdzagaji.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zafchnqf.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163extvomva.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163oatpxjof.html

[U31] Py：单测
来源：http://www.xuanzx.com/163kwzcsvpe.html

python -m pytest -q
来源：http://www.sxryk.cn/163yraxrzfp.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163maemikzy.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163utxbgjkj.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163lrjrtchr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163qazhjhkg.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163irtepnma.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163vfqgpsai.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163adplmzbe.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163kvwzecja.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163idehzabl.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163zjdmywrm.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163gpkqskcy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163wgslpgws.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163lcxnprml.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163xlybzwkv.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163vokwcppw.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163dgtueyeg.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163fyoeewag.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ttbqzlgj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163xqqzersa.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163satkypdh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163znfmanjs.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163zyqheslz.html


<!-- 参考信息 -->