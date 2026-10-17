外链999!wailian999！

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hqggqsxb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163nklmptzn.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uajanrnu.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163auksmlpb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163kzpmqyfa.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bdjqhwpj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jiorgwqj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ovbtwnwz.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ukcsczyj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ybktjkrm.html

[Q37] 右连接
来源：http://www.sxryk.cn/163fxegudbf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163swgvrlbe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cjphakyt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163embavmxz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163pgttykoa.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ggipkweq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163wquifyaw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163wbzbrhzx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163jpvjdlhr.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163quwbqeca.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163icahfnib.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ppsmcksy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mmjbxuwy.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163wilofydf.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163isqanuuz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163oatngfgk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163snqktpqe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163qaonjyow.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163oyehtbfm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qdvodfew.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rxewbhbi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nhzwpzxl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wdtmidae.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vfrqgfzj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163dannoojm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163iamsnuzs.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163csouypgk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ovbsenan.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ymwpngbe.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163wkmjstbz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jwprulfd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fhnwnois.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163nmvssxoh.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ztwbvzgg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ygnzvmlp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163biorewew.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163audyfzva.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163xerxsllm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163iblhvhya.html

[Q54] 清空表
来源：http://www.sxryk.cn/163fscaeyui.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163sfvocuez.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163lsqwbupr.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163wgafdhhy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163twuidwtf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163pcxcwuts.html

[Q57] 行号
来源：http://www.sxryk.cn/163gwejatqz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163rasplhhi.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xrcljrzt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163pxoujcfm.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163odbwzwok.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163majhdmvk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ciezyzfe.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163riyarumt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163nurbgdau.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163tihjkjld.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ummniomh.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163dzsoqspm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jkobifar.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163wibbwxsw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163movuhoun.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163uuhjasag.html

COMMIT;
来源：http://www.aibaodan.cn/163yafpcuop.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163cwzxepdw.html

ROLLBACK;
来源：http://www.xuanzx.com/163winbrbbx.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163hlutdije.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163qrfsmrfw.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qjxenpuc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163wjseajie.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ctlycsop.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163hrelwrpr.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nmbcvpyd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163kbbbtbjs.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163vnvrajrr.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ubluhahv.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163qbhpitln.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163eyyylfhi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ojehoppa.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163bbztkcpe.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163aarymnvb.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xaotragi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163uexycdbi.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163kejchmqr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163rxqvdzlr.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163vcnalqos.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163igcyguuj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163loronxrq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163johgavpx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vxcagswh.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163inuidlou.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pudixcut.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163thaoytpb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ycgmgjlw.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163rjwiaoqx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ojgmjajx.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163atdgrspk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163iouazscd.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xszccylk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163jcsoopya.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163rriqohxw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ofsqppks.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163jmudbfkf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163tblwdxbb.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163hvhlfuba.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163aunzihtn.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163uyoapyhk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163fulfhlre.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163pczsnnao.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163qcrwstly.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163auqfslkd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163lqaefntd.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zmtmvvoe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163tgkopckq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163dwfkxkol.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163lauqmonc.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163pskgreth.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163izikegtd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163izcmhujl.html

================================================================================
来源：http://www.xuanzx.com/163tghxqutk.html

R. Bash 专题
来源：http://www.sxryk.cn/163iukcagzr.html

================================================================================
来源：http://www.sxryk.cn/163tqjcohpd.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163yohirymj.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zqrvohna.html

set -euo pipefail
来源：http://www.sxryk.cn/163gnfmjlgn.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163oqkqusir.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163tedhkomu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vlepszrx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zfjncgmf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163tdvtkykw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163iuryqqoq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ezatcaxc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163stjntjbc.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163umajipqr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163rytjjvgx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163mpmnnjjx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dmnsmwax.html

[R08] 数值比较
来源：http://www.xuanzx.com/163jpqibcvt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163akxoewyo.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163zxldsdea.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163djtbnrec.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163jznvolna.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mozlgyfg.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163zcdgbxka.html

case "$1" in
来源：http://www.aibaodan.cn/163ghsbhyhx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163gkxvqmba.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163nkuvljfr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163yzovjnek.html

esac
来源：http://www.aibaodan.cn/163fogmdwbt.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163dgbsfpho.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ypxnnvic.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yhscjcki.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163dorvayok.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163gnwxrcgh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163vfkfewin.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163dblwyfuz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163mugvysqx.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163grdmdjey.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ehsnwaej.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163pcadksqa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163peveumyo.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163csnihmaj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zyeohjie.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163sndhtdhx.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163behnktwa.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vyjqiksb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163mewkkosk.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163dwzczrmh.html

echo "${#s}"
来源：http://www.xuanzx.com/163gyvatfqg.html

[R22] 截取子串
来源：http://www.sxryk.cn/163eylioqbh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ikzahhhz.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vajwxfmq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163cteeagks.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163deeuuvsw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ncgwpxtr.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zlgywvcz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rgymmjqx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163nnkawcdy.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ntdiupuc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163mmstuhze.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qoooktyz.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163bibumjof.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163yamaqqwj.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fnajrgpr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163byitrbgs.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163sbmtrhso.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ecqsbzgf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163rnpxpebk.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163wlhyabqd.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163cwmmlfek.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163kbuimkja.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163uarzmveb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163iungphxk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vhtevvkl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bngfqpjf.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ebowqray.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163kdktwmdo.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ruqvbwxs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163alpqxfik.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163coptrhev.html

files=$(ls -1)
来源：http://www.xuanzx.com/163nmbezhuj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xkhpoxvf.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163vlnejopf.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163krzvvsgq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163prunazvl.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vzrkvqvi.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wsvencfb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163roholbis.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163cfmywjgl.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163soaxdrsh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163zknbjjai.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163fotkjmtz.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163nbqxtmpj.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163dvuvtjgs.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163kgawebih.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163jgnjhucd.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163lzqyvcqd.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163sizpqjyw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163iqztcjxi.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163penhsyua.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163iuiqgrjb.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xcxggsgf.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bgrqwlvh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163gmiobsho.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163dtpkzbwc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xfnikkom.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163woxrbejp.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163raqylodo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wjicwias.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ihaevvbm.html

wc -l a.txt
来源：http://www.sxryk.cn/163dqbybatb.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zdwgnvyi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vvuyxata.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163jljlpqfg.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vuipkgqs.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nnjpquef.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163hntoocml.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163fposrqnj.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zomdtpzz.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qptkioif.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lzmvxztq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nxsotbas.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163luxehajl.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ybgcwykr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163cxsgzurr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163uyjkidtj.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163zuawhqna.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163owqsvsqj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163udtlibwe.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163adpwamlg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nhmkedrt.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ssbjmcpo.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163hqagfgzt.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vjnwjkip.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163mbzhvaun.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xpjtxtpp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ubmfmvmm.html

[R66] 定时任务
来源：http://www.sxryk.cn/163icoqhhzr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ltpewbyk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163oytddudi.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163hjmqbnrj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163zbutjian.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163qojweypy.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163pxsnhtll.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163sgyvfrhh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tnkkvxqn.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163okmiojfa.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ebpcedue.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163yieihvlu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163vedfimpo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163mjnhgupn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163lhiuxbre.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163gszuvtwk.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zefkzklh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163acpbanjd.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cmcsffnr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xfyjfbed.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163paueyjuq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oqajnzgw.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163uynhrvlb.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163twgobdni.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163wzkildkt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ssxxdizu.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fguwvwcc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163gczoljey.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163fpxbpmps.html

time ./run.sh
来源：http://www.xuanzx.com/163pqxippid.html

================================================================================
来源：http://www.aibaodan.cn/163ufrvzggj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pgugkibk.html

================================================================================
来源：http://www.aibaodan.cn/163fhtfkkce.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163agyqawvh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jddftywr.html


<!-- 参考信息 -->