外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kjwpkxay.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163eysmoolm.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163btyaetar.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lgmswotr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163dqzkamcg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163oyjabnlh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qbfqrxsc.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qlekswtp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ofeezdkv.html

[R58] 下载文件
来源：http://www.xuanzx.com/163pggrnttg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163zytrzlrz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163lwcciqrr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163qhbmmgrv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xvipqpco.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163rymsbhmw.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zfhhhrru.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qpscmtqr.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kfjojgrt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ltawknbu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163pjctrvgd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163fzccfgov.html

[R64] 结束进程
来源：http://www.sxryk.cn/163fnunyfvh.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ndxfveuo.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ukuvnuoh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xjkglyqq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163pqboqkpk.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xscyytma.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163kplfhkwv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jtqduzjr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163odlvwqro.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ehtgjnoa.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163skyvjxws.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nisgukkh.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163awvurvbm.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163udcicazt.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mzypmony.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163cvymbsfy.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xfbrmuvc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ailmxbre.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163bsjxhmtu.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zftzhbts.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163clbwpglm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xfpqichp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cidoledh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163grjnhnus.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163aofnwkas.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fowxvlab.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mviortwt.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163tzstdtoh.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163vrqgxhdi.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163pveomdto.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163nbgejnqr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163uwuefyih.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163zziraxuv.html

time ./run.sh
来源：http://www.xuanzx.com/163lajeiuty.html

================================================================================
来源：http://www.sxryk.cn/163svukhexw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163dybjihnu.html

================================================================================
来源：http://www.sxryk.cn/163hmrvtdta.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163gfbqsftd.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kphfiwuc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163fndscqfd.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ykxnibkh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163qzsuqqiu.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163nhjbtvgr.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163njdfbbcg.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163uvaacwvv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jmewxwnm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163aosepvlf.html

strlen(s)
来源：http://www.sxryk.cn/163azdvvyos.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163aicxfhwe.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163mfrhlzvk.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163tbwniwky.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gktkijtg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163zrbqwnzt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163kkmzfved.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163jdpmsdmm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163gkqibfyt.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163soxjsrqc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163wajhdaoa.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163mzfbwquu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163tbnfggcx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jrevqxzg.html

fclose(f);
来源：http://www.xuanzx.com/163qgsyczjj.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ocnjmwnm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163dgqvxtjy.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163mqaeaymd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163yxiaepsw.html

[S14] C：枚举
来源：http://www.xuanzx.com/163brezlwhv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163icnreaar.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ffbynvns.html

(double) a / b
来源：http://www.sxryk.cn/163vpkdifty.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163snterrpf.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jcgugkyq.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163eccpmzin.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ebneimen.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zciulzfk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163djtzsldw.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nllukblb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163uqmtdcdh.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163rscxtuji.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163txszcxuh.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163iwsezwle.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vkhghbnp.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163noosidyf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qwbymxcc.html

[S23] C：随机数
来源：http://www.sxryk.cn/163svdgbget.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ilzfljwi.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163idbkpdyg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163uannnlpx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cepbzfbz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wgkksdvg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163kgorfjak.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163talbngju.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ukcbcukq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zrafvxar.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163fgpmkjjo.html

static int counter = 0;
来源：http://www.sxryk.cn/163qceeniet.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163vpjyjkdb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163aicvfacq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163scabwnxs.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xgtolaxz.html

#define X_H
来源：http://www.aibaodan.cn/163erzpotnh.html

#endif
来源：http://www.aibaodan.cn/163xhdodyoi.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163bomnwrzi.html

#include <iostream>
来源：http://www.sxryk.cn/163zjyinjvq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tzrkgmbv.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163jdriszum.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163dojyjcsk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163lnlyjlzy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163luqkkdom.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163nkmbumxw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163lvcpfien.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ktzehcdc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hykkyadt.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dspzzvna.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rpkcrnff.html

[S37] C++：set
来源：http://www.xuanzx.com/163svljgmii.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163uhoolfbv.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ywzsjrgf.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xyoirjnn.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ziohdkfw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163pxofmqvx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lfndhccy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ifhioesu.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163jgogybte.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163oltbrmnp.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163msxzqbkv.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163nczqjryz.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163cyelthhl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163nosjvqaq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163stutepcs.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163cirlpafg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163jqccntpc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ujqqiyix.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163chukeper.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163dxivazkn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163gebpbhzb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kbctvilo.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fcyjzfts.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mspirapu.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163xrzurmjh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163avhamxyc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163hmapezjq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163kxxggmzx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163iiombjhg.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rlcwtflc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ulngxczn.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163unjggdda.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ixdqktlp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163croghbqm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163baztnway.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163twcfzbcg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163flhlldqz.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163evltjeim.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163thvjjqky.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ssgipmnd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163phrmsqck.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163pcvlywne.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163lnbnvhoo.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163oyoizxza.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163wagvjapv.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wpzpydpi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163kmuigyqh.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163lqztkbne.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ohceaprv.html

================================================================================
来源：http://www.aibaodan.cn/163ddkdujgu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163xwppqszx.html

================================================================================
来源：http://www.sxryk.cn/163gjpyaqes.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163cteipwhw.html

println("Hello")
来源：http://www.aibaodan.cn/163egyrbmhk.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163witxbkvz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dyzotwyi.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163irzjbrkr.html

"值: $b"
来源：http://www.sxryk.cn/163dczpxrly.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163djbpfomy.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163hxafdell.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bxudvkaw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163orrfhaam.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163kgkbzypz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163uelvprtv.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163attiswke.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hleitkyz.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163houlnzlr.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163nwfakqfy.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cmhsbifr.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cmizkrhw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163uxdsiaqs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163gczzwjkz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163obilztqy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vcohlehd.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zsfuysuj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nmxbunqg.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ehhhriak.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163eoewqbbo.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qpiavldv.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163esqyxhqc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xaheixxo.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ydqhspjn.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ybhnvsdt.html

print("Hello")
来源：http://www.xuanzx.com/163wzfimgrc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163hwcyngus.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163hcpgyits.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163qpqetsjj.html

"值: \(b)"
来源：http://www.xuanzx.com/163lakcdtpy.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xxmnhaaa.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zbkjxjlh.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163okdojtoo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163tsndnofe.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163yugnikek.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163aafxrslv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163mrcoejvm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163mrwlsnrn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163urnequpg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163vauicyql.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163llzbvpqb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163mlywobkd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uujsntvm.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rrprrbcx.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163kpfyfdph.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163uytoawvl.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163dsihqsur.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163iigghfng.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163dflymilg.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163pvbyeypb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163mtpqpnmv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163epytydvl.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163sjxtkkzh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163auhtjyzl.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163endaeulc.html

print("Hello")
来源：http://www.xuanzx.com/163kqbstmoy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163kmhdyqyu.html

local a = 1
来源：http://www.aibaodan.cn/163vojqgtfu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163rwjgzsnn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163gmjkrrqx.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163hdlaflgs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163jkhgutqb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163eqkuktcv.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163urllznhm.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163xiwkmsqd.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163hnyjalwl.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163upvibnqi.html

"a" .. "b"
来源：http://www.sxryk.cn/163jzcqwhgp.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ujtdblff.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163vsnhpicq.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ukydaylr.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163mltsotwv.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163emyzptea.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163pwazonmz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xnftkurg.html

print "Hello\n";
来源：http://www.xuanzx.com/163xdsceokl.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163woxqqyht.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ecwpykyk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163bmztcgmk.html

"值: $a"
来源：http://www.sxryk.cn/163njwgdpia.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zrkpebem.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163fkoemide.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163vrhxwula.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163mvemclyh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163lmhumkto.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163zzkjbqav.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163gbfwjzmh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xwbmvpkv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163otyxcbyu.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163lwmljkyg.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163huzqvsgn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zobjlnvb.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qnnaiiqc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ultvlnam.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163dvxnjymy.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163fipenwas.html

println("Hello")
来源：http://www.aibaodan.cn/163lulvxidp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163smykhxou.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qraifpeo.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163vyfbmrtg.html

s"值: $b"
来源：http://www.xuanzx.com/163yunclwsj.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163lkhrqdmg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163dnuvkpzz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163oyeqjxlz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163tsveotiw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163tmtwedqi.html


<!-- 参考信息 -->