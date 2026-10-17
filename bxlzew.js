外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xqyssvbu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163tmyxxsyl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ewsctnvx.html

================================================================================
来源：http://www.aibaodan.cn/163gnooktre.html

R. Bash 专题
来源：http://www.aibaodan.cn/163pvfeowpc.html

================================================================================
来源：http://www.aibaodan.cn/163qpxuessk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163kfvwphhn.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163igjkwkqg.html

set -euo pipefail
来源：http://www.sxryk.cn/163bdeinztp.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163cxehwqjq.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163wxdmwzuc.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ptoznbcx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163hxusheyz.html

[R04] 位置参数
来源：http://www.xuanzx.com/163uhkfjlbj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163etmdeqkl.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163lokxbvhf.html

name="${1:-default}"
来源：http://www.xuanzx.com/163iadnpqwp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163veadxzgy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163icmmejye.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dounajna.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163lvururfo.html

[R08] 数值比较
来源：http://www.sxryk.cn/163dhoypfez.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163aqwsnsbw.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163aufnvrpd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ucavbshr.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163hbigsipu.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163yedccckh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163gfkehaaw.html

case "$1" in
来源：http://www.sxryk.cn/163hjgdetos.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163inookkxc.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163zvnowmsx.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163dktxcqzd.html

esac
来源：http://www.aibaodan.cn/163ulojbeqx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wmpbngoa.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pjzkmivf.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163nhqzsfew.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163hkeiudmm.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163zswivokz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163vlayzfis.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163griktnhs.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163orobmhpu.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163qimbdpdc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lhxmpmwz.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163vlhlbzuj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163efximbkj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ppozshdk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163guketdlo.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ilkbotoc.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163aecdwaon.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163mgskfewt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jxfsegbb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ylagmyrh.html

echo "${#s}"
来源：http://www.sxryk.cn/163cakjzqyo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163easuggoi.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163icfgxpzp.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163mtlnisoq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163hvkamawr.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163kfasnzmj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163pacxwwck.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163sjhmsbkp.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ywdhvcql.html

[R26] 命令替换
来源：http://www.sxryk.cn/163zvdejoaf.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xlnkknfk.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lpjxjzou.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163kvoqudfg.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163hysptzzs.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ezhfykpo.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163rdwymimp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qkjcyfnd.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163yomtjffs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ixhtliqh.html

[R31] 局部变量
来源：http://www.xuanzx.com/163xveqqfnu.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163cnluqzjh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fpqdbzdf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163nswoleph.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ijqfxfsf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163gwmpiopt.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163djkgwtvf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163knvsplyb.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163fqhprygm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163wmzatwdv.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qlynqouf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zrvwxrse.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ronvydjs.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wcjiewnk.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163nuelwxdd.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hclwazns.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163tiicpnlk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163unaxslun.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163nphdzqcm.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163dnpmfhyq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pzoomfle.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xafrtjfm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rdtrrggy.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vwuwmshk.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bwlficmi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163setdtxcy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xhkfdwnu.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163gfuyvkkl.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163opbpivwa.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kbtdlodz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163eitwmpkr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163aycvhcbq.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163rqydkhse.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163sgegxmqv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ayusuvjh.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163xojcwtkt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ebecrlno.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163kpcxphjx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163anamacnv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163uejcativ.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163fsyhzuzr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163eauniayw.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163alftgwwe.html

wc -l a.txt
来源：http://www.aibaodan.cn/163rdfnassh.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bcvykkew.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163xttajznw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163bkpwsynf.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163whjojwjt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qrmqocao.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163idpkmgkz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163zddvopde.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163rikyxjyo.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163kbqhpwyt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ddxuivqf.html

[R58] 下载文件
来源：http://www.xuanzx.com/163bltfanyq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ecgqqkhv.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163auwdyvkk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163trmtegjg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163qjcmfhsl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163iglhrrit.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vammwjqe.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163hfctjyzw.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163mwevlwdx.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163rgaxspkd.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163wtmmbsxr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163grtlyigo.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163njselgxp.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163fahvraty.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163tgaqgiqn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163igaxbhyx.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ctjjtqag.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163lsianrro.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wzhyeohb.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163fmlmzesu.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hqjxrilh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163jnnrouuu.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163swmdtwnq.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163uwgiqlpf.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163kiuyuppm.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163vircmzzo.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xpoxpwax.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qsjpxflz.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rgjqqrvy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jytczjdq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163izgaiief.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gdqgykhc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163nnohztpf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ahdnhdgx.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163llpzpsbj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163tlsncxnr.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163wivvsxzn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hqzjmxih.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163llgrapga.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ltcsdpmj.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163higdghnr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163uydamifa.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hboempqo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vjeptthe.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163lgzylrap.html

time ./run.sh
来源：http://www.sxryk.cn/163xanqkvih.html

================================================================================
来源：http://www.aibaodan.cn/163sunohbug.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163rtpudizi.html

================================================================================
来源：http://www.xuanzx.com/163qkdxlbkx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ybxlinys.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ujdagxxy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ywcbtvhw.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163xdixmksq.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163pamogahg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163dymwvvay.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163oxzxlvvk.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163padvsled.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163anoiqwnq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kuensrnn.html

strlen(s)
来源：http://www.aibaodan.cn/163snwetaqb.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163rlxlgcml.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163tekwxudj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163vdtqccld.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163izolxosl.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kmfjxjlf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163nsvizxga.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rhuqvtgd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163arzzymnn.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163gigwfixa.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163omisbmqh.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ghwqoqef.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163cyrqvdnk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163fmjjtmcd.html

fclose(f);
来源：http://www.aibaodan.cn/163tuuyptpa.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163snnzdgss.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dozocenr.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163cduyhbge.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163fefmtjwg.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163byxkicyb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163tuyfbszk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163oqtrjcgg.html

(double) a / b
来源：http://www.aibaodan.cn/163zceygojb.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163bhqpjctr.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163oxavzkku.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163cmalojdh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163oyleksgf.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ddugfffc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163acemdezj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lqbhqgxn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yoonzoul.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163yibgjxvr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163utmarymm.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163qupgiclj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163scmcifcq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163vplvklbj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163arewdyjr.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rmnjbjqz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163bpjnnfsp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163jsxnglfn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163vgwnzrjd.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163puppjtyo.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163zywyygln.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163slnrujnh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ysejnkst.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163iufdaipo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163hnmqwueq.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163hxhlkrgj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163fualvymi.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ktxxayxy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163guhxvlfr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163aeebxrby.html

#ifndef X_H
来源：http://www.sxryk.cn/163xiffreof.html

#define X_H
来源：http://www.xuanzx.com/163unrogaex.html

#endif
来源：http://www.xuanzx.com/163gfqhlmdg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163rlqijdnk.html

#include <iostream>
来源：http://www.sxryk.cn/163vvarvjgi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wqtelrvo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163jkyrvpqh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163vsxsywxg.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rzeipcna.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ueastqqg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163eiqxrdqw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qfothiie.html

[S35] C++：map
来源：http://www.sxryk.cn/163czfwmugl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163nallfife.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jbovacks.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wpixirqt.html

[S37] C++：set
来源：http://www.aibaodan.cn/163tzcuweti.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kiavqgqn.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wvldcshw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ontqbqhg.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ioedtxiw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163lujxrble.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xcdezbym.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163urbuawqs.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163dxruvvxw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163okvlbila.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163sxokdxic.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163okahfotq.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163olvnjcpp.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163iwjtfwmd.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163haqllonb.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qvpgrqmf.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163axqbdcjq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163pobmcfxu.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vjdidagv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163umujbmpf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wccuomkn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163nlakzckm.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163lgddxnsj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163otvegdgr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163pyjkitif.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163swoyidui.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vxgzraxi.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163hlqxousa.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163iptbjzvn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ohzzjdbc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lhgfeqay.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163krgvcxsw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163cdmrktay.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ubbmawqa.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163utvdkhet.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hpmkfczh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163yeysztkf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hdwvqxgd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163oxdhpwaj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163rcuhdmph.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163cowdvsyi.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163rjuttpck.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163njwqnloi.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163iicajkdl.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163plgzopxm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163mspfntek.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163doodkrfq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wdsrxaic.html


<!-- 参考信息 -->