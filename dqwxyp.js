外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163dxxkufwb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vdejouco.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qcsiinpb.html

[R19] 数组长度
来源：http://www.xuanzx.com/163gwwzbmni.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163oipirdql.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ucuufsri.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vznzpqpl.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163opwlrgtf.html

echo "${#s}"
来源：http://www.sxryk.cn/163ssssatiy.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fgccmbpm.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163iwoyykih.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ssctzgur.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rmrqfruw.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163txhacqkj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qbqqtlyp.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163jhopbigo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hkvgovby.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fpkylytm.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qfwzoaiu.html

[R27] 算术展开
来源：http://www.xuanzx.com/163czojnzqb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163efavpcck.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kkizpdtj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163jrvcsohm.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163cbvugorj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wzrbvwvb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163gyqwmtkk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163lhygfxvg.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ejxqpogo.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163detolkhc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163gmymecij.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163czgxphnd.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163enmbfvnj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163euxntaqp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xduknqzf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163itafenpc.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163toupwgpw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163stpcenwh.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163pniihzkd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163rnyaklit.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yqlcplcz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163yktejttv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163zmxbzoza.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163rfocngbz.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163tsepnhdc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163tgziumbf.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163daziuikm.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163yzacxyst.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163yiukctia.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163jqvvbcey.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163eeuwnisz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163iwmbdviv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163fzbhtxwf.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163wqudarxc.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163jpfmtbto.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gqeuuzbi.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ttpzpgge.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163snzomyxi.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qrwrossc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kmirurkc.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jyfxeniz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hlconvys.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163onebvtto.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163atptarit.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163semnuefv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dtswigik.html

[R50] awk 求和
来源：http://www.xuanzx.com/163emprlxav.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163kibwougr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163cllggdqc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163tcrgzgjs.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ramzpjim.html

wc -l a.txt
来源：http://www.sxryk.cn/163bwcyvuga.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zgekqseh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163jtwopurq.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vrwzhnlw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163lyffwkyo.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jidhtndc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163vxcnujiv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163nmqqcnko.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163oqkpqxwz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ttqlmnos.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163kzjzavsf.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163eiknmwhc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oxwarpwt.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fjlbudiq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163thqcwacl.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163brnpcqyq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163htbnenyg.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163taomhblw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xuftzxdp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ndgisuyk.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ufuwiqmi.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hpcbucbk.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163jqnaxkmh.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wbjslhko.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163miqkxdas.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163eqlqisee.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163jzrsnqht.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163orzcddqp.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ipyeoslo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ydlhteez.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163gpkgnujj.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163pgrrnzgw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163msecssbz.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163esperkxb.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nftagfyc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163iulcnavc.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uspmwnqs.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ikmzqfzu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163slfcdumk.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163tyhdbrby.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bcjwcqpb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163zywslfiw.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163srzjvwht.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163qcmulshp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163nqaftdml.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163evkadybt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163chnbsxip.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163bcrekvfa.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bjpfqyir.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xdqfoecv.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163bjcmigvp.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vvvsnwpr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lipbsyam.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163loqztnmn.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163azqyqhhc.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fiugxnbj.html

time ./run.sh
来源：http://www.aibaodan.cn/163crqcilet.html

================================================================================
来源：http://www.aibaodan.cn/163lucdfvnj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ubmwxggr.html

================================================================================
来源：http://www.xuanzx.com/163pakdriwm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163phzauotm.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ogjfspkd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163gpkjqnbb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163sobgxvsa.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163etjrqgeo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163bngrixys.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qsntznzy.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gktkagnh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163lvgfwhfj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163rmblabdp.html

strlen(s)
来源：http://www.sxryk.cn/163gbfloggp.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rpbbrfsh.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163aqzbuenm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163pfofqjnw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163iglpitcu.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163vkiwjtws.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163megswndt.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zhadiwiw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zrpqtoob.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mcaziwpm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163onjlklye.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xfnrpjkh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ssvgmkag.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163whqagdqo.html

fclose(f);
来源：http://www.xuanzx.com/163kynahzmo.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ajqneiqq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163eilihrwv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ddyuszfc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163hrthukbo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163symeahoa.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zuncrvex.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ghhhgzna.html

(double) a / b
来源：http://www.xuanzx.com/163ktheubuj.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163sherhegc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163bscbwwlt.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cgvmmvtd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rvuitfdp.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163wdasstin.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wznazyur.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dyvcrvlj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hajnzumb.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pxbcpwjz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163acbwaklg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qkqaiqxk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mnrdetat.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ctmoonba.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163uipvwtkf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163pqmynbxs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163zykaxrro.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163jyqlvnwq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hdnmwiax.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163bdormdjp.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lzxuyeqi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jtnfause.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ietgkpcd.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163rfhwuuih.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163awpckcau.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163rkssbciq.html

static int counter = 0;
来源：http://www.xuanzx.com/163vjuhjuer.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zwffnzws.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163pirjxhnl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vapystku.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ppoqcnkp.html

#define X_H
来源：http://www.aibaodan.cn/163knrdqqxy.html

#endif
来源：http://www.sxryk.cn/163acjysjrr.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163zdpxruib.html

#include <iostream>
来源：http://www.xuanzx.com/163doxnewpb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163uzorjrrx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163bxfjqpdy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pcrvfwnp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163cxwzbnwo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zgshexvg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163vxjaezax.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163uhfbsagp.html

[S35] C++：map
来源：http://www.aibaodan.cn/163vqwoqbkj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tqjipuau.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163eeikatjg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ceqdbjcp.html

[S37] C++：set
来源：http://www.xuanzx.com/163kepocufb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qcevtflg.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163tvdwscuf.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163zkufsxdo.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163eyewzfxv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163lxvqbxee.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163buodxihl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qeogjcbq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163achvhkgg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ggtmqidq.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163szcxcfzr.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ijglmakm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163extvxsbv.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mcqwwjoy.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163phensgga.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fbtnigae.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hcjpcbxt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163cbnrheaq.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163drujgzxm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xugjpvox.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jisnykcy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qekopzjt.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nkcwbqny.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163prthjogj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163slhcxkwv.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163wbluoafn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ptrwfpwj.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163rnbxztaq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163mggldwte.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163aeyeving.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163jrcxkhto.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xhyhbtdv.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163phbnoljl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163tzyqqrdc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kxupthpq.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163cvxbsomg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163nefpuezq.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163yefydrrt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bjdhbajx.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zwwtbuyn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zodcqatn.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163dhgfaxgf.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pcwhmkcp.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163dqrixkid.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163svmgwxkp.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163chygmbqz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ygvtgmis.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163yawvkadm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163waqwxayz.html

================================================================================
来源：http://www.xuanzx.com/163cxkpittc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ofndihga.html

================================================================================
来源：http://www.sxryk.cn/163uftooszl.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hdfnnkti.html

println("Hello")
来源：http://www.sxryk.cn/163arwegwks.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163zzsdtiyk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163alfhhyad.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163gecekuty.html

"值: $b"
来源：http://www.aibaodan.cn/163dlzpvxbl.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zsfptzmy.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163uougnjyj.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163epqeikri.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163oakqnxje.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163nzmlalbn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163zxyouwyx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163yhkqdwbd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qymwkbfp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163fustdorx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lqifnssy.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163nugmkunj.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bdnytgjs.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163irwcpajs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163crcrnqyf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163uotuvtcu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163dlocaoqr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163bmhuneev.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163iyeloyrv.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163obloetsd.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163wapcgmbj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ranwpkov.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163gwhndagq.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163rjfmgtki.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163rphexjyh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163zaduvqtq.html

print("Hello")
来源：http://www.xuanzx.com/163lgqtgbpj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163eoilkvzp.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163nfoepxft.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163iofcoznk.html

"值: \(b)"
来源：http://www.sxryk.cn/163xjhopzba.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163zlhzgldr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163maxsbmal.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163vbalxtry.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163cggqcziz.html


<!-- 参考信息 -->