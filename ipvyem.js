外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ojutesrx.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xvexllck.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163nqmrzmxq.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xrqcdxgc.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163spfswrte.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163pfwidayc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163kjcwkgty.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163nthlkbck.html

echo "${#s}"
来源：http://www.xuanzx.com/163fkahuqdm.html

[R22] 截取子串
来源：http://www.sxryk.cn/163qqxfnsza.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163abzxjgsa.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163outpctmz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163reecibdk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163husocerd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163kdgtqdex.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xhzciise.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163bfiabupk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163skxhrcmt.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163uaeebgaq.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ohhsogbl.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163bhdhquoy.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163yoxihupq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ujleehye.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ppqqyyxk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163mselfoih.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163xprpxogv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163pkipcgey.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nbvakjwc.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163shffdrkk.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163lafayblq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163xmkpatib.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jirpntjx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163izfcpaiv.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wssmhdup.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mqgnboxo.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163dghryfxt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xhdxchiv.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163opxgssjd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pqamzccw.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163bmeksygm.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jbyuhvlb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163vgtbfuin.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163rykchlpj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163wyyihufz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163xjuffebq.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163coyzgajm.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163olybxfig.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pbnznljz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hosohdao.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bpgbnqxx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163fhaczwoq.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163bjyhiksg.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qmpoxhar.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163adoooveo.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ktlktney.html

[R45] 批量删除
来源：http://www.sxryk.cn/163faczdzge.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dmtksajp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163yuwbikrg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163egtiwecs.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163xixulyjt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163nlqhcefa.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163istzfuak.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163fjfksavp.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163oytmrnlc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vskptnln.html

[R50] awk 求和
来源：http://www.sxryk.cn/163kcdugtxk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163mkousyxv.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163qumdpjyw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ehtntnyy.html

[R52] 统计行数
来源：http://www.sxryk.cn/163vnzpusxs.html

wc -l a.txt
来源：http://www.aibaodan.cn/163klvqtqzv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163lekusvao.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163poxwkbvt.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163rutjpexf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163osjouqrx.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163nnvlmnxq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163zsguctxj.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163pszcflbd.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gaoopvns.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163njjunwxw.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163viaswzze.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wfphfpmx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163qooqnkpr.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tmpmzpao.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163eonskdqf.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163epauhsal.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ciencxuz.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ckeeiicj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rlwnvnbc.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163gqahcger.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163gqqtmnnf.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163buuprbqe.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163gxfwxclk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163gpuoqvpp.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vrivoryv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163pzwtbyfm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163epshmhlp.html

[R66] 定时任务
来源：http://www.sxryk.cn/163mvustkah.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163zbaoxnmh.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163hjunebhd.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163vixarhtz.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qxkjjcpt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163znmqfyfd.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163dikukleu.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163pliaeddb.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bjnabjee.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163yqqtbvra.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tlmdfmwp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163bkvztojn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bhdkzaed.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jihbumix.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163llhplhgj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jrerdcrz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ozrkvvis.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163fpilacbm.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gypkfwfu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163dloetarq.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163pntamlsd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ecaeglzj.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163daknywlc.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163hymmcjpf.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vifjqzeh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163iwlbmbea.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xlithuvq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bpdxxqta.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163catveoub.html

time ./run.sh
来源：http://www.xuanzx.com/163hbaxpafc.html

================================================================================
来源：http://www.aibaodan.cn/163rpkcrbzb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tmlkkqdy.html

================================================================================
来源：http://www.xuanzx.com/163paogptqj.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ugadcosy.html

#include <stdio.h>
来源：http://www.sxryk.cn/163iaphnhpk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163pvlclefx.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jwgfrlih.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163salzgssk.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163mriewoxz.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163egngvium.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163lsqykgos.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sehmcipw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vwycxfnh.html

strlen(s)
来源：http://www.aibaodan.cn/163jtldlycm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163gbkqjwli.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163chosfxfp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ulhvkbgg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vnwyevda.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163aegewweg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163uplhcwku.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mcivesgn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163dylpofbm.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163evztbhss.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163yguzsvlf.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xlkituzg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163tzqavtxw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163zchrrcky.html

fclose(f);
来源：http://www.xuanzx.com/163ywgyxduq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163falzlveg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163imqqbulk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wjioxdcz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163mxjkycuv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163txjybana.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mvwwzusm.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xeclxbpi.html

(double) a / b
来源：http://www.sxryk.cn/163ugsbahaw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163uxegkhke.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ehxsjofi.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zsejmuyz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163lfpglbqn.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ntmkdolk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163oxjigfjy.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163apdimzzj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163pvxvdbym.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163taiihftl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xopenrry.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163obdfunzs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163fejctled.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163xyndsxbc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163udncapsx.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gomjmnra.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163yxpmcqyr.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vjbzavbe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163gaelscam.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zgsggeyb.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gdgmgjru.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163cerzbdlx.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kiejomvx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wwsddxaz.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163imfiumek.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163vauuwhjp.html

static int counter = 0;
来源：http://www.sxryk.cn/163ggznxjrf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ubsanmyp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ggktyhrd.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163wusxqskx.html

#ifndef X_H
来源：http://www.xuanzx.com/163yqjndcui.html

#define X_H
来源：http://www.xuanzx.com/163tarhphpn.html

#endif
来源：http://www.aibaodan.cn/163pknnhshg.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xbxrazae.html

#include <iostream>
来源：http://www.sxryk.cn/163mpczjrmg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163fllnxhro.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wuotpama.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ybydbmti.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163tnuyxmtm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zhxjvyyl.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163gmemqgjz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163inlfycwe.html

[S35] C++：map
来源：http://www.sxryk.cn/163xeqexvqs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163lpuhrmif.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ktyqnlwo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bkfdjnvm.html

[S37] C++：set
来源：http://www.xuanzx.com/163errjwmsc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163hivfnoes.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fbrtfuzh.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163slnbgafj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qkyqrcfb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163nvtoinop.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kpcbndwc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qxjajaii.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pyvvprvb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163nndvdmbz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163msunotjt.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163jfjbuoof.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xxtnxbsx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163uxnzgtyo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ebirynbu.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163zdsknmit.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hrjhwzyb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163swtltcrz.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163munymrfp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163kbothnnt.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hzozlrgk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mffwpfyk.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163abmplujf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hgtinbkt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163amknaixa.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163gtzejpao.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ryslxghe.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wgxrpesp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163twgbispm.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163gkidmxfn.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qvzwgngc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163aetzajko.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163oueiandq.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jdsqsopw.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uftagpay.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163cwskikuo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163wvnoeubs.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xstosduk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163kzuzmgul.html

[S56] C++：optional
来源：http://www.xuanzx.com/163resfkean.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163dkaseyut.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163bnxccepx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163uweohgzf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163cxesvrwb.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163jamdhwfn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163srypmqum.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163thiimbto.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163uxjyodri.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163tduonctn.html

================================================================================
来源：http://www.xuanzx.com/163hclqgjgx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fujydfin.html

================================================================================
来源：http://www.sxryk.cn/163zmnrsrff.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163epfjcvsr.html

println("Hello")
来源：http://www.sxryk.cn/163fplegbgv.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163nztkklwm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ohlwsuss.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ajgaahwk.html

"值: $b"
来源：http://www.sxryk.cn/163xrwkaijb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qexdlzit.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163yelrcyet.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163fgqbjifi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hkbbrvdv.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163horoqbdy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163uxdjztkh.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vwuifddz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163kzsbmldw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163pqofkcwx.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163qmdcwbsv.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ocsbqkfq.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wzbpzgbk.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163bdnyvczc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163lafomkff.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163yzawsfiw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163aktmfgun.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163livbwzvl.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ipaubrhe.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163rjfltpzg.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163yjaalmlw.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163stgbhedx.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163oltbhgiz.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163vlcvpvnq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ccmnfwrw.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163bgpjhbxz.html

print("Hello")
来源：http://www.sxryk.cn/163baaxshdl.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163jmlfxjdw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163skkhwpze.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dwphruwy.html

"值: \(b)"
来源：http://www.aibaodan.cn/163vfovwrnr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ylyhsude.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ylutdyas.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163egjngaax.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163isjmdlyh.html


<!-- 参考信息 -->