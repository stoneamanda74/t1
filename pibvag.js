外链999!wailian999！

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163scwltrta.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163accdwwsy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163rinkhcxd.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qgesowmw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163eauvcfaf.html

[R26] 命令替换
来源：http://www.sxryk.cn/163iqlnnfrm.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163abvnvjlq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163vknlczvj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163feulkxrs.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ynvcrjom.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ceyqalol.html

[R29] 定义函数
来源：http://www.sxryk.cn/163nnuentje.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163tnbxfnkx.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163jeetcklu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jsjbplhp.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163spoemhhy.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163fquvblkb.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163wjbfznvz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163wjprezcd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ayutzgdo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163jwxwuzcd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qqfwnkss.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dwilhaag.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163rwchnmdq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163qhwlbxyv.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wlpaaojd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163awrjzunu.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163dhzkherf.html

files=$(ls -1)
来源：http://www.xuanzx.com/163trbqjaxv.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gypkjzai.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wbeulyww.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wihgoqeb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163xeufnbhx.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163sdtuyvcc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163uavbzqep.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163vdpqacrk.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ktonqwqt.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hsmrdlfa.html

wc -l < a.txt
来源：http://www.sxryk.cn/163srrdjnth.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bepcllyn.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163caekxzxn.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163uzdqsbbw.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163tavaqrgl.html

[R45] 批量删除
来源：http://www.xuanzx.com/163lasdnfbq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163whrgveuz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163wznsyade.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163nnlovpsa.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ymnvhlyl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163egnldmbv.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163wmlnupnv.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mnlzquvj.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ocnafrpg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ewoijhqr.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lmeovhce.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163qmyeiavl.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163tmvvqyrw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163avkispnb.html

[R52] 统计行数
来源：http://www.sxryk.cn/163knotqnji.html

wc -l a.txt
来源：http://www.xuanzx.com/163gorglwgr.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163pbquubwb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ggepgfvl.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163oluskffo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163cgdcshij.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kptrswfr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163gaoliijy.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163lajarzmy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163lteylcci.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ghfmdoww.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163cukxkwwr.html

[R58] 下载文件
来源：http://www.sxryk.cn/163jxiynhzd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163dxypmbel.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163sclbaics.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ndlkmtfy.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ghpmvovk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163brhkhmqf.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rtlaqzma.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163oezpsmny.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163aoyhccvt.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163orqctfis.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163yuvyrnvv.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163amjaqaoc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163sidrhows.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qkjdfffo.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ygrynydu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163wxqwhacl.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hxdyvdrb.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163gygdxnlw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163qbjescau.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163cvkoyugu.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163htsvmhez.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163rmmqnhqc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ydznssww.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163tyhfgbcd.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163cxyagqmz.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163jgisrjkw.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163cqtknmjp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163prjtevhs.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163kqdxcsbz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163nhftuusp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163btsspbmd.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163kiegexij.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ssrhtyqp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163lroavpyw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ptlensyx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wuowlcqu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163zoyjgcql.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163eqgbwcso.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163nrxobnfm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163cutmodkt.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163safhffzb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ckudmvds.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163zjcwxchc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163mwzorylz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ahymduak.html

time ./run.sh
来源：http://www.xuanzx.com/163fwnmfixz.html

================================================================================
来源：http://www.sxryk.cn/163szrkpegb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163stjqyjfr.html

================================================================================
来源：http://www.sxryk.cn/163kutdzvvz.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163pgymtbql.html

#include <stdio.h>
来源：http://www.sxryk.cn/163davfcigr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ckbbgvbn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163unxmviwa.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163sejyvqod.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bovfobxm.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163tqxeksfy.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jrlpvmla.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163lkpwtrtj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163rkutojha.html

strlen(s)
来源：http://www.xuanzx.com/163wiwiutcs.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yufrrbss.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163zuwqniwo.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xotiaped.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163todoaflg.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ucjvpnpe.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163vkmtsbks.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163fnwbfbiz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163umuxgcqq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ycuelepf.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163kwsfshgv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163rywjdsjm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163bahrpltz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163tjwdnwey.html

fclose(f);
来源：http://www.xuanzx.com/163oioacvkb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163rgczxotk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mtnldcdy.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163pocgdndp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rbpzawbg.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163oqrbdtqh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vzpgoylo.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163kffrdhgy.html

(double) a / b
来源：http://www.sxryk.cn/163ktwphpme.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163fgthyfco.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fvgpzjxh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163duncyvdg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163vnsbqixo.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163kuwjphza.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163bkhsrmkd.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zttcwtsx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hwttaeaj.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163otlzcnxl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kivqgqnb.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163kenkcfid.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163bggznyxv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qocclrrw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163dqljcgda.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fmsygxhi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jajqxuap.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163froeijah.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163iwklhqdj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163hcpbmzqa.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163iqgisfyz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163grpckcpq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163xefajufc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ohutlugq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163omobqfcp.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ozfdznvf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163brbidyxu.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qtjuujsp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ibyhnxdt.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163imnfcwsj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163cliojowz.html

#define X_H
来源：http://www.sxryk.cn/163rjxuwrhp.html

#endif
来源：http://www.sxryk.cn/163dvhmnjbg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163smuxlpnr.html

#include <iostream>
来源：http://www.xuanzx.com/163konpvbpo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163fbqxdllu.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vhnbpigy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163saihcsxo.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zrrynlxt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163jyhfzguy.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163oocwzzim.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xdriexcd.html

[S35] C++：map
来源：http://www.xuanzx.com/163csdfmlzx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163sbqozvgz.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rzsskknr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xhlsvxsh.html

[S37] C++：set
来源：http://www.sxryk.cn/163lxqnsiim.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163awsmnfgt.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hpokzaop.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163rtxptygj.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163torvpwlw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163smrwbcmm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163rmcybgbo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163rxaevoun.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163khttqgfm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163empcufzs.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163cyjgsbst.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qktbqmfe.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163lyhquhhn.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wcsbvbhf.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kfztomdz.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163zmkqzrzk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xfoxnijs.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rntdwgux.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163oxgzomrk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163sixrifyw.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vizndsvh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nxyvgdol.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163civgfuvx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163unxlmpbm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163fvfxtliw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163wfwnsqfu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ilyyovkw.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163thfapyzi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gimfulnt.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163kdruxegm.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163gbmfifjz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163gittafvn.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163wrgspxud.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jrrsxszp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163qvkwqvjc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163yaihkcdz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163wuksrplo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dkwxaifr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ndeyjjbg.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jdbvdhjz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163amcrslwo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163czfwhwxi.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163eagcqibt.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163duaaduav.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163wvksafrk.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163mmebsxuk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ynndzvmc.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163mbiwruva.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hdicesrl.html

================================================================================
来源：http://www.aibaodan.cn/163yxumfmlw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163kpphgcsb.html

================================================================================
来源：http://www.aibaodan.cn/163uerfqlln.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163hzcwfolq.html

println("Hello")
来源：http://www.aibaodan.cn/163tpjynzbx.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rwedddcf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163fbpftdkt.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rtuplrxm.html

"值: $b"
来源：http://www.xuanzx.com/163qyocxjvw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xaqzkhwa.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163tbsvwvuf.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163bpvoynqj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163csiwknll.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pixtcxsn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163nkzxeffa.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163cfvknvgj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163salswcrk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163cjljohah.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ttvopyoa.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163pcgycrfk.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163fvcfxofg.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163lckoibyj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163yvjygniu.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163srbbehsl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163exugltmk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163elgrxznv.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qviwjkeq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163rlddygns.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ceawqxqx.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fbcnbtgl.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fdaomudt.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hrtfnyoe.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163slunnowz.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163rxmogxqo.html

print("Hello")
来源：http://www.sxryk.cn/163mnjzmpqw.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ihejclkx.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163gajlhabc.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163kdqrtqdp.html

"值: \(b)"
来源：http://www.aibaodan.cn/163agtlcnfk.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163jkszovvb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163qlrtsjbh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163fstmezcd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jmusygrh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163udhswjym.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163otamzmnb.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163gtkfkbdz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163wicuwnzy.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163jmpyqqrs.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163lmyxrojl.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ctxduajd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163applevdp.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qxxyazow.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163iztoqdna.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163tiqitzui.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163vbfjtpml.html


<!-- 参考信息 -->