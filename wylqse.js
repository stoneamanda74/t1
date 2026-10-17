外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163dbznwpxr.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163yfbgauss.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163daiducer.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163zjjzyqti.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163sdwcggik.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163kuvtlrmp.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163ekyfhafw.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163nlkpubpq.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163kjnhitor.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163htbwnejt.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hyjojslh.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163bachlzeg.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163dqecxwtm.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hnfysmcv.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163rhunuedd.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tmettvkp.html

[A14] 注释写法
来源：http://www.sxryk.cn/163kdvskdqj.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163qxvydabj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163deurexnb.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163veieruqu.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163unayfguf.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ermhbifv.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zeugkscc.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163wjthnjmt.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xqzailvc.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163hvmwgtva.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ggruekbt.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163blchdhfc.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163bgnbwrhm.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163lirdfvmd.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163cqoagpnk.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163dqqwllqz.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wyyyljmm.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163zvrhkiwf.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163tpdwsazg.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163snyqreib.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163cwskpztj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163evzruxoc.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ibijvvde.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ropcbgeq.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163exvfbgqz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163slskijqu.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163bdxyvmox.html

[A17] 位运算
来源：http://www.sxryk.cn/163jmvrrgay.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ortekzra.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163vlkjfezw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fyegcipg.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163sluaoijm.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ticgfsez.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xvppymed.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ngcibzxm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163oqzmuqid.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163dxfxclan.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163nbrtgsaj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163bcuxuuij.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163tofgcect.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163xfdgpzwc.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163rmnwmqtp.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163zhsksqqw.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163vitpcblq.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163ecvxoxub.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163zoxmgumn.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163hvslxjqi.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163bisixewl.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163fuovbssv.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163pgfhtvzv.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163jnplsvyw.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163rdrygunh.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163kdisorlw.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vekyldvg.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163idmwjwxu.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ianvbzig.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163zsrtgghj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163tygqmnsa.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163wzajgqxr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163fqvsayay.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163vdcgjtls.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163teridumx.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163szlvjdoy.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163pcyorjkh.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163sgzvmvlv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163okhyckrb.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163tmicvfwi.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163tyrvpwyr.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163enwbmavi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vipitcct.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mphfzxrj.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163duxzowau.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163fwrrdowm.html

Py:   len(s)
来源：http://www.sxryk.cn/163nuszpcai.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163gaphioic.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163mrrqbaop.html

TS:   s.length
来源：http://www.aibaodan.cn/163uwtoqwds.html

Java: s.length()
来源：http://www.sxryk.cn/163zonychtc.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163mzdzndww.html

Ruby: s.length
来源：http://www.aibaodan.cn/163qakskpmw.html

C#:   s.Length
来源：http://www.aibaodan.cn/163kirwcekj.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163yzmciapz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163wfcuefbi.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163uolhxdwo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fdfwrccj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qxktyzcg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rvlwpvdr.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bthlidye.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163pkdxvcrg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163sozxkwla.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163czlsvphi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163afbrgsej.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163htjcecvx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163mbozctkm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dabluiot.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163qhlxhsqz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163vxqpikjs.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163sdetfqyd.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163exnxsclf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163vnxoxdnj.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wtkuwecr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ylaxvjrm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cuftljla.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163twnksjjb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163djchvewe.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163penzyveq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jydjvdow.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163qboxwroo.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163jabkwslu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163yfbzxefb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163grruvwjd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163mqekvbel.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163vwrzjbgl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163oazlwgny.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163aorfhknc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163vykvbxex.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163lxhucmpt.html

================================================================================
来源：http://www.sxryk.cn/163zpwmavia.html

B. 流程控制
来源：http://www.xuanzx.com/163fbwugled.html

================================================================================
来源：http://www.sxryk.cn/163qcqlwqow.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163hbgjmzin.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ahrhjsir.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ezaggprk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163isrnncfw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163amyagagd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fjisfogm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ygafuspd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163oesauijx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mzytbwyu.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163epzqogjc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163hbwtwuax.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163iqysrddl.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163piszobqf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xgbjfvhr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163sowzksna.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163pumhapur.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163szcgxqxz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lqphcisy.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163xbinxrmx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163aberutgw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163eetrpqyw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163buabnppi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163twfxuhri.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xelxphok.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gaatwqpc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163vufqypye.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163zvjjddza.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163krbajsic.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163geddaxyb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163xxaajplw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163owkeyzvq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jlddvxoj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ukyconsl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ginsurki.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163oifhqray.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163rcjeqpfx.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163nzgvobkr.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163tdwwkgzh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163kxcogugr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lzhihyzt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jrhrkaxh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163qfuzsweo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163onhvahsf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163wkwsjbxv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163lvwpqzdt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ozgbxtsb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163noyzinvu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163qwhlevci.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qnjaplme.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bbntqurb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163slxzhmtj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163bbjofwgk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163oitgozhv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ivzinmmf.html

[B07] while 循环
来源：http://www.aibaodan.cn/163hpaxwfyh.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163gkmrerji.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163lzwrfuos.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163epwxdjqo.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vjuoezuz.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uhgvuolg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163nbclepih.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vycjlypq.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vqoxmdxw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163oxofodco.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163shncosmt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163wtxsprxm.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163emlufrct.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tzseatzs.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nxwmifjs.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163legzwrqr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163lqglepix.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rgvpoejz.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163inwcfqkp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ytbypbgz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nvzytrhb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mgkntiid.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ljemhsax.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163trhydgfv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wtgdhljm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gimccbuw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qwqzwhkl.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jkgqphol.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ewxanzzv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163qitqfnsd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163webkolhx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kmdzqmhv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vnpfojit.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163pmiaiqip.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163usvgongj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163lcmuodur.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163mnbvbbvj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163oqvumbez.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wtfjllau.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wjovtwck.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jdycxtdb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163xoirjikv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xdhwizah.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163jewiopdk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fnsiiczi.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163edhqifos.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jsyoekte.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163mlrosjri.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hywfuuvg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sbinzbpp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gqfaiqgf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163sdamevjz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163uarwuvav.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163eoiwxlon.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163clugiyrw.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wsotabse.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163hwdrqsjm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ragfdgly.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163doaxyrgn.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163rjbzymwq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163wsuqgiqr.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ccbprzma.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ylkwuefv.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163lnpuzfim.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kvpixlrm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163aqgsjlst.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163sfbenbjo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wmlcerje.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dovpxtpk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163yqmybsvb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163mocktpsw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163rojbubde.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163gdmgbuci.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jcbuxiob.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zqtjqkzs.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vxhdtena.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163esjkynfi.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ojlzptbf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rgdtseuv.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163vykxlaxv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163kquqqhcc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163lnebivkl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163elvgmheh.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163cofmxyqp.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163mhvlxtjk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163yxedjrpc.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163exansfkg.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163descskqr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163mptqhqhq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163fkeosttp.html

================================================================================
来源：http://www.xuanzx.com/163ltsibujm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163qccmtgfz.html

================================================================================
来源：http://www.sxryk.cn/163sztkykgk.html

[C01] 定义函数
来源：http://www.sxryk.cn/163smostzyl.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163cmnnwidr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kvcfbwri.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mysyszkh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bxldfqfy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163limygbvx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163pahlmfre.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ebkqwdgm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gyrhgtjv.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vfhkgiew.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163htfrollt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qgzcawti.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163aooscadm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163crhudyjw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163tfwumdmo.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ovezlkwe.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dhicndwg.html


<!-- 参考信息 -->