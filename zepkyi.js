外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rbhphavm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xobwinxw.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fdoubkjs.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163cewjrfzh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qpgmkrgc.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ixqccjwb.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163tfxsvade.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163wrpfqsck.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zvekpfgd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163slfzeqyw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ucdwtlct.html

[Q57] 行号
来源：http://www.aibaodan.cn/163knvzlgwd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163zpcrpouu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ajrvncdz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163kvmpqldx.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lxusadko.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163yfcbtapw.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163eequpyca.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kclsrncm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163eeccvzvn.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ozhjikat.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163panireyb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163iuzkqtev.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ahkwvikt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163sgykqtht.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xgvjwjxk.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163yaatxhux.html

COMMIT;
来源：http://www.sxryk.cn/163rujticwj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ykkgskje.html

ROLLBACK;
来源：http://www.xuanzx.com/163rxyrknae.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163phiwmpmg.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163raxggrik.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163xioocmru.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163trgkxnnc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163tnecnbxq.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163hugmusnr.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163msnoibkb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163lhwqswgn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163inziaaoe.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163skkpqspq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163gelvlifw.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163fuwcazrn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ixiawcti.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163afkoaxaf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163bywogewc.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163dnthknif.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163qkghgalw.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hshkhhaa.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163fpdrfkzq.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lqlxssel.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163zehecqdx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163szryffqg.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163hdhiorjo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163pfvaihju.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163yelbkgvn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163oeyjtnxr.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163yliqgrnp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163oggrspxj.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yvxekygq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163mbwjqocr.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163xdhalagd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163tejwolbu.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ywtxernz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163sxvwtssq.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163rhnbhyqe.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163lznxqygj.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163evlyybxh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163frfrcswg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163lsqfkeea.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163gcpwiena.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163rurzvfrg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163xsyytgsu.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163iwbnoirr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bmwmpkhd.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163maxhgaep.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163uqyfydmz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ecpypmpz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wyelkrdx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163rzysvnkn.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163badwwuaf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163aurpvfry.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163whtiaxst.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tsdovcaf.html

================================================================================
来源：http://www.aibaodan.cn/163youmxsju.html

R. Bash 专题
来源：http://www.sxryk.cn/163owrsslqg.html

================================================================================
来源：http://www.aibaodan.cn/163aipfkxdk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163azcncbrk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163hwxklutl.html

set -euo pipefail
来源：http://www.sxryk.cn/163kzjbdhys.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qqqkijiw.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163osrrlblp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163rhpfxfom.html

readonly PI=3.14
来源：http://www.xuanzx.com/163icdxwypa.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163snjlpyrl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163abxfibqv.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163pzkhdwqj.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mebgswoh.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163natudtqq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163nclbfdjl.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163yjxezarz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ztooxtnx.html

[R08] 数值比较
来源：http://www.sxryk.cn/163gwobdgfr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163vsdqxnls.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163fxqxwjhc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163bzbkmwyr.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163kmwhisgz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163uqallucx.html

[R11] case 多分支
来源：http://www.xuanzx.com/163grcfqpxq.html

case "$1" in
来源：http://www.sxryk.cn/163cinrfozy.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wsxhxnns.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163etavbtrw.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hiaxoljf.html

esac
来源：http://www.xuanzx.com/163lxwodqtn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xeuzysck.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rsvphbor.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163wihpdpgl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ehhrhjug.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163iihutklc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163rubbqhtd.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163bbsghhii.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163gcptjqji.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kxpxdlwt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163onlnxkkf.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163fdmqdehq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163qptipssu.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163jbvdxbwf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163pevmonvi.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163xyanshlo.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163acwoxwjs.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163jzqsulmx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163esipjsdb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163metagidh.html

echo "${#s}"
来源：http://www.aibaodan.cn/163uqgzyscv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nazeryne.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163bidwnoih.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163tvfcpxmw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163otlbwibq.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163pflycepm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ntrbaudx.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163uknulyyd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163trklbsdr.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163gzhetnie.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pcejoxmm.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fqzztnzd.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163vwuepypw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hxbbldhj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fgtzcprd.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lwcqcquk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163jjaodneo.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163sligmmno.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163tihiqwdo.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163monxyiyd.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163qbojgkdq.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163mpqzbclf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163yxrbykjq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ptxnwdqf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163bvtgknso.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163vswfyyta.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pdjxrkny.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163tzlufhuo.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163vjizyodn.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mntbjhss.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163eesapvfb.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qpxuwzeg.html

files=$(ls -1)
来源：http://www.sxryk.cn/163rdwdvcfi.html

[R38] 管道串联
来源：http://www.xuanzx.com/163dclzdzzs.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mukqzigp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pvnmkloq.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163iobvlbsj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163bucykpbw.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163dvhqhetm.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163wgenmcqu.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163dfphhroj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163hahwsgah.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163amdltxll.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163efsnbxjc.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hrjaczrr.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lltoisjd.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163qpmhjhty.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163lwmwtsvu.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163eogljgha.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zthibaic.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163snfbpitm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163xwlszkin.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163fjkasezm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163laqrvrgw.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kuocmkpj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163upmpvhvl.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163szylmoal.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163mtvwonim.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ecpwmypw.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163orgpgyro.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163xyzzmylx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163ghnxtivo.html

wc -l a.txt
来源：http://www.sxryk.cn/163hrpkttkc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163rpwzlxdw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qugkazmk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163nljkuvns.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163cpetjtld.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163duyswabb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163twwcsbbh.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163qlpyqbzu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qqowvgar.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163blwigwjf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163tuvkkspw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163kaseevls.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163geatcnqe.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163yguplbkp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163eusrozym.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163jbbjfpiv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163idodbjih.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ejrwydgl.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ygkyyrau.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163pnjoavve.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ckciasrl.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ripxowdx.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163setommvv.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ybjjypuy.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ijgmwepb.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163bagkslxr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163oyhctuch.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163jrkpsdxt.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163nfltbksx.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163hivrtwvf.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163iobhnwos.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163owdixmij.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163eddkpfnx.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ifbcbdyx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163fkrejkpl.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163gpbdhndw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163nebygluy.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163usniozzk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ozsbgvtc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ostgbuth.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163elwkzjos.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163pdnmzhco.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163bigzsgsj.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163qtwslucj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163whewdmzx.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163bxamrtsf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163lwedwepe.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163cydtvhgn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nuyljyox.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163nxsnfzsm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163pfrefsbt.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ucjdqdco.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kbvpzrof.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163biyatoso.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xjdxzsfi.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163qldysnco.html

time ./run.sh
来源：http://www.xuanzx.com/163dxygpave.html

================================================================================
来源：http://www.xuanzx.com/163tclrsacb.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163boftgbra.html

================================================================================
来源：http://www.xuanzx.com/163wlybemzt.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163sktruudo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jzbmyosp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163vmumylps.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163dquknhts.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lxhtbhoz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163kzioysqm.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ovilplyg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bglgjpeo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163zkmnobfa.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163etosrbrz.html

strlen(s)
来源：http://www.sxryk.cn/163jxdthhhk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kvozvhtu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163jjvefpee.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163anntbdla.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ppralzvg.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163klsugbln.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163brjlmjbh.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163bvvxrbdh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ucqdemet.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163cbjfqrgk.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xjfxgpsc.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163rxyfzvrx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vkecmusf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163eptzvhua.html

fclose(f);
来源：http://www.aibaodan.cn/163hdredvbk.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163znybwwnj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163afeksfmk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163dccjxwxa.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163qoggjbnm.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163witkjvtu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hjmjrolv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zqykpvij.html

(double) a / b
来源：http://www.sxryk.cn/163tusjvzck.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163rmearniy.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163nrllajpx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kbmiwrcw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vqxntvcs.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163uifwjkak.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163pkcvhhcd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163neqhjoaj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zgflnfit.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hxjkikvy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rdwzjodz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163caamwhwo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163kamyrbzw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163kvsufowm.html


<!-- 参考信息 -->