外链999!wailian999！

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163muxfzjae.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163oijkjkdh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163hhpclhvb.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163oqofbjth.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163snirawka.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163zpdnzugy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163kknyxpvp.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163gowethav.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kslvkvyz.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163dyqfiade.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163tkkcfaxa.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163yzvylyap.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163rupyhwjf.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163szxnefik.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163gzwdliua.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163bydtzmcg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163vgdxtehz.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ulqbbdei.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kgxfnepn.html

[Q57] 行号
来源：http://www.xuanzx.com/163trahecrc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163vacuvtpq.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163exydpcsh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163uvsuqxgd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jprefoit.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163tmqexxei.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ungwevza.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163grijwnrd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163sjszsekt.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jtnhiphf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163nwuzujrx.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bzwbismr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tduautqd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163cdsrctgz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rceyggjv.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163geecmdpl.html

COMMIT;
来源：http://www.aibaodan.cn/163hbhocqyc.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hexycbsn.html

ROLLBACK;
来源：http://www.xuanzx.com/163wdobdbsb.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ylwhbglp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bsbvepza.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163hldymrod.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163xbrywmxb.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163pvrxggpr.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163wfiqfwrs.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163gfcvxumu.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163clsodetj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163aeheabxk.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hxmzmqbz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163tluuliui.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163dfmfrqzq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xjtzwbzz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lgutwogs.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mphopiwu.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rzdznxtg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163fultmehl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ikiatqem.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163yfgnfmpw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163zqlsekob.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163jhbuurig.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163sidhvobj.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163cgdfjxpc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163dttgvnkm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163fwohjvbz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rfuzbmyv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jpxyzskj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163xqqatgub.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163mwikimdk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163nyovzdva.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163vmxaobwp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ywxmkysj.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163qakitiyb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163efhwetvg.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qcewxtfj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163enlqinee.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163fapgdxya.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ouifergd.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ehtkzipk.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ycefkjlt.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vpjurxfc.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163kixlldfa.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ssqqjiod.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163bqblnmfn.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163hvmxwnfu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163spfyaufg.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163fugungov.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163fjalabpc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163qylrgdvh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163fsjieyag.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163yympjrjo.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163afiskrmk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wdhiqelw.html

================================================================================
来源：http://www.sxryk.cn/163gygtfyyk.html

R. Bash 专题
来源：http://www.xuanzx.com/163jczfsiss.html

================================================================================
来源：http://www.xuanzx.com/163sjnefhdd.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163fnwfxcqz.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163nwhbhozk.html

set -euo pipefail
来源：http://www.sxryk.cn/163pkbpcjoc.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wofddehg.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163nvqxsuex.html

[R03] 只读变量
来源：http://www.sxryk.cn/163qhcjmwhp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ntbyjlmz.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yohvnaak.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163noclzkeh.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nwruuqop.html

name="${1:-default}"
来源：http://www.xuanzx.com/163tzozours.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dbgkmhbm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163pqqqoade.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rkepfdzf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163bvbibjkj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163egzlgkiw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zvropzjc.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163qqaixuka.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mluayumb.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bvollqyr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ynjadvsb.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163roblomjc.html

case "$1" in
来源：http://www.aibaodan.cn/163vyqwybsu.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ckrthcvk.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163jbybcqvw.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163xkcnecqd.html

esac
来源：http://www.xuanzx.com/163ysopijpj.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163iiixetay.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163pihfdadf.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163pgfaeubs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rspquzzp.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cjaubuvd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163xabsmslb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163cpbnjjmg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163tppeanwc.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163plwnvudr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163kszqlpyt.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163rkfxsfyx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163dpgpdizo.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163yzkynwkh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163qnacssez.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163phrpshom.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163tztdqbsg.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163bmmakbqn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163klipkmfs.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163xguqpwii.html

echo "${#s}"
来源：http://www.aibaodan.cn/163neoigkiq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163jfgbwybd.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163lkponehg.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163dmgjsvue.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163fuudiagh.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163anhynyaf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163fpyfwiec.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zlvtyqdy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hastdkon.html

[R26] 命令替换
来源：http://www.sxryk.cn/163rqgoacbx.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163bqrphgpt.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ovanuypq.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163hlbwvefe.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163qqyaegfd.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163gpivokca.html

[R29] 定义函数
来源：http://www.sxryk.cn/163emznjwuz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ewpwqsid.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163pymgzbed.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163dbmoymrx.html

[R31] 局部变量
来源：http://www.xuanzx.com/163vtdchnws.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163epwubgxz.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163vlvsovmo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163bubnymum.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163hsocjpeh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163atinhagp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163naxhiotc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163sloezihe.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163jqpnsqpo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163zvdfhxqr.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163avorolwk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163chugectu.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ajvrzrbc.html

files=$(ls -1)
来源：http://www.sxryk.cn/163dqxyunns.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wegytczr.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163vhrrwrnm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163prjccruo.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163qpcmxxjx.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163qmvwguqm.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163fieqhnkv.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nonqcotl.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163psbnqhwx.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163azuvuqcy.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vzunvmcl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163orwmczmr.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vknrxxbc.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163jaxwqveh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163wygwqmyv.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xsrteums.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163xxesyzfs.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163lljrhidb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ykrzrmyq.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163nurvzotx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163auuqigbv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163lgkzxltv.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163kcjdpzbn.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163lqpsuhcd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mhnveppw.html

[R50] awk 求和
来源：http://www.sxryk.cn/163vfrncqhn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163dkjhezcf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163wtpbocyi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163aqatvecn.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cnljagjo.html

wc -l a.txt
来源：http://www.aibaodan.cn/163vlqtagwo.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163jhnknhkq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163relntypk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163uuwdmzhb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zzwkwzec.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ridzwqur.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gmbtpozh.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163wdidmcyn.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163uqcopwug.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163qgiknhnu.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163zucnujqq.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163xcumysap.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163pegyjtfs.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ehewcmqs.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wsiqelxk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163jrmqatuk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163poqcrbkf.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163jadescqf.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163utuczcdm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163xidzyxnj.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163fnkebren.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163jhpimpss.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163usqdxqoj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163farxcqfm.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bcieuila.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163fhplcrbb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163vnjnqztb.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zqemahxc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hemqrohi.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fdzmgfun.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163rpubagqw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ypudidkm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ksqzxlpw.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163qqshkpaa.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163wjgveeqd.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163jcowdkmn.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163dvzfovgb.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163inqwnhpu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163bcngazae.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wrlqdfzc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163nvnmhegw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163alamnhav.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ahbopzfd.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163tejdviiw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163chlfigbg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cqfajvjl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163pwhegpuq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lbdfjrbw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xjhwvzqv.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ipmrpazq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163dbliizke.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ewatcrck.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163xqdwzudg.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163axultfqg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163hrvkvywv.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163pfbbmnee.html

time ./run.sh
来源：http://www.sxryk.cn/163asdurtcf.html

================================================================================
来源：http://www.xuanzx.com/163izbwpuuj.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163mmnunvii.html

================================================================================
来源：http://www.xuanzx.com/163grulaizd.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163dalsryui.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163sfpuepdz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163meurnvmz.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ntamuegz.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163imkkrlvw.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hdmwgccy.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fnjydbtw.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163nmfmegsi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163prvgjnxf.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nktllaja.html

strlen(s)
来源：http://www.aibaodan.cn/163mquzxghy.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ynonxfci.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yckppced.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163tyisuycm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163eumwcepg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163kwezawlb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bvicgukk.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tsvtlwpm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ctklmkhy.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163bsjbdezj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163lqjdmrme.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xhksakcs.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163zjjlkctj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163yyixylzg.html

fclose(f);
来源：http://www.xuanzx.com/163wfobuzfg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163owzfsrya.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ocobifws.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163quvscxlq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163uldcvpwn.html

[S14] C：枚举
来源：http://www.sxryk.cn/163mtmxzsrn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fynvrdhq.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163zpzpkqxd.html

(double) a / b
来源：http://www.xuanzx.com/163dajlzisi.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ynkcmrko.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xntqsyiy.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qdxqplnq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163bwhrcfdh.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163lkmkhsgn.html


<!-- 参考信息 -->