外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163aziwfsni.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zriydgaj.html

fclose(f);
来源：http://www.sxryk.cn/163jatnjgan.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vivykkew.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ubltzvip.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163xszqcxvf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163jkzjmorx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163hvfvpioa.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pqilevtt.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ugcewszx.html

(double) a / b
来源：http://www.sxryk.cn/163tvzqnipn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jhgmchyi.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163msummnoh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163qosnkhkv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163srnhnswc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163pkckeblx.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163szyakjbe.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qrklmpyv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163efliowrv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ulyjgehn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dbsiztsl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163pqflpcqc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ujgdcowk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163jplinedf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163dxghkfkm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163tuplotps.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nzosodrg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xohtpdzd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163yxejwqmw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163tppbliep.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163hgtzthus.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vdjkmucc.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163svkdvvjh.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163gcfklwvn.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zrqsqovm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gjvnafqn.html

static int counter = 0;
来源：http://www.sxryk.cn/163fajotafc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nyapzryi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163uxhdoguz.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163eqnrvvcw.html

#ifndef X_H
来源：http://www.xuanzx.com/163lvyckgph.html

#define X_H
来源：http://www.xuanzx.com/163nvrdoydd.html

#endif
来源：http://www.sxryk.cn/163uewaaqsg.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163bwaoexqn.html

#include <iostream>
来源：http://www.aibaodan.cn/163rfqkaqsl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163keciajww.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163szkozaha.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163fenvopph.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163etyjqffa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163kucfvult.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ihlgifbf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lftvucty.html

[S35] C++：map
来源：http://www.aibaodan.cn/163dwtkersy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tdjsoqrj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163lgnvsfoj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163yywhbgkh.html

[S37] C++：set
来源：http://www.xuanzx.com/163gsddczgj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kdfthtqd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163zqnvihdg.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163hvalzyfe.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163lxovrobu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163poxsrlrm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xwzhmmsd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163nfyuhyfs.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163bfkcziip.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163rijnqhqb.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vpskfvik.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163srdoljfj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ftxndegy.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163kyjxckzo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163izyccyti.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163pazlliig.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163nvtpcury.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vtgoxwjl.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mupujjdh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163waqigxrd.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163guikqbhr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163bjiqwdwy.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163jylmpypx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163frucgzss.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163vgamoxxf.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ehiobsty.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163kcnujzaa.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xujyhsuq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163muhllyfk.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163bqjthvis.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163cldddenl.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163yzcxgwxo.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163adeoywzv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163kohvpaex.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163itvusvge.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vyrwqihd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ykjgduwq.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163fmiaozfi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dixrkhha.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163jmhexnct.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163dzkdyvfq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163tvbetafg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163apxsqqrg.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163plirotme.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163nemvvujg.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163jyfnisxx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163uscpotrn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163udxwgtld.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qrofityo.html

================================================================================
来源：http://www.sxryk.cn/163qrnvaboh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163idnercqp.html

================================================================================
来源：http://www.xuanzx.com/163nleohqln.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163dbltlesw.html

println("Hello")
来源：http://www.xuanzx.com/163zfjkdbos.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hnnjrhso.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163zpftukzw.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163mhojvajv.html

"值: $b"
来源：http://www.aibaodan.cn/163mpncepma.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163cssbsmog.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163iwlwbuhj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bxhnltcu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163wsxjldwp.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163cgbtnszq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163onkogxjg.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bqibcqky.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zzfvzmvl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163jgnbfpkq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163khvkccpo.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163auctjmmm.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163kvmfqgmb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163nrbnmnxr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163yfsurwkk.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ggduyxny.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163clgeuahu.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ofaygpyc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gassgskv.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ldxgqgdu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163nkaaudmh.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163evrgtyvc.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163fvahfiik.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163paoxkaif.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163jckfvzmz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fdqamzes.html

print("Hello")
来源：http://www.sxryk.cn/163luhqsgkq.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163hupryrzw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163uofcasqs.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163idzmnmah.html

"值: \(b)"
来源：http://www.xuanzx.com/163ncjkorpm.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163gdullggw.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163phnlmjjb.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163navmcesr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163vdforbdc.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163busvnkqv.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jobmdudv.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xynwnnic.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163zeujgxhw.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163vmrjvujt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ymaxifnk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cmbnaikm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163inpmdqkc.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163zwidtwcl.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163rvwqigxl.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163unfuzhje.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yloohqgl.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163udihgeqv.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wozjzrcp.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163aphnodxl.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jnuqdhwb.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163eghfvdyt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ffekskww.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163tysfblhg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163zrfznqpf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163xoecnbgu.html

print("Hello")
来源：http://www.sxryk.cn/163epjpifuh.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163zfdhniib.html

local a = 1
来源：http://www.aibaodan.cn/163ekxqkgru.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163vdykkvrb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163zzsekfkh.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163brbyqypk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163veakwvxu.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163vacnfrow.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163vrlzfjyh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163tcuqsspo.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163cbownnkf.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ocnhhlvz.html

"a" .. "b"
来源：http://www.sxryk.cn/163snsxbsgh.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163zwuhdxzr.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ckrtwxhu.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ocgwswnt.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163mxuqptqf.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jizwfzcb.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163pqquzqdi.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wwhgunku.html

print "Hello\n";
来源：http://www.aibaodan.cn/163fztotfnb.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163pyhevshx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163tpxrgkqe.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163tbxgkipu.html

"值: $a"
来源：http://www.aibaodan.cn/163mgnqzeiv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163gmmbtyfh.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ggdmhvmh.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163akhcnifu.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163aztcdjmz.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163fvboptna.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163wnmspnut.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ukpnkkzx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163irwoahxt.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163xqpooaeo.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163jhhqmhkt.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163rxyicobk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163pubwfwqa.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163exxelqrj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163tavhrlcc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ylxliudf.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163mmqjnwhf.html

println("Hello")
来源：http://www.sxryk.cn/163wkbpdvna.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ugyvyovb.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ajzwalpt.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qkiyjxgr.html

s"值: $b"
来源：http://www.sxryk.cn/163edpjcgmh.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163irsjoecv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163hnquehkp.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163yirrdkyr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163qyeknxil.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163oitvduxn.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163wjjmkove.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163heknxhbh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163farbwaqo.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mfqsbqqj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163iibqtlpd.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163xvqsntmw.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163mxkaoacq.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163cdckebif.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vqyuwmvg.html

================================================================================
来源：http://www.xuanzx.com/163uevcfmao.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dpspcngb.html

================================================================================
来源：http://www.aibaodan.cn/163nozwbzqd.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qhmxxbui.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wmhsccjq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163bekmmgbw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163gaifgudp.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163qbiyoica.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163voxcfugr.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163kuugvtth.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163sbpsbzss.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163kaavutdl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jtelghgr.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163pxqpwekv.html

{**a, **b}
来源：http://www.sxryk.cn/163zyiuwvno.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163swvlynux.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163okivzuxh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163mdqliajo.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163avglfufb.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163yehimmbp.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hgftqepu.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163nmavaujq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163nrjuootd.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163vanaajxb.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163gexbyvou.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163vqodwerf.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mhtzchnh.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xbhxeofv.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163aghwbryl.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163kbnkwpnd.html

defaultdict(list)
来源：http://www.xuanzx.com/163wswaqlnz.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163itqnjvzr.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163skglkvcn.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163elmmufbn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163nuovyfvw.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163qrtujwpy.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vkamcidw.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163hnjuwoqi.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163zvurgbhy.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163vrsytpzn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163opjihign.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163grjlnlom.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ulczldeg.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163mfefqnqz.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163teopifvg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163bpnznrei.html

list(zip(*m))
来源：http://www.xuanzx.com/163vsfcrxof.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163xoazifrv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163rcvrcvyn.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xyiiiuih.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163kseiscxt.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163mmxrvroq.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163xrvgdvnl.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ogwdnrwd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ghwepmzu.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163rwonkhio.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ekkbpgta.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163zixkmupr.html

UserId = int
来源：http://www.sxryk.cn/163umobtykc.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163uytmtmxc.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163laoyimxc.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163vpvupygg.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163oknjwger.html

[U31] Py：单测
来源：http://www.xuanzx.com/163vvbslxyj.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ocyuofqn.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163snrqesta.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163yricspyn.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lktkkvmk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163tynsgkpt.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163kjcwushe.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163nvnonoja.html


<!-- 参考信息 -->