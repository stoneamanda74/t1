外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163rctxjwci.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163hrydkous.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163owolwawx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163olmhuqzk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163yusvhiui.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fneuseec.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ghfppktc.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163yfuoduyr.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163undnkdhz.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163whksoyht.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163jrhweeun.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163fkpnidew.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163rsflemlh.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163lwelfkzl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163vihlstym.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163zdimarmj.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lbxbldgv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163qeylylby.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163amomcucl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163rjcimbdi.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ocjpxqts.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qxgvdist.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163spxxsvpt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163gzygejfi.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163lthftuln.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ipgskopf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163xhlyjltj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163akoabkkl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ldhooxsg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163juuannoa.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ipyttfdj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163tvniqacu.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163xfyvohfc.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fiiivknw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163lppskcod.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163pzfiebmo.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163dtckykym.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wnwfcfxy.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zsqjbllb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163xlohdnig.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163oscyfjfd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jxcksivq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163youmnpzk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163dnwibkiy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163aeyamokk.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163dhhdqzil.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163oldodfbe.html

================================================================================
来源：http://www.sxryk.cn/163vuhrjvhd.html

R. Bash 专题
来源：http://www.xuanzx.com/163waudueuu.html

================================================================================
来源：http://www.xuanzx.com/163dbnrvnvm.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163khipmcuh.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163gzcqtnyl.html

set -euo pipefail
来源：http://www.sxryk.cn/163etxwrhup.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ivzulykp.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ezrpiwhj.html

[R03] 只读变量
来源：http://www.xuanzx.com/163czjhhawp.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163nfoybxyw.html

[R04] 位置参数
来源：http://www.sxryk.cn/163dcdkanjd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163obwsbkgk.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163iwwrkgbj.html

name="${1:-default}"
来源：http://www.xuanzx.com/163egqnzwtu.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163tzzfabkb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163tzsncrcd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163zbwexseb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fjvmxpem.html

[R08] 数值比较
来源：http://www.xuanzx.com/163eiwvmpgl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163jsocwehv.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163kbghsiqx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163toqnivfq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163layqywyn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163jskqoyoa.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vesehime.html

case "$1" in
来源：http://www.sxryk.cn/163vzibaneh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fnojeggi.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wneogkvk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163efpndknf.html

esac
来源：http://www.aibaodan.cn/163zvgxnxna.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163qpjmbzps.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163mmqfpzfz.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163djprvhcs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163veuorxhq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163zgtaozsj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163sumhjnvt.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163gtqxzgfe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ravciclg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163bndnymva.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163dpatxyir.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163dbzwsbbb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163qxrueplt.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vyvxpcrc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163wttmgyzf.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ceydbuze.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ywvzlhiq.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163dyuubvdk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hsqkhdhx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163dvdrijhf.html

echo "${#s}"
来源：http://www.xuanzx.com/163galdcink.html

[R22] 截取子串
来源：http://www.xuanzx.com/163hbpsoxbx.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163tlgwwkbp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163dndhlxxm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163shdoxqgi.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wjryavbu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163lbfagdwo.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zdxpaqer.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163lxjzzsme.html

[R26] 命令替换
来源：http://www.sxryk.cn/163omnaxgit.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163zqwdrrjo.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ptdbkswd.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ufriiosl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163aagqskeq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163dgbbfmrk.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kogvjnsi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163lrpctmlo.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163waujpkar.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163vpclvmwe.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pgcpnsnh.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hvklcuns.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163rnlmcuob.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163preddoun.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163hlydaanl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163joxnfxdw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163iovcjduv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dwvlgnmo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ecorqrwz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ndrhpher.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xgovbjbv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163pxxipefm.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163yoegnauh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163thtfrvll.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163yskouiqw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dynfdtvz.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163tpcppssx.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163fmzcpizm.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163sqqndhpn.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163oybgebrv.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163gwadcbpp.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163glekwtih.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163dszxauax.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163pkasexot.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bsjyfjtl.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jmpaudqs.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163qmeetcpu.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vewkhjqh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hvosvgtv.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163yvdaaqic.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163pgbkoysx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163iewrwqny.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163uneglpyr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xugpgtoq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ldtqvdhr.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163cwvhdqxb.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qsfhztbb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ytztdwst.html

[R50] awk 求和
来源：http://www.sxryk.cn/163gjmgodqv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mnfhxgem.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163luhrbxxx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jzmgyehc.html

[R52] 统计行数
来源：http://www.sxryk.cn/163gfokwgby.html

wc -l a.txt
来源：http://www.aibaodan.cn/163yyjkrosb.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163qoifzmru.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163vietuqyr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163chifjgch.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163cldxnkld.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163gjcidnnl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163nwrqnqjz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163amouifdr.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163brepndby.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163suquljnw.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163eoashjrj.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163omzgobxp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ixlipgol.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zrszryvz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163gligzomk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163eydazbkg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xjnvfymn.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163vftevdqq.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163yejsnhwo.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163mxmabaur.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163jrejeaex.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163nwknezxi.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163mihycume.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vvviltzk.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163hzqgcgud.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jvyduytu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bmzysdnl.html

[R66] 定时任务
来源：http://www.xuanzx.com/163plqllbgw.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163izsyxqux.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163utyfuztz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163olciisdw.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163jzvhdkdf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163yhtndxfp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163nwhzdrpo.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163jaotfrjg.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163uecdyylh.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163tycytyab.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163radqbler.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163lbpobcne.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163wtgatowa.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qblixkmy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163srmntshj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163fwkpsyfq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163maruvmbu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163hyylukfu.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rbsjeccy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xbjjahtw.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163mlzzsvtg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163aeymmugy.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163zlxthnjk.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xoxmawjy.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jguoinct.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163uubdzqtf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ydjllczb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163sewgwsxd.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kgfpwflc.html

time ./run.sh
来源：http://www.sxryk.cn/163expibomo.html

================================================================================
来源：http://www.xuanzx.com/163cabmvchp.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163eebeuqhq.html

================================================================================
来源：http://www.aibaodan.cn/163rtsxlfls.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hthzybgs.html

#include <stdio.h>
来源：http://www.sxryk.cn/163swkzhoso.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163tomdgzeh.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lmbzzyvn.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163cwgzfnyq.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163nffcasxj.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163nfbcbbwv.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163qefrzqxo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163rymdvdmv.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xatwsrsn.html

strlen(s)
来源：http://www.xuanzx.com/163jeljskrd.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163pfgxezpd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ztwgjlsi.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rfxwldyk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163yeufmwtj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163brjbegtc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pkfurjsb.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163hvbdcwjy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163xzbnukxp.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163pldfqxif.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163bqoexusz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163loivtwtn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ayyojjrr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163sbiqnxjq.html

fclose(f);
来源：http://www.aibaodan.cn/163pxgcxowv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163fbqhikvs.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163aawtycrx.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163asiofepl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163tbuvlzrn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163wiujvvgt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163bilkymtu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ggcevpkm.html

(double) a / b
来源：http://www.xuanzx.com/163oufmtvml.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163pcpcarmf.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163nxuvneam.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163eetqameu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163dfsdipfg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163jreycnwk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163mzirrufi.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163hojskrvh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cvcpgfxp.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163boggerdt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vmugbtsv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rxvhixnp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dqgbieik.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163zjfvjnja.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163phchwboc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163cgycllfw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163eymkmaib.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rhopkaaf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ugyrdnql.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163odsuxomy.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163opxdgwdh.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fsexviep.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wokoelfs.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163njdgsndn.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vxhjmgic.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163oxdzxbao.html

static int counter = 0;
来源：http://www.xuanzx.com/163orgfihbf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163fdlctowv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zlinykjc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163czkcrnii.html

#ifndef X_H
来源：http://www.xuanzx.com/163wbaovaqr.html

#define X_H
来源：http://www.sxryk.cn/163ecdadbdq.html

#endif
来源：http://www.xuanzx.com/163ndjjkvyg.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163vblwyysu.html

#include <iostream>
来源：http://www.xuanzx.com/163nxvryvwv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dhituasy.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ukudhpdp.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vsfginuy.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163dzhuzjkr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163flwhejma.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163dnycgvxf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gskjnhku.html

[S35] C++：map
来源：http://www.sxryk.cn/163naieytjb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vozkphbv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163prgmdypb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pfgfezry.html

[S37] C++：set
来源：http://www.sxryk.cn/163lrowslqz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jqubxjlm.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163akqbjtva.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163upnkwzfe.html


<!-- 参考信息 -->