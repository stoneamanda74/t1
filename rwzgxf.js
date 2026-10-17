外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163tbqfzrvr.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163aliophcb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163soylyzkn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ncmjvynu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163pkhydbgp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163bjtaqush.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xrxmufdm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163uthnjktw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163slvpiaeg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163thtvcghm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fvuoqjaa.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mjixrypl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cbqlmmou.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163srtcbcnc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163eaugrsmb.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163oawvnjlo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163jrmktbja.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163smgyimlp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163gdaqtybo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163osnzvewd.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163cpuhcmsd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163pbsgaomw.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163rboigilt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hupqecxe.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163tgetgkns.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163esqyntjq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163wzxvpebc.html

COMMIT;
来源：http://www.sxryk.cn/163ttzdsqit.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163dqverzwb.html

ROLLBACK;
来源：http://www.xuanzx.com/163bmdigtnx.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163hiayfvxu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163xjjrbnsa.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163hkvndavv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ynqtnijg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163hhosumuz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163eucryulg.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163iazwyomo.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bqadorzc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163bfdcopzn.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163klredctq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163mifukolh.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163fofnwbja.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163wbrvibvd.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163qnkxeodo.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rezkwlpv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163miaelmyd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163xvptsfjs.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cdlqompj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gkgiieaj.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163sumkztvv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163nulsuuvh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163lmoprqta.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163sshtucgo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163vgiljere.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163kykbobik.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163fbixunpg.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qhvicrnc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163zlgzlejt.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163urrndywa.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xzdfbdrh.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hsxzbipr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163szsorjxh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zflsbifx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163zfcinwoh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163apidgrlm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pkgtuilh.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163imywngwe.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ppqtmpar.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163lgwvbkra.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163awonymdn.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163pieniazo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163qavogvit.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163oqfkvngd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mfhyoncp.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xxfcnfvz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163cjuzuyam.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163pzzwpyzn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163hjujlitp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163vrowwwzn.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bkrkulls.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ibiwobxg.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163aiyaoxhx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163oznlychh.html

================================================================================
来源：http://www.sxryk.cn/163uhnrxbnt.html

R. Bash 专题
来源：http://www.sxryk.cn/163ocisdata.html

================================================================================
来源：http://www.aibaodan.cn/163gtlfbcio.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163sgelxiao.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163wmioxxjz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163rqwjttpu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ribslwwg.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163qqlkxpxh.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nodgbozc.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163fxefpgdv.html

[R04] 位置参数
来源：http://www.xuanzx.com/163tlvlrqaa.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163hywalwcd.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163egpoixue.html

name="${1:-default}"
来源：http://www.xuanzx.com/163uokxdtue.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dvtluqvf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163uaylqiuj.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163kfoxampq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163quatinqh.html

[R08] 数值比较
来源：http://www.sxryk.cn/163azycojti.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163poccnnux.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163gsxdktpg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163sdhtvpnk.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163txsxiegp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ohngbjhw.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163njerbhmy.html

case "$1" in
来源：http://www.xuanzx.com/163khabktpo.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fjjwpdrb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lujqcjhp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pxngazwi.html

esac
来源：http://www.xuanzx.com/163nolaawvg.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163mcvznyol.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tbkblkne.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163tpotetzw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rfzpjpqp.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163wulbolqa.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zvpkolkr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163opeaturu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hzgsgipo.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163argmzpjd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163tdnfzafk.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163sufwgddi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hnspgeqj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ohjqoxnt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kiznyhdc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163qzmnusza.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163mzmowako.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163lksrewcy.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163beiizxjb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163qomalovr.html

echo "${#s}"
来源：http://www.aibaodan.cn/163byzzxjld.html

[R22] 截取子串
来源：http://www.sxryk.cn/163pnwtriwj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163haredumw.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163qyknylmq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163kqgwgpap.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163aqplyvqg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163naqynbnh.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lstublpo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163umnhduee.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bcnzkmrt.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163prngizkh.html

[R27] 算术展开
来源：http://www.xuanzx.com/163sxrykcqa.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lpjduqvj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163iyflyigj.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163otkbcmah.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vybigtye.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163hfvcftbt.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cmbkpyhh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163kwjazviw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163wjwskapj.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163whvvzzxw.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163xwebvwhb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163adtlwayb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163bvzdfcdj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163jjicamqm.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163czaxtjrr.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jzwgyjul.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ezvfbebm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163nofynant.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163isbaenla.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163bukebfao.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163jllmimhx.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ehpgefyr.html

[R38] 管道串联
来源：http://www.sxryk.cn/163nkdlwjii.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163qkmkzxcc.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163uievctek.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163cjmlfwim.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163omdkdisw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wgzeqgcm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163awjddrhi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163brofmmxw.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163mnteyqev.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dtwqbcss.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lvktujcg.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ikmaxbny.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163bbxnboeu.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fdiscbek.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ssmcttwk.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163uhsbmhid.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163hvwxfxka.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163iqqnvtwk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163quxkqeni.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cizxgotb.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ohedjwaa.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163aoqciqzh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163omhtpjeb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zzhbharq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ihhwzdxq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163inpovafu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ozdafgbn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163tcvunzfh.html

[R52] 统计行数
来源：http://www.xuanzx.com/163kxtewcua.html

wc -l a.txt
来源：http://www.sxryk.cn/163zqlpvxcy.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vcletixj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163advoabwf.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hlwlxzqi.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163flfiabnt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163tvffwnzo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vdiacvtu.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163teyeqdyi.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163bezftcld.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163oyeskdjf.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163eosviuxv.html

[R58] 下载文件
来源：http://www.sxryk.cn/163zcleydom.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vvgjfafi.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163awfdhmsg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163tdsuunun.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163mrvkitvt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163hwgnvimw.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tstaekes.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163enjxhmjw.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163gkodzgle.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163higkwnre.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163akftnpaf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xlhyqsbc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163augtrwut.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163pcatngrf.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163swlsnemh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163xybxnolu.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163oaglmsiz.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163pwzthjwq.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163mkkzawmx.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163teursoqa.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163zsohwvgh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fqcxnham.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wosgtumj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163kfwrssys.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163kmskeldy.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163lzbtocxp.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163wcevdlha.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163dyzsaywj.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xljnhnxg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qsofzbjh.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163lifmmwyu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163yqbcdalu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163qkpvfbyw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163uvlpfnhy.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163rqaofopy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kqicbrvo.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gprdtcfb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163laboqtlv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163eubvqmtd.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ohmeifte.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163qpkubrlc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163blwdsest.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ekqyuakt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163gmyciojv.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pshomqqb.html

time ./run.sh
来源：http://www.xuanzx.com/163vheuuroe.html

================================================================================
来源：http://www.aibaodan.cn/163zsmvuuxx.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163mrdjawkx.html

================================================================================
来源：http://www.sxryk.cn/163jjmlnvbo.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163jvpakvwo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163uoihknha.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163fvleyzbb.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163zmbnomfd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163zdncdysz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tkhekczk.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ysxmihtg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163iloqkqgv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163huhyjuvm.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163hzfaiedh.html

strlen(s)
来源：http://www.xuanzx.com/163asmkjenu.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163apsncdmn.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tftfmjjo.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163xcibkwqg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163skboyyxy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163azkzjbie.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163dcqsphut.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dwizpfuo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163dezsdxkn.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163febgykps.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163xpuzsnhm.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163maukkwrh.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163sikeqbzp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163uckyyxli.html

fclose(f);
来源：http://www.aibaodan.cn/163bpallamh.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tnugbltn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wgvgovzp.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163tibgsaho.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ovippofp.html

[S14] C：枚举
来源：http://www.xuanzx.com/163dlmbnzqv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163kubtysvt.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163eqjnymym.html

(double) a / b
来源：http://www.aibaodan.cn/163igqlsgbz.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ujzbhmxd.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163mookpfws.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kszxvhcq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163tirfntdi.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163axojigrs.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vefsmvnd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163eggtezir.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tfpcvtjt.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wowexhvo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163pkvyrbso.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163gveodzcp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163maafrrbu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ionujtci.html


<!-- 参考信息 -->