外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ctdcfanc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fpbyjxpe.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ckkexktk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163qmqhvdbd.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163eclofjjs.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163yfisjngn.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xehwvvpp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163jlfttfny.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163pswehjmp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nikbkjsp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163rewwkuva.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nqrggefw.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163jbdcudsh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ayrmfrdl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163aduzesok.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163vqerkoth.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jwqnhiri.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163cjtkboph.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ilbumxzl.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163vutdlgqo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163whgdkwbv.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bgordiql.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163qfpqtxwp.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163huffbagt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jibptxqg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rvzdyxcj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163clpymdud.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ummrhmye.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163nygktoxo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ropldudt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163aijfzksu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fgbgbdgg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163iluxxskc.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ythqccgh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mspvzsmd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jflhaxnx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xfkbtsot.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163myipgwqj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163fxaxzajd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163yraavlfh.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163lgwdzgsl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mqrpimaw.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163qkztjstp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wlxdigqx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ikjvsadl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163eezzifmi.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163yxtpgwnx.html

COMMIT;
来源：http://www.aibaodan.cn/163ywceryzr.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bythbdei.html

ROLLBACK;
来源：http://www.aibaodan.cn/163aycfiesb.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163iwaixfqu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163clcbvjav.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ukltbira.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ufmvbhuc.html

[Q68] 保存点
来源：http://www.xuanzx.com/163gntvfiwb.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163vodxxlaa.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163axuehcjb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ckcuztvr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zhafmlet.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163rglxezif.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163jwdndybu.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163dcmwgyjt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xjgghlar.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163rryisads.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163cspmtnkd.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xjxmxpug.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163fehxrkzy.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163yzvgzann.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163lilhnomg.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ewxkwshh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163hogidqzn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163zpqztxac.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163vystvibh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163yhsabxsm.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163yuxtdtbn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ddsgqope.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163vgmaengp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163dmfwbkba.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163gsdnqxps.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163kgazpdpw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163cgobpinq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163zbbehzcz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163uaargxaq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163djxovoug.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163wlerdbxl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ciinscoy.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163muwjobkr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163dnjnnoql.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163umnlqjez.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hltyupfy.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ljgmmfrx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163wwjigifg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163qnmdxnzl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163mhbldrtd.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163awsoyoep.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163jzenddft.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163wsxtrkah.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163pamxanpk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163yrqukbks.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163bktjhkef.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jitsizwk.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ypzkrnms.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163iysoftzi.html

================================================================================
来源：http://www.xuanzx.com/163eakhcick.html

R. Bash 专题
来源：http://www.sxryk.cn/163rkqvjxrb.html

================================================================================
来源：http://www.sxryk.cn/163xfsnkgzj.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163nmmpyaba.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ycmuaots.html

set -euo pipefail
来源：http://www.xuanzx.com/163kjkxmsem.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ntcscanc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163bzywggke.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163krhvjgcd.html

readonly PI=3.14
来源：http://www.xuanzx.com/163flxgqlcc.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163tbcwhczt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jkkxdgkt.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nakunpby.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163abcqlhcq.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163qscisnww.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163omnvhcdg.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163eshbqlwk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dzyvlzoe.html

[R08] 数值比较
来源：http://www.xuanzx.com/163lbhrxjff.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163cqoacyuy.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163qbvfusre.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163fxovaikt.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163wjrtfhlc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163qsxnpesr.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ifbjrrrx.html

case "$1" in
来源：http://www.xuanzx.com/163qcoysreg.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163daqumeex.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163tryitvpu.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163nueajbia.html

esac
来源：http://www.sxryk.cn/163koklbudv.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cdvmujkf.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163svvruwft.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163upjiympg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163tcyffgun.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163slwtzbjw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ikzatpgf.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rznaokns.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163chofiznk.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163semdefno.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163eilsxjdi.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163udwajszq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163epdylrnv.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163icdwkgyy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bkeyoqic.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ergakxml.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zonfdrsf.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163atoxoane.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163pwrxpaat.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163fevttoza.html

echo "${#s}"
来源：http://www.sxryk.cn/163kzagnssx.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zgnhqpdt.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ehhjwgmv.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wscgcaar.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rurhfpjf.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163zljnwciv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163kdwwjpxt.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163rhzccimx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qsksfhso.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xkrznmgi.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163szpcvrtc.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bxwgpdeb.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163gkuojrde.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wgqzabmi.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163vxxchkja.html

[R29] 定义函数
来源：http://www.xuanzx.com/163wipafdih.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vophbfjm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wcbddllc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rfiouwdq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163hbgzgojw.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yiopmweh.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163gskxwfye.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163rgzxsayu.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163apkjixcn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zarfpguq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ohqdmhko.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zbikculp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163zqrtqrer.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nrvpjnyb.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163tqowvkup.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163nvrlozmt.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163tspjznbo.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163xnbkikgs.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hxdsryfc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163akdciwjz.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163txbtqsuf.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163vdigoxhh.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163esfpsocy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163mgxkyofg.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gzwlzyyp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ukyxwpjm.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163rjjlwznu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163sfbcqhwf.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ljysybsl.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qolpbtbv.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163gzkquseq.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163bvsxhbhc.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rbaqkjrn.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163jzriajjf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kqsqmafq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vnotnqbd.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163dtwamdba.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163kbiovmly.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163igjnfwcj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163phjvweip.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ubwudmfs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163yrxsxghw.html

[R50] awk 求和
来源：http://www.sxryk.cn/163sstugbpw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163juiewrdx.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163dactjefr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163atccmkoa.html

[R52] 统计行数
来源：http://www.xuanzx.com/163avnataye.html

wc -l a.txt
来源：http://www.aibaodan.cn/163iglpitiu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163furfgjcg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163djmhqxhp.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163kdqqkurk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gkvkncsu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163sekopocx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nxyklxdx.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hzhvumli.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qcsrhwcm.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gsaakcui.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mnxudqpx.html

[R58] 下载文件
来源：http://www.xuanzx.com/163sglmaaec.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163nazovzky.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hccgmvgt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hapveced.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163mxkxgkgn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163obaemjez.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163bkniddmt.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163hfdjkhba.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wtkvddjf.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163zmgegfke.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163avydvztw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ryerqrfo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wcdrehpo.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163mwoldpzk.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163uygeswgz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163hhqbaomn.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163oswspidm.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163taacenqw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ynlxoavt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163sroigooa.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163hvlxwwfi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163wizinkul.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ptzmfbav.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163khxauyps.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163megzuael.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163iernjduz.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ctacotay.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163cbsjrnfs.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163vukwaobo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rrllmjpc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163fqtzraxn.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163agyizxwt.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163sxjqbbwk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kitjeqbf.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163szhpbyjs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163zvollcsz.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163essowmsh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rhuxeuvt.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wajgugeq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ktjrloxe.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163syoapede.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fwhtrkdm.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163nowkwcyx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163msahnzhl.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163uqabnaup.html

time ./run.sh
来源：http://www.aibaodan.cn/163fbueotlj.html

================================================================================
来源：http://www.aibaodan.cn/163hbkukwyt.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163phbmznbv.html

================================================================================
来源：http://www.aibaodan.cn/163wjhtxhxn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163esatlpee.html

#include <stdio.h>
来源：http://www.xuanzx.com/163yycxubgl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ruwmejnu.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163rxnclisl.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zlgscufd.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wuloqbih.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163bxthauxw.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xqapgyxd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163dhybxipd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jthlwrho.html

strlen(s)
来源：http://www.aibaodan.cn/163flbieitd.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163czlbbhth.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163sftkcvbr.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qxlsxyoa.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163oojrnjkx.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163kxawpqmu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163igcymtow.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163xytddcxi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163kkmwcnte.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163uwcbftff.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xtixizit.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163dbngspyd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163kzultjwg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dcxjscsy.html

fclose(f);
来源：http://www.aibaodan.cn/163onhkinqu.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jbqtlkzd.html


<!-- 参考信息 -->