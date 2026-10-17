外链999!wailian999！

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163tpntanlv.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kxzprmht.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gjutnuxg.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wjwfrxuf.html

echo "${#s}"
来源：http://www.aibaodan.cn/163vtjudfcj.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ccxydzvv.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163unvqspeq.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163octmukez.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163peplhtlw.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163aluxoxec.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163blwyxofb.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163wnuuxkie.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163gxeajpcy.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163oqudcbjm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gubprpjk.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163fsjgknjs.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163szqdnhwi.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vpxbidur.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ewzfqnwt.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fdrsmkek.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163qbncqocl.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163eportvgd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163uujejafu.html

[R31] 局部变量
来源：http://www.xuanzx.com/163orwyoohq.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ivahkjjb.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fmmvmtru.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163zsmdient.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163eaujsuau.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vdbymkef.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163jlfncdjc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qkrfogkp.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163krsmmkpx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163hvkqbyam.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wgpacynu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163eccutbfo.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163kcefktjx.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163hmhppzfk.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lhokvhgw.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163cqlklspa.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163snbxrrfq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163zkzporwv.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163tokcmtka.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vcggetoh.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163rhtvssum.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163cdkpsdfa.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qatkptrv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163hxulxaeo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yjhgqgrv.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163drnjcbxj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wcoeumsu.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gamhhfot.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hfjfmuqs.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163aexviwgr.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mdtwhtsm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qgmtlgvr.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163uhpndsbe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ryluntvx.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kqgavzqb.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163cykeojto.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qkefbjvg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ukkrront.html

[R50] awk 求和
来源：http://www.xuanzx.com/163nifixusb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163qtewkwzp.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163lkmpzbnu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163sxybhshv.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163unxfqebc.html

wc -l a.txt
来源：http://www.xuanzx.com/163jhpjsbxw.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163yroewswd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jzmqdbro.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163rylxmxlu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163gmgxobrs.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163qmlrryme.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163czxaidwq.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163crxbysac.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163uawvavlv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163unsukwuw.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163dgedmubn.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hqcscsji.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163xufheppq.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163cxjqubex.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163bezcgsia.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163yknochyt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ftgvtvbr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163sulnnzef.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163waslwqnp.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163qwyrzexx.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hekwtkav.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kawczqxp.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vnmmpzyq.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wushnkfy.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163zsjjwxya.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163hjifilax.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163cncxjohb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163irlqllgn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tzfdkfug.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163zgjpwjtq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qpdknhta.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rqtksmih.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163obhvoeku.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163migfedzq.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163mvnevzzw.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163mfyyqorl.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mryhqfsd.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tjufuqmm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163qeahdpqh.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nxzhuraq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qfgtanaw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163lfosheyv.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163qajhkhfl.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163vyxvrohx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hrodgrxo.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163bkuxegqw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hqtqheqc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lfcsfows.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gnngscwx.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ddcjfqmk.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ulbfcfus.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vrocfipo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163zqyuldpp.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163tcjfsfdc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163txkmudtq.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dxjxzrhg.html

time ./run.sh
来源：http://www.aibaodan.cn/163fwayprnz.html

================================================================================
来源：http://www.xuanzx.com/163kxpdiwms.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163pieshqok.html

================================================================================
来源：http://www.aibaodan.cn/163mtdzynsc.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163pukvxwnj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163hrtgmfoe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163zwslqayh.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163koyytunl.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163iyschmdz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zcavtata.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vrxgxala.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ycgnuszb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163lwkdxxix.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163tfkqwjum.html

strlen(s)
来源：http://www.sxryk.cn/163glvslamr.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163iqxmmadt.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163nehermzt.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163mcsqezvn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163qudahbss.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mkcdhbyh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qchfvzmt.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163fyltteuv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163mrznqkhg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163esnsamoy.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qjgdvvle.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163cassbgtm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163eesqfall.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ghcdosde.html

fclose(f);
来源：http://www.aibaodan.cn/163ctxdlrcj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lebzxgin.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ycdlljvb.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163nnavjoiy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163nbxttqnd.html

[S14] C：枚举
来源：http://www.sxryk.cn/163urhkjvyy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163issyllja.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xmxbhcxg.html

(double) a / b
来源：http://www.aibaodan.cn/163vtcqqqkp.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163bqpbslpn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163bvkhljnz.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163appqrzxa.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jxlchacm.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163rdsdjhyk.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mehovygl.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163pvbvhmcd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hwsvkrpr.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163avvbrwyj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fztynjup.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xujillhu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ihqharrg.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163yboyjavq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163srgppfgx.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wtjycqmx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163geeiyxft.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xsidqjhz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qdhqfglv.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163rwrcbzsu.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163uphfksub.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163voxgladj.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xrdniejp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163uoxwvtmr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163mgghodqm.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163nrjfgrvg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163yisskews.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qytkgwzy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163swzvtzql.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nywbjbac.html

#ifndef X_H
来源：http://www.xuanzx.com/163maldsqvy.html

#define X_H
来源：http://www.xuanzx.com/163jcldaxhy.html

#endif
来源：http://www.sxryk.cn/163xfuyotla.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163onfvewua.html

#include <iostream>
来源：http://www.sxryk.cn/163fjtfffhh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163gmkpernb.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163bpdihocx.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163rhrblzgn.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163iqarzowa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163dihgbuwl.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rlmtlvaw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163trftztsz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nkvwvkei.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163szshyeuo.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163wpajfxwx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163odpwyute.html

[S37] C++：set
来源：http://www.xuanzx.com/163lsuxwwim.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gcficctj.html

[S38] C++：排序
来源：http://www.xuanzx.com/163eyabhgun.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163pqyqxkfp.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163drgyvpvo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163misbrjqz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163lngvqvjr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wqpiypgn.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163dsrvorqp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ipmaioji.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163mdpmgmwg.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163oyilyjee.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hycwczed.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163saypukby.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nyhtrupu.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163oatomrta.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bobacfos.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163hgqtvnkl.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xovrdgag.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ngosaprd.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ddrpgczb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qacnwtfn.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163yknszfey.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163gavdtuou.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163myjgafwy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163neqmrqep.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wjqwnhnp.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163fdytsmoi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163hdyrbspb.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ykrgspyi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163mcngnimg.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163poljrfep.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163eunihlfl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vkagpxvg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163xcvowxrd.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hpndavyb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163owjmkpnv.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kvdbnvey.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hoassest.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kbtqkrot.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ofutgsts.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163phvysyfb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vsxokfcu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163oxwaqtns.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163cnojdvup.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fuywhllv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mltcdtcb.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rikgspwg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jaosltmo.html

================================================================================
来源：http://www.aibaodan.cn/163cnljuznf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163putgfewp.html

================================================================================
来源：http://www.aibaodan.cn/163uzuvwxaq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ysiuwons.html

println("Hello")
来源：http://www.sxryk.cn/163tyjskvwk.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163yussrlhg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163kwkuiyaz.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ztnzplvg.html

"值: $b"
来源：http://www.aibaodan.cn/163bpucrawl.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163twlysauq.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163jasenxvq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163drqwzojw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xeqavyxh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uvmaaswz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163yrvevwuc.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wbzpawng.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jljksgrc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163dpnyvkrw.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wejswbga.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163kprsgglb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fczaeqqo.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163xipubjkw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gycabkgs.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vtiktvru.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163gjhqyqdv.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wzavbskh.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163pdtcoyof.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163lnedwsna.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163oecbdtvx.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163rhjyfxcp.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wlbiteib.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163cjbzpsna.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163bwvjjwhl.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vfftcefl.html

print("Hello")
来源：http://www.xuanzx.com/163rqnooxvx.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163hzixrqxl.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163gyyyoxme.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163hiahyiaw.html

"值: \(b)"
来源：http://www.xuanzx.com/163nsggoicu.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163nwihiiyz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163floxhobc.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163cyxamfbh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163kregqkhe.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vxaqmsin.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ilxfokjz.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163uifloyci.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ibtphpds.html


<!-- 参考信息 -->