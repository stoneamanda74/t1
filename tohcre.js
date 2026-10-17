外链999!wailian999！

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wtucbhlx.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xhygdjxx.html

time ./run.sh
来源：http://www.sxryk.cn/163oornvhsg.html

================================================================================
来源：http://www.aibaodan.cn/163lcazwevj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163nprojtci.html

================================================================================
来源：http://www.xuanzx.com/163faliiolt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tmgqmlwt.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ilwpqpfi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163hpclfmdk.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163hxaxmlkh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163gimjihgg.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ylcqdfdz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gvueigwk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163oxvifcnd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jcnxczjz.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zodtozml.html

strlen(s)
来源：http://www.aibaodan.cn/163hkvjashy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jfhztztf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163iygzxaco.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ctkumbov.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ojfdzftb.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wqvegjlt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ehdndpug.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163tfyqforx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163kqgozark.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ckybntes.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163mkxybieh.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163pqopxcjb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163yzrrnkzu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163iviwdkjb.html

fclose(f);
来源：http://www.aibaodan.cn/163jzjdtjoz.html

[S12] C：写文件
来源：http://www.sxryk.cn/163nlxgswag.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163nvebdjmn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163oajfsdzc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163jujwgiah.html

[S14] C：枚举
来源：http://www.sxryk.cn/163bbjedmat.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163uyqaqvri.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xmidytht.html

(double) a / b
来源：http://www.aibaodan.cn/163ykolnfdz.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xpxuoiam.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163crmrjfod.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ycqmahad.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nwyvhlbw.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163obcecqwi.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163fvtgcssw.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163bugijzxx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wrlrfoip.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xfhxduqs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hpppcclw.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163jnacydbf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163irqhbzvt.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ozmacrdd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163spyfsqwv.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zfluhyll.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qukqhisg.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163srlzgfju.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lavkmnax.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163tovtljmc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fmlylkri.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163tvedkyof.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rmbxcjww.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rlnyefni.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163lkghkjrf.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wpeymxsg.html

static int counter = 0;
来源：http://www.sxryk.cn/163aogincni.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163skahdsas.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mglnslmy.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163womhbiug.html

#ifndef X_H
来源：http://www.xuanzx.com/163vimvelwh.html

#define X_H
来源：http://www.sxryk.cn/163bgwljzzw.html

#endif
来源：http://www.sxryk.cn/163leemtfgv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ivovjmcq.html

#include <iostream>
来源：http://www.sxryk.cn/163iztlwvca.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163bpyvmjmd.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ooiyksil.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163hdwupwvn.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ecmalnou.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ztrcxbik.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163bdifslnr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163hezzirkh.html

[S35] C++：map
来源：http://www.sxryk.cn/163euitivtj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yegfwuqm.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163qqhorifw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pkcqrply.html

[S37] C++：set
来源：http://www.sxryk.cn/163bxjduvgc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163idstgikc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163pblyyxli.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ntrwnxhd.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nisqiqxk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163kvloszgi.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163tytazeyu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ocarzoyx.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163fblaegzk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163owehluwj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163onmlyrpx.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jgsfwwwf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163cexuxxee.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ewvivila.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zwrtkimf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163sfmkljbp.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163guzjhndt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163uerhrvqi.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hzcdyfxy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163dwsslnxz.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163zlqtskur.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163gtyntjyq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gnuikgoi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163oinyfmrh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163hbhicfbg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ufyyrlzy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163poqtybrv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zswnpovl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163opvkfiaz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xmjbsumt.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163hjmmhusv.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vrjalfgv.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163hyuctuxx.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163uenmbiru.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163waldowxr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163avzhkowa.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163bavjaslo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163cgjjtekq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pxzrgtlp.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163knlhgeee.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ayasbvcp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163acpomcsc.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vhyfrsgi.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163stgdewmm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hplsxsfz.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163nwmtvtav.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ufgsqoia.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wdtjsfem.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fxhpvysr.html

================================================================================
来源：http://www.xuanzx.com/163iloivowk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wnkmvbzz.html

================================================================================
来源：http://www.aibaodan.cn/163jrbiadcs.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163sceacyqe.html

println("Hello")
来源：http://www.aibaodan.cn/163imiuszef.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xcfrtgwg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ecxvayak.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fkbhlxuo.html

"值: $b"
来源：http://www.xuanzx.com/163ahvwmyac.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qqwgcghn.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qhglwfhq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zhpxwipm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163vruwxsvf.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ryctaejs.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163wrecdpry.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163uojttkzw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163momuqxsn.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xzvoocww.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kprkdaeh.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163nghjubbb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163sjngeyth.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dlwwiyqq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163vzoglhpk.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fnmtdudi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pspvhcen.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163gfzibrra.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ajfbzalf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lwxusyhu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163oshyxddv.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163rasftyhh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163kgkuweru.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163kclwvibe.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163inrhqncx.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163thmqsnme.html

print("Hello")
来源：http://www.xuanzx.com/163tpibrnxn.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163evhgihbf.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163muufassh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163rmbvqzve.html

"值: \(b)"
来源：http://www.xuanzx.com/163fifrqsux.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qqwcbpyr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163wwrqcgzh.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hdtidkhx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qvoxvwaw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163djfeolnw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xheqauvo.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dnsutxnb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163kzvwtxcw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163femvdact.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ntyohptt.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ottxyjsc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163smplpjxn.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163nxmfinoc.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qdijzcls.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163jnaoemhf.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xauvjdaa.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nznnzkxg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163sncmsety.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163nwafxvna.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jiuotjsr.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163whkwmgdi.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vqoraheo.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ecuyqwuf.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163uzpbhibi.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mfjebjkt.html

print("Hello")
来源：http://www.sxryk.cn/163kqrzgfeo.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163mtzaoseg.html

local a = 1
来源：http://www.sxryk.cn/163tirxyalb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163fwyewekc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ntkwqbni.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163auwjeiej.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163etukjrln.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163wjoqhbme.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163jjtwagxp.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163xkyhyxcx.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163hbbrpadc.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163kzwwvyyt.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xsefchuy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163htripqlq.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kdmzdhdq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nhxjtuwu.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163acgxonza.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163nimxmmhj.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163mqvmquzs.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rqlgsuxi.html

print "Hello\n";
来源：http://www.xuanzx.com/163gumudrbj.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163kzndfimq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163uioyjtiq.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163bkspalbs.html

"值: $a"
来源：http://www.xuanzx.com/163eajpbhat.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163aadgdjgq.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163uvfkcqgi.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163jyedljuo.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163sidzrlvq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163jszkqqaz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163cupabfzz.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163lhsrhhsj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163wggxwvze.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163kodaljph.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163wwxemtql.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ugzomvim.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163lfnztvmz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163xkmhkhkt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ukuurwpn.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163iqrvvjqj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bsvcghcm.html

println("Hello")
来源：http://www.sxryk.cn/163zpvcviyv.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163lihcdiek.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qatapdvg.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163sikrmdrj.html

s"值: $b"
来源：http://www.xuanzx.com/163helzwzae.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163rwnejydz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163lzbgufts.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xmihmrcu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xbdwyajh.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163sbsacwnq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ljyncwxg.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163dseyptno.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163fwqwybah.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zzdtlwfx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163qldvhqdv.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163aossxsvm.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163agnobznu.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163rxnxopec.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163oudakhti.html

================================================================================
来源：http://www.xuanzx.com/163zanauekw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zytzfhpd.html

================================================================================
来源：http://www.sxryk.cn/163kqwtphtq.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hfqhgwtx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163wlgysaph.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pqzvfqei.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163cinjhtss.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163bwbphjnl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163fnrluzmb.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qcfrypfa.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zeipofno.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jjrktgbz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xhhdszmk.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xycszmck.html

{**a, **b}
来源：http://www.aibaodan.cn/163qrwsepfb.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163lexehpjr.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163nrgeicbb.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163jczcsfao.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163vjyalphv.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163hthoepkf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163btidphcf.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163qkteegjy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bfcscedt.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ehjlixxc.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wkewtevq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163jhjymted.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163szozqoql.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163byofwwtl.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163pqrmxvcy.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ydvvwoyh.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rbltgodv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163eidrtelc.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163jpihdwqf.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163okhxivra.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163hohduxcm.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163opulqkqg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163xjenenge.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163tasekbdn.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163paglxtnd.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163kywpauum.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163qnyxkdvm.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163heroxvfj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163teuxbdgh.html


<!-- 参考信息 -->