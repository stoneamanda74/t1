外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qhdlzmny.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zewdcmci.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163efcqgqny.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163yiwrrekt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163zwvsgyfd.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163mkeaqmdy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163rjdlcqiz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163pybytenm.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163nuectild.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163coaxlwvd.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163grmvdlua.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ysaemgdi.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163rgtzslho.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163lcksfbda.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xylaymgq.html

COMMIT;
来源：http://www.aibaodan.cn/163nwwjkwcq.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zkdcqlnm.html

ROLLBACK;
来源：http://www.aibaodan.cn/163szbjficf.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163isgmdsru.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qievkvil.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163detoonkm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163wtcefqqc.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163qyxungev.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163lcaylalv.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163hwtfbzwu.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163iaokbflo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163gwlsmqou.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ajpgxdeu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qeyatwdr.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163pxfzhgyi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xcyuuzif.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163zphqvzar.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163thzjstak.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163iytutwzb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163fsigsfpy.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163jypcihmm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163juuafctv.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ryoaluhn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163vmjgtsxh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fdscgule.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ytkraimh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163rrmnmxkt.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163qajepkun.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kldksibp.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163stmjcxbs.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163hjzehyid.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zeoibtbi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163bnlszthl.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163lxbaeeme.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163dpovgnel.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qndsnwgv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163igmyumac.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gywdypaa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163nzwmywyx.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163anwawjbl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ifshcfkm.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kjlxroln.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163tfavsqzb.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163sbvzfomw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163dmnyxymo.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mqevivcj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fkzvpzgb.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qckyxmja.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ditwavjc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ivpoprct.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163rbyxzfkx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163dyndykia.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163hrifaqfx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163dzpdykvc.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ktbeqrae.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ycnnhdxe.html

================================================================================
来源：http://www.aibaodan.cn/163dmcrrfjg.html

R. Bash 专题
来源：http://www.xuanzx.com/163uqqatgxm.html

================================================================================
来源：http://www.sxryk.cn/163jefdrlfq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163qykcheny.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gtrsoydg.html

set -euo pipefail
来源：http://www.sxryk.cn/163aistrowt.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163yvovxdou.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163uropobty.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163pnknynts.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163isadujlb.html

[R04] 位置参数
来源：http://www.xuanzx.com/163osoeetey.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163arbawkzz.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163zrkaqafx.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xgilgxbr.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163oltcntkm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jjrouxsb.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163oiwjwinr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vysjivel.html

[R08] 数值比较
来源：http://www.xuanzx.com/163jxvgnnpr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163bogxvsev.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163oiqjbyyp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dgorlnlu.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163pesbgwcb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xffftgzv.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163dxdkelpi.html

case "$1" in
来源：http://www.sxryk.cn/163fikekqzb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jpxfpyqd.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163gtxeexzq.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kshfpqtj.html

esac
来源：http://www.aibaodan.cn/163ydnyvsyn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163jyuxsyqr.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163jqguhwgy.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163eccrnpbj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163qyrtczhf.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163gevsyiyg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163krnynyjm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163tdwzevac.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163caalevhw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vxobbbks.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163kecbigrg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163oigdvfqp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163nheklkhq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163tipjqgul.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163aezbendh.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163uhzkivyd.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163kwunemqo.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163yyletpkx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163evotsdzo.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jktbddgz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163qivdqctj.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mkqbehqa.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163yukxqlvw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hzpjnujs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163mkcotaxm.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163vjuuwsif.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163cfqiwpzt.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163tvghlzon.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163eqpagenx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163wcjfgpga.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qeoofzxz.html

[R27] 算术展开
来源：http://www.sxryk.cn/163rguwmvgk.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163awdutuev.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163caqfrsrd.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ldhgwghq.html

[R29] 定义函数
来源：http://www.xuanzx.com/163bdxagtrv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xyxgmfcc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163psrimrvd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163hdeaansr.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pludujwl.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163yksxwrqy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163evdarbbk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qhkdmbwt.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163dibkvjab.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163qvsljmzw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ntutrdzg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rjpvgrsx.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163uxfvlozi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163grhixppk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jtjfqmfk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zkssbyvb.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163agxrkdyi.html

files=$(ls -1)
来源：http://www.sxryk.cn/163iybdybii.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163dxfjlypm.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163uljvakys.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163xconuqnh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ahvdhskm.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163apgnqrrj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163tkttzmlv.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ugjlpauy.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163lmcmynfa.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163eyhasmbx.html

wc -l < a.txt
来源：http://www.xuanzx.com/163kydxaidx.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163bguguxjc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163tgomiuhv.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lphyebkp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ubdqdgwy.html

[R45] 批量删除
来源：http://www.xuanzx.com/163haxyvvxy.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gouxhmxv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jomoiikn.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xqgzzkvf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163eewzsppn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fphmtbiw.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ohwnuauk.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163waqphncs.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163mbpkenuf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163kbavfndx.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163duocejsu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xqdjulon.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163qkihndeo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163qeoduusq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163hbgounnb.html

wc -l a.txt
来源：http://www.sxryk.cn/163hebbxiym.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vncmedam.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163grlirnmi.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163wzfkrzvx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163eunubbzw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kbilwdzp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kfhgkmus.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163bnkzzkvp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qjiizzpy.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163kctqenge.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rtybnrgw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163oicaxtwc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163tbbrfuig.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163legggcca.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163mkmgvihj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163qplwgacu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163okozpzjx.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163lzrsxqro.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ndydhymx.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zajqpfuv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163lzjbvlvq.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163skwqmzrn.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163vthsmydy.html

[R64] 结束进程
来源：http://www.xuanzx.com/163lqausewb.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163yxdebydb.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163lubhceqg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nwksioee.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163kxzzlwmz.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163svzxuakc.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zciblobc.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163riwgedsa.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163uvcmgndf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163okbguxwr.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ketjebzj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163qzofitvx.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163tuomatjf.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163wfkxeylc.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163miraiicx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163brohwpum.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dqfjurur.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163enexokun.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163gqtkedxk.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163exnjscho.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163gzcinrjz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163suuxdqrs.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163tmcwppiv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163khgqtveh.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163vxwjadcw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163addzspet.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163tqotrggw.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163uleaskwt.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163jygunnmv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163aosqinid.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163qajtjomr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163yjdzrvso.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pgoilzvy.html

time ./run.sh
来源：http://www.sxryk.cn/163joojkwfq.html

================================================================================
来源：http://www.sxryk.cn/163kfcarynh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163byzriwuz.html

================================================================================
来源：http://www.xuanzx.com/163alfutivs.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163neytllng.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mdmdaihg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163qwmcswlz.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163baqmkrtj.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yyborwva.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163sqgihdhh.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163qfiowigj.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163mwfowgpz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kdglajqk.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163blevsaej.html

strlen(s)
来源：http://www.aibaodan.cn/163mzuignxj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163qqpymxzv.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163bhrlhumk.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qxnkbepg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163pzzwwzxz.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163prtmyicd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ircgmbbh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163wpaeidfi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163cbllowqq.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mqrkeikc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163rdzqthia.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163cyiedzzw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vlkcpozu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163lhnwxdgm.html

fclose(f);
来源：http://www.sxryk.cn/163hbimojel.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163uidbrpnd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163dxyvmkri.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163qnonazqf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163wtrkanuf.html

[S14] C：枚举
来源：http://www.sxryk.cn/163zpdisuds.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vdhelbwq.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ybwgmvvg.html

(double) a / b
来源：http://www.aibaodan.cn/163ufrdswjn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mbenogvu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163itejgxgc.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163oulqrxom.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163cooejqqg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kligaqxt.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hqjkgwdj.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163arnoykju.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wjhjorip.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ydtdqgwq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163oehuiacx.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xjdaibrl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163zftssome.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ikphdkln.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163cukmshcc.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163bpefyyho.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163tkeedvyo.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hopnigac.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163hupakkhn.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163oqkevtev.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163tgalureq.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163eslphjel.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hzzttugq.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fyquxquq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163rhigkyxg.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kqnfviaz.html


<!-- 参考信息 -->