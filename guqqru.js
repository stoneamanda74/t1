外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xremsved.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fbufrvio.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163editshts.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163edmmfxbc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cnhdjlsf.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163uxpymkzs.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ozafthxj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163btypitnq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163wkivvpbv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163pewtyomb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163pysfbebi.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163gwhwiidk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163zqpcbpxt.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163yuopkufh.html

wc -l a.txt
来源：http://www.sxryk.cn/163azkgqijj.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jvabpoqi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163fdiamwkd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163odbxswlu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163afocedua.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lbgqdxfw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163reftjpos.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kpxdymtf.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163pshkecrk.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163mcawnktg.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ppsuleil.html

[R58] 下载文件
来源：http://www.xuanzx.com/163roehphbi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163grnwuzyo.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163dhvyillj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163nhcedkmg.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163mkwfrfbm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163bwcesqks.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163cpwfoenw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163dkcllykv.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ntawparg.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163jmurbnnf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163uogwgpwq.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163fsrheyms.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dmrnnjnp.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163xeesdaox.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163varuuyeh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163uqtlybnc.html

[R66] 定时任务
来源：http://www.xuanzx.com/163furjwsck.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163mhntnwdp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163vxubpwaw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163hnhzhcse.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qhvvwxnw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wirmmtmw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hompdjyy.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163txdisild.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ezekyrvp.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163twoofzed.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163trowfxjv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163pzofbnxi.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163iovhcbns.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163hwvqspmh.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xjfncjbl.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163pbkzampo.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163seyqcbbz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163cknfbfho.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163hffyoghe.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163qevazbtm.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163advtsshj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ozqymwhb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163kkrmqzlk.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163pyjzgcwv.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163werybfij.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163lhdhncfj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163siziacpc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163pefpayjz.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163kttilyrm.html

time ./run.sh
来源：http://www.xuanzx.com/163whmbowmk.html

================================================================================
来源：http://www.aibaodan.cn/163qvdchupb.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163oziimwsi.html

================================================================================
来源：http://www.sxryk.cn/163dspeydvw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163askwfrhb.html

#include <stdio.h>
来源：http://www.xuanzx.com/163wbmtkrij.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vpzdkxvp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163fzevbfcj.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zbbvttwx.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163crnxgvdj.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163cuhibdym.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vbxsdrfb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jfwkjkyo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163znqouhwd.html

strlen(s)
来源：http://www.aibaodan.cn/163nxnhvoxn.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163yaabwjpc.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163lnullavb.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163kuhaxbyw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163taredytk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wawtjfiw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163yqwdsgfm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163czhpmltb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163qmestwyk.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mvxjuoes.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163yuoslwdv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163aekdlsrc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163zrqytmpm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163uxjypbda.html

fclose(f);
来源：http://www.aibaodan.cn/163yqkwewvl.html

[S12] C：写文件
来源：http://www.xuanzx.com/163wjpswhcz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163nvubgipv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163nymewvyn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163clpdzjmd.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163kvacxiau.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163afipkdei.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163krvcxkhd.html

(double) a / b
来源：http://www.xuanzx.com/163jjlsscqm.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163frssfcng.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163lrfnjkrw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163gewjlcpe.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163dccusiqv.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lmsgjlmz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163kdtaafjg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163pexzxmqf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163locenyjd.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ewlcmxcp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163eikjitlr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163yswqttew.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163wfpugwqt.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163dmjwrrjq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163txisymkp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163fmshbett.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wzttzssj.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163kahsyhqm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bhmgoghq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163usihtucm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163qeejhxyu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163diacjvvq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163azkcuxyn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163rjqyxqbj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163pohhrdfa.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163tthifyrl.html

static int counter = 0;
来源：http://www.aibaodan.cn/163jdsgrbps.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163lxsogdsf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vfmguixg.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163khgrfftq.html

#ifndef X_H
来源：http://www.aibaodan.cn/163jroifuqc.html

#define X_H
来源：http://www.xuanzx.com/163iladkvtz.html

#endif
来源：http://www.xuanzx.com/163avfnjczs.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163cpktuqnx.html

#include <iostream>
来源：http://www.xuanzx.com/163dipbtekp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163crigashs.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163yfqnunda.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163sfpojnyw.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qxkdetuc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163wwsejlws.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cszjsxcg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ddrlmylb.html

[S35] C++：map
来源：http://www.sxryk.cn/163sxyjmblt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nrfrqauc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163isiqdawb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163smhcwqjd.html

[S37] C++：set
来源：http://www.aibaodan.cn/163mkuinipc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163wuluuwns.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ytzocdru.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tvrrlmxx.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163czhktlzx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wzmhhgaq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qhmnbsmu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163owmcrjtg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163gowmamle.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ibjfrevu.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163leckgpgg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163cagmhnwr.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163uqhgzvws.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hiyiglyy.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hfamxbys.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163slhxjkpu.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gsfshicq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163hiwdsizx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163mjhvizai.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163kyefsvsx.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163uitmgqws.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zhhbigey.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163patoegpj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163tpnjlnag.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163hvfjmzar.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163gjrbkgiz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163tzischiy.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xnqsyfxa.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163fwntcpnt.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hvsvzmry.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ylvyebin.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163nnnfgfid.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qltvlgea.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ahamoory.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uiyywwkn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163dcnmhztf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163mqvfiyoo.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163eleaumeg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163uliijnwe.html

[S56] C++：optional
来源：http://www.sxryk.cn/163nontoevf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163apnukyoj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rzufdjwy.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163azkmebxr.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163trderxyo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163fyrnrqgh.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163qautvqan.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163mzptocdd.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163tgwkbvsr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163otrjwohu.html

================================================================================
来源：http://www.xuanzx.com/163uqkcijea.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ibpfxwdg.html

================================================================================
来源：http://www.aibaodan.cn/163bewnnvhk.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163obnudipu.html

println("Hello")
来源：http://www.xuanzx.com/163ilnhrvup.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163szdlftqr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qyrhmkfh.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163xhpyuklj.html

"值: $b"
来源：http://www.aibaodan.cn/163pvxtnyzo.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163xkqbkktm.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163wdwxqcwy.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ddffxkiz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163uazyfxyb.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163nakqvjhl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vjdbxdji.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163advmgben.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163jxxdqlyu.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qungytua.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163hgdpiguv.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163udhntvjg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mkzcgxuj.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mvihfljb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163nurmqfuk.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163eqvknzqi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163pankowks.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163dnaezieb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163poghsaqi.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163lgiojdvf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wwuzdtje.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vloruxcr.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xvztmfpy.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163cnddcean.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163bwmtatfx.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vzntzsdx.html

print("Hello")
来源：http://www.sxryk.cn/163sofdcmvt.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zumnfjcf.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163hborydag.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163izmbiscv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163yjmgtuvy.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163pdmtkawp.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163rnzfevbg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163fcihihuo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163afedeobk.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ldahxgwb.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163wluleykj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163lzrjuhyu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163qsuympan.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ilxdvdcj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163hxwitkle.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cxmtfqtr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163xinsjtul.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vnzlxjyg.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163voemalxg.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ecqnyxxb.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163krujuuyv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163weyezbot.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xkhyyken.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ogzjmgww.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163dypdjpck.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lpzuqlit.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163smeekije.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163nihqzdhw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ywfjdcmt.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163agkqfxde.html

print("Hello")
来源：http://www.xuanzx.com/163inqojmhw.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163oolxcovi.html

local a = 1
来源：http://www.aibaodan.cn/163iubzgoja.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163xxrzeibs.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163wroomfqs.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163slxkgvsd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163dssiskdb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xhakwaab.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ctwymonj.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163zpnzpbrx.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163tooyiwys.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163mfudwvjz.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ttwwkwai.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163tcaqhcun.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163dsgcozir.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jcozuzvm.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163cfmesxtw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163hxhbmykx.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163cfijkigu.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163jyohyzck.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hhslqnzf.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163oknljwyj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ykwtwiib.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wchquvgy.html

"值: $a"
来源：http://www.sxryk.cn/163tektpesj.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163xaonbrup.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ljkcecjo.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rljbgvjc.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163jhfngvgu.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163eiskuvcv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163natjfmfz.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hymrxqyk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ckuceydk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yilwqero.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163phwdxshp.html


<!-- 参考信息 -->