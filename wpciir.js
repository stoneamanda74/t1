外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vgbntrzb.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163taldykbb.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ljkdspug.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163lxuhtqsd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rmznbqsk.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ervjlnnw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ebpoatwj.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163swdxsqqr.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163vhmfngxn.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bwhilzpe.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hmowcrks.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163eqmguuuv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163qxtiphpp.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163xtcncssn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163juhldwfd.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bimfysqg.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mvixmtvi.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163zkazwiqd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163hdnesslc.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163hbrsdddg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hjzxowoe.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163cfpdafhq.html

time ./run.sh
来源：http://www.aibaodan.cn/163bhaxlgfu.html

================================================================================
来源：http://www.aibaodan.cn/163jjzqynte.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163exczgweg.html

================================================================================
来源：http://www.xuanzx.com/163dogoejcm.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ozxkjjwb.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ptjyaasf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163lzhkaohc.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qhzvcbvs.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163qxnznwyn.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163dicvaypm.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dnyxcftn.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rsgqdnxz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163vheladpy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163efatvajm.html

strlen(s)
来源：http://www.aibaodan.cn/163prwubosi.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tseqkjcq.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163omjgxdby.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163yktlwolg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163tfzvshcm.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163xubavlvo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gwwnrqrj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163vdhwzudt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163krlqumda.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pmfbhaxe.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163aqefatgn.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163nocnmhff.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ovllyfgf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163wczijinx.html

fclose(f);
来源：http://www.sxryk.cn/163itxxywci.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mdaybxlf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zysjdeur.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163kzcylgst.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163comsbkto.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ooxxcbcg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hzwcxmjt.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dtalkzcs.html

(double) a / b
来源：http://www.xuanzx.com/163wsdyfypj.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163bjujupim.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163wqjsathi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163iuhxyeir.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163zriqrwrr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ofkpgwiy.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163suixztwz.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163owmsarfp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nfxdzqpd.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ywjzkupb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163begidfoc.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163lbaleuwa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lwnridsx.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163kvfvinlz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qvsrunod.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163cuspymja.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wufqlfmf.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rytiyymw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ohychusc.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163lupbzbrz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ytujkwya.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fjkvbzag.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hqdlwmkm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fwpwapmw.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163pgcdllwt.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qytxpkia.html

static int counter = 0;
来源：http://www.xuanzx.com/163oeflbili.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bqakpnvo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ywipzrab.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163bxzfxsms.html

#ifndef X_H
来源：http://www.sxryk.cn/163razfkeux.html

#define X_H
来源：http://www.sxryk.cn/163pvlmnugh.html

#endif
来源：http://www.aibaodan.cn/163tssuurpq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163izgrdtpf.html

#include <iostream>
来源：http://www.sxryk.cn/163kldytgxr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163jtpytggl.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mrfubkln.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163tmajunwn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bsbcppnz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163obsawwvx.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163zbxyzjtc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163qfpjvxiz.html

[S35] C++：map
来源：http://www.xuanzx.com/163tqjpshmt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nazmvueb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163jmgagvyq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ksbcvkfo.html

[S37] C++：set
来源：http://www.sxryk.cn/163kszharde.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163psbyilwx.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qdmnsslf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hvlphput.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zyklctbq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163uxmzfkin.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163bgfeelsh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ildbtpeb.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163hmarslrt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163iirhozno.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163zdhupadh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163blsvxirz.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163qawdgbwy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163niwdnuay.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ldkppyhg.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163xzhorrwx.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vdxzyqmb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cxsveqcu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hnotnnej.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ccwhwrev.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xxgfbnpt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ioojktyo.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163iwyifrer.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163yemetzjv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163miupmsoi.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163btpfpojg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163bpkykels.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kcpojqxu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163sxmylqzd.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rxngtljb.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163onmahiri.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163sfybvure.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ncuavxkp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ijumcofq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163fogkfuhl.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163bjuuzotc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163zslnpaoe.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163jtaizuex.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hrwqojzl.html

[S56] C++：optional
来源：http://www.xuanzx.com/163kuxjesej.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163nuqeyrhc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ikuidtdu.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163nfhhrlgf.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vzgqngvv.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163qfowtsej.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zuxugonm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163fsyjhsxn.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163bbceptfg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xcgelmob.html

================================================================================
来源：http://www.sxryk.cn/163gvaplbzu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ltbrvvby.html

================================================================================
来源：http://www.xuanzx.com/163sxqubqmk.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qkhbptjt.html

println("Hello")
来源：http://www.aibaodan.cn/163wstbqvyc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163imhrkaqg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ctuwrzwk.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163umjuilbj.html

"值: $b"
来源：http://www.xuanzx.com/163glvysicd.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163rbbxbddu.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163bsdzzfqk.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163dyfysiad.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jtbuakty.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163gmqutewh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163topgwywp.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163usfadmrm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zvdhqgbb.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lzgbjtny.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163grhgkwjw.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fdpoiqjp.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mepmiqyl.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ccztgiyh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163jsllgcnv.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163idfzvkum.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163yzpijiox.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ylgegqgm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163uanicjlo.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163jxlvisdk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163nbpacjdd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163cpbcebcn.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163psbhsnpx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163asltujlk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163gbkqyllu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163awgufuqx.html

print("Hello")
来源：http://www.sxryk.cn/163powjecvx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163mlenlhzl.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163nwaxouye.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163cvoytmaz.html

"值: \(b)"
来源：http://www.sxryk.cn/163reilipze.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163nxxxxken.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jwajblvd.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163empfljez.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163yqukgiyr.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vzvhkpdc.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163klkmixsw.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163yldwnhds.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163faddyhax.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163mnubyzil.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163mbkurnot.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163dzaowglc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163mooxjruf.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163wbjhuewg.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lofpqknk.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hlqbdtiq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163jewbyjpe.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163lpgxurdw.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163obcwotzs.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ardlpmvu.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163betxhyzj.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163uvdvoekb.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163dghwimrg.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163sdoupxid.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hygzijvg.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163nsztzoec.html

print("Hello")
来源：http://www.xuanzx.com/163jwnugmze.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nppdjtld.html

local a = 1
来源：http://www.aibaodan.cn/163ejpbcbcs.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xcjtnnmh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vnrdmchk.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163fzyptojb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fjxxmisb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163kirxexoc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163bqxztdde.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163qasmfhud.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163cbpnapbx.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163yjeffbzy.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hzckaoae.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163jkvzlmuk.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163icpqsevq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163uxmbkczd.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163kpqwbbgj.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163rgfdwfbp.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163qvrimxmy.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ocyaegit.html

print "Hello\n";
来源：http://www.aibaodan.cn/163enngbtfo.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jiynsulb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163tvkyyvpb.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163nrsecewq.html

"值: $a"
来源：http://www.sxryk.cn/163opkopagv.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163qyttuhln.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nbrtsgxy.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163injzfmox.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163rlgntoxt.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gelmpzib.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163sgbksqae.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163lorojltu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163nourbaqd.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163heujmoxd.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163urijaxwo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163chibblzl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xhhnxomk.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163bthnbcra.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163drwobiqc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163xpuonljp.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163cithctpj.html

println("Hello")
来源：http://www.xuanzx.com/163qendejbz.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163thiaskfo.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163zrpfgpcf.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163nltcocql.html

s"值: $b"
来源：http://www.sxryk.cn/163qwpjmbfp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163mpatorja.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163sictllnu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163lsjpiejt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163wjppciwi.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163aztdpccw.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163pzqoakxe.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163pelxgtvs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163sctliyqs.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rhkhktxp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xhwqtaxt.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163eqmliewb.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163bjwbhjlr.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bigojhti.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ybjmshiq.html

================================================================================
来源：http://www.sxryk.cn/163lhffenie.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fhvtmqjo.html

================================================================================
来源：http://www.xuanzx.com/163fzfoqrvr.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163llpnxnbw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163oaeqoahu.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163uhpubsse.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ddfhwprl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rkauvvuv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163twuxdmpf.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mgxzzwjn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163xvssxmxo.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163zwflquzu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qytuzoei.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ejyawizn.html

{**a, **b}
来源：http://www.xuanzx.com/163frjilnej.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163meoqfrmg.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xazqitie.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163fuziypng.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163aurumvek.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163tyytmszk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163blontwcy.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163trlqsurn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gfjpocgo.html


<!-- 参考信息 -->