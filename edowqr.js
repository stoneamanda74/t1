外链999!wailian999！

case "$1" in
来源：http://www.aibaodan.cn/163xsslzvks.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163mfiokfls.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163joqmrkpr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qkubgxpt.html

esac
来源：http://www.sxryk.cn/163dcttucjo.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ftjacyaz.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163nthghnbl.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ayjhllac.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163iksrpkcs.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mfucvnww.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163jqxzwhhd.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163vbvqatsu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163bpsielbo.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163mtfmylzr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163wgyuhcph.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163zvlpqeba.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163epbaewwk.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163gcftfbpg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163nwfgywzw.html

[R19] 数组长度
来源：http://www.xuanzx.com/163tjlcvamn.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163horfkwbl.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163pdqjbexx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163bscjcqlb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wbctanlg.html

echo "${#s}"
来源：http://www.xuanzx.com/163fvjnpixb.html

[R22] 截取子串
来源：http://www.sxryk.cn/163orpxhowj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163kqsruspf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gspiloiq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rdghprgg.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163mklxsbxl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163yzdqkjek.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zuqhudfr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163fupvmpoz.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163cmvuzkmk.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163woinlgdm.html

[R27] 算术展开
来源：http://www.sxryk.cn/163udlckhnx.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163aniocpbv.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163uylxxbhi.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163jpmvlnta.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ucxpbhaj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163wmaqjvmp.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qwuumxrb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ejcjyerv.html

[R31] 局部变量
来源：http://www.sxryk.cn/163svjuyezw.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rgastpuf.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163zjyfwvib.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163oxvepjds.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163mjmjcrpr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xbrkojql.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163vsymilrc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qgintwxy.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163eayoscnr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ufpeapeq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163zzvitnnj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163aagylphm.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qdfmkpoi.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wnudxvxa.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gqkaijvy.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163stofzlxp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qjhjspxj.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ichjkgzs.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163irhtiuyw.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ouapjtnw.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163isriryny.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163yxcllyhd.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zaaqusei.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mkzoguhy.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ucdtsxlj.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dtwwpjnh.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163wheeyrpz.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163cbwuhege.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163fuvhlero.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qnzlexvb.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ngkxgxrz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163xxvkocwy.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163wbqnizrx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qezcswez.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163qgidnmmx.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163nipxwiax.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163rgyegppj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fbrhovep.html

[R50] awk 求和
来源：http://www.sxryk.cn/163yugyxgto.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ovynxdkm.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163cfdnyxcq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163fmutwxvq.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ibvehoiq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qwwgefpa.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zxuvhvhc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163czbmsukl.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ltgwumqn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gmaroiyc.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163llwgiedu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163fzidsccm.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vdoihbbd.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163rqfnstwp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163hdtcbgej.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lsqqqslo.html

[R58] 下载文件
来源：http://www.sxryk.cn/163tscxiyme.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163nxkzbnfp.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zeosprng.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163kcnyjsqj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163pifnsxvi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163gbgnkvxr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163xytwwyfl.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163lnmjpqkm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163mnsrfbte.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zrrvgknx.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163tekbuthy.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hyutongz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163zzrxdyzn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163raoljbwi.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cnyldugq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163tgmykold.html

[R66] 定时任务
来源：http://www.sxryk.cn/163blhwvwgr.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rymibetx.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163tzhrofzh.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dlkxqyeu.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163sxlcddng.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163udzgcbkx.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163tlravgkm.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rdlfhxuf.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vssibzhq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163kxviklgv.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163liiqpghp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163jogjypsq.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163btwiococ.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163buxasxxe.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163eocdhbgl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163cbikksex.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rnmyjrlj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163klwnyevp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163udefevju.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ocgrjgwh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hvboskid.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fvyqbxgk.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pwzphgdp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163zeskyacb.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163qolkdlwh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163mtxpxthq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163cyrgfczx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163mmiirsqz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163eiuzxqeu.html

time ./run.sh
来源：http://www.xuanzx.com/163lytnzmqp.html

================================================================================
来源：http://www.aibaodan.cn/163blwwyejq.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vuctzcux.html

================================================================================
来源：http://www.sxryk.cn/163gncvjras.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ftaiowel.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163oevbiqwj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163merzqxwy.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163xkqsodid.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163uawwfgtn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163llhxravw.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163geoafzus.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163pdoxjyqo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ocjgmlys.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ttlohids.html

strlen(s)
来源：http://www.sxryk.cn/163wobhmlup.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163zrpnlnqf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163bplfqxmb.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163kfidsqjj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163efvbdalk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163oqnudinb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163icptvaoe.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163olktrmzf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hdatnjqr.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ysohtfeq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163xpqjfdbu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163khqtayqj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rzmsgtod.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dipztcsz.html

fclose(f);
来源：http://www.aibaodan.cn/163dldfvwrs.html

[S12] C：写文件
来源：http://www.sxryk.cn/163sbltdpry.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163fzpvjbut.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163nbsslymy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tohwrlfv.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mpzpwxox.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qyevnsws.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bubjsygu.html

(double) a / b
来源：http://www.aibaodan.cn/163omkyysbo.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163rlxhpaaq.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163rsuvpkkw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163jdymbxep.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163wfydnkyg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163iatptvcd.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ocmefjlu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163meswynro.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163foftaoao.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163taoxcjpk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rgwtnoos.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163rbmihqrk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163wmliykbk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nflwdugi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163okmgdsyd.html

[S23] C：随机数
来源：http://www.sxryk.cn/163tlydqhih.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163hadraoop.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qfazvsbn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163eaqzowzd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mrsxjrch.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163uewxihog.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163glmieruz.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163gvmijgun.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ogajjtji.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163unjapsad.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kwlnkozw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163bpsvokdf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163twaxbtxk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163anmhvlpl.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ozavgvmm.html

#ifndef X_H
来源：http://www.sxryk.cn/163wlvpxxqt.html

#define X_H
来源：http://www.sxryk.cn/163gmorztpp.html

#endif
来源：http://www.sxryk.cn/163pawiaeio.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163swpznasp.html

#include <iostream>
来源：http://www.sxryk.cn/163pldwufgi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163mfwhwvml.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kyhdhdjk.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cjuwoour.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dlycckye.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163wgwhxmqk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hxarkhsv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163alaoporc.html

[S35] C++：map
来源：http://www.sxryk.cn/163ilkmovhr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vjoaokkf.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ncycxrfe.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nbgtteqn.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hskythvs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163udzsctve.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hgcsicjg.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163picnecfa.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tghdpvzx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163hmrcsqbe.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163crnmkbwi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ebucxqzf.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ibntvekv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163yihrcsqi.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ulkigonw.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163beugwpvv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jcpusqqi.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163mtbirbgx.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163sqbgolik.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163pfvaqyfq.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ddnfdhkh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163thvnfkiq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zjowxdyx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163tkapbwan.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163gvdmtiks.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163bvyatjkb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163qrqlsqtg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163pjticnei.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163tqwaqjra.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163spgowqky.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163gzbbwdii.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163jlhqwetv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163lsidxxqi.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163nadnrmss.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ukcqfloy.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163emrkeipe.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163dycwrlqz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163odtyqihp.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163kevjlitb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hhnfeymz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163uvmzfmgx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163baeoyjpl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163tdlpojga.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ibrysdrq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163eoavzhcp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rpylquuv.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163tbchqykq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kytydtfo.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ggmcxmau.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ylopxghp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163iwssjyms.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163usphgzaw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ugvkrbca.html

================================================================================
来源：http://www.sxryk.cn/163jbrtrenk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mehhhthv.html

================================================================================
来源：http://www.xuanzx.com/163ohwtxapq.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163pbeouvve.html

println("Hello")
来源：http://www.aibaodan.cn/163kvzhubdq.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163vvmxzsaf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163karetabo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ifhrfngc.html

"值: $b"
来源：http://www.xuanzx.com/163eobinrfu.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163bzrirhhb.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rvlsoyen.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163asvkckpg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163iuqajyuy.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163qyprtpvu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163snvjvxdu.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163nwtlnqde.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rxfgolmr.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163wesspnjn.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163vnnawswe.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163gxxqodyy.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rxrcijbd.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163dozjdpsf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163jtgisstf.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163hginclaz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vhcpvkxf.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163emuaabdl.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163uabbcbko.html


<!-- 参考信息 -->