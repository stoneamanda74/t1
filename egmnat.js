外链999!wailian999！

R. Bash 专题
来源：http://www.aibaodan.cn/163mvcmvlyg.html

================================================================================
来源：http://www.sxryk.cn/163yeqvujhg.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163bgzybsjg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163tnkvydmf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fsgsgfvm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163bmbavzlk.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163czdqhhrh.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163cbxwznys.html

readonly PI=3.14
来源：http://www.xuanzx.com/163tfymwwxp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163vzbghnbb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163abwxvmxr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163riaskccr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rpnfsxuc.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163xcsnbqdk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163mkqkkvcm.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163lzduyesi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dsnklxwv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163lwyewjku.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wsxtrcwo.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jzwufzfs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163smygyjlp.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163efwovvdy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kbieahfs.html

[R11] case 多分支
来源：http://www.sxryk.cn/163nfwwrfnn.html

case "$1" in
来源：http://www.sxryk.cn/163flfwwizi.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ykeqoyhr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163fntxljtf.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163bqsjzeef.html

esac
来源：http://www.sxryk.cn/163azvfwqal.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163rjcbnuym.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163kzzsadpo.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jjhndupi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163kqhxavho.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163jkjolikw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163mgsdbpac.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uvbzdekv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163oakfzaqc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163yndqscsf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163jslwrxpr.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163yhusumtb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163uyuyjalb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ujnjbamq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163pwlwrzth.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ykiuwuyg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163rpwjwrte.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qlhwiris.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ttwltgpz.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163tolrgsdb.html

echo "${#s}"
来源：http://www.xuanzx.com/163dxcmptio.html

[R22] 截取子串
来源：http://www.xuanzx.com/163eihpoioo.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163nwwkscjv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163koashair.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cebiziuf.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163esnircdy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163hxemhenf.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qiafttdy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163eufwtzok.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bknnjxmd.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163banhtuan.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lqmnyatl.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163dtjnjnfn.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ikcfqdwe.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163nzbwniog.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wqnxegeg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fjlwkswe.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vrihlmqy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163bkijsdqu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163deycwdoq.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163urjbktuh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163gzsqvqvo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ybqnhmbc.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163unehrgcb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xtbkwori.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zmglyjsb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uxgoqdyo.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163siweqwoa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163mapmsdnx.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lnhssunk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vouecowi.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163swglknvj.html

files=$(ls -1)
来源：http://www.xuanzx.com/163jsqicszb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163gumxhiqc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163toqpjyqk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wxvxuyoa.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163llfiuhhl.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163anddeyvg.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ydzpbgwv.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163liljtful.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163awzkpbbm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ztqrfois.html

wc -l < a.txt
来源：http://www.xuanzx.com/163eqmpjcjl.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163rbxcyjxa.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ygotwmcx.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163cebbysns.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163hshqfuge.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xbvqmrbf.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163adlwoedn.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163nxdjnlat.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163hzvglzqx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163fddlmjki.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163eitenvvf.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163enoizviw.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163higbuijw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zvmpasuu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ybyytstx.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ihpliivr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163lxrvhlof.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163drljepiw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163itrmywld.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163sdabsavu.html

wc -l a.txt
来源：http://www.sxryk.cn/163ygilzeto.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163yohkkvfv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lwivmelk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vfymitso.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ggwupjhi.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163yaktnoxg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163xovipavu.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163aphefzsm.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kbcdtalu.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163bynzewfy.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163qppumgqy.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163nlecblge.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wibomfbq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vfqbgebh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163lpsbsubs.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163iovivlln.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163bbribbnt.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xfuqbuvz.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163hrlpycma.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ddvdrgzd.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163jcnzuagh.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zkmjeail.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163picjuvsq.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163jfeaduzy.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163rwxbrykg.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163vdihhazy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163rfhscyuz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ixzayzzf.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163eotopcls.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qpumcweg.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bocjlane.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163vphhlods.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xpqaijkr.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rplpopte.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jrndknlp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ruoynccp.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163acbrhubj.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163acyysifz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163sknbfjgp.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163cbptiykd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163xomcrmup.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163vkrkplch.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lwrywxqr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mlvvhdcg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163uzjqnwys.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163afwtflwq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163kpmmgnke.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gcgandnd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fdyelcgh.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jeeufijh.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wppfrhet.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163olvpadvy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163naflogcn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163crxvoqxy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lfafdgrb.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163mhalfksg.html

time ./run.sh
来源：http://www.sxryk.cn/163walprbsn.html

================================================================================
来源：http://www.xuanzx.com/163salrdmqx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163wsuhtkrc.html

================================================================================
来源：http://www.xuanzx.com/163gpecdcme.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163cjmmuzlu.html

#include <stdio.h>
来源：http://www.xuanzx.com/163uvptyzwe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dmgoojlp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wphztmbq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163vissxppt.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163lacwfpzp.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163chcniuvb.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jzdxqgyu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bnzqkofy.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163gqjzwofh.html

strlen(s)
来源：http://www.aibaodan.cn/163pztlmcay.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163lixrhekc.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jwrefaay.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163eppabgas.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163vkmfolns.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163qnzfajtl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163migairoz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163huozkgsc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fstqlpwd.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pmvxyfns.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hyfmmnmp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163rjlfnkpn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163fcohstat.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bvzuopwy.html

fclose(f);
来源：http://www.xuanzx.com/163ubcfgcnb.html

[S12] C：写文件
来源：http://www.xuanzx.com/163nuksnyab.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rmsryafa.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163krdjoxtc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163idnmbydb.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ppgrzvhn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163qkzhcdhr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163nhewxcyq.html

(double) a / b
来源：http://www.aibaodan.cn/163fhnzjvwr.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163kfbaogdz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163kldeqmje.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163delbtlzp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163avxkdmks.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163iuvqjihs.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hshokblo.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163itmmbhvd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163aoxojgwb.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163mmsqowiz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mtqjdhjv.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163haemazub.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163azkydqvf.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163bhjnzbrx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163fcbnzrjc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ppsudbpp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163tjcbnhzm.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qrivzyqr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163apuoqtxp.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ucwqtszy.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163gnwbbaat.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163zsqrpevh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dfpnvijo.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fwoomhbk.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163mvxuhlip.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163cygdgiea.html

static int counter = 0;
来源：http://www.xuanzx.com/163uxpcjnvj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nytgpwnr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ibilfpdz.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163swvsjoor.html

#ifndef X_H
来源：http://www.xuanzx.com/163vlqtmrhu.html

#define X_H
来源：http://www.xuanzx.com/163ngxmkzzk.html

#endif
来源：http://www.aibaodan.cn/163dcamsypl.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jbkymqmk.html

#include <iostream>
来源：http://www.sxryk.cn/163aztvlcor.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163wlofcjud.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wuleaoyj.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hicgxpyr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163mslxksjg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163otodxfps.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163xkquoccg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163kdrtdekm.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ehijmumt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ldpwsmqk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ovrqibvm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163isahygrx.html

[S37] C++：set
来源：http://www.aibaodan.cn/163lxvaywmr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vtsulajk.html

[S38] C++：排序
来源：http://www.sxryk.cn/163yytfezzb.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ieuerqtm.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tedmncuz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163yvhbubzv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163csjhsxbg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163vpaxzafz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mynxlplj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163hdztiiaj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ykbsoggk.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163mmdkdtje.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xqhhtpkf.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163toduiudo.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ponazxde.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tewqdfmm.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163xvkutsya.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163qxvmkthj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tdvbyhzo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vxycczcq.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xehpafhq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pkvoeayq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163svpnbxbm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163emvgsxgg.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163odnqtvlh.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nfsvnjeo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163xiyfwqcs.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wcqvgiun.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qtyipwlv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vyaeonvf.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163qhhedyfj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163guftesqr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qaehzgkp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163pcngvsbx.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163yywwhelh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ebyzebgl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pyqbbelu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163vmufmjbb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163xpynsmlo.html

[S56] C++：optional
来源：http://www.sxryk.cn/163xmsrvmys.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nbbcavaj.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zoubltuv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163bwlyoxog.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163brkcfqwm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wnbrdfwu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wscertph.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tanwscbq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hkfocacc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163akcomenx.html

================================================================================
来源：http://www.xuanzx.com/163hhrpqmvv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zodwfbkf.html

================================================================================
来源：http://www.xuanzx.com/163tgwiyjbp.html


<!-- 参考信息 -->