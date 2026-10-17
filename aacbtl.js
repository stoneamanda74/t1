外链999!wailian999！

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ffyhxxjl.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163kiduqunr.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163vyttutir.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gekazofr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ljqhwvct.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xdvxjhkd.html

wc -l < a.txt
来源：http://www.sxryk.cn/163pohyezbs.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163nydnlmjf.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163vdymaaeu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163jnsljkqy.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163jbknqkmm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163lofkwyah.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163imtdgggr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ywaunoir.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163syhepsde.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163grswinrb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163dooxzziz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hdibkiul.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163flqqfmfo.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163vzblduvo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163nnbnmaka.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vtvswfqx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163pmnndaim.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vespfbnu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ncrxftrp.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163etcqtqno.html

wc -l a.txt
来源：http://www.sxryk.cn/163somfbaai.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163sgbzcvdp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qpaintyq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163furhaean.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ufsbhroj.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yjqzgeul.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163lwfooive.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163doqqegii.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zyqakpnj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xajhwunk.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qmoyjzmw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163vruhztnf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163wwbfbgus.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163pesourxd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xlvfufdf.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163njfcropu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163pjqjkhst.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ualbtqzl.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163pbyiqvub.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wqisaiyr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163jnwbrlps.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163auyclhqk.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mfyuhmjg.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163xgjvcnab.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xcqilcnc.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163vcujffbo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163djbgndqg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163kisaajyh.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163lrxbwnqs.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163uagmtorf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163bnwfvyoc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wbseoybe.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dqogmaxl.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163blciegya.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163llbfoyiz.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163isbybqgm.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163khkdxnpn.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ebxcjvkj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163phfawjlm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163kzwjjxyj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gydvczbv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163nwuxkjhq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ahbzbukr.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163fxpdeslw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ognlwxgp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xlpradgr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163tbytdecd.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163spzbhetp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163shohecim.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163gcsqqtti.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163esjdgcbz.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163beijihna.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163wtbymxjl.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163bxydysks.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163zcrgrnhs.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163rhotjbse.html

time ./run.sh
来源：http://www.aibaodan.cn/163fmnffqog.html

================================================================================
来源：http://www.sxryk.cn/163dsihfhvd.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163egxfnpwa.html

================================================================================
来源：http://www.sxryk.cn/163dghbazck.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ljuuyjnj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163oxyeeqmg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rtfnegvx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163zxrxbemu.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163emmnvlcd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163pblyjnou.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163pvjensvd.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163aqrzpamn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rqwbelmm.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163lxlaalux.html

strlen(s)
来源：http://www.sxryk.cn/163igiprizo.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163lcjjslzi.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pksfgfbk.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163yuloujri.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163bevainng.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163rdsscnia.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wzyyusuv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163yaefmlpd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163fuuwztst.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163lzlujodu.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163igltkxpw.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163frpnjxtw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wkcfciej.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163owvspiqz.html

fclose(f);
来源：http://www.xuanzx.com/163bbygzqyp.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163bsftwobq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wlwyrixx.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163nymqnecq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163gowhxvjy.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163limllsuv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163xvghltjy.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dvbtclsm.html

(double) a / b
来源：http://www.xuanzx.com/163ubbklofy.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ifuewqvi.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163nblfptdi.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ulnjnoog.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163aaxwxtfw.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163vmwlczxz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163lycbxzrb.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163tznlybpx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nftmbrlm.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ryemvpnw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163erfrdiun.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163szgvnklr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163piulgdhf.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163zzjteswv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lhoqwlxp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ciyyfvco.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163kbcqbqnj.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163pyhbrxjx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163rbuntsat.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163gvoxilec.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163dscmnzki.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163yfnloslj.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163lrevodzw.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163cflikawb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163kayzugtr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163exdhpkar.html

static int counter = 0;
来源：http://www.aibaodan.cn/163giridaqv.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163yioccdnp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zuwwmfep.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gjdijfsv.html

#ifndef X_H
来源：http://www.xuanzx.com/163cechwzdo.html

#define X_H
来源：http://www.sxryk.cn/163gvfyojwp.html

#endif
来源：http://www.aibaodan.cn/163tdmyvzbl.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163vqlydbac.html

#include <iostream>
来源：http://www.xuanzx.com/163yjnqtcva.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tgmdzrxt.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pjhyktdh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163efjcpfsc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163niikxgph.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163eglcqxpu.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lhkhxdvx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163smqspxcp.html

[S35] C++：map
来源：http://www.sxryk.cn/163wwkavdsl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zwfpteqz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163fqdzqdjf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hnsptilg.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ihoxkyrm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163klprqtzs.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fpfgbfpp.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hfsvyskm.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hslmrtns.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ostwwqrq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ipuvznkf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wbfxohwm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ijrihawc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vespmiys.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xihfbnaf.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163huvzgphh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ewrwcqeb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163iksuyalr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163eakhbqjp.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163oplqsxte.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163odclbvaw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163nbojjbrd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163drwhchem.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163yobhvxxk.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fpczcslr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qabdhelw.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gjpqxuyr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ttvuyzmw.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163drbizfne.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jmscwlpf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163fpzynptk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163tqpuyust.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163rhxptjfh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163hruargda.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163zhbxknkw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163usbfljvq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163lqrocpij.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163beyesclz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163sisgmwoc.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ydhnepky.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163yenhwvck.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qolcjjeu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163gcvggmao.html

[S56] C++：optional
来源：http://www.sxryk.cn/163kqcfgkir.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163uwvzomwh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dxizgizb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vbvsnhoi.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163zfegszpg.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163yjtecdyw.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xzllujog.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mqhwrafp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163yxeiytep.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163mxaxdknn.html

================================================================================
来源：http://www.xuanzx.com/163ecuomvex.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163brptjhek.html

================================================================================
来源：http://www.xuanzx.com/163pylwlxdi.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163bvtdgvgz.html

println("Hello")
来源：http://www.xuanzx.com/163qdqndenr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163mlmsagxk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rzfvjmtq.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ocvyxugq.html

"值: $b"
来源：http://www.xuanzx.com/163hpgvkpue.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163zipcgtff.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163dxfeowkx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163dbdfdnny.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163hoftgnrx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163dtbmlqgj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163dczajtyu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163cltpaezy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ywtfxgrk.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163elhzlngl.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163gcusxheu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163tisrcdou.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163khepwuzz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163uhbyrcmq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163cjdbztbc.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163cdmxgria.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163szmuggbq.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163lnehdwys.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163tuoyrvtf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163iztvlkvz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163uzjomnpu.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qzteqkln.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163cnkneijx.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163gimoxxfr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ttaywhkv.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163dzmagzuz.html

print("Hello")
来源：http://www.xuanzx.com/163lzqgvmxm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163idygzaru.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163iudjpcje.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163tmxunugp.html

"值: \(b)"
来源：http://www.aibaodan.cn/163plbqfvjl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163mwivlrzp.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ccjyqusd.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wosvoozb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163nzaldjda.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dcdntitu.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163cezcfwvx.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ingcpqmr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163mcyyzfka.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163bdgmzcas.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wkqbcaik.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wwtunumd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ppxcrski.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163hfovexdq.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cgqjauow.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163dxkihryd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163jnaioalf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163qymbeibh.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163rguwrlkb.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163iyotjnym.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163yqbohtoh.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163bppfvhkm.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163tdfkhltr.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163hypbdgyn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163gyrbrawq.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163xjdsjgqh.html

print("Hello")
来源：http://www.sxryk.cn/163uvzbrkbq.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fcvximuh.html

local a = 1
来源：http://www.xuanzx.com/163vicjxhzj.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163kehbwvka.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163sirxselu.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163eiqlxobj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163clworhcn.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ghzxztej.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163odspaqal.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163lunriqin.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163xxyweyhd.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163oadrbrvm.html

"a" .. "b"
来源：http://www.sxryk.cn/163rzfrxhwt.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163idqnzmhg.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jcvbvcmo.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163hpqgigtu.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163urldskym.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163nxkeqsgd.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163bnocrliv.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163mslxffgc.html

print "Hello\n";
来源：http://www.sxryk.cn/163pbkmrpqr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ozbhszkv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ygtdysqh.html


<!-- 参考信息 -->