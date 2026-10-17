外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fxrvxkvb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163akhcffgv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163bahyuyxp.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zctimbql.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163howxvxqr.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ywtrqbwe.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bypzbevh.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vpvibgnh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nfzgfnwb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zgnqvoxx.html

fclose(f);
来源：http://www.xuanzx.com/163qngoeahd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mqgihgqv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163hvtzjoxq.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163xksuwkgj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163jrcrnmxa.html

[S14] C：枚举
来源：http://www.xuanzx.com/163neafkrxb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163abhdenre.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163wfyvzddq.html

(double) a / b
来源：http://www.aibaodan.cn/163rnkynhyw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163gqvxtmjm.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163newjosal.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163vdfdefpw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163bwnvevsq.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163kgpgbprz.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163dlbywhfu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jlywindv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163iuxgydmo.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lpkqwaoc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163conosvlw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ahqpkygi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163owjhyljq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163fgmxcydv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ljxpktgd.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163zubxapdw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163agjhrxgd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jbfnnvvo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qwuxlxrj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163iuyugrmh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163tyjlmqdi.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kpkcqpaj.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163sysoruhd.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ldsejshs.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163vclsbvqu.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cknozhlh.html

static int counter = 0;
来源：http://www.aibaodan.cn/163salzfqtq.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163xtlbqnew.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163tbttlfow.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163injokejm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163pcgeladu.html

#define X_H
来源：http://www.sxryk.cn/163mfxlejpv.html

#endif
来源：http://www.xuanzx.com/163xlghzlan.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ytpnlmyw.html

#include <iostream>
来源：http://www.sxryk.cn/163jsllfrjr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163acwsedgp.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163epwznfjq.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163zmgjmbgh.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163soyepswn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vwjctyan.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163nwfhojkb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hncvrlhh.html

[S35] C++：map
来源：http://www.aibaodan.cn/163tazigxhx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gazliyxg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163qjuogtpl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163atfdcfvy.html

[S37] C++：set
来源：http://www.xuanzx.com/163ydcrabyz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mgyjwokg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fjiwzdwl.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163igsvfpug.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kxrbnahb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163lyqdjyxg.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dwqyfdxp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qfggnfii.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ygjiiyhu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163pclzketa.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163vkglhwbd.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163rqqutend.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ekdktvcv.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163swohvteo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163flfukjxr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163uzsfetgt.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163mowxmepb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gbuvkgom.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ewkkdgdh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163abgbhtsy.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ftbgtqya.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163sjjpjucn.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ogwrufcx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qkataslc.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xvklpdyw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163iugbyzlh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163whidukjj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xdhcghes.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163sztxhjxe.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tyqrmfic.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163whqgfokq.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163uecqjebh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163kuxxmwet.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zalpcuna.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163slpdzpwq.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163viskghvu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163pdrvbmzo.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163yeiaxezq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163asdacnfz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163fbqajhew.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163yxghqvsl.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163nzqgsfou.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163avezpfep.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163thtewzjm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ekuseppe.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163gyhxzhcq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ndwwrqkb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163zhxktsrh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163rxknwarg.html

================================================================================
来源：http://www.aibaodan.cn/163cxeabgdi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tpdflzxa.html

================================================================================
来源：http://www.xuanzx.com/163zcxbqtiz.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163mewyaqnz.html

println("Hello")
来源：http://www.aibaodan.cn/163pbknwhvc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zdutlfxc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163mzhfimio.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163kqbkgppr.html

"值: $b"
来源：http://www.sxryk.cn/163bkdnkxjh.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163koazyvvt.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163rwtvroek.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jghrbftm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ykkcvngb.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163osshlwrq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163gvvrbocy.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163hxrbvkoo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qfngrgih.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gpkblsup.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163mbxslwfr.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163hgledlll.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163bwkhldfn.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163cczqvgxa.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163plqwxtyq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zsomggzb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163gdeuggqg.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tuhjjtfi.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163xqdaekgs.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163zxyikqyu.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163tpngdcqv.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163tpajdxdv.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163hunqauvj.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ewvtssuh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163oksxyptb.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163aybwcykc.html

print("Hello")
来源：http://www.sxryk.cn/163njhaywvi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163uyxgnsav.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vsxnjdty.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163naunryqs.html

"值: \(b)"
来源：http://www.sxryk.cn/163olonsonw.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163fybyqahv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163jurqjrtf.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163txtqmclx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163gftbenar.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rqtqsjbm.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163mkdirwyq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163vevcrmjy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163vyywxqdb.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163kijydupq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zyqcvezp.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163dtryttdi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163maonlwha.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163iuwtinjm.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qtxqxnsx.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mftlwzkm.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163oodlfxsx.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163efbdyodw.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ozfujoec.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163rkbwegus.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163rtgbuydu.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163kquzidao.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mznyqsli.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163aynqjuut.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ihtnuiyx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163jgvhfmmw.html

print("Hello")
来源：http://www.aibaodan.cn/163xkoxhnsz.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163czpnpulo.html

local a = 1
来源：http://www.xuanzx.com/163beygtjwn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163uerlyags.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163fahbihcd.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gkckaiqh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163tvilinih.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163venhootb.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163lqourwcd.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163sbxybsql.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163coxermkh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zwimfgjb.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ntswxlhw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163fveicyzi.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163buewqpaa.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hfarkteq.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163cmrcgciq.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163whaygxsp.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163oklylumb.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163iqhtmzzc.html

print "Hello\n";
来源：http://www.xuanzx.com/163jkblbfzg.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163nuxlggrk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163loecnmew.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163dwfmaatv.html

"值: $a"
来源：http://www.xuanzx.com/163pnvlbqzm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163sxgsyhxm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pwcxtnrn.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163sgxxhlbp.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vbubninc.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163aonadomm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163oevahbmr.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163mhmttsad.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163uajyxmkk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ypddqucn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163isnxspti.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ocxumbtt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163cxoblggg.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ildzuext.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163mkvebrlk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163zdrlywqi.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163lzwjxtjw.html

println("Hello")
来源：http://www.aibaodan.cn/163jyqogbzy.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163jumxpaig.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163xjwnaktn.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163kwurpoxd.html

s"值: $b"
来源：http://www.sxryk.cn/163igdfwckj.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zxzjigpa.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163jfrorfjw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163mdptbshq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163taoivbof.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163zfoappjm.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163zwoddfai.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163pmtnrjys.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163hoxhelmn.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163okfntskk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163sirslnfn.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163chsfzyes.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163lfpmcrjn.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163rxxtbktj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163wyiplhdy.html

================================================================================
来源：http://www.xuanzx.com/163tukraxdu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ymumqrux.html

================================================================================
来源：http://www.aibaodan.cn/163mywcoolf.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ihjoibvj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163rcflbums.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163tuwlyggi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163cujoymzr.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163cxmtjdaf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163tomowwok.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163rnvwoqrp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ogvhoywe.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jgidwpxl.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ikdmviur.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cbmluidl.html

{**a, **b}
来源：http://www.xuanzx.com/163zqbqcggw.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163rkgtzayu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qenztvfu.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163fdnlvohz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163qgngcnpv.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163xhxzasgd.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163lotvqfwk.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163lphuirtu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kdxokkjz.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163cwnnsnsz.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163waienbqw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163goxrvffg.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163yosaxdxn.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163wokdrlxv.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ynzxqrqo.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163mzliysof.html

defaultdict(list)
来源：http://www.xuanzx.com/163cdfpfrlc.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163uutmbstn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163dzwnzvvv.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hgbhbfne.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163weiprlsw.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163urypahdm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163bpyrrxja.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163plvlkvlt.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ewpkwokd.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163izfqkmqv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163tdvbzokx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163frwgijdz.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163fsfeuhjv.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163agyabiyo.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163nlrctmhu.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163fuvgmasv.html

list(zip(*m))
来源：http://www.sxryk.cn/163cewascgi.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163znxzwrgr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163gpvkhefr.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163qfakzsnr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ijcxgznw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163bpfaueoa.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163gnqyszyh.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163mvlypouz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jbqcwgpp.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bquuwwpy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163crrepcfz.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163yzhvrqra.html

UserId = int
来源：http://www.sxryk.cn/163kqpfzjiq.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163dwxoymvb.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163idbjzwpo.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zcvptcmn.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163cwnewpju.html


<!-- 参考信息 -->