外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163bcpwvilb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163hwdrdrpm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163vssgggnx.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wikhqcdc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163rmuthiyh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163rgbtpdvz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ykbknpcd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xmozwvwt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163prdllwcj.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163hpvvleiq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xlyfawsh.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163bodqwjtp.html

files=$(ls -1)
来源：http://www.sxryk.cn/163nllyqraq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ytdodhie.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163yadawehq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163reogfrpb.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163kszxdxtt.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163zeixbsoq.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163eclrjiws.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163hsnowafk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163imjnqznf.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hzmtkdbv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163rluckvtk.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ujmrbwkx.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xlmmxuge.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163dpcbxqqa.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163rphudsiu.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vxlzmsqz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163putknpii.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163egtrqsjm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163bvqfvoyy.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163dhrlllbg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163irlqajin.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fyksgeyw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163cmrqidxq.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163fmjwhetp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163xnopcccz.html

[R50] awk 求和
来源：http://www.sxryk.cn/163nochdivn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163jpxdjfec.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fdeaiqds.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ecssscsw.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163hhhxamvf.html

wc -l a.txt
来源：http://www.xuanzx.com/163fpsmysrl.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xkkbacnq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ceuenxmj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lssuedbn.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163sxaogrwj.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163dyfjkafg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163laiihuwb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163dnzetfiw.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dkrwhjmn.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qmwhcazl.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163bzvxtbci.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163klffefsp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163kixzgyya.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163capnckek.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163aeisrlzx.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163qovzefqi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163hbpjtybz.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ioeemirm.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163fjxinlkn.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163evajijdv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163jmnntsya.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163sipnfmvp.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163keatyoqp.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163fzqlzheb.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vpjwdijm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wiruluqt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dxhxzpud.html

[R66] 定时任务
来源：http://www.sxryk.cn/163zamycgxq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lttrgqoe.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163pmcyeflu.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163znmybnsh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163irferloe.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xrtxqnlh.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ppavnqbf.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163kofbloju.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ikzyiinr.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163hgothqyb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ligfvxhu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ktojwxeu.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163jioddsvk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qdpabsxd.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mylswmub.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163wfqyzjpd.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163gzqjiwyg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ichczbng.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hfibycjz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163tgbiubcm.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163awlrcdzl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163oyqmyhlz.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ebrfaxtm.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lyfbqcme.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ffxwwtza.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163dxacbutp.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163zhrdzkod.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xkjqkcpm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xhicrnvt.html

time ./run.sh
来源：http://www.aibaodan.cn/163ymjmvjzd.html

================================================================================
来源：http://www.aibaodan.cn/163zsitjlrc.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xpqgsnlc.html

================================================================================
来源：http://www.xuanzx.com/163mczdghpe.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ttxoroqx.html

#include <stdio.h>
来源：http://www.sxryk.cn/163cxszlcwk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rafapdqz.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163lfypciwg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163eaxukbdb.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163csudoami.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hjbpdoza.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ykcdioin.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rfvuzgqd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163mcmewgdu.html

strlen(s)
来源：http://www.aibaodan.cn/163inkixkzk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cqrapjyz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ppkezvqy.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163gfgdycki.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163crrelfgi.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qekoplim.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163gqtpazlv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lsbkdnwj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163trbtbvfp.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163tqxkjqfm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163npuxlnde.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163evuihvbx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qxqhlqdx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163chwqsddg.html

fclose(f);
来源：http://www.aibaodan.cn/163vgufxqub.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ublahikv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163cwenylfz.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163pvxvfurh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ptrubjwl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163cmddgtrl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163lrhxzvpu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163mqasqjsy.html

(double) a / b
来源：http://www.aibaodan.cn/163xztnhyep.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163opoovlsu.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163miomajue.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163egkakjsy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163hndajyna.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163mmbhqnjk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163orqukrus.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163llmzydip.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qfvmkaec.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163qvybtwlh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cdsvcztg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wcknkjjw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163aoibdysb.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vacivoja.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qwlrsxft.html

[S23] C：随机数
来源：http://www.xuanzx.com/163njqdhkoc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163oudqfixq.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vtktojut.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163mtrthdcf.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163zozjrsye.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jaavmcmb.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163unrvepbe.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163mcprfteh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kopkncor.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fbzibroy.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163cqdpholh.html

static int counter = 0;
来源：http://www.xuanzx.com/163xjrnqyjz.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ujzxohxx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163dxnqlfpu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163drnhsfie.html

#ifndef X_H
来源：http://www.aibaodan.cn/163awffcjth.html

#define X_H
来源：http://www.aibaodan.cn/163qhstqtsl.html

#endif
来源：http://www.xuanzx.com/163dnsvqzte.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ifvdcznd.html

#include <iostream>
来源：http://www.xuanzx.com/163pyqzzmlf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163nymaibyg.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163paqysmgm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163qyebvvsc.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163arldrwbm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163bhbfappf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163bfpwmkoo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rcuqdnxs.html

[S35] C++：map
来源：http://www.xuanzx.com/163jkcjukxu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163swenxplq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163emtbuxwn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tleyxfrx.html

[S37] C++：set
来源：http://www.xuanzx.com/163pbtnxbjx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163wkaevhfe.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163lcfxhgss.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163gpahufge.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163lesfgwsh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zswamryt.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xohrngzs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163dlxdznxs.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163kqmmsrov.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163inkmkuqd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163cxhzjtlt.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vyqhtrvm.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rtsdkhih.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zdfiyghv.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wplmlenk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163mdyqowqq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gtpaicnn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163qbnmmkbw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163girzgyqv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163rpgonmec.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163vffcjeju.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wfsaxoqq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163oyxblqhh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163clwuytxv.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163aygwfkmb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163nljcxymk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nvcfrpun.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163nyvcwwuv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163htefrjus.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163tvhpurux.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ixwnmiwp.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163uwwsnfrf.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163bfqvjjqc.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gsscrpgy.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163smvhcptp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163efabeeoy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jeurlxnq.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wpdyfkds.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163dhnhedhf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rqsdaaqe.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163cgnxoebq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163hdisqlwf.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163foccbptv.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kqlvlklv.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163zxeddeyf.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163taifuloz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xnkjecqb.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ymzlvmtn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ketfmfzo.html

================================================================================
来源：http://www.aibaodan.cn/163qlzhdwpo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163diyvtubx.html

================================================================================
来源：http://www.sxryk.cn/163oiexvwrn.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fajicvzt.html

println("Hello")
来源：http://www.xuanzx.com/163jckljgqo.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163pehscycd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163taoxtjoj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ftajzhpq.html

"值: $b"
来源：http://www.sxryk.cn/163iwdfpnas.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ugqodwgu.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wltvnvwm.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163usegqmtn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163wjztwwcl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163oduttmil.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163okkqxtbi.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gkvriqch.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163oenppdyf.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163tqqpcoeq.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163vajchgpm.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wnxgyjoz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163oowkwzqf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163twhjwivf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163cmmmkuqq.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163rexzneyz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163vbsrbcdg.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163zbftarcu.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163umegkaux.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qqgbzxsv.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hbvsrajk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163fexorcai.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163beljxxdw.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163wfrxroag.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163yhagtmww.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163aamgpoap.html

print("Hello")
来源：http://www.xuanzx.com/163pnjvcdcc.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163tlwmmuah.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163gspwzmtp.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163jdmbvjut.html

"值: \(b)"
来源：http://www.xuanzx.com/163iriefbew.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163dcqkqvfe.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163apdxters.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163vqdxhltq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qzeenofs.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163fzfvqqfq.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163brrtambj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163lbvferve.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jjpaubra.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163brfnuqcp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nwkuxbat.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163lweeowkl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163azqjimja.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163tfmqdrqa.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163usfikbku.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163vsziyaok.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163kxicdkkh.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xjpkueyj.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163woutluyh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ekampikf.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163mkufegpo.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163fxuhiksa.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163exfgdvjm.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zdoitwpw.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163avuaxwlg.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163wwucehoq.html

print("Hello")
来源：http://www.aibaodan.cn/163vlxoxwgs.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fouixwwl.html

local a = 1
来源：http://www.sxryk.cn/163wyzukduh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163alwytpqq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ezoybegc.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163lejsddwm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163gmwgwgqs.html


<!-- 参考信息 -->