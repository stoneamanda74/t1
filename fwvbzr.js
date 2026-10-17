外链999!wailian999！

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163cnbmgpya.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163moyjyyll.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ukwknydz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163puxopwag.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lykynmpt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163itvepodu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163mxonefuq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163slrvsuku.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163rnlxabex.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163wbvrjjav.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163vvbtrytw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163uhmpgfqu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163qwttdojg.html

[R50] awk 求和
来源：http://www.xuanzx.com/163zfbhjiwv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163vdibxybd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fjosclie.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163yisndhkv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163pjmtbwgx.html

wc -l a.txt
来源：http://www.aibaodan.cn/163yknwfabt.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163axsddywl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163gqivbjtr.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163emmunocm.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163frracjpp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pydzjgfj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163lognfknt.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163fouopfvz.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163bzrkoynk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wgglvnzu.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wxxkfzkc.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rgdekbxf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ngxovsti.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163lwzigmzb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163pomjkhiy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163iakvbmsl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163gbcwewpm.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163iizcpssq.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163lppyliwr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163itkekvfu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bderfgzd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163tkvfgwpc.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ekyazojh.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dlsyqjsr.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163usojtnvv.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163snmndkgk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163fxbkytln.html

[R66] 定时任务
来源：http://www.sxryk.cn/163tixiocjs.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163kgnlanty.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163cjehoqbh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163olhvdlze.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163grlbzdvk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163lwgurbyf.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163flqkpsxz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ilwvypiv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ljjjcvcv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163horjawqt.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hxbjuocb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163lhzwuecv.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ghqikjxi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163yoorbmqh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163cysnvtcp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163efrruboj.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163qedgrgey.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163frsytjwf.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163cekmpggk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163dmwmwuea.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hdidgnos.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163doxgywpd.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163zmyvdjex.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163tvkifxmz.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163fsxbckir.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163aadawihh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fgzzhbly.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163atbmazvg.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163craigrxs.html

time ./run.sh
来源：http://www.sxryk.cn/163fpgrtejo.html

================================================================================
来源：http://www.sxryk.cn/163lafmlnmt.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163znvbjhji.html

================================================================================
来源：http://www.xuanzx.com/163ykfvutbf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163lqusatug.html

#include <stdio.h>
来源：http://www.sxryk.cn/163epqckwkn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163bjecoguz.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163xukdswhe.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163meyvygut.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163lqmrymcg.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gqdixdyl.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163akptnxpy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bnjzanvh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163uoiztrex.html

strlen(s)
来源：http://www.xuanzx.com/163qccefgqw.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163orhslqjy.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163qzfbjnrk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163oolnsvfb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ohvnddum.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163vblkzjiz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rlhpmzph.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163aykinwyh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zmgpoozj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rpddwbks.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163knezfxbp.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163preftvwv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163oulvtbwn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163azhwqjfz.html

fclose(f);
来源：http://www.sxryk.cn/163elnspudq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163jwophhkp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tnlicoid.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163otpwcsnm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163csebdbps.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ppmajpag.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163umaaedjz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163qpcrvvre.html

(double) a / b
来源：http://www.aibaodan.cn/163cvrpfcji.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163guwixckm.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ubohksew.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163alwmdhll.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163oegdtesr.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qffvnfkc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dbnnxval.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163pupxuzoj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ojcpfhzl.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163jiliowhv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ljzkincw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163lgmewlzb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163cmyzpyfw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163qlifffix.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ddskzsfd.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163qivnvpoe.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nemjmayj.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ykjhzzeb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163kcslgoov.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163gtffcxpc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163lfygjovj.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163bkfbgdlv.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163huyuujjj.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163uluiebta.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163cuntlntn.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163mpipyifh.html

static int counter = 0;
来源：http://www.sxryk.cn/163wjytvnlz.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163tbqivdbo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163gosihhiu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zorynwsm.html

#ifndef X_H
来源：http://www.xuanzx.com/163cdcbgkjy.html

#define X_H
来源：http://www.xuanzx.com/163pfhlxjwg.html

#endif
来源：http://www.sxryk.cn/163gvrvoyat.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163bssdublq.html

#include <iostream>
来源：http://www.aibaodan.cn/163iradpwwb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163oppmtfsu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xnplbyml.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163eruuhyso.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163fvhtmnec.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163issefpqx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163xjjqndqb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hcfzdisl.html

[S35] C++：map
来源：http://www.sxryk.cn/163vjfxozvv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jdkxrusr.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163wzasmjus.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bnjzolif.html

[S37] C++：set
来源：http://www.aibaodan.cn/163qbhooebo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163vrddnsoo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163nwbkvgti.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vdczmmwf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163yuocwwtm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163scfetfsh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163nvwcuwfr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163jxnxzagj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163kcmyodly.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163miaaxslp.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163rnevjnnx.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163pfouyvwk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163irzocxci.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163sctvidko.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qxbosqjt.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qijkpufw.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ckceckfk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163bmdhksbo.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163azwbasib.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163cxaatuvl.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163yliblwcd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163vnkxtzmb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163anvwcrpm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ltfktkka.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163xujfuwge.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163finemnkk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xyneneua.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qcztanda.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163aumjixez.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163opectvby.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163clbwufep.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163gekgooso.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gajwvljy.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ndrvlniq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163cidvuspz.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163prhuurzz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163vmksmrhr.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163codrufqp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163svbkqbqt.html

[S56] C++：optional
来源：http://www.sxryk.cn/163xqpfjhqe.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163svmsouzw.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163cnvwbgpl.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163mqtpmzip.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xozjydoh.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163njxiqjbt.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jngdqrib.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163iqkucgfs.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163uldzzbhc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ocqwiywb.html

================================================================================
来源：http://www.xuanzx.com/163wyvatbgz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163onadmgan.html

================================================================================
来源：http://www.xuanzx.com/163jtkvtcdx.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163hnezcdvg.html

println("Hello")
来源：http://www.aibaodan.cn/163kjocjuti.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163kcwsmrxv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rpsyugwo.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jqiauvyr.html

"值: $b"
来源：http://www.aibaodan.cn/163cscrrnxb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163cbjiwilx.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163twearbqo.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163qtnylwlv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kvnnkbwb.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163vncttjul.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163mcudpkgx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163lgsgaeqg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163nakawlcm.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163pxjehfbf.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163gbbpljil.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163kpsbelch.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tlmjyyif.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163eacvxqyr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163znqjhlxz.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163nzkbooxg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163xwsowfcs.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ukejfjdo.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jeajbgjf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163kzowfzwh.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ssrnvyce.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163mrrtzozy.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163icyqvzcq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163isiousae.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wlsfznnj.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lnvnewkf.html

print("Hello")
来源：http://www.xuanzx.com/163qurqwsjh.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163lklhboll.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163nqmjugru.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dkmnyxzx.html

"值: \(b)"
来源：http://www.xuanzx.com/163cwadgmtg.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zcsuppok.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163yobkxuvz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163kntihbdl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163wirvgobr.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163zwdyfzek.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163psprxthp.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mzlppgdt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jzdpblmw.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163wnxwdzyb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ywmnpops.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163iahocdhh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163swsvuaev.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163paqogoqf.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163jyjaqhyh.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zqhwgzto.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163nnqwgtvx.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163tabixkzl.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xoaduphf.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163skcmlftf.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163yvbfbudc.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xufzixul.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163uszuphvr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163csbwmhkl.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163xhsvmqsd.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nbztiiwu.html

print("Hello")
来源：http://www.xuanzx.com/163gbnxldxw.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163wwtgdsyr.html

local a = 1
来源：http://www.aibaodan.cn/163oilmigoh.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xycnpcky.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vfxvsgkq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nduewmuv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vcdwbatt.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163dknzdspe.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163laxiprds.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163lxxqkoxu.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163splpinha.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ukkxovzi.html

"a" .. "b"
来源：http://www.aibaodan.cn/163rhqztgzv.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jpjynnlx.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163dvvhyifk.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163jrwmmjkc.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163xxbuuvxc.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ugonziad.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hdifbzed.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163aytdedrc.html

print "Hello\n";
来源：http://www.xuanzx.com/163dgsxliru.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163wdsjaika.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163pabofzzf.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163jaymtbga.html

"值: $a"
来源：http://www.aibaodan.cn/163ztjwztsy.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163cgjdzhrl.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qyhdgaqi.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163iuimozkv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ttssgvzt.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163yerncqws.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163mbecwubz.html


<!-- 参考信息 -->