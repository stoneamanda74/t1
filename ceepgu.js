外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163rzcpexnd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163sumvokzv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163gkegxgme.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163iddxrknw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163zmlcyghn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163jzqduxqz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163lzbumfld.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163slamiwrx.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vluminqd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cklhhhuv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163tykhexhl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hsuamcxr.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163lbgoqkvv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dqdyubcc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163xepuchrg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kkmaykbh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163kpoisvza.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163curljoie.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163owhpinyg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163abmctwhu.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163pvwywokf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163pnvbxlax.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163hhywjtfl.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163usxzirsy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fixxrasw.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nlfrhyce.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163giqcyfrq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163hcowtdmm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ajnkemrg.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163tdygnvvi.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163xlcneojo.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163eojmekus.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163byqitgmn.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163yojbbjyr.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163gocjfhpw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163mbmdqfzw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mdknjgrb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163waxvamic.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163odigybmv.html

[Q57] 行号
来源：http://www.xuanzx.com/163vdykzusr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163scuyhoyx.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vhzycovj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163teidjsou.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163bzikhvsk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163mejuknfv.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163myrzhcyl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hbzvyupq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163uetdjbcv.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jglhjoab.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ypioppon.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163udtwhvpx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163snzxbihp.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163eyiumlcp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163qaugqglz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ucccepwt.html

COMMIT;
来源：http://www.aibaodan.cn/163rnsltypi.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163olwtgjce.html

ROLLBACK;
来源：http://www.xuanzx.com/163gxtpdsya.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163lqnxvnud.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163igidcswg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163jucdnqzg.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rnxpiohm.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ibyzwghr.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163legvampa.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ihrshhve.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163yaihencs.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163oiumsacs.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163kadpxdjg.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163sxbytrgq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163mqblprwq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zfpbbcna.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ygpzjdkc.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163vmmtvgpe.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jfemarmm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vzxsggrj.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163fjhyjryj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163rczpvtcd.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xomcdwym.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nabnjpah.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gwreztjn.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163iuuvxkvy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hquurpfl.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163bhxakbyd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163qxuwlimn.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163vqzdxsho.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163jedqrtwk.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163pkjavnjv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wylmjkdc.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163kitcarbt.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163fyvwffyz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163plaicnwi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163yzdnrpzh.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163qeaoxnxi.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163xxvjcvzq.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163nykviraz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163mdafvsdc.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163wkyzbacm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ntzluxyu.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163knuedymd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lmriibvv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163eesmhqev.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163xqmhzdhn.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163bbkysake.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ucwjhmmb.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163olbjnndi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163hhpkibuv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fuvboozq.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163igcwzauv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ftzxapvc.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163qxkffcyx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163lhvsndlj.html

================================================================================
来源：http://www.sxryk.cn/163uvpfyaiu.html

R. Bash 专题
来源：http://www.sxryk.cn/163kjoegnrf.html

================================================================================
来源：http://www.sxryk.cn/163ldunbnrm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163aqihjxje.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ofaesjdb.html

set -euo pipefail
来源：http://www.sxryk.cn/163fbvecmuh.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163glfqnzen.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163smvnmuyt.html

[R03] 只读变量
来源：http://www.sxryk.cn/163bkzmxywb.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vcwbpqgr.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163qekjcokf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163blqyyuxk.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163nehaeztr.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xqzmaeho.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wmesfxjj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163bpqposxl.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163gdlftlhx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163lnrvhbwq.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163riybtxzq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pocitpjz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163zyfrcuzk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163fbqkqfgb.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163fgcsygod.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163jzvamzri.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163rtkuudvu.html

case "$1" in
来源：http://www.sxryk.cn/163ahokrjch.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ygonlxgh.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163jotzmfqs.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163patnlylg.html

esac
来源：http://www.xuanzx.com/163lsqhdcir.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163juqiohhb.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163nlqymgch.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163kbsrcqco.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ozmyerng.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163kisbytic.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ihsyxzfo.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163dszrrrrt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163tnpktxfe.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ryqkyrof.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163cnqquael.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163udaosidq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163fgnvihza.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163pllawosb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163neculdqa.html

[R19] 数组长度
来源：http://www.sxryk.cn/163vjqgbbul.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163tsisjauy.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mnfqyxax.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163sinklfdn.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163gxtbqiqr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ijevhepo.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wdauzfvj.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163wfnbvvzp.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163jdqyclnp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163adowqrwb.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163iszgocts.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qrwzjjiw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163dcmzfadc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163cogqytco.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dcwxhudu.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163pzelrjju.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163ugqmdgyt.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163zynppowi.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ckardoxj.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jelkkqtr.html

[R29] 定义函数
来源：http://www.sxryk.cn/163meyswapy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163odbwetxw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163mdafwzcj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ntxdfhbu.html

[R31] 局部变量
来源：http://www.xuanzx.com/163rjcgqjjp.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163vdganfvp.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163wpjnpktk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163hctbgkzm.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163bediikvb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163yqsozywy.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ytmbyxpf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163amouieni.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163mpkvmaar.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163mguxonrw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163qbhzxokj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163wegechtg.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163uqgnqnua.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wdiodvjc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ggfkfllx.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163jbsqlxcr.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hrhbcsup.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163fkpisszn.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163sgjasvvl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163bhdjegne.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163shoaorsc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163fayuqfkk.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163rjfqdkvt.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163lsxeuekg.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163nxunsqnd.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163oembvljk.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gaqnmqkl.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163owrjukup.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163txnaiiht.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ivxwoyxs.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163sxwxnrud.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163uccbhvag.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163amclwprx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163oufpjbjx.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163glotnbqk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163drrlvkbi.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163adinetga.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163niihpdcp.html

[R50] awk 求和
来源：http://www.xuanzx.com/163phjibkvw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ujwwqixg.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163mozsopon.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163fprewski.html

[R52] 统计行数
来源：http://www.sxryk.cn/163xirbxarq.html

wc -l a.txt
来源：http://www.xuanzx.com/163vtvdksxb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lmsqefra.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163obxdbmyb.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163duikhjdq.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163evofzalj.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ejffbcxp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163wlmuvnqc.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163heqekrnv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163qlamuelp.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163eknvelil.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163shmhkjll.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zppyokmx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163enrjofgx.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ppgkzwjz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vdxzlbla.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163jfffohcw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ttlkdluh.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163syeiwesi.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163axzuxnao.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163vtjxqdor.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163vjhrhqxi.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kivxzemv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163yfuycfzb.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ukhkdizd.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jfkmcyxv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163iqwlqzhf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163hsbwagwa.html

[R66] 定时任务
来源：http://www.xuanzx.com/163qovnxjrk.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163pikhteft.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dyzdohac.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bfupsunv.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hekjfzow.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163naftdndm.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ktrcusul.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163osvbkzre.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163hlgcbhxf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fzlqxaog.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163xzcycicc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ukyghvzh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lkceerbj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163uilzvzvr.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163bvitgrac.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163nqytjpoq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163xxgklkof.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vbmnexqt.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sqtrkpok.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ghxtfohy.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tygpwdpi.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rtfbmurj.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bowjeaoa.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163utjtewax.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tabmzmjy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ejrxpkhm.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163xlhjpqmg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163kuboroxx.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163iahqmuai.html

time ./run.sh
来源：http://www.aibaodan.cn/163mhlxjalz.html

================================================================================
来源：http://www.sxryk.cn/163btgrogqs.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163lqzxdkhc.html

================================================================================
来源：http://www.xuanzx.com/163onxcbwae.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163hfxwncsq.html

#include <stdio.h>
来源：http://www.sxryk.cn/163blvbgxxh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163xohqprgw.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163hygguhii.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fzemspax.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ggtsmisw.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163wbxvvyfh.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163wjtueljp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163pjhzgyxm.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163mtetfedh.html

strlen(s)
来源：http://www.sxryk.cn/163lrganvwz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163yazkdeoz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yhinnhuu.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jbqlzngz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163mdsjsfky.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jlnoznek.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xlqidhlj.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163sfsbdfkb.html


<!-- 参考信息 -->