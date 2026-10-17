外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nufzpaxh.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163dkatfvmc.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163dsvekgef.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163pleyluqg.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163azpdawfl.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163htvnlchr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ulffhwgb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163wcbhtpmy.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163aatxgtxg.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ckkrjcjw.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163utnxupte.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163gfnwndtx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163pahctiji.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163emkqsjzq.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163qmjqagvy.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163allzdpuc.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163yovxxlxc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163jbjubylu.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163lnsmtvln.html

[A17] 位运算
来源：http://www.aibaodan.cn/163girtfpaw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zwdholnz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163oixtrtjc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eiuvtymy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163fxmemvil.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zatfbgtb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163akgqfwtf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oqqmgyzq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163geqhplcj.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163zbazwpsp.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163hndvpruh.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163wjyckftw.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163szjmaasa.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163oztkuuev.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163vdkopzsm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163mrcbgith.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163szqbcbtp.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qfhvndff.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163lpczepyi.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163gkfohttq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163uqhdtouq.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zzrilrrf.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163jzwzqihg.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163nacefvcp.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163conqpaxv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163znsymplt.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vmbdtzcw.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163twhsoiwz.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163brhitptj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163dwxayoso.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163jbyfvsvh.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163yyrsgaeq.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163orsjsinw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163afkaebbx.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163mrauxmxu.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163bmjqmvwt.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163lwtkhsfr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ndntcpba.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nmxwmrqw.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163nwczjtyo.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163nemvybbh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wqkcalpq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jwidizfe.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jwfgiiah.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ckmpanmk.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163ykdoichg.html

Py:   len(s)
来源：http://www.xuanzx.com/163leigwdgn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163hrggpfki.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163uugwgdti.html

TS:   s.length
来源：http://www.sxryk.cn/163qmmwucav.html

Java: s.length()
来源：http://www.xuanzx.com/163mbgwihbf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ofnaiczn.html

Ruby: s.length
来源：http://www.sxryk.cn/163cdehsnii.html

C#:   s.Length
来源：http://www.sxryk.cn/163fxnrwisy.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163knacvrhy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163umhgooxx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163fzshkbvg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ijncsqxm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163sxrkcdal.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pnzszaqo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ojqhvnew.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wrfbygit.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gadgqxkt.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163oeclpeya.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ieupinzi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163tiqbgfjw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uumtldib.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163vgrgyqej.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163jobdypjy.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163vsvjbnpc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hzuwfkot.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ujmwfgzv.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163hbykugvw.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163yjsdpban.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163tvazwfdu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hgbrjfps.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ifqxhahd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163izmkdrrd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163vdadfuuk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163iihihlzf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wbvpekum.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163fedwkrxa.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163cekdextz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163pjlzzlra.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163hkjycsle.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163yjnwdwil.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163tspkxyck.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163knsjtzob.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163nqnxjhni.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163szjfbaae.html

================================================================================
来源：http://www.sxryk.cn/163utvrsbay.html

B. 流程控制
来源：http://www.xuanzx.com/163zubqjxrv.html

================================================================================
来源：http://www.aibaodan.cn/163xreeumzm.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163heewktut.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ihepbfuf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163zfvddanl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hvqlrahd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pwfrwkke.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bkixsvij.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163xwhpdnyx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163txogdwvs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hsxigmjd.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163dcgrxyld.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163yreorwol.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163sfrqbyjk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fsgaqmtc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bzteyqmv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cevsxksq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163uopylznk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163xztcjkis.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vsqwgxbm.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163hogajmom.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163lovthnla.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163fsgmyoju.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xhemoatl.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jmwutmjf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163owvvrgvj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163pkuerlpe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163cjekxwvs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163slzbiqas.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163gnebxlaj.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gnczbknu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rsmffjbf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163omhwlsix.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163flqtexxn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163gphngmsp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163lgwvgopq.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163tdjjxbns.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163cdcuomdo.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163hbehbgom.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163nppnlswj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163qnsigmow.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xvcbztcf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163enxxhunw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ydowdinn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163pnzyeter.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163mawgdabu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163jhnwhjip.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163alygtioz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163iinznasa.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163zhfofpzc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vnhiqiii.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163urkrnanh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163yfemnuaq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ffaerzag.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163qgulodsp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xdhlyqse.html

[B07] while 循环
来源：http://www.sxryk.cn/163utydudfw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163jttaqyud.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163oxcbfjpo.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163guktbgfw.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tvcskwnu.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kqtvotmd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163bqsoshxe.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lpodliem.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163itdnirec.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163zfiukzyh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163yxxfwkfa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163lfnjoijv.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163scwtcwie.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163adxuhwuz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aqngcokj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jecwcydm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163tjetapdn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mjyobeji.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163xfigztgm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163muejwvre.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xgysmzbm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mwpkohgv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zbqqsibk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dxipccft.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163fewajncf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hbjimdnl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tikiwjer.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163cpnjvmtt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163nvvofijm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163isswggjp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163phwvpyuc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163avyrxult.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rwulhfzt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163koukzgmu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163micigwko.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163jqsphplb.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163yeoafrvs.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163xymloalg.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ugyiorwo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qjgtnlsy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qpszuyyq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qovqemcs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jzrfsyuc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163aewqkoqb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163bavzroww.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hejhhkjx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163tntfijdb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zeysperf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sdpamqjc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tkgnwzsh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bodfrvye.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163tvsefssx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163yfncqspi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xcdreqpz.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163sgimusyv.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kavbtqgp.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163opgirnja.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yezbgkan.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163gmoikeko.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ahvnqccc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163lmvciziw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163scwavcmy.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ebkxablp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163tcyscpno.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163cqsdkvgk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163wjqjcxet.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xenktwru.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tdospqze.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ljbckccn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163nacqtjcb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163pawiwyjm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pwughfoj.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163mhocdknc.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xfplixbk.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vvdnereb.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163yxsgghyn.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zihpmghf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ybuyrfwx.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163wgdahyln.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163zppnbnws.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wsrllvdu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qieogsmx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163bmimgjiv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xjkluhss.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wxutqydf.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qxxjskyj.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163adbsuuzy.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163phgughmr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163krgtzefc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163zavmuhjw.html

================================================================================
来源：http://www.xuanzx.com/163awkohauv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kqlitcvf.html

================================================================================
来源：http://www.xuanzx.com/163wfamllqw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163kdninumg.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163tkvmawlf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ogiuyrrl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fhoqcpaq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gpwdqatc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kibwofch.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163szyscvqy.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163rdmfxilz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kxyoegts.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qrbztxie.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163pxzouhss.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163pwcyhdlr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163hpbgorqo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163tagrxqbp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bwyhhhht.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163czhtphdv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xsrrcsxg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xpihptbo.html

[C03] 可变参数
来源：http://www.xuanzx.com/163uvwqponv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ufdcpdeg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rxnpsygb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ywxfyzsb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ssujyyxb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163gkgciwhk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163pmkkwadx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163arfcoyff.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163bpvbfhdb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dfgsstqg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163agluvqeq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163oxjlgtch.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163emgikgzx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mbouqfun.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163allyybpl.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163qhxlrgco.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ofbpsiap.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163duziuiwv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163mpocxnby.html

Py:   return a, b
来源：http://www.aibaodan.cn/163cehrhovl.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163xedhstkx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wvmpklxo.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163tdkolnde.html


<!-- 参考信息 -->