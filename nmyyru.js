外链999!wailian999！

df -h;  du -sh *
来源：http://www.xuanzx.com/163sxhehkcg.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ilkpryqy.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vhfkxvpw.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163byiwvptd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163yxeuwsfl.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rewpmskz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163rxangbjg.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163heudiutt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163djdmyqwx.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163eylsdepv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fatsitgp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163tmitwguy.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ewrjjech.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163vlpyssbt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163uxwrbbsn.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163sqkislcx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163tpmjmsqi.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ykaqnery.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163dofkqdjl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163xjpzjhwk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163oolxvldz.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163enizvunu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163hcqnmwna.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ffabsvrc.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zxizskuo.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163nungjkwy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163zsmwuxnu.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ufgglgwr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163iwocnyar.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163sdfntijc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jlgmnnks.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163azqptvdq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gfkqhcwe.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163isdgewwh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wzmqlsmt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163poycpbqf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163siqtggps.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163nzilwacv.html

time ./run.sh
来源：http://www.aibaodan.cn/163ualkwnhk.html

================================================================================
来源：http://www.sxryk.cn/163mjkgfdih.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163obddxbbr.html

================================================================================
来源：http://www.aibaodan.cn/163qgcmbqmc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163kcpfdbze.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kgprcebo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163msopojtm.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163lncekolv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vkgbdrst.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163gpctkijb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163niayxkvz.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163voxjaupi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ybrtygpr.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163hgfakuub.html

strlen(s)
来源：http://www.sxryk.cn/163vgpmupnw.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163elblcrne.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163izrilozh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vpvdfeya.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xghlandh.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163uqfuhyhi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163kahcvlwf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qfcmgjpt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pxthmjwq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163vylcmoty.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zhuupbrv.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163divtkqab.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ryxmeydf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vdprusfz.html

fclose(f);
来源：http://www.xuanzx.com/163mffsqfod.html

[S12] C：写文件
来源：http://www.sxryk.cn/163rxkmqwot.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163miahobit.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163oyiaoerm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163sglptjgw.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lfmxqfyv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163rsictfku.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163vwczrqcq.html

(double) a / b
来源：http://www.aibaodan.cn/163bjrkkbik.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163frykclcg.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jzyczeqw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ktoylqbl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bqxtkqch.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163jwhbvxnl.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163junquwmt.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163aviqrcrz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ubgbnvwq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163aiaxlisg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fvcfcsze.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163elrvjybl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ytvpbdeb.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163loxfkqgj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ubnyellj.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xabqqjqn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163sijvfxme.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163lxcimjgo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163gtykwfze.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163tattvaum.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163furmbgmt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ekwrappq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163eigivqos.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163oocecavt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ocoqjpdk.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kflxragq.html

static int counter = 0;
来源：http://www.xuanzx.com/163yrrahyfg.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rrwhsyfi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163mhmhehqf.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163qjauolfs.html

#ifndef X_H
来源：http://www.sxryk.cn/163ywhlskom.html

#define X_H
来源：http://www.xuanzx.com/163ulhggurc.html

#endif
来源：http://www.sxryk.cn/163qplusovl.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ujgaanet.html

#include <iostream>
来源：http://www.aibaodan.cn/163amofmzik.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nlenvhtv.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163rbqjyqho.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mlqubmzm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163uiqvtznx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nrrsudkq.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163trvsfcxl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vcmlxnxt.html

[S35] C++：map
来源：http://www.sxryk.cn/163wydwxsec.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163eelmnkqc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dgcanphu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hqydsjgi.html

[S37] C++：set
来源：http://www.sxryk.cn/163gkfeqqjs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qwjbjwux.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163pjfmgckw.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163iasjheey.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163uibcaqbe.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ezvuhcqw.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zvrrqonw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fchpneir.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163sjowjsbt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163nlnpzmuo.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163uzktcdsb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pnfoqfcx.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jgxfwnnq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163bqhnpgjx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163hcjvlzmk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ipyjuqib.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hpqmrkwe.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163tpshwlpf.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163oosbhtzg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xlahbdqw.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vvzjseku.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ficuqwoe.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163yfpbogwo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ofibecxs.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163abofzmyh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163xnrmdfaw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163dyvlpzoq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163rmdhfdiv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jaziqpgm.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163diaffuqq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163farepggd.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ghvwvmzh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zzknfact.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ueniuhfv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163xitxrhfu.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hvogccas.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163sjdcledn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163baguzecn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ovdasfpl.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qnunmpet.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ceemibfn.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zcvqnbqx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163enpfrozu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163bdpvecpw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pvynpzbs.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163zzcrjfai.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163dvraqyqi.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163uapsgibg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163oxmndpno.html

================================================================================
来源：http://www.aibaodan.cn/163xxclitfd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dkdetfof.html

================================================================================
来源：http://www.aibaodan.cn/163dtuomajp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163tbpzqtni.html

println("Hello")
来源：http://www.sxryk.cn/163xkgtbcym.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163oeplazub.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ttxewaby.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fsjccjhq.html

"值: $b"
来源：http://www.sxryk.cn/163kbjvyicf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163btuymafr.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ofkklwbq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jkyxostk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fxyprkcc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163uupkxqzy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163eprlgzdh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ailxvabh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163lwmragbg.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163uplccbfu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163lqesgmsg.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wrsdbctl.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ytvwritv.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163rlujdaab.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rzjeacwv.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fhjgfpcj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kicunmgf.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163iswzzwrf.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163dpkdokvk.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163nmrrcbkr.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xgasuvsy.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163qettpjlt.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163casgtybj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163pghmrfdg.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163diedzqjl.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vtzfymdr.html

print("Hello")
来源：http://www.sxryk.cn/163hrxslxog.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163icarbhjs.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163fllcsbsf.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163obyesxiz.html

"值: \(b)"
来源：http://www.sxryk.cn/163puetanqa.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163gpbzprgc.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nuzrpzex.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hdyfxage.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163cfgztquz.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mturprcf.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163iffmxrmb.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163escgbkwr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163yruoozdm.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163tzwhpqjr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163outvhfds.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xzpqrxdj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163nhziqgre.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163esnyxnfs.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163usrhzngv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163oiazgxjk.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163airopjny.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nbilthdr.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163yopkveas.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163erbmnhgz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163qxdqunka.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163zfcxylpz.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163mqnqzdji.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163gcxxosdp.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hfhcigcd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163gnkvplrj.html

print("Hello")
来源：http://www.aibaodan.cn/163ehzalycz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rtyunrjc.html

local a = 1
来源：http://www.aibaodan.cn/163lwmgvzde.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163cqjlwwgh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163pwvwxehq.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163atqewxhh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163htsdovkz.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163bthtmscn.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163yevmqrvx.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163zzlchxzp.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163nshnezpt.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163jhhaucpa.html

"a" .. "b"
来源：http://www.sxryk.cn/163tuzawhqm.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jcebleza.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163gsevdllo.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ptojwaea.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163udrykrst.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ubbabkbz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163cjjdxqcu.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ajdhdfpm.html

print "Hello\n";
来源：http://www.xuanzx.com/163gpfanymw.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163oiysbcnr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163iexfbter.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163virmfcfp.html

"值: $a"
来源：http://www.aibaodan.cn/163ilcqjdqi.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163xxffvbkr.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163afeandsy.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163fuwfihed.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163tmnidjgj.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163vlgzykmf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163lfdkgiwo.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qljmzbwi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163bxxkbsoj.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163btsusyba.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163etzixpeg.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163szmlyxwq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bqlxyuua.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163hugfbzuu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163chekhcjb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ukpireuu.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ypiisbhk.html

println("Hello")
来源：http://www.aibaodan.cn/163opufvgux.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vyykwigi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163wtivraxs.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163rfwnztfw.html

s"值: $b"
来源：http://www.xuanzx.com/163flvinqjz.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163uevyuoni.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163bmuddsnp.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163gnzbmeqy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tuoopxwm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163dsqltnew.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163uesslclo.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163jyhmfztf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163hhmnqhvi.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163wtyyrymv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163vfdromis.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kkcmtorv.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jfapoqix.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163fepjugfv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ebnseahh.html

================================================================================
来源：http://www.sxryk.cn/163hfijfakj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gmvkqrlu.html

================================================================================
来源：http://www.aibaodan.cn/163otnupfyl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163gmtbwdmc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163knbwxbii.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163tkletdyj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163tuuolwxn.html


<!-- 参考信息 -->