外链999!wailian999！

df -h;  du -sh *
来源：http://www.xuanzx.com/163reuohkne.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163uvkjzuop.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163txsyfalg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163fhskrijr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kjvzfbnp.html

[R64] 结束进程
来源：http://www.sxryk.cn/163crcaomkb.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jjylmymy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163yfaaggms.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163amwscgzd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163gcwmnoew.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lzjbjdww.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bddlwpun.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163inybrnth.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163uzxnjyxr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ugjhsetr.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lanprlnm.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163iocnuekl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cctwxirg.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163bfrcfmwg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163rgtmybkw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ajjmgmlf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163sdqshhal.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163byozvoyg.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163qvosprit.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lvtoydpz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163mlqmtaao.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ruyqjmua.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163lsadlebd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ggwnfroh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kcnmfkie.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163eeexzsas.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163hmfuhhpl.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163idwtsnbf.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163cdglrptg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ohsbdxdc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wevhrhxq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163rpatxflx.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zucsmjdl.html

time ./run.sh
来源：http://www.xuanzx.com/163ppdxvlqs.html

================================================================================
来源：http://www.sxryk.cn/163zhuktbjs.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ynhacmww.html

================================================================================
来源：http://www.xuanzx.com/163jdfhtqzl.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163idtirapv.html

#include <stdio.h>
来源：http://www.xuanzx.com/163xhxcyprm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gogtzevz.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qmqnxxhq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hyuqtkco.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163icvkihig.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163uaqedbnz.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163duofpwnu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ephuxdmz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163qmxmziml.html

strlen(s)
来源：http://www.aibaodan.cn/163oduowarv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163urvymubd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163bmtumwiz.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163zhugrxuu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163lxugdjio.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163wyygsgos.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tfhlzgwp.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163quthgcpz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163phybvwdo.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ykuipimi.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163pmxegaxk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163qjyiicww.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163fqhaaonw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163gnkesfkn.html

fclose(f);
来源：http://www.xuanzx.com/163wdveygwg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163wuhuxbkl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163xmhdsetj.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163uwknvghh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163qafyrrcx.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gldvyrrh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ryntqbzc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163shddpuas.html

(double) a / b
来源：http://www.aibaodan.cn/163xprxljyx.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163rhdonbsi.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163yztihyfg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163pjynbstq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cttkntad.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kshlvxon.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163rlzeqmme.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fgxmsmck.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wbegyrrw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163cwgjelrf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vsxxgdvc.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163myumnegg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fhxqlkuf.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163bebcyjfu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163gscbyzcq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163aimkcdml.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vpwtaqhc.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vmjvlkhe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ozlserxc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163wlgwcnuv.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hebqlukm.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ielmtkcj.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163krwmuszr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163xxlvetrf.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qglkqzdx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163jxaoskdp.html

static int counter = 0;
来源：http://www.sxryk.cn/163iutdcvql.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ctflxpgs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163yilaylve.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163zuuaddmv.html

#ifndef X_H
来源：http://www.xuanzx.com/163zltjdkdb.html

#define X_H
来源：http://www.xuanzx.com/163fjoehmoz.html

#endif
来源：http://www.sxryk.cn/163mjymdnjf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163uxrlwlor.html

#include <iostream>
来源：http://www.aibaodan.cn/163ihwvrnzu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163mxswzvne.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163fhnvlvdy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mfbpyjfz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163afifydbl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163cggtbkjv.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jkcafhad.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163airpeokc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lkkjlhnp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ahbhxveh.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rtlrhwcr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qtkwdjmr.html

[S37] C++：set
来源：http://www.aibaodan.cn/163uvvjscwe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yxzoatnc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163zpsmzoat.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163jgspiowt.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163wjrvccoy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ghfgwfsw.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163kzahszif.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ffyosocy.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mupyqekr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163eqikxwsa.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vhjqdfyn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163syzmtlsj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mpjteava.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jdcvifqc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163urpgrtqb.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163uthoiomc.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ascedjnk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ozeetewg.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163fitqqskz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163pwibmleu.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163chpvojwf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ihvsllbt.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163krtadqck.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163vnzunoaw.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ugghydnk.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163dauhpurl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ejwmtlql.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163bzthxnud.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163arurztrm.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vtzjvayy.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163envyzkkq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163tntqknfh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qorwrccr.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wnloukpm.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163fvlytlxw.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163yxqyvphd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gknfobpc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gkexmuho.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vnaklqkf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hirrlezb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vnjmxxui.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163riwegpbb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163dkmsvxcu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163rljdmdwf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gdlpmcdw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ssedvlfu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ohoocpgy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163psdijbfz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163xhuylnda.html

================================================================================
来源：http://www.sxryk.cn/163cwqaukgq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hdujibsb.html

================================================================================
来源：http://www.xuanzx.com/163npwwhach.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zughnjus.html

println("Hello")
来源：http://www.xuanzx.com/163briibjep.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163qtbzqirh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163lnkdyfze.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qdskyfwy.html

"值: $b"
来源：http://www.xuanzx.com/163vrerwfgi.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163cxjchsak.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163sefcqlvc.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163xfnnfdzm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zntvwont.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163bpqlfwbe.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163hujoglxg.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ogxirjix.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ihudgkfl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163acuqytwr.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gdjwbwty.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163skcyiflu.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163dwzxwydw.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ijwqsgsx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163hptmzmjm.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163mpuvavpi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tbblbfzv.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163anuzgsqm.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hbvtnqqk.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nzcrbvoc.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163uyidzosd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163uvhbikxv.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vnnqibvl.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163abaaraki.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ffzvvhiu.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ztastgel.html

print("Hello")
来源：http://www.aibaodan.cn/163lygskzqb.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163thlrjtcn.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163avfehkwh.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ulmqhhdg.html

"值: \(b)"
来源：http://www.aibaodan.cn/163yavucmoq.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163wxhbtbqz.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163kduzjfyj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163cqpmphec.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qyfidgkq.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163njtkhykn.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163enklttqw.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163gjxilnof.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163lhgxkezb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163gucrpkdk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163jzjybxzd.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163suycwkwr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163rudttxsk.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163gzwvahqe.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hxqrbxpf.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163rgzwqyis.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163usitsifw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qvdcxivc.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163lsubrxko.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163xafbdkix.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163dvaiazok.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163eqfutqfy.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163qnawjgoa.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ubhfhazt.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163vjvknqgs.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163fvgudfsa.html

print("Hello")
来源：http://www.sxryk.cn/163bobnleln.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kljgtjdk.html

local a = 1
来源：http://www.xuanzx.com/163mkrnuvkn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163otmjlidw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163wmmmvhdt.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163laxtapkf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163uanmcvya.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ofhedkhz.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163dgzvqdny.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163zldjbvaq.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163iaqnldnl.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163wgctabrb.html

"a" .. "b"
来源：http://www.xuanzx.com/163hpivhkhy.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163dewgwkjn.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163houkdwxa.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163futixlqj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ylekhxfh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163nhjyxzve.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gdlrqpxs.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163cixvirqc.html

print "Hello\n";
来源：http://www.xuanzx.com/163brjjpqhh.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hvzhrhgl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163degnnbiv.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163rnwiiuxn.html

"值: $a"
来源：http://www.aibaodan.cn/163fwpjnado.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163vrknxlnu.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qbgjpxpa.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163owqzljcu.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dptzsdbi.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wurzmuhb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163tcexnekh.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ntfaqzfu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163nqbafjbp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163xxjldpbe.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163gsxkexnq.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163xjxvinsu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163cnrrocqn.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163knkznini.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163sgpreaeb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ivdgfqjf.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163zewrhptc.html

println("Hello")
来源：http://www.xuanzx.com/163obioiuot.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163nvqgltnl.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163uqqzsbgb.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163cqyagkjz.html

s"值: $b"
来源：http://www.xuanzx.com/163esdjdnml.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163sarpwrzf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dtmfvrvi.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163danphrst.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163shpnzyzx.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kytylkjp.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163mvnujsax.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163sqbiqzit.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163rcvclbqj.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163omaioisg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163dthwedhb.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163yyeaozhz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163emqdstww.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163xculotol.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163yvlfosjm.html

================================================================================
来源：http://www.aibaodan.cn/163fdecgroq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163weeqoimi.html

================================================================================
来源：http://www.xuanzx.com/163gaigyzdj.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163tdtkvucf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163sbkcxnyh.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pdjpccuz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zzfwpyei.html


<!-- 参考信息 -->