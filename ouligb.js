外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163sigyjysm.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163vifhocsz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163cxmighdc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163dldlswcj.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163tfmorong.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163djgbbydh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ynabxdqy.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163xdvvsojr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ehqlzzai.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163gaczemmc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gmhbyecz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163spbidqha.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xbefrogv.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163yerqxyor.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163aiucgdnf.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qaolojnq.html

files=$(ls -1)
来源：http://www.xuanzx.com/163osvwzdny.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pbraemvv.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163tvbftjpj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qxwrdktr.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163njbvhbug.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ccfoqykh.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163hbbcpart.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163uupqfguj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jwreeyzx.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163hvpnjuww.html

wc -l < a.txt
来源：http://www.xuanzx.com/163uyzhyisp.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vsqugbsa.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163mmxiwxcl.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163oykxbnyl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163debjgwfx.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xfxasvue.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163uyrykdud.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ecxrsaiy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163cnnjxzuj.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163vhosrwqu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163rabewdpq.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ulmrnegf.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163roydncip.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163nntidkvz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163zekjxmsa.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ewakdpbr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163dyjjupbq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vjxajrku.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vdbdhszg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bfktolda.html

wc -l a.txt
来源：http://www.sxryk.cn/163egasscab.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bmlgesgk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163xuzcjqyd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163gnpwogcs.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163mczhnxaq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vcjdpyyx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163cxfldznr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163oxgaextu.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qscocsqu.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163lypdwqak.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xoojdood.html

[R58] 下载文件
来源：http://www.sxryk.cn/163mltcnfxt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163augjddhp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163uccjfmsq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163brvawcoa.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ifzidxgc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xulgntqb.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163bgvjsjxx.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163bqodsuzb.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163qjymqgjb.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163sqbvlbvk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kmdjbyvw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163qfgathkt.html

[R64] 结束进程
来源：http://www.xuanzx.com/163brhunywi.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pbpnzqlo.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163xqzzphil.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kziffwsu.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163cfbveqwp.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163iewuofhy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ftdspdbz.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163zbnlnszh.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163uwjtannl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163shtumhvk.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163phenbrin.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163nyhyzfmo.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163qjxhcxaa.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163hnvltldc.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163vjgsgiuk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163smjtwmcs.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163cnmhipfx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rsomikwy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xdzkjryr.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fbffgtjg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rvpzgekx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163netssstc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163mfbpczma.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ftlxxcoc.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163uypljzuu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jbeblwwp.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ejvizgix.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ucbpotmo.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163qsjzwszd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163hrsukehk.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163nqwuzzhy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163npjyrkns.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wvnyfkhx.html

time ./run.sh
来源：http://www.aibaodan.cn/163levmfcif.html

================================================================================
来源：http://www.sxryk.cn/163inslbznw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163jfswerpb.html

================================================================================
来源：http://www.aibaodan.cn/163iapjcagw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163dodrvtij.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jjljleug.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kexlurrg.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163bhqoqejr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163qtmviodd.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163jojhknfo.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kirvowkw.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163tjxuepwr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ctwkuecv.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xzayuohx.html

strlen(s)
来源：http://www.xuanzx.com/163ogovelfv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163xpldyyeo.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163qynzuxqv.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163nnqzgixs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163gndcgzhh.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ycaorucc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163lmxhxeef.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163kzuwrgpg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163szzijeab.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qvbimjyl.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163nncdcyka.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163npognteo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163bzvzasxg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163xvynmdqt.html

fclose(f);
来源：http://www.aibaodan.cn/163etnidkfo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163tgkjvxvu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163loaeknra.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163txahtkji.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dkitqviy.html

[S14] C：枚举
来源：http://www.xuanzx.com/163utkjodvc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163nqusbrwe.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163urmanqwj.html

(double) a / b
来源：http://www.xuanzx.com/163rdutgtfw.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163sakshbcq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xamtibmc.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163pltrlxlx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163cpwirdjd.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ajzlgfzf.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mtjconen.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163obnybtay.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163iactbyud.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163tqdwubah.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vkntmokv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163kvarwhly.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163tmkifmib.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163tirhdpyo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163unqvebmk.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163llmwprys.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ibdetdkc.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163cpbvhqib.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163uxzjwlsp.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pcvfoufp.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163afbsqaio.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mfcjkcdd.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ttffzgsq.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163zkvzeeig.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163pmewfawo.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tjjorpan.html

static int counter = 0;
来源：http://www.sxryk.cn/163sphdywfq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hvvdtflj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163shdxhsfp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163risatzun.html

#ifndef X_H
来源：http://www.xuanzx.com/163oruofdek.html

#define X_H
来源：http://www.xuanzx.com/163zcyeejub.html

#endif
来源：http://www.sxryk.cn/163kecqthtk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rmdgyphe.html

#include <iostream>
来源：http://www.xuanzx.com/163bcykleid.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163szbuyoav.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163imfiptne.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fnrifirz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163nusepola.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163htijnlnq.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163vgribyis.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gzptzguj.html

[S35] C++：map
来源：http://www.aibaodan.cn/163skunzejx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163duzgdyjp.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cojuttqu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rlvuztey.html

[S37] C++：set
来源：http://www.sxryk.cn/163wrwgqgbr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ghovjaly.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gyfwjqux.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163abkelzhm.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xljqvxqq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163rersskak.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163kgjprwbq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163homaxbyw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163zcyjzfzy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ledibxze.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163iayzymbl.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163snricqrb.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163scjejxfw.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rklgexvj.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vbpbpqwb.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163krlhxkih.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163qgeijbns.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vnszagux.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vjfndbus.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163bkrdlcuv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163dqfpbfyf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163acbcblqb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163psklfvoh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163imbhjetv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163akgaxbfu.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163bykmqbig.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hfjqkxbh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163qzlovvfu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163pikqqkfx.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163pnnjrbel.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163kjkmoqvs.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ggcmpicl.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163dladmjdu.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163aohyugvb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163nyliebep.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vpeticea.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vegiilit.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wbpukpkf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163gsthcsgd.html

[S56] C++：optional
来源：http://www.xuanzx.com/163atemzrcg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ampatmdl.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163luhhlqnp.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163pwxymttq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163rsirvexf.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163cxqposem.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163raajdzaa.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gjlqefnn.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163zbjccezc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163zpvamcjx.html

================================================================================
来源：http://www.xuanzx.com/163gtmeeeez.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tspgavvd.html

================================================================================
来源：http://www.aibaodan.cn/163uerxctpy.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ovhgwrfk.html

println("Hello")
来源：http://www.sxryk.cn/163xpvqulvh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163amwjsflr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163yhdfjmny.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163gpjbugfc.html

"值: $b"
来源：http://www.sxryk.cn/163mkhszegg.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vvzmpdmr.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163etbvdksb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163xahchmhw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163hcgbycih.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163mtpqyixm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qxwypgfl.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163bluqbugx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rckmflgp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nqjnuhow.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163yybuukjn.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163beozeeiw.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163mkgwhbcx.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163uoqaodwr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163okgkqppc.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163tblpualh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163rumbvsae.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163leavuskr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bcqfejgj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bfrepnmy.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dqazfwrx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ezbymkoz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163svmarndp.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163cyknxpzh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163spagehlt.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bcsemsee.html

print("Hello")
来源：http://www.xuanzx.com/163lwhkkzaw.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163izhyeeda.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163djuprmbk.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163jsmncfdn.html

"值: \(b)"
来源：http://www.xuanzx.com/163kapnqleo.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163vopsqkrl.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163eousnqlq.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hdiwxpak.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163pfojcfya.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163eunemdpk.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bfwmylfo.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vhqpfdms.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rhyozemc.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fijolygv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163cwqrahpu.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163wbyjwuco.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163osgmsbxi.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163rsnqeott.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163yiylpojr.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rskzvyka.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mwhzwgtv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163cvpjqeip.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163fgczbfpx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163svvrphmz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163tkrmfawd.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163newmsiye.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xylkfipr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rvwtqanw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163umobxixg.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cozqjner.html

print("Hello")
来源：http://www.xuanzx.com/163bgxudfjc.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jotrrwnv.html

local a = 1
来源：http://www.aibaodan.cn/163leasvcoy.html


<!-- 参考信息 -->