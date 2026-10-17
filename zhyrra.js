外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hrmhgxvq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dwkjuaov.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kkdalaeh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163fwswdvdl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ovqriqdp.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163swazzmtd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163zilgbvbs.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hseqgnfv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163zuvorzde.html

[R52] 统计行数
来源：http://www.sxryk.cn/163jhptynwm.html

wc -l a.txt
来源：http://www.xuanzx.com/163sdllxsya.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ynifvwvw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163isgjbcvx.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zblbcmcp.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ifxjrszr.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ddatgykg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163aqqoutmo.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163cchcorrp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ixvlzbdq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163jxgurtbz.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vnjvcryd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163eojkkybl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163gsmrnsdb.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wymwlngj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163rerfvosp.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163fuakzmef.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163vekeukbj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163auhpeujd.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163hhtfsbup.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jkmbmbdw.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163bmfzkjcd.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163eteetsfy.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163dmhzvpje.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ocbjjsmn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qgtrarqv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zzxpmamc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163peypojga.html

[R66] 定时任务
来源：http://www.xuanzx.com/163mtmaaygk.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rsakourx.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163aukxezlv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163xswpfeis.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163aeyklubf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163sbksibez.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zfgttcks.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163naimqoxw.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163dccwvfwt.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163juylptza.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mhbyccup.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nnwiznay.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163pyhgxbxe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163cyrigyzo.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ltmabhkj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163udafeszv.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163prrtgvko.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163nvtuqzrq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163axxcyeot.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hnxkcalr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163nwbdwpnm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tbmzqwzj.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163hcjktkex.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wkeqxkrg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163tzqlzjmv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163nneokmnj.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163phdaoyuj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163upoqxlea.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ugkjotly.html

time ./run.sh
来源：http://www.sxryk.cn/163bjceshzy.html

================================================================================
来源：http://www.sxryk.cn/163yajaqqiy.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hykrbhhz.html

================================================================================
来源：http://www.xuanzx.com/163mqzljupw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163tptaljea.html

#include <stdio.h>
来源：http://www.xuanzx.com/163lalmupyb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163xtkpwxls.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qfnoukil.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163zegtauoa.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163nopbyenk.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163nlzjsgxp.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163yrcagikb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pmnjzfyy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163dvgwrbbf.html

strlen(s)
来源：http://www.sxryk.cn/163qesuluwa.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163zngxdvpv.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163julwkyic.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dodgfuej.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163xrsmnawf.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163robuolnf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163vwxxxord.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163igfwuaan.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163pxicffvm.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vetvutjt.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xudpfakd.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163joensqay.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163tgigaucw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163djqzlekc.html

fclose(f);
来源：http://www.sxryk.cn/163jyonecpo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163kkddtlsa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163qavhzzgk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163prhvxeqx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163frsguuof.html

[S14] C：枚举
来源：http://www.xuanzx.com/163lxvncevy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163rzujuhek.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163tkgxlhcn.html

(double) a / b
来源：http://www.sxryk.cn/163fmestvft.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hngvaigy.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163syjybggb.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163mmbwlmrj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163sigmneds.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163motzwpda.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163qkchbvul.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163kmdqgcah.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hpgzynev.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hxxgfdsk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qqaiwpba.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163jyjgebxz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163brhxagcx.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nyipyhcs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163brfhuvkc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ptlbsafa.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qsqssykg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wfxwaygh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vaxqotut.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cmwbevvl.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ztfxacok.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qsvcskhm.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163sarmqzbj.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163eabahpre.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163qcggxagr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gohzcefs.html

static int counter = 0;
来源：http://www.xuanzx.com/163jobcqbmr.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ijqcyqlz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dleijaos.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mmfjrsab.html

#ifndef X_H
来源：http://www.sxryk.cn/163dotkqfdn.html

#define X_H
来源：http://www.sxryk.cn/163hurlhmic.html

#endif
来源：http://www.aibaodan.cn/163hzrwxymd.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163cdnwscvu.html

#include <iostream>
来源：http://www.sxryk.cn/163ldhvvzrd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vghwjxam.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163jfvtlyno.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163cddrcvum.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ioiqzikx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163swpbkgmm.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163htudoacn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163cgybwenu.html

[S35] C++：map
来源：http://www.aibaodan.cn/163oacbuzue.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pqizwytv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tuyhekpt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gnaqpggn.html

[S37] C++：set
来源：http://www.sxryk.cn/163fnyuitan.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163exgwapma.html

[S38] C++：排序
来源：http://www.xuanzx.com/163dlpzegwx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rfyhkcne.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ontirhba.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163qcduexyz.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163phuoijzw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ykifnvow.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163vcapdapq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ynccjqba.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163gmesmjat.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tywojlby.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163vfawmulj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163tlpiqclg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hrosxiif.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163otfpqnni.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163kijiyqsa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163girupnmq.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163hfytdnia.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163gjfpsbpy.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163bnvspbfz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163hfxeypdj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163dlzhmyca.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163tteaijle.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163vonldimu.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163aibxfeqc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ryxueyot.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163azbrplfu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ukgeazin.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163eacmlcgo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hwlvngic.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ujqcnrmu.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163myaxjkjm.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163eyckuwsq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jxziypkj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163droqhobp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ahuxookr.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163whagjkjx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bxplzdfz.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163fhlqwvva.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163urscjejs.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163fnizmekn.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163rewgwqyg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xudkqkaf.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163yciqracp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ajtykixq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gbnjloho.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163iqgqzsez.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163jvrkcizs.html

================================================================================
来源：http://www.sxryk.cn/163poxpkdvi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tstqbwne.html

================================================================================
来源：http://www.aibaodan.cn/163ftmumjvj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xwjcqooh.html

println("Hello")
来源：http://www.aibaodan.cn/163ryzbdnfa.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163oibaqkbs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163hpacnqip.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163mehzamlr.html

"值: $b"
来源：http://www.xuanzx.com/163flsjxhot.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vtzcqrfr.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163nkobauth.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163scteczuh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163duhcovgf.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hrlvgvhn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163etmcerju.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163wjrxjwwe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163mldbmfnl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163dnhldbzi.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163grueuask.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163gqlvfhtl.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163honvfnal.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mzysxonn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163mdttyjfi.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163uczmmhoq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163bxujpcsm.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163kpahhgtf.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163yfrpexrq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163eepqnclw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163tjapbrzi.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163cwvlnfyb.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163yzzovshs.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163cexkkvae.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dguezkcz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163iuzpqujh.html

print("Hello")
来源：http://www.aibaodan.cn/163hsvrvpum.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163yjxmhtuq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163sfnnwxrx.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163rhemtqka.html

"值: \(b)"
来源：http://www.sxryk.cn/163jeljkjrx.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vclwjkuv.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163pegulyws.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163etwullzd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163nnhmtqdb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163wfisddut.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163szmjlhyv.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mzjgndrc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163dhbnoysd.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163lstllbar.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163gaontnwh.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163hfridgux.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ucypvipv.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163cnhqhdhp.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163crrnbyuc.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163fnddvzwf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163gelgtpul.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pnmzmqqw.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163zzeoibzl.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163uizploov.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163weviziqv.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163yfxujyzx.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163dvccznys.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163truxrjax.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163nwziwapu.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163dvvhvqjx.html

print("Hello")
来源：http://www.xuanzx.com/163rwzoblkv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163jseltqzr.html

local a = 1
来源：http://www.aibaodan.cn/163wtcnwazo.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163umddjhiy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163lefrkxeh.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163thyzodfx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mknfggrq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163okhitkhi.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163tdqpfzhy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163usivjnyr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163uxgafbns.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ctmnazpf.html

"a" .. "b"
来源：http://www.xuanzx.com/163llswoaok.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vhyxaosu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163feaiwzvl.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ykleblla.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163rpfprwuh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163cqraevdd.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ctmfufls.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163cdgsiqnc.html

print "Hello\n";
来源：http://www.aibaodan.cn/163nlnimlsg.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163lcirepgv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qbyygexz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163dskerwwc.html

"值: $a"
来源：http://www.aibaodan.cn/163fjewvnug.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ffetpfvw.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qgmpfjjm.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xhckhuro.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163sjgsqvue.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163xcilwcpr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163fbuynifb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163pmayhasg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163okrmpwoa.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163uszlkdey.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163rctlxgqy.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163qnbglxpn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zctlwwpv.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163gjlvkrgm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163qrkxeluq.html


<!-- 参考信息 -->