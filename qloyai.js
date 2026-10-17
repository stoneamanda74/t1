外链999!wailian999！

S. C / C++ 专题
来源：http://www.aibaodan.cn/163stoyrhrv.html

================================================================================
来源：http://www.aibaodan.cn/163gxncbfnn.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163oypjkxwl.html

#include <stdio.h>
来源：http://www.sxryk.cn/163hdymoddg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qkqyafke.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163qfxczngu.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163oaerwpnm.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163dnrnrmzi.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163woxwnomy.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wsatzeri.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163vpqajmxi.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163lhumuhlz.html

strlen(s)
来源：http://www.aibaodan.cn/163pvrnbtdr.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xcupirty.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163flgdlwph.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qxlnlhck.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163hczaryzk.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jxqvufiy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xwudybsq.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163gwnqggur.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163oenbmyyn.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163uzxaqlwc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ocnximjr.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163lctaqkxn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wikyscmt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163mbwgfpws.html

fclose(f);
来源：http://www.sxryk.cn/163eucjfbph.html

[S12] C：写文件
来源：http://www.sxryk.cn/163gjovpaog.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wibztewd.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pwlqgshw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vofquwix.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163utlvbmxj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163papxzxae.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163hixiipct.html

(double) a / b
来源：http://www.sxryk.cn/163kgalwdhs.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ewlrenfc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163litknioy.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163uwnkvkjb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qrqyvtqg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163dmcwgxpu.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163wkuciiqz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163kjproyvb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yrynjpnu.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163uuanmfsd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163apilvijm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163xvlxesdn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vbjvzjii.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163uytiiwvn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nktpgolr.html

[S23] C：随机数
来源：http://www.xuanzx.com/163sxnvzdth.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163gstjvhdi.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163okhsuisd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ozmnlsjj.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163emoncjax.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mmxuatay.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163tpgzrtox.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163voyzkjvz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ezefqqcc.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163dnjmqlwz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163okwsuosg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163qkurntrw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rsziwfic.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163qsjpeytq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163oxycpgsz.html

#ifndef X_H
来源：http://www.xuanzx.com/163ckcyrzay.html

#define X_H
来源：http://www.xuanzx.com/163gcupxbmq.html

#endif
来源：http://www.xuanzx.com/163mzvlrhcb.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163elloupcu.html

#include <iostream>
来源：http://www.aibaodan.cn/163vtfuvcjf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jiflooax.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163oueoyahx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ejftzlnm.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163nktmcmyn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163tizfwdmz.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163amshlemm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163tilkeozd.html

[S35] C++：map
来源：http://www.sxryk.cn/163vsgjmqaq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tiftivez.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163mdvwnuqa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qnoodecn.html

[S37] C++：set
来源：http://www.sxryk.cn/163rinohvlk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163eblyeqrw.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tucnoffn.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ykvsfvca.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qmiypwnh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163zhjnxdvt.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163sakjpluq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163jxtmwhao.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163gablddam.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163aolsqghu.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163pjgjblzf.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zeczcykc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xdudcgir.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rjqcxomz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163udtdzvuz.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ylxbpwha.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163yqziznpc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cxmihzdb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vzpquwlg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zikebsvy.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163umjabfqm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163idcitcwh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163iitwczfg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163xsyketyf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mldkouux.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163wetkilie.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163hskxsboz.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163dgfbzjjs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ywaovcip.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ugdmolpj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163bvyfwazc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163eobchcei.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163hysuuonv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163worwcngc.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163iwcydoqh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163pohisgzs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163smulmtxs.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rtbjbvvp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163uerioraj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163uwxycruy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163glmmjeav.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zcfgoasp.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qwrwdsck.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jbbfquau.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ykjsaaxu.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163aawghvky.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kswsjils.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qwvxsubd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163pvuhurwf.html

================================================================================
来源：http://www.xuanzx.com/163fmxvgomo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lrijnyww.html

================================================================================
来源：http://www.aibaodan.cn/163awznrjse.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163nlirbcqg.html

println("Hello")
来源：http://www.sxryk.cn/163gpupewxn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163cyyiuiwp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163kxkqezqj.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163kymiqhse.html

"值: $b"
来源：http://www.xuanzx.com/163stlmzhbp.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163dkhoffeq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163yzhiepdq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163imnkndmt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163moixkirc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163njvklukp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163gwbyurpp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ytfeaarl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163esytxpmz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163losikaml.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163cryopzly.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163sqqprpzi.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163uhlttzcn.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163uxwalerg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163nllupjbb.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163hdyveqpw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163iupxnbvo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vvkcxhll.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163biusoquf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jclyjhln.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ofxpoccs.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163levvwhdo.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163aldbflmt.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ttaukcqx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ulqssdfn.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lbtvlbwf.html

print("Hello")
来源：http://www.xuanzx.com/163tvhyziam.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163aeixufft.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163upxiiiou.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ltntyfph.html

"值: \(b)"
来源：http://www.xuanzx.com/163xfcljbvr.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ouncaodq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163sqmrghqw.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163brnbuxxc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163onrvjavj.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163xyjfymlj.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gzxzuawz.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163udkayphc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dcugpzys.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qggqylgv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163srbqkfnz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163kjnjgazp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163eyuuzbjq.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uslwxzxv.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163qfwuzibj.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ninuzhka.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163oqnzudqq.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jwfsrcgp.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163nowuqpic.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ejpgutvy.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163rzbuztzh.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ltduwexc.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163jxbuhbag.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163aduznjqy.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hkkqcmdt.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mmmrbbie.html

print("Hello")
来源：http://www.sxryk.cn/163rrxvudrt.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rhgmvwis.html

local a = 1
来源：http://www.xuanzx.com/163unrbsqbs.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163fkqcuuvj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163rmdawveq.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lfnieeou.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163skheknjw.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163sxozqtsv.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163yhmhygar.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163xkawmpsh.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wwwzaevj.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163wxlurcbs.html

"a" .. "b"
来源：http://www.xuanzx.com/163qxhalveb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163najdwkon.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163udylqqbx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163cflbxsaa.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163uzboxkav.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163hdaikwuz.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163wcenhtzj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163rpqsxxjv.html

print "Hello\n";
来源：http://www.sxryk.cn/163wsysuqab.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163egkjbxqt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163xgjetjrp.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163setmkdwk.html

"值: $a"
来源：http://www.sxryk.cn/163igylxtxs.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163arjhodsa.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163kxuyivbl.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163wypywtpl.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163rsoxesao.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163lvmrlgaf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163bxcwhfvd.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163tayplfsq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163xybzqfev.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163zogueeof.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163beptjowp.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163govauzyv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163csopuosb.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163hkpoqont.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163dzmvtisi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163axgkszbn.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163dwqekqbg.html

println("Hello")
来源：http://www.sxryk.cn/163ghlunltx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163kcskxihy.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163wvwgyieh.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ftglyqik.html

s"值: $b"
来源：http://www.aibaodan.cn/163ocrofzig.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163xnpthimk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163lquuuqlf.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163gpvagjtd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163gllphzwg.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163numdbtuf.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vwvbxqhw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163exhblhdl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163jjnjorrb.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163pzgdjssr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163hhbtovdb.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163czdstcrd.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163fpuxdosr.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163awnzscwu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163pzrmltaj.html

================================================================================
来源：http://www.sxryk.cn/163gvnknxtv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ecqtydoo.html

================================================================================
来源：http://www.xuanzx.com/163mtxrmqgf.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qxrlahyb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163lsimsxxy.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163zmjeayng.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gywlpzbx.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ymtcrsnq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163vftacenx.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163foqgmknr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163smlufgao.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163eijepspj.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tehtcgba.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163rfmmurei.html

{**a, **b}
来源：http://www.aibaodan.cn/163ajambzco.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163gurfqlio.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vsljduie.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163fsbyfavp.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163wconklcp.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163vvbajxij.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163jrfknklh.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163fvljysxd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163verrnhgb.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163fqztkbvc.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163zbfwikxb.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163gnjjpulq.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wqmdqfdd.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163icfjcxaz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163hzooqvms.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163tkzkdqlu.html

defaultdict(list)
来源：http://www.sxryk.cn/163bvpnbpok.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163vueolxbs.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163vviylbie.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hwvyfpkm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bgosglpv.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163jcdxifdg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163dtkqdkix.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163asrkqawn.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163rismamum.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163jhfoafdd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xddvwkci.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ftkosoll.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163evjjzjot.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163daptmgcs.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163kkisfzcj.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ixrrdogw.html

list(zip(*m))
来源：http://www.aibaodan.cn/163itkhfqqs.html


<!-- 参考信息 -->