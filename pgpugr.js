外链999!wailian999！

df -h;  du -sh *
来源：http://www.sxryk.cn/163dsxavqev.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163zqzmmcar.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163wcbeydhu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qlsciqjc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ncxtqrcc.html

[R64] 结束进程
来源：http://www.sxryk.cn/163iubxbbzt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163pniedeop.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163octfhynb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163aogqaums.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wwwqvwvz.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163lkksavss.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163kujqzutw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vdgvhvlr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tcaijtqb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163salhdjoj.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vavwiaie.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gazzbyqo.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163sybcknnz.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xcvoornz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163aoptvfrv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rrbabvsi.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163tvphserh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163djjcxrkm.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163jhmzervn.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163keidfzfs.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163rbhtehqg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163yfpuwttt.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ctjzipfu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qwkkotfl.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163cmhbzxru.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uacturkz.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163unaxstih.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163fcxlrafa.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163hwyoqiaz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163isxonypa.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gxvrfuwb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163vfmnzddq.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163okmyvhho.html

time ./run.sh
来源：http://www.aibaodan.cn/163npapotfq.html

================================================================================
来源：http://www.sxryk.cn/163zqbdrdqk.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163mabdqkhl.html

================================================================================
来源：http://www.sxryk.cn/163jhrpbiwt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163nhozasrx.html

#include <stdio.h>
来源：http://www.xuanzx.com/163zndktcev.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163idbnxakd.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163elajdsts.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163mfbnylhs.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163dyqtqeqz.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163snyhdryj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jgepjikn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jdjugeqc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163jrepsxoz.html

strlen(s)
来源：http://www.sxryk.cn/163zbrjnjzy.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163noehbhrp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163spiylmvh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163wcukkaze.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mvrytmto.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163tpwcnomx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163yiekrslc.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163xcantykc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ezcrwwmy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rzzjgcga.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fndnwohp.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163sygbxynu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163cngfknpw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zkejnphl.html

fclose(f);
来源：http://www.xuanzx.com/163yzjxjwub.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fckqpvpy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wneawjtl.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163niizemgq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163dcrfzqlg.html

[S14] C：枚举
来源：http://www.sxryk.cn/163oryogjeg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163bvxjgkkm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zangmmgv.html

(double) a / b
来源：http://www.xuanzx.com/163allqqtbo.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163cqgbvomu.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163wfswaysg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ybnhkapw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rrhzgylc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ppptjozo.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163cnvnwfhv.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163yshrmveu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163htnmylwh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163opqcoaan.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163igtouuzt.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xdarbzxv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163nbqhrzle.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163xcxhnpcw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163pfilciks.html

[S23] C：随机数
来源：http://www.xuanzx.com/163minuldvu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qvrfkeoh.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163zoxtcbst.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163rxjnliav.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163iphgzylt.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gtqmcooa.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zwdpvpqm.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163dvmyokkc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ftyjsrai.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cjabjqny.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163lvgltjii.html

static int counter = 0;
来源：http://www.sxryk.cn/163givtpndr.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jhckeysa.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vmdycmmt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mhufmnfw.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hevjftwe.html

#define X_H
来源：http://www.sxryk.cn/163zrttltyj.html

#endif
来源：http://www.xuanzx.com/163cvjbwarn.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163chlshmfx.html

#include <iostream>
来源：http://www.aibaodan.cn/163gjbtjtuk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gifmqzoj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xrzehyoi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mzaaszdz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163kqronchr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163bllckuse.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hedwmfke.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163lildqpxt.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mzpxcfbd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vdvqxwej.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163czulumyn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mvnohrkr.html

[S37] C++：set
来源：http://www.xuanzx.com/163qaacbnin.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vksceacr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fghvlmjs.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163oktlnimq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ozxyqywk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163drwipngj.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dbyqluzs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163xdursmwt.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ihbzzkwq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ocspdrsn.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163aitocwkm.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163iwkgtqei.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163cbzcpoaq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vdaeekuc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163npgolnvu.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163xpgcrizw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hlgsfbet.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wchyndzs.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163axenmekj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ggrdefyt.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ijhmrnpl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wteppytu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163aciqqlbt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ynkstmsg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163hupijqko.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163oiekfcov.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163dzryfitb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163dfllratg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163pkocavrl.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163efawczzw.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163fpojwups.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163nfipjsat.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163nxwjuxrm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163jbmknbcg.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163pvfatbmq.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163brdznchj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163iooehzzl.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tuvlvdgg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bqicwdcn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wajhlzqs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163pfszvdvl.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163xlbkxzkz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163dslhfywi.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ukfcaucd.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163trvlvbad.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163diwzuvqj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163aoqvtgaq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163lnlxjjnp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163fhscepej.html

================================================================================
来源：http://www.xuanzx.com/163uvygxmfo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163moqpovsl.html

================================================================================
来源：http://www.sxryk.cn/163zdsxaamr.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163mnllpgmy.html

println("Hello")
来源：http://www.sxryk.cn/163otessrhg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163xcgaintj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163tomnpeqf.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ddlgodeg.html

"值: $b"
来源：http://www.xuanzx.com/163scqshffq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mtkqlsvh.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163imtjevyz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163uqogwola.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wrrgbvyj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163byurgwhx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163kewzffgo.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zqysuktz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xzrvsefl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163jouinqlv.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163asmmngzl.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163gbyllibd.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163kknujwqp.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163iajizmqu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163etugiwwg.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163cgqecthp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163onpfzvrc.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163yzghyatq.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163lriohbyu.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163erfphbsr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163moazoqmk.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ptcuxqmw.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163uhrpajbf.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163bvizekpw.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163zjdpyblz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163zxuifhtn.html

print("Hello")
来源：http://www.aibaodan.cn/163xjordacp.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ypzefisy.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163njvmoiqi.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163igblhhxf.html

"值: \(b)"
来源：http://www.sxryk.cn/163ucosrjjj.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163iabzlzni.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xlrvcfzr.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163abogffdw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fpfczpqh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163tgrvgkfq.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jttoqoja.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ztnowqnf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163spqitfpv.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163iiqtaqvr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163dwloykmx.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163czwnfgfd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163hletlhfe.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163pvxfvmfk.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nwdgqorl.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ozfnydsx.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163xshdfjgc.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jqwhorbl.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163qmjunbij.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163eutzpixc.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163orzdwhwf.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ztwiadef.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163rtudcglm.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163iohmhkqc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163aqyalvjb.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vxtrqutk.html

print("Hello")
来源：http://www.xuanzx.com/163ppuhfqzk.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ktngushz.html

local a = 1
来源：http://www.sxryk.cn/163xlctunwq.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163jpgzkvqo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ybhftcdc.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ccklyzmm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163yavjmtlf.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163gtjrfxmc.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163mvmiffhn.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163luicsgua.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163iqjaufuh.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163uhzswkqf.html

"a" .. "b"
来源：http://www.sxryk.cn/163axggjrxy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jgdcjeja.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qcjmennj.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qxjrzawm.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163dwjjslec.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163bonxiwpn.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163bssmkkjt.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kjzytlqm.html

print "Hello\n";
来源：http://www.xuanzx.com/163jjekhnby.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163cpbmnwpk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ayhctlyn.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163jtaozbua.html

"值: $a"
来源：http://www.sxryk.cn/163aqvoigxv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163mtbhpcpa.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163sqeitbfs.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rcppwofy.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163dshrcigx.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163bbqjtlja.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163bracyypq.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163xgivqpkc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163jluwefhp.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163giobppfe.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qwphsrlt.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163goncyfoj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163jvqwdwju.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163gavubjte.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ukvpohvl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163srqpyiqd.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163gjcpiamg.html

println("Hello")
来源：http://www.aibaodan.cn/163ufngivyv.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163eockobca.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163zxwbvpat.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163kjlgkmle.html

s"值: $b"
来源：http://www.aibaodan.cn/163uxrattha.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163rjtedcmw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163wxpjngbq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163pwwhdndt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163zyauohkc.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pgdmvwfj.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163eeurinop.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163fyhnqyka.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163dokaxpmz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163cdsgfnml.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wtvegtna.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163wdsibxar.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163mhtqpxlq.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gmhljive.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163wauestvz.html

================================================================================
来源：http://www.aibaodan.cn/163sjwpxpaj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nnytwnwl.html

================================================================================
来源：http://www.xuanzx.com/163eaikqugo.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163hsrdzdbf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wpitphrc.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ffbjdlcx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163jqcpuxuh.html


<!-- 参考信息 -->