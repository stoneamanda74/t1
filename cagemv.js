外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163kigetoce.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mkspdbsz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163bmapbrfy.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163tyobzpjs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163awoleayd.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163qkbkprlb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163wfjhiqzk.html

================================================================================
来源：http://www.sxryk.cn/163lvzyvzqh.html

R. Bash 专题
来源：http://www.xuanzx.com/163slprcppx.html

================================================================================
来源：http://www.aibaodan.cn/163zfwbjime.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163axxrzunb.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163pdxpsmic.html

set -euo pipefail
来源：http://www.xuanzx.com/163vlnmpxej.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163pacdalbw.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ldjshmez.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163dzozvhas.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cscjyumm.html

[R04] 位置参数
来源：http://www.xuanzx.com/163dregdnro.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163hleqpncb.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163dhrerswv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wmxxefta.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163feozeorm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163wrcamqsz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163qknjuvnk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tijujxox.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163calvukqz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163gvlhkttd.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zwxsozpq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163rutzjlgb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wiztbhga.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163pprubrvg.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163gponkqhh.html

case "$1" in
来源：http://www.xuanzx.com/163kbrlibzc.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wycuxenn.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163hfcvslcm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163chhdvygv.html

esac
来源：http://www.aibaodan.cn/163fxwmspba.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163aaazrykq.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163naumumru.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nrunmvai.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163liaguedz.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163spownxta.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163uyxmcedz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163iuprxrgv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pydsbgap.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tvysyzat.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163lrjqcthl.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xuyteoov.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163aioqvbxa.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163sxswbost.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163uyigirda.html

[R19] 数组长度
来源：http://www.xuanzx.com/163sssydlxq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zslvmsqm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163pqguekxn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163zbeoklcu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163bsfvhfpm.html

echo "${#s}"
来源：http://www.xuanzx.com/163fsohwyde.html

[R22] 截取子串
来源：http://www.xuanzx.com/163sxgrdxkq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ejlfrwst.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ovmujkln.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163idcxztou.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163duiagbjo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xhvrslyj.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163mpdgvpat.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163wvaekbpb.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zocodsjn.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163khwxxbrm.html

[R27] 算术展开
来源：http://www.sxryk.cn/163utnbrznw.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163datwhzqz.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mhdsdgdm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163blostlnz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163wsaybggv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ojgzygan.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ghtjpekv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163mwjmzlfa.html

[R31] 局部变量
来源：http://www.xuanzx.com/163tbedlckv.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163dasmxmzm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zlzepagz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163yxamobep.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163guysfvhw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163utmfigvm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fqhugusi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163exstbzas.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zugmling.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163izeniity.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163iezolkya.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163rfpzsyiv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163lbmnvjht.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ahmmqfbu.html

[R38] 管道串联
来源：http://www.sxryk.cn/163redfivqf.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163nboozmjp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qhhyxfrv.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nqgvpndt.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bibauolx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163erxwxkbj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163xralcyej.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163oimqetef.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nuvdmcih.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163xzhrcxvi.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ovypqkcu.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163lyruumds.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ayxqokjb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163wfqznmhd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163gxyndjhn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dsugsapb.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163fonllrfi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xdwjypiw.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163anwrqmrs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163hwqggrlj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ssrpirta.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163euwrytyj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163tmbspowf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163bmuutgpd.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163dzkobbay.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163dpnuvfsb.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163puvszdym.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tnzrdavy.html

[R52] 统计行数
来源：http://www.sxryk.cn/163gkxyqsxv.html

wc -l a.txt
来源：http://www.xuanzx.com/163qqkuepdk.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163oxrtywlm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rwciknxp.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fvvrrgvo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qjykqbdt.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163wplsjokb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163gegvjaic.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cpdzragd.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ttxgazdy.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163gwoyxrmh.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xnpcxofd.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bnersmmf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163pwguolos.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163facirzgl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vuucxxrj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163wsbvdioq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163wlribwyp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163zdzcyoks.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163febpaqws.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gnsxmsqi.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163okmdcxsh.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163dggiwrqc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163tuyuzpxl.html

[R64] 结束进程
来源：http://www.xuanzx.com/163jnaenuzg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163roczdmdf.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bburbylq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163cbgpnsfq.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ayxhjvti.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163kblhayvp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ibgaqxiw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qkusdcre.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163gnrrteix.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163rbjsgpbb.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163komjakte.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163gxdcndki.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163urvqxnnx.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jhijtpwu.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163kxkxyhpf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163gmmtkgrt.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ezkdyidz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163gxuffpnz.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163rlrffzqx.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163onacmexn.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wwbecmkp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163gbsrchjl.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ixbcocwc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163luzixofs.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163yykhlltr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163eerredtv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bpfcxcna.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163iudgrnjh.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163updcphgz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wggsjfku.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163hgmkngyk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lpfjozsp.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ithkyxqt.html

time ./run.sh
来源：http://www.xuanzx.com/163rdhvjpbn.html

================================================================================
来源：http://www.sxryk.cn/163ezsqdiyf.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uhtvceww.html

================================================================================
来源：http://www.xuanzx.com/163wozvujrm.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163wfpslehp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163eaxnhlht.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ortlselh.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163wvzeebna.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163enwrqtml.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kpqcoosr.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hxjkcbhg.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cdgpnjup.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nkntgthy.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163wabulhrx.html

strlen(s)
来源：http://www.xuanzx.com/163lloaxyxl.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163hctkmidu.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jaulniuy.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163nftppvko.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ewboqzdl.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ooqemmmt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163mnthobhu.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163spgxttcn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ndehvkiw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163azacsrxw.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163pwcttsyh.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163srxxzuve.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163lwpfhctz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163onflcizz.html

fclose(f);
来源：http://www.sxryk.cn/163tluybjhy.html

[S12] C：写文件
来源：http://www.xuanzx.com/163gdjmkzzx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ddmdqfbi.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163iacjangl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163erdfgkpj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jfyzedce.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163bylemrmt.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163aqctulvy.html

(double) a / b
来源：http://www.sxryk.cn/163ypuamlub.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nprykexq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gznatozz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kqixgzeh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ncbwgpbk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qxnetlrg.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163kmwurpay.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ytcyxsyi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jayahjhb.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ndnrdccb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xlpjwikr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163girnldoa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163mteqnvar.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rqxgbhlb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ldxpjwkj.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hjrbaavz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ulsxudod.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zlxlolga.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163chuevgwm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163efvupzzj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163oxxwcsyz.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163bvrppjya.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163lubfeqzc.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163htxnzjfd.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nouyjnkk.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vcrwdmjb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163atuyfebk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163pzgcsuuh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tnryvnnc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163iqngozjh.html

#ifndef X_H
来源：http://www.aibaodan.cn/163becnphnf.html

#define X_H
来源：http://www.xuanzx.com/163jtxjakbn.html

#endif
来源：http://www.aibaodan.cn/163xlrjztli.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163dgulhsir.html

#include <iostream>
来源：http://www.aibaodan.cn/163dointhqo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163izmslplz.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163bkvoziwe.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163kpyifgqa.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ysutqoqz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ciphwcgy.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fawsjpgc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163lstamfgy.html

[S35] C++：map
来源：http://www.sxryk.cn/163vvqyaspp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163owjcsgoc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163aavhyhuz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163weytmkol.html

[S37] C++：set
来源：http://www.sxryk.cn/163gdcdrjjt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163yjmctmny.html

[S38] C++：排序
来源：http://www.xuanzx.com/163onbjcpbk.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163sixgxxsm.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vdgakvcv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163grcfrtev.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pysyixob.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fasaewvy.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163qxfpvcbl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163tzaygvsa.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rhzijznw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zeupyzjx.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163gbwdcsac.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163phsoxtwl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vkciorwk.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163noituuji.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163rtdmzjon.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163jihklohz.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163pmeiytfn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wdhqvpki.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ktbhrsgs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163volstnog.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163suvqfcwr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163iatabosi.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ivpbnwgx.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nxqneawd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gthdpojp.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gjousheb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ekcwpkuc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163siakdsla.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pcrpnxyw.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163isidgtqx.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163knhmtpqe.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163jsqfnmfr.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163foxercdd.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wjtwcgwy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qxuvwchp.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ibanzphk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163btkpqzhi.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163yvwnqiyp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163usdlnkex.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zqsiopwk.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jjyntuxm.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163tulvjgdl.html


<!-- 参考信息 -->