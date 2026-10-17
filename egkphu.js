外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163vvtlalvk.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163hjlpffkm.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163wyexseqh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163cvowbhec.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163aixqhdxq.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163tvdjvzac.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163dddkwnuk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163fkbcebla.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dzbkbrtn.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163bynqqqcg.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bbnaupuu.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uckueocm.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163wsftsnqp.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163spfbiygv.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163tocqrwfn.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lqrbdfuk.html

[A14] 注释写法
来源：http://www.sxryk.cn/163kwbrcbmf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163xicmbven.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163virymlpg.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163tiksltpg.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163otcntzfs.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163aarnldxj.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163frnxgkew.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163awiejtds.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jjfggjai.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163lkveebzu.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163kyrzvnug.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163tydrulxg.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hocforgp.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kzpoezkx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163eatvsqxz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163eekjotnf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wawbyouu.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ugbgshkg.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163fddkadqe.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163utufoftb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163hytrnzbr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163aqgbvrdc.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163wsvsolaa.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163epugwpxo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163yqeyqovt.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163seyfbbol.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163pgznjflo.html

[A17] 位运算
来源：http://www.xuanzx.com/163czuwxqpo.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ottmfgls.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163sjmfnkae.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rpkngnbx.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fbakkuaa.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163htyswkpg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zculomnf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zurijdye.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vxbencvm.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163qjbtqtgj.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163chiwjisy.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163znxfkejf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163gvlxqiop.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163cmkegesb.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163vqfgpzgi.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163drnstnny.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163uswsrzce.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163rznjknmp.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163aowhnoex.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163aitgyoys.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163imrriyjv.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163mxnpdghp.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ghvuqmad.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163jytrezei.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163deyjursv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163haitzvzw.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ossqelri.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163lbrketli.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hehiejmn.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163iktdxpjd.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163hpgmivhg.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ekyrjhqi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163dkqcjzkn.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163jowjjzlk.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163kwqklknd.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163nvjvstkb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163wjbtblcj.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163znipcxzq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163lokevdtu.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163terascft.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wpgdztxn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fczulkvk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vkgurpmr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xkchlpuj.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163uwzcierd.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163jzytrfpw.html

Py:   len(s)
来源：http://www.xuanzx.com/163noamdyel.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163mgnzsuna.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163znpasuym.html

TS:   s.length
来源：http://www.xuanzx.com/163mznyvpps.html

Java: s.length()
来源：http://www.sxryk.cn/163umidoypi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163olsmqhwi.html

Ruby: s.length
来源：http://www.sxryk.cn/163bagefkge.html

C#:   s.Length
来源：http://www.aibaodan.cn/163nwithrdd.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163qwuqeljm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163iotnygxv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163iiavzlfv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gphtpeuy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ngpuqpsx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jsclotfl.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163nmkedwvb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163cwcltbgs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163wclvqizu.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163amfrnqun.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163qgtarfhd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163myxahujo.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163aylaumam.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163hnftduun.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163hbigrrni.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163jvntlika.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ctbtnxvq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163qfhpysod.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163gtpwgcyh.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163diuliwdy.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163nxorsuxi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ojrxoofn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zbcmiosp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ztiruhgj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163scghkobd.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ftnrjrza.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hjcwupfm.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lxtxgecx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163yabcuoax.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163xvzlzvng.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ccaqirkf.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163skwwjqrh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163kokjuenk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163plvdcmjp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163hcipejxu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163lwsadpgf.html

================================================================================
来源：http://www.sxryk.cn/163arjjwadd.html

B. 流程控制
来源：http://www.aibaodan.cn/163urnblucp.html

================================================================================
来源：http://www.sxryk.cn/163wcypkqlz.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163xnphnzfk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163gowumfsa.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163dayosdlv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ydsbnsmi.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zmeicqqa.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163awyukwvq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163lsfjzvfz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163pvzhhvka.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163oqmoquav.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163vvromway.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163nwaplbqd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163jfwsyilv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ycmekmfo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zzelkbnk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wpjwbymq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163yjzfexir.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163twfiozap.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kjtjwjhc.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163hitzmhyn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ekacrdwu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163xgwdwtby.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gjcfbcjr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cktengvp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163hpmgxfud.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163oodilsfu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163dwnhlksu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163leywvigf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kvolwcgf.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163smzxiosm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163yqcnoocx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163iucptuyw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163moaxmxfa.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163riepinsh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163qtyvsjgv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163lutvplsq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163ttzrxhqx.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163qtdatypi.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163eqzxuypq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163vlxuebur.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163gxzkscke.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hjgeodms.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163lrlbfist.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163quylgydr.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163driciobj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163scartifc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163urqllfql.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163hytswogx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163xfrebvzt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163uyctpzrp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kjlmowft.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163oivtxtsf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163imdulhlx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163kckjfclg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163vkaozwim.html

[B07] while 循环
来源：http://www.sxryk.cn/163lngwvadz.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fzitqvld.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163apfpvcda.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ncytnvva.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jqmkzxdl.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jmniaodo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kcbxqanp.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163bxkewino.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hhmabepv.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163pubhobvy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163tocawqgu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163vgbhllns.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fhtzywsb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163huuqvtrl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163myxwiopb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163dzaammeg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fopkdzye.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163klkiykjl.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xfpblzto.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163crvdtynz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163adqcbrbt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qlovozbl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163iomndqdt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fcipuvpw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163itlryxgw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ddnzympr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lgiylock.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163gnilnmcs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163oucimzde.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wfqgiwfx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163uxddcskm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163wvilaygt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163kjimakvx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163nceieqkx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ylczgbgm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163huifefzr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qtgsdmep.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xwybgloh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163omicivep.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xzwtbulu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163amknbaca.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163aiquljct.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163hlwoogaf.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jwbedunk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163nyiwemho.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163bddvolha.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jjphcsqr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163qryfbswg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163buuaguhd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gqhserqi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gzvxflgz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163nnptsamg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qkwhygtw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163aimeycod.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hhojqbul.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ienofgop.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163mojadhoo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hgnzcdoq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wmbfsfad.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hmjluszy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ilvvspmy.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163jmnftxuc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zknqfslu.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ivaxvzja.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163nraatbcm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163njjhdmoh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ydybxcvv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nlqainpx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xgsrntun.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xphnfcrv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yssdlyjr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ggydecbn.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pzwzkvea.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163trzjnesf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163vqhsqegt.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xecsmhts.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ooxhatxl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163apeaburi.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xonbxgdu.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163fwtjnbye.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gxytrfhb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163kmtarbyd.html

Py:   if not data: return
来源：http://www.xuanzx.com/163tvwixccz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rkrqgdwk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cknyfuan.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xxjjhchx.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163uyhauduz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kabyczis.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163mpretgmj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163sidaokxm.html

================================================================================
来源：http://www.sxryk.cn/163gizlzwih.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hgigejgs.html

================================================================================
来源：http://www.xuanzx.com/163xoxsafir.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163gtppfghs.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163nwgqycja.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yagkropz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fafzpptl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163njpoclyb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163roccxflg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163viztrnck.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163wmkmoial.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vzubeyuu.html

[C02] 默认参数
来源：http://www.xuanzx.com/163rngnxtsq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163keqpnsmw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ydyrtwcz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gqxavojs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zmcezjym.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163oxbbzukv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tedizlns.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zlrhpsja.html


<!-- 参考信息 -->