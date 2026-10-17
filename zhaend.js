外链999!wailian999！

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163aqolbhke.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lwbnhrrm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163igdpozzg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163tnoaaxqg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163qtmnjxfv.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ybfguljc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sjizcavw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163kbdsfmmv.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xwxzzfwr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163vzeeigkg.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163czzgrxnw.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163iekrlerk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163zydunatq.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163odlardye.html

[Q35] 内连接
来源：http://www.xuanzx.com/163okabovhj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163akseqnpk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163vbpahkmf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zcassvlk.html

[Q37] 右连接
来源：http://www.sxryk.cn/163bvyjbxme.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ynghupvc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163wpuqewwc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163pizsjizr.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163nfgyruqf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163omkxikql.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163eadoitnf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ieodzmut.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163inihhtxe.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ciilrsba.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gfpydhzg.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163dqtslbfc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163dwhpkmqs.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163nkavfkbl.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ukicqasj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163utlneavm.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163aygfbncj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163qmhuwizg.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xajrgeql.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fpopqgnw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163gstpmghu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hfimxkeo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163tteqokam.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mnpcixnl.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tuyfjtsy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163rxzggzdz.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163shfilurk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163xqesixnb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fmwtcxur.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163flyyxugj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163cqepamgf.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163rxenslaz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163minaiqnm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ghthceeo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163rpwzeinw.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163sfbpitez.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ztjohfjf.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163slmbkxvn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163rutnzqou.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163akwdxbcz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163emfckzic.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xikfhmmb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ttlllobf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163nauipnnw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163yhzgskii.html

[Q57] 行号
来源：http://www.sxryk.cn/163isvzznyp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163utxibgbc.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163zrhiooty.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163pwwclkba.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lhokyufz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163erdjwpqx.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163dmjkxmkz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mvmnnbzx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jvhreurl.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xtznfqxg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163svmsmoom.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163gmuaiwfc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vdwowyvv.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163reezsxha.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163temfwtvj.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163pygjhbuw.html

COMMIT;
来源：http://www.sxryk.cn/163hkxlzqoc.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ancjeamd.html

ROLLBACK;
来源：http://www.sxryk.cn/163xklhegve.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163leimzjav.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163typwcnpu.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163mdplnpqf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fvncyiup.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163svxmmzvk.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jghqmnzg.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163bollpyom.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qdfufqph.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hnrhoymb.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gniivlih.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163mretstpy.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163znvmkgou.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rdwquqxk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dnljnyih.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163bodjpxkl.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qlnpvzws.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wzrihxjv.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163vtzhuxox.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163xfjeshks.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163umugnlzb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nsatuwbt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ykscmbcs.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163flysmmbs.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163zezjaute.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163exswcbrq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163expxbvkd.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163orgyxocd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hkonepwn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163rjvrsktp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163tanntoim.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163nprbhpjj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ppwkavlc.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xgnyrwjp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163zuwdsfvg.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163oufnhrnr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163gfgxloeu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163oqwmubgq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163sgfcmlfd.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163euzngwbb.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163acslkkrc.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163hkpjvvrg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163lznmpeyz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163vfselbbw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163kscydibd.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ajxgwdym.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163mjpewezv.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163euohlpbh.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163wyafbjhq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163uuaddofp.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163qsobjucx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163tvxjwciz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163vhpqhpqs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ixzpsmwp.html

================================================================================
来源：http://www.aibaodan.cn/163ceqpkbyj.html

R. Bash 专题
来源：http://www.xuanzx.com/163aimzgagq.html

================================================================================
来源：http://www.sxryk.cn/163stlckgrz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163tqhqthpw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163oviabyra.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ccyfomvg.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163gzphktdb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163pmnjfarc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163obdsaxpu.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qcctllgz.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ddstzelr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163uwlravqa.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163xrusnbqa.html

name="${1:-default}"
来源：http://www.xuanzx.com/163uryuacrf.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163bzkmazlb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ndkthedj.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163lujuysif.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jnhxvgwi.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163aznjadme.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163wrlcklay.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163abozepnk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163aofflvbz.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163elmxiuxy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163zthdrawz.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ryhornrn.html

case "$1" in
来源：http://www.sxryk.cn/163arnesbvs.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ogbbjabz.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163idrpedao.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163bjapqaic.html

esac
来源：http://www.sxryk.cn/163klvpylur.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163szgnlhtv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163pmccgdeq.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ombbdcqt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163usaachsk.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nobrhwnp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wfwtiblm.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163deaxpgnc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pjkvnmxt.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ltaerfxm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jslpgrup.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163hanzdtca.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fnsblwpl.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163auwbidih.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ftcfdmat.html

[R19] 数组长度
来源：http://www.sxryk.cn/163pamwbcli.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163afjouvbf.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163asowhuzg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163oxfjfbrl.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163crsioure.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ywcliixh.html

[R22] 截取子串
来源：http://www.xuanzx.com/163evigpcnd.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qszswflz.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163laadpnub.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163npbxdjev.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wcfwrnif.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163bhkghggp.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163mjcwbipg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163yncnpbnu.html

[R26] 命令替换
来源：http://www.xuanzx.com/163tkvbihvx.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163yyjzmttp.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163cagspbtq.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163avfuztnc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163cgqcavez.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fdazvqxb.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ddkuweyy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163aujkmlmn.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163npjletge.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163znqephrh.html

[R31] 局部变量
来源：http://www.xuanzx.com/163nwuglslc.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xxivkreb.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163fzocpnqa.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jooidplv.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nuonwcjs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163hzerdoga.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163kylufukm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bydgkujg.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163lvkwknzw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ulrnylmv.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ynibmyap.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zikhvxqr.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163eehspqfs.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nqxewzje.html

[R38] 管道串联
来源：http://www.xuanzx.com/163rbuqszte.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163cfcxgfqg.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163bwmsrzsf.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163gwwmhzrx.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ldcdymrb.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163yllucqkn.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163llxidjal.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163xjukpsjf.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kulmposh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163orjlphga.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163rgzpfovm.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hxbrcthf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163wppxgekf.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lrtghdzh.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ytjapwrq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163awszyqzi.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kyqrbljp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163khzpdlsz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163enexpjan.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163vgpenmzy.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163zuywmgwu.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hrsvyduw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163atnczfqf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163modcaidk.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163tzfavzpu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163chvuogya.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163mxtqrbvk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qmhofbxv.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mypvljyh.html

wc -l a.txt
来源：http://www.aibaodan.cn/163drgngjuv.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163uajjupgz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lerggazv.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163qveciqwd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163xqvavqpi.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xxzxigoy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cydfwhkw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kircvqog.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wykcgjxd.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163bteoflcz.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163iwailehz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nwpjjhxf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ibeczggp.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163wmiiicqn.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vdfvptsu.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zusmipxb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tujkjuee.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163kdsktnml.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ibqyihcn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163svlbkaks.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ugyzjpsv.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qisekivy.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hsxpgntu.html

[R64] 结束进程
来源：http://www.xuanzx.com/163nmoymydf.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163mkdcxphb.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163feeqkaru.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163vazcqtkt.html

[R66] 定时任务
来源：http://www.xuanzx.com/163qproitab.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lvndyvzh.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163pfqpfnfq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163txutugbk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163czrmucog.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vbhqpzxz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163acjngohj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163uosewoas.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163uynrcama.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rigchhwp.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tihtiryr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zthblnwx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mytlckjt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xexgpxyq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xfjscomg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163nnjbkcnn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163djsjhiai.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163evovudab.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163mgucgitv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163vvavxwju.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tduzirvc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163cecjmdyw.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163rmutmpbs.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163cmgiumtm.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vhvexxwu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163sogsntcm.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qmyosaow.html


<!-- 参考信息 -->