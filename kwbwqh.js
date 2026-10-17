外链999!wailian999！

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163jogetnjs.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zxyviixy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163oaricyde.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163yjobzqbs.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163lekwujku.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163axysrugc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163nipisnan.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163sfookygg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163kwfjyzsj.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163evsysgcv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163oekorvti.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163wnlhpatw.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163wvdsuhoc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163rkbhtifh.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163iodamjhg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jvousbvb.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163lgtyfkhq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163lhcsrsep.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163bnaytqdz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163rlotatfv.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rdkxfpmt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163azjbtfsz.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ykfnbqdw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163edmodxgh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zxxhojsx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mqrtgbhb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163gdrjsbke.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cyztjdsn.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ggrunvrv.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163riwdjapf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ommihsfn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163sberhbnn.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ordpfmde.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xeuwfqpf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163icazxaco.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rvtiftls.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163tkhrumfp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163pirxqdad.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rtarjbzs.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163spjmazkp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163xyohyzfh.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163btgansqs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163kvlmrbxo.html

================================================================================
来源：http://www.aibaodan.cn/163zzyhnwwe.html

R. Bash 专题
来源：http://www.aibaodan.cn/163bgcesplc.html

================================================================================
来源：http://www.sxryk.cn/163mworzlmn.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163agpinspl.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163wkjavuzj.html

set -euo pipefail
来源：http://www.sxryk.cn/163cvfgtxwb.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163udvhdlsi.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163oulbuhyb.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ujxgbfds.html

readonly PI=3.14
来源：http://www.xuanzx.com/163uaujefco.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rbofvkqu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163kkhhphhv.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163eilrwmkd.html

name="${1:-default}"
来源：http://www.sxryk.cn/163fctnyexr.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163shruibls.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163zbieopcm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163wdcfyuqp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163eeczxgwo.html

[R08] 数值比较
来源：http://www.xuanzx.com/163acjzxjik.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163dymybudh.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qjewahbl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163srwshuan.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163toynmjgs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163wadaqsng.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163sgwyxsxn.html

case "$1" in
来源：http://www.aibaodan.cn/163tdowibgj.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ivtwooqi.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163pdigvosf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163rdzhrggw.html

esac
来源：http://www.aibaodan.cn/163ouitxwhw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ftefmvff.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ibmceobf.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ncazwrdx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ajmxnnmr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163kskioand.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ojznxtwz.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163iaqufvjp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163kobznzhs.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rrndcoae.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163higwrcpj.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163wgcvygej.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163eqxhbfmz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163nlxsytpc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lpxlpigj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163dpwopazk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163bawkzkcy.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163rsjumtox.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163unmrgqog.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163yrfccsvc.html

echo "${#s}"
来源：http://www.aibaodan.cn/163togwugqq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163hxlimbvf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163yhfdrmgd.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163znfyasyv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163kjthufbz.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163uronhahr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163jyjmthfc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163rkvilfgr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163yblglgwm.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gpunfqox.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163qmhhrqvn.html

[R27] 算术展开
来源：http://www.xuanzx.com/163lrlwzcya.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mxqnveey.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163etndwjuw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ufserlej.html

[R29] 定义函数
来源：http://www.sxryk.cn/163tsduhnfr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163aktxzplr.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163eodubjpc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163spxzegez.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163zkurdqdx.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163adqaydjj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vplqhols.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xnyjxetv.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163arhttxlg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163twbgsxoq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163malhbayf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ilcfojqp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bqemvbbq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163kecdhzyp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ndcvhddv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163akxtyefh.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ogkivmvb.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rvprwhlt.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163tvmctvhr.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163jibmltrc.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163mxmadfgi.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163qsryqyoz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163raqprtnc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163cmmxphhq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wohazqct.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163fudiyzro.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mkikfxgo.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163atnsafya.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ortbiztk.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kvrqctnb.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ijiaqxpz.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163dwzdxrcn.html

[R45] 批量删除
来源：http://www.sxryk.cn/163oltkegzj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163lpekwzuc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163uyskkuzy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163kcuudklb.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163mvezugvp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cavnllmn.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fdzujpzh.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163cckmmfkc.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163cbypzpnk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163zcdakcsf.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mkmnbddm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163tcrcdfst.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163aocwqalk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163glxlxwsq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163skjzunwj.html

wc -l a.txt
来源：http://www.xuanzx.com/163ngwrzakg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163irtkayuu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163opvledlq.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163pafhojbv.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163tbozeura.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163dblhfvrc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163sqdniyoj.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163whoctmvg.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163vfdjcnsb.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nrbbqibr.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rzlapttn.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vqduigec.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163lhgofmvn.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vkvibtsq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163jnmxdlum.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xezabtzc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dsylrsgp.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163uzngqlfg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163qrmfemxe.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cvpkhpst.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163jycpjnfd.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163cozyeacc.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163oxhnpxfz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163xuorecbi.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163beeewqlb.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hwsljtrf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163tjrytkjs.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163xqdhbwkd.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163dhvlwjxi.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163nmhqthpg.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163jnzvhnil.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rhodfngc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ltftfnxt.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163fdsbbvzv.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163okfhhbul.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163xtgnalri.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xhpahofl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zyacutxz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163zjgfoepu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163rwbxlurj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163qonbprky.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ybosufkj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163whdlbwnh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163utrsrili.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163pyvxwvna.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163njzpzgtb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wifvspye.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163lwgvlmjn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lmmcghzb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163iyvupqmx.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163kjtsvunc.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163uokmotpe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jubfrqtp.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163xbidxvkj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bepdjcxq.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163lhjhdffs.html

time ./run.sh
来源：http://www.aibaodan.cn/163qidbbfgt.html

================================================================================
来源：http://www.aibaodan.cn/163wvdnovhw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ztlmbyii.html

================================================================================
来源：http://www.sxryk.cn/163gprvjwqn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163hlbmubzq.html

#include <stdio.h>
来源：http://www.sxryk.cn/163cuiitezr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dnpzqmaf.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163faslzmew.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yqotmfps.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qdpynsdt.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163cndkxxoz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163krsqdwkr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zscmirob.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163zqkobyoy.html

strlen(s)
来源：http://www.sxryk.cn/163awwnfqfh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163mmxfhzlv.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163tfiukpel.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fuebwcqs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163sberkklw.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jvolxmag.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163exstmjro.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163omuzkgdg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jtubzdbr.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163dxvigedo.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163kywcvasj.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163bkxcnqfj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ohxarazk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vvpilfrq.html

fclose(f);
来源：http://www.xuanzx.com/163kelnrmql.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zhxgrgpm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zzjzmbnp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163juhclfhg.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163liaknibk.html

[S14] C：枚举
来源：http://www.xuanzx.com/163kcthvbaq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163kprdgjfz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kjxcchyc.html

(double) a / b
来源：http://www.xuanzx.com/163nvlvaavq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163akbljvxj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163wegsbgge.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wqiqhfvv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ntaljzgm.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163clejjtue.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zfzxosjx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163eaozebeo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163phlxgsdw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mptgwxfp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ibvlseqt.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163iizwhdhd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163oxixbtwz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163fjfcrpxo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163hqubkekp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ohvwloxm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163fttfcnsz.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zszyyscj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163amvprbez.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163iurfviwp.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163iqmmmpda.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163nheadevr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163lvmbgaob.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163tdjtfnfc.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163opllbmdg.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tstmvitn.html

static int counter = 0;
来源：http://www.aibaodan.cn/163irjkdsuv.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163cnsuxofs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163lfdumeuj.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ihqrmmnb.html

#ifndef X_H
来源：http://www.sxryk.cn/163zmldkmmb.html

#define X_H
来源：http://www.xuanzx.com/163pjpxafwn.html

#endif
来源：http://www.aibaodan.cn/163cnflqmcl.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163yvpqzwaw.html

#include <iostream>
来源：http://www.xuanzx.com/163zrmpfwmc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dfpqdypm.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163sjpzbmpl.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163hmcmctui.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bhkasexb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jjqyjknr.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163flqmkgjm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ujcisxrd.html

[S35] C++：map
来源：http://www.xuanzx.com/163esynqvjz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163eeuxrbwu.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dsthxikb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jfwedhrh.html

[S37] C++：set
来源：http://www.xuanzx.com/163pssjnkja.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163vsuphgzk.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163jezoumze.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163sduhojeb.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163njxtudca.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dfuljhkh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vpyxiexx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ytytqkjd.html


<!-- 参考信息 -->