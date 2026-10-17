外链999!wailian999！

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163apaqjtzp.html

[Q24] 去重
来源：http://www.sxryk.cn/163kcrciyxl.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163jrnwrhaj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163yturciyc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163puksemdj.html

[Q26] 计数
来源：http://www.sxryk.cn/163hqzjgvor.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ixlosjnw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163dcaigwnh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163sjcsfizu.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hiclddqg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163nreasgzl.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163nsasgvot.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163deiyhzcj.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lhpxqgvc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qhriemar.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wjpkgflj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163fshljdgd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vskvfwfy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fauruskw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ptsicuse.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163msmpfnfy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163xldgbxcp.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163krdtccrs.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vlnxgcar.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163muxhszpk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163gxgetexj.html

[Q35] 内连接
来源：http://www.xuanzx.com/163rnunxluq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163makatrre.html

[Q36] 左连接
来源：http://www.xuanzx.com/163acgyfuuy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oxpfojzs.html

[Q37] 右连接
来源：http://www.xuanzx.com/163yghzufah.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163pjptcmzc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163hvebtemb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bszugwux.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hjnzzdqv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ythgofmy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163febwogou.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163pqyndjdw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163arydrnpo.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163xzlvaheb.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163nmclyfum.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163khxwpwyo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163wnpmrupx.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163vpiogkys.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163huiuxlvi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163aeeukoaz.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xmaztulh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hcmqfifu.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163fzowkdha.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163fuqmdden.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fuxiqpny.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bgemluhu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163odzkkqhe.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163yohpfhyd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163lmdddlqe.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jxbczayp.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163paiaqbuf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163tnxoopdg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163jajaojob.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dsrppuvd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ztlilidq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163mfzeqyec.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163kltvwtdu.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163dmjahyvr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163rwljjlvc.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163egcjisfy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163lqnxcbif.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163kgchplzf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163oruwwaxd.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mubiwyyj.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163sexcjcxi.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tvcwkkff.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163kcivlycf.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163sozkpdwb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163dfpplzaj.html

[Q57] 行号
来源：http://www.sxryk.cn/163hcvigfif.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ufmbdruw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163fgkqanrp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163yenkofoa.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163opzsfltq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163xpztvbvi.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163modssdon.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tgdwtjiq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163fxpjiors.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kcgkqrcn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163gcxsruwo.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163yjmbkkac.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rmyrcbfz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163kkoazoxl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163nsdohpgo.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jujwnbdj.html

COMMIT;
来源：http://www.sxryk.cn/163fimyobgp.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163mjhmzfss.html

ROLLBACK;
来源：http://www.aibaodan.cn/163mnydtmvw.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163wnfbnkor.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163mgojersg.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163kftsurhz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163hxnrmtwl.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kuckeuei.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163givzpcsv.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163qxqczint.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163pvtlqwrj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163rrgngslu.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163anhftipq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163physzzmm.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163vpbmtzgg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163kboxzqqi.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163tuicihyy.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163gjzzdjju.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ueopfptk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163kpiwmqtj.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163iqbqvncb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163voapxews.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163jzplaqyl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163uroopvdd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163kgjvlvrq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163nfcfmfzp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ebrughte.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163gnaqecvm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jginefpb.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163jogauwmw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163nbmoxkca.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163pyrqdgat.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163dkmdafiw.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163sxpdimye.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ttsuuzwl.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jpovdini.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163bdlsitdv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bqhdvbfr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163vaumojcz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163vtxvexrd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163zoctjcml.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163hqkbnrfx.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vysdlzzq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163iftsaovf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163cursdhzi.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qgamlgfp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163vjrrajbp.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163opyyrzdl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163qttanjnw.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163nkyhkvee.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163cakoeanp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163hepzrlnq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163desjxihz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163soifbtyb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lysvmpdp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qkyahjzl.html

================================================================================
来源：http://www.sxryk.cn/163ydgqrzrz.html

R. Bash 专题
来源：http://www.xuanzx.com/163izjoiumt.html

================================================================================
来源：http://www.aibaodan.cn/163hdbolman.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163rjfhyihx.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163babaytge.html

set -euo pipefail
来源：http://www.sxryk.cn/163avnwzkqc.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163fumcjxwv.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163yvttvjvq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163btdzsdiz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vudgajil.html

[R04] 位置参数
来源：http://www.sxryk.cn/163hvjpcyvr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163kwcxftzu.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163woweofot.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qjbixiki.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163tgmwypab.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163tuzlsukl.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163jmlnsbpj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163uvudhtcm.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wxombkdc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wnbenhar.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163piuoiyxa.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163sdywooyv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163rzkbcujo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163brbexdgl.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163crhtwgef.html

case "$1" in
来源：http://www.aibaodan.cn/163lavazxnu.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163cqtbhggw.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163cekueuvj.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163bgrllwug.html

esac
来源：http://www.aibaodan.cn/163wgapjwkx.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163xglkmwmj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163uedynuhj.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163secojzkc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163frrzsbgm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ditecfkt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163okskgpqh.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163eitendgd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163sleqoslr.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163kljypaio.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163pteadvjt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vgpjvlab.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163zphubsbl.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163aqpqipdm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bjnluabf.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163mwwkmqmi.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163nofgbwtx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163turmfvmr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163lrsxdqje.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wogloxhb.html

echo "${#s}"
来源：http://www.sxryk.cn/163wydpiuuh.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xqotwwrk.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ucmrnhfg.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163zxqgqtam.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163joaxgwoa.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rdfyjazu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163bhxsyjis.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ygphymoy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163wrgzhloj.html

[R26] 命令替换
来源：http://www.sxryk.cn/163kmqntxjy.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pjzrczzw.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ukqhzhlo.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ygcjnyqp.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163fxcygjur.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163eerscvwf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163twfnlwla.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xedwnsyf.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xccfoegh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163rnanfkdc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ncivhdnu.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fftubnkj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163aqpkmfcs.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163bocynuuj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rjhvsquj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dxnsvxww.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163kdyuhuke.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mpdyhefx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ggvkqkvc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163npzoyduz.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163cnkujopn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163xhmrdqht.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lrasizin.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rkwwfmpb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163hmpmkhad.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163hqilmwyq.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zekwxlhy.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ebxprswn.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jvmtalkc.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dtwzwmeg.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163cqtqzily.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163tbewkqyf.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ezrukpzi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163efpqgdbc.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ybihsowv.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nxhuvqhi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163rqatzynp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jcfammov.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163jyenfsxy.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163eybnudfh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ndoqmseb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163iemqrasa.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163wfiilgue.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vfhwygga.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ezitzdwp.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163dvdetkho.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163fvrrlttc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163odpyzmth.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163uqpjeype.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163wujgybod.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163scwgvkey.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163qizfqhxz.html

[R52] 统计行数
来源：http://www.xuanzx.com/163dxrxgtkm.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fuaxkgcb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zufbfken.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rxwdbfos.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163uykmdhdd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163sbyitdlx.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163uawahiwu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163fxpbkqgp.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163enjvdnpw.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163lssmpdee.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163lrykeprm.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hfrnytzu.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ttjtahbt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hrfwqudk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mokiflcy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163uojhphaq.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rkukpcwk.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163nympamwo.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163emwjqoer.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ujorjlxh.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163wbsqmisp.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163omhtqxpa.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163rylhctce.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163racgnyjn.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vjiagpyo.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ywukdwbt.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rtkkwtmq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kaabsvzh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gbvfjeuo.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163rlxslnxh.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163qslzwmcu.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mpyzbhrc.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163nysxbtqa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163dmiekovt.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163jvqgpahh.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xjpmljmx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ewyjnswe.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163npxxykdt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vtttecqh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163dtabwzpk.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163luapohtt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163islnzweq.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zmldbbmm.html


<!-- 参考信息 -->