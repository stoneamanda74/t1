外链999!wailian999！

openssl rand -hex 16
来源：http://www.xuanzx.com/163phifcoth.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163whnowvqh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fqjlequr.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163wwkvyrfc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163hfedoutc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163uondquni.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163vvbtmhrb.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163iyfgqvsc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163hzwatuzx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163imttmlyx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jcabqrer.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163kpcnlqww.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163nmmrkzdi.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163exrvyhkl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vfmiaofe.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163quewvnao.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163npymkkdn.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163qlcvkoxn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dlidreuf.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163orthtjmv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163idtacfju.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163dtytybxn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163vvdqosnq.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163bmabrsag.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ymwnxcgh.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cgnfcjmy.html

time ./run.sh
来源：http://www.sxryk.cn/163iimvxzgo.html

================================================================================
来源：http://www.xuanzx.com/163xomolzqh.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163enopmkto.html

================================================================================
来源：http://www.aibaodan.cn/163fcfhldey.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163wunfejtd.html

#include <stdio.h>
来源：http://www.xuanzx.com/163unujenky.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163epkzyvit.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163yoqewanc.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163tovchxlw.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163dzvrgtoh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kzbifuge.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163lmgkujxv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163qxbedlih.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163fmsfqarp.html

strlen(s)
来源：http://www.aibaodan.cn/163qogfjiuy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163cdpolrdr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163yrageuli.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xirftkch.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163etrodrwe.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163uflngxtn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163wyfmvabp.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163gxwnmwgt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jloipmmb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163drqsiqdu.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qxzdhmoo.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ndtxlaxu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vijctzsm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wgwulxms.html

fclose(f);
来源：http://www.sxryk.cn/163wmaynzpx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fitdurqw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163kfrvwlcl.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163dtdpmhqt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163xxgwdhsg.html

[S14] C：枚举
来源：http://www.xuanzx.com/163mzqipixw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163cluvfoke.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163drmkqooj.html

(double) a / b
来源：http://www.sxryk.cn/163whwoskuq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163nkudorjk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163dflxnsjl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ywflctxc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fbtmrbvx.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163iwtrbpkl.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163upiunhce.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163cbaakdaa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oepbjult.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163zrmfggoy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wgzxexdo.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hiovihxx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163juryxdei.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nkfmuwiy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qhfsmods.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163tpoefnre.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jiguvmvn.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163svnfaiwx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ntwyuvep.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163fwwqivld.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163kjnxxeuo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163duglvzuz.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163pkwvaqrg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zkuftapp.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163mxkaqggf.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163pwjvgees.html

static int counter = 0;
来源：http://www.aibaodan.cn/163bbkvkegj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163gmgdnkro.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163rnbjdkxk.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163fohtitgo.html

#ifndef X_H
来源：http://www.sxryk.cn/163rkazttsm.html

#define X_H
来源：http://www.aibaodan.cn/163ekgzizpt.html

#endif
来源：http://www.sxryk.cn/163cadvwzaz.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163jesleort.html

#include <iostream>
来源：http://www.xuanzx.com/163fyihnapi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163anxuoygu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163hdimobno.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163rteilqkz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mppdjgvm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dnsmpjlj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163gdxckxjl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ksskskze.html

[S35] C++：map
来源：http://www.sxryk.cn/163urwkpbzs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163etrbrozj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163vwauuyyn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mvnhopvp.html

[S37] C++：set
来源：http://www.xuanzx.com/163ztcbruyu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163byoldumn.html

[S38] C++：排序
来源：http://www.xuanzx.com/163xequapws.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163toacqdrw.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163eomcqtdb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163brzcqpvi.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163nlrlycqk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163mvxsggks.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xfznkcag.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dycggvwa.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ihavdwtr.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nhkxptsy.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163yyscyhhn.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163vsdgfavi.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163mpvqhanx.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163efihnsbs.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gfeyjhzz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wsuwszfx.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dvwbyjfu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163sqyvjrsb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163bxegwkjr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163lkkyyvvh.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163lkafrgci.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163wgzzesar.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ouwyfqvh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163nvukgbro.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163cooqwhjm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wznmhmyg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163lmdfhmpb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ejivpiie.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163tzgdwgup.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163watjewwu.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163xlumsxmb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mrdzmvmi.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jovjtwvp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163bxgtyygb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163kavmdjyv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wqkhhnnd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163sotistbw.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rvdjrzng.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ynqqwfox.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163jgvnkfic.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yrjlynlg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163flnceplk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163tbftqcmk.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163jdtlnwme.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163careryuz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163czovamkz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xnspuwol.html

================================================================================
来源：http://www.sxryk.cn/163qqtujwql.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ysurpjmf.html

================================================================================
来源：http://www.xuanzx.com/163nfdxivso.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kadtjbtd.html

println("Hello")
来源：http://www.aibaodan.cn/163kuxaecav.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163qtyyorko.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163wpykgdfu.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163yzmwsdlo.html

"值: $b"
来源：http://www.aibaodan.cn/163puogavpn.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163sciaqhcf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163crqhjdmq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163eqjrurpb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163grhnlsyr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163obiwtjmi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163eoidkjda.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163zrdfiahy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163kcktcbjz.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163oosojwwb.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163nxlouxoj.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163dxotqpph.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163phcxjqif.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163uzlnfvhq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163atnmjqrc.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kalxbori.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163rlanctpv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hiirucfa.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163lqqsayyh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163speivmlf.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xjludtyd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163jjwyldbt.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163oyqonihc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163fynbfeaz.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163parnspjx.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bqahritw.html

print("Hello")
来源：http://www.aibaodan.cn/163sjgalnnp.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hwksujfu.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163sxnxiptu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hezeegxd.html

"值: \(b)"
来源：http://www.sxryk.cn/163paoddkjz.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163udidvbhu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163apjnrnjs.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ktsauncn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tckewstb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dgvefeeu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163awxrhgcl.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xzzeqaqu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163haxiarvn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163rclmyzqt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163hrfknuxl.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163upsodnxt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163bttgvthd.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163rdummrqt.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163bnnqjvgy.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163wvsktzwq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163nzujzxzs.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ajdgvvav.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163mwlggzwc.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163opxgdmpq.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163wvujvjzo.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163cyyluxnm.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163qatzsoez.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163xuabzwcl.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163idcawqro.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163tzybedib.html

print("Hello")
来源：http://www.aibaodan.cn/163fixgavuu.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vagsvdrc.html

local a = 1
来源：http://www.aibaodan.cn/163enwhoqwo.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163whgphnjx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163hxidyqrr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ckiqqago.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163mwlmkyor.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qaycieqe.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163oppdfbmh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163lfrwzznu.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163rirczgtd.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163txshuyhg.html

"a" .. "b"
来源：http://www.aibaodan.cn/163erjcftmt.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163pfxwgmhm.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163mgdejeht.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163zwudlccw.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163bdjiblbu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163zhrmtjla.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163qfvkjelr.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qoqovzun.html

print "Hello\n";
来源：http://www.xuanzx.com/163xdinnqai.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hyzkcxhe.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bhymepts.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163dkfxtsxl.html

"值: $a"
来源：http://www.aibaodan.cn/163zxwdgqhp.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163tjodilaz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163kkmhmajd.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163tacnsbdb.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fywngapu.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163vxcdtwka.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163lnlaauqt.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163eevlhdhd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163kyvmynxr.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163wxdkhgia.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163dzbiqxmr.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163llqmrukd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163paskhxpn.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163myoskisu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163kaxwwohk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ezptnydk.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163cphtyusb.html

println("Hello")
来源：http://www.aibaodan.cn/163raowrsxp.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ckowxjby.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163hnyvzlgs.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ivtmfwnw.html

s"值: $b"
来源：http://www.sxryk.cn/163xwofzarx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163amutsokz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fawhivhb.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163lbiwiwjh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163cwfwsgzv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163iuphahni.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ayoacvww.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163gpqgopaf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163hhpfwdwy.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163pfswhrha.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163pknfhkon.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ybbldqjx.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163cyeolmtt.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163rpnjwttl.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163reatascf.html

================================================================================
来源：http://www.aibaodan.cn/163sazprria.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qeipvylo.html

================================================================================
来源：http://www.sxryk.cn/163myurjtxh.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163dvuxccwr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163rttxodsx.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pwqljsvs.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163gvkpgbex.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qcftrseu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163tgvjmxxy.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163dwaedwvy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163nzgejpmu.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163mzrizbbo.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ucrudhog.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163kynmxlaq.html

{**a, **b}
来源：http://www.aibaodan.cn/163swjfybdp.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163qpgpqaco.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163puildlij.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163cotvvelf.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163tgpobymz.html


<!-- 参考信息 -->