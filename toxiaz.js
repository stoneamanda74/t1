外链999!wailian999！

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bjegujsz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163rnhhwgkj.html

time ./run.sh
来源：http://www.sxryk.cn/163catsxedv.html

================================================================================
来源：http://www.xuanzx.com/163dpnjnmir.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163gomamkyk.html

================================================================================
来源：http://www.aibaodan.cn/163higjgehb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hscheujw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163nceshaeu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163yqaksjez.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jxqvthpn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163rhdtjope.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163kzvwoeti.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163sgxmhiun.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nmijjhea.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163opcvzrbe.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163cbwgnicu.html

strlen(s)
来源：http://www.sxryk.cn/163tlgqsyun.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163iwgitpua.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163vwkhkxvp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163yymfazdk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163gtsdmulv.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163vqztlsce.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163yetmdijn.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ykpnawwx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163wxpkjupo.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hpfnyful.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qdzpmnpi.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xvcklmvq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mfxvojdt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bwpsgpjv.html

fclose(f);
来源：http://www.xuanzx.com/163obxnlsrg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163myhaaaco.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163upxlbpez.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163pwukpzpa.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163eztiejzn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qiwrtols.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vvkkhvwu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163bdwtmqse.html

(double) a / b
来源：http://www.aibaodan.cn/163sggxywpm.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163bmkrjwab.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163uyaounps.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163dxyzxorb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163efpmbgdn.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zxzvnapp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163xcflwtnn.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163raeqbxpv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pfagqxpc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163serrfjoe.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jikjczbb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163iglhfhsp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163xaxgzfhv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qkkkialw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163uscozgmx.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dxpxjiwj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cuweeuml.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163woiczgwh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ekfphcbq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163lhtwztii.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163argynmqq.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163maosaflr.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qigvdtsb.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163dsgmqebe.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163golyfboc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kqpodcbo.html

static int counter = 0;
来源：http://www.xuanzx.com/163febvzmpc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zfrltkje.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163bvobcmly.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163enhhdbtn.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ndkxhgqk.html

#define X_H
来源：http://www.sxryk.cn/163izznmujh.html

#endif
来源：http://www.sxryk.cn/163qcrqnmww.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163hndjbfxy.html

#include <iostream>
来源：http://www.aibaodan.cn/163iijzvrep.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163drbffwea.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wldknowg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163fizslsny.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zcchopns.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163skafkatp.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zkfwcywe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163djtxdvut.html

[S35] C++：map
来源：http://www.xuanzx.com/163pbhouzbj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163uftalgcq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163soeplkwb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cycstggi.html

[S37] C++：set
来源：http://www.sxryk.cn/163oksvptrt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ioijuqek.html

[S38] C++：排序
来源：http://www.sxryk.cn/163mwtdrhls.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163vkavbcxb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zotdgnun.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163fjwjpjnk.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163uifucwbj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163niskipuh.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163cceupidv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163optriqjq.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qrjbanfh.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163rwqjwlsq.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163spaivnsf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163oktwiofv.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163kvhtqyrh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ysxgkpfw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163pzvarxyc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163domnlxqa.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163efsmebka.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163kftkzblr.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163pbxayzuv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163kfbvivyz.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163yrayuvbf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163tshjzhdq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kokxfvdv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163indlwwlf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jsfngdir.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163izgzuhwq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163svsigxum.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qomwhfie.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163hrmhmwsg.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pzynafjr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163mpcqpejr.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163njhwtkdf.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163predyyam.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163aarorjnl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163hhowcbbk.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163pzwdeqed.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vttyeqbt.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vulykjae.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163cqrmkdeg.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nymgabxu.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163qnnhdznj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163eqpvrtxu.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163shxtckpw.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xbvpvatv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163qfegmptl.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163walmcxwi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163fflfrzmg.html

================================================================================
来源：http://www.xuanzx.com/163kuydthny.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tvulxbub.html

================================================================================
来源：http://www.xuanzx.com/163jodizomn.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zomvbiax.html

println("Hello")
来源：http://www.sxryk.cn/163kljngvgr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163texxgrzj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163opkoqvjy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wtmfetsl.html

"值: $b"
来源：http://www.xuanzx.com/163wwgavxol.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ckzurybg.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163hkyacapv.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bteokzba.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163djudoycj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jxrryhsf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wgicmqyh.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ppkpatkj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163nshwwqkr.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ajbvggce.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163sogsagpk.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163mhthrgug.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163aibidiqq.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wnabrytc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vtrsatsu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kcqsutfx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ikekudbh.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163dbwrfoww.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163axibyqmv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163orjgcrgf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hkhuulms.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163knvegwcg.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hmymzple.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163oixfboow.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163rnoicsva.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163bctxspcg.html

print("Hello")
来源：http://www.aibaodan.cn/163sxnjqgpx.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163mkfnyacu.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fczdccrp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dsrfqkjo.html

"值: \(b)"
来源：http://www.aibaodan.cn/163hameiyda.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163wbejtbis.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ipfilvtc.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wweqvuay.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tpzmvdyl.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qlrhybpt.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163burbrrty.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jqngyqse.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163czbncgam.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163cmhclalv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qljznrkp.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163nbjziwhv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jlmlofkk.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hfeslyjm.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cqefthrp.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163fmtngcnc.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163axnizlsq.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163qnttwyhs.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163thoknraf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163nwafifql.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ekhwhdjn.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163xqkgikzk.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163tkohdyic.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163fjokoukp.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rqzztect.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163mzsigdja.html

print("Hello")
来源：http://www.xuanzx.com/163aqsiugok.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163xudaiwwe.html

local a = 1
来源：http://www.sxryk.cn/163hokqbcfh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ldoimpnu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ztmrzgdh.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163xlublwfm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163njujhkry.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163govntazp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163zwpnedye.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163antfnyfi.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163muhxqbzv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163yoinitxt.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nrmkqfbn.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163muhbymem.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163adscqzcl.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163vdovyrso.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163dfmqwcwa.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163qzucvybs.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163imudzlog.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163motofrnb.html

print "Hello\n";
来源：http://www.xuanzx.com/163rmidusld.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163wlaxqthl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163grybqbzf.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ttbnoxpp.html

"值: $a"
来源：http://www.sxryk.cn/163bdiqemob.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ldphsvvz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163zqyhdeoi.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163bobzhekh.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lypsmkeh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163rdgomfmd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163hnbbaxwk.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163wrjatupj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163whkdjnec.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hfjbhszs.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163frndjlcg.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163cosaikvt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163cbtdpync.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163kctqaoyq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ewxzmdbn.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163cjussoud.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163xogcspxd.html

println("Hello")
来源：http://www.sxryk.cn/163etgiweyi.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163tunhyopd.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163apfmzvrk.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163pthmaqzw.html

s"值: $b"
来源：http://www.aibaodan.cn/163uvvlwyjh.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163zkauhipz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ttluaima.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163xmxnstzg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163dbzzecod.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qajwoypk.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163gdguxxiw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163cxbpfjxk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ikwyityn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163sbgarhhv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163lvjbepke.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163pijecfud.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ivqdlebw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163cmjgqxlf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rimcacoe.html

================================================================================
来源：http://www.xuanzx.com/163uhgpqkbt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163iareqkzx.html

================================================================================
来源：http://www.aibaodan.cn/163zcsjfkep.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163gupnsqfl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163rruikbqg.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163yubbwsfs.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163bkcszozi.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163dgsbamkn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163djcytkys.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163vjklbdyt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163sbtgjgok.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163uenjeutj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jimmpavd.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163quwouumb.html

{**a, **b}
来源：http://www.aibaodan.cn/163hwocfiii.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163qftxaksd.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163atbqlale.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163peiwqnyf.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163narityyi.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163fyststxd.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163otzoxhew.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163vfgguixg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163yykjxuuz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163khvuqfve.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163chzximup.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163rrzuifax.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vdlwomes.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163nfiooxcm.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163xhmfmhcr.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163xrvgjrsq.html

defaultdict(list)
来源：http://www.sxryk.cn/163mribsqly.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163lsivflpv.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163gfbrfcyg.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163oonytsgx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163tqjgbhoq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163raxeoaqr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163hjddoxby.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163gnlcgjwx.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163tkusnttz.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163rmnmtpfs.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163lfhurmzt.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163cgfhcmam.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163rfcikpye.html


<!-- 参考信息 -->