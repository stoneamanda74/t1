外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lzmyfqfc.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ixvjhckt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163qzquicti.html

[R31] 局部变量
来源：http://www.sxryk.cn/163aojndexo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163etcyjbce.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163pgjesehh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163plzrovon.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zsnbiemp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163dlynoloh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163otawzutk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163efxannhx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163bailsvgu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163fpqsgfkl.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163secravcs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ynlbupgc.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fvetwkzi.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ukletadr.html

[R38] 管道串联
来源：http://www.xuanzx.com/163wmyxhhjq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163pvdvpllc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wzbnamhn.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163vdaezmap.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163flwlrqxm.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163bggqpzij.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163lplwyalk.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163glwsgjts.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163drqmpomp.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vmzolrpj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163imbhqndq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163bqdquwji.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163gebuwozg.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163slhrnkaa.html

[R45] 批量删除
来源：http://www.sxryk.cn/163rulnssrt.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163dsqpftsz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dwrliuqj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163zbjcqiic.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163kcgrphad.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nihzdjcu.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163cmjwwmrl.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163gluhenlh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163bltsutuy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163opmevtqy.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lfcdtvpd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163luskakkp.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163qqjphtbv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163qilmnuwg.html

[R52] 统计行数
来源：http://www.xuanzx.com/163zseqmhux.html

wc -l a.txt
来源：http://www.xuanzx.com/163nicqkitq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163txondrmz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163chceitqo.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163itlxhsbd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163hwepxntr.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pburlzis.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163soisnlha.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rvjpawxs.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163pdzlovnv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163lbuzgula.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163eyjduyuz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163vhdverpz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163nwijnyaf.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163oybacrdo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163kgcvazvp.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163pjnmuedx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jlxmocyl.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163uifjvaci.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163kezrvdap.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163iekmnikl.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163dkoztduu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xjaiytny.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163sbyqngwd.html

[R64] 结束进程
来源：http://www.sxryk.cn/163bnqlddhe.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163xxekmrsv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ncjmaely.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dnpbmcnf.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163eogdsulc.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163thyihvmx.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fgwjqaoh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163hsukvsbl.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cftfbjta.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163cciobmur.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163vbxqmmib.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163kjhznwfg.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163rklcfvgw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163vuwareng.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163oycutaod.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ydqudttg.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xluvyjgd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163yokcoeoa.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mwhmjlzj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163cewiwszx.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163lasllepa.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163khasnmtg.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163oljexaga.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hjwqxkke.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163tqrcqtot.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vssngszf.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ozpkefdn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lsuhwjbw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163oplxfmhw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163eunschew.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163jstgrmwi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vtpaxdpb.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163znsvjyet.html

time ./run.sh
来源：http://www.xuanzx.com/163amtroeta.html

================================================================================
来源：http://www.xuanzx.com/163cfxvxozh.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nxkisepy.html

================================================================================
来源：http://www.aibaodan.cn/163jajvrwjf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xsezwvnw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ezjahnkw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163lxdruduk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163zjxflofq.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fticrlzi.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163nxwhtycf.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163mxczbdeo.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163dtiophye.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xankmgyk.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163pmcsiyun.html

strlen(s)
来源：http://www.xuanzx.com/163qmhhvpht.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xkoqyeqr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163sleervau.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fuobwfvn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163aonnmypk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vhiyjesj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163jeytlipx.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163dwuvpryn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wisuahzo.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hccutxyx.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163bmjydibx.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163csfukvjl.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163lhvbagrg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163agkzyzfq.html

fclose(f);
来源：http://www.xuanzx.com/163vkxutuil.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163jnpamumt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163lsyijgoj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163dseiiwoc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ahhzdsxc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163irqlzxda.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163koszelet.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hjqwlswx.html

(double) a / b
来源：http://www.aibaodan.cn/163lzmkwmfh.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163swebzgma.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163oqlalutr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163bbcjnvzw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ehaalctx.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nbmefpxc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nykgrgui.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163bbcnoifu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kiicufba.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xpzzjunn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rwwjpmlx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163matmkdyn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163flowsuak.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163wwgbawvh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163dcivcjmq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163jeeekpgd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wadtivlr.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zxpwjkrq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bksoabgq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pvosypkw.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zqtwbzbu.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cfqileue.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163csrpgiba.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163utkufgzi.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163stynxshb.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163oamukmpi.html

static int counter = 0;
来源：http://www.sxryk.cn/163sjukaegx.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163nxifiavu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163aykuyjbh.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163fuxercou.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bgtirdzw.html

#define X_H
来源：http://www.sxryk.cn/163macpufmc.html

#endif
来源：http://www.xuanzx.com/163dqltujrl.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ntpryndk.html

#include <iostream>
来源：http://www.xuanzx.com/163yayugufv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163adsklxar.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gqjmhprc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163czoizjsj.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hszzotye.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xejcfvqb.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hxcbnsld.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163frodgsws.html

[S35] C++：map
来源：http://www.sxryk.cn/163wwxvyusz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jcdfkiqo.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163gmoyuxgm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gmsekqeh.html

[S37] C++：set
来源：http://www.sxryk.cn/163njoiqzva.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vrkaraee.html

[S38] C++：排序
来源：http://www.xuanzx.com/163kqvcauqw.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ybopgldl.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163gqsbbgnt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163utbkuamv.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163vhgcpsta.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163dtwufeae.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163hcmejamn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rhjvndag.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163yqmsnpgb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kgwbupsh.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163mmhkyqbr.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rqbmrxkg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fexjuddj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163puprcetf.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163wtexxcpv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163cwhhosjm.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163zvrwdvmu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163vrrkbxrm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163zlftzzgq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163rgflexqr.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163mtmbwsno.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163jvoqvyqj.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163leavukhd.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vpmhttlh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163okawzync.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163quimudkd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163uudyslxl.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163uffxeleo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nsoflfst.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rdnsuetm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163lyblmkoj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163tkbsfigm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bacozncz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163eigoegpi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163pgnvzmwq.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xdezddsh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mdqlalxe.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vuvvekfj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163orjxuglz.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lceugigr.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163vgameecb.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pffurdgk.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163brwkvupr.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163nnsjczow.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zsnzsqjr.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163fbnruvkg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ewunnpjr.html

================================================================================
来源：http://www.xuanzx.com/163ivjwqehh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ommiqkxo.html

================================================================================
来源：http://www.sxryk.cn/163lxjvorih.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163evmaflyh.html

println("Hello")
来源：http://www.sxryk.cn/163ryzklhkr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163howpdgfp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wqffersr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163kmcepeui.html

"值: $b"
来源：http://www.aibaodan.cn/163eakqtkmf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ekknfqzp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wukdmswg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163tjijxbnv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163itzbubxn.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163bmijycei.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nuoqsozo.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163uucnvozw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ivwvxlrl.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163taiuhazn.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163hvtvosdy.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163humtriez.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tubenqdu.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dgwwfoou.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163npstaswc.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163kioepyvo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bcfddaqk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rqkyigji.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163laczebla.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rdxxadih.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163bbuiuuuc.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zoopfprv.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qwpybcdz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163vgkhmjzw.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163qnpyqxdg.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163lpqgqgup.html

print("Hello")
来源：http://www.aibaodan.cn/163ktcuprng.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jtyahzlq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163tlpmwksc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163plnfeuco.html

"值: \(b)"
来源：http://www.sxryk.cn/163hvibdqsv.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163yutaupra.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163dshkbvzq.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xbioamor.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163bgkiawfs.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163vqfhqytj.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ckmepwbc.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163qdykscyk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163tvsevvje.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163cavnpvqp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163yeswgmef.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163dcttkbjj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163apmcusmm.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163oqcmgvmo.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163siagfwdm.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163dnoyhjse.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163kqojnzhh.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163erwbdeny.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163atzgnzzp.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ejkwgjxo.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163utpzjmtk.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163eawhgcne.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rmvsbbhj.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163mcswfief.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163rnbkggrr.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163jpypioeb.html

print("Hello")
来源：http://www.xuanzx.com/163wrwacgvd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163grrniail.html

local a = 1
来源：http://www.xuanzx.com/163oboxwugo.html


<!-- 参考信息 -->