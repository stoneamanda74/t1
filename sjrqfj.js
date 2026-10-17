外链999!wailian999！

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163zikwyhlu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163rsixbezc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zkxjjmec.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163sqyhyshl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163lltimnyb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163ennllmvp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163wtkphvtx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163hmguzsiw.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163iuirwaif.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163sfiaedyi.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163juwpttkz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163lfmjghrr.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163hnffhmfg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ahejybdx.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163qlaumexk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163zxjahpvj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163lwwkifqh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163tecouxjg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163oyfdtczq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ecyfvnda.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163yhtpoiqq.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163jwkfciol.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163wbsngoup.html

================================================================================
来源：http://www.sxryk.cn/163nmxlbfkp.html

R. Bash 专题
来源：http://www.aibaodan.cn/163hnxwjhpr.html

================================================================================
来源：http://www.sxryk.cn/163tkmtrxzi.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ystofpzy.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kftrcxfj.html

set -euo pipefail
来源：http://www.aibaodan.cn/163hhzwmrzw.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163byssdvmb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163mkzafksz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gcljbknt.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163idyckhti.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163vetkuivd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163beuvkriq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163odnjuoqn.html

name="${1:-default}"
来源：http://www.sxryk.cn/163egjfodzd.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163touixoxz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163oxgrsgai.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163iqgisnlj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ftjslmwo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ajyypnzc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163hzczanlp.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163aqlwaipv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163skrulrbc.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pwgayxrj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163dljurvfu.html

[R11] case 多分支
来源：http://www.sxryk.cn/163quklsser.html

case "$1" in
来源：http://www.aibaodan.cn/163slqaugcc.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163frbgkmhx.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163isctpkre.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163cueqymvi.html

esac
来源：http://www.xuanzx.com/163dgjnstbs.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ccchydoq.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163myljbozf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163hjvzwjeq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163fydbzcpr.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163gaajdsmx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qqeuvthe.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uuhielch.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ccvdxhms.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163izwfbyay.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qgibjzuo.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163avksewqg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wflgjwof.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163babyvzoy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163sasvbzka.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ihpjzxxs.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163mjnysuab.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qmtrdbmb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163teobwmyt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163sscezktc.html

echo "${#s}"
来源：http://www.sxryk.cn/163pabibchr.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wedjgdzp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163efsfixju.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163keoerhns.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163glrarqhu.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163lgvvrqqx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163sxwppghu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163flomakoo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163yejrmhcf.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gqcktsfb.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163wwuxzsli.html

[R27] 算术展开
来源：http://www.sxryk.cn/163tcuqayaa.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163iwtsemls.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163owcfirxs.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163igixtapj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163mnrmarsb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163nyidmvvb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hjhbvehw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163kawagowr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dgklsrap.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163nraqneoo.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163jqpupgpa.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163tzsvbwvv.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wcnldjrh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163pjsgnkul.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163dzsakhvy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gfjtdsqe.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163rnpmelze.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163tdrwalmx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163vsmruqup.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qaxyiibt.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163grfbxxya.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163pwxqprbb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163umaehqoi.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163owuvcsmr.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qtpqcbvk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163twmiaete.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vbqkizug.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ophdscbi.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hhhtmxwb.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yxqctkmg.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nefdxndk.html

wc -l < a.txt
来源：http://www.sxryk.cn/163txhuzydd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163fufurdrp.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ndyxhiia.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gfyseose.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163vzplhfwy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nbgxfxrh.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163dkkrcchr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zdnfohll.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163decmoyld.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163hbgzsbdh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163eycuvwic.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fygneufr.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mrnvgjht.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163pwyomltk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zlnlmhem.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ypirrtyz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hbyigfel.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163baunvdbx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ozlaiymu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qowuznqh.html

wc -l a.txt
来源：http://www.xuanzx.com/163apdhtplj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vdqbmmbm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163vygiybfb.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163dskykvrc.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163hgbkrxbi.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163reiqtzmd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163zbpuijko.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163fllztbjn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163spiqfmfz.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163xlszynys.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lbhmdafa.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rtdkmdhx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gsyulsip.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163pacohmem.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163tugbyraq.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163igffipwe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163rfrephvj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zrnsgbcb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163eeghvwnx.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hdkztjnj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bbxiapkc.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163nirbixhu.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163cvgoomxd.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ljqnkkbu.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163yrrrbuqs.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yfkjtikr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163hxdcwnno.html

[R66] 定时任务
来源：http://www.sxryk.cn/163pmctetix.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163kikeafur.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ymjzejoy.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163thuvjlku.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163oqtdruco.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163arksgpuq.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163otkxaufl.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163thhtursm.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xgcfnsgx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163eesvqojs.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163okpnrvzn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163fvhrzchm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dvhyjvnk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dgrfrjla.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163aanxiufb.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163brjymihe.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hnkuseoi.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163fkpqkoip.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163eqpgqhgd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163lyewvohu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163okwfkmwp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163gpgdahqv.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rdwzcdib.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163elsuatqd.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qvqukgmn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163qzzhppup.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xuotcccf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163kmtbvyrj.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xsjqzbti.html

time ./run.sh
来源：http://www.sxryk.cn/163rgmtyupg.html

================================================================================
来源：http://www.sxryk.cn/163bpiosics.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ybwwcikz.html

================================================================================
来源：http://www.xuanzx.com/163gpqijiel.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163djmklgqn.html

#include <stdio.h>
来源：http://www.xuanzx.com/163kigewvui.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bwtkfvro.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163xyqfjoys.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163rlmqbvzh.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163xmunfhki.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163vfuyjnsz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163bgraidqz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163labycmes.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qciifufn.html

strlen(s)
来源：http://www.aibaodan.cn/163tjnmxmqb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163nxgzzxle.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163kcqxadoz.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ekglrdai.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163frwekgxw.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163yuxxubyb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163zykbwqvi.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163hmlznbgj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ixtajzvj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tndvijdf.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163wsegdqhq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163hidlkkww.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163phhlibqf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163agtfykgl.html

fclose(f);
来源：http://www.sxryk.cn/163vmupdygg.html

[S12] C：写文件
来源：http://www.xuanzx.com/163zicpofmi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163akwnhyhk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163hhisytwo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163uvqpnowh.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163btlayzmb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pqptvdxz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163yfzrzbkv.html

(double) a / b
来源：http://www.xuanzx.com/163vaigucej.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mqxgvbif.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163brtnctlx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hjrxtnwb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163kuwmgfzw.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kddrgibr.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163yptuckhb.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ietecpth.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ipohuxtv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163tdbfqwll.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qcgrxuiw.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163rnjrmxoo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163rlrgnejw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wzmobotg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163avteqefo.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cznzqccz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163sbotubae.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163oqonfbmf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qsqrhpem.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ytbzdjle.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vhofxovq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163irxbmbdp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163uutganzc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163enbqepog.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163kiwuejig.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vfbkmqxx.html

static int counter = 0;
来源：http://www.xuanzx.com/163womqayme.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163bddusbnx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jgxcfbzn.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163epafujwz.html

#ifndef X_H
来源：http://www.aibaodan.cn/163iprilumf.html

#define X_H
来源：http://www.xuanzx.com/163udqzchbe.html

#endif
来源：http://www.sxryk.cn/163kivznvxw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fbfqdzcf.html

#include <iostream>
来源：http://www.xuanzx.com/163jqxeoozo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163fehkuoho.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163kxmyyoxm.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qbcpsdxj.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163hrrkftii.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163emhnjzsv.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fuccbfgr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fvtslooj.html

[S35] C++：map
来源：http://www.xuanzx.com/163umymelqr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ncjxgazy.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163oiidzqta.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163envrpkgk.html

[S37] C++：set
来源：http://www.xuanzx.com/163eugiuije.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163qitgdmwx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ujqbvwdu.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ubklppwp.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zvjwgadq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163duccxumb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ivfvpnsg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163lyzcadim.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163uqybviym.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wadevnfz.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163lmdnlodv.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163aybafsxa.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163gweqnsgd.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163csxvljlt.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163gxvmmftf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ltldsdhr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ixrmwiia.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ukdjelfy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ygrdgnbw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hiujlddx.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163sujbzrti.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163pznebyye.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163kokuaybu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163xwmszion.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163utjvvvfe.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163hgfxoqrc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hhiruthu.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gnakkrrn.html


<!-- 参考信息 -->