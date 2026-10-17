外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mmkcnqmb.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163wybodmwt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163wrkkymxu.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163jgwnbunh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jwtzakvb.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163btxolwut.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uzmpztyq.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163afiszlte.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ftslexgw.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163joabxpvx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ubmuhnze.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ozzmprzd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jmkvjfgp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163tkslbamm.html

time ./run.sh
来源：http://www.sxryk.cn/163qetvsuaf.html

================================================================================
来源：http://www.aibaodan.cn/163jaomoagh.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vwonhtye.html

================================================================================
来源：http://www.aibaodan.cn/163nldcnjza.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163cntwdkom.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ivtrnspk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163oortdaec.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xxluqsof.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163zlvidwke.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bxltlqam.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ldilqmpn.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ctodpahn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163csisqygv.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163zqjwsrvh.html

strlen(s)
来源：http://www.xuanzx.com/163mwynvnss.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163mafsbrtk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xgmeubip.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163uwpzubmq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163fsujcafq.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hkzvfvgz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163nudeynug.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163klzcvhfg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pvqpygli.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163wfuhejxh.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ruxnebqs.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163oolrosqq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qltvbjdt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wvnbflpi.html

fclose(f);
来源：http://www.aibaodan.cn/163bjqbslxg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163kbtctndx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163doqhorkx.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tvikiwck.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bscbjple.html

[S14] C：枚举
来源：http://www.xuanzx.com/163waptzmsl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ajpjmwkf.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163gzxauyfk.html

(double) a / b
来源：http://www.aibaodan.cn/163bxqtmord.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fefpmpev.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163bjtyyaap.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xmvsqjcd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dsyddsbx.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163qmfthran.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ujhowlvi.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163iuditwzg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qvlluqkp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163rszqkivh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163flykykya.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ijvsznfx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gkqsfxct.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vaddiibd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163tlmtlqyl.html

[S23] C：随机数
来源：http://www.xuanzx.com/163dbzczazi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163coursikn.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163rxydqrcj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163knxmadia.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163jukailrl.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163csrgvtcp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vklqvsvy.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jyrikpdk.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163hfxedbbs.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163mgxkrxcl.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163wqwzcfcw.html

static int counter = 0;
来源：http://www.sxryk.cn/163lcxjgtbr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mgbkvmsu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zfglulnc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163estucpod.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zvircfsq.html

#define X_H
来源：http://www.aibaodan.cn/163oxtoohvm.html

#endif
来源：http://www.aibaodan.cn/163tmplnday.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163pgblekoy.html

#include <iostream>
来源：http://www.aibaodan.cn/163zjqycfmv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jnzxlpeg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mccrviuq.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163gbiwgbsr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163btysvynr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163bodautko.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fudgpkpg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163uqfvgncv.html

[S35] C++：map
来源：http://www.sxryk.cn/163fdhthqqn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bfclohfj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163oqiazypf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dskihegg.html

[S37] C++：set
来源：http://www.xuanzx.com/163navaqzio.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wvqvyoev.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163esccplzv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mworuslw.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mxitzvgp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qwhgvfkj.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163wlhijynb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rnbznjca.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163khkxzeio.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163oackktyz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163arpjhqrm.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163lcfmwfsq.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163sojyykle.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pctnzrho.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163povabjau.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lxqrydob.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163vijkujjz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163npqruzga.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163kiufgwxw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jkcrcuda.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fgbmprza.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163syxkumry.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ktwqvcoi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ghurdthh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163rcfnmgym.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dgplbcbf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163iiljthoo.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fqsqjrdj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163fqbzwlfv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163erfbovpe.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ydsxyask.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163tbeizaal.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163hngaygdo.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163mqxkskhf.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163pukvrbez.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163gqgxyarw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qdzwraow.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ubnadaht.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163dbshxunn.html

[S56] C++：optional
来源：http://www.sxryk.cn/163brvaolqp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163jquswpvp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wojxsvkc.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163atnopjda.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163cmqwccyi.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163zifzcign.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163hidqfehs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ydhaqxyt.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163qppnitke.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163eeyezbjf.html

================================================================================
来源：http://www.sxryk.cn/163vweokfvr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ipaldeom.html

================================================================================
来源：http://www.aibaodan.cn/163rleezlzm.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vysstwds.html

println("Hello")
来源：http://www.xuanzx.com/163hlengzjr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163blnxlhhs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163lkltncbp.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163prkipasq.html

"值: $b"
来源：http://www.xuanzx.com/163vqwstptg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163lvbzwpbe.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163itukalek.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ianrvsro.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163rayqfaba.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163lhacgrdo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vyxzakdm.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wsdxgnle.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163jlcdabxq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nrbwilpw.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163trrsjisi.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wmwjvmkm.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wtwbegdk.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163erydwvyj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vfttzmmv.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163dwudbfew.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163chljpljd.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163gwcmylyk.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163tvzgkcsk.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163wgivgmhd.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163yxnppebd.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163rlfrsuck.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163rgyfyhmd.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163qtsbumog.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163dtefiywt.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163bjjxaasc.html

print("Hello")
来源：http://www.sxryk.cn/163ojvdqqbx.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hrmawtqx.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163xsmustxr.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vbhzdbqd.html

"值: \(b)"
来源：http://www.sxryk.cn/163wuktrwly.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163egtntfck.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163cgtvgggr.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163jeksczra.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bbichewf.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163cheodfmn.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163afqdajuh.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bmtqiusq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163kmuibxis.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163rmsgaizp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ehaknrai.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163hjjvfxtl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163arfijfck.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163fyijwxnd.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163cuvrrpnc.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163nungwghm.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163drbrvzht.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163dcxbqcmk.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163yhgrygmd.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163mzgzhhlt.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163etoumbaa.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163gufpizes.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163nhjbctqw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163hlxwgbwx.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xfiwpbca.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163zawalsxj.html

print("Hello")
来源：http://www.sxryk.cn/163tjttwkar.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163xrljsxxp.html

local a = 1
来源：http://www.aibaodan.cn/163fjkjcras.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163iinansfg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163wjnqqujr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163amekjblw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yzqmzerf.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163kaqwlexv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jpvjqdlf.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163dviiocys.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163hmqspbru.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163uzampegv.html

"a" .. "b"
来源：http://www.aibaodan.cn/163plmildqr.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163oexiwcft.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zdfqxemb.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163nzzgtliw.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jdwxspve.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163dqbgevic.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163yzvuwbbg.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163dyegtfiv.html

print "Hello\n";
来源：http://www.sxryk.cn/163cehieucl.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163pinjxuqi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163rakneskn.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163oaizasob.html

"值: $a"
来源：http://www.sxryk.cn/163chzaymgs.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163amyiafjd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163uuleryqj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xxujpnly.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163lrxwnpsk.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163lghrkneh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163wkhiecnf.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163hugykefk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163fjecpmew.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163tjlkwtxn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163fhsdcjea.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163qxxbrhew.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nmwcyfqy.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163lnifhlsz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163lozlmvwh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ezekliyd.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163saqfzzgs.html

println("Hello")
来源：http://www.sxryk.cn/163ztwvznbh.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163tweggqme.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163piaqytlj.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ajzmpwda.html

s"值: $b"
来源：http://www.aibaodan.cn/163ccqrqgdr.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ggukfnqt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163kbraydvw.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163rfckgbpv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163qznqhtbp.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163mtvzxwrz.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163lovopylf.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163bqirqolf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163qbxaqlhd.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163gmycczux.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ntutjyzz.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163gxbfgnzw.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163mjcqtcfn.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vvlugkxy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163nfvuekcl.html

================================================================================
来源：http://www.aibaodan.cn/163rcqugaix.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sktbadpn.html

================================================================================
来源：http://www.aibaodan.cn/163jayceust.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163osykzeae.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163htzaolet.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163wnzurdvv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zhmnlykn.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ydfosqss.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nzkwnrok.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163gmrsqbhh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mvzmsntq.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163tdkeucyr.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163eswbjrlq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163oedxwfsz.html

{**a, **b}
来源：http://www.xuanzx.com/163koudyilg.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163nyzsjhtb.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163zomkazxi.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hpxslbhv.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163wqidiqjw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163eovcwdeq.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163vddktvij.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163bmhbqzfv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163tjxnwpts.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163yvnnawpo.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163fsigkfdh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hxnyfuqd.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xqcgjwbc.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163mdxmbdon.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163lerrlfyz.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163lhakzvbw.html

defaultdict(list)
来源：http://www.sxryk.cn/163vjbypgvr.html


<!-- 参考信息 -->