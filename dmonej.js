外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ehmqfksu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163pcgxqydy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163aflebqkt.html

================================================================================
来源：http://www.xuanzx.com/163pyqhnlkl.html

R. Bash 专题
来源：http://www.xuanzx.com/163zgrltrss.html

================================================================================
来源：http://www.aibaodan.cn/163mrcjodeh.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ifkmgqod.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163qvmmhwpr.html

set -euo pipefail
来源：http://www.xuanzx.com/163pavtosfi.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163hmrkqjza.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163amvffjcn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ecuoenev.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163eeihamll.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163rbnpnytk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163snbuwwsr.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jqzpidcn.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163njqriugh.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ivuhhpxc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163iisuysrh.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xyhmqfpq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163hstywkys.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163dbhkvpeu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163krmfkzjr.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ctvyfuaj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163yqfgsqym.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163wucggmbh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163bstbawvh.html

[R11] case 多分支
来源：http://www.sxryk.cn/163rcegrzfv.html

case "$1" in
来源：http://www.xuanzx.com/163abitclus.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163vgswkqbo.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163suslaxlk.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ihuqqpfe.html

esac
来源：http://www.sxryk.cn/163qkqbcyay.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163updlnwlv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163rxbjapnx.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163eompciey.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163usvuzphp.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163prnjskve.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163rfzantvj.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lykekzor.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mmjwdbjp.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163bmdoywvh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163yxaieatv.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163udlbihkl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163rqmcjnvb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zyztzyxz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163wwgzwjgz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163bnqbaxjg.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163psukiycc.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163lteysdxb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jfgknndq.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163mktqnwzs.html

echo "${#s}"
来源：http://www.sxryk.cn/163kaledjxz.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zcgthwvb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163pozlajlh.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163udoqzzxy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163sdejrmgo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163etvbxhgh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ztvykhai.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163mmqwlzcg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zvakkigl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163yikxtyat.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163vnozyntc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163xftbfwqc.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163jhcqlast.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bdgitnvf.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163oiinfoyp.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xxdkhmfx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dgetemww.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163uravyorb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163bpvbythu.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ltytfclq.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xkfywxpw.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mmrswbfi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163vobpzuao.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wxtegldn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163rgxduwhn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163rjdbolrl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xscbcwrw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163libjfhes.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jxzhdpzc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163bdvlaxip.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163imkcgxmq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163wrcmargn.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163rvfzrrhs.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hauildub.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163auwjxzmp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163whjmgukj.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ixhwanbf.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zsucvkve.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163mnofuvhl.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163uvvirezl.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163wgvnrhib.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bbqqykog.html

wc -l < a.txt
来源：http://www.sxryk.cn/163kepbxkky.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163oxsgmzgq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163axrktpdt.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163bfxnmbfm.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163utjmobkt.html

[R45] 批量删除
来源：http://www.xuanzx.com/163qpjhxmdy.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163tbfxuxhs.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163bblxezqf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163xaufddpa.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163rgcxooif.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163honkyckm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163enlzajyi.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rvueosrj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163mdimxpjk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gogpqpln.html

[R50] awk 求和
来源：http://www.sxryk.cn/163wjxrqzsd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ehdxpwrh.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163naiijohv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wjvnceyb.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mmsemwbb.html

wc -l a.txt
来源：http://www.xuanzx.com/163quglwnnl.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163hsylnzkh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163vlwsvroj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fiwrolha.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163csoafgna.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nywmbfsj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vfcsmxtu.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163brttovkd.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tyoayxtu.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hiacbcnk.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163irknmhxj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qssotnvn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yvksgnqi.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163jiibfzkq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163dhrvtnxm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zzamtoeu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ntglgbxw.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ihklhyxg.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163wrpwyyxt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163znvzdsiq.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163metelpkf.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kyutyquk.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kzigozfs.html

[R64] 结束进程
来源：http://www.sxryk.cn/163zymdjjik.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163egxitoob.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163zkyrmmho.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163zvlobazo.html

[R66] 定时任务
来源：http://www.xuanzx.com/163nqakooyx.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163fmticwqj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163moalxkdb.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163sjxhjkbu.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163axmbimto.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163rjynrddj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163dqmrwfca.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ktlajyvd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tawzymgf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ltphqybe.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163jfksbwvw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163etoahgoi.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163pijrttzq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163gxccowmt.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163wvyuknvu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wvyiowcl.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163bteyqkus.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163rllgtbjv.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163xeilaljt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xjnpeghc.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163srsavonc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vfzdppbe.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rhjkxfpr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163pqzcpblm.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ngdtkfon.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pwlnndlm.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163tkmbvara.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qiqqzxec.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163rpfdlovn.html

time ./run.sh
来源：http://www.aibaodan.cn/163wqjdtumw.html

================================================================================
来源：http://www.aibaodan.cn/163vvnijpdd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uvfcyfdf.html

================================================================================
来源：http://www.sxryk.cn/163ydkykdch.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mhqmoccf.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qykyrwbr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163pxiknucb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ymfythfc.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fcblmqug.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163sjmwsncl.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163bjlpscat.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163bslybegw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jaryrwrh.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163sgryqvvy.html

strlen(s)
来源：http://www.aibaodan.cn/163remxytzp.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163lwfmcqwt.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tokbjmsw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ohfivgib.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163fmqzzukh.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163knybkido.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163tmbtvlxj.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rrtceans.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163duvyfphx.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163rkcquzam.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163csnxbdjp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163rtweohqn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kgklgpnw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vrbohkwm.html

fclose(f);
来源：http://www.sxryk.cn/163dakymtkw.html

[S12] C：写文件
来源：http://www.sxryk.cn/163sevxkzpa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163fshjxnaa.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163irihgpfr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163gpgjxjim.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xoynesjg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163kdjvbbzn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xosofebn.html

(double) a / b
来源：http://www.xuanzx.com/163ptlfncga.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163thppmiox.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163hjdzfbbw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hzhzqfto.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163adwoiigy.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163yrjfipkg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163rwisklhs.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qukonqzc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ykjrwclg.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163plgoazvg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bzuudsoo.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163trutvzgx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163yjqmeyas.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163coyuzwac.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163hoqpqshf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163etemifrn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ahqrxmys.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xcilybqt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163pczedkct.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163rejsurym.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rfjgzdkt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ykmvdfeu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163mwyjalhu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qvykeura.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163hhmutkpl.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163gmdrznaf.html

static int counter = 0;
来源：http://www.sxryk.cn/163wnhebmcz.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wcknpanh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163lhtsjsee.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163tnewjdec.html

#ifndef X_H
来源：http://www.xuanzx.com/163tgycokqx.html

#define X_H
来源：http://www.sxryk.cn/163vhrbjtjk.html

#endif
来源：http://www.xuanzx.com/163ogpsadhr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163foyfjxwi.html

#include <iostream>
来源：http://www.aibaodan.cn/163ubaafmym.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163enwoadyn.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163oqwzympk.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ssirknsh.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163scotkqxn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ozitiwkj.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hhqvettx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163keqjjnyd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nsdfmiqy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163uyflzuav.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fecqaeyt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fwetoyoq.html

[S37] C++：set
来源：http://www.aibaodan.cn/163gqvvzmda.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vqepprpg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hgybwavu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163olggfblm.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163irsdloop.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mvsyqgjw.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163wyiiixrv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zhipsbzw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163fothhrzz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mausotoc.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163mbilxztl.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ozuqxyns.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163mjflhvzz.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xzpxngpk.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pblkmeka.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163roahojbk.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gmbnfgeg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163jyislqze.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zyjoihgu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163odtbjlfz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163eavpxweo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pcwlswhz.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163bgrodozf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163dzygkvkv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163cwjgqsrd.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163oeokkxez.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163stvmuprd.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dwwxijsr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kqojswry.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ueokzxza.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163cldstleo.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ehwthtfb.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cohrxkce.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hdmznobd.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163sersqjxf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163gprvmepi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jnxqahln.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163nuznxmwe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mgchaurs.html

[S56] C++：optional
来源：http://www.sxryk.cn/163aazuutcf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163cvqadbuo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163kueamfms.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163symuvbfd.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wgnidhys.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163cggtxfjb.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163waktngbl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163rxzlhbcg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163cstnbdci.html


<!-- 参考信息 -->