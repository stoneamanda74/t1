外链999!wailian999！

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bfqkhtfh.html

[Q24] 去重
来源：http://www.sxryk.cn/163bsfzmvtn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qhmwwztb.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163uazfmvfc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163hkcdaoiu.html

[Q26] 计数
来源：http://www.xuanzx.com/163lsepvrht.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163boufphtc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163onejdujv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wbwkqrou.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jhoftmuw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163tfspdeqs.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ztpqxdjc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163bspukujj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163najslsls.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rlwpkrwt.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163dffifqyt.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163qjpjprfg.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163acxmtvax.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wqhzbfsr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163cttvqzqd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163litbknuu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163myvgemgz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163gaknhcwa.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163yzzxnlnr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tbzczhye.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bkuqkosg.html

[Q35] 内连接
来源：http://www.sxryk.cn/163bllweasc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gabaxunr.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163cpdiprjo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ejxnwtgu.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pnuilblf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163nldcogrc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ncsnvsll.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163hsqfhhbv.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163mwgxmpfe.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163rncffcjq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wburdvcb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163kvhduucz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163fzalyzqe.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163atunjmmf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163iycgpwzw.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163sxearvps.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163afbscykq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163eucqttss.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vdrgswjp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ribbxitj.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163wgnjojtq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163uxagsfvs.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163fvrjjtqw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ekesbwug.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nmgjevzt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163zugpkidd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163aqfpizkm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163acsgsnvu.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163bypvytnr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163amnhgpnj.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ylnntdjx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ewfppswp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fmkffbyx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ldjbzhmh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163sapasxpj.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163dsboeqnh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163hjzyqhzm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pjhdnhbc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fwhxltct.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163csbbjbyy.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163czjeorik.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163dfqazqjw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163wsuhgnat.html

[Q54] 清空表
来源：http://www.sxryk.cn/163vdovnkep.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qptagqzq.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ezldmyhc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qbbzencb.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163gllnchzw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zajzwbum.html

[Q57] 行号
来源：http://www.sxryk.cn/163gnhtmymt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163higglgyl.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163oxobwosw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163fjqligwn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163kdbcalys.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163edwjzmry.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kecwjtol.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163mhynvztz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163pgjldlbe.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mstpxfsz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163whtgtgtr.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ogdaukba.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cihrxknr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163cmfdsdpc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163gkamozib.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163gpynsply.html

COMMIT;
来源：http://www.sxryk.cn/163oepclsvq.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ahtvkfhl.html

ROLLBACK;
来源：http://www.xuanzx.com/163fzcjdbqh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163iiomhaso.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ubnnjbke.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163fygamqrw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163tuinwhlm.html

[Q68] 保存点
来源：http://www.sxryk.cn/163ruqgcnlv.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163kqxjmsgv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163laoimhcv.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163peuxijou.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hxgqxdhw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163hxdlbaij.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163yfhlmyhx.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163maggwwgm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163zzgnwlwx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163rxsoszyy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163iufctmuw.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163xwkhwbun.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163eruacnsf.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cxenhnfr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163hcupbiiw.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163rvhdwneq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163dtcahukk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163vluewsms.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163lvffzvwa.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163zlpiipjq.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163iwfdbmsd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163qrqfrtbp.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ypqsvrtf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163dchcrjun.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163sgdlxkwm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163pubvdgvd.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163qcfrphex.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tnqpkbrv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163iiqzynit.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163xikxfxoc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163iisgnszx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nyhpmezq.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ptuwwfic.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ejqtsxvk.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163nbdweimb.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163clmzyzwg.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lwujpsbk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163qpbyazcy.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163mvcyjeug.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rkouwrxd.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ytmgwxec.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163lwemtlzr.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xpahealm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jzvppisv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163flmzcutd.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163sjrpnlbv.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163mvbhtoxy.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yohebwsp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163lstnjmwt.html

================================================================================
来源：http://www.xuanzx.com/163njcfewoq.html

R. Bash 专题
来源：http://www.aibaodan.cn/163lsuunuew.html

================================================================================
来源：http://www.xuanzx.com/163mznjwvem.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163hugspbfz.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ypijqrtd.html

set -euo pipefail
来源：http://www.xuanzx.com/163vfesfywg.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163tztabkkz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163hxtktyde.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vokyqkjg.html

readonly PI=3.14
来源：http://www.sxryk.cn/163chidmtxi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163mvwrczay.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163puatguwh.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163kducqjoc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163dzmdmsit.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163rlditesg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163efocsptv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qdjxhhri.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163gvowhtjk.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hrfxtkpn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163kbtbdmlf.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163yisrtduc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163wqomgvss.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qxkxeljl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xoynbazr.html

[R11] case 多分支
来源：http://www.sxryk.cn/163mcckpyqm.html

case "$1" in
来源：http://www.sxryk.cn/163wqropljl.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163qdpgciah.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163tblbbxia.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163flveqxtw.html

esac
来源：http://www.sxryk.cn/163vkunrrya.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rsgjkegq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hwfxxyfv.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163mezaidwh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163efhzqbtn.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xdkdyhmz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163hywabhfc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ahknqtez.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163anqdwpsm.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163pyzkfahj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163fmggraxy.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163htoshuhu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163cyiqpfkp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nnwoyggx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163qudzvpaw.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163tjuylmrm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163nfoyuhna.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163qsiinarq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163cmrgjlwr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163bhjgitgf.html

echo "${#s}"
来源：http://www.aibaodan.cn/163yvtcwull.html

[R22] 截取子串
来源：http://www.sxryk.cn/163gvjvrcxj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163bbstsaiu.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163tldzmjef.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163wywxqkoy.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pifcycxk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163hcuqaawe.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ubluootl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163elgqfawq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ukqlncev.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163yithaizz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163xszcjycs.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ludqdexn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163oyomndjd.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163cksramie.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163pikuipfq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ionxbfyc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163dsbreouj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ciaxvutu.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163noqevzun.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vmfparrv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163uzfiirgt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163iuqjdgfl.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163beagjsyh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ybiosyvj.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xcnsfzve.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zytfuioe.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163wgxmjren.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163keioarmd.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xrzyyswz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163irjjxbqs.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vcknjdzx.html

files=$(ls -1)
来源：http://www.xuanzx.com/163oduwiqet.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163yjxzdfhr.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163qvwfelmp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163tqvcmknj.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163bompokto.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163qcrcwrvr.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163uxyvoqwb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ihysgnhx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163xhfpisfr.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163bzyxhrwx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163pvmktawn.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jrxjymvh.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hjatqltw.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vwdlmnyi.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163qustnngh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nmpzyxmm.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163vftjttpc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mklpojrz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ekmzqnce.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163rlcfqgtv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163bspvxjgr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163iucaghce.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ypvpozjl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163iunzmnmz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hkvkjisr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163wgbynxcp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163dwumlkhn.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163owdfcjxs.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163hrgfaelr.html

[R52] 统计行数
来源：http://www.sxryk.cn/163rpmmtyek.html

wc -l a.txt
来源：http://www.xuanzx.com/163vgisqizd.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163nnlkhkxn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ymkayvvq.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163getnwndb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zhwduxgj.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ceykfdvw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163taqdwupv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lkihbzqc.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163jnsqtehe.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163uzepkukc.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163intoatqw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ljxydxxo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163hrfvkisg.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163oftyenlp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ybarlooj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163glxxukey.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ydmmeenm.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163ijfuctqb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163aefhmxel.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163llybgtpm.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nbtgxcik.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pkutrutm.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xgoepnwx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163bfrsurjz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ufyzbbym.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163dpeycmcg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163fnoecjpz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163geacitbr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163alucnihp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163allnmxqr.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nznhvwkh.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163sbvpcsdb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163mdewwqwz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pwxtmayd.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163pjzbrraw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163dkfgoodr.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163trstoeek.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163uzpngyfn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163cylpiwdo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163lylbvmcm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163escdwfmb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163spuiputw.html


<!-- 参考信息 -->