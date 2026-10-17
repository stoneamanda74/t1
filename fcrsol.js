外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163zpnchzgf.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163tjoatepe.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wgsjcbcg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163fxzzoxjz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163fscbsgzg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163tpuplvsj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dhmrhkft.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163kfmnopkg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163rhnyqfsf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163paxrhuzo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163uzdnmzkp.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163tosfgcyw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163rdtpanqz.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163hujpfpqz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163tqkmwuvj.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xpcmbbyk.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ldkuxokx.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163maqcugwj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163thhjpopt.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163vbvvyceq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wygnpuab.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fhgihmmi.html

time ./run.sh
来源：http://www.aibaodan.cn/163dxtxhvsu.html

================================================================================
来源：http://www.aibaodan.cn/163vkycpbax.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163wpyibcvw.html

================================================================================
来源：http://www.xuanzx.com/163cvjpsqjp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tngasgdh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163sbngcmvn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bgmtcodj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163sxzcfzxk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fqmdmbhp.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163gjdsuvbb.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163vgvxlvkl.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ozmkfenk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pevtkokq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163byumdfbv.html

strlen(s)
来源：http://www.aibaodan.cn/163oyrwvate.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163boivwlnq.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kulxbecn.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163evxrsrhv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ngzkjtfh.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wjjdpdjp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163znsmmbok.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163gsbsentn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163fzqzcnol.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163jahxynlk.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163vdgljahb.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163fghpvxow.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bqhnixmb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zsoyxnrd.html

fclose(f);
来源：http://www.xuanzx.com/163qlprrjxa.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tifkgdba.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163sqajzxxg.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163dpvghwzi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163fjldtycc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wehzqqux.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163pnfxwzha.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163maabtdrd.html

(double) a / b
来源：http://www.aibaodan.cn/163yyamgmxr.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163kuhmnndh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163dbnhxfsa.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163exuzqtla.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163gcluglon.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qhhzvpei.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wawcvtbv.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163drnmboji.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yadbxqbo.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ngeopelt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163debksqgz.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163yaooprem.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163plsyjuov.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qzxfubwt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fwsvijvd.html

[S23] C：随机数
来源：http://www.sxryk.cn/163osvwzbdj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163aqklayak.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163okuqpurg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xhupvage.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163kazuqkaa.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163mjfsfuji.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163nsntcgxj.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163mwadcqpe.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163yrnnyzlb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163zkhrjwek.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163hdpltbfz.html

static int counter = 0;
来源：http://www.xuanzx.com/163dhzrcsxc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163whznpzsy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jqgxucih.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163kqacalny.html

#ifndef X_H
来源：http://www.xuanzx.com/163oatfmssk.html

#define X_H
来源：http://www.aibaodan.cn/163heevdovj.html

#endif
来源：http://www.xuanzx.com/163erlmkrgy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163oxxdatae.html

#include <iostream>
来源：http://www.xuanzx.com/163filyikfl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163oftykbhq.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163arghdreh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163iwuoctbh.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163yhpsrxit.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163lkadyrkn.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163yqfygvgj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ycczrags.html

[S35] C++：map
来源：http://www.xuanzx.com/163vvxignpt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hnfidgrq.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ycsvwnpf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qnjpcres.html

[S37] C++：set
来源：http://www.xuanzx.com/163mrwlovkl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ytqyljmd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vayjxlrc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163inlwwkqe.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ucihlqae.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163xubnpalc.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163erajlexd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163rxobwzjy.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gbbmfhqx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ipvytwsz.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jnabqoma.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163eciblbwu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163cxhvqvab.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tyyzfjkj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wulruzob.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163goyehazm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jjagvzog.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jigzvjxv.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163mveqbsva.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163xpriajij.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ksgaejqo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ngsuocmm.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jjdcieia.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xblkkter.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163xlqolmgq.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163pmestggl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163naeudpmw.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wbkzjogs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ddafcwof.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163moawxdwa.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zumfevdf.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163yuukpzgr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163tkirxxgw.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ekvpqcwu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163odmufrnr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kcapblze.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163vqtjhjoz.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163tyvudqop.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163cicboovr.html

[S56] C++：optional
来源：http://www.sxryk.cn/163adwchusf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ttkqraob.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ncmwirdz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ifgazuol.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kutbhzpb.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163syfwuldf.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163awgeswmb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163lmphgtrv.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163mobzbpap.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ljktifqb.html

================================================================================
来源：http://www.aibaodan.cn/163xhrilnxm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jskceasa.html

================================================================================
来源：http://www.xuanzx.com/163zrwlyrqr.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ttowkgke.html

println("Hello")
来源：http://www.aibaodan.cn/163scbgyvsg.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163wuzuvddt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163mnzdbzcr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ezmjtpwt.html

"值: $b"
来源：http://www.xuanzx.com/163aavdcyes.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163bdfpxnod.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163admrqwis.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163grsarnfq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163woyrtdqj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163vcgxpcey.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163icndqfdf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163lkaqznsy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kqwwwypk.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xtqudadb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163uumwbozf.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163vrnechun.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hrkiqgch.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163snsejmsv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163xxxkemvi.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163blbwtykq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163xafwuxrs.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163hubsfvnl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163wwwvwdfl.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163chepcitz.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163rspldctq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163xjsyepss.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163yyaqttyt.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163unaasbdn.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163jxnhwtsc.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163hgmbxjuf.html

print("Hello")
来源：http://www.sxryk.cn/163wrneitbm.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vphcuxnn.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163kvhbjxtv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163wtkpvavx.html

"值: \(b)"
来源：http://www.xuanzx.com/163dvjhxtxx.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163xqhqlcip.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163xnfdnvxd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163brtghmzb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163cuegditp.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ghsmrkzq.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163opaliixy.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163vcecptez.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163addeidap.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wqysltlx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hodarasr.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vatzfiwg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163hebqrhpf.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163oinuydap.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163tffevwup.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jqaleqnc.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163qbxaekoi.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xgpnvfhr.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wlgcqmmh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163lzfssidl.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163qwlkprlp.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qrztmghh.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163naterjeh.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163tuiiuanb.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ptlrxrep.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163syjbbvyc.html

print("Hello")
来源：http://www.sxryk.cn/163vjyjnngo.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163fzzrqxah.html

local a = 1
来源：http://www.xuanzx.com/163qvropymr.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163nvvtqadz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ngriomfs.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163bumdkhpx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163bfhbxdzf.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163hpztmegn.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dyrkwnio.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163adolinam.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163rtpqnvia.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163yxslufha.html

"a" .. "b"
来源：http://www.sxryk.cn/163rnechwje.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163nyevjble.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rhdyfefr.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163eblsrnem.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163bieljqhp.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ymnyijbg.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163xxspjwad.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163nnlqsvnw.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ghnwplvu.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163shicgdix.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vndeavex.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163kxkamhsh.html

"值: $a"
来源：http://www.xuanzx.com/163fsxhujug.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wsnqsjvb.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163bfcqugqr.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163sljotpia.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163djewdetc.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163yxditjeb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163qucocizx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163hxikrhtk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163qolrdzeq.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163jlgovosb.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163sifjyyeq.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163vgjeefyn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nfofwkre.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163nouiteby.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163mfzktqrq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163otkgfgjm.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163febfyoou.html

println("Hello")
来源：http://www.xuanzx.com/163hhipafhg.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163yglhlqdo.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163psmuuimm.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163gbqssrlb.html

s"值: $b"
来源：http://www.aibaodan.cn/163kbohfubh.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163mtvvmeqb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163gfyfmxbc.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163aoqfoiob.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163cowsqirg.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163jyctanas.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ifidhifa.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163vtpbfsoh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163lzkyjeej.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163xbbutyja.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163lsmygeyr.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163mjriufsr.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163xtgqzcch.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163biqqwonm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ompvzfrb.html

================================================================================
来源：http://www.xuanzx.com/163markintv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163feaezcvb.html

================================================================================
来源：http://www.sxryk.cn/163gohdileh.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ecnctdpe.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163nnmjbylj.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163clgcndhn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163qqhkbhhm.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rjjdihyo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nhpzvbsm.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163jfkxmdok.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qiamedhz.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163lldifmrq.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jwfncpor.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163utyiujex.html

{**a, **b}
来源：http://www.xuanzx.com/163wmptxbch.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jmrvucpx.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163omhzgudg.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163schwlvnp.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163mgflervr.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163yzqsqptl.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163amegwtfq.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xqcwgujw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163sskiyjre.html


<!-- 参考信息 -->