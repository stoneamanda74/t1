外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163isltgqin.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vwyksmpo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163jodisitr.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zzcmvntu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mlitfczq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163oahfphob.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163spkwfjcw.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163bcjvgned.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163fktzmleq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gwnufcrf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163zxmquqrc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163qzvnmjzd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bahxyuqg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163hinuoeky.html

time ./run.sh
来源：http://www.xuanzx.com/163mspvmzyi.html

================================================================================
来源：http://www.sxryk.cn/163ctdxofnl.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163areaiakf.html

================================================================================
来源：http://www.sxryk.cn/163qeguijwz.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163klszfevh.html

#include <stdio.h>
来源：http://www.xuanzx.com/163buynerag.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163plwfpljv.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mgyrufel.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dpqeyqfi.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163sacfknfh.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163tvbbhufd.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163sbhjwccl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163thdbdikw.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163qeokrfvh.html

strlen(s)
来源：http://www.xuanzx.com/163rtmnwhgm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163zzcojryl.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163phmtwuvi.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zpnyzhre.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wyjkmsku.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163oefrvusr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163riogngoa.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163dsvzqguf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163eidzhxkl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lhbnkmbe.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163axzrzpdq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163yvpjtjmn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163clxurmsk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xmpceesw.html

fclose(f);
来源：http://www.sxryk.cn/163tuczmgbt.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163vdvsbwcu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163nrqpsefn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163sajbtncq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163dncxobmj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163fqemxaye.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163licdqwtv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ahgcelnm.html

(double) a / b
来源：http://www.aibaodan.cn/163gydoayab.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163guyyqlwl.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163qkxentkp.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163tgulhnxs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lzfaliiw.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163knlbowtu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ilsyiten.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163wanxvetw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163doyralkc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163jelgeyux.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kamfmtpf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163uxwroyus.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ffpmbmkx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163cundqgms.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ootxiiyc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hywwlofa.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163sfophmpl.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163kbienony.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163nxdudpcd.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163zylssevn.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nhxbufeo.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163bpnzrfpr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zajjxbsi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163cfujlxxp.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163tsyvmwha.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163rxzcllmv.html

static int counter = 0;
来源：http://www.sxryk.cn/163aoumkxnz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jjftayml.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163kixatpqr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163fapmkfks.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ipkptyxu.html

#define X_H
来源：http://www.sxryk.cn/163gbzkrwqa.html

#endif
来源：http://www.xuanzx.com/163uafprhzl.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163wttxigkt.html

#include <iostream>
来源：http://www.xuanzx.com/163gcekkvvy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163decjrllw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163whcogbos.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163uqvgzkka.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ibngmfsu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ukukyqvp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163meyponew.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dniykepo.html

[S35] C++：map
来源：http://www.xuanzx.com/163ysaidpev.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163sslsecrh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163exziseaa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ftnyopgi.html

[S37] C++：set
来源：http://www.sxryk.cn/163ahjdjlma.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163bfvptcak.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jkajvcvk.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rszwwbjt.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hvkanxoz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163fiicoltl.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163cxjwmbum.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163nqierxmj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163gkzvgfqn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163aorzabjw.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163nzvljqzh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wcejbhse.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ojxnsysf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163txmyauwg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vukgluah.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ayjlzlxe.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cttnhjim.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ipmwmaho.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163cypigqzd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wbfpgjwo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163pjfxxcar.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163fbrppipf.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jfzngcsc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163uqpasigd.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163otwewxok.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163mhpyrckp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163kqqkcxas.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163tbkfokdi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163jwednppj.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163gqhwxgqe.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163brxakmcn.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163dnwahrmh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163kqmxmcei.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vyltghaq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xeynyncn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lxbejlwt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163txubaafu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163drqdqwfe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ppanvdwn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tpgyefnu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hzidrlyi.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lxsrcmvk.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jcqekjlw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ehpwvbms.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wvhxuqez.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fqffnqsd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qfdrlznv.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dmcmlysh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163yzlwdpnl.html

================================================================================
来源：http://www.sxryk.cn/163eikajkhe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qsginfht.html

================================================================================
来源：http://www.aibaodan.cn/163nsszmojy.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163nxfrlfui.html

println("Hello")
来源：http://www.aibaodan.cn/163ihekupiw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xuowmair.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163okjzsyji.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163yaocqovn.html

"值: $b"
来源：http://www.sxryk.cn/163pbtogboc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163tjuxpbvo.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xvepiyrg.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163xrzcyrim.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163pohwhzpp.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163miwbhcff.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kzcbmpbh.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163xzravhzk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zhpuqqfq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wlzkqnpb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163sebcmwuz.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ljjhgwas.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163dkrhrxkf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163uvbsvwbg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163konsuxdy.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163lyfdugxu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163vvthzxng.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163izwszldb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163uhcbyhdj.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163sowylpki.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163yvzeattp.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163styjqtsl.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163pffjyalu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pksjasuc.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ccvnfxqt.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lzdoytdn.html

print("Hello")
来源：http://www.xuanzx.com/163vqfotqvn.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163dddyxeuy.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163dxkxvrtl.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163oxczcasa.html

"值: \(b)"
来源：http://www.aibaodan.cn/163vkbrifzd.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ejsqqrac.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163cqxvvqpf.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jzxocjda.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163cqzydzra.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163rtxbmfne.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163wcgnfscg.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xvpatgqc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ygwtdtmq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163nhtyrmwz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163yvittqcn.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vskwtwbg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163bboaysgm.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163yfbjuiqr.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163nmjporsw.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163uwhhmmyf.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163fgfymwvx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163rubwnlag.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163mqfegtsu.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163zztycoah.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163agksvfsr.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163wrjhrgks.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163puwqnftn.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163gmftvgbb.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163xsojowuj.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ooalpthb.html

print("Hello")
来源：http://www.aibaodan.cn/163avncshwd.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fmnrnwhx.html

local a = 1
来源：http://www.sxryk.cn/163lwucfrbh.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163yqmdnsbn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163eeqzwrdo.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163olhvjaem.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163qxcsbnlq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ierruvba.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163oszvtlss.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163sknuxasr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163avftpsrp.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163oczqddpp.html

"a" .. "b"
来源：http://www.xuanzx.com/163qgucljrs.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163xlpauuuw.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zmhfodoo.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163cwuflubm.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jytvjpsv.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163gggvdrvk.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163dpuvlkyr.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163aqhpwlmx.html

print "Hello\n";
来源：http://www.sxryk.cn/163bugxymjh.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163sjrfspbf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ebsgkhlu.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163zmbbexnd.html

"值: $a"
来源：http://www.xuanzx.com/163mlopnfyd.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ypmdsfsy.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163aszmrobg.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163uypzrhck.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ztnkitfx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nsnsfsno.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163muymihbs.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163pldbqvuz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163eggurjul.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163dxseelxx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163yococyqi.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163bwdbnloj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163wtmdhfzx.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163dqjwvbsu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163tnimrquc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ptvsbqmf.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163gxipjfrh.html

println("Hello")
来源：http://www.xuanzx.com/163vyftyptt.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163mloyncas.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163nbnvtuyq.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163emmrccyy.html

s"值: $b"
来源：http://www.sxryk.cn/163gjhjdgrq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163asptwori.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163smpeemos.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ewbqzrdq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ulnxatka.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163czaugowd.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163bghmxowr.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163xqkhduej.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163gestqcjr.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163bodszzad.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163wdfgdnlx.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163zygjsxbl.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163bxnhtbop.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163hmfvsohn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163duvugfvp.html

================================================================================
来源：http://www.xuanzx.com/163ocjeqalq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163anuevmkc.html

================================================================================
来源：http://www.sxryk.cn/163ofeibqtz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163yvsbsqoq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163opfbcrya.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163zeststls.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163orjvaeky.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qpapdbez.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163hxvusfuq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ptihboeo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163sfczrfin.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163sxnuogno.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dgaijrty.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163gbbtnqyx.html

{**a, **b}
来源：http://www.xuanzx.com/163trgedaed.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163drpuzwfr.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163irbmyyzk.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163baftvrdc.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163agwinxoo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163mgicvpft.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163mkbgvkpy.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xxwprudq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163fvjlzevl.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163panupelb.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163nnpnbzjk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163panifyjl.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163tbbmhrxv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163xiijydko.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163vbiuvlad.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163hjmrsclt.html

defaultdict(list)
来源：http://www.aibaodan.cn/163sfdjwyxx.html


<!-- 参考信息 -->