外链999!wailian999！

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163brlojmeh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163adkqqkhs.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163vxkhwlzy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163nswawedn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163hzwntimz.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163vawfthxs.html

Py:   str(42)
来源：http://www.sxryk.cn/163pmsqmwpt.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163eoahcdpv.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163zqokqepl.html

TS:   String(42)
来源：http://www.sxryk.cn/163qbgsfiuo.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163kbtbekki.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163smuuhziw.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163adkwhujl.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163lqrafvfh.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163jpyqppqd.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163kqymkqcc.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163lfxroiid.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163lrkuzque.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163dlebsayb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163uihional.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163jlafswnw.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163tfoikvvu.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163kfnqnjlo.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163thkftija.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ifopgehm.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xrxcjbza.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ullbdcji.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163bagzhxhq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163cdiumwlc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163eopnvvzw.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163lcokurpk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163lhbrqgvi.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163koyzpfhb.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163paypykjf.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163tzwqkxmt.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163zhuhqhvi.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163begpzonb.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163czqwyjaz.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163rtfhkzuw.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163ezgjinax.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163kqwiraon.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163hbmcphzm.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163quzcxakd.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nqhxxeos.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rzpswpji.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ojbtwwta.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vsruvztr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163tpomkbvp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xgcjtopl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yzlkuuct.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163crfidkis.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163pkyxnhld.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163pmiljoot.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163uycoynem.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163plrxhblt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163hrertzzy.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163neiamcmw.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163eemzyswx.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163vvalupor.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163utreuzmo.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oznjalzg.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163omsbpshq.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rwsjggiy.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ycmtxing.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163qjcvlhks.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xblinwjf.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163otdecuth.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nqtpklaz.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163ewdhrlsd.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163sgwrzwkk.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163sudjdowz.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vzmhkvxg.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163njsjozvw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163fbfdqsql.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sblscdep.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163umzngjra.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jmimliba.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163dzolkypd.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163qjijsqjf.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163xjzoebbf.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bjiycdaq.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qovaeooz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ttyjrssh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163azrrcjdq.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ftmuuyjc.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163swwsqgbx.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163dwmvzosw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163jyzkdgvh.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163hpecplbc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163aplbnrqt.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163kiegzkgk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163zfkbaaot.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163kmuiobxj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163rpkuxjqg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163pawofjzx.html

[A17] 位运算
来源：http://www.aibaodan.cn/163wtqzvqpf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ffzqabmf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163kycdmfrm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ebnanjop.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163zueiuuvu.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163afubmwtz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uiixpzve.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hxxeqeci.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163krkegbmk.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163lzualktn.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bultptgz.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163ghcpuvep.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163zirfpvbm.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163rifwneao.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163omzshkrm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163swlokzon.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163bhreiwet.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163bijcxtup.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163adewurny.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163gznqkofz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163ewldjdmt.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163tdvkoodb.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mnilnouk.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163vgskeiap.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163xxlpbife.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163fnbqpjbw.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vmwxyimo.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163bedkhzlr.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ogmkqjai.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163qxoqthgb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163oxeyzaok.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163vxufqqbm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163pbjvxnch.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163uovkzhjo.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163agueiasf.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163qykajdbs.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163gxqarmtk.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163bdoinrtp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ramexqoq.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fisfurdp.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163uzsjhplw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gmqajdkr.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ayknzgoi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163szbwkxmc.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wskdjese.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163kqyzrrou.html

Py:   len(s)
来源：http://www.xuanzx.com/163gepawknv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163xqyqjntp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163wugfmxov.html

TS:   s.length
来源：http://www.sxryk.cn/163pqhovkvg.html

Java: s.length()
来源：http://www.sxryk.cn/163pxvbfrju.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ziyczlio.html

Ruby: s.length
来源：http://www.aibaodan.cn/163queswxgw.html

C#:   s.Length
来源：http://www.aibaodan.cn/163aflmcynv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163jeoxzbpu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163fseohghq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ulpkjiuu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163omzqhqmx.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163luyfmrbt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ewspjeqx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163gpprmeyg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163cmsncvlv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163kvxegtzz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163dvwlrjsb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163szvbtnjz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163zjbsncmb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163jagbrjhh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qarvvdao.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163vdizobsg.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163cotitvkx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163cfyhriwk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163svutmaer.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163qvjcghsr.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163emtpkdtt.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163qwhelxxo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xfwlpkty.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ynfkimtd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163yspnbzrs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163hpmxrdwf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163xykwicuz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163xliprsje.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qfunvvee.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163rwxltukp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163zlvldfkv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163tlzugknm.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jpziklmu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163jzfdoydk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163lmsdboqp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163seusaxza.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163kbbjiicw.html

================================================================================
来源：http://www.sxryk.cn/163xelfbdbm.html

B. 流程控制
来源：http://www.aibaodan.cn/163gkpipdqz.html

================================================================================
来源：http://www.sxryk.cn/163fhxxqrqu.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163fwmmbeht.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163trgrgwzz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163jxjtlppb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rhhwzohi.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163grnbxvqd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dswmsxkm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163cbodculd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163runwfszb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wzcoixoq.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163czpdyyni.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163jqysqpbp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163jmyhyokd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163itoujflp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zpujvesi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ebpeufqn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163fndrzgso.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163gqxlitim.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hpzafmff.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163iznnbavb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163baflubjj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ylpjkhhc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163twofamen.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163blrjeejz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163tygwqzpc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ylahmzls.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163otulljah.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163fxxyuxmj.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163loqlvgkr.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163exriqueo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163lqnijvox.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163latmrbaf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xfqqxqze.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163epcrjqua.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163stdbqsoc.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bdoqhkyq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163mkydghza.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163zsquqrzi.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ltjbmjss.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ukmhtrzc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pbbrxsnw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ksnacztq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163eytkppho.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163cdetxequ.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163uutkkisz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163pxkiteiw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ewjgwcik.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vfocrjub.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ribmwhnh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pptknlpr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lnqxflrl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163mjcuumgf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163hujbztyn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ouyamspj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163thodjowe.html

[B07] while 循环
来源：http://www.xuanzx.com/163zqfmesrl.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163jbfjhwul.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ovewfrzb.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rrwnpcul.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ewehhcey.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qutgbrcg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163zfgswdyb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163pailakfb.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wropepxr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wvmqlzft.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qypextyt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163tmydqbql.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mgunntti.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163meptxjco.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mwsssnzo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163strsiuaq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163oreabbpm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nbczxjun.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ayipptjr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163twrlpdag.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163uavyhart.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xbspqzvy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rlwhlerb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wzjmstbp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ksqrxfkx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163uukadrjg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ojtqnkjb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163kgjezzvo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163sjgylqgv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163hbfxpvxv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163nhdpjnxt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163pgzaxuwy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163pcdfgoim.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163oborfgeg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163qyjjuatm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163pnaukiiz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163lkzaukpa.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163rgmrmtlq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ijcytskz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lcoxqedh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163raozotmm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163bifvxuss.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163elqeutkm.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163hnyfcjmj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163leovcita.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163aluykplz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ovmffdqz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ibqnloyy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cuvzoexs.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rstjmzjr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oddzvdox.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163qeblwtwq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163rjreitle.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tflixepm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jgtrehjd.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163lzndfrud.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163uopdfdjh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vihpfcdx.html


<!-- 参考信息 -->