外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uanwubka.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163kkmifgbz.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rzlmktum.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163zderxkab.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163bhabpvyo.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163szphbgsv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ghxsgvqf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ttmutrxa.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163vfuocwrd.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bkblgtfk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163pghrvngh.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163finskagn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163crooseiq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163qqtugxxv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ydzxevjh.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ilumfuym.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163iyyplxfv.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kxqzatsu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ipjwcegy.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163knvhnonv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jzzfuhtw.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163vuuvqacx.html

time ./run.sh
来源：http://www.aibaodan.cn/163jhobsxvm.html

================================================================================
来源：http://www.sxryk.cn/163awoxhqki.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163apdibfff.html

================================================================================
来源：http://www.xuanzx.com/163zgrjflcd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163qkfvetub.html

#include <stdio.h>
来源：http://www.xuanzx.com/163vpfmhflp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163yyryskzc.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163phixdwdk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163buutpwjv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ynkphsoq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163nwffvskc.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163jkoozqap.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zkcvdbxs.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163prcqlcot.html

strlen(s)
来源：http://www.sxryk.cn/163bkxkyhlp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kkbkowrm.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kryxnuxn.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rzzouukl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163wnlhwtid.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wdbsuzmo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xjbvnzzl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163girmwlyh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163idjazjup.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163fylrbxgo.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163nwsviqza.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163budlblyo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163bbmcpafy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vfcecebh.html

fclose(f);
来源：http://www.sxryk.cn/163gsafiaci.html

[S12] C：写文件
来源：http://www.sxryk.cn/163woxlysiy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163qbrtdqne.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rwbxeoap.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163cchjftky.html

[S14] C：枚举
来源：http://www.sxryk.cn/163nfitkcor.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163wcetyemg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wjzgxakr.html

(double) a / b
来源：http://www.sxryk.cn/163eehqtupb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163stcjjrkf.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gqnfmaas.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xeepxriw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163kwwdvwfg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163wtdlhfqx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ffkesvoo.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163gbhnxzml.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yfjskvhl.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163skbfhfpf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cfjreobb.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ybxduppk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mmtbfxvi.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vqssbamf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163mwzcrnys.html

[S23] C：随机数
来源：http://www.sxryk.cn/163oxpsffan.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163gqvnenhr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163usrpgddm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163xvibwojs.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163wjbywiuc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163pblivkdo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163zysedrsc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163aqdbhktp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bzurnwqc.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vzxpbkpg.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qjfxbqvt.html

static int counter = 0;
来源：http://www.sxryk.cn/163ofdlpmqz.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163polfcshx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163afjxwqlk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ywuyasyr.html

#ifndef X_H
来源：http://www.sxryk.cn/163tdroehqs.html

#define X_H
来源：http://www.xuanzx.com/163vexuicty.html

#endif
来源：http://www.sxryk.cn/163nrvbjlig.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163vupulkry.html

#include <iostream>
来源：http://www.xuanzx.com/163yilbyjkp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163frvkpydn.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ajnfogcx.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kmpcphmp.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qottpngr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163habggnfq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163pxvdpbwd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163hjgsxilg.html

[S35] C++：map
来源：http://www.sxryk.cn/163mogilkla.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jqrsfgyg.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163naqarjfq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163foklkxlp.html

[S37] C++：set
来源：http://www.sxryk.cn/163wmuoiogz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163fjfvojrs.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vyavzhps.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163fmgnhgrw.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163exdmgvin.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dazurixd.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wozfgwrh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gysajhqv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163phejumgm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163xsdmxuzc.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wohnchyw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163uaxagbft.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163jfwsvvao.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163kpmbhukw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dbopejns.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163kygifiqw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pjocvmec.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ljtdrgbn.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ntkchkoo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163diuwshks.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163pzjyoejf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dohupbfd.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163hhvdacda.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163rabxqxim.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163drbquisk.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tjeputpm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163swocjfxd.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jknqjpgr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163wasvrewz.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jffayxmj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163glddnitk.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nsmbusky.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kqgfiatz.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yqbucqrc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mvocgcve.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163yrjydvyi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rtjjwqqe.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163gwpleeau.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163msnsrfll.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ywqbmrgj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163fvbfouln.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rkfatexn.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163mbpfrumh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jrayhyir.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163dvhyokro.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163olxtmbdd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163yvlwnhfa.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ozpckgll.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163seqotopp.html

================================================================================
来源：http://www.aibaodan.cn/163vtetroql.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wwhmsvzm.html

================================================================================
来源：http://www.xuanzx.com/163shmfmibi.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163twyjuwiy.html

println("Hello")
来源：http://www.xuanzx.com/163jqsjxlhk.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vnwcraaw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163crbblonn.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163wijmjzot.html

"值: $b"
来源：http://www.sxryk.cn/163bjikkvik.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163zsrlivnc.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ctrskvpo.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163dtqzljtp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163aoovvvbj.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163kdxuihhz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163pgknwasx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163szqfkrui.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rxgvdwwr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163rsmsrlva.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163rugtmvlg.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163uedsmkti.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163bskbkcjw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163wkbrxxol.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rwaxmfdo.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163sqksxdff.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jiryhlsz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163kfjdqacg.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163trsrpkyp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jivnywnv.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163krwftaby.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163poozrthu.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xnwtugxs.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ruyawzxp.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163frqffeez.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163pyepflxp.html

print("Hello")
来源：http://www.xuanzx.com/163hgxhrvfc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163omxaqmlb.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163oxqvbgtc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kfbemdjp.html

"值: \(b)"
来源：http://www.xuanzx.com/163bhdyqgfx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163boadvqfw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163zpombhok.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rcnbsbzk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hkowkwqr.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163riqwcnqi.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xsiwwkca.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163hknwrvrm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163waxptrmt.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163mmeznhch.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163xywcmvfv.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163blxmhlwf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163leajavww.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xmuoccwo.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163kezubqgf.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jatufywu.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163kfndqnni.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ezcpvuwk.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163objaqcgi.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163yznlbhaw.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163fykxeijp.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163cxohiwbp.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hprfljtl.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163lnwkqokr.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163yqxuhmkg.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fugqhgoz.html

print("Hello")
来源：http://www.sxryk.cn/163lmplbizk.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163vlynuvim.html

local a = 1
来源：http://www.xuanzx.com/163fuwzrbow.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163oduexlpe.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163nzubwcse.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163skeulbko.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163esvbbfyf.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163yfptvjeo.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163dsitovxf.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163remxpaig.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163rrtrtogw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gtztqtrg.html

"a" .. "b"
来源：http://www.sxryk.cn/163wygwvbdf.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163fcefwpbw.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163wdodsvoz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163sagkbmfm.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163tsittckj.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vuonmcih.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ddqxtbug.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ygedplqp.html

print "Hello\n";
来源：http://www.aibaodan.cn/163uzqyjtgp.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163vhttdjxq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163xzoltzrb.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gqpvuofb.html

"值: $a"
来源：http://www.aibaodan.cn/163eavcfbhl.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ynaxmcmk.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163bhmwxvaw.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163tuhptcik.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fdtzqyhp.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163fmblibhn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163gefexekb.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163qcxropmk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163yxlhpoar.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163sguniegx.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163rghwoeto.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163belyftpl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zpzkmrke.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163mrofvtjw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163lxuohdpe.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ihdwjpsg.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163yixsreus.html

println("Hello")
来源：http://www.aibaodan.cn/163xxvqzdlk.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163bhnkrktv.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163tgknlmzb.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qpkfqpdp.html

s"值: $b"
来源：http://www.xuanzx.com/163ovzlqxkk.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163xairiyqg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163mvikhzov.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163gqnnulws.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163pqhdvvic.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ymfchyxp.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ogozawqy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mzjojwcx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163dvposjer.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gxprlbwj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163civszzlq.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163fgfwpkfj.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163aejvhoqr.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bbmmapgy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163gdvnnodr.html

================================================================================
来源：http://www.aibaodan.cn/163pmzxnsvh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163vnwwyocx.html

================================================================================
来源：http://www.sxryk.cn/163gefukfoy.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163jrdhsuti.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ifibxvfp.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163mncphkeo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163kdxfpffc.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163pybfawzh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163vzftwjik.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163gwkqydme.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163thpznhrk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xnkpdeib.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163atvzhutk.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163wfxmgvni.html

{**a, **b}
来源：http://www.xuanzx.com/163qqqmgrig.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163gyemfsdg.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163atircgoo.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wwucvtau.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ddvjsxet.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ovctzipx.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163fofbszzt.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163agpzramv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jckbfznn.html


<!-- 参考信息 -->