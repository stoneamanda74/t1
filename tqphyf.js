外链999!wailian999！

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163elccbzyd.html

[Q24] 去重
来源：http://www.aibaodan.cn/163whsaompu.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163onvqpwyr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163shutrajx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163pfbuvust.html

[Q26] 计数
来源：http://www.sxryk.cn/163dhvjidtl.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163kwbqwixa.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163awfilqyv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163gbysewiy.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163gddacqgv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163gwhmayoy.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163rhoyhabj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163tosbumnn.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163xurdlmjv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ucqzcoiz.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hsrkwnqk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163upoymwif.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163vedxmdrt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uyprtnwe.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163dtobnbyz.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163fyzpprdc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163vkhwvfao.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163mfuustis.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163mtykiqdw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163wskvqsre.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163iuhtgpri.html

[Q35] 内连接
来源：http://www.xuanzx.com/163hxtpamjp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163plcvjjqo.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163vobdyexj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rhzhttam.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ucgbflxq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163pbbjyrvu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ggqatcyg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jfiipzdc.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163pyrabiny.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163wbyhutqh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163xkctlyco.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ndvgqejy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163faprmiwq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wksubyyz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163umcpkdwu.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fyhavfww.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163epstjoti.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ocklqmlr.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163vtzodxaa.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ymfjmmzl.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163yetwlcab.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ectdnyfa.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ocjlvzgy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tdshjsge.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163qlcpildn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163fixltfne.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163pscutfsw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163cxnexsxg.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163iolwdnwm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163fresjbwr.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163spqwazbl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ndwtuizq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mfhptvez.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163cejtfjhl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qbvkbnnp.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163csigrrjf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163dsnxiaqy.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zolnfxsr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163viyxgtce.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163gbpzozuq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163xdsqvaxp.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163cmdkjlfp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163yhzgmiar.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163likzggcn.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163sswjmooe.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dadqbfph.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163jaesamsl.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163qlgnxdfh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fmllxeia.html

[Q57] 行号
来源：http://www.aibaodan.cn/163tosqycmu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fvbwlpzp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gbnmclsm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163sobkkfuf.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163npfyfixo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163osseqwwz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163cukszuix.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163dwseqinh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tjpaptwn.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163iwnwusou.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163wpzwtwbl.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ypzvkvjk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mkocfjnj.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163zrqljwcu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rgukzzwt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163vmljkzwz.html

COMMIT;
来源：http://www.xuanzx.com/163jmlfsadv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vbggwovs.html

ROLLBACK;
来源：http://www.aibaodan.cn/163djzwuozr.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163odgxjtqt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163chfowzke.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163eparygzq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163maownpos.html

[Q68] 保存点
来源：http://www.xuanzx.com/163svmnpgjn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163joelpfen.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kwqtewax.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163iurnokzu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163glfwrluu.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163qonibaat.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163kvinrpjr.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ejfwpulq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xyhnsgjw.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hhqdsmtv.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qxrhzedk.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163yycqjnoz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163nejrofuu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ougivsxg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163dzsngnrz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163rbelseji.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163pestuwrv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gozgyirx.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163oxiyuaoy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ycdxxhxy.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163dbvtliyg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163wofrnqiy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ghdxwiqf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163leplheft.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163iuswtuly.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163hzamkqcv.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dkgofvdb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163paovpdtr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ntgoshia.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163hhbrzzot.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163rlqwukjs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163dkitigai.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163hfonxsen.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163brhsooia.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163tqdtvhpu.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163anyuvrqb.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163nralocbd.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163povksasf.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163lolrfqwf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163scufihhx.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163aognfouo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163swsbcfll.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163nxqsvybb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163nmougaes.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163pnahpfgq.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163nfkfqvlk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163dfexlrui.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163aodutiex.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163meaxzoiw.html

================================================================================
来源：http://www.xuanzx.com/163kggdeucq.html

R. Bash 专题
来源：http://www.xuanzx.com/163rmhomkle.html

================================================================================
来源：http://www.aibaodan.cn/163icwqynqq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qgauursa.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163pddkmewz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163fcdscxhr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163nfmhypfu.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163mducvxqt.html

[R03] 只读变量
来源：http://www.sxryk.cn/163tfndhfqk.html

readonly PI=3.14
来源：http://www.sxryk.cn/163flzfyfbu.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163wewkahwy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163sgmnwjak.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fjjgjkqq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163abwzxnkv.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163xxivzuef.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kdcqlrzt.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163dmkywlcf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163uzbwxgty.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nrsphcmp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163rnxzucsr.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jhjkossl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xzpnivpb.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ndhmanix.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163djrarycc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163lepkwqpe.html

case "$1" in
来源：http://www.aibaodan.cn/163qsxzptta.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163cvdygkqu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hihtqvfc.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163bakociux.html

esac
来源：http://www.sxryk.cn/163eyeeczfy.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163warokyqg.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163ixmdibzj.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163aeosudre.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163xzymbrlb.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163hvdclmpu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ndoyiuxe.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163mlcczkoq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163uegcyorm.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163mbjplcjk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163urpodark.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ugyoxpkd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163cemeucsw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163qleilxnw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163bddfgoxx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163zwdxukon.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dnbqyvxt.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163kkwxbppj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163nnqcvnxe.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163olbcfjur.html

echo "${#s}"
来源：http://www.sxryk.cn/163ahbormtv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163miupifsl.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ognsqazo.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163nnekvzbh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163bgegucju.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163smbypxzy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163kzlxnxbb.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163etgbqlaj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163zkhswwmr.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163gbqwaswq.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163qwjrnvkf.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163piwkfvoz.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163bmnaomgo.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mupbyibt.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163sadmmfqe.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163btxzbigc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fsxotkik.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163isgslgzs.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163unxludii.html

[R31] 局部变量
来源：http://www.sxryk.cn/163uavxswjv.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gxqkqoym.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163khmohawc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163wamiipey.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ahnuyvkt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163rhqbtsvp.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163mapwygll.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163laiqodgc.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ojkkmtfn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163byxinvko.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163hkdefxys.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163sjscdtbb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163usczukmz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163frnkqhsq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163yajpnmdr.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163cinvtvbf.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vxfklvto.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163yhowradd.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163qcpzuguc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163bqofuvcf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163sxhhfqan.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163zzenwmnp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163eiajafgu.html

wc -l < a.txt
来源：http://www.sxryk.cn/163riajkvgs.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163grdjddxy.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163egajzlbs.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163svaxnaga.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163wnhgttgd.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nzezdwhz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163uljaibnu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163gwdivnix.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163zlyvxibo.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163udbmftrq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163uhdrwqhq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hbczqpnl.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163fruqqnen.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163bbzlxjfs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zgnakhmd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163dybekrsf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163tuefqwhy.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163wsjnrxjj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163eabprvnu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163oegidfjn.html

wc -l a.txt
来源：http://www.sxryk.cn/163hqxaovre.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163tbcxeios.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tzuoelsf.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163tpcrgxkz.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163dgxhddro.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yaqrpxtc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163oadhbvxu.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163hyvurzaa.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163pffrkiyr.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163dyotrmkl.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mrjhmnwx.html

[R58] 下载文件
来源：http://www.sxryk.cn/163zdevizee.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jvztuyio.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163kmwopqcn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ahvffslu.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ipvqlprb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163iurhtxgb.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xqfmhcdo.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163lhfkkhnm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163dqdghddr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163irdeerug.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163uprqxphc.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163auzvnzku.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cpjpzful.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ttjcstbf.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163eymkbxoa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163oqrlmdes.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fmetwzsy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163omfxvnnv.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163myluotrz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mewnsfch.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ksowrgej.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163oywxtedw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ykbtddpu.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163icvifrxn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163zqkdfmvp.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163etzqriod.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163hfloqgii.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163atlvrcgb.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163gxgtmlgp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pynqnthk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dlmgwlhm.html


<!-- 参考信息 -->