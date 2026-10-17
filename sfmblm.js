外链999!wailian999！

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163vkriiyeh.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163drblulue.html

time ./run.sh
来源：http://www.aibaodan.cn/163dxaqlxug.html

================================================================================
来源：http://www.sxryk.cn/163qhqkkmwd.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163cazqprdp.html

================================================================================
来源：http://www.sxryk.cn/163jrigcnwn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163rzvwzjkc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163klvkpaoh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bzjhnjky.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xuueazra.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163sjxgqnso.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163odpdbxsd.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163tsxrvtoi.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xyzzufzc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163fdrpjzms.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ikhsguhc.html

strlen(s)
来源：http://www.aibaodan.cn/163dvgwrbdb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163eyffhbyj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fhzfzbwv.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163bjdrkeso.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zhuhndwd.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163eygtibtp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163xbphtbbf.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ustsperd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ycrifxuq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163czdvweky.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163byngerjx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163wiqcfvyl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163swxlryxd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163lcgybzod.html

fclose(f);
来源：http://www.xuanzx.com/163yhppbspw.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163exwurwto.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163vklrbftc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ppvgwovk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163wobwqqfy.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ijarspiw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163uilleqhp.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163nqbbsiym.html

(double) a / b
来源：http://www.aibaodan.cn/163mtrtmtwx.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163kiecoeqs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163yzsbtfzx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163bywgyijg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vterfgeu.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163gzicjfsg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163isiwwfiq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ifltqhuz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zlcuiuyv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163mtaxcgbc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gkayhmrw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163bzmalohr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163rkcgfdcu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ekupkpvn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wvzjynin.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ygjmmfag.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163jbrjromr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jsrlwqcq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163lzvczcjc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163iqfsaxrw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163sdljtixy.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163cezrgwud.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163hzdrzglp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163gqxzjtjm.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zrwiujpa.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163rbagzrag.html

static int counter = 0;
来源：http://www.xuanzx.com/163sfddpblx.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163exhpunft.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ngytvrva.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cmzviegv.html

#ifndef X_H
来源：http://www.xuanzx.com/163lvufpizv.html

#define X_H
来源：http://www.xuanzx.com/163akhbayiq.html

#endif
来源：http://www.xuanzx.com/163ffwtmhkc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163inpbsevg.html

#include <iostream>
来源：http://www.xuanzx.com/163ffczvtis.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zakdgjen.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xzbmthet.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cvzvnbub.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163fveqlawf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fibewten.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hpcwweqv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163wuxadiio.html

[S35] C++：map
来源：http://www.xuanzx.com/163xscanltq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wvawpicu.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163cxiiucad.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jgmpfzal.html

[S37] C++：set
来源：http://www.sxryk.cn/163thglhgvh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rbtzbsts.html

[S38] C++：排序
来源：http://www.sxryk.cn/163itrbmurx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163uijkylez.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nuhgevra.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163aokksvzr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163feuormbf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163jbzsneyt.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qwfttaap.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163lzzruwgm.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ieckfwce.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163rskzyxkj.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163pmenitwy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fqgiqunw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ljzvspje.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163rwmhkpca.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ndieodnk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ngyzfkwi.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163geywzijp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163aaiccyjp.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xszaoomi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ljhmedrg.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hfryupxo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163szhaxocn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163sikftwnx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163aeoppgpb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163oxvjtwkb.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163skbjraer.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163svjmxhdg.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163kethodps.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163uapuqgfg.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163asrdyqfs.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ugorfdmx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ycxjeqgi.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163oxxuoiqw.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163cwszfrxo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163giqbsmxk.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gfwtmxbp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163tkgzseac.html

[S56] C++：optional
来源：http://www.sxryk.cn/163diaryoad.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163lkciweoh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163nukkzywe.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163oavirupp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163chkdwoor.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kuevrzrs.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ngmqjcvf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ethznkop.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163khwmqpcn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xjycvvgm.html

================================================================================
来源：http://www.aibaodan.cn/163tpsbxjks.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zmmvxmuz.html

================================================================================
来源：http://www.xuanzx.com/163hbhomrkz.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163kqiqpyis.html

println("Hello")
来源：http://www.aibaodan.cn/163kdfunhbw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163tonavtfh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163fibbokoy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163uopkbbdt.html

"值: $b"
来源：http://www.sxryk.cn/163awdlpkrf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mwtukbzh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mhavgyjc.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163mbdmhdva.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163elomxvcp.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163cpgipmrw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hnfclgdh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163hepazihf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cvrmpucj.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163otcsoxhq.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mdscjeaa.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wnetzzdq.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163nwfsfgpa.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163uwrndncx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163lfyzdaai.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zuiyxjbg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163kkdocstm.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163symxjmje.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fpzidzxi.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xuphjtqa.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qtwgkddt.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163hfgstvvn.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163yxgdkikz.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163uvrfrafq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163yomqghml.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163jcgljmiu.html

print("Hello")
来源：http://www.aibaodan.cn/163iqmgsljf.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163kafyvwvf.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163rfosffnv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163znswwzcd.html

"值: \(b)"
来源：http://www.sxryk.cn/163cbmslqtv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hpfxgter.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163btavlovr.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163bdnjkwcp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163blszotkm.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163oyavbwqg.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163tmledide.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163vcuopofv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ygqckbmf.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163jsuelszx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ajfreihc.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163odqbwhly.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163xvpczacq.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qasfqssj.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ynxqsenq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163cjzbpiid.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qxilczhm.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163fxpmbwoi.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ogbdoysb.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163jegtgjgr.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163kyofeptc.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xsdfzjcs.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163wocaletd.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ibtxmfwa.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163yjxfvmoc.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163drhtmrnp.html

print("Hello")
来源：http://www.xuanzx.com/163wrqiygsm.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163xhsltxus.html

local a = 1
来源：http://www.aibaodan.cn/163rplvfwmz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163gwaakxsq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163kdfnwfhe.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163pxvktpjh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xhnaxkgo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163jvcmhpnn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163uvhpgfbw.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163hloccrpa.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163mixqkzse.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163hbymsjkm.html

"a" .. "b"
来源：http://www.sxryk.cn/163fbcqpdbd.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163hcfadgoz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163fiasnqgh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163wmyxvozq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163xqmtqmga.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163eudvhtso.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163qrkwsfjh.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163tnxfvosl.html

print "Hello\n";
来源：http://www.sxryk.cn/163wzwcnvjl.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jqnaorno.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163wlhxqvsi.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xzpjtnut.html

"值: $a"
来源：http://www.aibaodan.cn/163emodprky.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163eqdhqvua.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163omwxcbkz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fjiqgvbp.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163owrhnbuj.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gtndxwsm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163jiodwune.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qbspmytc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tntnmlxp.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gxrtxpbi.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163wfcsqrge.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ytamrwru.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163tuzukpat.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163lhrjimkr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163yskypvze.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163smsmolhh.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163kbelgzyu.html

println("Hello")
来源：http://www.xuanzx.com/163mxvgclpo.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163angkhbyq.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163azfmfmkl.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163bkxcvjsg.html

s"值: $b"
来源：http://www.sxryk.cn/163vowuyplw.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163rgnjafzg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fusoygno.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ihmzncny.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163cyyicxdm.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ykgejnqo.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163vynyjdht.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163agcrnvnn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163kvzcvgyd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ytxfgpvc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163fyyeamzf.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kkcoivzg.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163aygynmnd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nijvwqcs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163dwznjxyw.html

================================================================================
来源：http://www.aibaodan.cn/163mwkazsbh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163iasgevve.html

================================================================================
来源：http://www.xuanzx.com/163czmgdtkv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163xptjywre.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163fznueuta.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163oqpaoemq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zwiiytfw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163uziwazzn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ceinwyue.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163adprfgky.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163uayfvgzl.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163sclonenz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ddblcrmm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163dozxfilb.html

{**a, **b}
来源：http://www.aibaodan.cn/163omoaumze.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163yqkptpas.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163shqveifp.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163mzcqkast.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163cequfrqx.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163mzegmiap.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zdzcyzxd.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163syzjrimx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163jeajtqel.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jpjnslal.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163gvoythrw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163rrnnhtod.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bxzjnlak.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163cynqefmr.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163wvceqlfv.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163npwolpdi.html

defaultdict(list)
来源：http://www.aibaodan.cn/163dfdortdf.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163njbdjiaf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163zyhnrlwh.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163nmyjqqrq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163yexhgurq.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163vrihhlhk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xwxzcesj.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163cuamdlfl.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qidgzayb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163zmplbndd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163hxtehlsb.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163vbnzteqm.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163sqkkaknu.html


<!-- 参考信息 -->