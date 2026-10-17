外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163jsekdnuo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163llbjanes.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163tmzuovgc.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163asowbomg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163byoeqwae.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ecwkzzwj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dhilfrui.html

================================================================================
来源：http://www.aibaodan.cn/163khsdyryc.html

R. Bash 专题
来源：http://www.xuanzx.com/163gpfogtal.html

================================================================================
来源：http://www.sxryk.cn/163izwaehxe.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kqkjmvrj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163lzbbjyyg.html

set -euo pipefail
来源：http://www.xuanzx.com/163lnmcmihs.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163aogzyukj.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163xrzukxzm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163aikspald.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ofbleplc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yohsisbz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163fixukjph.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163cvbeanwp.html

name="${1:-default}"
来源：http://www.xuanzx.com/163hogmwskg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163bzqykdkn.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163zuvhstrk.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kozyhuik.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163bgzjzqgc.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163admftxmn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163zuzdhdpu.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163mvbmlzln.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mtthvrwh.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163cxgaqxuq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kvohydxq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163sbdlafaa.html

case "$1" in
来源：http://www.aibaodan.cn/163vjbusrvb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mlfwjadi.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163zvbcqxzl.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163wkyejhlx.html

esac
来源：http://www.sxryk.cn/163oaodswor.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dghhtgxi.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bauopijl.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163fgruvvsw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163nblwuubm.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ufqlrnrs.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163kerdwqpf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163cppplnzp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163eyqgvojg.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163qnnulhsm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ttvgvyla.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163mnmgklux.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wcqwnnhc.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163rjxqvudw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163lnpbrzbj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163xqnyrqem.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163qpvltoyq.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163zzwgwrhk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163rhkrskyc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ihgrzgbm.html

echo "${#s}"
来源：http://www.sxryk.cn/163tzjevxgs.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fhwrxytm.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163kxokjsbg.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163oiiiwmyq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163nleziolz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163lovdakif.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ohzxfvbn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zsfihomt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163kmkmsjid.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bryxqtaw.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163laccgriu.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163bbfqmauk.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zwzennio.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ocehsgkl.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163qaahrqbf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ujsrqehb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163qhrcmbko.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qnlzucdk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163aumredfv.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ssnuofur.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163alaphdqx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ijgzwohq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163czqqjatz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163cxochglv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ovhrkixb.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163focmrrrh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jseuocve.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163uanhoosa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nswmnzki.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163gtfbcljt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lgzxbolu.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jjsvxeop.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163twhsrvag.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mnsrmaxz.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163vnvcdkib.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163jufcitvi.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163efynjowf.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hikpoucs.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163tsuqdzeg.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163vgycggln.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163paxfoxwx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ylonfovq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ggqyykcm.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163hsdeqnll.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163vcdlykeb.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163scxurclq.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163stnaecaf.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kvcwwpod.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pxnrnyci.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163uefrzmqv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fzdtaasn.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tmyagppi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wwqyxala.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163smbgmbes.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163gfnlbbzx.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163geeckmmd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163qeiptejs.html

[R50] awk 求和
来源：http://www.sxryk.cn/163sukifalr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xkbirsef.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163jdaycxdl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jafvmgik.html

[R52] 统计行数
来源：http://www.sxryk.cn/163essitamc.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qclubxwj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xwxnrfan.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163teskobej.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ndjnhxvj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163gkyghphb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163zpggdmxf.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ruoiteyu.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163bjdtkcmh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163zamsdnhc.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hjnarcbi.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ybtkkpla.html

[R58] 下载文件
来源：http://www.sxryk.cn/163yifzfxsz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163asdrujus.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163sswzmbkj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ntydjfbf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xrplcbmy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163xkwzlavb.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hvlwrbqc.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163xnxxansd.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163dzqpoxvr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163osaxciaq.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163lnzoehrj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163eoniyioj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163fqohyybs.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163xvrqcsna.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zekntysd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bjvcpgpd.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qerrgozn.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163sliclgst.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163iuafdigz.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163lxtfsida.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163xregrneu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163maizvybh.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pcflgowi.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163inrqicay.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163aqymgczl.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163dmbtwdul.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ygomzxaa.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ulgfgqbf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163nxnumneq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163unnbqejh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ysdlomcj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163deqjqzhn.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ltyvejfb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163xtqhrnat.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163usfgmptk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mhmizgkb.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163sojsflxo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dtbxqneu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163cdjgtuye.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gfkfttxh.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kabovbus.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163pbimtasg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163enltjlhb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163sgdkhuvz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163lwelrkzq.html

time ./run.sh
来源：http://www.sxryk.cn/163vzwvvxyx.html

================================================================================
来源：http://www.aibaodan.cn/163dmiwqihw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163yoixbcgi.html

================================================================================
来源：http://www.xuanzx.com/163ougvdpve.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ndeuagiy.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ejyflyqj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163mqugikzk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163apubrexy.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dngrdjxw.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zzzdjjiu.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163drxudwnq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163egnscnam.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zaeiwsyl.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tlocnmjt.html

strlen(s)
来源：http://www.aibaodan.cn/163cwciemlb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163jecuszaj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163medgebzg.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hxebevvn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163jwzwilfo.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163quqwjgmu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163tjhtpkto.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bnqwmlkf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wthxlivv.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163owylscss.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163afqaitua.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zgmzwrpk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wweumyvp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163whyzyiip.html

fclose(f);
来源：http://www.aibaodan.cn/163gzfukluq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163olkjrnts.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163cuhxuqkj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ccvtajmg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163vkyqcizi.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163izlgnnjp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ywklzjsl.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163qbijxkio.html

(double) a / b
来源：http://www.xuanzx.com/163aqspuvop.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qwfeikqh.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163jyuydvez.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qzohjusy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163lwrowlqw.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ukknsyiy.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163mncklnii.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163bfhtrfgz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163igrpxxot.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163yzjgqipp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163odyzqwgg.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163jxymxgai.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gbjumeam.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163epdgasza.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163znsjblwt.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ndvunpnn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163jbmxxpdf.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wlarstpn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163stdkiblc.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jybpnyxn.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163kvshdhne.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163rjjmbciq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jxxrioxp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163aylnwdpb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163mqlrdqfr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163hyqvxiau.html

static int counter = 0;
来源：http://www.xuanzx.com/163ifxjpslc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hqkyahns.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163utkupxgm.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163llwfvxhm.html

#ifndef X_H
来源：http://www.sxryk.cn/163gikmyxnq.html

#define X_H
来源：http://www.sxryk.cn/163vmgqsnfm.html

#endif
来源：http://www.sxryk.cn/163nkxcqurv.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rmjyycnb.html

#include <iostream>
来源：http://www.xuanzx.com/163oxgrbuds.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163kyklyvcx.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163szyxdiul.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163eyefcemh.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163zaatlajz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163yhszgeka.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163uncblvlj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163urxbeplb.html

[S35] C++：map
来源：http://www.xuanzx.com/163xdzwslmp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zoaueyei.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kjhzszyt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163pmrnztuv.html

[S37] C++：set
来源：http://www.xuanzx.com/163nddmbsoh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163lrtoqafr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gygpbwip.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163smqhdknv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jxvstnxa.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163amqkacul.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163iupddupi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fomxubhc.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rhmjyrzy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163gpnunlhx.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163axthjgli.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ezsomsqi.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163yrbggxvt.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163chqjjrqq.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163quoqzadn.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163mwhstyxs.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163weltnrfe.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163aqpkumnm.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163alivquhz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163axlwcujf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163grfaaryq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wjwswpou.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163lmoambwq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163skorpeoz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vgxbbvoc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nssgcnee.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163agaccqyn.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163vtvgmnvk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kmecikiw.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163pyqygcwt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qjwfwkyi.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vtmxzulf.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163dteunbtb.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163oimqruie.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163tbcuyexv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163eomkjhac.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163otwtmuvd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163eqlftida.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dyegegks.html

[S56] C++：optional
来源：http://www.sxryk.cn/163kpurwzul.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163psmrrepx.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163sessycaq.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163uldrzlvj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163cjmuiuzc.html


<!-- 参考信息 -->