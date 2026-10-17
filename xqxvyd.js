外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163yekqtjng.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yjurozsy.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163yumgsogz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163neeqrtxf.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bblkujlp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ftbnwpov.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ngejsqlm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163bhysumdf.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163tjaanzus.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163sjuavtds.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163kegovdpl.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xkyuhrzi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163nynepyic.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163wgrijmzk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nqwmhfff.html

================================================================================
来源：http://www.sxryk.cn/163ulnpldmn.html

R. Bash 专题
来源：http://www.aibaodan.cn/163lsbotcuq.html

================================================================================
来源：http://www.xuanzx.com/163znfjucxd.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163gpsudxbp.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163qqzzyljr.html

set -euo pipefail
来源：http://www.aibaodan.cn/163hpcaxsiq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163nfmynshx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163yryerjvi.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163djaepbcp.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163cbousuum.html

[R04] 位置参数
来源：http://www.xuanzx.com/163sgkuqeda.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163asfbdgsf.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wkqkshoe.html

name="${1:-default}"
来源：http://www.sxryk.cn/163lrzjwhhs.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163cfljjtvt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ovhsknad.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ujefjpbx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hahbqnua.html

[R08] 数值比较
来源：http://www.xuanzx.com/163wdiokodm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163sbjepklw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ejbfntxd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163llwiuubj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163dhlnigfg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163tbfsudlp.html

[R11] case 多分支
来源：http://www.sxryk.cn/163avlsujir.html

case "$1" in
来源：http://www.sxryk.cn/163kaewgqdw.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ueusfdwy.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163aqvmdzdq.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163lejrrqfp.html

esac
来源：http://www.aibaodan.cn/163baxtvjrb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163uoifdyao.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ajzvrbtr.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kqtegruo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163aeipnvbk.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163shntqyuc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163atuwcnic.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yczoleia.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163duzxwmbk.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rdffjlxs.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xixuamnm.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163gpocgkzj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163wmwetfaf.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163htddcbvu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tguboktd.html

[R19] 数组长度
来源：http://www.xuanzx.com/163zfcwdekw.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163vgxtrsfj.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jmkurrdb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163sjjjccae.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163eeyahuhk.html

echo "${#s}"
来源：http://www.xuanzx.com/163lpucmqty.html

[R22] 截取子串
来源：http://www.xuanzx.com/163lvkwtqyi.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qugqjkog.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wqswndzg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163iletqend.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163vziyjdeo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163pnvrfxbs.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163rtbvtfns.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163epshzrnx.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hteqveyy.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163fhbbymxt.html

[R27] 算术展开
来源：http://www.sxryk.cn/163gmwmsbmh.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163yemqewfd.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163mlijlmne.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163xhmljrej.html

[R29] 定义函数
来源：http://www.xuanzx.com/163phriicsg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163pphnxwlk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163tgwgggaf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wahgrjql.html

[R31] 局部变量
来源：http://www.xuanzx.com/163lffahxzt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163lbithdvs.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fkfkegsg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163budgsitz.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zvrpvdan.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hxiejrcx.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163lluqnavr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xnvnosip.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163xvdgyobw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tnzjugdz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163iwijbgze.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163radcjjpp.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yoldtbut.html

files=$(ls -1)
来源：http://www.xuanzx.com/163bucracpa.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163btrfflop.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163yflswpsx.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qsmokcnz.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163kpmjaofw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163saiacxuk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zvanupis.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163kisrbrkm.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wnqdlvlv.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jxpumvsk.html

wc -l < a.txt
来源：http://www.xuanzx.com/163mluhlmvz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zyrehtjy.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163mwiikcxi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bkfqfuum.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fgwefmrw.html

[R45] 批量删除
来源：http://www.xuanzx.com/163wxdsamnf.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163jlvuxmdg.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163rvmotcvw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163flyhdokm.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163bbaxvrpu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lonsyddd.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xfzgvjyh.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163riqwvxii.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163swzxlbww.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163xctywuew.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163cdalvkme.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fwqwredk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163mvusjyro.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163tkgizeyo.html

[R52] 统计行数
来源：http://www.xuanzx.com/163alkthgye.html

wc -l a.txt
来源：http://www.aibaodan.cn/163kdswrvnh.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163jobuwjba.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163nsjpgufw.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lgmsgfal.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163inhfufih.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163icpwxdmk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163lsycmsre.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163fnokrjxx.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dhwnilac.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163bwutnggy.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vsuceauo.html

[R58] 下载文件
来源：http://www.sxryk.cn/163jcnztwof.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163udedqdgf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rpjyemhr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wencsvwr.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163nhutkzcg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ejhxwkxe.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163djyyldtv.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ioefdosa.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163cxngjhib.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163kaegksni.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vkhpstzc.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163kryjjqfy.html

[R64] 结束进程
来源：http://www.xuanzx.com/163yxrfqjnv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163hwtfkrdq.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163bwwvtiwg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163usfgnwek.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163qjxmnqvx.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163fxkpxydw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163qcrkgugd.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163cgdjwkal.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163lisvezqp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163qqokvkjz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163wseluwri.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163hlestxqx.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163rmbfnwtq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163kkiurnvb.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163sakrpunl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163egptgbuw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xaooldnf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163biozjaio.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xcdnweig.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163svysksdt.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lisareqq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163yxlohaie.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163kitbeaxv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163mgqyzzdo.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163uuisxwaq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163oojvckkw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pjfynggp.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gzivugoa.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hhzxsxux.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wnpgqish.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ytmasouj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163gafmdaau.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163nltktufi.html

time ./run.sh
来源：http://www.xuanzx.com/163quzryqjp.html

================================================================================
来源：http://www.sxryk.cn/163ismiabve.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163qsfxsufk.html

================================================================================
来源：http://www.sxryk.cn/163dgyxmqct.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163wfitwjjo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ltvrxtsn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163fnoxyksr.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163rtlcziqf.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wxufnsvr.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163piepmwzl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163uuuuycex.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ihzwtgzk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xpagpqsc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163fphbpjzu.html

strlen(s)
来源：http://www.aibaodan.cn/163ukgbnrlq.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zsgzdbrt.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163krborumk.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163mqyefnis.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163gipvbxim.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jolkfytv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163mdkgriyb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163wpktlgdb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163oqdbtinl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163jtcscsue.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163eeoopvzi.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163moglpvjz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ajclotwb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163uhpvoscs.html

fclose(f);
来源：http://www.sxryk.cn/163vdlwtisv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163lejulpte.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163qzaqlags.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163micujhlh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vgrthgio.html

[S14] C：枚举
来源：http://www.xuanzx.com/163grsuqhox.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zazgphbp.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xjspfpjs.html

(double) a / b
来源：http://www.xuanzx.com/163mvzefgsi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163yuafakgk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ucxjkbwo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mpecspab.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wqqtagca.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163flttqzfs.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163kkdjbcjw.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hxmgyvtt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163anzgwfif.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163frwegpke.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zkpgfrhp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163foblxhhc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163kadxfted.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ldjcrfdb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163trhddzso.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ikxjaguh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163frynwukp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163fusuwyed.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163kntfdtkb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163uhjltmag.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mzwdmksd.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163huptrjfd.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hchodbrg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163cbskzihy.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zljlayxz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163dhdnceem.html

static int counter = 0;
来源：http://www.xuanzx.com/163prosczwr.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zmkegdfp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163tyqtimhd.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163qqkheyfu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mqvsyvjl.html

#define X_H
来源：http://www.sxryk.cn/163sxufywlm.html

#endif
来源：http://www.sxryk.cn/163agpyhpxp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163xnpysllc.html

#include <iostream>
来源：http://www.aibaodan.cn/163tgedbjxj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163abwshpmr.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163chppqmqp.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163pdctffec.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163wdfmeify.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163rvzhcqpa.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163agxzxpvt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163rixydoim.html

[S35] C++：map
来源：http://www.sxryk.cn/163btqemfcw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vcgpwppc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163cjaueghq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163oztkuhet.html

[S37] C++：set
来源：http://www.sxryk.cn/163gxpqhzkp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bkblcsiz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ndjaropn.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163dlcxzoxr.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163hmegyzjj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163edhgwsiq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gpzwgmha.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hxakbrfo.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163givczkad.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qhthtnzg.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163sxcttklu.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163adptexeh.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163tgnxadwk.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163yeakixlw.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163pdhjkhmr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163pckquvrp.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vtzlcsqp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163pffagesk.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163cpnijkfh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163selkkiie.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163taxifymu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xukikoqm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nytyekqc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163kgxsgtyv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fonvsepe.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ybrcotcy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163bswbfaov.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qfampqxq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163vdfxpusk.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163zbxqrrkk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163fnwnyxcj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163zxbazizq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gzvbylld.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163epqafhiz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jnhhmyjx.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163crnxnjgb.html


<!-- 参考信息 -->