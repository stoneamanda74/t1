外链999!wailian999！

[Q63] 开启事务
来源：http://www.aibaodan.cn/163lzvsygcm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163anbzbpdj.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163goitzphb.html

COMMIT;
来源：http://www.aibaodan.cn/163gmwforgs.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163unaqzchc.html

ROLLBACK;
来源：http://www.aibaodan.cn/163sjqxspni.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163xmkqvmqo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163zluqhkar.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163xolmntys.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163nigkpjuv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ewuakfkn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163sxeaclrm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163vldpknqy.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163yhxcjxph.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ftmeliiq.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jbnaoaib.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ygdgwoxe.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qehghsqm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163cbplywqr.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163jujhnigd.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163dnyukutx.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163burbedcr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ehtgildj.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163nnrxrfto.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163zxyxpxld.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163cxkscidv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163zmuoequr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163aymvdhrf.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163fhstlfft.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163bpdbiatx.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163sfveestf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163mlvhvqhq.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ocikqwfu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163iyuvkntd.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163gvjtfzhy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163gbgalfey.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163vqxlxwfc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163slxwwcvh.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163bfypugjg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163zdzmwthx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163khzgfrhw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163bboguvud.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163wweztgds.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163gcwrnawv.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163aiamjluj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fyaagxup.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163frvuaevp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163luuvdmqf.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163stfggtuk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163hasrhelz.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163tienrdhq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163gugkdylg.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hpfvtfhs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163wgylbxkq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163qytyuaih.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163siycsbpp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163huhvditf.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wenbrwlo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wujjhtlv.html

================================================================================
来源：http://www.aibaodan.cn/163xkdoftmi.html

R. Bash 专题
来源：http://www.sxryk.cn/163nfqsxbqe.html

================================================================================
来源：http://www.xuanzx.com/163ogpmbaqw.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wtrgiobu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163zgmoyndw.html

set -euo pipefail
来源：http://www.xuanzx.com/163cfdmadnl.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qdgukyjm.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163jhdsumhu.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tgzwblqo.html

readonly PI=3.14
来源：http://www.xuanzx.com/163vpuadimy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163irabcyho.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xkgvkbeb.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ghsaappx.html

name="${1:-default}"
来源：http://www.sxryk.cn/163cjumqvsx.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jydlqmrz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163fsfjrhfr.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xsgzzlam.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nnakvekg.html

[R08] 数值比较
来源：http://www.sxryk.cn/163axqvprzc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163zcabawyz.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163nossjfjt.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gphtsfna.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163iaaghumj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163cepyqacw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wanhhdvx.html

case "$1" in
来源：http://www.sxryk.cn/163rfnjnbvh.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163drvjeyiz.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163scpbchqf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163jzavvykc.html

esac
来源：http://www.xuanzx.com/163qnfmnqgj.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163fcrxtiyi.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zxpywfbx.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zvnuyphf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163qdrwnopq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163wqvxjtsv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qszzeofi.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163vhcawyww.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163bormmfxy.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mbgafzdd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163abfgmzlu.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163nynyyomt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163bbajwojf.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ardxgann.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163smswkera.html

[R19] 数组长度
来源：http://www.xuanzx.com/163rojjiqbg.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163mvslezbb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163olvkfzlt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163uavruvny.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ycqbfqmm.html

echo "${#s}"
来源：http://www.sxryk.cn/163fwjhsjmu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163jawhejcy.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163uxwjurla.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163usgerlje.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cyksnmma.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163yiwkcyby.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163xdjvhfkv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163gvtdgzfj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hgeoycfx.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rjwblkpv.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163pbwvdpat.html

[R27] 算术展开
来源：http://www.sxryk.cn/163pdyoafpf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163rflexbff.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163kfwyslqk.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163eiyddjsc.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163aocdueue.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wenfkpmv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163pfimnwvk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gwrichnf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163qvnuuwdk.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ckscmgai.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163gmkrborv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163fxpuongw.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xuqbtgqa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163lfgncgsl.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163dqqiihhy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163atvgbctj.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163yucmrlco.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163eetdglyk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ltdkrgty.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wfdlfmdx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163jqqjwbgt.html

files=$(ls -1)
来源：http://www.sxryk.cn/163imlmufkd.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163duhroezp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xtdkwlta.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163dvdiniur.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zgirowdn.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xrpcihhw.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ryscpaln.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163yjjdzfah.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163znqeuqcm.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ygrbexeg.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jxnktkyi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163lgylapif.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163rherbgum.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163iagmfofl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163nipscrhk.html

[R45] 批量删除
来源：http://www.xuanzx.com/163cpfmsfvv.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163hfjydnab.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nnchggiq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163zhzcmcrs.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163mcpvadzr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163phjgtaqe.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163sfuzovtk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163avlgkrrb.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163frtqrbqq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163cqteqmfb.html

[R50] awk 求和
来源：http://www.sxryk.cn/163wuaevqvu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163chgolwyi.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ppzxmnjt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ldcrqydo.html

[R52] 统计行数
来源：http://www.xuanzx.com/163sqcgkcyi.html

wc -l a.txt
来源：http://www.sxryk.cn/163irsuagkr.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gdleiaky.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163nrnzkkvo.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163vqhxrpei.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163latywbyw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163kviglhax.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163fdqloyyd.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lkxullfy.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163poiksgod.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163adrphecm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163wnhlzavh.html

[R58] 下载文件
来源：http://www.xuanzx.com/163lzwqdoev.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163svyysclv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163eruarkll.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163egduukwc.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163bnlmgpuf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163gmbvfqay.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163bfijfuae.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163oovvsuca.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163voxhsoyp.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163svjmqjjw.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vmaqlnku.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163xmryosmg.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163rredbosf.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163stwovsrv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163fnhrbmpl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163usrrgbcb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163sldacnyw.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163cwwqvzvf.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lrlrzjkl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163fjappkvi.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163evkusxzg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163agyhlwef.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163camzlayq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163hlhkyxls.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163klzddzad.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ezjuuqvn.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163mvwhcvxi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163fyxnplmw.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163sqdcudbn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zrnwoawb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163nrirxczs.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163pbatkgbk.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163yjchbbfs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163fzsvvcpy.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163gfohurvc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163dekzuaxr.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163dhphrbux.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gpnfrrff.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mzbdelvn.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163tclefjqz.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163scdtpten.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163avchcjma.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163svveswgy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163hauadogm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pjckyvoj.html

time ./run.sh
来源：http://www.sxryk.cn/163iubcetpb.html

================================================================================
来源：http://www.xuanzx.com/163ktxbecgr.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fhqcgsvh.html

================================================================================
来源：http://www.xuanzx.com/163qmofsmot.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163blzltvcl.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ipjpmsok.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163betpnyho.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163hsaoezfa.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163lkgkwoya.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tjkthiki.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ueomabns.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163ixjkwkon.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163gnzljpvu.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xrtbyrgn.html

strlen(s)
来源：http://www.xuanzx.com/163eyvdnoue.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163rxkcqqyd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163iszjiefh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dglkkauy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ckbmvoaq.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xsxyjjye.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163acyzgtyc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163bbnnxjgy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163vrftomxk.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hcnjuxeb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163boqhfait.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ffudxfmr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163agpgiqyt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163yarubeub.html

fclose(f);
来源：http://www.aibaodan.cn/163ekbpcoul.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jvseekxd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163obqytztv.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163oaqptzvu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163hfjhqbfc.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ymgrdtri.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wnasqanh.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163skmeowqv.html

(double) a / b
来源：http://www.sxryk.cn/163vsombpsh.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163yozpuwsx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163oxsmmqiy.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163wgvdwkji.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163mpmvrcil.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163pgdavgqi.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rklkpomi.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ovqmubyp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nquziiqa.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163aktpmhwf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lsoippji.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163uzpaqlms.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163syqjwhrs.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ajmumuxu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163gfteqwsi.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ipfbooyt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163tyrzylii.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vglwmpvn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163znaybxkd.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163emacpdcv.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163qxkjwjhx.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163evgfqoxh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hqdbfawp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163sgvpcltx.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163xzfgpazh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fqduraer.html

static int counter = 0;
来源：http://www.sxryk.cn/163npwilklk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163goteeeia.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163peoxohax.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jqjxupql.html

#ifndef X_H
来源：http://www.sxryk.cn/163cpunzgyz.html

#define X_H
来源：http://www.aibaodan.cn/163kaqjqctg.html

#endif
来源：http://www.sxryk.cn/163hcfzeujk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163fkfkfdqq.html

#include <iostream>
来源：http://www.xuanzx.com/163xxxtxpou.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163tuspvfdn.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gqoqbcre.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163unfvbvmb.html


<!-- 参考信息 -->