外链999!wailian999！

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163smzwzezy.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163tnyimsvx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163byecjrfc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163uwniafpx.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bxfbxutv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163pwgjixpi.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163koqgurzj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163xpwwjrta.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163eniafpab.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163gwdypoui.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163viagkoqa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dyqiqnlw.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163lxvgaxgl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163unagfsht.html

[Q37] 右连接
来源：http://www.sxryk.cn/163oawpqxpi.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163qqnkowko.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163grgznzwa.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163lmpkxwbk.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163xajtgyuv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163yzcxomrw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163barmmyzf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163oedoloms.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163hprvdhyq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163mhibodog.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163npmhuzwx.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163cwqishcl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163qmtttnjk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163pezslboc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163kyrsjikm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163qiocqcbs.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163rxbaquhn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163onrkjwtb.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163gipcujjm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163xorjsxcy.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163effahfei.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tzouqvwh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wrvnahjs.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163oobmclam.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163nsskfdow.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163xkkhnqgk.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163iozibxlf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163olwpqvpv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163pazecviu.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163rdzvsvuz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163nthqmqoc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163jqysxaly.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163asajcaoq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ugwrgegz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163btswibxg.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163efjjgwru.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163abrgspam.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163uezyichl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uwjhumjk.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163vzqdargi.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dwrymaau.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163bamhyssd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163hemkgshu.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163kyfcnkwk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163twvusyag.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xkzjtilr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163focxtekd.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163azggprxx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163aktpzsem.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163htzyjmrb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163bxmkijxg.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163lwuicvnk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163tbfhnhod.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163mzsjjrsb.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163oadlorsc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163zzqqsqsy.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163orencuzy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hzrueekp.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163blxoaykr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163zfeigcef.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163rurzslob.html

COMMIT;
来源：http://www.sxryk.cn/163djrbmhrk.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163vofauuih.html

ROLLBACK;
来源：http://www.xuanzx.com/163utdldxwi.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163afeortnf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163erejdojo.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qcgadaqd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163rweivnno.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ycqfsrll.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jxoiidya.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lfpanleh.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163xpvsehhy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163usitjedz.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163qjoviqcl.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ugkbvwqf.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163nouiserg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wkuwepeg.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163sudussrx.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163pimlafbg.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ugikkrwr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163kuitjqda.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xtttrrcy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163phlgmqyg.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163hwcyunxu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163cytvtpqk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163akmbxkzu.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ctriepzq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163nohnqmam.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qovtbznn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rnmcvjwy.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163adtutyhn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163iietnqet.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163betofblp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ybawqiof.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163hysyxwyc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163fmwoloiq.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163dqfbpwrf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163nqrmfznr.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163izmkmpkj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163tleppoeo.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163lukbmvxn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163teymolwj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ibphckpi.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163wgaqnocl.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163dprenyjz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163gsaaabvh.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163hmgoiuyr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163kwgszbcl.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163afbnsxko.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163dglbusgo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vhibqafi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163aijldqmy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163iiigmszt.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163pjrbfrwy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163qlrrjttm.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163inynweeg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163yhyipqmx.html

================================================================================
来源：http://www.aibaodan.cn/163rbvbtwgk.html

R. Bash 专题
来源：http://www.aibaodan.cn/163maduvhfm.html

================================================================================
来源：http://www.sxryk.cn/163ypikoftb.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xsdkgtkk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ugwqtstu.html

set -euo pipefail
来源：http://www.sxryk.cn/163fppohmqr.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163slbizkly.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163iignwqtk.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jlgqfcye.html

readonly PI=3.14
来源：http://www.sxryk.cn/163olshiwps.html

[R04] 位置参数
来源：http://www.xuanzx.com/163khirqynd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xkvgmlwh.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dgbbqzuo.html

name="${1:-default}"
来源：http://www.xuanzx.com/163eghflxjt.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163cpglhsov.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xekidozh.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163pfyalfqe.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163fqaqmfzn.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ggaodrez.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163nmzocmmg.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163wneqptnh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wyeusbxp.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nsfqjgxv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163mqfvpjfr.html

[R11] case 多分支
来源：http://www.sxryk.cn/163olgcnusi.html

case "$1" in
来源：http://www.xuanzx.com/163rrtyfeig.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pknlqujf.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tvykisci.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qjmjlsdm.html

esac
来源：http://www.sxryk.cn/163dpdvvykr.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163lzvgznxk.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163huxrvkuc.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yopnbkwo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mdpddcfv.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163irdofsgb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163grpwopki.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163noztxazo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163onztxfeu.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163wnhuwqhb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163yyajtdmk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nzlpoqki.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163tbmzujbk.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ymcljips.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163cujtrsub.html

[R19] 数组长度
来源：http://www.xuanzx.com/163crsrweak.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ktriwlsx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163hgzezpfg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jghaucbf.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163fpaiczao.html

echo "${#s}"
来源：http://www.aibaodan.cn/163kbchslyt.html

[R22] 截取子串
来源：http://www.sxryk.cn/163mskbyitp.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163yalyuenv.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163tkwnekdt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163kmorzqmb.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163splszbzm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163arhexklk.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163xirketxw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163dwkjzxcc.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fslrluds.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163swpihksj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163cljmuoxz.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163eitbidzp.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163wzlqrwrz.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163fiokikbz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ncqvhdil.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163qlmkmcuq.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163tpkieksw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hermwjbu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163pnzcqwnm.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163dncyqufy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163vhxppmpo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xlxvjpgv.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163qehfbhpn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hgpfcbig.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163epxlatsu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163cqblvuiw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163wkdbrpml.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163bckaufpx.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tygfwqfh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163auzancwx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163isaaidlm.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ukjdaxkm.html

[R38] 管道串联
来源：http://www.sxryk.cn/163eaijcitr.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163iukaebhm.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wtumxlen.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pqwukjhh.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ljyytckh.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163lcjsjaow.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ngjhscwb.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163mhjsidjg.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jbsibadv.html

wc -l < a.txt
来源：http://www.sxryk.cn/163vzzriqeo.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163cmluaovt.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163zdktmrov.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wsjnxllz.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163msgryvub.html

[R45] 批量删除
来源：http://www.sxryk.cn/163tupxekxr.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163owkzpewk.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fofzrtaa.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vcbqhkbn.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tzklrpvt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163oeuxjymg.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163yjnwsfnc.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163vlzyhzgp.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163gflazkuj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163pqtgezzj.html

[R50] awk 求和
来源：http://www.sxryk.cn/163unkrdjtj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163brewcnjd.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rvvcjyff.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163rtwapmfy.html

[R52] 统计行数
来源：http://www.sxryk.cn/163jbrdczuq.html

wc -l a.txt
来源：http://www.sxryk.cn/163vmdigbuu.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163fqhronpi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163vysidqpg.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ypmwtmhj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wbjvbfmr.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163lbhlnvdb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163beadwziq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163vnyukpao.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163aomqiahh.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163mrjieiiz.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zunkfbzv.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163nznobtza.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163senlvgml.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ymgmlxmb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jrcphrus.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163smiaadas.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163eazkxbtd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163azyqdday.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163pxiuaihq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163egjbtxph.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tqcqioqx.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163tqnnndqb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vkjxhydp.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ntqnenfy.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nicdwjyu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163dzttmplp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163vxnkmjfh.html

[R66] 定时任务
来源：http://www.sxryk.cn/163solhhenp.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163mlmitgcm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jbjkqyoh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163mqoluqtc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163jqrvvdyx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163cigswmqu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ktbvqogc.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163kietwaqw.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ujdryyja.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qqxcfxxf.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lfpfwocz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ixickjdo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163pdfsrlqb.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cfqpjbkq.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163lwzevjcp.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163tydxzpjx.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163sjbankfq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163jwmzcpwq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jkqclzrk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163qgbplmvb.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kvkodoeh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ptmdtgjx.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163psaqyral.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rnqpcjqt.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163fnisadot.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163cqipvijf.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zqofylni.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163aeidpqqs.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163avsalsyk.html

time ./run.sh
来源：http://www.sxryk.cn/163mnwroxjq.html

================================================================================
来源：http://www.sxryk.cn/163mccwsdst.html


<!-- 参考信息 -->