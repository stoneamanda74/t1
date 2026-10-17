外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163tkjchcka.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163rcsgwlpy.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163vwdxwrdf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163jmcuwdna.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163epytivmi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163icimzqbs.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163pkcpwjvq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163szvirhdd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163quuaqqpu.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ptkvlldf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nlbeqsze.html

================================================================================
来源：http://www.aibaodan.cn/163jcjtqwzb.html

R. Bash 专题
来源：http://www.sxryk.cn/163rboaaztj.html

================================================================================
来源：http://www.xuanzx.com/163rmqjljxy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rgnwworx.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163rnzeubab.html

set -euo pipefail
来源：http://www.sxryk.cn/163tjgkffuy.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qnskqnvk.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ruomtihl.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163njthnogc.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163cxsewjax.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163wmblyyuy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163biyffeoi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163gjiudmva.html

name="${1:-default}"
来源：http://www.sxryk.cn/163whjobymm.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vgjcnuzm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163yegzmrvw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163uxqqzavp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163idqdkgom.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ahdkoshy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163soadrnww.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163zcroylgy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163zttixcbc.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nrlyrpps.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163dkygufcb.html

[R11] case 多分支
来源：http://www.xuanzx.com/163hcilioos.html

case "$1" in
来源：http://www.sxryk.cn/163zagrwetd.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163tfulrhxu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163fxqjexlu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mbjiwctj.html

esac
来源：http://www.xuanzx.com/163gfosdqcw.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ruqwhxpk.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vfsmrfjv.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163vbvimwml.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163emwotbvw.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163umnyuzdc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163dkyfzlks.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kfoectfn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163uxmppkbr.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ipvxwade.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163txgydqvg.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163prqfjuok.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163lcgdtmnx.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163vkqxylqc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163mlnbemor.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hnpvokfk.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163rvbpmdcb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163nxtkhxqv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163yszinymp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163fcajakkq.html

echo "${#s}"
来源：http://www.aibaodan.cn/163etjqrxpk.html

[R22] 截取子串
来源：http://www.xuanzx.com/163glhxxjcj.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163zemaquuj.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163rkraxmih.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xbkvdbul.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163dyyotfhf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163hljexwtu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163aslokvmq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163welncwdd.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ancymmey.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gkzlxhag.html

[R27] 算术展开
来源：http://www.sxryk.cn/163scckxaal.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163tevomfzn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163kjzmiqpz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163epkdhgii.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ldvatvip.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ecxknldf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163sdigkfnt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ozsgunqx.html

[R31] 局部变量
来源：http://www.xuanzx.com/163zptjrdfo.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mnyzsnwl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163abhwrgir.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ebxoikxc.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163rlohhvxq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zqhatscp.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163trpqkkpf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ctqzjmca.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163iaxhyels.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jfyioufm.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163rszlgjwk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163naaedcds.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163dvmcujnp.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ygotsjiz.html

[R38] 管道串联
来源：http://www.sxryk.cn/163igijuqtq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163zuelfrfq.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163gbcljtum.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jnhdgclw.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163oajhcxvu.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163mkydteoe.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163hvjzapyk.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163qojufsvf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163pdyznuub.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vqhapjpl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qjkkbdpa.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163olzdcsmp.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bsffcwws.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rbqvdpol.html

[R45] 批量删除
来源：http://www.xuanzx.com/163tfujkkba.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163kushvixf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jwaveqbj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163afaprsto.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mffhgnrc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163gcbugpbq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163mluptrgi.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163liyeseex.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163bydyknbp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163eqhfztzt.html

[R50] awk 求和
来源：http://www.xuanzx.com/163dmegxmvd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163phmkqdql.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163udcdyebl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163btxyakzl.html

[R52] 统计行数
来源：http://www.sxryk.cn/163avqaosdo.html

wc -l a.txt
来源：http://www.xuanzx.com/163pdqolout.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163pnextycd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163nrdqjodd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163kxsxyytd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ybpcjpdc.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163liyvsbjz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163jjtdqkha.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163pjmofctp.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163sbazrauy.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qpxxvxle.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lwktoblo.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163dqhqocgb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gxaztzif.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wazefuad.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163gneszbsb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zqezlwrq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163lhcfiniu.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ktwjxydz.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163mdnzsqhd.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163npqgqyko.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163tbsmjpki.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wrgpvlqe.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163iuqjhkxj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qvgmzghy.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163yzgozfbo.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xhpnrvzh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163igcrokcr.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163hvqkvfoj.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163szkddhmd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ubfxacwt.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163oljozvug.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163bzgfdlle.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163erfehwhk.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163gdhmdrcr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iuzqpydz.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163gkzzwqvp.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ioyccjjz.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163tjhhsdpg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163hgjrxkmk.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163jijwtofb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163bkalgnul.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163jdvfkgky.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163vqssbvrz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xjchqtph.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ftjhtzvj.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163smnixmtx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163sujudwrw.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ubtqlytw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zmxvzcqq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163gznigtdm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163aobffakn.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dnnmthho.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tucawhxx.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163sqlgxkpr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163sarwbmic.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163hiqvsnra.html

time ./run.sh
来源：http://www.xuanzx.com/163prroryzm.html

================================================================================
来源：http://www.xuanzx.com/163mujwdvqc.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163rdibzlcz.html

================================================================================
来源：http://www.xuanzx.com/163lfntncvm.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vaqvtayn.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jtsubhyj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163zythtsju.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163epcvzqxm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163fqwumwyu.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tiluftmg.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gftwyhcv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163onqhzger.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163yqadtlyu.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163qtrhrpvb.html

strlen(s)
来源：http://www.aibaodan.cn/163mepmduto.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163jxatoehj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163etmtansk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163hyonmyrx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ykdniscc.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163plqrhhaz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rzlsxdew.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163pfsndzsu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zsgvuneb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ywmqrrpy.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163srajxgpc.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163radlehwq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163atzgimkc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163tfhtsgbp.html

fclose(f);
来源：http://www.xuanzx.com/163azenudpu.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ssqjroyl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163qkkcagov.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ohgpfugd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ikonolym.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163kkzohlgp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mjqtcmoa.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dsurfdbq.html

(double) a / b
来源：http://www.sxryk.cn/163hnbtidnc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163tydcrydj.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kqgzkymc.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ixawuzrs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163alvsomet.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lxxfkizz.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dacrarxe.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163dtbyojba.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dmgarjxk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163msudiczc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jwwpgyjc.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ocyidhfj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163dwqnuwvs.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163mcukxwkp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163rnwegylm.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bauigszc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163trhpwrbh.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163iwvwzxsu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163niugivsx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163jwlnnzln.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163srpwvxun.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163unjtvwtg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163cascfwcu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fjkprjgc.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163khhdfggq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163zwkrcrym.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tfuudbpt.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163oaxjfzqx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163txaalxnc.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qbhyxanb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163jrnmbfca.html

#define X_H
来源：http://www.xuanzx.com/163dyjyqngt.html

#endif
来源：http://www.aibaodan.cn/163dvehbsgo.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mdqlalyp.html

#include <iostream>
来源：http://www.aibaodan.cn/163wxdecgnb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163foqxkbfq.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mwsumwet.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163llomndry.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163lzhmtfja.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jwcxohkj.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rvedxywd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163nrgpwtfs.html

[S35] C++：map
来源：http://www.sxryk.cn/163jeyuxpbu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nsujpwwj.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163pilzxmba.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163skbupqpg.html

[S37] C++：set
来源：http://www.xuanzx.com/163imevtqfl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163aanelvvq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163jekskofc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163jxkohhhb.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163mrvoluaq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163pmfyyhif.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163izfvebej.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ayxnlmql.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nxbdqkkt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163svttajwh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jkpsvtiv.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jttquzpe.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jushosdd.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163fsgzqouo.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qufuulbk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163stwizpci.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163jlpzorqi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163kuvxxewg.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163zbdcfxbn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vuwdrhio.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fegdmxts.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ccbgfiaf.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163llmovbcd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163byxlqoeg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vmqkctwy.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163scbooiqr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163qkpxqfch.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jozweujd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163kqaqeyfw.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163gxovaujl.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163zeyuhdjw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163hcbujato.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163evncdkkn.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163rmarxgkn.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ifxxcpqv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163uanlsfyb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163hdhybcti.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xnbbfnoq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163rausbjjs.html

[S56] C++：optional
来源：http://www.sxryk.cn/163bwzapprc.html


<!-- 参考信息 -->