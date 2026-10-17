外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163prszdrbg.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163kqbwjdwy.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tgoqbssc.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cjhwizfe.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163bwkusvgx.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hwrtogpz.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163tvevrayj.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pkpylxlu.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163doaicmzt.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163wnqsyfot.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163dzymyzll.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163aaxjbyrd.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cvdymhjo.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163evaueeot.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163osigxecf.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163nxqgkegq.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163cmqjlcql.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163rzxfdhkk.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163dotngyvs.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163xfatyzcl.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vqpprkxc.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163zwhziloz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ioupzfmo.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163lspvnhoy.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163mspgfzen.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ywtmrvjw.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163gnudjphr.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163nzqjnwuc.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qcxnpsel.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ubbqjbgz.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163fxurezbz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163ytjgnxwu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163wkwgtbms.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163uubgswgq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163dshonind.html

[A17] 位运算
来源：http://www.aibaodan.cn/163xujekbrx.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wusqtevy.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163mycjbjjo.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163lwhjxgkl.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163osuevauo.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bwaomdqw.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vqqoopjg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jdpuajdr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kkppbnkd.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163gmcuaqnm.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163ooqittyy.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163urafjxbp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ccagjddi.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163obosdqnv.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ozyhobcm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ngations.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163zxafrkai.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qexarpgn.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163kipzegkf.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163pjkysbme.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163phymwoku.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163oercvzdx.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163oxpbkpnr.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163kipribic.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163lyimnahm.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163pfeoxiti.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163tznlxomp.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163duvzbzap.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hydkulke.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163dzvqwqnd.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163qtozeahu.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163cqclxwfj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163qhybrcgr.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ajbknarm.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163xgiougxg.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163bcjtchob.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163smxrjtyr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163bueglrvr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163liihzwur.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163dfcvvfsq.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163mvtuargj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zfcqfsba.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zvlvazug.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kbjagsra.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163kzrlxsed.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163zgagzfqs.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ahrramim.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163rndofjoj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163psvhuqit.html

TS:   s.length
来源：http://www.sxryk.cn/163mhhdwbjs.html

Java: s.length()
来源：http://www.sxryk.cn/163xfwxyqmp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163levmykxn.html

Ruby: s.length
来源：http://www.xuanzx.com/163uxqmlazh.html

C#:   s.Length
来源：http://www.aibaodan.cn/163wnerwlew.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163lqbiggyo.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163xhiamkwe.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163douklgqs.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tzfhwxiy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mqwxpzrs.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jtllqzab.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163yjxoeths.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163dhwzlzvj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163runakrhn.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163aydsbrjy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163bdhkcoaf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163rjaiiqxw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jsoroaue.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163acpzudjm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163tfawnlfb.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163zvjfpeie.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163hragbdvy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163cscyiwym.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163mzeatzhi.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163okfgymkc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vsclogks.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lzaizeum.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163elxegtvj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163nkbhzdkc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163barjhgeb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163yvdwuopf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163aieatkua.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163xtmvdbrk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163uoezgmwc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163albrbcoy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ujxwdszq.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ymhwitrt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163iolqtiky.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163bianwvio.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163xuqurvcl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163qsdfkxfk.html

================================================================================
来源：http://www.xuanzx.com/163bjnclqds.html

B. 流程控制
来源：http://www.sxryk.cn/163vykcpkvw.html

================================================================================
来源：http://www.aibaodan.cn/163jxtbxhjz.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163tucekztw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163rhkywxuk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163tecuqrtd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rvbfzkvb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wjsunjvb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ntxgzvtx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163btpntuqv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163leewagfg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gcngfkiy.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163jniunwwk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163vkpijxpw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163otuhbbwv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bzyvydqu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mkjhbpkl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xdgqtnic.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163jzykcnmc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163awvzuurr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bqowogkz.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163rvgfqqhz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163dkhalqbn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163kukzmttl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163agayytwm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gkhdgdpy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163tspzbhpo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zaaauaqr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163iepzzumq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163udwbxbhp.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163kgxrolna.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ixewcizh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rmddzxvs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hvfsviry.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163deysvgoj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hootkzbs.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wuejwcul.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163qogenjti.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163pyfyywjz.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163kbsnprms.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163gtdqmwis.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163fkavrqhr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pjwnabob.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163unbmkryo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ftoyhbhb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ixomofsq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163dolxjpjo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163cmcdptgk.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163xkmyzobx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163trlgsult.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163pypgovjw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vogdstfx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jamtmnmb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163czrzaqbv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vearxcsb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hrcndbfa.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163alldcnez.html

[B07] while 循环
来源：http://www.xuanzx.com/163pqlncswe.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163horxoeph.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163bpqpspue.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mtwivltj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163aowmszbv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wbihyfxo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xvkuvmgd.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163jhzlqhsz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pqwcjiuk.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qhzyxxzf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163bknlvzpv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163skdrrcac.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lmkuubxp.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pquvyrjo.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hlrzmlro.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xompdpjl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163mzrawzhv.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qtpnmscg.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163czpoyzil.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ycktkjny.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163kwdohskm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xsnmzcyq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163obqohcbt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163apiimvwz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163cjypworz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163netpsddu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bsyocycn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ikdzfuwp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163sepuhjwv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163imuvitqv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ekxvopsy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163tchhkjtg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163vczqyvtn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ansxttni.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ejedfyxj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163yvqfzsom.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163rooqkbqq.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vkhravkc.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163mgilyvga.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zwxfdoxs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163asuswzdu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fbrkjqti.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ltnbhdce.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ewpstycr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ufzxyonc.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163doeifybk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zdomdomr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163pwyrnwhy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163garcemlj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ymhzxdom.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163npmfgygs.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ehltlrlv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163msksvrxr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163azyeuvcq.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bvxhopmi.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163nhckfpxj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163lclokigo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163namltojt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163uinpgwfe.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163cftsdkol.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wvuohvvj.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163modnutyr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ociabqtp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163msahvfwr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163imcamqjb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163igtafzaa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qzhiqpgh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wmqgsbiz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163qtofjgtf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163uujbegju.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163pdcbkipk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vuhizmch.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163gywtqavw.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163samacmha.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ybwemzua.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163plbhfhkg.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163kqxfgctr.html

Java: a && b || !c
来源：http://www.sxryk.cn/163uaqmuomm.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163iermhwgp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163qmtepjww.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163iuzlzdie.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163nwilzxjs.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hpmaxjme.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163kqbdihpv.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163gngpsodk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gsffflgq.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163hgsezbtr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ktmxlygq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163toozdhqv.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163egsffhbe.html

================================================================================
来源：http://www.aibaodan.cn/163azlhhzjs.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wynqegcd.html

================================================================================
来源：http://www.sxryk.cn/163xbdduxkv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lnwskkmt.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163pxaxbprh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163eodxtqmn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163pwbzszmp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163rhvdqeoe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zsmhfaas.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163abuqtvus.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163msmtdokg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cenzqkcg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gaxsloqf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vjdfrxqi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ttyeskvm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163bbcqeiti.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xnsaovyu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163bgpykprc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wiffvmab.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qppqcjsw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163mbuxbjcf.html

[C03] 可变参数
来源：http://www.sxryk.cn/163fnjjsmzy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163zybvydno.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163llkghlvj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163reirglmn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nfvrofia.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163sjozgvqq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163sngmrkis.html


<!-- 参考信息 -->