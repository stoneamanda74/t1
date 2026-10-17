外链999!wailian999！

[Q63] 开启事务
来源：http://www.sxryk.cn/163hxpunujc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163btjhfvyx.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163qdfjxmyy.html

COMMIT;
来源：http://www.xuanzx.com/163ujodhyzk.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bsjuwqrl.html

ROLLBACK;
来源：http://www.sxryk.cn/163zkdbtlpv.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163hxlfvzzt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163dujjnvzj.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163nqttsoug.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ubojlzir.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163dhvahjgj.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163tcrvwexn.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163egqswtlm.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163gtvsspya.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163prjfehsj.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163wgqslixk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163rqgsboge.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163mecqwsiu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jwnnxumh.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163rmhrtgbk.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163zigsekhq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163efrdgzjt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zwjxtwqk.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163lldjwlyf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wrbqekwx.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163tcovzgps.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163quurqwyi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163sgehpykf.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163nyqkamuv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163cirnbsfz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ktozywdr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163bxugxtmt.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163lexcycqz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163omepdrof.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163nsjvomos.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163djsylewe.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163pbhpifud.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163mmoljevt.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163lnspftde.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163tcqykowo.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163mpupzsab.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163lkhbvrtq.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163qfvvinhv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163biaauzbk.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163oykxkznh.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163btlvynos.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163paalkgnf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cwleuemr.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163kgmfrobs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163stpketqy.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163peqxlmum.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rjpocrhy.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163pkxxrhjl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163akdxdzfw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163wwrhpysr.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mnfkyesk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163oxssrhqk.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163symhpzzz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163fslenpjz.html

================================================================================
来源：http://www.xuanzx.com/163ychldtpp.html

R. Bash 专题
来源：http://www.aibaodan.cn/163uokufpyn.html

================================================================================
来源：http://www.aibaodan.cn/163cbtpxyze.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163neerjugf.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163aracdwtl.html

set -euo pipefail
来源：http://www.xuanzx.com/163xrkbmtnt.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jvxcusxa.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163kghfucll.html

[R03] 只读变量
来源：http://www.xuanzx.com/163lbygudkc.html

readonly PI=3.14
来源：http://www.sxryk.cn/163oyckvjbv.html

[R04] 位置参数
来源：http://www.xuanzx.com/163raonlobn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ejkormma.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163qiuuxmgl.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163dcwulkhn.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163rrgweyms.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ylqacgrv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163vfgenrad.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163racriatv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bhmzvhkt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nlamsnnj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xvcluwdd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ojrzufrf.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163apxoyeml.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163nrqbkgbw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163xzhyylpc.html

case "$1" in
来源：http://www.aibaodan.cn/163qjbdibie.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163enrzyyub.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163squeluvq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163wqufpmja.html

esac
来源：http://www.sxryk.cn/163svfvjlfb.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163csuzziew.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163wkhteluo.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163lixnipnn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163wwprnoks.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163yfvdyeun.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163pqcqshve.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163pqwnjyur.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163efudbrqf.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163otszhcvk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ctzahprx.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163anexdfvc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163cuhwdzun.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163pggsiqch.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163dwxqemfp.html

[R19] 数组长度
来源：http://www.xuanzx.com/163rijqjcce.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163hrwqusbd.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163nagtdojv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163cjdgvjbp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ddsizsca.html

echo "${#s}"
来源：http://www.sxryk.cn/163lkkctnlt.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163yoraunve.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hppoppgh.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163djninmer.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163mazytqop.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163diktmcbo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163rxumahda.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163pjpbcykw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163vizpmtmb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163hqrzjzli.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wkcuoqqf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163olrbkoxc.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163vklqnbmu.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163kyknmwup.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163kflpfgzg.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nftroznc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163pikcsddz.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163waychgcu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163rlurlsyn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163qehejdce.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ljxqjntx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163cjctaubv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163mfnpbuqi.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163fosiatrs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vactecaw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xqytcqbo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zcjjajhk.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163yoqppfqb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163insmktkp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hboqdwia.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163feebxzed.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163kdvaiisj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163fozoqqwt.html

[R38] 管道串联
来源：http://www.sxryk.cn/163lelnzuys.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mdwncugh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163jrcqeoah.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163mzwuxcez.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wvrycmtb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163tahgqmkw.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gomqszcp.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163dexrztyw.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163zkibgjvv.html

wc -l < a.txt
来源：http://www.xuanzx.com/163mtcisqjx.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163kbtpdqat.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163iwklndte.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163uezeraoh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163oyuhmkny.html

[R45] 批量删除
来源：http://www.xuanzx.com/163codyiele.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163eufzgaei.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163gtqtrspf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163gzczeeah.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163vpudtqvx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163sxvwjkvd.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fwjtsmul.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163wtvcmozs.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163fejrzffd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163jnkmokmj.html

[R50] awk 求和
来源：http://www.sxryk.cn/163dfexpfwc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163islrqajg.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163bynqdgdf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163yljfhudk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163uedtwvbv.html

wc -l a.txt
来源：http://www.xuanzx.com/163sacdwlwv.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ydhsfoyb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163dgvscbvk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163bxaqtjry.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163awxkllnv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163pvrwcxby.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kcqiiagr.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qkxkbzqc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ingohxbj.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163uyglfzjk.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163jgsdhwhh.html

[R58] 下载文件
来源：http://www.xuanzx.com/163fsksrrco.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hjvmetym.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163svootjcd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163iaejegnr.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163aipyvjci.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163rtumjulp.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163dzxcbsva.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163mrrndyoo.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ihtfndko.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163wmowiola.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ugnrmmic.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ibzxvgil.html

[R64] 结束进程
来源：http://www.sxryk.cn/163cnxlkipt.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163zbmnoeby.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163gesduvvj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163vofqbqvi.html

[R66] 定时任务
来源：http://www.sxryk.cn/163yrdgztuj.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163mwpwylby.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ccelpbbw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163yeuqvkkg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163kkyzhsbd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163hceblswr.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wuzwysvp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163kuregxzd.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163oycfhxud.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163zymbjbmy.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163zisifutd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ukyybidj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163gavrwrla.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kdztwncn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163wlaxsziz.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dxnpnndy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xdzdrepj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163upksximw.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163yyyctitr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jvzyxivp.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163jlntmgyy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hsotxvfa.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163lkhxkqml.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163wtjkgxna.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zkrberft.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163sdbjdict.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163mjjvpjgb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163gutfiejw.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wefzjriu.html

time ./run.sh
来源：http://www.xuanzx.com/163cnpwxcpi.html

================================================================================
来源：http://www.sxryk.cn/163oanjdzca.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ciamtfxw.html

================================================================================
来源：http://www.xuanzx.com/163idwjxhdk.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xneusdmj.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163korcpnby.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163dzybjmvh.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163shwvqwoh.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163nssagwey.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qgqxaftf.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163flrucriq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163fngoargu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163qhooztgu.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rexdihvy.html

strlen(s)
来源：http://www.sxryk.cn/163flvfwnmh.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ldgrxzhm.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163sunaotsu.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pkubysmj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qklceqce.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163vpfzkfur.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xtaqvacx.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163suydrgoe.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163neorrsqw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163wuffrxzo.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163cdysljoh.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163cyfididz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163yofrqfrg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jxxcxlmo.html

fclose(f);
来源：http://www.aibaodan.cn/163dvqelnmn.html

[S12] C：写文件
来源：http://www.sxryk.cn/163asbnvjrm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163qgqqjqoc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163rtunnczq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163globflio.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xfliusef.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zwkewcel.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kqjrdlwx.html

(double) a / b
来源：http://www.sxryk.cn/163jluwnnqx.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lizfjxpm.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163alqweckb.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163oaiummov.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163gymiswuk.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ulqsdpub.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vsrghtcu.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163uplucysy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oqikwups.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163llkqhwoh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qfmldyyh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mdopcphc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wpjvcuab.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163wbkxrepa.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163pcehomyl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vxqbobdy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ixjelace.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163kknpddfp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rqbyhtzm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hrjmdydi.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163khidgcqw.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163xxlfpmui.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ixdwjwzl.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wumokcsg.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xmpnsirs.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163eftnqqgv.html

static int counter = 0;
来源：http://www.sxryk.cn/163xyahmbpv.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163hmmifdsd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163nzpkksng.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ekjbpnko.html

#ifndef X_H
来源：http://www.sxryk.cn/163juxznayd.html

#define X_H
来源：http://www.xuanzx.com/163wxrorfvl.html

#endif
来源：http://www.sxryk.cn/163jggyafcq.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163yetgragv.html

#include <iostream>
来源：http://www.aibaodan.cn/163xhhfzgxl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dozrtuvy.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163tarbrjjp.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163yhietlls.html


<!-- 参考信息 -->