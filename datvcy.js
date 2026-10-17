外链999!wailian999！

SELECT * FROM users;
来源：http://www.aibaodan.cn/163oeddwcwr.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ocbptvmo.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ydevgerg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zopgbxip.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163xyjinzra.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163wslxutco.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ghjczmgn.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tjkdwbfn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qpsmdulg.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163blrihfzb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163irjdymwa.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163oiuojwhp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163sjpnnruw.html

[Q22] 排序
来源：http://www.sxryk.cn/163deaeiskr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xxharhcv.html

[Q23] 分页
来源：http://www.aibaodan.cn/163udhnlviu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jglddpem.html

[Q24] 去重
来源：http://www.aibaodan.cn/163pieauqal.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163stubxcmy.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163nmulmiee.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163bpdayufg.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hjukrxnv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163oxuakjxd.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gfboygft.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qfcqcgor.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163gvzhohol.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163howeqkyw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163irnsinva.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kizospij.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ejpanrqc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sgdkjmtt.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hwnlgsgv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163lzvdsgth.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hhwxyswm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vzhttggl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163tdyjhbwx.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163etswwulr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163guginrgr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163nlemykzz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163nanfeixc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163emjqeleh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163wjjvvwht.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jehufkxd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tqoplbqh.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163lnrurryi.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163izmkcrbc.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163yiairtkx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163pswaroep.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cjnerina.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163aurkqdmf.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163exnykgfn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mgchcrsy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163iryghvxs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163isfloxei.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163tkpvcyqx.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163jzskbofd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163eitsfdbo.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163dkfnbdku.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zuceerir.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zbilkcof.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163uqkagodz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163pbfyffqb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163pzajvfbp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163bemnmvvj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qgozejtz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163mtapagzo.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163hbblveip.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tybkbvqe.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163slmaovex.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hwnuqtrl.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ygkmngfr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jrikpimr.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vondgppf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ypghwqtd.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pzncbcap.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163cshdjrdn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rzhobenm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163hpokndlg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163nqncvmod.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163gqqndfda.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163gnfaadde.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ooslctrr.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163jzwgpkmx.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163saxtshez.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163aknshrbd.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wpmefgad.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zojeidqf.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163lhtkejkd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mmmkjlav.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163icnektks.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163mcarwesv.html

[Q57] 行号
来源：http://www.aibaodan.cn/163pzqpybxv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163onqaodji.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xhlrtozf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163wcudftba.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163qltppgpd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kgaaxbua.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163qsptwowm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ukkuqafp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ugvtvirg.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163gtspmxsr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163npztpwin.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163msmwhnoc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lowwoqcu.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fbpjlcou.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163gmiicipo.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163dgldyrxa.html

COMMIT;
来源：http://www.aibaodan.cn/163gnjtejnw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163roehovke.html

ROLLBACK;
来源：http://www.aibaodan.cn/163hmfquydk.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163zujkdiol.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163igaadbaz.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163nfnarwez.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163yhguodkv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163khtlruas.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163rdzyzpam.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163oqynqsyq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163rqarzazj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ryhfnblq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163gqaaghvj.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zxngwxst.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ctvqkewf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jdqpvlnj.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163egyqqqhv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xgrmhful.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ejiyyerr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163pvlklome.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ddcppzii.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163eceicwzh.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xjrfdvzz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163uerlpwlu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ppgxsuiw.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163uazazsmh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ywerftni.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163izikiwzs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163failhtna.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163wjlowfng.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163lpkvwiyy.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ugbvvqvz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wjckdtnw.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163kqryxrgh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163tlkfzscc.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ikbwciha.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163qzmqulwn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163myoduxtx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163znkxyoqh.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163odqwvbgz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163nxiwbnnx.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163erqawhoi.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163nzhipwcd.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163shdzrgcp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163pcvueoje.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163xbtcxmhp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163snasatqy.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xjgxzoef.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163okftfznt.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163tbnqigmt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163atmsxgqo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163clnwoxqx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163msndhwmr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163vhmohfye.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163drlabctp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163mijjwqwz.html

================================================================================
来源：http://www.aibaodan.cn/163gfayipib.html

R. Bash 专题
来源：http://www.sxryk.cn/163ugjkbwil.html

================================================================================
来源：http://www.aibaodan.cn/163ofwwgnwy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163keqoqzoz.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163gfuuduth.html

set -euo pipefail
来源：http://www.xuanzx.com/163nyfwcxtx.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163vynwtqxb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163toeudvbz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163flzucanr.html

readonly PI=3.14
来源：http://www.sxryk.cn/163bruljsft.html

[R04] 位置参数
来源：http://www.sxryk.cn/163gloduyub.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wnkauhhx.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hwidoeze.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ewaidswi.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163oxbhjvdp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163auoyuucw.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163uhwptwgz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163lgamcmbv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gftlxief.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163tmlntaxh.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163kghrvycl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163skkrmlgw.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163stywqjgi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163szruiemv.html

[R11] case 多分支
来源：http://www.xuanzx.com/163liuppqah.html

case "$1" in
来源：http://www.xuanzx.com/163udlcsuti.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163tdqvzfyu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163eldvgnpc.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ayqsnhdc.html

esac
来源：http://www.sxryk.cn/163nvyltcds.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163wdbyssec.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163cqxforji.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ttrnrnhr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jfctrclk.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ckvcvshv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163jaiqqtwv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163tuglrflk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163jjvaursy.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kgzyxyqz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163txogcnef.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163rwlxvpmi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ldebxhhf.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163dtlcgrty.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ibqbrjsy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ocbnuuoj.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163gyxwubmp.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qbvnmbes.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163gcjtgtns.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ykticekl.html

echo "${#s}"
来源：http://www.aibaodan.cn/163dqkqswph.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163yswbjhbc.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163nzynnzcq.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163rjrmozuc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163wemhuukc.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163flzeugne.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163fmtvbjsx.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163pbgcuije.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163jqjnyueh.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zyuztvpv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163eyjnsztm.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163dabsibge.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163jalmjryt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163nwrglwgm.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ephqttor.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163wrkinjuu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163nhsyexfa.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163eqqazziy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xxorhsiw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163amyuswnk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163jvxoexes.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ghcpmsdk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163scsvbkhh.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ewguvrja.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163suumipmf.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163xwcieedc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163espxreea.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163lnjrcgru.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163dmbvaxgr.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gtbsebsn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nuwhynte.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163nqncchth.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163rhrorcup.html

[R38] 管道串联
来源：http://www.xuanzx.com/163zuwmfsxm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163exugdumh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163byacqtad.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163usqvwjea.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163yfrfcxmx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163sgeaqlva.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163fcfmjjsb.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163zcuizsbd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163cveglsza.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163wjmvjnpk.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163luuujzlv.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163amltfqlt.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163sfqlmhur.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ordhyfxc.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vyxystbi.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163dwhbcpys.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163itbngqoj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163dvqvcjqm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163iwoouqqs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xljrqpxw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ehbmussj.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163eicrhpvn.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163rwlsuekj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163unjwqcwo.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163smexwrhh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163zhszsywm.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163prklrurl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163xsxmbajt.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xxphafej.html

wc -l a.txt
来源：http://www.xuanzx.com/163pbpqdmhg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163pupfmzys.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163oobdccso.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vajlzrll.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163iqsgubvn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yogverlj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163novwgelg.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163crqntfli.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ofltuqkr.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ivtqvzor.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163fiufvnzs.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ygqcbgch.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163nwyadvgt.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yebhovri.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163oorjczun.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bzfnriog.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163zrpaqtma.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163zjqbqlaf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163riucdzlt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163yscscwsn.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ktldradb.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kngqmqmr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163tnxqqmot.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163arkqpbxr.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163wooplifm.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163mxtlnppn.html


<!-- 参考信息 -->