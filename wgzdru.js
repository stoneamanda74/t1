外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163xcikasnh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ghwinwjy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xcrghlig.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163clexebbr.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nxjevjjj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163vwwexecx.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163itwtkrkb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163lycwfyab.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163liuclwqj.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163mjtwrjcq.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wrqytffj.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163bheweyfz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ztnwhyek.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cfxkgrfg.html

wc -l < a.txt
来源：http://www.sxryk.cn/163hxxaydji.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163mrycauox.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nmykisko.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163dtbwqfqk.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163qhfkrcxk.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163cahgynbz.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163hftqbkeq.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163rflojiak.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163yexogijg.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163tyuzkggt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xofruqut.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ngqhtird.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163uaqldcbf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163vspoinwq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cgupqian.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163czzuswrw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163axtsfeam.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163imvyatql.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163lzsuwxaq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qvvlfrqv.html

wc -l a.txt
来源：http://www.aibaodan.cn/163zhcqynrr.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xoopiejw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163qxhvdpnh.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163nfqsovqi.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163odcfhupf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163lngierwl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163lpnxyigv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163uwtlctgj.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nyeuxcxb.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163mawhjdhk.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163pmjgyxkn.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163clkhhgqv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ulmavcrz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163eogfwfru.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163thhyxtwk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163htyqkexg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jgrumzyb.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163cpjfewhr.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ltfzdjao.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163bhcbaftq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ftekezpd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163bvddazbw.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qahhhjmr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163jrbbuuxw.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163wwkcrxcm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ctfwreec.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hiyolzcq.html

[R66] 定时任务
来源：http://www.sxryk.cn/163jfjazkni.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zpwwxjjj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xhkthnse.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163auguhrwm.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163qpptfrvv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ykpcbdkx.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rsyiaoae.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163vytqhlvd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jnkplapo.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163beboturu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163leixwftk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ywkykzhc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163fduiqxhj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kjlsvjcr.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mfwmskte.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163fimnqxzp.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ienzvxft.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163pzbmljon.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163mfgdxgyk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163bdzrhrbp.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163bcandgcr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163agyesxqs.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163cyutucox.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163eursgcyu.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gumpkkge.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163kidukxfe.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gvtqmtza.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xsffxyua.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163cmohkess.html

time ./run.sh
来源：http://www.aibaodan.cn/163kczkmhmm.html

================================================================================
来源：http://www.xuanzx.com/163djposghm.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uernpmdh.html

================================================================================
来源：http://www.xuanzx.com/163jkwcqvru.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163odjgfnzy.html

#include <stdio.h>
来源：http://www.sxryk.cn/163dhajxsmp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163macxrnye.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jvigiahn.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163btyctoqr.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163xxoelgyg.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163uuyerwdd.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163pystdwgv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163nxfxoqks.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yykyjjow.html

strlen(s)
来源：http://www.aibaodan.cn/163ixincoue.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ienyoftb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163fvzdclhf.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rishpgip.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163asuxmrlp.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163dtyzbyxp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163gtrvfskc.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163viorlaaq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163waldtdgq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163sqquxyis.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ifxhcirn.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163hwubxjdn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ahyrnxjx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163wuaxvwvt.html

fclose(f);
来源：http://www.sxryk.cn/163seilrzha.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bleukqui.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163xcrlscsv.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163oxoksdtd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163bmahbrvn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163yinoajmh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163bkperluk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163hvskcdcl.html

(double) a / b
来源：http://www.aibaodan.cn/163oyfrfswj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163uxlowwhx.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163bceljscu.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163pgdodchb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ypfxkbzg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kbpurjol.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ypulrtud.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163aneerfcz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pnnpgsvx.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163epssjkux.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lztfzcet.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ohdekujl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163mibwrzca.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163aimglcvw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163pvulxzee.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rrmfqwht.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163pdaupztu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jmvucbpc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163euanbpit.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163nvnwxubj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hfsjyxhy.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cdaqoikh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tsolbobt.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wxepihno.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wijaznre.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vpeudcka.html

static int counter = 0;
来源：http://www.aibaodan.cn/163onhyjjjr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ebmlpnsw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163xdxmuswp.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163edxuzkdb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163tzwuipmd.html

#define X_H
来源：http://www.aibaodan.cn/163lkcyzjce.html

#endif
来源：http://www.xuanzx.com/163vacyqvsi.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163uyfdvong.html

#include <iostream>
来源：http://www.xuanzx.com/163iskolfsn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dqbwablw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163rjhcisws.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163zuqhxdyf.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163pqrawsna.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163sxzcaewx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163bgxddssj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ogvyzygq.html

[S35] C++：map
来源：http://www.sxryk.cn/163vgthoctl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163emlmorpl.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163iswuniqr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rzdklyck.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nxdhajlk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yrsjzubl.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163cobqqrqz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fyrrazsv.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ejxtngim.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163hypamqjx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ywanbxjm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163amqdwaka.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163tsuqhhuk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163nenkanzz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163nkdjyfzm.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pccnyhog.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ilkxrpef.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lhpuqijo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163dvhretnw.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163gyxdsmvm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163xiqpnrll.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163blpiymjb.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rnezajfe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163clkmgbus.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163lbcjxvha.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qqigbalw.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163btrbuqwh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163fwtwwvwo.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163sygtdlcd.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163iaskozje.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163krfyqpvc.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163hagfdfji.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ldgxisfv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zoykbdka.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qnmgvwla.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163kvtploqq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163eejugplb.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zqafnwxa.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uvymognq.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163gngnvajg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163kzseibjh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163iuguteas.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jyviimzt.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ljlncxjq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163mgpjyxlv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163aawsgmgg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163avoryapm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kxmrkgdn.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163txhizlzo.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163gtkwyfmf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163rxrquurw.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163tofynuqx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163qvvtyuyo.html

================================================================================
来源：http://www.sxryk.cn/163ogtrgyzq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pgynlida.html

================================================================================
来源：http://www.aibaodan.cn/163yjivwuaw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qgximhrq.html

println("Hello")
来源：http://www.xuanzx.com/163lvyvnolw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163mnhouvqw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163azbkroxq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163srfztlsx.html

"值: $b"
来源：http://www.aibaodan.cn/163edyyreaz.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163dsxcamyp.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ydsrvbgr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163xwgfesjo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163yjifqgpb.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163dpivtcfl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163epvuosqc.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jibvauah.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163weuiprlt.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ucihkauj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163zkpvujew.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163vmfrwjge.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ejfulfix.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ghkpxjyy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163jxuxutvy.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163vcjdduzt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tcoqizxo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163nqcmdgts.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163fipvadgu.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163kueasepq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163bgtewjba.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tjouydiu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163bcjsejaw.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pkycbxvc.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dplhdwxa.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163gpzqzojw.html

print("Hello")
来源：http://www.aibaodan.cn/163ntldbldm.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163bapucsme.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zwwkltpl.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163oidgjbei.html

"值: \(b)"
来源：http://www.xuanzx.com/163qhgzumld.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ozsiqhza.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163kmnruxed.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163zaeqxnyw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163yqevnsxp.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163lddvcumj.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163lttichky.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163plfvvxif.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163nciraffv.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163nmclslaj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163opcmmmjf.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163jbyjsaiy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163chjvdwyp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163jqzomppm.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163mvzbcegi.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163muujqepb.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163friheskf.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xeioefgw.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163aovpaexv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163eblcfnhz.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163kajmaofm.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rxtlqgxo.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163imtlluio.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163sjfqiyur.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163lmktbxoj.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163luizqqzc.html

print("Hello")
来源：http://www.sxryk.cn/163kndamyec.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hlycutlf.html

local a = 1
来源：http://www.xuanzx.com/163kasdpnkk.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dcmojxpg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163rwrzleor.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163rwfvfuzo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163turbqgwi.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163wlqrjkzt.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ypnbcaik.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163gdwaxqdm.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163sgkepoxf.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ujwrarrv.html

"a" .. "b"
来源：http://www.xuanzx.com/163stylqndi.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163oiqjbqgg.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163lojxwfte.html


<!-- 参考信息 -->