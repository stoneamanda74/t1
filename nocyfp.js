外链999!wailian999！

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163lxjhkprr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163opdjobmo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nmbpzyyw.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163qqcdataq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163fcrhhkdl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163itgqjgen.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163plkpsxbs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ntpnmwvy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163asqjlbyj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163iuvecvnv.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zrtdphgw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163inufaewr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163bmjwshmw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163waimfgzo.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163khefgtwm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163klcigohq.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163btwkpbju.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163opgnudby.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nmksafgw.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gaqzdxgq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163rqjkvwhf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163uyvvlitk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163gqkscckx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163vvcsmavl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ngpyexky.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163iuekohyc.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163prkxjwmq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163gqvpgavz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163stajbhvh.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ozvauuip.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ayxxhnrv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163fnqzklwz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zdadnxzv.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163rmuaicwe.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163iwdrkzbt.html

[Q57] 行号
来源：http://www.aibaodan.cn/163srhzlyld.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163vfsunexp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163xupzivzf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163zmxikucd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ctihxrtb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ozungjbn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163kaxrfcqa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163tnwukcap.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yrvjhfzb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163bkqdguee.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163avddtukm.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vdlrwpkf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xeaswuoz.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163aympchgp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qwqbdzan.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163nttbhann.html

COMMIT;
来源：http://www.sxryk.cn/163gxxgwssi.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ushtlrmf.html

ROLLBACK;
来源：http://www.sxryk.cn/163uifzifko.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163oniqlvhr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163dquepbch.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163luezpxca.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fqodygyx.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163kaoexusk.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zodjmnhd.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163lmvsiubs.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163rlmgqcxg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dxvlcsup.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ghvoqanu.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ugpasupq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163tzbelqew.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ygbpcvyh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163evwapdvf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mbdkazse.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zikcghmn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163yszyntvr.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wffnxdjb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163uqmmugfs.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163rjyfkkmx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163axmzzjgh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163joapvcbz.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163hfptekqa.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163pzkgkgve.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163fgjudagc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163cdbtxbbv.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163pijgdggi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ovxrrxrb.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163gulqkpmk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lnuhohyn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163okbzahuk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163vpoiymga.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163penkjrsg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163nktgxgbg.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ttncvqou.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163athzaytl.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163oizzayxh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163dqzfcdfe.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163byuwwmmg.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163mztqklju.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163fwmullif.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163judozhcu.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vgjtcgcc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hocaqpyy.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nuoxdxnm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ekvuywsk.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xfwfgape.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163keorcukr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163azrkakok.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xelsbxuw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163xizdbpca.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hikztxxg.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163cbycjyfr.html

================================================================================
来源：http://www.sxryk.cn/163jjaaliqk.html

R. Bash 专题
来源：http://www.aibaodan.cn/163pbmjecls.html

================================================================================
来源：http://www.aibaodan.cn/163kiaoukzt.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163sqeashyj.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bbivockt.html

set -euo pipefail
来源：http://www.xuanzx.com/163mcdcggnk.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163vclplcwk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163btsfrxqz.html

[R03] 只读变量
来源：http://www.xuanzx.com/163bqlqkwsa.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gutrgroz.html

[R04] 位置参数
来源：http://www.sxryk.cn/163igdtczmk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163zcvnvdij.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163iglrenbb.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vrrtujua.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163hsmllnrf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ifwukjjl.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163unmkxlds.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163rtcxznfh.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tevbxxwj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ghtykydx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163kgdycuto.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dqccbrqu.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163sammhndx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163qvsavyzw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163pyxdozep.html

case "$1" in
来源：http://www.aibaodan.cn/163evmjomyc.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163idcacaks.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mxdtmkvg.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163txufopdu.html

esac
来源：http://www.aibaodan.cn/163ijzpgbyr.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xwzyqygy.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hagwdhoy.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163yfqckxoq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163owqedaeu.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163aryfnakd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163oabjvczr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ckyoflln.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163kxssibto.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163levqjron.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qxzshvla.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163wwluadfc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zdzaugfo.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qlwekoho.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163nrtkozzg.html

[R19] 数组长度
来源：http://www.sxryk.cn/163qktynled.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163gcufbige.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vafzpeqw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qsqqdpgs.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zbhnvtxv.html

echo "${#s}"
来源：http://www.xuanzx.com/163soyzfmva.html

[R22] 截取子串
来源：http://www.xuanzx.com/163eilmzvmv.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163cxuotafu.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ushobuzx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163oupdxeql.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163qrgozjbt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mcwgquyv.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163bvvorrlw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163mudlscjy.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163llzqwvlu.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163uqzgrduf.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kmyhjeek.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163odpmazny.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163vrkoqpvm.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163baacijfg.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ktphwhid.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163gmpwxjxc.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163flsovzty.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163niacwite.html

[R31] 局部变量
来源：http://www.xuanzx.com/163kelbhtzq.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163nczfjjzc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qqficwbr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163unlawxpz.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163bursbuoo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gawaamcm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163gdhhajbu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hzywhvdm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wrzxgzst.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jidkpfjc.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163oaghdvps.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163nuygrtdt.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kpvucojf.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163gzudpkrj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163omhjvlna.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163cuymcnvv.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hxnowsle.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163erjixpng.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163nkxvtwga.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163mgtpjpve.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163wldfzwjh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163pylbrvta.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jyeqhczp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163wgpvpkys.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163fhortued.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163dcnouqqu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163yqkfvdqd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163vagoqwyi.html

[R45] 批量删除
来源：http://www.xuanzx.com/163sfkfswar.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ueljdfiz.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163bkhrvelz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163zidqfvzk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163pcvqmyth.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lbhgnztv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163gbruagjg.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163gbgwyzpz.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163rqetdyzn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163wjwdsmak.html

[R50] awk 求和
来源：http://www.sxryk.cn/163haiqkxow.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163zfozowuv.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ghincnmp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163oubcqivi.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163kergyjbr.html

wc -l a.txt
来源：http://www.xuanzx.com/163rmymdjkl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ovdmvcks.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163rfyikluc.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zxumecxv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163fzbimjzg.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vwiccfbp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163mxzelykb.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ghieeeyc.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ecnsxiin.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163hngupgtx.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163kxbcftjo.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vbjaneqi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163jhnjwtxg.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hdnriyeu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xwizqtzr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ysrpcmhf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163krjeylub.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xrwsqdlz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163dzvdnfcf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kgivtlaf.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163kjjqzmtp.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ajwmtixj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163uulclxcg.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cmtwvaox.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163nshjjcnp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163fdxjjvqm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163lvvnfcoz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163bfsmzgrv.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xernrbfv.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163nhgsnvhd.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163huevmrcv.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163czqaabpm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163qwyjuuey.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163sibepcdw.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gnociowg.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163dpiubena.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jeqjbact.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163qkjaiijh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163xeunudez.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163wkjobzld.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163sqwzurwc.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163nevdyxlv.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ztwvdzdc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163khfqiuci.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163pvbdsekh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163eywhdhtt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ybqiarkq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rouhovvf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dnvxvtjs.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163efryaupr.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vrchehcw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zydscakl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163mszebpii.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cwqhpwag.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163czlgidkd.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163lisnzybx.html

time ./run.sh
来源：http://www.aibaodan.cn/163xefsvqdp.html

================================================================================
来源：http://www.sxryk.cn/163wikuggql.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hkkctwaj.html

================================================================================
来源：http://www.xuanzx.com/163smrsayfd.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rzqliagr.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wxarzznd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bderlolu.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ocjnshhp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163oqxzplqo.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163uoypxjvh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163huobdssv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rtktlyqj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ocfvibfh.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ncpfbovt.html

strlen(s)
来源：http://www.aibaodan.cn/163reuluygc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163jlaefvob.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163qlygczhe.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163gktazpcu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vokseoys.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jvcwnvsg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ifkiyfbv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163eqqpxqvb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163hrzfbxny.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xaqcxkpi.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163oftzkjui.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163kjmjbwwk.html


<!-- 参考信息 -->