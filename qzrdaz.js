外链999!wailian999！

R. Bash 专题
来源：http://www.sxryk.cn/163hqonhlfd.html

================================================================================
来源：http://www.aibaodan.cn/163jfrebjxt.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163hsjvstwd.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163pcgpujcw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163cjiakxys.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wqivhutj.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163cdmqbzsi.html

[R03] 只读变量
来源：http://www.xuanzx.com/163lysqjjme.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ghmwtdyd.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kidehsud.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163rrwcpsoq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jwsrouod.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163omzbqarl.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163kflrxsvw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163jsvcuugc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wucvxobf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ojdzjqlq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163uecskmow.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ludnxntj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163lmfgmnnm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163rrmsskaz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ivxobvjc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163dkppqjjv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163zuiisqdp.html

case "$1" in
来源：http://www.aibaodan.cn/163whzhwyvd.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163dvdgifkb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ouzpqziv.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163rxifbiui.html

esac
来源：http://www.sxryk.cn/163zqrlxyux.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163tltgwiwb.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rzvkcyva.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163wzblvrfs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lbskyfri.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xzpikddl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163eoytvmiy.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163bqscxuku.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163cvxflhod.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163yxesgguq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163omvycttn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xhvidovp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rsymlhyq.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jjwmgubk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163czxwpekq.html

[R19] 数组长度
来源：http://www.xuanzx.com/163csiepzqw.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163bflhbium.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lotmoviv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rczyesoi.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163swbfildu.html

echo "${#s}"
来源：http://www.aibaodan.cn/163sujdmbbw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ceyxvmdv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163nuxtvimg.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163nhophrlm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163wtmagxpz.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ndcbhgdf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wbxdngcv.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163wqcwukai.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163lyiukhte.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lqgxjhbq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163svbhnmsr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163byqezpai.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qqfiwazv.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163fcbqrjsh.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jjgcyiaa.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163okhglsjx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163xqplqkzz.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163djwqwhie.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163etascuaa.html

[R31] 局部变量
来源：http://www.xuanzx.com/163mpjkiruz.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vhvgqyrp.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163arljmees.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163grpomrzw.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163cvynfvid.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163czvhtftk.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xmwzdyzf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gsbtebpg.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163afykmsqk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163diwcljii.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163azpmimcm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lxipaywb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qeycyoue.html

files=$(ls -1)
来源：http://www.xuanzx.com/163migvfepp.html

[R38] 管道串联
来源：http://www.xuanzx.com/163rqufoioi.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zporckll.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ajyfypqn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ewloxsrz.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163nfjrrcqh.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163fgptavxr.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163kuekrkwq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163yxbvmevw.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163arcykish.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163axiaahfj.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163stybbkxx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163iomlayfp.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163klrsxjqy.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163prnjfpos.html

[R45] 批量删除
来源：http://www.xuanzx.com/163llphsukq.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163axnrjebo.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163vwygatzg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wlpoitos.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163pqxjtecd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163azfnfmdm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xodvjugx.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wzbnfosf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163pokmcsgy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163lrqcbezv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163vfdevlgc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xwxgwtra.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ortdwcfu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163cfvhuend.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163cmxfawku.html

wc -l a.txt
来源：http://www.sxryk.cn/163cvmcgzld.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163risujgst.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163floxlfwy.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vmsabbzn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pwehmbyc.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163mbfcrjlp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163dfitxaga.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ffnckdoa.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gifavjtw.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163pbdwdvks.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163txcpdptl.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fklgahmc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163utautumh.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yodarxnl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163jkcfvums.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dkmggpyx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mnzzneoy.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163klxistbt.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ltatsdnp.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rnxeypjk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163cgglglbg.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163oqeeujub.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163chruqxhk.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ihykdxtg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163imhgwbck.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163fdteyxqz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163mqrcamxc.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ejhitavt.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ziauushm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163yjzmikkw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ousfaxdr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163iiejtifg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vzxswmme.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pwyvzqqh.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vlbkvlxf.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163vyamugka.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163uwxvljcg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ifhcimfe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zczffoih.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163cpkgbqgi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163cppjnfib.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163wyyylsqd.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163kfvxdfak.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ytgamkdp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163yhgfakch.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ibdfuhne.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163yuuxcfar.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kuisfsqz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163yzrfackz.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ssmlfxwd.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hmnzlnjo.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xfxrpxyk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ggdfgcym.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163dtxvztll.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xdtpkesh.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163lrqqatro.html

time ./run.sh
来源：http://www.sxryk.cn/163tvuvookj.html

================================================================================
来源：http://www.sxryk.cn/163bhlhffve.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163cmaufvkj.html

================================================================================
来源：http://www.sxryk.cn/163qmfhfegr.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163rrzcibvs.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163desinfmu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163murgitzu.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mwkailmu.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163nyzctxmg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163fddrdkcc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163kiyyeqxo.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163nuyvzbhy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163avgxkcgb.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rpgwadht.html

strlen(s)
来源：http://www.aibaodan.cn/163znfymiey.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163rzjnidhl.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ejpsupti.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ndfpnksx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fvledhgg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nyouyrix.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163uxcfmfgc.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163lgorktif.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163naztdpji.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163mewwqinq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163vyxhajlw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163tjncozsy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163tpfungap.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fpchuplr.html

fclose(f);
来源：http://www.aibaodan.cn/163rgpfogcb.html

[S12] C：写文件
来源：http://www.xuanzx.com/163uvoajfsy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163nlqgwmmq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163otamecmo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163nwamuvkg.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nthzpikc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pmxmcodu.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163gvbhnscu.html

(double) a / b
来源：http://www.aibaodan.cn/163ejjspcuy.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163qtqfznfh.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kxinkjyr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ifznryon.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fcppayxq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163oabhrhaf.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mfosgbkw.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163cpokcvuu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163aarlaqus.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163lsipybtz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ajuurmdj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qeoghhco.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163uqkhiyec.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163azjhbpqv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jigbsynr.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qzhadtgy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163eoqthvyw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qeijzemf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163vscoaegu.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ixmybyvh.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163bhrlcczn.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163gyxscanl.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xjtngclj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163jhkkavap.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kgpsgpiv.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163nrohjnmt.html

static int counter = 0;
来源：http://www.sxryk.cn/163tybzukdv.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hkiyqzah.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jlqypmzv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ybxolvxp.html

#ifndef X_H
来源：http://www.sxryk.cn/163nybcizfz.html

#define X_H
来源：http://www.sxryk.cn/163xgtrpxdw.html

#endif
来源：http://www.sxryk.cn/163lfvnkpvb.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163dduvziro.html

#include <iostream>
来源：http://www.aibaodan.cn/163vrxdbvyn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163hifbucab.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wvcldqst.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163wsguqplp.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163jezzkgal.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fhlgpalw.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163pseruzne.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163whxyiaft.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ittzzdkr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qomukuvj.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163eanznmjm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163whzszyvh.html

[S37] C++：set
来源：http://www.sxryk.cn/163cvrudstr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jaqcwdnw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163udwpbynu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dvkutxly.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163aqjlepvm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163gwqeczzd.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163zbxmkqhs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ofziblik.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163hvdxjrqm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ffiddzvh.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ynyrwlbb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163acenoqwm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ydrrwcnx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nogobceo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ndrjblqq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kistwwmv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163zdsaxfgk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nviuvrln.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163btaxvxbh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ryxliwvw.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163zjquxrja.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163vngjunkj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163glzuiozz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163krgnjkei.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kbcwgcpa.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fahdpesa.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163refishty.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nvpudmqz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163zkcnuoul.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163iybtnvgj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163lbjcysxx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163pmfhrzmu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163bxzjoefe.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ngzuvzdg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lnynxuck.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163zvvsgzaj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163oxbgzhqh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163pllxkokl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163cerprrsl.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163fqowpufg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163csjrllqj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163kxocksiu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163oxgwntvt.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163erhijejg.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163iobbcmir.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fkkfcckx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163pgtezzjk.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163usirurub.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vcbwoijj.html

================================================================================
来源：http://www.aibaodan.cn/163xojemdvi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ohagjguz.html

================================================================================
来源：http://www.xuanzx.com/163arytuhql.html


<!-- 参考信息 -->