外链999!wailian999！

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163hesyxuhm.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ogviwrnu.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163okaabgml.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163jwfwezqt.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ockudsia.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163bhnhgunm.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163cxyechlb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163sajkpgst.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163tsykyngo.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163cvsaidtb.html

Py:   str(42)
来源：http://www.aibaodan.cn/163qiurvnyr.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163meresoks.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163fktttwrd.html

TS:   String(42)
来源：http://www.sxryk.cn/163hoqzjpui.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163tykscjzf.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163fatglcak.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163escwqfbg.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163nojihiam.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163etoenqxk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163dkvfaufg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163vqhqrmjh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163mfevciuk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163waiwolog.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163thazqwla.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163ltimmvsn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163brybhnyu.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163cvukqpei.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163uybttmwv.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163ljgyskjc.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163qeuglrhe.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163pxeyeiiy.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163vwebgcyj.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163wxyxfzex.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163drlmcynz.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163amoovhnz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163rgnfrdpx.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163suqptxwx.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163wfqdhypw.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163romoxnmm.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jqdzeixr.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163mbvfcedg.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163jurqcrhu.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163psuyyknf.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rntewzld.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163xdzngzzs.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163yekgnfck.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163mysydvgy.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163amjoambr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163trwcvkzr.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tryqqdlb.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rbwumdsx.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163ohrevuec.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rtffjfyq.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hxrblwso.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163dxduojgm.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163vxvtnbzy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163frmkxcgf.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163btncbwpu.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163jtotgida.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163dqsdckvz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163nealzinf.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163bnkgived.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163vxcbwcaz.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163mselcnil.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163asdjianw.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163rxcszwll.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zudmlxic.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rbxnrtja.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163xkmzscct.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163laqrwpru.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163igpanghv.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rpbqabvl.html

[A14] 注释写法
来源：http://www.sxryk.cn/163avcougcj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163jeteuvur.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163eghveilr.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163quemrjdj.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kvtatril.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163najbjokd.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jxgbrain.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163psatkqrq.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qwmxtvwm.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163mardvtxu.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163nwrmcefy.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163wydidqfa.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tsamrrqp.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qkrracvj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163zmijwacn.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163orwcptgs.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163nzhhslkr.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163hzokruet.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163hnajpmuv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163vsrboerc.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163vvjpqtfq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163sivblukh.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163qbknnvkt.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163tosvmjrg.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163pbyranyx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163iguyelqi.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163rencuikc.html

[A17] 位运算
来源：http://www.aibaodan.cn/163naqsrxbj.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cucrgtxq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163bryyrysl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zraozgbx.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163wvxvqdwh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pevzcrqy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bblfprxk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dkfdgkmr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ejzezmly.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163axlekztm.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163jobfuveo.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pnngilvs.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163czlnnfxe.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163clpqaquh.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163sfbmzmzz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163hjatmhys.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163lrawhyit.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163dnrsvocf.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163badwibyi.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163ttasuzcg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163ejcqzsgc.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163lldxcbcj.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163jotvnubq.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163wkumwrjv.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163qzkemsoh.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163tdckydmc.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163zjeujjux.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163lnoklopn.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163vfzxvqxx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163syxuzhml.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163kzeszwhu.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163cnukmjks.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163sgxkgniv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163lrjugmup.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wxnexrij.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163skupcaoa.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163qudyeilz.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163eeamuriq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rcejdugl.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163cqigjnba.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163btergudj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nrvnahxl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vocdetvn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tmbsfhsq.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163jrdcbyxy.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rwpytdcp.html

Py:   len(s)
来源：http://www.sxryk.cn/163gqeejeti.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163clkdznmh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163cfhjpwla.html

TS:   s.length
来源：http://www.sxryk.cn/163rvzujksw.html

Java: s.length()
来源：http://www.xuanzx.com/163xfmxdrxw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163llvltpmt.html

Ruby: s.length
来源：http://www.xuanzx.com/163szmzklcv.html

C#:   s.Length
来源：http://www.xuanzx.com/163dvmpnssl.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163osezuydf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163fquxautg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163hnazfqok.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uraiyelp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wihaibfg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bpamdfsn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bhjkvtqs.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163tniwjbka.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163oixxudki.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163pfyciwai.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163mqlmxopa.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ocilntef.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ydmmknwk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uhlqwfjm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163cjrzgkng.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163lmtccypx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163dlsyokvn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163skcmlqhm.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163zllwerrj.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163vjgnvzqv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163cskmrytn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163oixkbcml.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hzjoeafy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ajmjdbck.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163nwrtfnnc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163eglrzyjx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163trazhgqy.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163puwmobze.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163jmjncwyy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163lhuphhex.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163kqnicxjw.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jjbveqmw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163qtwwzumh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163otntppoi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ofrrywil.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163xqrehzjr.html

================================================================================
来源：http://www.aibaodan.cn/163kjzcebqb.html

B. 流程控制
来源：http://www.aibaodan.cn/163bchlcvxc.html

================================================================================
来源：http://www.xuanzx.com/163ycfqqzvi.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163lcjsowge.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163lyoynfir.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163kdptnblw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uwcjnepx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163srzgrymr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163etvzkiza.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163jacpmvkn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163okfrwvrp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ppbhwvoh.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ynpjwjvt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xfcmpxzj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163gkigqxeu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mwoyzrne.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bfkhowcd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xioigqul.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163maosogxu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163yfvpbfgv.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hgrxqkgo.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163lqasuayp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163gnqbekyi.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163mqdvviti.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vqvkeslt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fmnhaktk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163nsdmygly.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ckzprgwh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163banijnjh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ywkjcooq.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jhbbyqxb.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163mtegxvsq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wnsrfrqn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163moieqkmv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bprdidcb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163goodmhbd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163qqcefzub.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ktwkjhrd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163wjitnigc.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163kvfbpuqm.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fvabpgzl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163dywsvtmv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dgxsetod.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163zgyohtkc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163bjprdjow.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fxvbopxv.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163tfnrvjxw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wtimpytt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wvczdcgt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tzeppwnr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163tlemnbcg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kmzczhzp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fsoyjgwm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163sfqbzpni.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163wlfzefrn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163nrsgglii.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ojzlyfuz.html

[B07] while 循环
来源：http://www.xuanzx.com/163einnnizd.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163vzzppliu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163usmqkxvi.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pwbhhkum.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sglvxoar.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mkmdlwcm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163inrmmmaf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163comczvav.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163aescmtgn.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nlubcywo.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163qeveqevj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ftlymbym.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163aekbasez.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uvoocobw.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mopvkglt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ckksazwx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ktzkqjkn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zpkypqrm.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163uphgkdna.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vqitefat.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zcpnxccr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lxhoyzrz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ahcmxlyu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jlqddlez.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163kmyqpsfu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163yzkkbzsg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ogomyrwc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163pqrgowrb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163dihhmyjg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163piiodzli.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hkzzaxiv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163oqaroegs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163tnjribzl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163myfscxip.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ixvlsoph.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kjawidhg.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bjgnywkl.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ixnovjsx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cbfbjapv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163smagxxnt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fvsntqft.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163kaezbwrq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163hhlsvhal.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ainpzhdq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ophfvkoo.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163dvyqxmxt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163wibrmesv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163vrclmvwe.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dyrbilic.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ydfixbno.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ratxkucw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163jppzvyfm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163nrkkzaok.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163pekouvdj.html


<!-- 参考信息 -->