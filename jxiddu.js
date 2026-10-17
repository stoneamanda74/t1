外链999!wailian999！

echo "${#s}"
来源：http://www.sxryk.cn/163motxcveq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163dcsmcvrx.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mcxkjbdx.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hbbtpsxu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ocxtoenf.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163otuusliz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ofizpoph.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163gmnhlemu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ogimgeip.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163tanosebs.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163nhymitfs.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163cxzmzgxj.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163kzcfjknd.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163zusxtwon.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163hdhlxhkn.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xosluyha.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ryjmtfqn.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163lezbcyri.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163npzqdxcb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163tspfoisy.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163agjhtgow.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163dzbwtpxk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163bykyhsjn.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jdwomoxg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163pmuzuenq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nbvzvtfs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qcpsoypn.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jccjojbz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163pnecgfih.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163vmydoyos.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163eppcmlzs.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jedshcsu.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ujqoexpm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ebmolumt.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163nsuqusob.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163upgjyzue.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163odfotisg.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163flngwmfq.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163whzxrfzv.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163zvhctiiq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ihrzhgxx.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163wdtiltfi.html

wc -l < a.txt
来源：http://www.xuanzx.com/163afkdtxhw.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163zdyonuoq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163tpdlrmql.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163myozpoxq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163hntexqpw.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zvlkrkog.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qqflrvqt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163uitfvqza.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163uimyconl.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163grcfgpxf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ijyzpgkp.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163sjojzxep.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163onvzizms.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163qraignnh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163jwtabfym.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rcsjwpqb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163jaolgfhn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163keovlljh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163rdcqgcbl.html

[R52] 统计行数
来源：http://www.xuanzx.com/163pdtmvvqq.html

wc -l a.txt
来源：http://www.sxryk.cn/163kndtcwhm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163arjmbwks.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163awojhyta.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zkeehnbz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163xfqlxpoy.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163cxmcpbdn.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ghcetays.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rbhretet.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163wizfvsut.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nqxixmdx.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163dgqcacha.html

[R58] 下载文件
来源：http://www.sxryk.cn/163lekxloie.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163chfuplvl.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163kidqoffh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rtuykgmx.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mtqnnxfy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163xsxchhcu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qhkxinnl.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163uatvohdd.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163jkpfxigl.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ywwmeubg.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wqvdbmcb.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163eelilspz.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cpkjknha.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163uhtrbcaa.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163scfcfhgl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wxkjzlik.html

[R66] 定时任务
来源：http://www.sxryk.cn/163jeqkxlvm.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163odeufadf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163uyfbfhez.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163viicritx.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163riwlgbaq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xdulswam.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163uxmgxikc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163hoobkvik.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hfvnboqt.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163yqqhqbix.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rputyjfm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163eaukayqv.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hipwtlcy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163pvfkgbls.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xuuoqrcb.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163temytpmj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163tbxssmfn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163pfabdwal.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163nbptirec.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163fcsttacn.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163sonrefsi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163diidqtzu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xxevcgpn.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163sbkndohh.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163uzzdzuse.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163psdyshbl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163uebzahch.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tvjyknxk.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vyalcyqr.html

time ./run.sh
来源：http://www.aibaodan.cn/163fibfdadc.html

================================================================================
来源：http://www.aibaodan.cn/163omygcrhz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kqoewlqm.html

================================================================================
来源：http://www.sxryk.cn/163cqmilnrg.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lpoisohi.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qvyqqyox.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163nodmcvvz.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163glrfqomz.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163kjzpbrnh.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wqdrfrcd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163yyozwmsr.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163dfxheevs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163jcxoryjp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ehkqbnsy.html

strlen(s)
来源：http://www.xuanzx.com/163uwpcahjq.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163txexycjh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163nhmcojkd.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163uqkyfplk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163wetmwymj.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hqzcflhm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rvxjyiyq.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lbubqgso.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ntrcmktc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xwejbqla.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jdjpcheq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wwjpxpma.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163tjkhqder.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163isfpmngr.html

fclose(f);
来源：http://www.xuanzx.com/163uqnvaurb.html

[S12] C：写文件
来源：http://www.xuanzx.com/163qwhchyle.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163kyhaizqr.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qgmzburc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163omuiwcfr.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hvrhjyrg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ucqlwift.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163lepmmtic.html

(double) a / b
来源：http://www.aibaodan.cn/163ngkujwao.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163vnmuedml.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ekakuawr.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mnnqobkp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163unoqlfdu.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163uwkojgah.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bxzxfhte.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163goqmviuf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wloedxpm.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163smnkwufi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nsjrhspg.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163jsbirlkm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163avshsgrf.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jqwisggd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zdrhsdex.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bcrxabzy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163zptrobhh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zljrtokv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hqmsmunh.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vqepwtcs.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163iibpreqz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163mfqaeqmr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wjdhdkhb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163anvsmame.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163tntyokxs.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163tbnqleaw.html

static int counter = 0;
来源：http://www.xuanzx.com/163ypxyembo.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163vubnvwjj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zkchneuf.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163afwdcxgm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bdpxtlox.html

#define X_H
来源：http://www.aibaodan.cn/163mkonxpsg.html

#endif
来源：http://www.xuanzx.com/163iulecfxn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163vpfewjjo.html

#include <iostream>
来源：http://www.xuanzx.com/163ejkcxrbj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zhgtpcty.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fftolqey.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163clmfbkju.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mxtcelbl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jormqeam.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163mllqsgjs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163bqcbfpwu.html

[S35] C++：map
来源：http://www.xuanzx.com/163vmlrqbio.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gmclxnbz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163paxotjqi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hjkuerlr.html

[S37] C++：set
来源：http://www.xuanzx.com/163nvwvvhpk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ywhdrpjm.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qqxifknj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163bdehjdkk.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mdizxpjy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163vwarhabg.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163nbcjzcof.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ibwfzjdh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ndvrxizd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163saijmvej.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163wdhshqcq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zwfxohqk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163lbjrzcdk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nrzxfnux.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hlnkonfi.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163egqkqwrj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bzoxvkmv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163eyxrodpw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ebinpnjg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fauxdhme.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163irvlxssu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zputhzmv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163eamngrau.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163dbfwtjxi.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163aogykkjk.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kpsjhmht.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163vqqhnmob.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163znqfefzh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163bvexcqcr.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ehijktap.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vhkhkycq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gcymnwty.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163rgldqvjt.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163paazmaqo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xvduikbu.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fomtldkw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jhmdekjw.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qmwlqsjx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dgvkajvp.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kwdphbil.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163pzpbrpfz.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ccpuengp.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cophzctv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163teqcspmj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xhnkefeu.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163kyocutbn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163entreskx.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163txsttncj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163makyykvv.html

================================================================================
来源：http://www.aibaodan.cn/163phkxjdpq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tnojszny.html

================================================================================
来源：http://www.aibaodan.cn/163cewycquh.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ftbzcnii.html

println("Hello")
来源：http://www.aibaodan.cn/163agnlejjd.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163kmafcdlv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163lzfpsqos.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163cyknfhal.html

"值: $b"
来源：http://www.xuanzx.com/163lizdmivt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163pzvkcwwx.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163anwpoytt.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163plstszzq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jqmkgxgm.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ncprctar.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wmuimdrl.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pdonlhwm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nqqwmuas.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163kwyultpf.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163nrzhqlxe.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163pdcgbjaz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163fztmiglr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163kannczrm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xeqqecwg.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ynkydsrz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163cayaraon.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163rxwxqmnd.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163qczyhfkf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163fypctxoj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ivuqhhnf.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163dvwptesj.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163rqdfituc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163vanpiezx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163utekrtmq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163bklrmkxd.html

print("Hello")
来源：http://www.aibaodan.cn/163cpttzont.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163lztmafde.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163uutbwunq.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vktzuozp.html

"值: \(b)"
来源：http://www.xuanzx.com/163xwnwkepp.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163brecneud.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163baxtrqii.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jaozwjoc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163cscngtnl.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163obuwrfvt.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163qjxackcq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wsbqkvvc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163vlpdbsrr.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163detcfkgq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163milliyuh.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163obptqtny.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163mzgoqvrw.html


<!-- 参考信息 -->