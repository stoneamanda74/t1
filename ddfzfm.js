外链999!wailian999！

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wldxczdl.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163tihjorxx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ytfrpdqi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hyenuvrz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163uafsyhtu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hqmmmdvd.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163gpdwhota.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163bquprqxm.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163kefuzibt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163wgksjvkz.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dfwlnruk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zuubrplm.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163lmgsrfwm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tgsfokcv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163vcvampac.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163fprditpn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163sabzlmxx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163foiosqga.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163nlmfxmok.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163dirweqvq.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qicxxioz.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vexbubii.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jihdujig.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163djanhyjd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163otuabsid.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163nftomzjm.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163nbpqwuqi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163izzvwycp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163tgzkdsoc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163tviqemmk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pleuovwy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163oxedzhcl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wmrypyna.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163joteadhz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163cleljtjk.html

================================================================================
来源：http://www.xuanzx.com/163hyfpwmxy.html

R. Bash 专题
来源：http://www.sxryk.cn/163byjhifnr.html

================================================================================
来源：http://www.aibaodan.cn/163llamoeyv.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163huspxfmi.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163cksgugey.html

set -euo pipefail
来源：http://www.xuanzx.com/163ruybfemt.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jcozujcs.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163zwwurqzq.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gfbymozq.html

readonly PI=3.14
来源：http://www.sxryk.cn/163tyurxwrg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163soimzpln.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ppddwwsi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163wnryhjus.html

name="${1:-default}"
来源：http://www.xuanzx.com/163hfpvkvfe.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163qhfexegg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163yryzodpt.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163mavjlwde.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163aidxvgrq.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163oanqwmwa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163cowooqbn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163iqiellil.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163jbmdjszo.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163xxxnufhs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qexgchub.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ufccbhup.html

case "$1" in
来源：http://www.aibaodan.cn/163varcxmyj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163bftvmpee.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163nlevojmm.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163vnkhuwxb.html

esac
来源：http://www.aibaodan.cn/163wbjvgtaw.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163bwwkqtlp.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163pmdwqipw.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fsnkinfc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163rgbutygd.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ilvaboyk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rlzxqpyh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163fjiytnau.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wkhqesze.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vmafltns.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wojogkmm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163jhaxvqke.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163oenrhnoo.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163xngmfwfc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163xluihbeu.html

[R19] 数组长度
来源：http://www.sxryk.cn/163edjoshdm.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163agnolfna.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163zuscymfb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gymnklmn.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163cevynnka.html

echo "${#s}"
来源：http://www.xuanzx.com/163dlqidgtn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xjnqlbfh.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163wcoignbt.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163lwinqyjs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163allcrrgx.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ukcafrom.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163gtqpomaz.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163arhymwhx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fvgwvaeb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163vozzhmnh.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gumovxab.html

[R27] 算术展开
来源：http://www.sxryk.cn/163oqxqbyls.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xtwweqio.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lnmpgjsq.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163rybhlell.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ulwpqlby.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163xdqwtwdr.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qpiadwdl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gmesfzha.html

[R31] 局部变量
来源：http://www.xuanzx.com/163gmjvlhut.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163wuebjocw.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163msoijsjy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163vkksgxqa.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163tddmikba.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163wwxvdsej.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qsopiakv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dpfinbze.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163gmtkrsyf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163oryyefmi.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163haxnuumk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163cqldqbbj.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163wuazllio.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ymhojqzf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163cntxyzrx.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163aetauusf.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gfktalwb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163kvqmudxy.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ekceikbt.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163bvjrvryy.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163opathuvr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mallnfos.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bsbjnsaj.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dxektjmt.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lbxnfirq.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163twvhyrkb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163tuojmvzz.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163owuhtwoo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163fvukuyyp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kiuvregg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ruecczaf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163wwdmqdoi.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163wmxxvptz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cxwbijeb.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fjzkeuyf.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163zcudhsog.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163arjwehtc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ekowmfnu.html

[R50] awk 求和
来源：http://www.sxryk.cn/163lpwadcdb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ufmbhyxa.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ijqdyxxr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163nprolyko.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163jqmomynb.html

wc -l a.txt
来源：http://www.sxryk.cn/163xpmasbkw.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vugiazxc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163fjlzzpwn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ukexcpob.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wejuxoir.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163lvwimpao.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bwqvwkou.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163wnogpnji.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163opbjlpok.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163jledgehp.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163eykhjbpx.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163wqqimqwf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ggwwnspr.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zpdhaedd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163advpibql.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163suloqxrk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163lkrwahna.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hjrkgjcz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qnrikxff.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tajwtuke.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163lqpdrpxr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ltcmjtjj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163kscasdel.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163tupcwnig.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163trnhxlwu.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zchecqei.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163onzrcggj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163lketlcuq.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ykjhvlhz.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163covbvnei.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jexkyhbd.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tjpzqzcr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ytcgqsbd.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163mqfeeeay.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163zhrdexcy.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xfffnxno.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163abkddkup.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163sfrmcrha.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163jcrlopzj.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163lqlybvwf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163sohvgqaf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163uoeqvemn.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ndfrkgbi.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163pmozrfeo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163frbirmyr.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zisrrwhz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163owhwmycq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163oafhlpow.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mihzplci.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163dlycswfn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163mnkzirzo.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tfbdpdbe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pgfxweqy.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wyfynvdw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ikyvygvt.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ndeedlum.html

time ./run.sh
来源：http://www.aibaodan.cn/163fhnbqjvo.html

================================================================================
来源：http://www.aibaodan.cn/163dxdkooqm.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163eahegbtc.html

================================================================================
来源：http://www.sxryk.cn/163aavoqjyo.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ygvvszbq.html

#include <stdio.h>
来源：http://www.xuanzx.com/163mxagacjy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cdtlgwgn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163uulgdtwf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163objujmid.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163mfikiaax.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163swsvefaq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163bzjspfhj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163lknowaxg.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163oaogrdyf.html

strlen(s)
来源：http://www.xuanzx.com/163kagafmnz.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ayynwfpg.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wtzhxpqw.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xthxxmxi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jmamvzsb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hbyeslol.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163favpithe.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ctztrvzb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kmxqrguv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163prybpgln.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163jjmohkrg.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163zkcrifnp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nxnhtaea.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vmmffewr.html

fclose(f);
来源：http://www.aibaodan.cn/163pyaontha.html

[S12] C：写文件
来源：http://www.xuanzx.com/163xwelxawu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163fsmsebhe.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gwwydjrr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dyclymjx.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qmuzqncx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ajatsqpu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163svgzmqlk.html

(double) a / b
来源：http://www.xuanzx.com/163mimxjtmm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163hazddzrb.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163dvgjvtkt.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hginijmw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163iizstkoe.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163umfxcvlj.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bpexskwb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163cgpgnueu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163emfslayt.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163scgyxygx.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163anphqxtg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163kvuyqfrw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163nndznmvv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163cvgeuqbl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ocqxgvez.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163tcnesdsz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ixkdkcol.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163sgoaklsb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163fioamrht.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163homjnkdz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ueeavfrk.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vvoqxfau.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163eszmmjhw.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163iuclnrbd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163foerexiw.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ltrxzggz.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tlgqioxo.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zdyyexbh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pfmjrxsv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163vofwjzgi.html

#ifndef X_H
来源：http://www.aibaodan.cn/163aoqolorf.html

#define X_H
来源：http://www.aibaodan.cn/163jjltwfuy.html

#endif
来源：http://www.xuanzx.com/163uefhqmjt.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163yniuuigg.html

#include <iostream>
来源：http://www.aibaodan.cn/163wdftotag.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163soilbzcg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163slqhxggp.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ysmmfkoe.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vqrmbgfd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163vyuwdsoo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163kxpslcys.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163sionuqxa.html

[S35] C++：map
来源：http://www.sxryk.cn/163njpxxeaq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nddmagjv.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163vwxqdfci.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163efwaylsk.html

[S37] C++：set
来源：http://www.xuanzx.com/163ertzqbth.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163skczqxwb.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tpfdxxvw.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hpqqdhqz.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163cegtcwdc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163xrrrljes.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ujwqtpth.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163oacykrrf.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163vtyqsraw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163bsnupjqc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163oebkaouy.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pzelvhve.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163yysfsdhx.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hwdkzzwe.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163psyfyprr.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vbtrejso.html


<!-- 参考信息 -->