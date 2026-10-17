外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163arwjstob.html

[R08] 数值比较
来源：http://www.sxryk.cn/163zikzyejd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qwqjgptc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163hoivohzb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ovamoaxt.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163vcmeoaez.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163uypilzxq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163fybjyrps.html

case "$1" in
来源：http://www.xuanzx.com/163mpvkxavr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163bkefngoa.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163devaetap.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163grqwrrrf.html

esac
来源：http://www.xuanzx.com/163wvciurpd.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163bkseaiuq.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163jmsdgtsc.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mlvmeedj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ufgkeugj.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163yvkyvttb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163qjxtghcc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163trqeiruu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ppkpxmtd.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163jpqptpei.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ptruqwba.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jvvpkktq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163hovoksfb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163iykdtnwy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xrtxzctn.html

[R19] 数组长度
来源：http://www.xuanzx.com/163boelgffh.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bwsdlhwy.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163gzhtdobm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wkppsivn.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163clvnevob.html

echo "${#s}"
来源：http://www.sxryk.cn/163raieneek.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dsejlgrz.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163fxbfwgba.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ngbywyhn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163uwjuoqbj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163bfokeafl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163tsjqaqmi.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163wmakohut.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zabzivnq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lyteczio.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pssclvgy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ijwhddeq.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gssrexyn.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ikbxwbbq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163lqcvggng.html

[R29] 定义函数
来源：http://www.sxryk.cn/163aakiujdi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zbypflql.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163brpsltlz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163mgvpcutv.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ujhtabwo.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mohfyhxd.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163nyxcoqac.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163cyxomwod.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163thapvwlh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kyikosww.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hdgkxiha.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vxgbqsuo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zoqumbyw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163lzkcaxna.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ekyyochn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vtctelqa.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163abvbaiqk.html

files=$(ls -1)
来源：http://www.xuanzx.com/163lzkulwhv.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163evxamymj.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ufawpvbo.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163iqcduqlq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163tjzdkdvc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163piablvrc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163plmpepjq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163jygfssgv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163zaoafdfe.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163byektqeq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163iwsgncjt.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163uqagfirv.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163rlkgxrxk.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163twqmjfsc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gckucsdb.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163dpofbejk.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163lrwnyods.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163hbepijuq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163psjcxrql.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163svsxmjqa.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xysgivzq.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hlxetetp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zvumnfoy.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dmlsdivz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163smdwcxxa.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ankieaie.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163mfpetoyz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ljztmpdn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jmmjdehf.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163nfcvvmqv.html

wc -l a.txt
来源：http://www.aibaodan.cn/163rafyjctu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163dcjmxfqj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163uyawrofv.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163diavmuft.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163laoytoav.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163wstvmljb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bdfpppea.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163wfwzonxf.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xvubabib.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gflrdrhb.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163kddxdziu.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163hkchqyhk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163brghazdf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163lmikyfji.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wyopqppr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163nsjlvyqi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dmyryllo.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163zrcrcqxh.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163lhzljwbf.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163nuzvlfmx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163cvasubnv.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163mmxpgfxg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nfolglcg.html

[R64] 结束进程
来源：http://www.sxryk.cn/163usnfvdav.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ioaqpmlg.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ldubfwuq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163gkmzxprd.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ekbasluw.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163suxsrrjo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163niswtxhd.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163qrfdncqu.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163frxoprsw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ooqmccsg.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gtntzhxj.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nlavkybz.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163lgkwdllt.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ukosfxln.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163hgoaxkcs.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vndvqema.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163gjdffela.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pajbjupt.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163okouzqhe.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ocroqtwf.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163agtjmcrj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163xxqepcwr.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zxufnocl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163eznienbm.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163rgpwfjwj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163oprzdpcg.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vypuspkh.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163cmxqhuul.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163traunzuk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163byiaajci.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ummihoan.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vyndfnak.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163seiguptd.html

time ./run.sh
来源：http://www.aibaodan.cn/163tkgvykyv.html

================================================================================
来源：http://www.sxryk.cn/163urmthgvn.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163lugocyjj.html

================================================================================
来源：http://www.sxryk.cn/163uzzesjvb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ixsgzrbe.html

#include <stdio.h>
来源：http://www.sxryk.cn/163oolylwsj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mqfmfgzl.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163vhisgcyn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163dvieniuu.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163zqxgzrfi.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163nxtjhbxp.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163iorpolnw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163lxjrysux.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163bspgzhla.html

strlen(s)
来源：http://www.xuanzx.com/163ezssygjg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163pkwmfpco.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163uixhsgsi.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qkmmdhic.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163acvgydop.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ptkdnwst.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rreodxiq.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163zimfrzqf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mxnyldzl.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163jepqpfpz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163uqgqsolu.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163nxarupdx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163lecvpbuk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163yezwzavc.html

fclose(f);
来源：http://www.aibaodan.cn/163gamayndb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163rvslqdvf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ddgleqei.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163sjhixzqw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163dxbwclmm.html

[S14] C：枚举
来源：http://www.xuanzx.com/163largmbch.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163xjangxoz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163rqioxcwf.html

(double) a / b
来源：http://www.sxryk.cn/163iqtdtoqd.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163sznwbqkt.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163rdrtcbjq.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163phqascvx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xpwxqqbp.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qniceizv.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163uoiiehkv.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163oisescpm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163aqdrcpxo.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163lemksazj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163smpldyaw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163wjqmupsn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163yvsqwjao.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163jrtyzjta.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163fdzfkfed.html

[S23] C：随机数
来源：http://www.xuanzx.com/163kxkgsknp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163yzssopxr.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163iswaitsg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fcvcwjdk.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163eeccovhy.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rmwpewxa.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163togixssy.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163nbbscxru.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nsshzqlg.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163btfqgojv.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163rkroufsi.html

static int counter = 0;
来源：http://www.sxryk.cn/163kwmfqrnh.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163turpprdk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163rltdqtbi.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zinrvdfi.html

#ifndef X_H
来源：http://www.sxryk.cn/163hlzmjwop.html

#define X_H
来源：http://www.xuanzx.com/163vovmjbgt.html

#endif
来源：http://www.xuanzx.com/163svvufvpq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163dxogluxl.html

#include <iostream>
来源：http://www.sxryk.cn/163llypvhnj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163lyysenhj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163thpzgide.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163szkxzssk.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163xuwtfzpk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163xxwecuxm.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hmazydoy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163iemdhbig.html

[S35] C++：map
来源：http://www.sxryk.cn/163bxrfanjh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qfbaupjr.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ubwsxxyu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vciwokxr.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hgsdgyur.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kmidpjuv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163nzgvqvrb.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163gzlnbtaf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163slndwoai.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ihmktxag.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ktjhutmq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vdyskiov.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163bzfmwdia.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fxpxfzjs.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rdcfhzpn.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163yobwsrdp.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pfmhqyoq.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ykbfgxnx.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163tksszaeu.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163bdndbyny.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fqvulwet.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163mnwpdegn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163adjvmysa.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163osifuapd.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ewsmwxhq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vcxgwynf.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163iytznzcz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163cxdrjwjn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fdijcsiv.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163pmvouxxj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gkfwirdh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163yutlqzfj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163kguralxy.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163yccwooam.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yrpvboca.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163bpdfsshg.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jlwtbvsz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163uqtwcich.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ogfzzwms.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163adzlhfzc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xzdrmtjz.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gfwexusc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wvbsonal.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kzqxfuwq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163eeehsdtu.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163oiccpbmh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163stqspifs.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163zgbtxzbe.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ietzygir.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163odokvxte.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163awzjzaew.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163lfgsmgsx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ycxswpng.html

================================================================================
来源：http://www.xuanzx.com/163agezmuuk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163lcuzrabj.html

================================================================================
来源：http://www.sxryk.cn/163xehmiyre.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163qedxglcx.html

println("Hello")
来源：http://www.sxryk.cn/163vlvwwect.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163qgxmfyld.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xwlsxhhr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163xbogugve.html

"值: $b"
来源：http://www.aibaodan.cn/163zzlzukml.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qyusvtyf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163homcedqc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163stezzxrb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163uroeoxmj.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163cakzcocb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163pizjpfws.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rosxtbey.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bviyztqq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163parhrhdr.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xwnoblwe.html


<!-- 参考信息 -->