外链999!wailian999！

[Q80] 字符串截取
来源：http://www.xuanzx.com/163qimuakqr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163uptiufqd.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zmpxyvkk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163cfpuotxg.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163hsifkink.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163bevropwn.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zqkhkhzt.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163jsypybdj.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lzxoimnj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vlsbfprf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qycrzbjr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ncfxcgmb.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163vhdcxeik.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zlmgwnnj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wfpkxkpv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163hkfbszoa.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ilfwpakk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kjmwybnw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rdlktsex.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163rsjeplvp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163basivwcw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163kiosaoxu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gubiflla.html

================================================================================
来源：http://www.aibaodan.cn/163qbhwujbc.html

R. Bash 专题
来源：http://www.xuanzx.com/163prviramu.html

================================================================================
来源：http://www.xuanzx.com/163jjamjwdl.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163swclurom.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163iihzhwpm.html

set -euo pipefail
来源：http://www.xuanzx.com/163hkolxwhj.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ynydojui.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163augzvnsw.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163xnkxdvto.html

readonly PI=3.14
来源：http://www.sxryk.cn/163uzprjopw.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163aunedzub.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xomwixoh.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163qlihrnjy.html

name="${1:-default}"
来源：http://www.sxryk.cn/163jlrkbppp.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163dcqjtqre.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163volmjnvv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zowxofgn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163dvvxbsul.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163wbebwoaq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163meqzzkpe.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163aqztjhxx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163unzljmqu.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163vgweqrml.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163bynmscip.html

[R11] case 多分支
来源：http://www.xuanzx.com/163eesrzeux.html

case "$1" in
来源：http://www.aibaodan.cn/163elbythsg.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ycvbevyx.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163vmvznigt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163uongdvsw.html

esac
来源：http://www.xuanzx.com/163quckyino.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dhrwuhyv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163uflpwtbh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tagciyjg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163xomsdhkh.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163unwghmhi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163oqikeojq.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163oigxxicf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hmmojpod.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163czwtbxvb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163sttgexxc.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qclviedi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163hcuvjxao.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163eggqyzzj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163qfonfifx.html

[R19] 数组长度
来源：http://www.xuanzx.com/163cwsesavz.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163pcpggzvi.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163voikcbdj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qoosscgm.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163uawlmauz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163pdhqpiug.html

[R22] 截取子串
来源：http://www.xuanzx.com/163mxryelkl.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163gmenugxb.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163pfoductd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163iuevjrxv.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163miusfcgt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jjchjpgy.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163szpxpaoh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163kxrxebei.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xthewuyp.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163jqeuumpi.html

[R27] 算术展开
来源：http://www.sxryk.cn/163pngazyar.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163hbpwxddy.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pyhogzci.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163hcdltcqw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163eyzwtzsd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163snlocksi.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163xmxvkuml.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ojumkory.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163uapakhen.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163gsvjsdos.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mvticoda.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163sukfmyap.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163oxrivxzw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mxehvawo.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bjmvusoo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dhyibsvo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163tbswxlkt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163fimwzhwx.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kkgmfxqc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xtrdxrxr.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tadhfqsn.html

files=$(ls -1)
来源：http://www.sxryk.cn/163mrmsvkft.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163poerccsv.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hptjfxak.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qusswdyv.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163hxsxlhmf.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163bmplqkde.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163mreuwbfv.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163yddydvcs.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163pendfnlj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163mvsfknmc.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wixxyykh.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163munxkhpl.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nhzkxwxf.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163imgoderl.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163haorqkev.html

[R45] 批量删除
来源：http://www.xuanzx.com/163lxovihvj.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163zdqjfzgh.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zvcgyrhk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163nbtzxxlb.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ehurlhty.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163lrdbplqi.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163rwkibexi.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163uaaeynxk.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163gnacszst.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163kfrxmycm.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ktcbfffz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163pteftihr.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163mydcdygh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163dryyhlyo.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cweqrtqg.html

wc -l a.txt
来源：http://www.sxryk.cn/163claagpst.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gxtnfbhf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zugyhpqz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163sdqgkmug.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163qisypvwe.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163cjwtqlry.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bsjvcpsh.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163lzlavwxn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163izfaxkyq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163etgshqbu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163symahpav.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163zvxurqza.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163bhxobchk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163yiqqtjjw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ssycaowf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163unmtkock.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163pgftzmgd.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ovrodisi.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163rwumxkaf.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163pembfktr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ufcydzlh.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wlcnigtr.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xuvzltfv.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vbkzqnde.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fsyysabx.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163xlpeunhp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163anuggdlv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xfubsspn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163indogaio.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ltcfcjkw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qpryhygs.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163iahmskgx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163yzagmvqw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163titoczgr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163owkcnqgu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bmsymkhh.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163hrhftokp.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163nzowqqhc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163szdarpql.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163vycgaaks.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163nebibanf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163hfgsnkgj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163tfevrmfx.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hcwcnqkb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163atdjbjsu.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163acctmexw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163pwtqejoj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xbdrpvto.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wamuqjyy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163wxzljeki.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vopvpkzq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163lkwxsnvq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163rpsizaqf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163fnmrbhkt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163jqypaeya.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163mvjelpcc.html

time ./run.sh
来源：http://www.aibaodan.cn/163xjukiqss.html

================================================================================
来源：http://www.aibaodan.cn/163jpzojmkk.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163euncjdlo.html

================================================================================
来源：http://www.aibaodan.cn/163vjuiuqbj.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163qgbgzput.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ujqusajs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ozmbkvkq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hnbarkel.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163waoaddaj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163tugyxslg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163kihjpmns.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jfxsclbd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163nbhozrqo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xambxjhb.html

strlen(s)
来源：http://www.sxryk.cn/163qcundodf.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163psurdiyp.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163coywhgua.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163quospyzp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163syzererw.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163cnpemwzv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zhehhlwr.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ychmtvfd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163epptqhwg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163htrhytct.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163omxbdsvp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163mgytvnnx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nmtyeuuy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163lkngaakl.html

fclose(f);
来源：http://www.sxryk.cn/163nbmfbjsu.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163cetwxdso.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163bwusifts.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163pxkxioih.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163yzthkyxs.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vrkkydve.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163oklbjblu.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hghkiwhv.html

(double) a / b
来源：http://www.xuanzx.com/163eoppvfay.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hchqvjsu.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163sspzvtdv.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163crwthvcp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fysscuus.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ebphcikw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ijfryvqx.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163hsposekw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163arenwpiu.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163cmsbiuoc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163uamtcprt.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163sirtwyul.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163enhiyyhv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163xymbpuhh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nhkeutav.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cregrnis.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163sunvmryu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ekcqxiqe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163dknsqiwc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mrlrviqz.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mdpfkpct.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163uhwvmcxx.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gojxtmpx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163pomqnfee.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163czgrfoix.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163rkgqegdn.html

static int counter = 0;
来源：http://www.sxryk.cn/163zdbsddqg.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163lmamlopz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163pclniqsp.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163imykanhz.html

#ifndef X_H
来源：http://www.sxryk.cn/163esvezymh.html

#define X_H
来源：http://www.sxryk.cn/163dtktpkkg.html

#endif
来源：http://www.xuanzx.com/163kapnkoba.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fzmwkifb.html

#include <iostream>
来源：http://www.xuanzx.com/163bcoipowx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xxkanete.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163lrbvgqce.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wcfossck.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163deszokyx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163aeqgrqgk.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163csfapgbt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ekvpwloo.html

[S35] C++：map
来源：http://www.aibaodan.cn/163meunqxqt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fupvrjjl.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ykvdhxqr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zadntntc.html

[S37] C++：set
来源：http://www.xuanzx.com/163shrqnrdu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163tptlonrq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163gtqwxttc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ljwernan.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163vewxdggs.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163zyavmfix.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163culjzycs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163fgzbqmop.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163wsziqmgc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163yrvenhjf.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xicbgges.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qfspbfny.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ccykbini.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ulfohfjl.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163houjvsfl.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163hdeozpio.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163omevbjsa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gidomayy.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rnrakoad.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163cnnvwnxs.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ecjczkgk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163iifcukaj.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163fondjnww.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163tlykbclu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mvxpohfj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kqrhpueg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lucpiwzo.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ophnufpa.html


<!-- 参考信息 -->