外链999!wailian999！

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163bejhrjfs.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ljbxxrjz.html

time ./run.sh
来源：http://www.sxryk.cn/163izomxllz.html

================================================================================
来源：http://www.aibaodan.cn/163vomxrqdz.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163onscolhb.html

================================================================================
来源：http://www.aibaodan.cn/163qcvwkkaa.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163jrfcgegg.html

#include <stdio.h>
来源：http://www.xuanzx.com/163vvleeome.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163atywljxw.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ffbttpwm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hswnyjkk.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163geevyupc.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163uatuvexj.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163jskwzdyb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163scihhewo.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kijlbmoi.html

strlen(s)
来源：http://www.aibaodan.cn/163dtvbvnxo.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jorzcxsv.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163emyjzopo.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xkmjcntz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fzozhyoc.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163plqczbeu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163epriepro.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jpiwqcgy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163frcfkvpx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163fduisqks.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fkqcrdyi.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163zrmweyut.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gvwkbofw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163emmdvpdf.html

fclose(f);
来源：http://www.xuanzx.com/163vrybknrb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yhnohtop.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vdgaprqa.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163gxwscwhv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163sfdxzgyi.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ecxetfjj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163gyifhsfm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163trrtegll.html

(double) a / b
来源：http://www.aibaodan.cn/163xongebqv.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mvdzrnro.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jskeiqix.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cpbaxbcl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163yeptyjni.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tneixwnk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163cvumnhkl.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163vdsgzcoc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fygtgxsq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163hyftntqb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163utfgzwvx.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163tubzprzb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ebhjccdk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163lmhdlnax.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163feyyrtir.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ybxkqjag.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vyaguplh.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163hwisqfbk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fgkcsjge.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163iseopaxq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163dsfwgcce.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163svjsakuw.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163wgmwxuwq.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163pyjpyilh.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bebmxqzc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163nkkrtgpu.html

static int counter = 0;
来源：http://www.sxryk.cn/163fcchjcyc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163eugqlaua.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163tsfvjvzu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qfeynfoz.html

#ifndef X_H
来源：http://www.xuanzx.com/163kboxhvke.html

#define X_H
来源：http://www.sxryk.cn/163qfmtxafr.html

#endif
来源：http://www.sxryk.cn/163nhfqrwze.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163lkbbyato.html

#include <iostream>
来源：http://www.aibaodan.cn/163gojzbgsk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ocmvmqri.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163rlqgsyfl.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163oifribuh.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163uwrknyou.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163mjarykzp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163esgjlrae.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163lkwqirrx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163suzysjlc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nficlzle.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kyhvusup.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cstbitee.html

[S37] C++：set
来源：http://www.xuanzx.com/163oepplmtg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ozqmkfcp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qhdqqkmm.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163amcnwmzp.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jilyvlir.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ajjxmqzk.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vqfyzydj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163kunqurcg.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163fxdnbkln.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163cleistia.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kbpcokbf.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163brrotgfv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xiujsvcy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163fosivyqp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163smrfyrms.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kovdleld.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163caicogqs.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163jeszcjwe.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163islasgqj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163gpfmffly.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163neqbeiet.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tspqfbdf.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163uuthbtcp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163oklxndyy.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163znyjqwao.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jqlmahef.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163seyfldbh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163pnxzhcwu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163bxfuvaux.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163fxiyuglp.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163wmetpsct.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ppacbjud.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163okomfgle.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ejbtfgyj.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163scmmornb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163uhjdgkjc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163gitpyakz.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163bhwflazz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ohwpulwd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qevusoex.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vjesdvxp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163uabxzklb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163johhbvkp.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163hwtkwuqf.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163aolheaec.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qkbucbls.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163cwjtxxvy.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163peljkvmc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163vgdrlaif.html

================================================================================
来源：http://www.aibaodan.cn/163losrxwrk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ijjfbmte.html

================================================================================
来源：http://www.xuanzx.com/163arltacmm.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rhzwcfpi.html

println("Hello")
来源：http://www.aibaodan.cn/163higahjce.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163xfbbgjus.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163fxftzrsz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163zqiapevd.html

"值: $b"
来源：http://www.xuanzx.com/163hzkqhoyk.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163unxfmrja.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163khvqkxzm.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163fngqaxty.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163cerlsxur.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uqrrpdzq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ljxbgmjh.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163kexlprtx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163iswfpkyf.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163cvgovtpe.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163wspgmwfp.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163rkonjngz.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163puoxnxlf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163uwintdbg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163qvdxvxhx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ygvsqwyh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163xkirtvpm.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ehuweswt.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ptmattcx.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163aamoamzo.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jvzwnhsn.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163yesljepl.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ogrbqilf.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163knklccre.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163pwryzmuo.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163hntjbtll.html

print("Hello")
来源：http://www.sxryk.cn/163eloltknq.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163zkfpcshr.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ltzdmzzi.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163fjmbzisc.html

"值: \(b)"
来源：http://www.sxryk.cn/163skkdbpoz.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163zduvfdlk.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163fecoyyla.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163njhvauih.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vzmgtxbu.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163otecmdfo.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163bhuzzndx.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163pxzyybhx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163loaztlwr.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163rtzfymxq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163lduhjfrg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163nvvwupro.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163jsdhckrj.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163bthfqbpj.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xfaggody.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163yyjutjcb.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mymybpej.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xhwxvxro.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ykwyaewk.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163mkfgqoqt.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163haloodvs.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163upzkdvzj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163jmplnhln.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bikbkwiz.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qqdyxnbe.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163lccwzubh.html

print("Hello")
来源：http://www.aibaodan.cn/163ejjfshmk.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163hxkftipk.html

local a = 1
来源：http://www.sxryk.cn/163wlhicwbu.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ehwbaclr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163jglblosh.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zdjmrngk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163roohjbgh.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163tsyibcuc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ugiuafth.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163yuedvuci.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163nggyehxk.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163mxwzjbvu.html

"a" .. "b"
来源：http://www.xuanzx.com/163vwurexwp.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163fxbxyeom.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zqmulvcx.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163aczuzmfb.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163xkjyhzji.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163zzkhpyfa.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163udfszmhh.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ekqlzilk.html

print "Hello\n";
来源：http://www.sxryk.cn/163sxhkoxuw.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163eymkmxfa.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163fkqmrjiz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163uywocnep.html

"值: $a"
来源：http://www.xuanzx.com/163nyrhtilk.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163riouaklz.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163fcffezxx.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mpcnljab.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163twebasnw.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163nlwxhuvx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163upypcwow.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163htlfvyue.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163kyxzxuxx.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163daxtkeii.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163eikqojif.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163vaoryibh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163gwjmyekz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163vrsnxmaf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163fnjacqkb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163scbawnxz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163afxfmfbg.html

println("Hello")
来源：http://www.xuanzx.com/163hxwmevnf.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163cisclmmk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ogydcmdl.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163tywqubqi.html

s"值: $b"
来源：http://www.sxryk.cn/163nfcukqeq.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163iuoxryio.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ucuftamz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rgdxtiso.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163imlffjjj.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163dadeohup.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qpnvxcwk.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hzfsadtj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163htkadlfy.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zsyfgwry.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163yasnhjex.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163absywgft.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163tmudglmb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163yqucshfv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163lqmohilv.html

================================================================================
来源：http://www.aibaodan.cn/163kxoisnxp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ycwmeouz.html

================================================================================
来源：http://www.xuanzx.com/163nvgeqinn.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163zgnnhjlh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163jnglphur.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163yndhprzf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ljwsdrjd.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163jzxtxmwp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163wcrwomtv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zlihqsop.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163tyszittw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163grkqrmoe.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163plvysazb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ibqiirtm.html

{**a, **b}
来源：http://www.sxryk.cn/163uolpdizw.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163rivnuqlm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xfozutix.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163obyybrbk.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163nobkphhv.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163vihrkokv.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ksisrtvb.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163aaytorig.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ghxtmvpp.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163wconzcew.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163pynqeymp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163syvdthxv.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163jhbmsffk.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kmcrfuxk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163imaacvij.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163nctkqqor.html

defaultdict(list)
来源：http://www.aibaodan.cn/163lruhgbno.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163vxmbodvu.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wbijtfia.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163kslijuiv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163zcdbngnu.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163sxklxqek.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qomskyia.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163wbwjdfle.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163lppgtnyd.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kpweomje.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163epwyyfii.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163gssqdsjb.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163olydpgsp.html


<!-- 参考信息 -->