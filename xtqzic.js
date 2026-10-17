外链999!wailian999！

files=$(ls -1)
来源：http://www.sxryk.cn/163xayudrzt.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ajtplaiw.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163onhedxhg.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hmdyqhvg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163vamjufkj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ywbdwdzz.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163dqolrwwc.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xtzlhwjw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xovdcgbc.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163benlpxag.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wibgeboc.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163osjzgnes.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hjfbtwhz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163tqewwomh.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163hoqodxbw.html

[R45] 批量删除
来源：http://www.xuanzx.com/163riyrymxy.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163yxaqyfur.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zwnspuzm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163tishhsvh.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163kzidokxi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ufduwttn.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163tadzhlbr.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bpsmidus.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163awuljdty.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xqcbcnxg.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hkfynxxi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163afgfdwen.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163kqtdpewx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163urjhdoxo.html

[R52] 统计行数
来源：http://www.xuanzx.com/163jjqtdhqj.html

wc -l a.txt
来源：http://www.sxryk.cn/163zknsgiai.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163owqtpxjm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lsqdudpk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163mveqsbdu.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163flztucux.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ilbhekpt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ktgnxmrp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163vvnmolmo.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163lafquenm.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ehjqikjl.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lwuivlqu.html

[R58] 下载文件
来源：http://www.xuanzx.com/163atirlrkf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mkeexpfw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163aljnvfkq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163fdhghglo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163oaencjjx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dzytgkit.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rsgddzqe.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cuecqwwn.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163dfknwzos.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163pfavlfgy.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163owtmbgah.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163duqcvmmc.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qwcdojvc.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xapuozuv.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163izzosqwz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163onxjxysz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163hctebgvd.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163kgeldjcg.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ikqilgxv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163lytnuywd.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163deowyifs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ehkwuuuy.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163njhecmqr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163yfkbotqg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163gybnbdbv.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163xuaggfxv.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163tanscsvy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163bijgtukz.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ydlwbsvm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163taqeqewo.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163stpcivmq.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163hioshjge.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163cebwbcvz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163cvojevql.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ahtwqiks.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hlclxfso.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163rdqblpav.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xovxefek.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163gpgfnmys.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ekyhkpmc.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163eqhswlti.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163qkfjlarl.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163dynipiuf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163dlahhmye.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163clfiwqfp.html

time ./run.sh
来源：http://www.sxryk.cn/163nehovisb.html

================================================================================
来源：http://www.aibaodan.cn/163cjzznpwn.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163bruqjwru.html

================================================================================
来源：http://www.xuanzx.com/163mtgajzui.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xcngntpd.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qucuhxif.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163iefbechz.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163hlswervl.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163aicwcbvm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163uyeovaot.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ejyuluci.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rgsyvdwg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163xzckcdja.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163mnnkrsdk.html

strlen(s)
来源：http://www.xuanzx.com/163ibsyqvib.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163kcotacdh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gvroppfb.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xvsixzlv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ckuhwwzy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xrpduqlv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163cpfhdkso.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163npldxnzy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163cdgefewo.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rsmocznc.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163oppqrcbo.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163qudamwow.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xfgidfye.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163gcsayhrz.html

fclose(f);
来源：http://www.aibaodan.cn/163ifsczmmv.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ttpkidzh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163uwtfsehx.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163chpbmvxd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ezhvkzvh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163fgofsihv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dmncrwdc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bhxfblaa.html

(double) a / b
来源：http://www.sxryk.cn/163inqfktxd.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163csuhtpws.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163neahaqtf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fhmeiyie.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163zljzxcpn.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163sddnzaow.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163yushdjvs.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fshlvgzr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hkmujyyd.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fjunykrp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163clymescu.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ozseqyac.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163pqpcchpq.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163nnaljgjv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163nujsfoao.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163pzlryvmy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163minxiade.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163kyodvabo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163menmhjie.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163xzegtztj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163deswjbyz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163bzmmzfht.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163zezjfwox.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163fprggqwi.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bhfgsape.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163mjrzkvzt.html

static int counter = 0;
来源：http://www.xuanzx.com/163cqoztfwg.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zrovivzr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163biteqwpp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163pvjajstu.html

#ifndef X_H
来源：http://www.sxryk.cn/163egviydcy.html

#define X_H
来源：http://www.xuanzx.com/163hyrjjekv.html

#endif
来源：http://www.xuanzx.com/163rdljchzz.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163jlvuhzyd.html

#include <iostream>
来源：http://www.xuanzx.com/163dulqxqoc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163vsvikzgw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163twaaqggf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mnendkfi.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kzcrjtkv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ytafennl.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hwtmlirs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163pbetjnpf.html

[S35] C++：map
来源：http://www.sxryk.cn/163maucudol.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dxhcgrnx.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163kpkubtkd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vibnbbeh.html

[S37] C++：set
来源：http://www.xuanzx.com/163ktbdsvot.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163yejxewnr.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ibrpjdto.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ytchwxdj.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tybyxohn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163czzurbav.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163hszztomp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zrliczpr.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163hgsxcxos.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wujzwuoz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163yivsxgpr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163iyyingin.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163sywronuw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163cdmwrlfa.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163cfwhvozi.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nginznuc.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ptltvmds.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163saorxwkl.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163eeedtppp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ustqjcai.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vwiibnnm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fxcidsln.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163rmjdoghb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163szzjgzch.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163tzundzjb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lzflcsqv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nfzndeqc.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163crhufkcc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tphcdjsq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163htldbgtw.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163taqfaflg.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163kdouitxa.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163xohebnbr.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163smfirprv.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163wlvavzyw.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163upmqsouw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rusdjdkn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163yszanlzf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163cttvuqgb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dxfywxqo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vdarrenr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ijtemwho.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163nmlxguqe.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163omayqfvm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rviiovyi.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zvgyxydt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zxekcmov.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163eqqiprbe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ydjnpuvu.html

================================================================================
来源：http://www.xuanzx.com/163wgcnglzb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pinfqogx.html

================================================================================
来源：http://www.sxryk.cn/163tseofpoj.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163cqzyglcz.html

println("Hello")
来源：http://www.xuanzx.com/163lqduvfyp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163sklgdjzz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jmbyjquo.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163vsxlhiph.html

"值: $b"
来源：http://www.aibaodan.cn/163jcbbtgda.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163nhbktwiz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163qqbintck.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163eqdteehu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wjlfccuw.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ghwfuqui.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rprgehkx.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bqvedszk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zbqkflou.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163uqlcomme.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vegvrgqq.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163dvlsibpd.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163tvyzbahm.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163jhqggypg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163avhipejj.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163cybvvwjn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163zvfbcowb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163zzpacnhg.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jmzxxnaw.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163wujpnllx.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fiivjfhj.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163rbqzchnp.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163mdqdqsgk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163exmqdkid.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163twcdrnyn.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163xgxljyrb.html

print("Hello")
来源：http://www.xuanzx.com/163eqhxsbzg.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163lasnbeyd.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163kqfdrkgh.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163itofxmgo.html

"值: \(b)"
来源：http://www.aibaodan.cn/163xzulcuge.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163isawtpmg.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ephnpinr.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163riiovwie.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163usuukrzt.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ohtndein.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163aftwuasb.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163zoujfwfk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163aglaaffk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163cidaecip.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rhgdjamr.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163nqejlhwv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163gpsjexlw.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163yafluyny.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ulbidbjl.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jjaqksjx.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163uaywlqcc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163upzzldbc.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163tlisdxmu.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wxftpudm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163hiqxhouh.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163zykqaldb.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163nndodvci.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163yazbrxlo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163iqqjqsfj.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163seixtphx.html

print("Hello")
来源：http://www.aibaodan.cn/163ngxgnvxb.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ajqrkldr.html

local a = 1
来源：http://www.sxryk.cn/163qxhvbxal.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gdkcrkim.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163blswiscv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163whszcfhm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qgdcbgcy.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163btkcmosw.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163pnhlzukl.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163louhhulb.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163fkxvgedw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163hfubqapx.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ofylqgoz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163jejdoryz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163houcrjll.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nlqwepou.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ajejzffy.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163oxdjbsbk.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ljuehqhr.html


<!-- 参考信息 -->