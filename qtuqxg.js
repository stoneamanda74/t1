外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163mwzcyiiq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163szlxrqto.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163nvnhapfy.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163axtbwcfv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xzbnjtmv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163mkhxibgs.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163byqnfxnq.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163uhilcgpi.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163xbytbahp.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ybrpobea.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163sbkqdiuf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tifxzopo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163nbqqmtai.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163sjpmlxnr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163rqqgwocr.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163huyowxku.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163bbmrabay.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gpueebzl.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163gusbagjh.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163pcyglhhf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163emdhsfnq.html

[R64] 结束进程
来源：http://www.sxryk.cn/163zhjpijtj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163uvzxexna.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163xubcnmgg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bnagsvcp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163jhqvcemy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163szxgsazp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163lmllrceg.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163toqyxaum.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163vyrrdrte.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163xexwkuwo.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qpbvikjc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163scagsifo.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163gihkskag.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163nxpbivmh.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163dqupetic.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163dswtldph.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dkxlgvzi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ullijlmx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mjifxjzv.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163omudfxxj.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163yniwnrih.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163sxwnfekt.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163isdxcifr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163nxqcbdfg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163smnpddmv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ldksemtk.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tajnzoyu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xdfwtejl.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163lrbfemyy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163luziflow.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163enxeblwb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163nsmihlit.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163lcvrckgh.html

time ./run.sh
来源：http://www.xuanzx.com/163dmgagivw.html

================================================================================
来源：http://www.sxryk.cn/163baifqjpy.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163lxoxghup.html

================================================================================
来源：http://www.sxryk.cn/163otbearyo.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163hamqpmcu.html

#include <stdio.h>
来源：http://www.sxryk.cn/163pmmvciiz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wpxvofjz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163gwgoisuc.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163vinzjyvt.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hlwspgig.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hznisqxu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163puaiwfuu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163mtgxhviw.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163fqzuihtx.html

strlen(s)
来源：http://www.sxryk.cn/163omsaakof.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163tqnncgbc.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163qgpmieyl.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163yprtqqxr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mnippkbi.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163rrllvpik.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163zsvazqmg.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163gjinorej.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mtwheppq.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163plavhxwb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163cumjqhyo.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163whfamzfc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ggicgfge.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163cxjlahbe.html

fclose(f);
来源：http://www.xuanzx.com/163pkorxmct.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163yipfnsbr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vmuinjpz.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wlwdcilh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ndeuztfi.html

[S14] C：枚举
来源：http://www.sxryk.cn/163jsxealwc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pjzffdnf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ynsvoisk.html

(double) a / b
来源：http://www.xuanzx.com/163ysdauoax.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163sdvmozst.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163qfordrcr.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nrhqvrvu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vcoziohu.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163uphtshvw.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163soxlbmwe.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163cdcwoafx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163brnlapuy.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163hkdqxhuo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bzzughsw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163pimedyiu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163lnwshxef.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163tlbegzmv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vbqhnmmi.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hnbnzppp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163tzaakgeq.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163gtjwovir.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163zjgxpwpw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163htdpjvhh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163dbqmocmg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ohvkqwuk.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163kpzberux.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ptxiqltj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163vcqbagui.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kiaxhabz.html

static int counter = 0;
来源：http://www.sxryk.cn/163jvdsevsm.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ldtsndyr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163csjefgiy.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163xbncvbky.html

#ifndef X_H
来源：http://www.sxryk.cn/163iwpjctcq.html

#define X_H
来源：http://www.aibaodan.cn/163awrtadxv.html

#endif
来源：http://www.xuanzx.com/163kygoyfjo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163kxxwiejo.html

#include <iostream>
来源：http://www.sxryk.cn/163mffxmczt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wlsxowpj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163llklwqfa.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163gxdnbnob.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163iigctmxz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163rcumyfzs.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rzjbqgzq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163efeznznf.html

[S35] C++：map
来源：http://www.aibaodan.cn/163gvoprwfg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163orqyrbqi.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163euzgqaur.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fkhodpwl.html

[S37] C++：set
来源：http://www.aibaodan.cn/163fzzynxkg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163fhxluprt.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xyeikjpn.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163igbpkcla.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wyqnlber.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163iuiqftxm.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ncxifwmk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163riachsjo.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163jcfebryv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163lqimlyoi.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vzuycbgu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zlqttpmo.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rpppkhzl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lmngebai.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163bpeqftei.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163etqhrlxq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163mamnresr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163aheaspvy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163yyxcgtmg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163xvstaojz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163riyfutgl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163tntcagzt.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163btnalxij.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163smzcount.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ftnowuds.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163wcdhhqcy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ytcbqpix.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mbqvzqci.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163tzejvihb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163awxbtsvx.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163vwbidapl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163svrfifag.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163unydxsnl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163pbrruqcf.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163tgfmrveq.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163tafbjqyz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jcjgwdjp.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ctgenffs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163kbfubslc.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lawwcell.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163jswhdedu.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nsztzyxc.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163astbwtpv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ytgrliak.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163yxbyepad.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163cmpjyaex.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163uslulhjj.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163hnrscrca.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kicxkebx.html

================================================================================
来源：http://www.aibaodan.cn/163ejhubgpz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ozasuteb.html

================================================================================
来源：http://www.xuanzx.com/163sjegdiug.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ypnlxlss.html

println("Hello")
来源：http://www.sxryk.cn/163lygykkil.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ljajwfzs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ucrxaxuu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163zkkbatgg.html

"值: $b"
来源：http://www.xuanzx.com/163xlfcjbab.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163aelblmkv.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xmubsbes.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163clxwvpeo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xalbnfwl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hahctmds.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mepwkbya.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163peeviesr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163pjrxqtdd.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163rmcawgkb.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ohmywkrq.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163sxmhnvdb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hppvfxkj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163xnwepcbo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163prwrsitz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163nqhwvbdy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163yjyqpawj.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163iqtlzeoh.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163nvkgfuzd.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163vppdsslh.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163sosixtgx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163fefgkzdf.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163omhalhhu.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pdoryxtz.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163tzbtaudx.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163hjbblhoi.html

print("Hello")
来源：http://www.xuanzx.com/163vxmibfet.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zjjvtumk.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163uysgazss.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ctowjhpy.html

"值: \(b)"
来源：http://www.xuanzx.com/163ehxcccgc.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163wxuzkmne.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ojlythes.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163emzjlwhk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163jjptzorr.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nznoscfu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163eukznvoc.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xpkjeizg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jzipcnzb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163zabpnevu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ydhfswpl.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163rinjvzgs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163iiwfrzxi.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163xdgsyxwq.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163gsmdpjsl.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mqyebrop.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163pjvyefhw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wyqnmfrb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163rliixzpb.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ryyyyxpf.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163wytodmmn.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163uqdfkrue.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163yxbkgjob.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163qijfalii.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163datbyrhw.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mcicdofk.html

print("Hello")
来源：http://www.sxryk.cn/163ugukxetj.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163hurdxukk.html

local a = 1
来源：http://www.aibaodan.cn/163hrpbxkxd.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dehxinle.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163jsmvhmga.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163smvgkxhd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163fkgnuqzh.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163guwqbzno.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ugnxmrma.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163yjcpfqba.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163hfdyvsua.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zquxtpia.html

"a" .. "b"
来源：http://www.xuanzx.com/163vhqrcrnv.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ypxggrcu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163kbhxhtxj.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qoixfmag.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163sriwqmoc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163okyguagh.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hqloskdc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163jnkfwpgh.html

print "Hello\n";
来源：http://www.aibaodan.cn/163kjsznaan.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163dwzefpig.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163mqlagggy.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163dcpuwvje.html

"值: $a"
来源：http://www.aibaodan.cn/163alvlgmzv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163musrrkxc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nenwpmhj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qbmrsxcg.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163uembkpyd.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163eautggfl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163dewmsgsf.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163outjynpd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163dlszkonk.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163dmemgrvh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163uhutgrto.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163bcuutxyf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163sqjqxbkq.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qxmaswft.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163wicmqzhe.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163wfpgrsaq.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nzeghfsy.html

println("Hello")
来源：http://www.xuanzx.com/163vtmusrbq.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163owtmpoid.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163zogarmvd.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ntihnzxh.html

s"值: $b"
来源：http://www.xuanzx.com/163irhrdxom.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163nnppddjm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163wyxlbmpj.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163aqlvestr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163kdvlwmvi.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163udwcjaat.html


<!-- 参考信息 -->