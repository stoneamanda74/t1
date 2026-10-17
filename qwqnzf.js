外链999!wailian999！

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163podjrvte.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163vjukrusu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rktuihrz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163yzibccmd.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163brgtxveh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163umqqwdxk.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bwoaqfkg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cuvstoui.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163jjwcathx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163mccxirtk.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bozdihss.html

COMMIT;
来源：http://www.aibaodan.cn/163ajievrnk.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163iinyczpt.html

ROLLBACK;
来源：http://www.sxryk.cn/163atgkxcyl.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163khfghxbx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163wxykxjhq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163bnngvqmj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ojkqicei.html

[Q68] 保存点
来源：http://www.sxryk.cn/163uakaxdah.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163qlunjozl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163egywezbn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jfvkjcgd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163erhtlzvf.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ujlvtzoz.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163gugxfhgj.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163uphizvxf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163wqboupgc.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163wllhgciq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163yexydizu.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163fqjuhcum.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163cuyuvtyz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cwhdtnbw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163fuylnhvm.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qkvgztgy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163zjslzrlb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163gxthxaml.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163zqlmgihl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163qfzisfig.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jpynetbc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163wcsvcevs.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163twiiczgs.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163yxkqmcnp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163vexnrsdb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163fgpashty.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163tcpukhlx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163acjpcwka.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163erspkrtp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ahyuhcnr.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163aesxrrsz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163tgwrhtyv.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163gtlyzlsa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163onhvceur.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163fpgsbtzs.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vwjvzxma.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kxvjweve.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163wostznjb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wxewluyc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163aqncpzjt.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163wcznoglz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163cxrylgcg.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163joxespit.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163qebvouss.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163egjwmmqu.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163lurvwmlr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lrywapig.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163gtbuztvc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vwqgtnjh.html

================================================================================
来源：http://www.sxryk.cn/163quufwqsn.html

R. Bash 专题
来源：http://www.xuanzx.com/163iwboxgft.html

================================================================================
来源：http://www.sxryk.cn/163klllbsrb.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163mfygxidp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kyuhftio.html

set -euo pipefail
来源：http://www.sxryk.cn/163fadifmqz.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ibdgrtxo.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163cyzbakqq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ppqpfyvc.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lilehzhh.html

[R04] 位置参数
来源：http://www.sxryk.cn/163dradepop.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163hackuugb.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163lprnewev.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kwobibig.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163atawbrud.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jcbynhje.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ekuhgvjf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mtyyvxtz.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qejguure.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wlnaiffy.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163xoefumjy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163wnzjnkfo.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163gpitaoqh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163mzeqwuvl.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ivfgwlgz.html

case "$1" in
来源：http://www.xuanzx.com/163vlqdlilz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163gopkgggw.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163faztblqb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163sprejrgg.html

esac
来源：http://www.xuanzx.com/163wkhjzokq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vvnaxdwv.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163lfntdtnp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mhbkslwv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ueijqfep.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163nwewllsj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163jzvmeddq.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163himafcar.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ecabriqi.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163tfcwpxnz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163buctbfqp.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163buognmjr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ukcltonb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163lqxhaiwm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163zqetedgh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163gdgltdeu.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zzurcxme.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ncokatlk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163feeabtly.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163bkfbvhtz.html

echo "${#s}"
来源：http://www.xuanzx.com/163pklnwrew.html

[R22] 截取子串
来源：http://www.sxryk.cn/163zgxddaim.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163vousgare.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qymmwlpz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163iarlkqnh.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jwolauvb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163telmddof.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ssjasnrm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dgmxuxju.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ydlgjigb.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163mqkvgsfb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163iokmplqd.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163jzwtpmdb.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163xerztvyo.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ivdrthre.html

[R29] 定义函数
来源：http://www.sxryk.cn/163gzofkxhz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xbkvdiro.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163huyyfmun.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ksrejkac.html

[R31] 局部变量
来源：http://www.sxryk.cn/163knsaqikb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163phsfjcgq.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163tpurdhwe.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163rvvounwl.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xmpnbxbb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163pxzatplz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163neuurvxe.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jtsgbmtg.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ecktiugy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163jeieqchc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163nwqhxtjz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163amjlqkem.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163fyebszlk.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ejmimraz.html

[R38] 管道串联
来源：http://www.sxryk.cn/163unctjexi.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163haueetxg.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kenctfbo.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xurtbfow.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163naczvizq.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163oyreqflg.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fefwoder.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hkegekgr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163pyachtdi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vzphyrxt.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163lnomxhrh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163mokunvna.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163kotagdzi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ljgujrpf.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163dabnldgg.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163klpaoavr.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zhgfxrcz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rxlsvbsk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163npzpsdpv.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163pcpiukoa.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qzczfzjb.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163jlmqdjcl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163nixhsjtb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163phvqvycc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xqrqtbka.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163crnmhbtd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163gomkckha.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163aedphzhe.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163msblafbb.html

wc -l a.txt
来源：http://www.xuanzx.com/163brhdgxdz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163aonwmxrn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163rkhpkpze.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ikjnwetj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163jxlheghm.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163mmvhvgxj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163sxwbaflr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163bktxjpec.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163mjytgfbq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ggrnveao.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163aqimntip.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hebymlev.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163acyatvet.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ocgrtpip.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163rzrlcgar.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mkjcbfgi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163scxatqua.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163okpsrtqu.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163pqesnhzw.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ngygpjpt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xzseraxy.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163jalgtenw.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163wvootqvo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163urqhdalq.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xsnezzgx.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ncmeaszu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163tfhodlgq.html

[R66] 定时任务
来源：http://www.sxryk.cn/163nerycnpz.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163dkrqfvzg.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ngfykuxo.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dirsswmj.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163pxagxroq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ptwssdpx.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163izmrdzil.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163zjwhymru.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wtvvplxo.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163alrasozx.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163igeopelf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ozdkjcpr.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163lgltpibm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163hhonuosi.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163iosjjwdx.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163rmnrqcgu.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163gtndhpus.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vcudznpa.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ldhjiodp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163krrfestw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163fcwrzoae.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uzkvvbgn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163nqkvodpf.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163euktmfch.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gbcmacwu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163uogpjwlu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163govnuxnw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163huyorrrg.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163bnzfonhp.html

time ./run.sh
来源：http://www.aibaodan.cn/163gkafycmu.html

================================================================================
来源：http://www.sxryk.cn/163sfqxinxr.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163feodcaqn.html

================================================================================
来源：http://www.sxryk.cn/163caznlobh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ctgipsak.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163goqgfdxv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163rfvocerl.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163nxycmmhm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ohtzztkn.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163jwqtzlof.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ggztlloq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163iyuhjdfa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hucftfbu.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163hgvgupgx.html

strlen(s)
来源：http://www.sxryk.cn/163kjbjvoiy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fpuuclmj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163bbimlogk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fsuigkjh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163sbnphcho.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163bcnyhdbn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163euehbsbj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163aeyntdpi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163remajlsr.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163dgadadar.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163civawtmg.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wnyaopkw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xsyntqaq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163oyrvslhx.html

fclose(f);
来源：http://www.xuanzx.com/163trqeigtw.html

[S12] C：写文件
来源：http://www.sxryk.cn/163lmywhuzh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163dtcievjg.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163kpjesnoq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163tnjstesy.html

[S14] C：枚举
来源：http://www.sxryk.cn/163iebxslfk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ccrextfx.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163amuexslu.html

(double) a / b
来源：http://www.sxryk.cn/163etsgagca.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163hkufpnnv.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163harsvsiv.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163iltlweeo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163iqwpajng.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163mzealxum.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gmepidqb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163krlefudm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fcplspyh.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163yikynvfh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163sjwhicgl.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163wgnsaeex.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ongtwaow.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163stqofinf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163usihwiwa.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hwtmlhrp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163lblnzahg.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163hwcelxwt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ucfdywuz.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163aadfxmof.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fuogluso.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163agdecgci.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163fizwouxd.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163apdawwiu.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163jcwhtvzq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163womwzkfy.html

static int counter = 0;
来源：http://www.aibaodan.cn/163aahoxqgm.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163soocaimk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163lgyndfwa.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ojyksnwb.html


<!-- 参考信息 -->