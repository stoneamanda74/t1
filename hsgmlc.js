外链999!wailian999！

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163kdedhhsg.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163zghyocyj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vhwckyje.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ysrzaaua.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163kkjztzdw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163inwljmbn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kcqwbwiv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163iurmkqya.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163juwqcqen.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163brmztfju.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163rfvxzmtd.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ljohagkt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mxnytosv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163asunepgw.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rwfscxdc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rlrqzvlj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163soivykua.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fwgakqcu.html

[Q37] 右连接
来源：http://www.xuanzx.com/163czdfjcgg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163lrxnthcx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163qipgofib.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163kszcvkbq.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163bkbhqfbc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163udpfwjhf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qcfpozhb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bqlrvjvl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ulcolavy.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163laxaeozy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ibikqmew.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163cmiezhtf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163lqupsoeu.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163mxapwkoj.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163qwjyjxar.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163aaziplom.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vprtknjc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163isgvlwyu.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163oetpsmrt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163nnngyfdy.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ctrkorcq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163dfaqrrqq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163kkfrywje.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163kinrwsnd.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163kvsbkdya.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ekggsaos.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vkromgff.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163yesohryj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ikkrmdez.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163jrkqhkbv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163bbbdxznp.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163vufjihpf.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163gupjlqvk.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163tjlldllt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163doeetzow.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163owjumqny.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163rivpiykh.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163gwmnwkry.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163piulonre.html

[Q54] 清空表
来源：http://www.sxryk.cn/163kjkrdqii.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163hcxcrshe.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163fqbvzvcv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163lndlbvzj.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163oycdutzz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163iyazkpvz.html

[Q57] 行号
来源：http://www.xuanzx.com/163zjwnphgx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163casxogja.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163snmnkiqu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163rnetapwp.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163xnkscqhb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163psfouvnq.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163bzlnagft.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163csaawkfk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yindgsfn.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163lklxcssq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163kmexkftz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kyevgnjh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dxxzbdvj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ezqazoyy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ohwvepap.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163lgrlpkyv.html

COMMIT;
来源：http://www.sxryk.cn/163hukwruyv.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ikojipki.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ywztymdz.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163griwqkvi.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nzkezcvn.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163fwyfjxnd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163hpgkvgya.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163zmixthuu.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163cvouiumy.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163dekvapqq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qzjwapak.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163sxxghdze.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ycdrgwud.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ltasceho.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163dcjcvyle.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163yfpvfdnu.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hqiblafv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163msmvjjid.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163smtwmfmp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xngrlchn.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ooyalmhm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163erkyekjs.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163mgqkgcsp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zpqffzpy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hnqxcqim.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163qsibdxhd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163loxaciuw.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163yxwliqmr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163iyvzrwcg.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ukarbuds.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163mfqcdkch.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163vcgbxqdu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163sjinvgkf.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ysxmfdbb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ryfohepz.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qyisvzqm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163mgonvxvg.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163nocnbkis.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163nixhopbc.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tqgexozw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qgypoifj.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163agmcvfjs.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vvrntjmd.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163btzuawzj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163fwbyimsd.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cssrlbqq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zsgsefrg.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jicsyaaf.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rsphnyqq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163bngjjysu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163abvcafss.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cpgpgerq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zdxbiton.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163hoheqbgk.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163eeaovotj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163jlddukru.html

================================================================================
来源：http://www.xuanzx.com/163tmzzcqau.html

R. Bash 专题
来源：http://www.sxryk.cn/163welwazks.html

================================================================================
来源：http://www.aibaodan.cn/163mjpsmplu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163uscldygb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163nzvppyxf.html

set -euo pipefail
来源：http://www.xuanzx.com/163hxycqzii.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qcuejgyn.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163shzdbwnw.html

[R03] 只读变量
来源：http://www.sxryk.cn/163eifxkewu.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kdhjrjqk.html

[R04] 位置参数
来源：http://www.sxryk.cn/163okgwumnz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163sysgynea.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163xnegxlnp.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ngixtyvi.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163cfainzbu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ubomeqxq.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fcswskyj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163teewouau.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wkqfzjoj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163fixckdnu.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163jjyaqbkc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163annedgzv.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ksggcits.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163eyilxfiw.html

[R11] case 多分支
来源：http://www.xuanzx.com/163frtilawj.html

case "$1" in
来源：http://www.xuanzx.com/163ezoqtdpq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163xsbddyai.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163jzgoojuy.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163irxxfrav.html

esac
来源：http://www.xuanzx.com/163uzgxccge.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163bsumrtql.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163exgyoyvn.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ggqrivcx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163alvuixpf.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qsobodun.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qnqkjovl.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163kqvifngv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vorgmlth.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ntsjrsor.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163tmrbdnhp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sxauqepx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xwczqzut.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163iltnkjua.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163erjsqkgu.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ktmpndap.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163uhitjqav.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bsictces.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163wsvuouay.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163lmtjlpne.html

echo "${#s}"
来源：http://www.sxryk.cn/163prwsytac.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ppicewhs.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xzkghwvl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163omdkdhvu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rpfzohfq.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163enjcrxfg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163wpgapxwj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163kvhwwoxs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163clwspshu.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163dvisqdov.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163oliphgkx.html

[R27] 算术展开
来源：http://www.xuanzx.com/163chsmotnh.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163tkmjsvir.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163odjafpyr.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163irrnvgiv.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163sqkjsdae.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163yhbzxyeo.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163stqnbnda.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hfovjvhe.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163yifqeere.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163fsbjjjkj.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163jspcwpbt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163owyekjpt.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rabfvbah.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ybiegpbt.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qyrzebuk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bkxjveww.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163hkezmzmz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163rfqziyun.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163eblacguw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163omqktxrs.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163cyexcwgs.html

files=$(ls -1)
来源：http://www.xuanzx.com/163jxtxnufm.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vmbwywce.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163yiilvsao.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163sirocjyu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163sxalwvik.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163emgwpned.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dveeqsuu.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163huraijyw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163duwwspgl.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163whhkeaub.html

wc -l < a.txt
来源：http://www.xuanzx.com/163pkouvcmw.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bnlfuyaa.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163lyakcfcf.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163mwumtpfd.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xvsgkjko.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163dgngcnax.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163deuhxhqf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163xhtdsxup.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163qfndsnfk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163wmbkjtdq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163usnbarzj.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fsbtmfxs.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163nkqyzpzl.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ucsyclkv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zpqnomoa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163stfbwvgy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163shawijzc.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163iyxqowau.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163fygudtgm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163kaamtcoy.html

wc -l a.txt
来源：http://www.xuanzx.com/163nbtlgjyi.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ehvppuiv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163qetfxkld.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163jlwegrwd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qgdhzvyp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vyhsmmrq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hkjbbqwu.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ejoxlzot.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163atgxeioh.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zyjeslgn.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jvjyxdqs.html

[R58] 下载文件
来源：http://www.xuanzx.com/163owbbqwch.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yrljqdrn.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163lxzgwogq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163westphuv.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163srfjliuo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163wbhbqqoh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163qukdayzp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163pnksshes.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163plhmphnt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163zafbezme.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163xehfhszi.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mrpxkjkx.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wfywxnby.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163dfjkwoln.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163kwpfklet.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163tijcmhbw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vvyqamcf.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rozxmmmj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163qurehqwi.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ubytjsxt.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163dybgxnqf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163vplpvoeo.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ibhiluty.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ykgczobp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163namzeugw.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xvugexuz.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163nerrqxbc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163efxpuifi.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163geybemqv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cgdpthxq.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163nwoazaua.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163hhdywhkl.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163hafkjmuh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ouhvhrny.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qcjlolzx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ggowukmx.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163mskylmnu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163docwtnfq.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163cbmflgqg.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163yevmltrs.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qwuzokot.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163hjazkpdx.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ujrypogg.html


<!-- 参考信息 -->