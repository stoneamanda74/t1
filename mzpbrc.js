外链999!wailian999！

echo "${#s}"
来源：http://www.sxryk.cn/163lzlltedt.html

[R22] 截取子串
来源：http://www.xuanzx.com/163juryekzn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jukyzpyo.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163dxmjhdzm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163zkkwgket.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ktjnlmhv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nptorbbo.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163xzletnar.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dkeegusq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163gehikpkk.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163bgnbqixn.html

[R27] 算术展开
来源：http://www.sxryk.cn/163hvczhbox.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ukbdmulb.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jcmmhdrh.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163sdefvggu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ofqxeqde.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163dirrfaql.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jkuuyrke.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jvxktire.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163nrfhnptd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163dkokdhhu.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bmtnaxvg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fxaknjyf.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163mdljfyhu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163trxorbtl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xlmdsbzz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163aasucujg.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zmyvaaxw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nkyakonh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163sudlwytw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163fuyvtxfa.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163tmmczgvc.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163odcnivgw.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hbkhugwa.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ohcwiwqr.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163sylhiklm.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zgaaoivu.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163xkkdpblk.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bnatflpr.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163bqakqjrf.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163nhzzdpkj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163fexdrqcn.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zaabxxal.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163bxdzvknn.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fduwgmrv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163dgedtdgv.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163lasocnqe.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163telvctdy.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gtzeppsj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dfaudwgs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zhwziqbt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163slujxiku.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ircepeua.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163nzfsaamx.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ootuebop.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163tjrkseem.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163uarmkkel.html

[R50] awk 求和
来源：http://www.sxryk.cn/163weuxphzt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163nvlztqza.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163vgrbysyj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163fzatnaot.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163prfyemfs.html

wc -l a.txt
来源：http://www.sxryk.cn/163qxhidmpd.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163sknbdpkd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lcyrncpk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163derpsvee.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vlyvfyvk.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163xujghwlc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cbhtkgwm.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163bouqpfjt.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ikkgosxx.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vrdmjqeh.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jvycozls.html

[R58] 下载文件
来源：http://www.sxryk.cn/163fvhnbqro.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163dobnvwwd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163byvvjaym.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kycoyjai.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163pulogflx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163npvnbisg.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qouxmctv.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163frnrlzek.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163qdtvtwfs.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163kdpsnzrn.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mmqxvphu.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nmghtdfl.html

[R64] 结束进程
来源：http://www.sxryk.cn/163sgydifqa.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163phggqfzm.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163oahcivqp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dlbhcjcu.html

[R66] 定时任务
来源：http://www.sxryk.cn/163bhxcjque.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163gvvukovg.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163vhrzoehz.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163lfqbjubk.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163lqoqnnfk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163wxgdfkzw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163cfhksrmi.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163htiizhbi.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xnhejzgc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163eprhptan.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mfdhgiqw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163yqmdauax.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163crcdizby.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rrprdypz.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163keckuopv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163keyjwgxj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163zdgcccvh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163byurdogc.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163eddjzzis.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163uzenxkhh.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163vnjjihsk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cxwuarbk.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163dyvjqqtd.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163wjcuntjp.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lyznhohd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ksyckphb.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cjwxfurk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163tcbkqjed.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163qqsafejw.html

time ./run.sh
来源：http://www.sxryk.cn/163nhrnpceu.html

================================================================================
来源：http://www.sxryk.cn/163crprgbxb.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163qrukdtcw.html

================================================================================
来源：http://www.sxryk.cn/163unekbezu.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wbblrmvt.html

#include <stdio.h>
来源：http://www.sxryk.cn/163atbvdkvl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163pcdocqcv.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163knbsoqxt.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163obunctfa.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163sncaaxdd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qkgogolf.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163xbkeuate.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163lxxswdgf.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ipqycdpm.html

strlen(s)
来源：http://www.xuanzx.com/163kskkumjn.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ptaztjpp.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163vrnkvmfr.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163gomjfdxs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163bhsarmhf.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163exmxwuey.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ktvdbecx.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163gidmiusu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lgsvraoi.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163cixckdum.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zebdbmtc.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ddllsudm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163lcxbhffc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vhjzrgzi.html

fclose(f);
来源：http://www.aibaodan.cn/163hpbszslx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rldibvqp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mpgbrxte.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163fnnwntjf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tkewjgaf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dkogxezi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163kuutkhpx.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163mjohuxzx.html

(double) a / b
来源：http://www.aibaodan.cn/163tauwmkwk.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163jputqviw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163oflplond.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163zgyscecp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cpbvrtcj.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163uulrsjyo.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163pofjnorp.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mgdjnciq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yjattspq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163shtfvtlk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pcaplewm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163taulhmgx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163uabqlsvb.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163zypaxpqd.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nfbazdmt.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163nzpojqjo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163afberffu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163dyesxijm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163izlguxwq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tuymvssj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163dvwcauwg.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mebcljax.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ozhebvsu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nezjbynq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jjjhzhmn.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163uxzkeuvj.html

static int counter = 0;
来源：http://www.xuanzx.com/163hvvsflgu.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163tgjrmbim.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163sxagfydo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163yunelxob.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ihvunmlm.html

#define X_H
来源：http://www.xuanzx.com/163eaakwpto.html

#endif
来源：http://www.sxryk.cn/163adgkhpwu.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163lazfyogz.html

#include <iostream>
来源：http://www.sxryk.cn/163vtrfrcmp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zdskolfb.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163zfumydod.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163oqkrgwqf.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163crweptmn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zspfaczm.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163tlywvxky.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rcamtgbu.html

[S35] C++：map
来源：http://www.aibaodan.cn/163plsajsme.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ycxddrlr.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163jcloynvx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qbpcprdl.html

[S37] C++：set
来源：http://www.xuanzx.com/163fnniikou.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163oyywzrmm.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jvvyweji.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163yfbyofqg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vchtdcmq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fokkkzcz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qjthibaw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163sidsfiyi.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lfjosgey.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163bspmmcbn.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vdzsqwpb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163kroimijq.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cxsjeote.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163uofywkug.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163emxqzskp.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lvrcpbic.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163fyuchxho.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163jyebplcq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ljfjreak.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163skjlpyzs.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ikajhbmb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163lokmwdzu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163icwolwum.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ynofbczx.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163wsumgizu.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163sykbsauf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163svictqjn.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tpwwfqas.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163actuirvj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vgkidytc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163kelrcawy.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163bcvjftbf.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163lvajspyy.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163scapkuhw.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ekmesnyb.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ppbdgmfq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163hjltodnn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163monalhjd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vccrlhjm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163awaimetp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ysmkdngi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dzhfkutb.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163cunobwjd.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163zzzzyvis.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163eplzbzli.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163hvsekdab.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163mzxralee.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ofobzmtz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163aaoxitvu.html

================================================================================
来源：http://www.xuanzx.com/163tofbxlhz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gatygbrs.html

================================================================================
来源：http://www.xuanzx.com/163kzbaljgi.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163tfwqtjyt.html

println("Hello")
来源：http://www.xuanzx.com/163rypmwrin.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163izrzxabp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163nwrncipd.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163nbjxfswx.html

"值: $b"
来源：http://www.sxryk.cn/163jkgzwtid.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163cvupqopb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163jlamhfyu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163zvcvhzpj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163cquljxrz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163yitbwzvw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163lqukxpel.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163zhyimthn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163jmhdnkxy.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mfuotvym.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163oefbeuvj.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kovdukdw.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163axuhuhpx.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163sjldcftx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163rdkrjuoi.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zamzuidl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163zozbtxtp.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kafoceat.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ltqpqtvr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ciwyasxi.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163sysxjfpp.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163fwufmqws.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dlsmxejk.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163jksetbbs.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xwksicqw.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163nbiwmvly.html

print("Hello")
来源：http://www.sxryk.cn/163oeslkdmh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163uwvxmtmv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163wiwakkpb.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163nuyofxts.html

"值: \(b)"
来源：http://www.aibaodan.cn/163qauvijvm.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163zdemzyiv.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163jyseryjz.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163fbamyrjw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wqaagyfm.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dtibocyr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163stjyritv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163rtcjcixo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xvyfkesn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ovgfrgud.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163emjlhbpa.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wdgxtxzc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163kauxcgly.html


<!-- 参考信息 -->