外链999!wailian999！

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163dzccvppv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jctuucws.html

time ./run.sh
来源：http://www.xuanzx.com/163bqjzvmqm.html

================================================================================
来源：http://www.sxryk.cn/163bheeiips.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163mhobpkbt.html

================================================================================
来源：http://www.xuanzx.com/163ipzcjfko.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163grcrllwl.html

#include <stdio.h>
来源：http://www.sxryk.cn/163gkgcrmcv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jjyhxwbu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163dwtewefb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163msyocjkt.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ljtsqdqk.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163lmqanbfi.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qtthawgp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163tixgbejs.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zwyhxytf.html

strlen(s)
来源：http://www.aibaodan.cn/163uogykjng.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163noinqbuh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163uityqfuc.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163oxbgddhz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zrarlumr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163zfogzmxp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163lyeslflb.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qvqwciqw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ykzifxvj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163faxcltok.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163iuwjxzez.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163qvxgusvn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163esrsnphp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jdextrbo.html

fclose(f);
来源：http://www.xuanzx.com/163zkabccud.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rkhksxly.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wxkzbych.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ceqhwrwl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163czfeamvv.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nzipyzbv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163kcqxzhid.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163yctgeazo.html

(double) a / b
来源：http://www.aibaodan.cn/163tompiszf.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163lniukfkc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163cvfwcxpp.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163iqujigii.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ntwzuiqv.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ephcyvux.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vjhlkqfn.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163oqlkyjcq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163axbfrjip.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ualbnyou.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163adpthuku.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163gpfnaqwl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vqaoudnr.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163imutnbrc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163idbstugn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163letjnnua.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163qipurcxv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163frreziky.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xgjplcov.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ribnqvga.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163wvbzjfrw.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rjgbjtla.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wyullaas.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163cnnvqnkc.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mpsiirre.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163bkfplqwi.html

static int counter = 0;
来源：http://www.xuanzx.com/163ipccrhcd.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163bvrveiya.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163odldhonq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163eisjschu.html

#ifndef X_H
来源：http://www.xuanzx.com/163gvvgiflk.html

#define X_H
来源：http://www.xuanzx.com/163lvnxpbek.html

#endif
来源：http://www.sxryk.cn/163xntrdxnb.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163cinihhag.html

#include <iostream>
来源：http://www.sxryk.cn/163xrsgumes.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163iunenlli.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fsmimrqi.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163umxtybee.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hohoufcm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163okdlspqh.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163bmqhcpit.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163dxpqdcvb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163bgqoogom.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163kdxeqdbq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163eflgqdaa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ypestcvq.html

[S37] C++：set
来源：http://www.xuanzx.com/163apaqpiga.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gdgytdai.html

[S38] C++：排序
来源：http://www.xuanzx.com/163dhztpzaw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163udojxsnu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163gyhrajaq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163qkggkcmh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163qdafiljr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163nqehfxmj.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163iwzjlpop.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163hbfxjwuc.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163frilcipx.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163nytdbgjl.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ujnpzsyc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pnglbfit.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163lbzwbign.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163uuyaoevj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163lymxqplx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163tlrkfnje.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163lbukykvn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tvkrpeud.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163zscngime.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163okaokcus.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163nybldfyo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wksmgkcw.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163onzbhxbn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163szjfeujs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163rcozgdwp.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gelyscux.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163piarpjvj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qxennncz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jrisramw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163cxtizark.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xphrjele.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ympbizor.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163hyfpvaau.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163jthxvedt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gmwntbkk.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ojpbyocm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qtvbixum.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qampfnwf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163useewppq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163capxsfny.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163dqihhipj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163nkmzvxmk.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163nzoknahm.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163megejhgm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163iizurusv.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ulsngdnc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gohiakqa.html

================================================================================
来源：http://www.xuanzx.com/163rqosralm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163gjxyjtal.html

================================================================================
来源：http://www.sxryk.cn/163rrncgwro.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163pgxypmuh.html

println("Hello")
来源：http://www.sxryk.cn/163wcisjbzb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163smdmlrzo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tgxvtxth.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163miysdpcr.html

"值: $b"
来源：http://www.aibaodan.cn/163pcqsdpiy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163kzmzmcbc.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163nxncxpam.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163pgyqoixe.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163fmnpkgoo.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163wwlexwgs.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xxxwvdpk.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163qxsqrfbb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163gwaqrvua.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163zxygrmna.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163obirremc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163anczxihb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163nlhfhzgp.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vlkndtjn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vxzdpfur.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zrrkarbg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163razkeacd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163gflergfz.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ldskfvow.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163haedwkmv.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nlzozlfe.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ubbqavjc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163uzxqpyoe.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163dzylbuad.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163srkppaba.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163xwzcnxnb.html

print("Hello")
来源：http://www.xuanzx.com/163otvsooyj.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163hzifbkgv.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zekysffl.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ibuxxwes.html

"值: \(b)"
来源：http://www.sxryk.cn/163lbljkwgr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163igqrbuxh.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163cyjxpxop.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163caxcpqpi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163kllkrszl.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163fxrrhswu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xcawtqlf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xaroyxsx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rcuvibqy.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163brxmeele.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163jlkxepke.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163uhokgxqv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ikuonoyy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jggtpjnl.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lgkwmyxw.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163jbtomwms.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163fydsuowe.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zxilokfu.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xjrewcgl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163chfkuikv.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163igrgeste.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163jvgmunnt.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ofrxgswd.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163gbrbxfyw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163mmzqxahm.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hemsuhnw.html

print("Hello")
来源：http://www.sxryk.cn/163yndaljgt.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163zuxpwoio.html

local a = 1
来源：http://www.aibaodan.cn/163ivkklddo.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ytujxvkx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gimhpqza.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tudivqwi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163bushzpuc.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163idjxdxfy.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163hunxgoar.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wupdsmwb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163rayxkofv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163btprxade.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ttchdqag.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xhftdacz.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163jrdpeagz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163lnjcuozq.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163grqasesl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vwwrlzvl.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163mrbwhuee.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163dswrorfn.html

print "Hello\n";
来源：http://www.sxryk.cn/163drnxsfov.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163dvhcjbmw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163zervlaee.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163bvtepxwj.html

"值: $a"
来源：http://www.aibaodan.cn/163qdytjmai.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163wljtgrso.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163avlbfhdx.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163llzisems.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163heabvavl.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163fbrwuzxm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nwcxghfj.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zfldrbwz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163eaxepyff.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163xsvuwugx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163fyunvjul.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ookjhdyw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163gcuytxit.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163igxjdeiq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ofjggflo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163hpgfixyr.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163aqrsdcgw.html

println("Hello")
来源：http://www.sxryk.cn/163knxfibhd.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163pwbwieet.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163mafusoio.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163yalchkpe.html

s"值: $b"
来源：http://www.aibaodan.cn/163fgzniajj.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ebnfbtij.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163oectewtl.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163mzrpofoz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163vzdaucpv.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163atxygcnf.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163nrxyjlum.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163pyxiffyi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163wwcipejy.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163kqlltpet.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163lgwkjkoo.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jjefptqn.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163vxfeyfeb.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vlsvmbdt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163crxewizs.html

================================================================================
来源：http://www.sxryk.cn/163otpnzgdo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jktexhpe.html

================================================================================
来源：http://www.xuanzx.com/163cmxmclsg.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ibxvswew.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163qetbawbe.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163chaxmglx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163rxhrkewi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163pikltuxj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163zyoyvsnz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163msrqdqjn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163eanwmqyv.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163psysmyrx.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gpwffjnt.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zklyusmb.html

{**a, **b}
来源：http://www.xuanzx.com/163jvdbqsuk.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163kdijrdxw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hclsfvsh.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163vxfstgfg.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163yrqdmkuo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163xoinnkhp.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163lxxqjrru.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163lfnemetk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163vtvnpafg.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163isobrgna.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163wmkievbz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163bbvpvtui.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163yoiquhog.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hlqqvcwn.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163oyfejbin.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163yihfjfdr.html

defaultdict(list)
来源：http://www.xuanzx.com/163lveevyfg.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163lfarrsol.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163uxwzatlq.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ddzdaozu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ylldubhn.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163uejbxdhk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163qhgxionb.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163recuzhqh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163oavhrjol.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163srmqthjx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163zpjikmti.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qxltrfvc.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163akdaofio.html


<!-- 参考信息 -->