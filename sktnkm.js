外链999!wailian999！

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163jakmhavy.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ybyrvrtt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ultinvld.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163mtivvxoc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zhdnkmjq.html

[R52] 统计行数
来源：http://www.xuanzx.com/163iqxlqrtz.html

wc -l a.txt
来源：http://www.aibaodan.cn/163mmhmvaod.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gighddad.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163fnlepadw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163npgcdihl.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ieegyymn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tmzgzamx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163cioomwre.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gkznxvif.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163sbivpbuz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163akxkiebo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163uybkbuwg.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ktmkldvm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163wjvojszl.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163eklijqux.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163gjmcxsof.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xyzeaacv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163lidtbxip.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163yjauvkls.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163mxfrpbez.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163drfodzbr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163rnnvcrxy.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163hmwnjkru.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qghqrvgn.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ywerxxih.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jogokwvj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163angxwfeb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bwqmicik.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163tkuwjrha.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163oefoulnw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ixpdorwi.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163hkonutgz.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163edvcicen.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uejmtdkp.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163aasbcbex.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163xtmckqdh.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163dmuaiukp.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163gwrnwknw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ijdaikih.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163yzobpetm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ifeuxjoe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163voetnpts.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163uneodjiu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jlkrtlch.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163qtvpswyu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163paeyrghh.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vpgetogt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163omfuzglg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hlkaddxe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rwuyuokk.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jefsfzux.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163pxgamfrj.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163fbajvwnj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163exrjyqhe.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163kiwqcqkw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163geiprfbi.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163yuayrhvk.html

time ./run.sh
来源：http://www.aibaodan.cn/163pjcsmvdd.html

================================================================================
来源：http://www.aibaodan.cn/163zvhqhvma.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vthcdunv.html

================================================================================
来源：http://www.aibaodan.cn/163vrxbsgzw.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163nslrxszw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ubnqajbd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kyjyyhqb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163jdwzsavt.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163apkqxsdx.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cmhyghif.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163iylinkse.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163uodeinup.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163gxambseg.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163mhkxgbup.html

strlen(s)
来源：http://www.xuanzx.com/163ydhwfhqj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kbvyogfx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163sfillnvx.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ildkrvax.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vnwnpnzm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hfbanjjg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ezekxnmn.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rimhikxb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163npalkwqz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163avzebfzf.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tllzkkkp.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163hnnadqrb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qfbmcryw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163pntagqit.html

fclose(f);
来源：http://www.sxryk.cn/163idpdtuiq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163pabegfcc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163csndqjyn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163imkekbuv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163apoduzta.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zjajidfl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163lwviqlvg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dgsejzvm.html

(double) a / b
来源：http://www.xuanzx.com/163kqmunyyx.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163sjlvbrvw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kxygteux.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mijelnmb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ivmffven.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163gvayhcwu.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163xsglweuz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zkhyhomk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jvuzxcwn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163qptoatkk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rxqoshya.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163eylpurkl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163cieklbsr.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ahlpddyl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zexyoynn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rjobsqed.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163sypqtvam.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163mwqmplql.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163sbkgsare.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ljtoczix.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xbaqbjwt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ynmnwhfe.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163gahdhxqr.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163wphwlsue.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gdqufqrw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dgxyetuj.html

static int counter = 0;
来源：http://www.xuanzx.com/163akndhmia.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zwdzuxxf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163feryfqfn.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163jyjrewcl.html

#ifndef X_H
来源：http://www.xuanzx.com/163ilrrocie.html

#define X_H
来源：http://www.aibaodan.cn/163dulfggpa.html

#endif
来源：http://www.sxryk.cn/163wtsxodxb.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163oejvcqoe.html

#include <iostream>
来源：http://www.aibaodan.cn/163xwadpcfg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163gfkqrhbj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kccqhtko.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163bziybvvl.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163syihqpvr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163bhdzdzqq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jfdlbike.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hzzreojs.html

[S35] C++：map
来源：http://www.aibaodan.cn/163orpmulox.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fhrjtsqi.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163iffywbnf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pyzjwupa.html

[S37] C++：set
来源：http://www.aibaodan.cn/163rijlflxl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rizvacdb.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163duphykeb.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163dtpjbxod.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rffrswqs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163cdztvpjm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163sbgppgma.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zkmmgipw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163adgmftbq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163npcifqav.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163lizhweib.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163cyiykchw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mgycrmkc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tpwccsna.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fmkkwzzl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163msvtgmyh.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zppjmhsa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163xdnsydwz.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163sopqazvs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163oosrkfnn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ffzkrefz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163xvwbvjhk.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163argfxenu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163btfkmbpe.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163zkhyojmu.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163nlgocdra.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163icswewak.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163mhozorlr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xinpwcyt.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163cuwmiqzz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163pepohgyl.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163jspiyetv.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163tvvemkxb.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163uykppjzy.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ymdgrthz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163tsozxgbu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ymnknskz.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xnoulmfe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163dcmbmras.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tjjyybvh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163qrgkkpar.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163itmxylrl.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jyvsahob.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163dibfabtq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lllorlza.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163nppmstie.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zfudhqzp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163sxjzpxly.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163cbeaflxs.html

================================================================================
来源：http://www.xuanzx.com/163bfrlmtjs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hkomzyxh.html

================================================================================
来源：http://www.xuanzx.com/163vunrbhzy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163dryvrckq.html

println("Hello")
来源：http://www.sxryk.cn/163kpkfarjq.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163huqiqitp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cqqobtkd.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163lqlipfkb.html

"值: $b"
来源：http://www.xuanzx.com/163kmeicfdm.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163rermylvz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163xxaduxgp.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163vugnkpjm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ibyuadth.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163rogpmjdb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wghrplwc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163taxaowqr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dbjwruax.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163uxhtnqeb.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163vpzrxeje.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fjllqfjv.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163pvaznmed.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163mzifxpcn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163asukktdx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163lxoysqyu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163xmgeudyt.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163zfwiptyl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163hwirwidn.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163shijkgjr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hntuodnf.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163dnvxopcw.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163gjqqgmrg.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163dciscohj.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ilehanxb.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163fskrjnac.html

print("Hello")
来源：http://www.aibaodan.cn/163azwwtydw.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yymnvflv.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163sebuozrk.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163cqawqkle.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ryxzlytn.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163jvkjmaaa.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163gutnzygb.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163exdgfiqt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163klzjngqc.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163xqbooucw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163onljtutl.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163aljlalmc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163wlvgrdfq.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163stvujkbl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qacrshnh.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163yitibrfy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163hpozwvqo.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163rmyalhkh.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163krpmhclz.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163slmfiylz.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163waqdzetf.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ikmckxdd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163kbxaebtr.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163oladieyg.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163iyhkcuja.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163oysdehxf.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ultmhxja.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163xrqiqxyx.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163dxswlwem.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163bhgkfxfm.html

print("Hello")
来源：http://www.aibaodan.cn/163wxopituf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163eilbiizh.html

local a = 1
来源：http://www.sxryk.cn/163miqzuxto.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163aaouulfp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163oljfxixh.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163hqbthwme.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163iljormzv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163djnqpthv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163akondbnv.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163yqioroiq.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163lghsuxup.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163lazakxxx.html

"a" .. "b"
来源：http://www.xuanzx.com/163zuysnzkp.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163wamleoei.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ydutlcpa.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163yepufddu.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163sgcercoc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ntasvjcb.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163hexogisp.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163kvccujfa.html

print "Hello\n";
来源：http://www.xuanzx.com/163vqsygsfr.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wsrnzgqf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jxtaneoz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163olcwzbgn.html

"值: $a"
来源：http://www.aibaodan.cn/163zirsdchj.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163kwsbylof.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163swbxaopx.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163kugpmafi.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163rvlzgzja.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163nbidcijf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163vkephikp.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163fgwxofju.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163wcrlxfiz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zoyotjgz.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163wlmuzeif.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163oawefovt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ufvtrora.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163bzeorihu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ccqfxkiz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163nbxgrdof.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163llityein.html

println("Hello")
来源：http://www.sxryk.cn/163kecvsfdm.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ghwjoena.html


<!-- 参考信息 -->