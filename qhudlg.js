外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163brybgudd.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rihobich.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163adwyxjgh.html

================================================================================
来源：http://www.sxryk.cn/163mtdiwvsp.html

R. Bash 专题
来源：http://www.xuanzx.com/163xnfseuxl.html

================================================================================
来源：http://www.xuanzx.com/163qpoxhtxu.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163dherbeqk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163yuhsynda.html

set -euo pipefail
来源：http://www.xuanzx.com/163bidfvsxp.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xyydbztw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ygvdffag.html

[R03] 只读变量
来源：http://www.xuanzx.com/163rpqzlaqu.html

readonly PI=3.14
来源：http://www.xuanzx.com/163jjcdleqp.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rileytlt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163djsmukuj.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163cbpqpsce.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zxdjfvvr.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163spnirdla.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163wtlhrtbu.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163zunccdmh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163wadugktm.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163jpulwapj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163tbftuada.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zzxceapb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163pbjxanos.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163gvinesie.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ttdjpwai.html

[R11] case 多分支
来源：http://www.xuanzx.com/163kzzqimgg.html

case "$1" in
来源：http://www.xuanzx.com/163iwvdfsdo.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163tsnaraau.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163abxkyqct.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163zvgpfehf.html

esac
来源：http://www.xuanzx.com/163cswolscq.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163pwnafrcv.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163mtqjjbzu.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163kphrgdck.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163lrrlprrb.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163fkbngfzq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163flbnlfkk.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ywhbpmtz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ihovdxvh.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163iyobijrn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ypmtczfv.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163dqfnmxid.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163lafjouiz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163xaznsivq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163iofpquiy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163upmawjmg.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163rmleblku.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163wzdtqxbh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163mrghbwkf.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163bemifvuz.html

echo "${#s}"
来源：http://www.xuanzx.com/163cargwvhb.html

[R22] 截取子串
来源：http://www.xuanzx.com/163vyblsilf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ltebpalw.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163elyzgykn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163lxzdtgsr.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163uetecwsp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163poysjxui.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163acxzfqkl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qlyjbpfb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163sycitlcn.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tgrxqjtc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lloavcps.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163bgltqlsq.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ysowjovk.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163zllascdi.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tumyqwfo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163squzkbfx.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163zydfomgc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163icjpmyyt.html

[R31] 局部变量
来源：http://www.xuanzx.com/163emwbsfaf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163qvfjixwh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163pluhysoz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163qepqtoxk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163qzfqowyo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163kfebrztu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163zwftaolp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fsfcqpzy.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163uhnfiqcp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163cpigkxhw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jvvphamz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163umsshhza.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163jbrhpoia.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wvutrnqd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wqwrtdvs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163cyxgckql.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163tmgbeixc.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163vaahobku.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163jkcpnhme.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163crtpgjdn.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163qbdqhcum.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163oeqzfggd.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163puobbhmt.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163lmpcogux.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163qtkgrdoc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ljuchagu.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163sktskyrz.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jfzdfxeb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163zksqinuf.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163igweexpy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zabuwmqk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jynnuwqm.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hrgufjbo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163anuswqrb.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vychgssg.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xyvcxwpb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163qorsbmcq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163qyrleoeo.html

[R50] awk 求和
来源：http://www.sxryk.cn/163piwqlwuj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163dpjszcyb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ewjuxpev.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163hhtbwwpa.html

[R52] 统计行数
来源：http://www.xuanzx.com/163dicdescj.html

wc -l a.txt
来源：http://www.aibaodan.cn/163occrtzli.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vxytgroe.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163boxxmlrj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xqjxvctu.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ubuihays.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163zevtvedl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163tlrjhvyo.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163qgpleuor.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gytcyghh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163fgsdhidt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163xnnbhokk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163fnkkrlxu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163pknpqqed.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163usbklzxe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163jhbedxvp.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163phzisjrr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163hpnmwabx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163xqvrspfq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163eokpygam.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wpufnfbs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bgfwxzys.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163nioapiyh.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163kqdwkjpx.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163dtmbdyqt.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zlilznyb.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163evzbnmmw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163wodipktv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xorqvfru.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163aetmdezb.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wvjdizgi.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qxcvjenf.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163inutbuuu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163qdsdgvbf.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163rjsjxadz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iihjcnuu.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163fyllfxvw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163edydxmvh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163jbgwhvfb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163slnnjleb.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wbchuosq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163egwibmdc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ujoqfrfl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163pnalnpne.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ualheetl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rhpexruk.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163khcuajik.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kmevexgs.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163kaavzlzf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hhqlkggr.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ddqzqcdy.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163yzseeyja.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163vvvpaudr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rssevnuh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163myeujekq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nxhcbfbs.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163dmfgstcw.html

time ./run.sh
来源：http://www.sxryk.cn/163ahzgqmgs.html

================================================================================
来源：http://www.xuanzx.com/163ynltoxsc.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163dlmozrsc.html

================================================================================
来源：http://www.xuanzx.com/163pkkqayxr.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163mnntrrjr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pqbpkhan.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163hebiepcq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mwnkwwht.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bboqmyfe.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163micvbwup.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163kaddzyqi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bajxtbic.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xaejjmck.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163krbfpkus.html

strlen(s)
来源：http://www.sxryk.cn/163yucmrxso.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cbytgtdp.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163wwerrosj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vvgfzlzg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163zxfzijpx.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163lhdgxykm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ycntpyys.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163oywdorom.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163twfrseyj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vzbconzh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163txmrkazd.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ldgbxhjv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163yywzledj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163gdaqvrcn.html

fclose(f);
来源：http://www.sxryk.cn/163fkpbonsp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wkjqyayb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163doyyvkad.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qnynaack.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163jffjexev.html

[S14] C：枚举
来源：http://www.xuanzx.com/163lyxsynqx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zmayrjrl.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163pzchlskp.html

(double) a / b
来源：http://www.aibaodan.cn/163xvzdqgha.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ighghrtc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163iavkooty.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jogotqed.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163yfsvskve.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163snhfymua.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163smgcivkw.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163scurxmfr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163irqhaxcn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163njpcbter.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kknalguc.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163bulshixy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163siqmnbza.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163kceekocu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kzjpnmoq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xhgjggpd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163roeqfhyz.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163fvetznsc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163oxebrsgd.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163numeatlu.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zwahfdcq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163eyudrack.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163zpccyghb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163icmjiefq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163spcjxxfq.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ihlibdkn.html

static int counter = 0;
来源：http://www.sxryk.cn/163qkhipjkv.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ugqcdofq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zdwsdeza.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163joqehidf.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ixukzmgp.html

#define X_H
来源：http://www.xuanzx.com/163faezsklt.html

#endif
来源：http://www.xuanzx.com/163qmxpyicz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fvykstbb.html

#include <iostream>
来源：http://www.aibaodan.cn/163rbseznqt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163dljoqwfg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qqlgcupx.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163amqtxeak.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163uaysoupm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163wgqkyjos.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cblhbmjo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163urehkmnc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163abuhgsyz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163bjliyssn.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163bfmzvbsa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fgftcxdc.html

[S37] C++：set
来源：http://www.xuanzx.com/163xslwoiya.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ocrutwbx.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qmmrulfh.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163izozytux.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vimyjgug.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163isozjyge.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163unhjxanz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fjpbjzfs.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163upkyeigt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163wzhqkrxt.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163weypunzn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163nykgbsqc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163kqmowwtd.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163gsqxpvgh.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163eiccraua.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ulhkpnyg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fehnsnqh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163qjwdwuzo.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163uxcsthsw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ezedmeza.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xhfnjucx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hanvffea.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163otsjntgz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163earkmzgl.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jtvlogoh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163pvqhmlwu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gyzlcfhp.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xdwnostk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hbiaooqb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163njwjzpur.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163buliwlyp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163hikvlvdz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xuaiyqfq.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163pjkancdr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uushvncz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163tyrmbqgl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jgmjguyi.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ahhcwrpd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163soyoqtnw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163evilabxf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163azjcjije.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dovcnjoh.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jlrdlgow.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163raitlucu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ghloqoca.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163feepwfxo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163lbsibfux.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ljefmjne.html


<!-- 参考信息 -->