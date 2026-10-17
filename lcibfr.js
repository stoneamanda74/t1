外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163eoqoeaef.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163zxevkpwp.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wgidcbgs.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qytcryza.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163usbtmxoi.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wpvbpkdq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163kiheotav.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163cvdigcjp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163aaqkablg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jmkljrkg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163moswomqk.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163esvjsivd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163yvuvnhmn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163bhrfzkjt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rlpjzqkd.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163twqdrmhf.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lnleezvq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163aeisahyo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jqrxkpts.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wyjyfsyw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163seztdmns.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163swmyrdxe.html

time ./run.sh
来源：http://www.sxryk.cn/163bboelhxw.html

================================================================================
来源：http://www.xuanzx.com/163bheeazwv.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uzuxdrev.html

================================================================================
来源：http://www.sxryk.cn/163mtsvjdyd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wzkakrpp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jczhjrtz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163dypcqrnd.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jwdoeqkv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dqtuvrga.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163hsacouzi.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ycjsrpik.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163oxvfmsoh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163nsjgfzer.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163zywjoqkb.html

strlen(s)
来源：http://www.aibaodan.cn/163kozycuke.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rlnsjshr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163khletdmg.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vduzbvkx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163cybnvkte.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ijugvwoe.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163tseacrqm.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163mpqdiral.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ixuzwfkt.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163lgvmewzl.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ehodybzi.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163psszzwyd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163lsgkdbfo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163alxningo.html

fclose(f);
来源：http://www.aibaodan.cn/163kpvwbtpt.html

[S12] C：写文件
来源：http://www.sxryk.cn/163zczkupkh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yarhsljm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163hmqzexzb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163pekdgkyj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163inxnfswq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163snietgju.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163cfmfscvz.html

(double) a / b
来源：http://www.aibaodan.cn/163gpjyvatv.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163okkuworc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163taiocxey.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ggxmmgkj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ucdzpuur.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kbiqwnwr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163qpvllnok.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163hamfrzwj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vbyasqrz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ofzwwbur.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jllnupxo.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163zfmaqylr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163rsgobrug.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ilqdrhre.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163usqkxfhf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163mrwsmhjq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163semdfifl.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163kjzdowmc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163nbborssr.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163nvweenul.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vubgmohz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163npxekwyl.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xgpxlkny.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163cbqaogkc.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163uysxmqtq.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163bahryayt.html

static int counter = 0;
来源：http://www.sxryk.cn/163vullbmhw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163sncacugg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163pqtxhkkh.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zwmpugye.html

#ifndef X_H
来源：http://www.xuanzx.com/163lmwrgxid.html

#define X_H
来源：http://www.sxryk.cn/163eiyagkcd.html

#endif
来源：http://www.xuanzx.com/163hubwgcyq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163dvrrtcxm.html

#include <iostream>
来源：http://www.aibaodan.cn/163dvdagmgd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163lcutsugh.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163bgrkpppz.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wgrlonzu.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163tnwtksbp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163khtekled.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163wdvaotdy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mzrflfqi.html

[S35] C++：map
来源：http://www.sxryk.cn/163zfpdopdp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163egjpawbs.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rqrkvooa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xpxauqtp.html

[S37] C++：set
来源：http://www.xuanzx.com/163xmvmgxeh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163akbhrhsi.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tpqxbcgl.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163yxlauoog.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kzewerct.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163zgmfvijb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xdovmbkm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zqzvhghg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163teeqkzhk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qrvxxqwa.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gycgovxe.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hvgijlqz.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xpbncyfk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163fwlxdpkz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163kaednach.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hudiumhw.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163mfbxkhdm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163itqscfee.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ehliuduq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163dtdfthul.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163nfhzvena.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163remyamyb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163gkxllnge.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163pojgveun.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kkfcyurr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163rnbwlald.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ovjzolmf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zmbwicar.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163izobjvsj.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163zpfrbpjh.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nwgjlftj.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163kpmsjznp.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163juyuratg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yxxcoljs.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163uvgjewke.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163lghvxzck.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163pjwhazxk.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163cumtotmu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163cllcsyud.html

[S56] C++：optional
来源：http://www.sxryk.cn/163yurqeyvm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xjpoeetj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163npsroiax.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xylysxbc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163deijpeuz.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ctbdrrse.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163txnazddl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xiuybats.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163svcboyvx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163bwakragk.html

================================================================================
来源：http://www.sxryk.cn/163kjtazdog.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vnbudnsq.html

================================================================================
来源：http://www.aibaodan.cn/163hlyyxydd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163talqzlan.html

println("Hello")
来源：http://www.aibaodan.cn/163cneybyfh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xztgthgh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dzwdlxak.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rjvvxdde.html

"值: $b"
来源：http://www.aibaodan.cn/163hmvzfedh.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163blemffqd.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163rtjyldle.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163shnxixcv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kvqowsjn.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163vhcrrrbp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163zvjqxduw.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ltglntpb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163noqumrvh.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163oircsqct.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163zwlcduvn.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163dcjyhjcg.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163oulklhej.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wqtcunop.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163qcckkodv.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gcwsmicy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163rjzxcgxn.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163uqmhqodf.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163klnuyevz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163truvgtgp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rkjooimb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lyxzmlsd.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wzbdtcjx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163yqmupuhj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163oktuixfo.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163pqharuhh.html

print("Hello")
来源：http://www.xuanzx.com/163tersqogm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163nmtmyjgc.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163akddhvxs.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163cutvtkwr.html

"值: \(b)"
来源：http://www.xuanzx.com/163napmueek.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163vfznuvvw.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xyjddjls.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163vmvdofdh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zkzbqaxm.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163crcpefhh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163vuttmmeh.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wbrbhpga.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163khdkyqgk.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ppitodwn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163kjkegmzj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163gaifzhkm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163jmgxgyqu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163eizoegnr.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163bccmvmci.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163goveetyq.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163hkdrcxgt.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163uyozzyam.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163akneuxda.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163sqcdsrsf.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163gvweniun.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dsbmdogk.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gdnkjdqr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163gbjnktwu.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163dadblgzi.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vusfqqxi.html

print("Hello")
来源：http://www.sxryk.cn/163gpqcomfk.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ojzmmnal.html

local a = 1
来源：http://www.xuanzx.com/163nkaymixz.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163bauqldnl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163kftaxosf.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zwwosjur.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163rxslxwnk.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163jxyuypgm.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163dildnjbh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163amgaylir.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163dlctdmou.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hnzdguhi.html

"a" .. "b"
来源：http://www.sxryk.cn/163dgoomduw.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163lhioxnto.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163lvhcuevy.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163mpplwziy.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163gobrvmej.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163pxkvvbgj.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163pljhdzfu.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163xvvjtnei.html

print "Hello\n";
来源：http://www.aibaodan.cn/163yjkjtwnd.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mxmlsxmn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163rglktycx.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163rahhozia.html

"值: $a"
来源：http://www.sxryk.cn/163drtdxoto.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jqhfzynt.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163sxuevpiv.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mrfrbkna.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ngdixztz.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163cxbrranh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163nkpbzgcu.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163javomngr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163abiazovi.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163tnuytace.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163pffmmqvq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163yyfdifnr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163wmnbdiqn.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ibkydehr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163kvvzoyot.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163jjdimlrb.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163tsiwhoyr.html

println("Hello")
来源：http://www.xuanzx.com/163gmddmkcm.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fraydljz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163dcpdiuap.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163yavvqapr.html

s"值: $b"
来源：http://www.xuanzx.com/163idbripbp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zjewkfdl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163rlsqkvft.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163gehhsbbr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163gkkzlmsb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ecpjwhtm.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163gtqhgrzz.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ammiseqo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163jzyjhurp.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qfldlvqh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163fbismsvg.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163purrvrbg.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163vasicdzn.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dqxphmyd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163gkxgmjcs.html

================================================================================
来源：http://www.xuanzx.com/163aybdwudd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nyavgxlm.html

================================================================================
来源：http://www.sxryk.cn/163zzafflel.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163htxzqprv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163hghlbqjc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163cdijmwfg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163bzgczgyq.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163bbycnjvr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163kxwgtmel.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ibcdhmhu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163vwvnucrl.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163uzmzkcyn.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wuftuobd.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163irunkihe.html

{**a, **b}
来源：http://www.sxryk.cn/163xjvihomp.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163wbmimurk.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jwsqbhrc.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163hoctxmcw.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163tjchqumm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163huxfecgq.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163pzhbltki.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163fyujacwc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163gqzpvhza.html


<!-- 参考信息 -->