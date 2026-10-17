外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163spmgsdxy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163sfdjsbxc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163obthklul.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163fjrgssfq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163houvvqgq.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mahjqfmz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163eluncrmp.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163dysnwwyw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163satxhxta.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ajfpqkxo.html

fclose(f);
来源：http://www.aibaodan.cn/163jlhopclx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vkaqlcac.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163qphkrgwq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163fikhpcoz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163titzcfph.html

[S14] C：枚举
来源：http://www.sxryk.cn/163esrcubgw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163uxpqhmlx.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163fjziclmi.html

(double) a / b
来源：http://www.xuanzx.com/163wkhmbkau.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163czsyeash.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ejuptmib.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kowydwvt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bmtdiopv.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163pvxbtabp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ltpwydmi.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zyjkrbtg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xfxbsywf.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163biuzxack.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mricifri.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163rpkarcuq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163knvjbygo.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163srqseiuu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163nmdtulfp.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yzvzgxlo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163xyqsaxho.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qislnbix.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hghrlpdb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163wpseeolg.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163pgauxgzk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163posrtifn.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163icuqhzfm.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ytsxgiqs.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dxmavayt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rphkwqgf.html

static int counter = 0;
来源：http://www.xuanzx.com/163ytukgtyl.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qmhdskvr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jahonxhb.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163lpebuykb.html

#ifndef X_H
来源：http://www.xuanzx.com/163elmtgsqb.html

#define X_H
来源：http://www.xuanzx.com/163bigkjpnt.html

#endif
来源：http://www.xuanzx.com/163hvdkicns.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ntehzhvd.html

#include <iostream>
来源：http://www.sxryk.cn/163rvjzuqzb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163qrhqcchd.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163fpdjzzbr.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163fvyyhpky.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ydrjwqdn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163shehnxzf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163qfsvzeoc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163njquhcae.html

[S35] C++：map
来源：http://www.xuanzx.com/163yxcnobuk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nkgkjihr.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163pyrpjkgg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zvjihjwp.html

[S37] C++：set
来源：http://www.sxryk.cn/163obpdenou.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163souooool.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ipnaoslh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jwlamffi.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163sgfcbpad.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hallhvfp.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163cgssbuko.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163rbvflidi.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163brlklarp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dsoqbyku.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163mgnqhujj.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163etjrpndy.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163oeqkovxw.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qlepcsyc.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163waczqurx.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163zumjhwuk.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ssdtdsyr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163rwmrpfjw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ybatbesp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ywtolihp.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163mgdnnxkp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vegrlmau.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163jmmzcarw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163iojntjru.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163pgnbhkzv.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163gsnbklcf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wtjsykrz.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ehznrcwq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yxrrnnvw.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ahyrpeem.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163krnrudnu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163tokysgcd.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xyodtqyn.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163mmytmcph.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163khseegwt.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163khfaebaf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xqcqvhjr.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163foumtlbh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ladfvqwe.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rkmggwqp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vipnxbxg.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bdwcwgvw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163smcqkffs.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163fexayojs.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ihxytjvp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dnlvmjap.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163wtlalpqq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163miumywtn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163tmpdnzyd.html

================================================================================
来源：http://www.aibaodan.cn/163bmqfmezl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ikgcdzfb.html

================================================================================
来源：http://www.xuanzx.com/163zowqkufb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qpelenhk.html

println("Hello")
来源：http://www.sxryk.cn/163zwinoqgo.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163zkjcoejt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163hfxzypcn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163epxieuzx.html

"值: $b"
来源：http://www.aibaodan.cn/163fznaaelk.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mrtunfex.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163rtexosow.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163zfxkkfwb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163blmtdflx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163wrxejhqo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163gbirixjw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qzhxkpla.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zvciscuz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163zaynqmsg.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163dfttijzp.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163kijxxsdl.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163lbmhcmfj.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vruswkch.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163svkbdfqy.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vojwlbur.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163umkamltk.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163bolwuquc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163alvxvuob.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163fdvecwvn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lpvilnxy.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163vpcnttuq.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hrygzcuc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163uppvwhdk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163viayxdfv.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163wvbeuxhu.html

print("Hello")
来源：http://www.aibaodan.cn/163zogpugak.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163pxyxzxtx.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163akponljb.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163grjxyehz.html

"值: \(b)"
来源：http://www.sxryk.cn/163klwsplqm.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163rzlrgvmr.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163amaumkvh.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hkilztwr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163iuhiicnh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163bakbwnxt.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163upcosxng.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ptnjaysb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163kiiegpnb.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163mfxfxqeu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xpyyknzt.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163vlnoslex.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163pskxopye.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163pdpfskai.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163lgkblbym.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163mphzcpdj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xbnhfxcs.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163bapccybo.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cuiqkwrz.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163bvsohxwv.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163qhwfjsbd.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163darbnmwy.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mmcyxpyd.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rjmnhsye.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163xjfcffhj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163qkarxnqd.html

print("Hello")
来源：http://www.xuanzx.com/163gqsmdteu.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163gtqujtdx.html

local a = 1
来源：http://www.sxryk.cn/163jlaqptgk.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163bbjeybik.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163dgengebg.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163luicvjdm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163glmekphu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163zzevxvve.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163xdwpohuv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163widiwcxv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163mxxkxjzz.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163jrwlqock.html

"a" .. "b"
来源：http://www.sxryk.cn/163gvdarofd.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kucjpyoh.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163lomqrrdf.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163fqlkobaq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ltmbuwiq.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163qbidrvow.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163lelbpcbf.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163qehriech.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hzwaxisb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ixdqhkbm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163kqndmvrm.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163qlcqmrmv.html

"值: $a"
来源：http://www.aibaodan.cn/163wrcrjfzq.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ukposkbe.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163vzefqikq.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163oibpuoir.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163swgcbigk.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163dvrkijgy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163jqfhmqqb.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163vhotzbod.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163itwwojju.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163efvfdzmx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163aqhvnexv.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ffvozult.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ptkbhkpw.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163epsllqhs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163tlshgnbk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163qltaroqh.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lpsizhya.html

println("Hello")
来源：http://www.sxryk.cn/163rqnqizoe.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ttsjirkr.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jdjhsfgp.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163pxfsytxp.html

s"值: $b"
来源：http://www.aibaodan.cn/163bgcydbhn.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163whoutpdb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163encwjeaa.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163baheoguf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fquqaidi.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163gxlrjpsb.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163vrbouzbi.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163rsopbpgr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163uycbkfvq.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gqhnfpif.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163rcuddjrq.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163tejxslzx.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163xpsyhupq.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hphkdjhd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163sngrkblm.html

================================================================================
来源：http://www.aibaodan.cn/163bbkeoprs.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163chvpbbdv.html

================================================================================
来源：http://www.aibaodan.cn/163vbpdlped.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163npadqvyt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163iihgbnxr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ypoofotq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ggmcoagn.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163syhtbvnp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163hctuebqz.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163eesdhvoq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163axgjwigy.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163cpzvcgtp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tlgxuizo.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163tjlzxusy.html

{**a, **b}
来源：http://www.xuanzx.com/163fombqlmy.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163wmthlbls.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163oeaqifuv.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163gelasndh.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163nobpxjze.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163jncfiirl.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163fwidbkpw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163cawxuekb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163byobomnl.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163uycwkzrv.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163fczcellt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163jlzwonsf.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163nesyrkqg.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163rbrfistz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163gdcpgogw.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163nhygdbjo.html

defaultdict(list)
来源：http://www.sxryk.cn/163avgmqkvu.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ptphswzr.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hirviwkx.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163hvpzfhyt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163votdtaol.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163liejcncr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163jwunoxtx.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163obwumbdq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163yzfzwmma.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163xptxsmut.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163abdjgwca.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ooxrsswq.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ikjptipp.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hojcfkcy.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163lbdyokyb.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163euogqpez.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jlfcghje.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163gchwnnzx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ezbjsqlw.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ixoohuux.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163uyugtoef.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163nivbihmz.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163epxmmdhq.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163uevyjfhj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163onrhbvho.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163cnowqhcv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163lmmlmggo.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163dhhsznxn.html

UserId = int
来源：http://www.xuanzx.com/163afqbovlf.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163gyytnawn.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163albqyaio.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ebvrtayt.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163kxuosmev.html


<!-- 参考信息 -->