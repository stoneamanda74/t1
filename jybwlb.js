外链999!wailian999！

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163ajjogrka.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163keysvhuj.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ihtxmvkk.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163flqraqbp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163kcljobhg.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163mzgtmskr.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163svkgrqio.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163hyvdlsdt.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fpkhicbn.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163wfyuafip.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163eogthrxc.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jbmkbslm.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163gcevkuvv.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163uqcpjngj.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163mefjjeqe.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163yvquemwf.html

[A14] 注释写法
来源：http://www.sxryk.cn/163nhbtjwoo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163faonacqa.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ccccwiyl.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ppmqbxec.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163plwqrqel.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163arbojdun.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ndrddnkl.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163pugxhkdx.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nkhyahhq.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163hyodwfkx.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163ihywxxyx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163onkssupa.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rdessluv.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163twzclnsa.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163pylkqqyh.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163hcivocxj.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163nosnfetp.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jsoxntoc.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ykxtgzyn.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163fppjtomh.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163yynnhewk.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163orajzuoc.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ouawcpsu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163yhozdbpf.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163wakvbmkv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163iirxiyso.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163qpbyxuiz.html

[A17] 位运算
来源：http://www.sxryk.cn/163pdldoenz.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zqraczvy.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163numeaomp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ceyazeot.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ohyqkuge.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163acruwjih.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dnbrinhm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163muxlhwfi.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lgwkcfln.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163diyirgbe.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163hpzmfgts.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163udbowgmd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163jesjbjfc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163yilcokdg.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163hzauzbqq.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163znycpelk.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163alnguahc.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163awbuiioi.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163dxrtfemz.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163tsgxobsr.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163qhkibagi.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ejdkaqpn.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163sszdipfx.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163iqbpnxel.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163lpefxbbd.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163xapejqit.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163zwyfkwir.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163mkvtkozs.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163jumonfaa.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163fpdhvelj.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163kopdlxft.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163kuqiwntk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163yhwdpeaz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163ltdkdhdj.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163wawexbzv.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163tafsutfh.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163fpmxpleg.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163jdctqxgs.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163quvaoyuj.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163dyidracc.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163asowrohn.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rvafymmk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163cclklvwx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163moxbfhlk.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163pvpyyfih.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163laqoeeft.html

Py:   len(s)
来源：http://www.xuanzx.com/163jlupnesm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163rkmmplzg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163zyefbosq.html

TS:   s.length
来源：http://www.aibaodan.cn/163pkgsebcj.html

Java: s.length()
来源：http://www.xuanzx.com/163lpqljzam.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163iosibqyv.html

Ruby: s.length
来源：http://www.sxryk.cn/163yjsupjme.html

C#:   s.Length
来源：http://www.xuanzx.com/163pgqzuvwl.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163xqcbzloz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163boqlesuq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ymulbtls.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fpfjafja.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rwcyahmy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qdqhxrac.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ctnzuwep.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163blhruqzi.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163fusaqiru.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163jimglwrb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163obbjldcs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163exjzdksy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tljuqvhu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ngfslhxi.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xqjzhilc.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hcbapqij.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163gdvfvaov.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163tftevamq.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163rgofconu.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163dabdfety.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163hxsiwagb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163dfrhpzqs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163iysikxob.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163qrafoakx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rqlvgoux.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163gmnpdioc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163zjkifzht.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lkqcgtwc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ujehvdpm.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163wuzpsdzs.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163inbayvll.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163sbahszan.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ihtldppr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163mxoekpep.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163fulpkxjb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163edmgrldk.html

================================================================================
来源：http://www.aibaodan.cn/163eeltnhms.html

B. 流程控制
来源：http://www.xuanzx.com/163niocvopg.html

================================================================================
来源：http://www.aibaodan.cn/163ltzxvcgg.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163crzwpnzp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fdfmtkwm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163oefvqyxp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163eytqemeq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ovgymejr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163unsvxebn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163tsegzbco.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163kaeuabti.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cfsondav.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163mexfrtbs.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163sxazmngv.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vxjpkynz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ufedpodk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nqerksfe.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163unmvrdak.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163dzbechqc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163vzphqpeh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163seqdqjnj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kfuzxjrl.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xqfzrckn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163uivmlkxi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bnolhuhw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163miwkbxeu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163cjullyjk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163sgufobcs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163fxtwktuu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163geurnmkd.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163pekhsibi.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163fhvqwvzq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163xdwgcaow.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163paaeenvl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hivsluth.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163vklgibgz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163pmdxocci.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163dseccenl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163sadzwshk.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ponxjkvf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163hbkkfnmp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163emqclocq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hacsocdj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wsnohumz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ehaxhdfe.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163cgkubbhw.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ktewfotw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bulvyuol.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xyveimbg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ewuhueav.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163kgoqysnv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jkxeuuoj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rinrnmch.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163exvkzafo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163txthwuio.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163kpwyvaue.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163tyqovshg.html

[B07] while 循环
来源：http://www.aibaodan.cn/163zavykbkj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xxgjuhjs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163stmpikuk.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zzktqxsr.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aaianhke.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hanrehtb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163kmwoffrx.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wkgmbmdw.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dmccqcqx.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163hhhgvfuf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163qtdtktzj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163rxiwmiro.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xbpsisqf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uurhmevg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hllyyzlv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163edkvquwt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163zzrsjrih.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vkesjoiq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163xkjjfnhn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163lisnpwjm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jisohmsw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xydrghdu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yttcuanm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163srzjosmw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163uplmgulj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163syslsrdn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163advqjtag.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163pnjurcfv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ihorgcoc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163royofogq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ubyhktkw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163psnhetvf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163efcztcmn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163seovtizu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163kugteshm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163gjjxetig.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ugkdzypi.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163dkrjngjz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mjdenutp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xbqkcayo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qdfqonod.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163kbhipdfh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163fabxrfzr.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jdvuegrx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163leuietbj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ingczuwn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163rchnqsyu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fztdtddl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163outsavav.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ctsymxoz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163luixzqsc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zeyangio.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163smeknwpc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163mevutnkz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163aispbrkh.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163genfcuiz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qlnfzxzs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163unnbgmww.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mfexuzhs.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tewaytfp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163iafamyym.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163zinrjick.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163mbaqzkhl.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wdhxnslq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163psbwtbqy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163uktofile.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rrbpuxii.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dnsqrnfe.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163evxxmnxk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163oprlxypt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kdnmyimd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163musywgdp.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163gfnvyagv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bwnohcit.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zcxnsdvr.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163zwlyxcog.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ntwyonke.html

Java: a && b || !c
来源：http://www.sxryk.cn/163bntuoyre.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163stryhgoe.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fredzsge.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dzmhjcqi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wwoczxsg.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uqssrloz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163kqdwfzcy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163woxticyk.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163yikrdrse.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fqbuhowg.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163unhjlirt.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163mthoijlv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163tcwawlsd.html

================================================================================
来源：http://www.aibaodan.cn/163uoywakcf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vkbmmjfx.html

================================================================================
来源：http://www.aibaodan.cn/163lmxomejk.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dzrpirac.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163cgpetxbr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xvddrpvb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163wjzivwze.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rxawfkge.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mdmoeuqc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pqzxgbhf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163wqediurz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pnyplday.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tlmahkvq.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163gnmnkjiy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163opyfttcn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ilrbxskt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163qhfglnct.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163visegexs.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163jjxsgume.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163azjgwrpt.html


<!-- 参考信息 -->