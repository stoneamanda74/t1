外链999!wailian999！

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163fykwsfko.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ksrsbhvi.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163xczpuhdv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ffltcqpj.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163iixihgwj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hgaqekbs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163bfmwselr.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163vlphtpzp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163oiwhydva.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163poktkhwf.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163hocyixtw.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ffcghlfa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163syaallfu.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163yjealgvh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tlhbgjok.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163zmkpmiox.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163hbemugco.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163kcviwahv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163fdsheiad.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163cfjrfjnl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163bsqnxcce.html

[Q22] 排序
来源：http://www.sxryk.cn/163mxpkauak.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163tokaxboc.html

[Q23] 分页
来源：http://www.sxryk.cn/163bapilbyv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163mmwuohmm.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ngvzdzed.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163lbxyhhwg.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163fhxztovs.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ntdhhkxn.html

[Q26] 计数
来源：http://www.xuanzx.com/163bnagdnmp.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163jpdqjiae.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vlmnsdok.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163dlylgzrt.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ulointpf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163zvydcyjm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163orpxwctb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163noepgrys.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163sjuyuypf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vitskiwn.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163nbncnbzh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ptevltcl.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163biduspbr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ulfboeqk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ekfnmzhl.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163iiraltkk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163vedbmhpr.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163nwlbrdhp.html

SELECT * FROM (
来源：http://www.sxryk.cn/163xwrdmgpj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tampovrg.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vaqofrub.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fdmygfug.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163sjdsqfpw.html

[Q36] 左连接
来源：http://www.xuanzx.com/163efgvfkpp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163yzdgldrj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ezssgzmz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163yubqqrki.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ixntmzkm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163chsnkemm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163vpbbmpaw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ygxalbek.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163cpfdqmog.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hwdtkblr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163bhfthyvc.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vouvtxlr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163nrtfeipc.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163kmkzhzbw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163egqgoiqv.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163tenpfnhp.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163oinhtssr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xsxscbcr.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163snndsuvf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163eqjepgxm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163kycnzizg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163rxikmyei.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163wdsclfrn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163aecdrfhx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ewfxtjwl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163eahyfnls.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163yticuhjy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163kqpgmvow.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vvxxnxfc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163irhzfnwh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163vjklhzxv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163uatmrwom.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163shzbznfl.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wcjytoxc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163kxnbream.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163eufllcil.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163xoyswavz.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163inxqepjb.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163kboyjhue.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163dsrslqpn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163pfobzyiu.html

[Q54] 清空表
来源：http://www.sxryk.cn/163pskifbvy.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jddoliff.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163fdciokjq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163fsaocvqb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163yvliyhjv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vxlbrskc.html

[Q57] 行号
来源：http://www.xuanzx.com/163edirpxez.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163vwdmefhe.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ldlxzeci.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163uifzapit.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xlgnadkn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163jobgnpih.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ypanpnza.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163uwajfezv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163yhkvvbor.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163nsvebcvb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gtwhminp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163cakskznj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nnrjytjl.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ftonyuay.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zbxfanfw.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163drkzcegp.html

COMMIT;
来源：http://www.xuanzx.com/163ujanvavc.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ribalgje.html

ROLLBACK;
来源：http://www.aibaodan.cn/163bnmsevbk.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163flgmgutv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hxzveegn.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dcpmbeqn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163poqrhldx.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163bjjrtyqa.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163bxjmevhc.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163sbltzdvc.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hycbmcbf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163mhuddxqq.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163pdwlefex.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tkkbqugs.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163pyfousxi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163bfmytbrp.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163jkokbvlg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163medlkjza.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163swmatqjr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163hhbitivs.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163unszapxy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163cfwwzznw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163iepvvjgu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163zytdktva.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163xrxrdfqo.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163mbduyxtq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163xizpsosu.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ezamcole.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fbifalwl.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bwhjginb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hnrntstv.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163durmdimd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xxnetkbc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163arbqfvch.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jwprduuy.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163nomsurym.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163uzxxkati.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163fpbwxjgm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nwettxco.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hsliursb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163uraxdpwi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163xuamwoni.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163fsgntoac.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qincrfjr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163noomrupg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ulnojzpv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163flzfmhoo.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zevpkkgn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163pbtnzuyk.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163tzssnncj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163yialkbum.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163fkuoivdi.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163zdejsrrw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vruhkyfv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163udjonsom.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vvrfknuu.html

================================================================================
来源：http://www.xuanzx.com/163ucfmnizh.html

R. Bash 专题
来源：http://www.xuanzx.com/163prxmwqlm.html

================================================================================
来源：http://www.xuanzx.com/163lgjiaunk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163tejpuzhx.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163kojcewhj.html

set -euo pipefail
来源：http://www.aibaodan.cn/163njxsowot.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163hosptquv.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ikjutste.html

[R03] 只读变量
来源：http://www.sxryk.cn/163qpoompad.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ekbzlbmo.html

[R04] 位置参数
来源：http://www.sxryk.cn/163xnznlfxr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vxyolhso.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163upqwveon.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tqrabdam.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163dlwmrdzu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xssojeng.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163urcujaal.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fnxwrkih.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163wvrelzxn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ubioiiyx.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ykmxdoot.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163qupkxght.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163hopruklw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163xzfuekso.html

[R11] case 多分支
来源：http://www.sxryk.cn/163miluoqzv.html

case "$1" in
来源：http://www.aibaodan.cn/163kvcxkkap.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pfgqirez.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163kntqgjke.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ajsehkus.html

esac
来源：http://www.aibaodan.cn/163ercdrwju.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163yvecbquk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fqsmpbek.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jyvswmbi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163shfxmcum.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163goqehvfu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163krfsvjwo.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163cxfsmnfv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163akdschkq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163iyzzqbgk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jjxsxasz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163umyuftuk.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ovliuxsg.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163mbvmosyx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163vgljjifr.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163yzgyffcv.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xfyfgpwz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163vyheeltt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hltbxyaz.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163jexxuucw.html

echo "${#s}"
来源：http://www.sxryk.cn/163tlfksulp.html

[R22] 截取子串
来源：http://www.sxryk.cn/163euegitjv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163jkxolspc.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tymtwlnm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163zazajrmv.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wfbnsjim.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mawmmrdg.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163wickyifj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163jppfgmoj.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163andzyunp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163etqvbffz.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163zvmytmwf.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163lfxhsugg.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163clddtotc.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163qlukihtn.html

[R29] 定义函数
来源：http://www.sxryk.cn/163gvockhjc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163oyeqzfdt.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163aiufwqwv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163royschwy.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ijtgqufl.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xrkzjchv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163qiazxcnl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fkrhhvoa.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163emyedkho.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163emdnhzfp.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163wfvjmfqv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163kdeddelr.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163eohtiatf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163dxiosyql.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163uqakmbyr.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163uogvhsoj.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nimwtcmv.html

files=$(ls -1)
来源：http://www.sxryk.cn/163gnwomscb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vlgrckro.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163efnaqedv.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163iawcdooc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163tovfjisv.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163xmgkfqel.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163kkszltvu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163buvdvxfe.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163udqoloue.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163dqzcrsji.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ruozvvtb.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vcfkckee.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163itkqhckb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163revkbwyu.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163atbtrman.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ifpckebb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163euvqntry.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ijnwealq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163yfszxssz.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163tvgwxmlp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163xysmjnkr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163yuuqydrq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163yduwecaz.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163dctblnwv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ovdkiblq.html

[R50] awk 求和
来源：http://www.sxryk.cn/163oqtabwrl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xczlsijz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kcycpebu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163zxhhtems.html

[R52] 统计行数
来源：http://www.sxryk.cn/163pwzyzqvx.html

wc -l a.txt
来源：http://www.aibaodan.cn/163rxbkqjye.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163pnqoenbj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lcvvnpki.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vnrgkjnj.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163nmccesdv.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qlqhdhgq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163frktnxat.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qgkbmnbp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mlexnpkh.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163weunoieo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163cibuvpuu.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fjogzjbu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163osbcthfk.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163rinonwci.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jotqhamr.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vqrztgtr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163xjmydtqp.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rjxisdpc.html


<!-- 参考信息 -->