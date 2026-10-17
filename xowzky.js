外链999!wailian999！

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163tganxjhs.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hdlwfsrp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163hfcjeqtx.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163tmtriizz.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163qtrkkupo.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163doxofwdk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163uyebktas.html

[R45] 批量删除
来源：http://www.sxryk.cn/163kelkuzst.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163punhvyof.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163sbxuhrfw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ssfkyozr.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163xqcpvsoo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163fzryjtlz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163liiuxcan.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163tbaijjvq.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163jzzhwzhk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163aifcyxib.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163kmusegkt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163wrhacybj.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163qchqjsjo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hwiqklew.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xncqddtp.html

wc -l a.txt
来源：http://www.xuanzx.com/163txaqcnzt.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vufohumb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163whbdhumz.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163qnevuygk.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163khyidkjl.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ttoeflrg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163venmtgjm.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163gfsbyppv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163cguomcxm.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163kktnqolg.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163btylnmpp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qddovysw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163acunnibz.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163vjfbonpp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163uodbnvmi.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ytpgpmmd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163uktzkxgx.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hheullvy.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163chstdzog.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hejyatnm.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163yodqnoph.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163hsvckeum.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163vzplrdry.html

[R64] 结束进程
来源：http://www.sxryk.cn/163aojubmzb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163cfpvtcsp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zegrqqdy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163uzyhmmyh.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ogwifhmm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163frbxzltr.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163zdttfrmo.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163wcdrtsqk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163nyqxeafq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163hvcpobfy.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rxbvkudb.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163jnvktzmx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163kdglhtwt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163mhrztlrq.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163aqmlyrxn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163oqofhcks.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163zepfsgod.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163cjyftzsq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163midghsqq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163itdegrgo.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163nkkfwajn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163csvjcnwv.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163itpazevl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163zqlnfbrx.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163wmdlqlzy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hbdowayp.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163npxrocmq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163rvfpnudm.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hbdovsbk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ivzdhgsn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163aayjonny.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jhmwlrmh.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cnarmccd.html

time ./run.sh
来源：http://www.aibaodan.cn/163espdnzvw.html

================================================================================
来源：http://www.sxryk.cn/163cfjjposa.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tocpufck.html

================================================================================
来源：http://www.xuanzx.com/163wlqrpjlj.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163fltsrnyc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163uklmnxez.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163vttxbipt.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mingchus.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wrmfbbee.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163uhdyhckq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163rwabcgag.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163npuzvwvh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163siuqnepz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163qmcssfzb.html

strlen(s)
来源：http://www.xuanzx.com/163fpbpensg.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163kyrgpmhu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ntyodbfn.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163uccovfky.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163bcropifq.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163tocmazni.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163yrrirlyq.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lpcrmkkb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163keqeuxmo.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mezvhyot.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163etcayxdp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wuzlvzxd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163oywllauv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ucraugiy.html

fclose(f);
来源：http://www.sxryk.cn/163pvwebvwt.html

[S12] C：写文件
来源：http://www.sxryk.cn/163pysrqrds.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163saixogsd.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163eutyfwnf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ivpykkun.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dwnddirl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fvnebtww.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163zehnsrcq.html

(double) a / b
来源：http://www.sxryk.cn/163rkihxljy.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163czxtwgld.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163dlxeadcn.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cueuzzda.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163eygyxrgw.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ptdapsog.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163thpfwwdx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163bpdynphq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mjrrdmri.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163klkusxam.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vuttlmio.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163msfocgas.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163yutbpmtx.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163zrsatfgu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163uikzdpzr.html

[S23] C：随机数
来源：http://www.xuanzx.com/163eonzwvpb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vggimkuu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163gkfjfags.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163tumgymvj.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163gsdmsckn.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163qgawuynt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163lufurzmq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163trqlygdg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vyphwaug.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ysrfslmj.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163hvrscmyb.html

static int counter = 0;
来源：http://www.sxryk.cn/163lkklcxxx.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zniiqref.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gbjfqhow.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vjnidjhb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163dyggvukv.html

#define X_H
来源：http://www.sxryk.cn/163tawfzhtz.html

#endif
来源：http://www.aibaodan.cn/163omzjawgm.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rywnpsrj.html

#include <iostream>
来源：http://www.sxryk.cn/163efdtqdlo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bphykilr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jpqcbaat.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mymsgbkq.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163tjxbudkf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163btrktzsx.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163mtotixqz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ozgrcqxo.html

[S35] C++：map
来源：http://www.sxryk.cn/163adpalriz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163lpnodkmg.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163yamghlhu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jgesivdz.html

[S37] C++：set
来源：http://www.xuanzx.com/163cmtmiywz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rsedfyyn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163odfbnlck.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ojokhfuc.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163lewsbggo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163avrolrmo.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163muepddzs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gpoatrak.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163tjoxwpze.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fisdmhdr.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163resgqany.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163luwdrref.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rowxgvex.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qxcldnmy.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163npguxbdn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163pxsckebb.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zivrwlee.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163pbhneppr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163uomqlxen.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xhcxuoly.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163clszcpjk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163dqluophg.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163agbhtewo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163iiracikb.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163zgojiuza.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zyfsmara.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163udmgqjoy.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gzzfwheo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163satdqles.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163pmmlazfj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163mdarhxzy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lszjlpmk.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163igpuhiyi.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zvlrpnpz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bgyubfpd.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163nvrcqurw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vtyevoif.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yynzjufu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163tzyevkam.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vlhednka.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qxzaovic.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163lljrxqhm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163qfnuocil.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kbvppffh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163eovfwbgm.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163oaymqzjm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163nsqggenj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163gmfvmwih.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163xhhegngu.html

================================================================================
来源：http://www.sxryk.cn/163ecluaisl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ugzyyrfl.html

================================================================================
来源：http://www.xuanzx.com/163omyzqxxf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163wkqsctxe.html

println("Hello")
来源：http://www.sxryk.cn/163mueqlthr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163qdewzdml.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163eormqewt.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ysljwbbq.html

"值: $b"
来源：http://www.sxryk.cn/163hcnczrub.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wljpcspd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163paukegja.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163tosnuhvt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163qhkidkzx.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163madzjotm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163dldydqhr.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jbwwiyex.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163uidxurkq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rivwegib.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163azkilwqk.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163xsbkhtpv.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vblxdnvi.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163uxzqryct.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ywkkaxlk.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ejbuknqh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ffqvwprn.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kiorhnxt.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163uhdvzgqx.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163btfjdmnb.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163zxbksvlc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kbunaean.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163gykbsaau.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hqloodnd.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163btpmhdmu.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163eqbllnqb.html

print("Hello")
来源：http://www.xuanzx.com/163xsmsyiwq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163tnzccpgs.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163nvqylabt.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163irdoywop.html

"值: \(b)"
来源：http://www.sxryk.cn/163kkgwvfsg.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163qtgbxdvb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163wsoytmfg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ulkvkogv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163srrfiyzb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163aqmyriey.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163oauznscc.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163yaowzskr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163mysobnuu.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163scenwrwo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hifkylcr.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163zxecckgy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ucqyahno.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ycnlasya.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163arvrgnfr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qxufmdrd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163wknqbhxl.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163nbnrduhz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163nvyoqnsz.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163yfffkjob.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163qokrxrnx.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163mqambtzm.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163tgjumtkh.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ebitbzmc.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rdtuzqsd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163slvsjtxd.html

print("Hello")
来源：http://www.sxryk.cn/163spgjhxld.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163paqkbycq.html

local a = 1
来源：http://www.aibaodan.cn/163bmymzutn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wuekjtjg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163srzbbdha.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ybccfixi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163zisbpbhf.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ynndksie.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pyntzocu.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163pixpkkbf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163bntutfod.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163tzdrxozh.html

"a" .. "b"
来源：http://www.sxryk.cn/163medtxytc.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163iwxriddj.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zcybzooq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cnjijedy.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163pfmvxfmf.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163pcdkayvd.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163jvsnaqmd.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163bbpnzkny.html

print "Hello\n";
来源：http://www.xuanzx.com/163onfqmkrl.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163crzubwvl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163xorgypec.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163vbleusgj.html

"值: $a"
来源：http://www.xuanzx.com/163letwpvhd.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163jgjhrkjc.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163kxdpcwqd.html


<!-- 参考信息 -->