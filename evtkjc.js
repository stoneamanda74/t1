外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fjowsvuj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163conowkfn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ivrniyjy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dlligyrh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163hyptihjv.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163jbtbyiol.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163vyqfftiy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163pfcbejjr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163tjfwfxgy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163yxxbbbjf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163oxykyomk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163hfnizdsx.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163oygfrpoh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jgphfuse.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163noxlbicp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lmtlvuwv.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163mdobbock.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qvuspbac.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zxhnpoig.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mwxvwgah.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163erdqvohi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163cybafrnq.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163nfjactwe.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163aoueitbq.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163yrxpeugc.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163qosialbf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163yiwmhmjy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163akegvulf.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163bywwgkju.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163tclxobnk.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163nwkufkqi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ukwbxhqt.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163fxoegycg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163wwnqoxfh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163qawbyqvl.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163nnxhjinl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163umxvbtjf.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163kfwsjpzt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wuhgxtby.html

================================================================================
来源：http://www.sxryk.cn/163ngvsvidf.html

R. Bash 专题
来源：http://www.aibaodan.cn/163vzfekmsm.html

================================================================================
来源：http://www.xuanzx.com/163zikilxhd.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ebtuowop.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163dvbuceig.html

set -euo pipefail
来源：http://www.xuanzx.com/163ruwqcmjs.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cameshmy.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163shfliblv.html

[R03] 只读变量
来源：http://www.sxryk.cn/163xylychla.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163zwcfeqgx.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yqyebohn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163garpfkdd.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vjqemdis.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163afxkdmur.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163eketygxx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163fdlgxsdp.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163qiewludy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163kciwxhwb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163rcrzapxh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163abfpfudu.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163khfuxodf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163lwqyexdu.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ydbhrfmy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163aqorkzhl.html

[R11] case 多分支
来源：http://www.xuanzx.com/163gyhbfqtm.html

case "$1" in
来源：http://www.sxryk.cn/163kijpmqch.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163kkitdbim.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163kdicpibx.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163amuqieor.html

esac
来源：http://www.aibaodan.cn/163lgfqrifm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mymzjjur.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163mklbexcm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163igslyjgc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163jvwgtlet.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163usmjqngx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ppsjayyv.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wwforhxg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hocuquug.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163yydweqgy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163dlhscwfs.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163djzalknz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163tudwwniz.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163pruzxhwh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qmpmrbnx.html

[R19] 数组长度
来源：http://www.xuanzx.com/163yvlvigrc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ldlsajps.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nywwvdgx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163isktnpdk.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hfxmzdcl.html

echo "${#s}"
来源：http://www.aibaodan.cn/163eibmcnee.html

[R22] 截取子串
来源：http://www.sxryk.cn/163khefxmty.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mgohyhhc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163hlzbhxyy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ftnypayo.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hgzngmzk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163xcirkqhx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163coazyxgz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163skzktvdb.html

[R26] 命令替换
来源：http://www.xuanzx.com/163yyzrffzr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163fcdvubql.html

[R27] 算术展开
来源：http://www.xuanzx.com/163uwlxpxqw.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163pqgiiqsl.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zdulckga.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163vikvotev.html

[R29] 定义函数
来源：http://www.xuanzx.com/163jqhtxzhk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163eyooslnm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163fruaazac.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163hftwldzr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163fuztihvg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163utwdwyfc.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163oloqnfrb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163yhcexoiv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163jwgswjqd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163lxjmilwn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163dmbztxhd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ofmmeqge.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163eefwpwlk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163bglqcfle.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ggnxnskq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163rftfhdba.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163yegpwkyb.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ozvsmiwo.html

[R38] 管道串联
来源：http://www.xuanzx.com/163pgsuepkq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163gmkodyit.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vefcmkix.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ltfsqciq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163yzyxnede.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163nyldjmhb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ndzlvxmi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ijmfxvkd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163iinwczrm.html

wc -l < a.txt
来源：http://www.xuanzx.com/163uwvhsqbt.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163kkckecsc.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ykikqqlw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ndwvkttp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jjnwszvq.html

[R45] 批量删除
来源：http://www.sxryk.cn/163rlxbrbqt.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qnxkhjbw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kmbmkgex.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163yhojsawd.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163xsdtvyvl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163wrcjwgtm.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ntbnklqz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vfbbnffi.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163svcxdlav.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xwroyjve.html

[R50] awk 求和
来源：http://www.xuanzx.com/163vkgllxyq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163tzgehuup.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163nwatetvo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qdtwkqpz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163momxbzeb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163nyeqoqhc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163flzrhxoj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163nudnksec.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163bdtaymua.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163utowagcl.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163arftrsuq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163iwzmutmj.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rhitzvva.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163jxchwtga.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163quudnlad.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163saqpcejs.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ulbsklvd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163egreblbk.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163bdzcqcku.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163dqkbgcda.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ejhuodly.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163fxrpsjff.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163neuasklt.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ctnfxkhx.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163bnkunmfv.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163fmvveabr.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zgzquzvl.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zeebodas.html

[R64] 结束进程
来源：http://www.xuanzx.com/163obhzhsfw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gxvyehyy.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163cpzgxulw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163breoikls.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163bkacytog.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163oofamaos.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pcyezyiw.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163nlgzksvc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163lplamfbk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163wqsjlrrn.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163upkcghpy.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163svnlbqqp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163sggvgors.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163hccdsutx.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163omhkvlkr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jfvmnozv.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163eulofnfu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rofnszqx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163xalkmbcj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dilthsgd.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ygiyseta.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163uxrddgbb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hlkvhyjh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163uwszbikb.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xubrynfw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rwbbvfzo.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163bpyrnomo.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xvsffypz.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163chnnvbum.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ebzgcktj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163yxgxmxui.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vvoqzoni.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163dspgrdyj.html

time ./run.sh
来源：http://www.xuanzx.com/163ogsxnrxa.html

================================================================================
来源：http://www.xuanzx.com/163bfcgrqae.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vpiuebue.html

================================================================================
来源：http://www.aibaodan.cn/163djusiuef.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163kndntvkq.html

#include <stdio.h>
来源：http://www.xuanzx.com/163oeqkxuct.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jdmgfejg.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hovtqzxp.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163osgyttyi.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163pqktndag.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hufaaxvs.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163pzgevmvy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163gdvhftow.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163bpxvnlvw.html

strlen(s)
来源：http://www.sxryk.cn/163bwwoakyx.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163sulvyeyt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pbccbnkw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163khunpssn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163uqfsxbkq.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nvnjxdhj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163cyzywspw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163vgrtiufu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rzkdxyct.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hfmanuln.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xwnmdpti.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zpyirwoi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163puiqkftc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163spmvzrns.html

fclose(f);
来源：http://www.aibaodan.cn/163abtiowhb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163cqflxurc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wyidbuyf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xdjyqahw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ucxqgkah.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vbogbxmu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163oggqrecn.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nxkqhcgu.html

(double) a / b
来源：http://www.sxryk.cn/163afaserqn.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163incwtoml.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ftetybcu.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163htqgmcmq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ukagiglq.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qaxgazzu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163soeknioq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163cyevzvzq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yffjtryo.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tvkfczrj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163blmzcukw.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163zcwlnvrr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163czqsjmss.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163hnfhqlvf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163phqvlecv.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qvgpwrnm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rtvygiyo.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gbfzoqus.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163kagmugxl.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163yogpuoqb.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zdkjreys.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163bhtubrma.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163lbfoyafp.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163apirkphq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163uixgutrp.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163yhjkyoac.html

static int counter = 0;
来源：http://www.aibaodan.cn/163bvdvxhcd.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vdlxwbat.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ibjmsvhc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163nkesoxfz.html

#ifndef X_H
来源：http://www.sxryk.cn/163nvpxhhgm.html

#define X_H
来源：http://www.aibaodan.cn/163tpvywvzs.html

#endif
来源：http://www.xuanzx.com/163rmdpypqy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163hnyewplg.html

#include <iostream>
来源：http://www.sxryk.cn/163upfimrzc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163rveptoby.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zavcojus.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163cmminhbt.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ksitnyfh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hbniredr.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ldrivojr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hodkmenk.html

[S35] C++：map
来源：http://www.sxryk.cn/163iwmbnttw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163emvfoorm.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163nhoiusrp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dtwlptvq.html

[S37] C++：set
来源：http://www.aibaodan.cn/163zgsntvsr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ttlomyfz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wudvfscn.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163iyzwodbo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tnsccaji.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163qowdfymw.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163esrrwvex.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163jkzbugrq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rwpqeupv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163irrtggte.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xlzuhtbb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ioxanewk.html


<!-- 参考信息 -->