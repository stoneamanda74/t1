外链999!wailian999！

SELECT * FROM users;
来源：http://www.xuanzx.com/163cdcunulr.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163izpmwtfx.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xcjokmit.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163iaduawjd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163gsiimzru.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163zfiuufdo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163zoegihde.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163rsofgatj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163efhydfwj.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163lpovowoz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tqiatmpl.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163fkiqngdv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163uxcufipx.html

[Q22] 排序
来源：http://www.xuanzx.com/163apastcjq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163kbbzlktw.html

[Q23] 分页
来源：http://www.xuanzx.com/163ehgkwxcf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ncepbwaf.html

[Q24] 去重
来源：http://www.xuanzx.com/163zvhlmzyv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163sxlzzpyj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gknunylc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ptpjmygm.html

[Q26] 计数
来源：http://www.sxryk.cn/163hlgawtzh.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163bqghaujp.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163mfrkshzh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163qsdlowoj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mjnasyua.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lbrlefnw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163wxdbhphi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jkdgpnex.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163apzlnoqi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163znducfca.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163nldejenz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163yoppypln.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ddrxhkju.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bufsqqke.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163edwiclbl.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163dmjlkedn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ssgemmzp.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163itjkjqfe.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163vprytflo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163oeuyyjsu.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163yqyanfro.html

[Q35] 内连接
来源：http://www.sxryk.cn/163vbrrvjkr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cagrchwn.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163wwuikwla.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163khxmpaye.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ftfcbern.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163snxwmzdv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163njfogtrj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163fycxlrsd.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163lbbrasin.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163zsccthlz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163fuvmmgod.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163swgapotp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163lxeklrgp.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163xqntqzgr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163yaiqcjdo.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163vzksxtyb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163pdadguvl.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163phtfilxj.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163jcnnkwsb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tapwdvtu.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163kamzmiku.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tuftiaoo.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163hjqgyfpk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163kunravzd.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163erbnqyih.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163euglknln.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vanjeyrg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163yjditkyo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163clqlzpem.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xidmdjea.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163hnvrkkqy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163yedwsdtp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163iopbsfxv.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163friwazdk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163erfacuqo.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ahxmrufh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tflwcbqb.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163jwdnvqqc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163urayrmtf.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163pfjvaucv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wbbizohh.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xbzpadpu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ibxxypte.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163rhjcuime.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mdilpinj.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zdfcyqwi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163yjblyxfi.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163dqxkuodi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ettjhnmj.html

[Q57] 行号
来源：http://www.sxryk.cn/163lsbuxfqy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163kapasxec.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163tqlamaox.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163icbqrpkz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wvtphide.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163fwkukxfq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dcrpouur.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163bwitrttl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163sxwffwzz.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163opdzqlxf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wifrdryk.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163hvoimcti.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pqdqocvn.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ujmlbtjy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163rjqkesrz.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163iirsbwcb.html

COMMIT;
来源：http://www.xuanzx.com/163cqdfxgpf.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163bueixfza.html

ROLLBACK;
来源：http://www.xuanzx.com/163pusrejcm.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fczzuezb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hcqrzcts.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163xggloruo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163vaynnhho.html

[Q68] 保存点
来源：http://www.sxryk.cn/163uygtnhig.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163lchqbqhz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163tyntmttq.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163lmffkdok.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163iyaxsuow.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163uiepbsbz.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qyzkgayt.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ebqijzkh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163grnhkjne.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ibumgsfd.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mlqxowso.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163luvwartd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163xugxmlne.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hjtaztes.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ivsahbnz.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163esajlznn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163mjadcqit.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vlrfptan.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163hjuijlld.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163oxunmivq.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163vtvzscgb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163xbxhennx.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163yzwwbmtl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163lmmgkdwd.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163uqdylpfb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163cnbmdvhr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ndgovxxd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163drayljwk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163pocslnoc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163csxfvenj.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163byrgksez.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163bokucqgz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jrhzaetx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ovyqkpcn.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163emahxiry.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163tieoufgn.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163jjkohzdm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163zkivvipb.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vlufrfry.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163evpsvqzs.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163yryrjyuu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163wremogtg.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163spscwfip.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qafpcbka.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163thuisrji.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163kmtepfnh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163earixogz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163lcmzfbsa.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ggrjoryb.html

================================================================================
来源：http://www.xuanzx.com/163yeapnjxa.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ihmyeaqi.html

================================================================================
来源：http://www.sxryk.cn/163hvkqzxeo.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163mzwhqcmf.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ofrssykz.html

set -euo pipefail
来源：http://www.sxryk.cn/163qudmiavr.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163plmgcevl.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ztclvgjw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163tbuslgkp.html

readonly PI=3.14
来源：http://www.xuanzx.com/163qdnxcyky.html

[R04] 位置参数
来源：http://www.sxryk.cn/163wzunqpmd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vndijwnf.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ubjvxqsj.html

name="${1:-default}"
来源：http://www.xuanzx.com/163xfvtepbw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dbzcmcag.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163nuyirmpc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163tepkedal.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163mhridlmn.html

[R08] 数值比较
来源：http://www.sxryk.cn/163egcnmwab.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qprrvmjh.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163sfcyrlos.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163cdmkfjrr.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163xfwwtvqt.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163aegxbiht.html

[R11] case 多分支
来源：http://www.sxryk.cn/163kxmyqcag.html

case "$1" in
来源：http://www.aibaodan.cn/163wligmevy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163xqkkdgdb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163bavreaxh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163wojrrjvk.html

esac
来源：http://www.xuanzx.com/163hiqevita.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163hyijgyoc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163omkktboy.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163xtefmniq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vbzgcnjr.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163wwjxiwwp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lbpjvmnj.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163mtalphzz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163cdthqbus.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tvosvgmf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163afrwbqes.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163nsygfqux.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163eekufukd.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163axbjwrac.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163rwsoyxal.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ejbqmpet.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163arqhnffr.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163einyfbpu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163mjlnniga.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163oohlhcus.html

echo "${#s}"
来源：http://www.aibaodan.cn/163clifmazd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fbahfjgf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163vkruwukj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163auqhdqkn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163qgrqrvnq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pqohprel.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163weenfbkp.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163shwnqljz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gepyojja.html

[R26] 命令替换
来源：http://www.sxryk.cn/163njjgrfuu.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ewzkqobt.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163lrzrasim.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163rzmuekzr.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163xtwzdfgu.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zouiwyuk.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163awdjcxkq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163vltumhds.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163isaftppp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163dnmukuaa.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ccbyrvqs.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163fpetvmup.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163knykoskx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163othpjxmd.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163drygvggr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163tbehtxnj.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vfcvqupo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163pczovakd.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xdwddlya.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xitbpdqh.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163nlmqljvx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163thkazwox.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163yxcnxzgu.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163rwwoudjb.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ibfuvnjh.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163oaudqrxr.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xtevbwof.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pystripd.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163jbawoist.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gcgvoaaq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163axtkfhqz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fjrqrssm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bmzhcpuf.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ahrczkzt.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ydmfljoi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163nowqlpcy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163itwmvkew.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163dhpeffqa.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163oipkbnjf.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163qlvrwswr.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ulpzyrps.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163iznmgxrt.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163bbnqgpfk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163snrqzlwy.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163evlvtvdw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xjzpcrjf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163twuqbcwx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163acmrcrgm.html

[R50] awk 求和
来源：http://www.sxryk.cn/163foaliagt.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163gvvcwoyp.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jtrdtmzx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163iyqxafxe.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163eplpedrb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163cqjjkpcm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163cljrttrk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pbvzbziw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163mzgllclx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wikyqfvf.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tnchunir.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vrrogqcc.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163bpgqyesy.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nezilvjw.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nhqikfau.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hgxojyge.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zmmzuhoe.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163nktrepzm.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ggdjynwt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ultiybht.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163dfmsyuuo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163wcpflcls.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163uaxrhvac.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ohuevyzm.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163iffoftzp.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163prsbklxt.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163uivdllgs.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wfixgqpf.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gjbponhe.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163qljiysgc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rfgrlooi.html


<!-- 参考信息 -->