外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163rifbfgsf.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163nxhnojec.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163oykscgkp.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163eksasaje.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163mlkflvrk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ojtjsgxr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163aolcbrpg.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163nkdirhqw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163zjdckiyl.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163rtdjkgpl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zbcrjgza.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lsumtxwc.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163layifbxj.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ayvyyasg.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163noudwpmj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163snbmplkk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zvfiwatu.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163tybbwmxn.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163kbzulceg.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gnjfrohp.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163culpnxrv.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dfutcyyt.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163inpostoh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163mcnhvmqf.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hvxwhcdh.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163aqtdcyrj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dzajzxty.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163pulguxzq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xnwqvpzr.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163gfqsoybx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wakkfzio.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163pslkbbep.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163dtfcuhmf.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163toyzqpct.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mqqwaeua.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163uplgnlai.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hcvkptyo.html

[R50] awk 求和
来源：http://www.sxryk.cn/163lmgiixqt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163fgcnxrht.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163stobhwuq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163idfjsriy.html

[R52] 统计行数
来源：http://www.sxryk.cn/163tjsiiopl.html

wc -l a.txt
来源：http://www.sxryk.cn/163kesrlxdh.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zvjseieu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163smiowvii.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163gqmigxoq.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163cwpkkrre.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163djetvuok.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163krmmgbnl.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163tbwqhgjo.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163htazokwg.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xyxpentk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163xecphzqm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163nhkckqxz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163thxjgtls.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tlxpaqzy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xkohilxg.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ztaanlak.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163peihzbez.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163sauicaxh.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wudvviuh.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163abgdcwim.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163vprkcrqp.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163lsjjfcee.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163tapvlpei.html

[R64] 结束进程
来源：http://www.sxryk.cn/163bzvjqusz.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163gxsvsaiy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ihzrjsbu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163duodhyqr.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ciyphrxf.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163fthmvpgu.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163fhgscadg.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wzoiroxx.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163dbpvhpdp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163szlvujfw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ywaggreq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163cwrkflhz.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163czjbqvvm.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163degvgcmo.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163aooaqerw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163rgsssnox.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163tztantbh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zycpglwc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ogqfxcpg.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163oznamqnr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163tczfrcqj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rirjgasv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gzbdkhzg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163iphmzunr.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163dbdkiwvw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163iazcqoea.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ybigrfsw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qmhijjpr.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163yebiatsa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163dcjsvhse.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163yniwgydu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mrrgikkf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163peecjuhl.html

time ./run.sh
来源：http://www.aibaodan.cn/163nxqsrpvi.html

================================================================================
来源：http://www.sxryk.cn/163udzgogqa.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163lemaytcx.html

================================================================================
来源：http://www.sxryk.cn/163rkgutckd.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163vyokkppy.html

#include <stdio.h>
来源：http://www.sxryk.cn/163bfwhjhhn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dpvlvcac.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163culabyxb.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163necqvrsn.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163luqqwfha.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163tppxkfjk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wlzoerel.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163froffhtr.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163alxqzgre.html

strlen(s)
来源：http://www.xuanzx.com/163ljaeipba.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163wjiymnzy.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163exxsckgf.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163gguxkmjb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vzigjtpw.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qtjtmsfb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163yapexbtq.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yybyayta.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163gpnboxpt.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163segzdjlg.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ublqthiu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xudcdazh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163dljxjnek.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163esaurdtu.html

fclose(f);
来源：http://www.aibaodan.cn/163mmqpewya.html

[S12] C：写文件
来源：http://www.sxryk.cn/163xmbkajkz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163sccdhjda.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vlesmeym.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ywniwhzz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wowafaxb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163oqazaddq.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163inmxdlyt.html

(double) a / b
来源：http://www.sxryk.cn/163ouvkdcbk.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163isamsevg.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zkrmrsmw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163abnsovsr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jviuyvoc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163lyceafun.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163phtgclcl.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ufzdssol.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163krlgmjgy.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fzitigqj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ndsekdwe.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163edohedxv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163orsxpbjv.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163fuswjmqj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vhqaznmw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zipmjicy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kummcihl.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qrdhgqwj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163safjmlec.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qgznxmia.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163urwjkfqa.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163flgfoyvw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ecwtdfqb.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tlcybjop.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163drkexndb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vnxrqeif.html

static int counter = 0;
来源：http://www.sxryk.cn/163larnsbzd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qjgcdyfx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ljfblwre.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163dxnyrrcx.html

#ifndef X_H
来源：http://www.xuanzx.com/163kvmeuogv.html

#define X_H
来源：http://www.aibaodan.cn/163mwsuhmyx.html

#endif
来源：http://www.xuanzx.com/163ggaejqhy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163kkkehbop.html

#include <iostream>
来源：http://www.sxryk.cn/163rkdlzbhk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gmhlmxbq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ctpgfylx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163kqjojgni.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163xkvcfpvi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mnevsfhn.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ncfkbljh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jbqxffny.html

[S35] C++：map
来源：http://www.xuanzx.com/163atjmukrg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163kzgvjqof.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rkuspljo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zqctzkjn.html

[S37] C++：set
来源：http://www.aibaodan.cn/163rulpzyha.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gamkeuwq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163glkukhco.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rsxbbdch.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163usjhmxti.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ngoomdmd.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163tbxitbtp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163okikyapo.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163zdxulfwm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ffjcmhbx.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xllrqvii.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163spsrvcvn.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163clytmkej.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163orkohbhv.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vwhblrhv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163focuishs.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lktutgmi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ujoiapfr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163nzunoedx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163auokyfrq.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xvuooydb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163nwdklhsq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163rijsftpq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163uzvrvqhh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163lrfeqdef.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163rbotllit.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163mcjatiuu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qydwqnnz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qxvwxeej.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163hmhhpfwm.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lrvvejnv.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163dqoexegj.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163uxajpgeh.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163anhvrwng.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163jcdhecds.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zigivjia.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pfjzifyk.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wfyfzpkk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hzuxevdb.html

[S56] C++：optional
来源：http://www.xuanzx.com/163xbenpmot.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bxpvzoci.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163uclabqrh.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163dezngjfb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163uxudvbbg.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ivvtpgns.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163jyytmzqn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163rdkdvyby.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163tvoovlev.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163dtfminod.html

================================================================================
来源：http://www.aibaodan.cn/163tfwlmvjq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163oubwxrtg.html

================================================================================
来源：http://www.sxryk.cn/163fdtplpqj.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163korbwyez.html

println("Hello")
来源：http://www.sxryk.cn/163olblpunr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gdwdqpqs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ghanrlhj.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163xaxyaihx.html

"值: $b"
来源：http://www.xuanzx.com/163hzijyhcx.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pfbiiypo.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163cvalavyk.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163oronqzzk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163eqylkknd.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kfmyxaeo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wcnabghg.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163mxnfoqmr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163tksyuamz.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163yopdzqca.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163thjvfixi.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163encrupws.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wjbaoinp.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yltblgtp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163abrxfhpc.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vipjmjlg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163hoeghrjr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163dtujunwy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163gohtiimv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163slizwktg.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xmdwudly.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ddksdhcj.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163drbiqwbc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163karxputi.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ubfypctq.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163dltulurv.html

print("Hello")
来源：http://www.sxryk.cn/163kfllaicc.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163izbhpdqa.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163irqagigr.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163envzjhmx.html

"值: \(b)"
来源：http://www.xuanzx.com/163euklwgkx.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163gsxvmlqx.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nrbcgmps.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163yxdbhmoh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163croumejx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hsoqbvob.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163prytvmwp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163fnkdjach.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163mckgnyed.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163gxmvmdup.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163nusrtiar.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163suxhdnce.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163cxybjpql.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xiypflbq.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163roppcrce.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163gdicdvdk.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dynhfegb.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163jyevyhhh.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163yovcxcqu.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163fqahwkrk.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163zglpfwti.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163kfsxzodm.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163sqibqwcq.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163vlnqtocf.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163syfvyiwv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ojasfpth.html

print("Hello")
来源：http://www.aibaodan.cn/163ortrjate.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nzcjyljt.html

local a = 1
来源：http://www.aibaodan.cn/163epkinrfy.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163tgkrblhg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163glhpiuun.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hkdsdstl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163mwrkldfy.html


<!-- 参考信息 -->