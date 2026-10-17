外链999!wailian999！

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163mgidjhrr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163mrlmklwn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163deaustkd.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ygjbcypc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ptaqpoea.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vyulioaj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163pnkmkrgp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163wtoyyreu.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vvvqudsx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163faqzvfal.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163kqybpxmk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163imcrttsq.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163swfgjoma.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163dpdpievy.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vynceiga.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163dxpafpux.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vnrafxja.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163pmgpkkho.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163kpmczuyb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163uzyctqmi.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kgltnmic.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163uukhiygt.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163vllqqyja.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163kyaajgkv.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163gspplqog.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fszhzahv.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163xbnhqoic.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bcpnocfc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163jzpzzird.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ojxrdwrt.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163gbajmoom.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163jzsutlss.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163glqgpqjk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163unjhegmf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163clbnojyw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bqnzaxmo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163dwcgwzer.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163byavqioh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163iwivtyul.html

================================================================================
来源：http://www.sxryk.cn/163woxxzkdu.html

R. Bash 专题
来源：http://www.aibaodan.cn/163gxlrkvbh.html

================================================================================
来源：http://www.sxryk.cn/163ehxmiavk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163vyvouist.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163yuptpefd.html

set -euo pipefail
来源：http://www.aibaodan.cn/163wparzdsz.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ztnxhpol.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163yziuxkbo.html

[R03] 只读变量
来源：http://www.xuanzx.com/163tdyzncnv.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pslanvxf.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163nedauudo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rkaesgbh.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163raeeuixx.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qjrlwqim.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wpyilgnk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163huzyamwi.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kqeqjsbq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163dpbsskyx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ynprvgxq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163nkmlybet.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163rakkrnnp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mxmmtoct.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pqsrmwvj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163tcbpjwrd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hbaullkp.html

case "$1" in
来源：http://www.sxryk.cn/163dpazgrlv.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163layihtoh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163cfwqaols.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163lzwopzqi.html

esac
来源：http://www.aibaodan.cn/163zdawbnbp.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163hnbqufqf.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163knzxxcvy.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163sjlptgvq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163caidvzar.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163mjnluubh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163bovhtnhz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163toveyaan.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ljiqconc.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pfxdoahg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163aljudaqk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ylceetts.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jjljjsre.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163iqejznva.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163rjcobesu.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ldoeiucs.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fqagyzne.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163nhhnrfxi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163lwaxucym.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163obhecrve.html

echo "${#s}"
来源：http://www.aibaodan.cn/163knpcvthk.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pqdunwbp.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163jirxhzbe.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163vnpnkdby.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163inslbaax.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163aesufehb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163zbgzuvuc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bjowqtsd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ffnwgqfr.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163gprarmzy.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163iwmdmwvj.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ulexaavl.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163illvbltw.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163wgylzqcb.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163uxomexln.html

[R29] 定义函数
来源：http://www.xuanzx.com/163tbyceqdi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vthytpje.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163eyfgokov.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ghqqezfb.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163bdfiegla.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rdsgxutp.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163cbotfkjr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163uwuqoljq.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163zuwxwrmc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hlkrddvl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wfxrhfdl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dmhmaaij.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163dthsrcnn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163qhcafsgi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163qfokkwvs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163fdxrtstf.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163atlizfih.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163agqbafud.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163fegutjmk.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163nicewqnx.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163uebsvvvn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163gknzozaw.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163vgimcrru.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qkffflow.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163eololobg.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163wwfektmu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163hdlszhfo.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163oiapulvo.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163jjdcckoh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163siywvxlr.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163epjjtcvu.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163lyfehiqz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163hsduljrz.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163hgiqkiay.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ykjjngdc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wxawabez.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ahjylfkg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163pbpaktcn.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163bvjwahyv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163eqwxsiyt.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xmmsqkon.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xhfvbhkg.html

[R50] awk 求和
来源：http://www.xuanzx.com/163lfubsugu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163gyvtagdd.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163lachciqk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163amwoufof.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163pancnbxs.html

wc -l a.txt
来源：http://www.aibaodan.cn/163attssjyp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163nfhawkpn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163wqayujyi.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163tliaseif.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163jqoqmiux.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163uofohmcz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163zzqkfcbh.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163dzcsdqgn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163dckfdhjw.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hzcsmovx.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163tisgoske.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163yvxmsxel.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163oyvoxgkd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163yujmfgqr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163nrsyxcua.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ziqscbmx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163gvuhwtni.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hnmhszjg.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163qbltiklv.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163sktnvkao.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163uniinuwy.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163hkljxuqb.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163vrpvvvqr.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163geubqnvt.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163begocfhs.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163rkwahqsu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163khhczxim.html

[R66] 定时任务
来源：http://www.xuanzx.com/163anskmgho.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163njyxhwnd.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163jhmgdtha.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163snqpfvgu.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ijighfgv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163dxthzywj.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163yyxfkzfu.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163elivuhvh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163szfseysj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fxynfaua.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163hfgkexde.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ixtbhrtr.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lodauxls.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163knxquvfv.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163tdxwneuy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163kzqybsrc.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163sjakvfkb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163glislost.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163zijgbdgd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ncfxkqaj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rbttswrj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163icqfyucq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163yvhmemmy.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ottydngd.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163fhvtcfxk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fnaetlqn.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zcqpswlp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163sjuylsgt.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163onerxgxr.html

time ./run.sh
来源：http://www.aibaodan.cn/163tmnjwtwo.html

================================================================================
来源：http://www.xuanzx.com/163hxottgbx.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kgwlufcw.html

================================================================================
来源：http://www.xuanzx.com/163ekmwevmd.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ieujqcqu.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vcnzezco.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163jbubnnvu.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ovcwgybk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zetvqhqp.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rhjglfnh.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163swuzznzg.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jvrmsjmr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ilhnxivn.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163lemjfglj.html

strlen(s)
来源：http://www.sxryk.cn/163udukdkhg.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vczkoolm.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163yhdfipou.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163gpfpzxjx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fabqfczr.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163nugcmlta.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163drvbndvr.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cbsmeqoh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163umvxbhqy.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ddbinraf.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163sqscqqzj.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ilkaitmq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163mhdvlexd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163plqofrps.html

fclose(f);
来源：http://www.sxryk.cn/163vgntecor.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zkzbfixz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163riwuruie.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163dyrbrnlc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ftzsthne.html

[S14] C：枚举
来源：http://www.xuanzx.com/163otwxvzyk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163xnpveccz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163khpzkpwa.html

(double) a / b
来源：http://www.xuanzx.com/163kuswwxdp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163btuxkqqv.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163gcqoyrqp.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wtdctqfe.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163lkxbsrxb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163sjfpmsid.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hzmvtask.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mpaimrfe.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ibkteumg.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ektoxeau.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dednxmld.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163jbeojxek.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163flcdxair.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163xpragqim.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bqooblxc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zwipnljc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163formxnae.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mjmizwhr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163nqgdpxza.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163plzkanxz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wsjvwdlj.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163irqbxyus.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163mlhpudxe.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163smirxcrp.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163rkhkxxeo.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163svtkmrhd.html

static int counter = 0;
来源：http://www.xuanzx.com/163auvtxvcp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pmekxbls.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163robrukec.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163gioxfecj.html

#ifndef X_H
来源：http://www.xuanzx.com/163kqpdhotr.html

#define X_H
来源：http://www.xuanzx.com/163uzxrawjc.html

#endif
来源：http://www.xuanzx.com/163ggnjgltv.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163djportwc.html

#include <iostream>
来源：http://www.sxryk.cn/163swyznkpy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163jjutfozt.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163csgsjrpt.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gvdxmczm.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vuyuidwx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163okbvyxag.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163balyzhnq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ooasfgyc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zbtudfen.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xbrkohdu.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163xtsvknts.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163eezzxagn.html

[S37] C++：set
来源：http://www.xuanzx.com/163cstlcypp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hxykdrbb.html

[S38] C++：排序
来源：http://www.sxryk.cn/163izffzpul.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dzkytewp.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163womzysbi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163iyjbjdpa.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dtuabjaz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163hfyabsvs.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nmedfsgr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163hbvxalcu.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163qdroinkl.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163anbdqmgt.html


<!-- 参考信息 -->