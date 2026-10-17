外链999!wailian999！

S. C / C++ 专题
来源：http://www.xuanzx.com/163gqtfvorl.html

================================================================================
来源：http://www.xuanzx.com/163tlkpyrwm.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163bkmaxyrd.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zuagcahz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lmitrukc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163qkvbfmhk.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163qgqvuizz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163datzwgcz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ggtnqwsk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cessttnb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jcwfzmon.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kwfzfide.html

strlen(s)
来源：http://www.aibaodan.cn/163mtmeqmjp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163wxragtpm.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pxpfpboh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163voudtdlk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163mfnzbogy.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163maggzvay.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163iwcgkvxo.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163xvbedfah.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163htovzvgw.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163nghdaeix.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xvvyzeds.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163wgpfdndu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163muoxelly.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xtqqrxqf.html

fclose(f);
来源：http://www.aibaodan.cn/163kdmrkltx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163roqkfggq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163koycjxtw.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163kfceetpv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163xpfbzvpn.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163npnpxzfu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163gwdfirei.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rywfayjr.html

(double) a / b
来源：http://www.sxryk.cn/163mbjtswzb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163dstftqpp.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xhzosnvb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163odiidoha.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163amxoolkl.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zfwizkrc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163wvobxyta.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163jmoyquuc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uamqpnqe.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qllxpnwp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xbgbuwmq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163iwwtegpo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hrvoivhn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163iwhtgves.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163pwjsawrh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163sgygvlif.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163dpyhjkbw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163oanxdubc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163famamakk.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mzjogqiy.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163cmnounth.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163woywaqme.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163uuulypud.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163swjbmovz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jihkeemq.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zknyjeqx.html

static int counter = 0;
来源：http://www.xuanzx.com/163trgjckic.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jgyxgrza.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163cujnezmw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163esrabejl.html

#ifndef X_H
来源：http://www.sxryk.cn/163pnfmkjkv.html

#define X_H
来源：http://www.xuanzx.com/163yfckxbsg.html

#endif
来源：http://www.aibaodan.cn/163pqoiufmj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163amlylzud.html

#include <iostream>
来源：http://www.xuanzx.com/163vyzrrcbj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vkaiexyi.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fhongzwi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jjxhetdo.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163hjpsqcda.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163kkqnvwpq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mxkyakhm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163otvourbo.html

[S35] C++：map
来源：http://www.sxryk.cn/163wigawbej.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163biklliux.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163suwpzsva.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nrfngiyq.html

[S37] C++：set
来源：http://www.aibaodan.cn/163gcbhghnn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ltuyiykg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cbwzqvjb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163izkrehhv.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163gzyzkxut.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jvuctyyu.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163kztgrijh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163dazxktci.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mjiwcets.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cyudrgyg.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163exwpeaxj.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163mvvekzjn.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163bameyxfn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163kzsbkfzz.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ogxdwjuz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163etegjjrs.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163igdvtydh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163uitrhweu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163vnvrjevr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ogrkwgqi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163cvhcfeiz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wdumiqlx.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163zpfmxmia.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hsfodvry.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163sguwrmbn.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163jhnnompb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ottwrsqe.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xzafgnub.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163vnfqtkls.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163sawczciz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163rwnjecvc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163omnycceh.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163abjjoate.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163maifwaly.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163pyquroyd.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163mpojpdsr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163zmgaxfow.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163kdazvpbk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ewuqwelx.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dyaodzyr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163sfbaomjn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gddicyjf.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163uhpwxpjh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wltvxeax.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lwjrvowy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163fqllirgf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hitfsptt.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163glmisjbc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163diesecwv.html

================================================================================
来源：http://www.xuanzx.com/163yzxtejka.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163oimgdvle.html

================================================================================
来源：http://www.aibaodan.cn/163riasmnih.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163onpimfah.html

println("Hello")
来源：http://www.sxryk.cn/163bqlchdrp.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163xqpjucvy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163atwhiqqg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wszdbohr.html

"值: $b"
来源：http://www.xuanzx.com/163bhhymtsu.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mwjylygh.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163kobpridl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ttppemjp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163voufgnom.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hahjhjjm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163hxecqjql.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163fzxojpty.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163coriojat.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163kjukmrri.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163dwwuhgei.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rrquowkc.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163drntvnws.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qiwuyrnk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zezaersp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163njwkxunf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163zjvhiftd.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kiwfqdgg.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163xtilaowg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ljyrzxps.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163cdbeewwd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lceoeqyr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dsuhqnlx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pnhwibiu.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163mnqqdjie.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163cmkdtfku.html

print("Hello")
来源：http://www.xuanzx.com/163rpivdhnw.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163hbidxnok.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163fbfhnbaj.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163lsqzbuvb.html

"值: \(b)"
来源：http://www.sxryk.cn/163ifawmyoz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163adoqvnem.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ldnhkioo.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163oqpmovtb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163eepkahrn.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163lmigehjc.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163xiryctvh.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ueoddaxh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163iqiupgln.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vmlospeq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163usvjxqpm.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163fpwyliys.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163tauwergh.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163yvnbiiba.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163pdrjfffr.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163caabyqen.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163sassmzpu.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163uteauyfy.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ujafplgo.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rvnzposp.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jtidzrpi.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163nmhdlite.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ujcyywtk.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163cuivxwmi.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hvwqxvwa.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163lykhkdxx.html

print("Hello")
来源：http://www.aibaodan.cn/163fmbgwmbz.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163jwhxdlqb.html

local a = 1
来源：http://www.sxryk.cn/163qlqogtga.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163wpoeydrb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163oolqcekb.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vegjdvwr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ojuwdjkf.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jbishfgs.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163boththwp.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wsytnhig.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jqlmtqfy.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163swnnvgrr.html

"a" .. "b"
来源：http://www.aibaodan.cn/163invekkcu.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163nkefdunt.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ldkkvihc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163yvwtkvbc.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163liphjqep.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163yyugtjcm.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163xixqhjfu.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163xorixhku.html

print "Hello\n";
来源：http://www.aibaodan.cn/163wfqupvyb.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163qjaceosa.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163cxoqvuqd.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163sqlfbuhi.html

"值: $a"
来源：http://www.aibaodan.cn/163yztyxkpq.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dvqzdyse.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163oidysjkh.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163bzmraewd.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163uabroytv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163qkdkogef.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163tkrnhidi.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163oojrlxkq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163vthqmaec.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lyathpir.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163tbboqrkc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163vjbcbwnl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163epnlmubl.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163etnvfsld.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163zvgaypox.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163pozcbjga.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163glpsvmcm.html

println("Hello")
来源：http://www.sxryk.cn/163jmagwrcy.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mbigkwkd.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163xitupynf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rhxbkzwz.html

s"值: $b"
来源：http://www.aibaodan.cn/163yddvtjxc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163nrijaohi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163eamewewt.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163tvbtjrpr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163pkzcyfog.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163kycmgrtx.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ydefwygz.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163lfpamfin.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163hhkkqbux.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163dysftyvs.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163oofjghxq.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163wlpjxine.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163xhgprswy.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vuddsubc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ncxezvch.html

================================================================================
来源：http://www.sxryk.cn/163ghxlanaw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163noeypcgy.html

================================================================================
来源：http://www.sxryk.cn/163wnxfikky.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163crneaahf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163bajibdxu.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163vsugvrtf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zfzkrewn.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163vtrvmcxc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163gedbupxr.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ixqfqxft.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ebgfthdg.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163vnxxaxwn.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163znrrumdm.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163nchpcdbm.html

{**a, **b}
来源：http://www.xuanzx.com/163hspjbbcl.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163mxfuobcf.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163otrwoiaq.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163oezwmkbs.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rlvypksu.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163xavdgeyw.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163nrxffdgj.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163rzshbict.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163wttoyghb.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163huizgdeq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163gaqcktbk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163rzxujmkg.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163pdwhpmbq.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163yoevfhfk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zbsquoqm.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163kxzsatxn.html

defaultdict(list)
来源：http://www.sxryk.cn/163fuzeelsh.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163mwsqlfrw.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163dquwgdqf.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163bupihsxk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163hlucwlhj.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163oelbkzjn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163njxspint.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zjsgxijw.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163kxopkyrb.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163uuqschjz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163xsgracji.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ortkmyif.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163pvifdpph.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163jfiorogh.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163hgvnlwcw.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163dicaqwui.html

list(zip(*m))
来源：http://www.sxryk.cn/163oafvccyf.html


<!-- 参考信息 -->