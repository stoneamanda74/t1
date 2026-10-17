外链999!wailian999！

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qcdcsyxp.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163tidfquyu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163lhlhietw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163rlqqpvms.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fyjtgasv.html

[Q22] 排序
来源：http://www.sxryk.cn/163axpegkxx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163grzvzyzx.html

[Q23] 分页
来源：http://www.xuanzx.com/163apwltbzq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163hcwhafzs.html

[Q24] 去重
来源：http://www.aibaodan.cn/163evdzvnvf.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vlopxlwx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dpndqxze.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163izxbewys.html

[Q26] 计数
来源：http://www.xuanzx.com/163vwanmcyn.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163yhzjyhvi.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kxyomzua.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163sfovlmqc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163sauwonxx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163krifxvlf.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163xdkxyswy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163kyxpkywk.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ehmpihbw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sqzunadl.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163rjxeophr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kbuizkoz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163qharkolm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gpyfmotx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163inovoimb.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ecskwnfe.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163uyhxeoeg.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163oncyyboj.html

SELECT * FROM (
来源：http://www.xuanzx.com/163mwmyndzk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163lbqqqdiq.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163dguyrpjd.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pczzosoz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163muwqdzuz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163eupawaws.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163sawdextx.html

[Q37] 右连接
来源：http://www.sxryk.cn/163uwaegbri.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lfzitlzk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163doyhkmvh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jumgnaef.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163icnzbeaq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163dfcvsjrk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163wmvtywrs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163aietasvj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163htcwzbam.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163qyobdsah.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ghhwqvaq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163olspgrac.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dzvhzpgs.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163fjbkquha.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163jkwhofah.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nryiioiq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xriapeox.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163knvrvxrm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163gvcimsaf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163spiveqrs.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ruoamjbv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163uakmdyoz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163clngxqmj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vctixpgv.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163fllvwwqk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163iszjpdqv.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163zzgawihj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163bmhbsihz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bpoaazmt.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163mobpfyzt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163iztaalsz.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163smnjfrzf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163bswsswdy.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163mbfemzds.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ymfkkhsb.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163wqknyvyu.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163srygnytu.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163nfytnozn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163zsaghxue.html

[Q54] 清空表
来源：http://www.xuanzx.com/163njboamto.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163lljoaxlm.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163cydqztbw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163amizmthw.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rvbdnpsu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ifbxjgio.html

[Q57] 行号
来源：http://www.sxryk.cn/163xwljgtpt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163bzlbjkyh.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163bygamhms.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163cxrhojqg.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nvrgutgq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jwseuzpm.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163lhnqabzc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163kpepiuyg.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163srnwqxtv.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163cxhkehwl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jhrjimfd.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vgdypklj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ngyapxdi.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163fvhpyxgo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163toufxvtt.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163vkvcacql.html

COMMIT;
来源：http://www.xuanzx.com/163nwwoqnyq.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163diqfxckl.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kuukagbu.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163qbqwfrpw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163sgdidzbm.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163udpjiaga.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163pfdxxlvx.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163dmwrdebv.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fxswewjx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163wyajuqav.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163dybmxedy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tglpsxyt.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163gesusaqf.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163nefbpsgy.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kgrahvqj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163bbrrsafx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163bqcfrbda.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163lwtxljcg.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163heqxlvsk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163aynjcrmz.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163tuuikcro.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163amcjubzs.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163mztlqatm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ogsptbdw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163dinszvak.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163jtlqldhw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163xpeohfzf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163nbfbwrnk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ymjggxko.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163iyoxscbo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163svdxpour.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163btjhzwgm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163quedqagl.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163nmvzhstr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163builacik.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163cvnuwyvr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163npdlgpma.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163jyteyvwa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163zjtwfylw.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163gglxumgi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163xdcwgjwm.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163pdcmuuac.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163zzelwvlp.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ngdgjtuf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163aiitghep.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zhjideul.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163srphvrnq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163omvxdcth.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163klfcywzr.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163yqcqgiac.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163lhenexts.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163blqprnyw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163hjwhkpdo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163solbuspt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163krydfqis.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vxhmiywe.html

================================================================================
来源：http://www.sxryk.cn/163jpqjvgmj.html

R. Bash 专题
来源：http://www.xuanzx.com/163ydioawwo.html

================================================================================
来源：http://www.aibaodan.cn/163ikjapkrq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163aqwsojnj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ckwlopbf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163atyjpsha.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163erxqnmhc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163bsnnjadj.html

[R03] 只读变量
来源：http://www.sxryk.cn/163maqthcid.html

readonly PI=3.14
来源：http://www.xuanzx.com/163wgbboumq.html

[R04] 位置参数
来源：http://www.xuanzx.com/163gwfudmhx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163dwivhehe.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ayeuioqg.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ygdjwhuc.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163zrspthan.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163wdytakpp.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ilirqqvo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163wziptlkh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163wsmmzrhy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ohxxmyxt.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jvknunlz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163lvjqzmau.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163zxbwcdwj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163eeodrhki.html

[R11] case 多分支
来源：http://www.xuanzx.com/163mtovxwet.html

case "$1" in
来源：http://www.aibaodan.cn/163exaianhz.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ehicjzyi.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lrcewezr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xhitmbtf.html

esac
来源：http://www.sxryk.cn/163drequdcc.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163rntpsdgy.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xofosbho.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hvejnfxb.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163vitzwuch.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163olcjquni.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163onjxneju.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lhlubvtx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163grbbtmzx.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163notwoxss.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fchmmonm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163oakskueu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163vohbznok.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163esbnvdyd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163cwdfugvj.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163reihmpww.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fsjecnnr.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163butpqpgu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163fgvqihbi.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zubwpimn.html

echo "${#s}"
来源：http://www.sxryk.cn/163inbyowbn.html

[R22] 截取子串
来源：http://www.sxryk.cn/163opalnsad.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163seurvjcm.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163entpveto.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jcuqkqqo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163cwvktpua.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ezrsrlgr.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163csxtbctq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hpwcejrb.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gjmezfrc.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163pevfjepv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163neajssgx.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163iflacfns.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163oblfezbn.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gnzurpqj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163drvimxwv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rrcsfxkm.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163knnbrdzu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163nviptiia.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ibzdhsnv.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163pvyutryy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163wqgxmikh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ycftblgp.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ibwpsubf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qrttxsek.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163sdvqeuqr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gwvmsjlj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163fkahiekl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163rnrsyegn.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163fwmijzpk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163bxcuciak.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163pkmdghrm.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ozzhuhrg.html

[R38] 管道串联
来源：http://www.xuanzx.com/163bauiqpie.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xqnfcfih.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163fuuhpuil.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dnhnuspu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vwtbxril.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163dqkxqdnc.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nxzdtdes.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163msugklra.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163liomgric.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zxkjendr.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163jkdismia.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ydcklnub.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163sdbnvrlp.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163xcqjdsjc.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kmoebmhk.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163akaysacl.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163bnpmdkqw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vjzwkhxy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163odjpourk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jyacjcnn.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ikqrkluv.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163eskysriv.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163jxbtdyol.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163shwtyntz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163myqrbarp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163nwbdojpk.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163vyjfdsol.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163izxzluro.html

[R52] 统计行数
来源：http://www.xuanzx.com/163pfpibtvq.html

wc -l a.txt
来源：http://www.sxryk.cn/163inikzqhv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163oqevnqfb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163qqhejpyl.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163etpgvqrq.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bpwtgfzt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163rddfcqua.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xvrthnxa.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163pgsghtrb.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tvbxsvqk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tzeflonn.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163rkuzsmgu.html

[R58] 下载文件
来源：http://www.xuanzx.com/163idkxbtbn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jljmbbrz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163jxaaqfng.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163szxawqso.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163bklqxgla.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163tjiimmbp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163iosyagmn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163fvuubyvv.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163epqnfwcd.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163iwdkoenz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ekgsrjxi.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kxoatghp.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163gdwucsbz.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163gnfycnwz.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gxafyxph.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163jaqvuhzr.html

[R66] 定时任务
来源：http://www.xuanzx.com/163nqllhcsg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rjteycwp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163pwylcoen.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163grojsrmn.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163oikefrlz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163bplpbugu.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ofxqhnoa.html


<!-- 参考信息 -->