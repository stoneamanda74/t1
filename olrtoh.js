外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163llwdbpym.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bybwxgax.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163qketzdik.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ohhnosat.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163rtxutymi.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163bkcajmnz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163eevfyvvc.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163czlvncmf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163yookypmf.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ksujxfup.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ckmsakzx.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163zwcjglzh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xlgrdufn.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163xgwugwkf.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163novnrecr.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163saxhwiji.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163lalljrba.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163psntmcxk.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163nbdhvwrx.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ncyozcfn.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163zzhkipmo.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163uclinvkb.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163rhvnwvpo.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163bsgmzjnu.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163zkiozwnd.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163kzanwrkc.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163oopvxnpy.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zczlfwgf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163vwxglwwb.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163hjdxkmau.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163pqnykgqt.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163nxrjelhe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163labdkjqp.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163qdpbpsty.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kighrzbp.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163mytzedol.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dipuhnai.html

[R50] awk 求和
来源：http://www.sxryk.cn/163meewksmw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163brqzjhjl.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tvbtyzjb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163tlfxbjip.html

[R52] 统计行数
来源：http://www.xuanzx.com/163njizwxgt.html

wc -l a.txt
来源：http://www.sxryk.cn/163xobimlpw.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163lsxivnds.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163erlqsdwe.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xgmcosou.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ciezhnra.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163aejkzdng.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163hwhtaoap.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163gsozdtdh.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163admggzys.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163oeaxwklm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163drdgadfh.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tpzwejtj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163fscjbbhd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163rpelruns.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163zsmhqybp.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163luslhedi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dzgixncd.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163utzevbzm.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163gxsybbtl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163evdnffvx.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163dpifrlst.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nqadapbr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163nivjrvrn.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163vnqhikao.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163gvisckgo.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163sgblozms.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163gqzjgqaz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163fqhbnhju.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163oymfzltb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163nniwksni.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163lkchgrmt.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163txotqqlb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163jycuomdr.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163uehfbcbd.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yjmpbjdc.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163uvlfevug.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163gkaqwcwo.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ljgcvuun.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163sjrkbzih.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163iaizrhsb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163eugwfpsx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163eymyvjmj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ifbqjiga.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lmaifmgh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163qsobhnxs.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qsadwlma.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163bvbelsdo.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rsislizt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163evyqvvpl.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mmgccjlf.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163tapfgbhk.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lrvpqwfj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163olpbunxl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163uudiriqe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xkkiozqp.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ejtgiyef.html

time ./run.sh
来源：http://www.aibaodan.cn/163bxmgvvun.html

================================================================================
来源：http://www.aibaodan.cn/163ohuckffu.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163dxdibflm.html

================================================================================
来源：http://www.aibaodan.cn/163ekwlrfqm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163auxdqvtj.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zztnugna.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163okemtgkt.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163qdybrhdo.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163puxagous.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163psuanodg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ckfrppfp.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ycaplhnq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163izdetxsq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zcincvao.html

strlen(s)
来源：http://www.aibaodan.cn/163cttccecf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163xtodcykc.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163mqkgpghe.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pyfrczsw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163cleyzcna.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hwbgctlu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163rmjpfxnr.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mxqlwdvw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163anfnqxck.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ngjcxavb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163rbczufef.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fxlldfoj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163lqojlehs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zazwehcq.html

fclose(f);
来源：http://www.xuanzx.com/163flnkohwf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gvigjcvx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zrsamhdg.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163blugpggh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163fpvafxrs.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ehonzpnf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163asiyyzzz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pwxravxp.html

(double) a / b
来源：http://www.aibaodan.cn/163vwweemck.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163siptanmm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163cytswszj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mttizxqs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163fcmvbhca.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163keyjgrdu.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163qokclocl.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163mdjigryi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163prdxmmqt.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163qunjvzgn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163irzbqflt.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ptjdxexb.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163gpkpcqyz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163sahpecib.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163idevrmxb.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cxgovdjn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cpoanumk.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163pjzzoiwu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jzcminbs.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163iutzdhaq.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vnsnvlqg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163pcmiqwcu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163effsslyl.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163bczuojch.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163uvgmvsdp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163uqrgsroz.html

static int counter = 0;
来源：http://www.sxryk.cn/163fcfsoeey.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hqcrthjt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vvxzleyc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163gehjypqs.html

#ifndef X_H
来源：http://www.aibaodan.cn/163qbhlgwqw.html

#define X_H
来源：http://www.aibaodan.cn/163pdwirikk.html

#endif
来源：http://www.xuanzx.com/163diwhaexj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wlhhtybz.html

#include <iostream>
来源：http://www.xuanzx.com/163weyuqner.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163waxlzvui.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ehqttcbb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hakugxzj.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163thnsiajy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163flppckkg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cehnfovk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kjgeuque.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hkgwnela.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pvjrwjae.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163lgbmcgoo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ceihziyg.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vjmheqsr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163prcjopvt.html

[S38] C++：排序
来源：http://www.xuanzx.com/163lqhamjav.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163lflpstke.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tnhxknjq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163oiztyvhj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163comryvwi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163tlbrmlxd.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163meplyvir.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163xtnmkodj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163prvcfjaf.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163iltqydjz.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163odxcteci.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163yqjxgnzb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163jllosrwz.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163dimxdniy.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163isaybkpk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163uxasfmlj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vzoldqfu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163cusbhzgj.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163dinytjgg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163zcliykuc.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163plxaauzc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163txyqtgmm.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163aewduqoi.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163nwysxibz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163unyrkaul.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163azeqlbsi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163sblhmmlh.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163mbdbuzwn.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163rzgngyck.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163tpvtqsyw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163cxbbtvnv.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mbymxuec.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qmbrergp.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163crkqimkz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vocqhxin.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vddysjmv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163gzusrhlh.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163cspkeldt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163jvxiavpv.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wlwzkqgk.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163esaydzpz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qvzvtapw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163oaxihjuu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zmaewfim.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163chluvwcy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vygmqlgx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jxlehdln.html

================================================================================
来源：http://www.sxryk.cn/163dhmtqrrr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163xwledkzz.html

================================================================================
来源：http://www.sxryk.cn/163fgijndod.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ybeioxaz.html

println("Hello")
来源：http://www.sxryk.cn/163mfosqnjk.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tnjqghjd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163moptprdr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wacmedky.html

"值: $b"
来源：http://www.aibaodan.cn/163tmfxiejc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163unqkhsca.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163slofieol.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163mcovfvme.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kmrhbfby.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163cnfmsgou.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163gkgrscsk.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jeulsrhg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bzyeptfc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163zxoxdtsr.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fagdjxle.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gthvrjix.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163wuxpvqqj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vqewkemf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163kkwmklpu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163aahklgpc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163dhbnejhn.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163meeaakhh.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dsukadxj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rrqokigw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163kfqepjgi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ajmadkza.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zyyiltki.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163breilvvf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163bpvmrsad.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163jdaonkno.html

print("Hello")
来源：http://www.aibaodan.cn/163tfybzgki.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163arsnnmjj.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163lscidbud.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163jzacaehp.html

"值: \(b)"
来源：http://www.aibaodan.cn/163izeuwfmr.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qbxzzyxf.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163edtlzmph.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163jshdgxyx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163honvyxgn.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ojlcnzva.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163akvydhab.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163zajhpzcg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163sqavspjk.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163mirgvqjv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163uybnnwde.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163qdotnpjf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163swkismtj.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xtbaptvz.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163epolhhtx.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163xkhtxkom.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ggvcddbh.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163qwrugahc.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xoccbedo.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163fpccyvuk.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ywvobscn.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163kqppfmzp.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hghcgnxp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163nucuvuai.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163borfbxfd.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163xzpeleit.html

print("Hello")
来源：http://www.sxryk.cn/163ropaaenb.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163bkfflyks.html

local a = 1
来源：http://www.sxryk.cn/163vegykgvi.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163oqwzedlj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163wrwqjyha.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ajjohuqk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163lzshiyex.html


<!-- 参考信息 -->