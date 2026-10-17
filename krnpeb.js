外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mcnihiot.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163sjezvimy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163mqusoybm.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163weuxxzbi.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163fyesxuar.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wllegled.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jgppyzsd.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163qzbbvglr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163djbvkipe.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ravejhcu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163gvenbcxs.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vgmwtblc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163gjyqghtd.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jwmmmljq.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ndmduysa.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163iqqbhhry.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163vopldzyt.html

[R64] 结束进程
来源：http://www.xuanzx.com/163uechsijy.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ylpszjjg.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163sranszki.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163skogscqq.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163hxgmieqd.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hdxzkyru.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163hnkhvjwr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163cfjinhwe.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163gybthbof.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ovzsksge.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163vibxkjyy.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163sixhutpj.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ovyoqmdp.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163geiyyvze.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163cjmoerix.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qffogsxw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163iictkbzv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jpbxaxaf.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163przcuhmc.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163xcrknorl.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163sdsajsdc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163rnmvweiu.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163glwavmlu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163xjgqsmmh.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163zjywtniy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163iohjxmwl.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163qdptnzyp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ghdqswcp.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ifdcnlks.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163dsgmlgmx.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163tzcpjaaj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dymrtfsh.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pahvedyb.html

time ./run.sh
来源：http://www.xuanzx.com/163vpwimttu.html

================================================================================
来源：http://www.sxryk.cn/163vvbmymwb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163oulbgqsd.html

================================================================================
来源：http://www.aibaodan.cn/163zipqfhpj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wasckjwl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hmenwwiy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ujobopvm.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163iwcexqmg.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yklvovcr.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163znrkvrzr.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ruajvmta.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xklrextl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163psixwtaq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163tedbvmmq.html

strlen(s)
来源：http://www.xuanzx.com/163sodjrbaq.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163tfrfooqo.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163sasdvyqr.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ufdrsilk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jygsnrga.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kcslfvun.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163admgxdah.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ewlfphik.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xgncifms.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mibbmxeu.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163pvslnspp.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jzvlrynz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163juprfgxi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163llasvauq.html

fclose(f);
来源：http://www.sxryk.cn/163glwfixaz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163fmxatsxn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163bdhxrsqi.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163hzwzksem.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163njkcjzrr.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163itlhobbl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163eudsevgw.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163pjebvpso.html

(double) a / b
来源：http://www.aibaodan.cn/163rqyqgyeu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163loclkcal.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kupygbfa.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jqorrozq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jevpmtxl.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lsslwgdk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163trttpzza.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163pcgjxqjz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163itcyfwqg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163updrbtpd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bcegwsva.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ovrpvwhc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163yjtewhnz.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ssygjmpd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ufslxovl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qpwhhiss.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163qbmyfeys.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wvbubarh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163wsynwdpc.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tfotfccr.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163psoyehru.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163acdfwqxe.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qnvypqby.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163xrycevsu.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163gebbgmpc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cdcktawa.html

static int counter = 0;
来源：http://www.aibaodan.cn/163kuoiuknt.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163pjvanplj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mhlhmwsa.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rxkkgoww.html

#ifndef X_H
来源：http://www.sxryk.cn/163pizuiwdt.html

#define X_H
来源：http://www.sxryk.cn/163inrxwwkt.html

#endif
来源：http://www.aibaodan.cn/163xxfdysjx.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qbpxkzry.html

#include <iostream>
来源：http://www.sxryk.cn/163koolvmaf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163pcgfciym.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163eigebkdb.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163dmudayvu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ghvchrfh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163egxbbjys.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zphnmdcv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gglskbmc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163gzcomyqc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tfqebikh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dwkraert.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163udmvdfhs.html

[S37] C++：set
来源：http://www.sxryk.cn/163neuxczil.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163sotmntxi.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163tzvdjqcw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163nmtvuzrn.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163emdhxnss.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163sjobwjqh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tmuppzyv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qftkrbds.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mzmsohbz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fepfmdmu.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163fhycjoys.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163grnqvfyu.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163daifszqt.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163eszfdrlr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wvxxamfd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163pywmpafp.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163psphewzu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163tfkumrhi.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vzmfknek.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163eiinnbmh.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jptzudlb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pjevlkiy.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nabjirnv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163albbvwwc.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ecxbldwd.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163dbfnzcwj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163bfotdfjo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163madejded.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163cpqygpja.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ykeflelb.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163tiyaqqsx.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ryjxiufw.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fxddmhni.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163wqudjbhd.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ipxqnsof.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163jzijiodb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163efarnddy.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163gfpezmsf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nzjxmjwc.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tttdcevl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163imptnard.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bbovokei.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jfwnxqis.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163fotbjzjk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vgehnizr.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ibynoqpq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xmymecip.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xevdvkpr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ssnahupp.html

================================================================================
来源：http://www.sxryk.cn/163yhmlhgxg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mmiamzfj.html

================================================================================
来源：http://www.xuanzx.com/163ezjcmcla.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163vlayjpmi.html

println("Hello")
来源：http://www.aibaodan.cn/163titrvlky.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163dojakint.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163pjtvnsnk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wxfgliqj.html

"值: $b"
来源：http://www.sxryk.cn/163axnnkwhf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mgnieezs.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163zyqoaaqq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163soexagjz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163pzvzanpm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163bpfrzdui.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163hbppipxo.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163cpvllekm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163icoxozok.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lruafeun.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163clsvnnof.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rvcgkjuz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pbugdeew.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163argfsevs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163rnxbbjav.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jsueuumx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163sdkaancv.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163swpykuat.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163awnkkzfe.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163zsrjpmhh.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xmsihhwr.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fehyipgt.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163aapuovhx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ljiqqfhh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163rncqovke.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163hfhgsnnf.html

print("Hello")
来源：http://www.sxryk.cn/163jpvnuxoa.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bppgdind.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163tpnfpkuu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163cbwoanld.html

"值: \(b)"
来源：http://www.xuanzx.com/163yzgbpflp.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163vfyqjcos.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163zkjuwzwk.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163hbxlblna.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163fzettxvr.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163izggcpqg.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bulrdhqb.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163nlmzsfls.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163utebksos.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wsrmhnvi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163zzzpeprx.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163lqploulb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163yhiyoeon.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163pyuisjve.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rzislqkp.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163wwnmokil.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163scowbumc.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fvoezsuf.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vwboxlkk.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163uqqfbjob.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163lkeiyben.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163smbnclti.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163jjjnioza.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163wvenzyyj.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qdfveqmg.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163zypcgmqo.html

print("Hello")
来源：http://www.aibaodan.cn/163guncitec.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163skwyjeze.html

local a = 1
来源：http://www.aibaodan.cn/163pchflsit.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163lbdlacqz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rewzotxk.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163arxdhyln.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163umyektjy.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163lfiocqeo.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163hhxfsvxy.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163qrcniooh.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163zctdgbgt.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163bljlovjj.html

"a" .. "b"
来源：http://www.xuanzx.com/163cmdxwsdc.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163epmrokxo.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163akwrgzgs.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ntqokeco.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163tdefhxit.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163btmkrhcu.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163bbeiuibj.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163xhrbvgbp.html

print "Hello\n";
来源：http://www.sxryk.cn/163zgbahnat.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163apimsfhf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163gwvltmie.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163qeblucik.html

"值: $a"
来源：http://www.xuanzx.com/163azuravvp.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163lxhobrzb.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163oosymqql.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163inmbjrny.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zhilzdov.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ybvfsiqe.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wuqwrvwe.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163zgjncvze.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hcpbanpl.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163fuoytdam.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xumxwuwl.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163fnlhnicu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ijkybwor.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163gcbgqdnz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163hamvlrpr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163xcktlhms.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xusdqviz.html

println("Hello")
来源：http://www.xuanzx.com/163xgsguwbg.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163gxczcsxl.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163iswvffpo.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ubyeiqhy.html

s"值: $b"
来源：http://www.sxryk.cn/163klqmsbdf.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163hgiqbfid.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163fzodtgeq.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163lkcwhqno.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163bmiqlbvc.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ammyuwdj.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163muzihtgb.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ijutcxvs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163uecjypgv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163yziaydye.html


<!-- 参考信息 -->