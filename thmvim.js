外链999!wailian999！

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163mivmnlmt.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vlhknehs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163intigqsk.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163buxccnrl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163henokdoq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vhxrccbm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163lpoajvue.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163odthyjga.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163oyihhmkf.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hfzezqep.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163xfusomxp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hpcekfzs.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163fmalfswv.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163szludrfa.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lsrqlyec.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163lvsbkffh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163npapnmrv.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ghtvxyth.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ipeaxfbk.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163auhaqobl.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163gfnjvtwu.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vtkipjmk.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vcjjyruo.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163imqymzns.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kjwjybfs.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163vgyfypcs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kzuwugim.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ymepxydn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163msnnhiqh.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163crmhnrcc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ruevquxf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163kskdscij.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163psionicb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163jjbdywgn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163tdgnjlhq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163dzjmzuyd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tgkojwwx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qrwctjzu.html

wc -l a.txt
来源：http://www.xuanzx.com/163iszokgrt.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163uiivhjgm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163peotllvq.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163qkhqejub.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163pbyzovne.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yicbxtfs.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163nqmfazkl.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163szkygcrc.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ucgntued.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163phhfyydb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dzioofby.html

[R58] 下载文件
来源：http://www.sxryk.cn/163jeykzsak.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163shwslqvo.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163pwwyfphl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163fsdjbkrb.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ybzkdcfe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163yfirddzr.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163vtjluafr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163swsdpcwd.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163vprsvmnl.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163fcgqdqbx.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163wdgcspbv.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163tvxruybm.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ksegipvf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163lfxnswzx.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163xobzctkv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163znxrjqji.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qnjmcoln.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xyltjmbn.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ngvjwmtv.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ebtkzbfp.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jrkdechz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163bwyllvlh.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ucjtwkud.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163qvspufhu.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163qbcxtthy.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ublgfhrl.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163gxacryis.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vggichtm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fqniclic.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xrxsruzs.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163wswrxdre.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zrkowiib.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163wczjmumr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ocslnydz.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163vjspcxfs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163bgawlijn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ojbluyqt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fpbayytl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mjbwqgwh.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xihobgsc.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ehcjljse.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163djejibxo.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163oygjjkle.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163kkvoiuug.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163bbwrzmfa.html

time ./run.sh
来源：http://www.aibaodan.cn/163xpwnprul.html

================================================================================
来源：http://www.xuanzx.com/163weznctfb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163dypiqqmz.html

================================================================================
来源：http://www.xuanzx.com/163vocjpbdk.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163bbakpvxe.html

#include <stdio.h>
来源：http://www.xuanzx.com/163veqgansk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163kqhsuhur.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163cliluvmv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163sadolgrr.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163gkaotaqo.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163mjkjfwys.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jaeozhcj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tpqtlpmq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ajggczro.html

strlen(s)
来源：http://www.sxryk.cn/163fcntyneg.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vwgaumis.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163lwqqfxrp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163eiaxombc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cbrfzlua.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163zupvokaz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163xvjucyyq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163iplwnvkk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163hvlkydbj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163bttdyooq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163sakdwzho.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163zzbnqcmi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qxpgjphm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rrtzetir.html

fclose(f);
来源：http://www.aibaodan.cn/163pdwymwzu.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vmzmswlv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163iqpszuug.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163enduonbs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rnqgbfry.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qoqwcqia.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vjksabky.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dqaueoao.html

(double) a / b
来源：http://www.xuanzx.com/163wwwyieht.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163rqklqmuy.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163tuqkjrzb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wsqlxdpq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jqffgqgi.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hjnikass.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163quvzdnqc.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163eqbzrxpn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fqqkzdwk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jabfuvud.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tfxexfmi.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163kspoptvf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163oubyotzm.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zylyjsjj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163afzcrzay.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bkhxdqpg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163utzuykxw.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xsufgyhc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qrwnekte.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uaiicbxj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163hazdylxh.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163zjzkjcsv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ycqyzvjw.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163wkzynfkm.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163iijkelnk.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xheevvld.html

static int counter = 0;
来源：http://www.aibaodan.cn/163adfxapfd.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163erwukspb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163klabhwte.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zoodrdcp.html

#ifndef X_H
来源：http://www.aibaodan.cn/163erxjnyqz.html

#define X_H
来源：http://www.xuanzx.com/163vlrncmhg.html

#endif
来源：http://www.sxryk.cn/163udkvpolf.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163oaiygewq.html

#include <iostream>
来源：http://www.xuanzx.com/163vjfndvnl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163cngvslfd.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163muknrefm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fpbgomuc.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163llbmqjfl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ozwuzegv.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163skefznoc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163qnovzqqe.html

[S35] C++：map
来源：http://www.xuanzx.com/163yxkrhjuc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163otxlygnz.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ibnrtryn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163prcktjqz.html

[S37] C++：set
来源：http://www.sxryk.cn/163kuzjtsyy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163llbzlvxx.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fkyiggyj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hjeyfqfd.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163wnvlyblp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163zjdhpvro.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163epsadorm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163eaebnsve.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163yjxdstnj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ieorywep.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163mammufcv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gujothkv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163wxdbiobr.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gorewoqo.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qhomeapo.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163mlnsltzi.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163uhdljbif.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qxilrczh.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163glvdgwho.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rjllgfes.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163uxknvsbr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163kglsoncf.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163piyexuvc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lxrumwre.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163rywhmajn.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163olhmzkov.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163qvrnymvd.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163mzvokqjq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163aekriovs.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163fwjpmiii.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163gqfzsaip.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163mfwgboek.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wunprayd.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163rmmmaojv.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dyfsjfag.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163sijuvndr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rpeqgxaw.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163azwkydyb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163unjqgrlu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163rueqhekg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163hehnvllm.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163eftixgpv.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163nohcgjjo.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hsheidgn.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qtuspagq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ljlasmti.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jdrxkjzn.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163cuhdkhke.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gazwrvbq.html

================================================================================
来源：http://www.sxryk.cn/163wkglajmt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163mtcxqlvq.html

================================================================================
来源：http://www.xuanzx.com/163fwbtgiww.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163wzwndmgv.html

println("Hello")
来源：http://www.sxryk.cn/163sygprwmc.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163yxshstpk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xnhnizpu.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163csnlcbac.html

"值: $b"
来源：http://www.aibaodan.cn/163gacdlpst.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163mrntjzlt.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163uknznryl.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163hnqzpbkn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163qdobussn.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kjxnqqxj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163tinqizug.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zayooqxg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163azahaqfi.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163cwhfqllv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163bbpxbgwd.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163irrettpf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gbpclrpv.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163boemtmdb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gmnerfai.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ezevjnjs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bwiicbzr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163dmlzuwkf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163xrgagaru.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xsievfle.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lbvjrooq.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163tsftppgs.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jpmtobgi.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xkvcruyg.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163asfgweim.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163afunndrg.html

print("Hello")
来源：http://www.sxryk.cn/163fvkpisuk.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163tceptjmu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pdhhaqol.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163pbbrevwm.html

"值: \(b)"
来源：http://www.xuanzx.com/163eqkujygs.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163gcwhyhwa.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163uptytqek.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163blseoqoo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163duswyxhn.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jqmwnvjh.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163zgapluti.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163mugmrvuk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163xqhybmkz.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163msdqvyeq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163dxgtjvwp.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ijuanrdo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163vwhfpetk.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163qhgsqtwx.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nnvkmkjv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163rfnazcou.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xqqjvbho.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fyjomfoz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163tzlekcyd.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ermkfmdr.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163cbjzhxib.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vlvpkbfu.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hepdqzsi.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bkuujkeh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163lbdpeqrs.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ipjosgwb.html

print("Hello")
来源：http://www.sxryk.cn/163utlijzat.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163hlhgjdlq.html

local a = 1
来源：http://www.sxryk.cn/163xtxnhxbj.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163udcbrjjo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163nepwvxhq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163vcscpzkh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vkbifkve.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jkskkcqh.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163dfdthawj.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163pivklage.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163hjzsfvib.html


<!-- 参考信息 -->