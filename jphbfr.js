外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163lvendcgu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ieimxtup.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163pcdmomsb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163lizbciaa.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163bbzpqlga.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163kotyfcbe.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163fozarddq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ntycxptq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ubsrvbuq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163fatbqont.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ywderons.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163efmuntwj.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hrxhlvvo.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163igiesovy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163cuhnsoxh.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163gdvjazax.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163bcxpgmtj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163tpnavled.html

time ./run.sh
来源：http://www.sxryk.cn/163hihflrru.html

================================================================================
来源：http://www.aibaodan.cn/163tulmmtvg.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163bclbfqey.html

================================================================================
来源：http://www.xuanzx.com/163skkkyipp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163esycdtws.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163omltnkmx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163wlguypad.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163kitubavf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163kjcpugdm.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163eykdqzmg.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163sttfzfge.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vpecrtdq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wkngbhhc.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nitwncjn.html

strlen(s)
来源：http://www.aibaodan.cn/163urtmkugc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163wanladkm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yghwtlhp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fbpyvwja.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163lifkqpxi.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dmmctqyc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163dxqrfuwp.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163zodiqhcl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kwxigdsw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hruvixsf.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163cumarlob.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163tbdschik.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jccjpznc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163sarkjdif.html

fclose(f);
来源：http://www.xuanzx.com/163tkgxdwco.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hboietfb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vnuhtdfe.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163thetxyps.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163lpdnydlb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163cwaxqetl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163thgytwyv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hzzwgoqi.html

(double) a / b
来源：http://www.xuanzx.com/163opipnkyb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mgqwspmn.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163wtanhkfw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163liphaueq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163nvmcxfix.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163oqcwelbi.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vnweozjp.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ahmlezad.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qhggsgvp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163qzjazxkt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163leumdesl.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163boijafzt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vlpbokmp.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wsvediow.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kxoifber.html

[S23] C：随机数
来源：http://www.sxryk.cn/163yubbxjfb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163qeibtmit.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163iynytewf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163xficsxal.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hnnjzmhe.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xlznijlh.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163buqiokqk.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163figpbeou.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ihtdfwta.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ezxlcurs.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wceisleh.html

static int counter = 0;
来源：http://www.aibaodan.cn/163jffffpru.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163sznbazjk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163jcjkhwty.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ivvvatks.html

#ifndef X_H
来源：http://www.aibaodan.cn/163gkhqfmnn.html

#define X_H
来源：http://www.xuanzx.com/163wsjngiqw.html

#endif
来源：http://www.aibaodan.cn/163tlhwpnpq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xpqrqoyo.html

#include <iostream>
来源：http://www.xuanzx.com/163sdiygubk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163cvftuyix.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163xcfzjkdl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163dedmdapi.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163jxxxvyop.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qfgblyrr.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163bwhaaroz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dfcllomq.html

[S35] C++：map
来源：http://www.sxryk.cn/163ddmvyxcb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zzlwtfxs.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163bhambzkw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tbacexdn.html

[S37] C++：set
来源：http://www.xuanzx.com/163zlhlxjob.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163zlaimjma.html

[S38] C++：排序
来源：http://www.xuanzx.com/163pydrhnca.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163llcgtsde.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163yhshixfk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163kgmxdpeh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qyirvmhl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163nvmhfyrc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163coeevulk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bvpujvbd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ozmxpfja.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163flobwmjf.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mmhragws.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163odwsvkgp.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163tkgvlxwa.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hfgwldwj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ynfgzpvm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163mviblrfn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vluumrxh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nsnyxkon.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ixwfpgwx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163livipgyh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163coolualt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wrlqakqt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163hqpwnvls.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lftyfmve.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163fzsuybpg.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163jflsvdyt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163icrfdksm.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163unfoevjn.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163mgvvdtcj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163aqvvaskh.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163cajvwuty.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ahdzpchn.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163zvyjpypx.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163irynpbsp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163zzlbvsgw.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dvdfkayy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163fnlfskid.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zsjpxewy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ovcvthrx.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lxdrsuvr.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ovuooxbx.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163tmjblxar.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rnrvbtrz.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163atyfyfre.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163pecbkind.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163pjtpuqzx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kizkfqvn.html

================================================================================
来源：http://www.sxryk.cn/163uwwfgxzv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ecpjkomu.html

================================================================================
来源：http://www.aibaodan.cn/163okhckubu.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163uxjqdleg.html

println("Hello")
来源：http://www.aibaodan.cn/163apfiqimz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jshdwsfe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vtpsktij.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163jcdokyvp.html

"值: $b"
来源：http://www.xuanzx.com/163nffjtumc.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163cafkxxkj.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lnjnvxfb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ncwjuoeq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jrthakri.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163fneqiykf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163bkfhkeeb.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163bfamwttz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163hgpkkijh.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vxfbvhyq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ghbvjfwc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163vxkhyfen.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163lhwteuet.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lqlwsliy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kptblqct.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163znlropni.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163befnmuoj.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163jyshsxcd.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163cfamtjpa.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lmtxyubj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163wzngavlr.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163farwfogn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163kejynidv.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163aalordai.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163sgnrrpgy.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163euhsdgam.html

print("Hello")
来源：http://www.aibaodan.cn/163vfvzdjgh.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163deseknzm.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vzdkichx.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163xnbxjkef.html

"值: \(b)"
来源：http://www.sxryk.cn/163lngxkcwx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163glmqufec.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163lwipdvfv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163bmbdzxjy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ckbvqwmf.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163fniodnmn.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163otlqnztj.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163tgwexmtf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163cmsfndby.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163yvuyruhy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163masrozao.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qsvwarwa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163vfcrmjtu.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163inyizcci.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163wiapvltw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zbkzmahm.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163dxjmpxcj.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163mebjghoe.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163psjicqmc.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163uhvxwoad.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163kxnshpod.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163mtcxwaxd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163pzrdrwlm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ffrhoeqz.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163gbecylxc.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163oordlphm.html

print("Hello")
来源：http://www.sxryk.cn/163euiakgej.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163fvqlqwmb.html

local a = 1
来源：http://www.aibaodan.cn/163yhxjqqsw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ezprpexb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163knreawvg.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ueddnofh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163hlovvqdm.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ryozixfv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163frixptzi.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ysvvmeqm.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163idbhvnjq.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163jqoybkzu.html

"a" .. "b"
来源：http://www.xuanzx.com/163videkxuh.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163msqxciam.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163fievtpwc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163uvvkhjpx.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163lgwrlrew.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163huxqviyy.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163qcxtcoxy.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kphdiyky.html

print "Hello\n";
来源：http://www.sxryk.cn/163jztkpkqu.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163vdpoczqz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jxlqyxpc.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ssexffgu.html

"值: $a"
来源：http://www.xuanzx.com/163jvzsemul.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163sgltwxro.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163beyandwu.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163vchgqydi.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lnwlduya.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163vjrezbpv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163mzawthch.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163nqdoxgsb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163kdbgcckh.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xuunxhuw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ovognmsx.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163joinkhsa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163didugrxg.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qfrmphvr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163kusswtik.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163eismsupi.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163mjtoktso.html

println("Hello")
来源：http://www.xuanzx.com/163bnlfrclh.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163wghuwkdr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163cnbswuui.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zcgfazwh.html

s"值: $b"
来源：http://www.xuanzx.com/163luawaewp.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163sknexdxn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163onjdufqz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163orfjpoen.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lsfznbub.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qptpjtqp.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163dsiwcbhh.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163kykktxme.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163lfzhyrzk.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163bisnsmjc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163nfwsskcr.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ldlpxeft.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163kqtihmdz.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163syxjgthp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hcshzbna.html

================================================================================
来源：http://www.xuanzx.com/163giyiajjx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lfoapjad.html

================================================================================
来源：http://www.aibaodan.cn/163vapvfmlv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163uaanbewf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163dijivimt.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ikinhquh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rgewmgql.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hufasyvw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163gqiflekh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163eizuqlwx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mqhxxtuk.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163qhuucacj.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lfrskrbf.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163bbttjkyq.html

{**a, **b}
来源：http://www.xuanzx.com/163lszvugyg.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ulwnfobi.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163shwlavog.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163kncsamnu.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163msllgwva.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163cjwpzzrs.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163mzjaznzh.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163fawspycy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163mngnjaxk.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163dxiktdtz.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163xpduqpim.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163nigmtlvr.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ywxabemx.html


<!-- 参考信息 -->